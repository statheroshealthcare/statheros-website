"use client";

import { useState } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const menuItems = ["Home", "About", "Products", "Contact"];

    return (
        <header className="bg-white sticky top-0 z-50 shadow-sm px-8 sm:px-20">
            <div className="container mx-auto flex items-center justify-between py-4">
                {/* Logo */}
                <div className="w-32 sm:w-56 h-10 relative">
                    <Image
                        src="/logo-new.jpg"
                        alt="Statheros Health Care Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center space-x-10">
                    {menuItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="relative text-[#0c448d] text-sm font-semibold uppercase tracking-wide group hover:text-[#038b8b] transition-colors duration-300"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#038b8b] group-hover:w-full transition-all duration-300"></span>
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                        className="p-2 rounded-lg text-gray-600 hover:text-[#038b8b] hover:bg-[#e0f7f7] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#038b8b]"
                    >
                        {menuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMenuOpen(false)}
                            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
                        ></motion.div>

                        {/* Menu Panel */}
                        <motion.nav
                            initial={{ y: "-100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-100%" }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                            className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-white/95 to-white/80 backdrop-blur-md shadow-xl py-10 flex flex-col items-center space-y-6 rounded-b-3xl"
                        >
                            {menuItems.map((item, index) => (
                                <motion.a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    onClick={() => setMenuOpen(false)}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-[#0c448d] text-lg font-semibold uppercase tracking-wide py-3 px-8 rounded-full hover:bg-[#038b8b]/10 hover:text-[#038b8b] transition-all duration-300"
                                >
                                    {item}
                                </motion.a>
                            ))}
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}
