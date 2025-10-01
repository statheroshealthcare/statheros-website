"use client";
import { useState, useEffect } from "react";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full flex items-center justify-center
        bg-gradient-to-tr from-[#038b8b]/70 to-[#0c448d]/70
        backdrop-blur-md border border-white/30
        shadow-lg shadow-[#038b8b]/40
        transition-transform duration-300
        hover:scale-110 hover:shadow-2xl hover:animate-pulse
        text-white text-2xl font-bold
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
      aria-label="Back to top"
    >
      &#8679;
    </button>
  );
}
