/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#090910",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        fourth: "#FDB827",
        grayy:"rgba(255, 255, 255, 0.1)",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "gray-color" : "#101018",
        "gray-dark" : "#888888"
      },
      backgroundColor: {
        "bgc-yellow ": "#FDB827"
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/herobg.svg')",
      },
      textColor: {
        "text-yellow": "#FDB827"
      }
    },
  },
  plugins: [],
};

