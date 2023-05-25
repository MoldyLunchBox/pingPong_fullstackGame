import { WebSocketGateway, WebSocketServer, OnGatewayInit, ConnectedSocket, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Body, Engine, World, Bodies, Composite } from 'matter-js';
import WebSocket from 'ws';

interface measurements{
    divHeight: number,
    divWidth: number,
    ball:{ x: number, y: number, radius: number},
    wallBottom:{ x: number, y: number, width: number, height: number },
    wallTop:{ x: number, y: number, width: number, height: number },
    wallLeft:{ x: number, y: number, width: number, height: number },
    wallRight:{ x: number, y: number, width: number, height: number },
    leftPaddle:{ x: number, y: number, width: number, height: number },
    rightPaddle:{ x: number, y: number, width: number, height: number },

}

class matterNode {
    private engine: Engine;
    private world: World;
    private ball: any;
    private leftPaddle: any;
    private rightPaddle: any;
    private paddles: {}  // contains the actual matter-js objects for the paddles
    private availablePaddles = ['left', 'right']; // List of available paddles
    private server: any
    public roomId: string
    private obj: measurements  // window measurements, and positions of some objects
    private intervalId :  NodeJS.Timeout | null;
    private score = {left: 0, right: 0}

    constructor(server: any, roomId: string, obj: measurements ) {
        this.roomId = roomId
        this.server = server;
        // cords and measurements of objects
        this.obj = obj
        // this.translateCords() // translate the cords from frontend screen to backend screen
        obj = this.obj
        this.engine = Engine.create();
        this.world = this.engine.world;
        this.engine.gravity = {
            x: 0,
            y: 0,
            scale: 0
        };
        this.ball = Bodies.circle(this.obj.ball.x, this.obj.ball.y, this.obj.ball.radius, { label: "ball", restitution: 1.1, friction: 0, frictionAir: 0, density: 10 });
        this.leftPaddle = Bodies.rectangle(this.obj.leftPaddle.x, this.obj.leftPaddle.y, this.obj.leftPaddle.width, this.obj.leftPaddle.height, { label: "leftPaddle", isStatic: true });
        this.rightPaddle = Bodies.rectangle(this.obj.rightPaddle.x, this.obj.rightPaddle.y, this.obj.rightPaddle.width, this.obj.rightPaddle.height, {label: "rightPaddle", isStatic: true })
        this.paddles = { left: this.leftPaddle, right: this.rightPaddle }
        var roof = Bodies.rectangle(obj.wallTop.x, obj.wallTop.y, obj.wallTop.width, obj.wallTop.height, {
            isStatic: true,
            render: {
                fillStyle: 'blue'
            }
        });
        var wallLeft = Bodies.rectangle(obj.wallLeft.x, obj.wallLeft.y, obj.wallLeft.width, obj.wallLeft.height, {
            label:"leftwall",
            isStatic: true,
            render: {
                fillStyle: 'green'
            }
        });
        Body.setVelocity(this.ball, { x: 5, y: 6 });

        var ground = Bodies.rectangle(obj.wallBottom.x, obj.wallBottom.y, obj.wallBottom.width, obj.wallBottom.height, {
            isStatic: true,
            render: {
                fillStyle: 'red'
            }
        });
        var wall = Bodies.rectangle(obj.wallRight.x, obj.wallRight.y, obj.wallRight.width, obj.wallRight.height, {
            isStatic: true,
            render: {
                fillStyle: 'green'
            }
        });

        World.add(this.world, [this.ball, wall, wallLeft, this.leftPaddle, this.rightPaddle]);
        // Start the engine and update the ball's position
        Engine.run(this.engine);

    }

