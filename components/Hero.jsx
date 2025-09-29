"use client"; // ✅ Must be the very first line

import Image from "next/image";
import { FaArrowRight, FaShieldAlt } from "react-icons/fa";
import "./hero.css";

export function Hero() {
    return (
        <section
            id="home"
            className="bg-gradient-to-br from-gr-50 to-green-400/10 scroll-mt-24 py-10 sm:py-14 lg:py-24 px-8 sm:px-20 overflow-hidden"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
                    {/* Left Content */}
                    <div className="space-y-5 lg:space-y-7">
                        <span
                            className="inline-block px-4 py-2 bg-[#0c448d]/7 text-[#0c448d] rounded-full 
                        text-sm font-normal tracking-wide animate-zoom-in "
                        >
                            Statheros Health Care
                        </span>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl capitalize font-semibold leading-snug text-[#0c448d] text-balance animate-slide-up">
                            STABILIZE <span className="text-[#038b8b] animate-pulse-fast">HEALTH</span>
                        </h1>

                        <p className="text-base slabo font-sans sm:text-lg text-indigo-900/60 leading-relaxed text-pretty max-w-2xl animate-fade-in">
                            A growing force in the pharmaceutical world, built on trust, quality, and innovation. We craft
                            medicines that combine scientific excellence with genuine care.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <button
                                onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
                                className="inline-flex items-center justify-center px-5 py-2.5 bg-[#0c448d]/90 text-white text-sm font-semibold rounded-md hover:bg-white hover:text-[#0c448d] border-2 cursor-pointer border-[#0c448d] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            >
                                Explore Our Products
                                <FaArrowRight className="ml-2 h-4 w-4 animate-wiggle" />
                            </button>

                            <button
                                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                                className="inline-flex items-center justify-center px-5 py-2.5 border-2 border-[#0c448d] text-[#0c448d] text-sm font-semibold rounded-md hover:bg-[#0c448d] cursor-pointer hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            >
                                <FaShieldAlt className="mr-2 h-4 w-4" />
                                Our Mission
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative mt-6 lg:mt-0">
                        <div className="relative z-10 animate-float">
                            <Image
                                src="/healthcare-professionals-doctor-pharmaceutical.jpg"
                                alt="Medical laboratory research"
                                width={600}
                                height={500}
                                className="rounded-2xl shadow-2xl w-full h-[260px] sm:h-[360px] lg:h-[460px] object-cover"
                            />
                        </div>

                        {/* Animated Blobs */}
                        <div className="absolute -bottom-6 -left-6 w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 bg-green-300/30 rounded-full animate-orbit"></div>
                        <div className="absolute -top-6 -right-6 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-green-200/30 rounded-full animate-orbit-reverse"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
