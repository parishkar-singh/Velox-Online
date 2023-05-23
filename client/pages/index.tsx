import Image from 'next/image'
import {Inter} from 'next/font/google'
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Product from "@/components/Product";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <main className={`flex flex-col no-scrollbar`}>
            <Navbar navItems={['Home','Orders','Carts','About']}/>
            <Header/>
            <Product/>
        </main>
    )
}
