
import Link from 'next/link';
import Header from '../comp/Header/Header';
import Footer from '../comp/Fouter/Fouter';

const Chat = () :JSX.Element =>{
    return (
        <>
        <Header />
        <main className = "flex min-h-screen flex-col items-center justify-between p-24">

        <h2>page of chat</h2>
        <Footer />
        </main>
        </>
    );

};

export default Chat;