/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                heading: ["'Outfit'", "sans-serif"],
                body: ["'Inter'", "sans-serif"],
            },
            colors: {
                primary: "#3b82f6",
                accent: "#60a5fa",
                surface: "#121216",
                "surface-hover": "#1c1c22",
            }
        },
    },
    plugins: [],
}
