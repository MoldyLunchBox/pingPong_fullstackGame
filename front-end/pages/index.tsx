import Image from 'next/image'
import { Inter } from 'next/font/google'
import {Header, Footer} from './components/index'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Header />

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
     
    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      <Link href="/Home/Home">Connect with Intra <span>42</span></Link>
  </span>
</button>
<h2>this is home page</h2>


    <Footer />
    </main>
    </>
  )
}