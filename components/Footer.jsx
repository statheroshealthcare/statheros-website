import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export function Footer() {
    const footerLinks = {
        Company: ["About Us", "Vision & Mission", "Quality Policy", "Future Plans", "CSR Commitment"],
        Products: ["CLAVAT 625", "ESOMEROS 40", "STAFENAC P", "HISTAMAC M", "STATORVA 10"],
        "Therapeutic Areas": ["Antibiotics", "Gastroenterology", "Pain Management", "Allergy Care", "Cardiovascular"],
        Support: ["Contact Us", "Product Information", "Healthcare Professionals", "Distribution", "Quality Assurance"],
    };

    // Map link text → section id
    const sectionIds= {
        "About Us": "about",
        "Vision & Mission": "vision",
        "Quality Policy": "quality",
        "Future Plans": "plans",
        "CSR Commitment": "csr",
        "Contact Us": "contact",
        "Product Information": "products",
        "Healthcare Professionals": "support",
        "Distribution": "distribution",
        "Quality Assurance": "quality-assurance",
    };

    return (
        <footer className="bg-gradient-to-b from-[#0c448d] to-[#062c5a] text-white">
            <div className="container mx-auto px-6 py-14">
                {/* Grid Layout */}
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-6">
                    {/* Logo & Social (Left Side) */}
                    <div className="sm:col-span-2 space-y-6">
                        <div className="w-44 h-24 relative">
                            <Image
                                src="/statheros-logo.svg"
                                alt="Statheros Health Care Logo"
                                fill
                                className="object-contain brightness-0 invert"
                            />
                        </div>

                        {/* Social Icons */}
                        <div className="flex space-x-3">
                            {[
                                { Icon: FaFacebookF, label: "Facebook" },
                                { Icon: FaTwitter, label: "Twitter" },
                                { Icon: FaLinkedinIn, label: "LinkedIn" },
                                { Icon: FaInstagram, label: "Instagram" },
                            ].map(({ Icon, label }, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-[#038b8b] transition-colors duration-300"
                                    aria-label={label}
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Footer Links (Middle Section) */}
                    <div className="sm:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
                        {Object.entries(footerLinks).map(([category, links]) => (
                            <div key={category} className="space-y-4">
                                <h4 className="font-semibold text-white text-lg tracking-wide">{category}</h4>
                                <ul className="space-y-2">
                                    {links.map((link, index) => {
                                        // if the category is Products → force all items to #products
                                        const sectionId = category === "Products" ? "products" : sectionIds[link] || "";
                                        return (
                                            <li key={index}>
                                                <a
                                                    href={sectionId ? `#${sectionId}` : "#"}
                                                    className="group relative text-gray-300 hover:text-white text-sm transition-colors duration-200"
                                                >
                                                    {link}
                                                    <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-[#038b8b] group-hover:w-full transition-all duration-300"></span>
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="my-10 border-t border-white/20" />

                {/* Bottom Bar */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                    <p className="text-gray-300 text-sm text-center sm:text-left">
                        © {new Date().getFullYear()} Statheros Health Care Private Limited. All rights reserved.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6">
                        {["Privacy Policy", "Terms of Service", "Quality Standards"].map((item, idx) => (
                            <a
                                key={idx}
                                href="#"
                                className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="text-gray-400 text-xs text-center sm:text-right">
                        Kerala, India • Quality Assured • Trust & Innovation
                    </div>
                </div>
            </div>
        </footer>
    );
}