     sendBallPosition() {

        // checking if there are users connected to the socket if false, the game instance is shut down and cleqred
        if (this.server.engine.clientsCount) {
            this.intervalId =  setInterval(() => {
                if (this.availablePaddles.length) {
                    // allow computer to control the free paddle
                    const availablePaddle = this.availablePaddles[0]
                    Body.setPosition(this.paddles[availablePaddle], { x: this.ball.position.x, y: this.paddles[availablePaddle].position.y });
                    this.server.to(this.roomId).emit(availablePaddle, { x: this.ball.position.x, y: this.paddles[availablePaddle].position.y });
                }
                // emit the ball position to the channel
                this.server.to(this.roomId).emit('ballPosition', { x: this.ball.position.x, y: this.ball.position.y });

                // limit the speed of the ball so it doesnt leave the boundries 
                const speed = Math.sqrt(this.ball.velocity.x ** 2 + this.ball.velocity.y ** 2);
                if (speed > 20) {
                    // Calculate the scaling factor to adjust the velocity
                    const scalingFactor = 20 / speed;
                  
                    // Scale down the velocity to match the maximum speed limit
                    this.ball.velocity.x *= scalingFactor;
                    this.ball.velocity.y *= scalingFactor;
                    Body.setVelocity(this.ball, { x: this.ball.velocity.x * scalingFactor, y: this.ball.velocity.y * scalingFactor });
                  }
        
                  // put the ball back in the middle after a player scored
                if (this.ball.position.y < 0) {
                    Body.setVelocity(this.ball, { x: 0, y: 0 });
                    
                    Body.setPosition(this.ball, { x: this.obj.divWidth / 2, y: this.obj.divHeight / 2 });
                    this.score.right++

                    this.server.to(this.roomId).emit('score', { score: this.score});
                    // after seconds launch the ball again
                    setTimeout(() => {
                    Body.setVelocity(this.ball, { x: 5, y: 6 });
                  }, 5000);
                }
                else if (this.ball.position.y > this.obj.divHeight) {
                    Body.setVelocity(this.ball, { x: 0, y: 0 });

                    Body.setPosition(this.ball, { x: this.obj.divWidth / 2, y: this.obj.divHeight / 2 });
                    this.score.left++
                    setTimeout(() => {
                        Body.setVelocity(this.ball, { x: 5, y: -6 });
                      }, 5000);
                    this.server.to(this.roomId).emit('score', { score: this.score});


                }
            }, 1000 / 60);
        }
    }
    handleConnection(client: Socket) {
        console.log("someone got in")
        console.log(this.server.engine.clientsCount)
        const availablePaddle = this.availablePaddles.shift(); // Get the next available paddle
        if (availablePaddle) {
            client.emit('paddleAssigned', availablePaddle); // Send the paddle assignment to the client
            client.data.paddle = availablePaddle; // Set the paddle assignment to the client
            client.on(availablePaddle, (data: WebSocket.Data) => {
                Body.setPosition(this.paddles[availablePaddle], { x: data.x, y: data.y });
                // Send the paddle assignment to the client
                this.server.to(this.roomId).emit(availablePaddle, { x: data.x, y: data.y });
            });
            client.on("mouseUp", (data: WebSocket.Data) => {
                Body.setPosition(this.paddles[availablePaddle], { x: data.x, y: data.y });
                // Send the paddle assignment to the client
                Body.setVelocity(this.ball, { x: 5, y: 0 });
                this.server.to(this.roomId).emit(availablePaddle, { x: data.x, y: data.y });
            });


        } else {
            console.log("joining user  forced to disconnect")
            client.disconnect(); // No available paddles, disconnect the user
        }
    }

    handleDisconnect(client: Socket) {
        console.log("user left and his paddle is:", client.data.paddle)
        if (client.data !== undefined)
            this.availablePaddles.push(client.data.paddle)
        console.log(this.availablePaddles)
    }
    clearGame() {
        console.log("clearing game instance",this.intervalId)
        clearInterval(this.intervalId)
        console.log("clearing game instance",this.intervalId)

        World.clear(this.world);
        Engine.clear(this.engine);
        console.log(this.world)
    }

}

@WebSocketGateway(3008, { cors: "*" })
export class GameGateway implements OnGatewayInit {
    @WebSocketServer() server;
    private worlds = {};
    private world: matterNode
    constructor() { }
    afterInit() {
        this.worlds = {};
        //     console.log("server")
        //     console.log(this.server)
        //     this.MatterNode = new matterNode(this.server)
        //     this.MatterNode.sendBallPosition()

    }


    @SubscribeMessage('joinRoom')

    handleJoinRoom(@MessageBody() data: { roomId: string, obj: measurements }, @ConnectedSocket() client: Socket) {
        const { roomId } = data;
        console.log("user joined room", roomId, "and page height is", !this.worlds[roomId] == false)
        if (!this.worlds[roomId]) {
            console.log("new room")
            this.world = new matterNode(this.server, roomId, data.obj);
            this.worlds[roomId] = this.world
            this.world.sendBallPosition()
        }
        else
            this.world = this.worlds[roomId];

        client.join(roomId); // add the client to the specified room
        this.world.handleConnection(client)

    }

    handleConnection(client: Socket) {
        console.log("user connected handle connection.")
    }

    handleDisconnect(client: Socket) {
        this.world?.handleDisconnect(client);
        if (!this.server.engine.clientsCount) {
            this.world.clearGame()
            console.log("deleting room")
            const roomId = this.world.roomId
            delete this.worlds[roomId]
            this.worlds[roomId] = null
        }
    }


}