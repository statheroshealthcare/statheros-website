export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-[#e0f2ff] to-[#f0f9ff]">
            {/* Spinner with gradient border */}
            <div className="relative flex items-center justify-center w-28 h-28">
                <div className="absolute w-28 h-28 rounded-full border-4 border-[#0c448d]/10 border-t-[#038b8b] animate-spin-slow shadow-lg"></div>
                {/* Pulsing "S" */}
                <span className="text-6xl font-semibold font-serif text-[#0c448d] animate-pulse-fast">S</span>
            </div>
            {/* Small branding */}
            <span className="mt-3 text-2xl sm:text-4xl font-semibold text-[#0c448d]/70 tracking-widest animate-fade-in uppercase">
                Statheros Health Care
            </span>
        </div>
    );
}
