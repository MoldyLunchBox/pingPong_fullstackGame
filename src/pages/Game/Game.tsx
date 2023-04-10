import Link from 'next/link';
import Header from '../comp/Header/Header';
import Footer from '../comp/Fouter/Fouter';

const Game = () :JSX.Element =>{
    return (
        <>
        <Header />
        <main className = "flex min-h-screen flex-col items-center justify-between p-24">

        <h2>page of game</h2>
        <Footer />
        </main>
        </>
    );

};

export default Game;