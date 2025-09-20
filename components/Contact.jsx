"use client";

import { useState } from "react";
import { FaBuilding, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from "react-icons/fa";

export function Contact() {
    const [status, setStatus] = useState("idle");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            const res = await fetch("https://formspree.io/f/xnnbedjj", {
                method: "POST",
                body: data,
                headers: { Accept: "application/json" },
            });

            if (res.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    // Phone input handler
    const handlePhoneInput = (e) => {
        let value = e.target.value;

        // Always start with +91
        if (!value.startsWith("+91")) {
            value = "+91" + value.replace(/[^0-9]/g, "");
        }

        // Extract only digits after +91 and limit to 10
        const digits = value
            .replace("+91", "")
            .replace(/[^0-9]/g, "")
            .slice(0, 10);

        e.target.value = "+91" + (digits ? " " + digits : "");
    };

    // Form inputs
    const inputFields = [
        { id: "firstName", label: "First Name", type: "text", placeholder: "Enter your first name", required: true },
        { id: "lastName", label: "Last Name", type: "text", placeholder: "Enter your last name", required: true },
        { id: "email", label: "Email", type: "email", placeholder: "your.email@example.com", required: true },
        {
            id: "phone",
            label: "Phone",
            type: "tel",
            placeholder: "+91 XXXXX XXXXX",
            required: false,
            onInput: handlePhoneInput,
            className:
                "w-full px-4 py-2 border border-[#0c448d]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#038b8b] focus:bg-[#038b8b]/5 transition-colors duration-200 text-[#0c448d] placeholder-[#0c448d]/50",
        },
    ];

    // Inquiry options
    const inquiryOptions = [
        { value: "products", label: "Product Information" },
        { value: "distribution", label: "Distribution Partnership" },
        { value: "healthcare", label: "Healthcare Provider Inquiry" },
        { value: "quality", label: "Quality & Safety" },
        { value: "business", label: "Business Collaboration" },
        { value: "other", label: "Other" },
    ];

    // Contact info
    const contactDetails = [
        {
            icon: <FaBuilding className="w-5 h-5 text-[#0c448d]" />,
            title: "Office Address",
            content: (
                <p className="text-[#0c448d]/70 text-sm leading-relaxed">
                    6/843 Kallumpurath, Perinad
                    <br />
                    Near MES School, Elampalloor
                    <br />
                    Kundara, Nedumpana
                    <br />
                    Kollam, Kerala 691501
                </p>
            ),
            bg: "bg-[#0c448d]/10",
        },
        {
            icon: <FaPhone className="w-5 h-5 text-[#038b8b]" />,
            title: "Phone Numbers",
            content: (
                <div className="space-y-1">
                    <a
                        href="tel:+919746963335"
                        className="text-[#0c448d]/70 text-sm hover:text-[#038b8b] transition-colors"
                    >
                        +91 97469 63335
                    </a>
                    <p className="text-[#0c448d]/70 text-sm">+91 97463 334</p>
                </div>
            ),
            bg: "bg-[#038b8b]/10",
        },
        {
            icon: <FaEnvelope className="w-5 h-5 text-[#0c448d]" />,
            title: "Email",
            content: (
                <a
                    href="mailto:statheroshealthcare@gmail.com"
                    className="text-[#0c448d]/70 text-sm hover:text-[#038b8b] transition-colors"
                >
                    statheroshealthcare@gmail.com
                </a>
            ),
            bg: "bg-[#0c448d]/10",
        },
        {
            icon: <FaClock className="w-5 h-5 text-[#038b8b]" />,
            title: "Business Hours",
            content: (
                <p className="text-[#0c448d]/70 text-sm leading-relaxed">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 9:00 AM - 2:00 PM
                    <br />
                    Sunday: Closed
                </p>
            ),
            bg: "bg-[#038b8b]/10",
        },
    ];

    return (
        <section id="contact" className="py-16 lg:py-24 bg-gray-50 px-6 sm:px-12 lg:px-20">
            <div className="container mx-auto max-w-7xl">
                {/* Heading */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0c448d] mt-4 leading-tight">
                        Connect With Our Healthcare Experts
                    </h2>
                    <p className="text-lg sm:text-lg text-[#0c448d]/70 max-w-3xl mx-auto mt-2 leading-relaxed whitespace-normal lg:whitespace-nowrap">
                        Supporting healthcare providers, distributors, and seekers with reliable pharmaceutical solutions.
                    </p>
                </div>

                {/* Content Section */}
                <div className="grid lg:grid-cols-3 gap-8 items-stretch">
                    {/* Contact Form */}
                    <div className="lg:col-span-2 h-full">
                        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 h-full flex flex-col" data-aos="fade-up">
                            <h3 className="text-2xl font-semibold text-[#0c448d] mb-2">Get In Touch</h3>
                            <p className="text-[#0c448d]/70 mb-6">
                                Send us your inquiry and our team will respond promptly to assist you.
                            </p>
                            <form onSubmit={handleSubmit} className="space-y-6 flex-grow">
                                {/* Inputs */}
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {inputFields.map((field) => (
                                        <div key={field.id} className="space-y-2">
                                            <label htmlFor={field.id} className="text-sm font-medium text-[#0c448d]/80">
                                                {field.label}
                                            </label>
                                            <input
                                                id={field.id}
                                                name={field.id}
                                                type={field.type}
                                                placeholder={field.placeholder}
                                                required={field.required}
                                                pattern={field.pattern}
                                                onInput={field.onInput}
                                                className={
                                                    field.className ||
                                                    "w-full px-4 py-2 border border-[#0c448d]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#038b8b] transition-colors text-[#0c448d] placeholder-[#0c448d]/50"
                                                }
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Inquiry Type */}
                                <div className="space-y-2">
                                    <label htmlFor="inquiryType" className="text-sm font-medium text-[#0c448d]/80">
                                        Inquiry Type
                                    </label>
                                    <select
                                        id="inquiryType"
                                        name="inquiryType"
                                        required
                                        defaultValue=""
                                        className="w-full px-4 py-2 border border-[#0c448d]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#038b8b] transition-colors text-[#0c448d] placeholder-[#0c448d]/50"
                                    >
                                        <option value="" disabled>
                                            Select inquiry type
                                        </option>
                                        {inquiryOptions.map((opt) => (
                                            <option key={opt.value} value={opt.value}>
                                                {opt.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Message */}
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-[#0c448d]/80">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        placeholder="Please describe your inquiry, product needs, or how we can assist you..."
                                        required
                                        className="w-full px-4 py-2 border border-[#0c448d]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#038b8b] transition-colors text-[#0c448d] placeholder-[#0c448d]/50 resize-none"
                                    ></textarea>
                                </div>

                                {/* Button + Status */}
                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="w-full flex items-center justify-center gap-2 bg-[#0c448d] text-white py-2.5 rounded-lg hover:bg-[#0c448d]/90 transition-colors duration-300"
                                >
                                    <FaPaperPlane className="w-4 h-4" />
                                    {status === "loading" ? "Sending..." : "Send Message"}
                                </button>

                                {status === "success" && <p className="text-green-600">✅ Message sent successfully!</p>}
                                {status === "error" && <p className="text-red-600">❌ Failed to send. Please try again.</p>}
                            </form>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="h-full">
                        <div
                            className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 h-full flex flex-col"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <h3 className="text-xl font-semibold text-[#0c448d] mb-6">Contact Information</h3>
                            <div className="space-y-6 flex-grow">
                                {contactDetails.map((item, i) => (
                                    <div key={i} className="flex items-start space-x-4">
                                        <div
                                            className={`w-10 h-10 ${item.bg} rounded-lg flex items-center justify-center flex-shrink-0`}
                                        >
                                            {item.icon}
                                        </div>
                                        <div className=" ">
                                            <h4 className="font-semibold text-[#0c448d] mb-1">{item.title}</h4>
                                            {item.content}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section End Line */}
            <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="150">
                <div className="mt-3 h-1 w-full mx-auto bg-gradient-to-r from-[#0c448d] to-[#038b8b] rounded-full"></div>
            </div>
        </section>
    );
}
