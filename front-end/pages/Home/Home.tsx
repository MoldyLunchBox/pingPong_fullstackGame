
import Link from 'next/link';
import {Header, Footer} from '../components/index';

const Home = () :JSX.Element =>{
    return (
        <>
        <Header />
            <main className = "flex min-h-screen flex-col items-center justify-between p-24">
                <Link href="/Game/Game">
                    <button type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                    Game
                    
                    </button>
                
                </Link>
                <Link href="/User/User">
                <button type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                User

                </button>
                </Link>
                <Link href="/Chat/Chat">
                <button type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                Chate
                </button>
                </Link>
            <Footer />
            </main>
        </>
    );
}


export default Home;