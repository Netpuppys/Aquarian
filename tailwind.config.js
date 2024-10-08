/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      screens: {
        "9xl": "430px",
        "3xl": "1636px",
        "4xl": "1736px",
        "7xl": "1836px",
        "8xl": "2336px",
        "2lg": "1350px",
      },
      backgroundImage: {
        banner: "url('/src/Assets/AboutUsHeader.png')",
      },
      skew: {
        30: "30deg",
        45: "45deg",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
  darkMode: ''
};
