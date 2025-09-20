/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: 'var(--primary)', // #0c448d
            dark: 'var(--primary-dark)', // #092f6b
            light: 'var(--primary-light)', // #e6edf9
          },
          secondary: {
            DEFAULT: 'var(--secondary)', // #038b8b
            dark: 'var(--secondary-dark)', // #026666
            light: 'var(--secondary-light)', // #e5f4f4
          },
        },
      },
    },
    plugins: [],
  };