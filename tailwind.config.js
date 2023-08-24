/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["/index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#fff",
        grey: "#31353A",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};