import Image from 'next/image'
import {Inter} from 'next/font/google'
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Product from "@/components/Product";
import React from "react";
import HomePage from "@/pages/HomePage";
import Footer from "@/components/Footer";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <main className={`flex flex-col no-scrollbar`}>
            <Navbar navItems={['Home','Orders','Cart']}/>
            <HomePage/>
            <Footer/>
        </main>
    )
}
