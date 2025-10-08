"use client";

import Image from "next/image";
import { FaBullseye, FaHeart, FaCheckCircle } from "react-icons/fa";

export function About() {
    return (
        <section id="about" className="py-16 lg:py-24 bg-gradient-to-tr from-gr-50 to-green-400/10 px-6 sm:px-12 lg:px-20">
            <div className="container mx-auto max-w-7xl">
                {/* Heading */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <span className="inline-block px-4 py-1.5 bg-[#0c448d]/10 text-[#0c448d] rounded-full text-sm font-medium tracking-wide">
                        About Statheros Health Care
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0c448d] mt-4 leading-tight">
                        Building Trust Through Quality & Innovation
                    </h2>
                </div>

                {/* Content Section */}
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Left: Bullet Points */}
                    <ul className="space-y-4" data-aos="fade-right">
                        {[
                            "Statheros Health Care is a growing force in the pharmaceutical world, built on trust, quality, and innovation.",
                            "With a mission to stabilize health and empower lives, we craft medicines that combine scientific excellence with genuine care.",
                            "From life-saving antibiotics to everyday wellness therapies, our portfolio reflects precision, reliability, and a vision to make people physically and mentally fit.",
                            "Supported by strong values and steady growth, STATHEROS is not just about medicines—it’s about creating healthier tomorrows.",
                        ].map((point, i) => (
                            <li
                                key={i}
                                className="flex items-start space-x-3 font-semibold transform transition-transform duration-300 hover:translate-x-2"
                            >
                                <FaCheckCircle className="w-5 h-5 text-[#038b8b] mt-1 flex-shrink-0" />
                                <span style={{ fontFamily: "var(--font-slabo-27px)" }}
                                 className="text-[#0c448d]/80 text-lg font-slabo leading-relaxed text-justify">
                                    {point}
                                </span>
                            </li>
                        ))}
                    </ul>

                    {/* Right: Image */}
                    <div
                        className="relative w-full h-80 lg:h-[420px] rounded-2xl overflow-hidden shadow-lg"
                        data-aos="fade-left"
                    >
                        <Image
                            src="/istockphoto-1266230179-612x612.jpg"
                            alt="Healthcare illustration"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Vision & Mission Cards */}
                <div className="grid sm:grid-cols-2 gap-6 mt-16">
                    {/* Vision */}
                    <div
                        className="bg-gradient-to-r from-[#0c448d]/5 to-[#038b8b]/5 p-6 rounded-2xl border border-[#0c448d]/10 shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-2"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <div className="flex items-start space-x-4">
                            <div className="hidden sm:flex w-14 h-12 bg-[#0c448d] rounded-xl items-center justify-center">
                                <FaBullseye className="w-6 h-6 m-3 text-white" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-[#0c448d] text-xl mb-2">Our Vision</h4>
                                <p className="text-[#0c448d]/70 text-base leading-relaxed">
                                    To ensure comprehensive healthcare for every life through limitless innovative
                                    solutions.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Mission */}
                    <div
                        className="bg-gradient-to-r from-[#038b8b]/5 to-[#0c448d]/5 p-6 rounded-2xl border border-[#038b8b]/10 shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-2"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <div className="flex items-start space-x-4">
                            <div className="hidden sm:flex w-24 h-12 bg-[#038b8b] rounded-xl items-center justify-center">
                                <FaHeart className="w-5 m-3 h-6 text-white" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-[#0c448d] text-xl mb-2">Our Mission</h4>
                                <p className="text-[#0c448d]/70 text-base leading-relaxed">
                                    At Statheros, our mission is to stabilize health and enhance life by delivering safe,
                                    effective, and affordable medicines with uncompromising quality.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
