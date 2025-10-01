import { Geist, Geist_Mono, Rubik_Distressed } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const rubikDistressed = Rubik_Distressed({
    variable: "--font-rubik-distressed", // CSS variable name
    weight: "400",
    subsets: ["latin"],
});

export const metadata = {
    title: "Statheros Health Care",
    description:
        "A growing force in the pharmaceutical world, built on trust, quality, and innovation. We craft medicines that combine scientific excellence with genuine care.",
    icons: {
        icon: "/favicon.ico",
    },
    keywords:
        "pharmaceutical, healthcare, medicines, antibiotics, CLAVAT 625, ESOMEROS 40, STAFENAC P, HISTAMAC M, STATORVA 10, Kerala, India",
    authors: [{ name: "Statheros Health Care Private Limited" }],
    creator: "Statheros Health Care Private Limited",
    publisher: "Statheros Health Care Private Limited",
    robots: "index, follow",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://statheroshealthcare.com",
        title: "Statheros Health Care - Stabilizing Health",
        description:
            "A growing force in the pharmaceutical world, built on trust, quality, and innovation. We craft medicines that combine scientific excellence with genuine care.",
        siteName: "Statheros Health Care",
    },
    twitter: {
        card: "summary_large_image",
        title: "Statheros Health Care - Stabilizing Health",
        description: "A growing force in the pharmaceutical world, built on trust, quality, and innovation.",
    },
    generator: "Next.js",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`font-sans ${geistSans.variable} ${geistMono.variable} ${rubikDistressed.variable}  antialiased`}
            >
                <Suspense fallback={null}>{children}</Suspense>
            </body>
        </html>
    );
}
