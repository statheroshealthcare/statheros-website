"use client";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Products } from "../components/Products";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import BackToTopButton from "@/components/BackToTopButton";

export default function HomePage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000); // simulate loading
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-[#e0f2ff] to-[#f0f9ff]">
                <div className="relative flex items-center justify-center w-28 h-28">
                    <div className="absolute w-28 h-28 rounded-full border-4 border-[#0c448d]/10 border-t-[#038b8b] animate-spin-slow shadow-lg"></div>
                    <span className="text-6xl font-semibold font-serif text-[#0c448d] animate-pulse-fast">S</span>
                </div>
                <span className="mt-3 text-2xl sm:text-4xl font-semibold text-[#0c448d]/70 tracking-widest animate-fade-in uppercase">
                    Statheros Health Care
                </span>
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <Hero />
                <About />
                <Products />
                <Contact />
            </main>
            <Footer />
            <BackToTopButton />
        </div>
    );
}
