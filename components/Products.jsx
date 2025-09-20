import Image from "next/image";
import { FaShieldAlt, FaHeart, FaRunning, FaBrain, FaCapsules } from "react-icons/fa";

export function Products() {
    const products = [
        {
            name: "CLAVAT 625",
            category: "Antibiotic",
            composition: "Amoxicillin + Clavulanic Acid",
            description: "Treats a wide range of bacterial infections effectively with proven antimicrobial action.",
            icon: FaShieldAlt,
            color: "bg-[#0c448d]",
            image: "pexels-pietrozj-360622.jpg",
        },
        {
            name: "ESOMEROS 40",
            category: "Proton Pump Inhibitor",
            composition: "Esomeprazole",
            description: "Provides long-lasting relief in acidity, GERD, and peptic ulcers with superior acid suppression.",
            icon: FaHeart,
            color: "bg-[#038b8b]",
            image: "pexels-tara-winstead-7722971.jpg",
        },
        {
            name: "STAFENAC P",
            category: "NSAID + Analgesic",
            composition: "Aceclofenac + Paracetamol",
            description: "Relieves pain, inflammation, and fever with fast action and excellent tolerability.",
            icon: FaRunning,
            color: "bg-[#0c448d]",
            image: "pexels-padrinan-3882464.jpg",
        },
        {
            name: "HISTAMAC M",
            category: "Antihistamine",
            composition: "Montelukast + Levocetirizine",
            description: "Controls allergies, sneezing, runny nose, and breathing discomfort effectively.",
            icon: FaBrain,
            color: "bg-[#038b8b]",
            image: "pexels-pixabay-159211.jpg",
        },
        {
            name: "STATORVA 10",
            category: "Statin",
            composition: "Atorvastatin",
            description: "Reduces cholesterol and supports heart health with proven cardiovascular benefits.",
            icon: FaHeart,
            color: "bg-[#0c448d]",
            image: "pexels-pixabay-208518.jpg",
        },
    ];

    return (
        <section id="products" className="py-16 lg:py-24 bg-gray-50 px-4 sm:px-6 lg:px-12">
            <div className="max-w-7xl mx-auto space-y-14">
                {/* Heading */}
                <div className="text-center space-y-4">
                    <span className="inline-block px-4 py-1.5 bg-[#0c448d]/10 text-[#0c448d] rounded-full text-sm font-medium">
                        Our Products
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0c448d] leading-tight">
                        High-Quality Medicines Across Key Therapeutic Areas
                    </h2>
                    <p className="text-base sm:text-lg text-[#0c448d]/70 max-w-3xl mx-auto">
                        Statheros Health Care offers a focused range of high-quality medicines. Each product is manufactured
                        with stringent quality standards to ensure safety, efficacy, and trust.
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => {
                        const Icon = product.icon;
                        return (
                            <div
                                key={index}
                                className="relative bg-white/70 backdrop-blur-lg border border-[#0c448d]/10 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group"
                            >
                                {/* Image */}
                                <div className="relative">
                                    <Image
                                        src={`/${product.image}`}
                                        alt={product.name}
                                        width={500}
                                        height={350}
                                        className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-gradient-to-r from-[#0c448d] to-[#038b8b] text-white text-xs sm:text-sm rounded-full shadow-md">
                                            {product.category}
                                        </span>
                                    </div>
                                    {/* Floating Icon */}
                                    {/* <div
                                        className="absolute -bottom-6 left-6 w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition duration-300"
                                        style={{ background: `linear-gradient(135deg, #0c448d, #038b8b)` }}
                                    >
                                        <Icon className="w-6 h-6" />
                                    </div> */}
                                </div>

                                {/* Content */}
                                <div className="pt-10 p-6">
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#0c448d]">{product.name}</h3>
                                    <p className="text-sm sm:text-base text-[#0c448d]/70 font-medium mt-1">
                                        {product.composition}
                                    </p>
                                    <p className="mt-3 text-sm sm:text-base text-[#0c448d]/80 line-clamp-3">
                                        {product.description}
                                    </p>

                                    {/* Button */}
                                    <div className="mt-5">
                                        <button className="px-5 py-2 rounded-full bg-gradient-to-r from-[#0c448d] to-[#038b8b] text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Section End Line */}
                <div className="mt-16 text-center px-14" data-aos="fade-up">
                    <div className="h-1 w-full bg-gradient-to-r from-[#0c448d] to-[#038b8b] rounded-full"></div>
                </div>
            </div>
        </section>
    );
}
