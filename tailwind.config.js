// tailwind.config.js
module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                slabo: ["var(--font-slabo-27px)"],
                rubikDistressed: ["var(--font-rubik-distressed)"], // ✅ Correct mapping
            },
        },
    },
    plugins: [],
};
