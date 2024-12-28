/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'Helvetica', 'sans-serif'],
        'gt-america': ['GT America Expanded Black', 'sans-serif'],
        'work-sans': ['"Work Sans"', 'sans-serif'], // Add custom font stack
      },
  }, 
},
  plugins: [],
}