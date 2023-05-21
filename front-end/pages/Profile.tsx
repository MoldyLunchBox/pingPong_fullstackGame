import Image from "next/image";
import { Scrollbar } from "smooth-scrollbar/interfaces";
const Profile = ()=>{
    const img = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fsea.ign.com%2Favatar-generations&psig=AOvVaw3ds_D-lEUN4OLrM0cysOpO&ust=1684638550456000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPC_6uT1gv8CFQAAAAAdAAAAABAE";
    return (
        <div className=" parent h-screen bg-gradient-to-r from-green-400 to-blue-500 grid grid-cols-6 p-36 sm:px-40 lg:px-44 xl:p-60 xl:px-80">
            <div className="bg-red-500 col-span-2 row-span-6 m-2  rounded-3xl flex flex-col  max-h-[calc(100vh-500px)">
                <div className="bg-white col-span-6 row-span-2 m-2 flex flex-col items-center rounded-lg h-40 lg:h-60 sm:h-32">
                <Image className="bg-white w-14 h-14 rounded-full z-10 "  
                        alt="av" src="https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg"
                        width={500} height={500}/>
                <div className="bg-black relative -top-4 z-0 w-11/12 rounded-xl h-full text-white flex justify-center ">
                        <div className="m-4 font-mono"> Mohamed Haddaoui</div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className=" bg-blue-300 col-span-6 row-span-2 m-2 rounded-lg  text-white h-full  overflow:hidden grid  grid-cols-2 grid-rows-2 gap-2"
               >
                   <div className="col-span-2 row-span-1 bg-black rounded-xl m-2 ">
                    <div className=" flex justify-center m-2 font-mono ">History</div>
                    <div className=" text-xl m-4  overflow-y-auto scrollbar-thin scrollbar-track-violet-500 scrollbar-thumb-white "
                    style={{maxHeight:'calc(100vh - 1000px)'}}>
                       
                        <div className="flex flex-row justify-around ">lose vs mhaddaou</div>
                        <div className="flex flex-row justify-around ">lose vs mhaddaou</div>
                        <div className="flex flex-row justify-around ">lose vs mhaddaou</div>
                        <div className="flex flex-row justify-around ">lose vs mhaddaou</div>
                        <div className="flex flex-row justify-around ">lose vs mhaddaou</div>
                        <div className="flex flex-row justify-around ">lose vs mhaddaou</div>
                        <div className="flex flex-row justify-around ">lose vs mhaddaou</div>
                        <div className="flex flex-row justify-around ">lose vs mhaddaou</div>
                        <div className="flex flex-row justify-around ">lose vs mhaddaou</div>
                        <div className="flex flex-row justify-around ">lose vs mhaddaou</div>
                        <div className="flex flex-row justify-around ">lose vs mhaddaou</div>
                        <div className="flex flex-row justify-around ">lose vs mhaddaou</div>
                        <div className="flex flex-row justify-around ">lose vs mhaddaou</div>
                        <div className="flex flex-row justify-around ">lose vs mhaddaou</div>
                        <div className="flex flex-row justify-around ">lose vs mhaddaou</div>
                        <div className="flex flex-row justify-around ">lose vs mhaddaou</div>
                        <div className="flex flex-row justify-around ">lose vs mhaddaou</div>
                        <div className="flex flex-row justify-around ">lose vs mhaddaou</div>
                        <div className="flex flex-row justify-around ">lose vs mhaddaou</div>
                        <div className="flex flex-row justify-around ">lose vs mhaddaou</div>
                        <div className="flex flex-row justify-around ">lose vs mhaddaou</div>
                        <div className="flex flex-row justify-around ">lose vs mhaddaou</div>
                        <div className="flex flex-row justify-around ">lose vs mhaddaou</div>
                        <div className="flex flex-row justify-around ">lose vs mhaddaou</div>
                        <div className="flex flex-row justify-around ">lose vs mhaddaou</div>
                        <div className="flex flex-row justify-around ">lose vs mhaddaou</div>
                        <div className="flex flex-row justify-around ">lose vs mhaddaou</div>
                        <div className="flex flex-row justify-around ">lose vs mhaddaou</div>
                        <div className="flex flex-row justify-around ">lose vs mhaddaou</div>
                        <div className="flex flex-row justify-around ">lose vs mhaddaou</div>
                        <div className="flex flex-row justify-around ">lose vs mhaddaou</div>
                        <div className="flex flex-row justify-around ">lose vs mhaddaou</div>
                        <div className="flex flex-row justify-around ">lose vs mhaddaou</div>
                        
                        <div>lose</div>
                        
                    </div>


                   </div>
                   <div className="bg-violet-400 col-span-2 m-2 rounded-xl"></div>
                </div>
            </div>
            <div className="bg-white col-span-4  m-2 rounded-2xl grid grid-cols-2 grid-rows-2 h-11/12">
                <div className=" h-1/2 rounded-3xl flex justify-around items-center col-span-2 ">
                <button className="">Connect</button>
                <button className="">Message</button>
                </div>
                <div className=" h-1/2 bg-black rounded-3xl text-center text-white flex justify-center items-center col-span-2" >
                    level
                </div>
            </div>
            <div className="bg-violet-500 col-span-4 row-span-4 m-2 rounded-3xl grid grid-cols-4 grid-rows-4 parent  ">
                <div className="bg-red-500 col-span-2 row-span-2 m-2 rounded-3xl"></div>
                <div className="bg-green-500 col-span-2 row-span-2 m-2 rounded-3xl scroll-auto	">
                    <div>lll</div>
                    <div>lll</div>
                    <div>lll</div>
                    <div>lll</div>
                    <div>lll</div>
                    
                    <div>lll</div>
                    <div>lll</div>
                    <div>lll</div>
                    <div>lll</div>
                    <div>lll</div>
                </div>
                <div className="bg-blue-500 col-span-2 row-span-2 m-2 rounded-3xl"></div>
                <div className="bg-yellow-500 col-span-2 row-span-2 m-2 rounded-3xl animate"> ll</div>

            </div>
            <div className="bg-black col-span-4 m-2 rounded-3xl grid grid-rows-2 grid-col-2 text-yellow-300">
            <div className="col-span-1 row-span-1 bg-gray-500 rounded-3xl">
                    <div>lkdjf</div>
                </div><div className="col-span-1 row-span-1 bg-red-500 rounded-3xl">
                    <div>lkdjf</div>
                </div>

            </div>

        </div>
    );

}

export default Profile;