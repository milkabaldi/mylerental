/** @type {import('tailwindcss').Config} */
export default {
  content: ["/index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#fff",
        grey: "#31353A",
        rBlue: "#3772E1",
        rDarkBlue: "#2C5BB4",
        rYellow: "#F5C473",
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