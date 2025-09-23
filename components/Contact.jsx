"use client";

import { useState } from "react";
import { FaBuilding, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from "react-icons/fa";

// Input field configurations
const inputFields = [
    {
        id: "firstName",
        label: "First Name",
        type: "text",
        placeholder: "Enter your first name",
        required: true,
    },
    {
        id: "lastName",
        label: "Last Name",
        type: "text",
        placeholder: "Enter your last name",
        required: true,
    },
    {
        id: "email",
        label: "Email",
        type: "email",
        placeholder: "your.email@example.com",
        required: true,
    },
    {
        id: "phone",
        label: "Phone",
        type: "tel",
        placeholder: "+91 XXXXX XXXXX",
        required: false,
    },
];

// Inquiry type options
const inquiryOptions = [
    { value: "products", label: "Product Information" },
    { value: "distribution", label: "Distribution Partnership" },
    { value: "healthcare", label: "Healthcare Provider Inquiry" },
    { value: "quality", label: "Quality & Safety" },
    { value: "business", label: "Business Collaboration" },
    { value: "other", label: "Other" },
];

// Contact details configuration
const contactDetails = [
    {
        icon: <FaBuilding className="w-6 h-6 text-[#0c448d]" />,
        title: "Corporate Office",
        content: (
            <p className="text-[#0c448d]/70 text-sm leading-relaxed">
                167, 3rd Floor 37th Cross, 28th Main Rd, <br />Jayanagara 9th Block,
                <br />
                Bengaluru, Karnataka 560069.
            </p>
        ),
        bg: "bg-[#0c448d]/10",
    },
    {
        icon: <FaBuilding className="w-6 h-6 text-[#0c448d]" />,
        title: "Regional Office",
        content: (
            <p className="text-[#0c448d]/70 text-sm leading-relaxed">
                6/843 Kallumpurath, Perinad, Near MES School,
                <br />
                Kundara, Nedumpana, Kollam, Kerala 691501
            </p>
        ),
        bg: "bg-[#0c448d]/10",
    },
    {
        icon: <FaPhone className="w-6 h-6 text-[#038b8b]" />,
        title: "Phone Numbers",
        content: (
            <div className="space-y-1">
                <a href="tel:+919746963335" className="text-[#0c448d]/70 text-sm hover:text-[#038b8b] transition-colors">
                    +91 97469 63335
                </a>
                <p className="text-[#0c448d]/70 text-sm">+91 97469 63334</p>
            </div>
        ),
        bg: "bg-[#038b8b]/10",
    },
    {
        icon: <FaEnvelope className="w-6 h-6 text-[#0c448d]" />,
        title: "General Email",
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
        icon: <FaClock className="w-6 h-6 text-[#038b8b]" />,
        title: "Business Hours",
        content: (
            <p className="text-[#0c448d]/70 text-sm leading-relaxed">
                Monday - Friday: 9:00 AM - 6:00 PM
                <br />
                Saturday: 9:00 AM - 2:00 PM
            </p>
        ),
        bg: "bg-[#038b8b]/10",
    },
];

export function Contact() {
    const [status, setStatus] = useState("idle");

    // Form submission handler
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

    // Phone input formatter
    const handlePhoneInput = (e) => {
        let value = e.target.value;
        if (!value.startsWith("+91")) {
            value = "+91" + value.replace(/[^0-9]/g, "");
        }
        const digits = value
            .replace("+91", "")
            .replace(/[^0-9]/g, "")
            .slice(0, 10);
        e.target.value = "+91" + (digits ? " " + digits : "");
    };

    // Common input className
    const inputClassName =
        "w-full px-4 py-3 border border-[#0c448d]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#038b8b] focus:bg-[#038b8b]/5 transition-colors duration-300 text-[#0c448d] placeholder-[#0c448d]/50 text-base";

    return (
        <section id="contact" className="py-20 lg:py-28 bg-gray-50 px-6 sm:px-12 lg:px-20">
            <div className="container mx-auto max-w-7xl">
                {/* Section Heading */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[#0c448d] leading-tight">
                        Connect With Our Healthcare Experts
                    </h2>
                    <p className="text-lg sm:text-xl text-[#0c448d]/70 max-w-4xl mx-auto mt-4 leading-relaxed">
                        Supporting healthcare providers, distributors, and seekers with reliable pharmaceutical solutions.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-8 items-stretch">
                    {/* Contact Form */}
                    <div className="lg:col-span-3 flex flex-col">
                        <div className="bg-white rounded-2xl shadow-xl p-8 flex-1 flex flex-col">
                            <h3 className="text-2xl lg:text-3xl font-semibold text-[#0c448d] mb-4">Get In Touch</h3>
                            <p className="text-[#0c448d]/70 mb-8 text-base leading-relaxed">
                                Send us your inquiry, and our team will respond promptly to assist you.
                            </p>
                            <form onSubmit={handleSubmit} className="space-y-6 flex-1">
                                <div className="grid sm:grid-cols-2 gap-6">
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
                                                onInput={field.id === "phone" ? handlePhoneInput : undefined}
                                                className={inputClassName}
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Inquiry Type Dropdown */}
                                <div className="space-y-2">
                                    <label htmlFor="inquiryType" className="text-sm font-medium text-[#0c448d]/80">
                                        Inquiry Type
                                    </label>
                                    <select
                                        id="inquiryType"
                                        name="inquiryType"
                                        required
                                        defaultValue=""
                                        className={inputClassName}
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

                                {/* Message Textarea */}
                                <div className="space-y-2 flex-1">
                                    <label htmlFor="message" className="text-sm font-medium text-[#0c448d]/80">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={6}
                                        placeholder="Please describe your inquiry, product needs, or how we can assist you..."
                                        required
                                        className={`${inputClassName} resize-none`}
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="w-full flex items-center justify-center gap-2 bg-[#0c448d] text-white py-3 rounded-xl hover:bg-[#0c448d]/90 transition-colors duration-300 disabled:opacity-50 text-base font-medium"
                                >
                                    <FaPaperPlane className="w-5 h-5" />
                                    {status === "loading" ? "Sending..." : "Send Message"}
                                </button>

                                {/* Form Status Messages */}
                                {status === "success" && (
                                    <p className="text-green-600 text-sm font-medium">✅ Message sent successfully!</p>
                                )}
                                {status === "error" && (
                                    <p className="text-red-600 text-sm font-medium">❌ Failed to send. Please try again.</p>
                                )}
                            </form>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="lg:col-span-2 flex flex-col">
                        <div className="bg-white rounded-2xl shadow-xl p-8 flex-1">
                            <h3 className="text-2xl lg:text-3xl font-semibold text-[#0c448d] mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                {contactDetails.map((item, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div
                                            className={`w-12 h-12 ${item.bg} rounded-lg flex items-center justify-center flex-shrink-0`}
                                        >
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[#0c448d] text-lg mb-2">{item.title}</h4>
                                            {item.content}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Divider */}
                <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="150">
                    <div className="h-1 w-full mx-auto bg-gradient-to-r from-[#0c448d] to-[#038b8b] rounded-full" />
                </div>
            </div>
        </section>
    );
}
