/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "Helvetica", "sans-serif"],
        syntos: ["Syntos", "Helvetica", "sans-serif"],
      },
      fontFamily: {
        syncopate: ["Syncopate", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
