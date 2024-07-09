/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEAFULT: "#192126",
          100: "#BBF246",
          bg: "#F1F1F1",
        },
        secondary: {
          DEAFULT: "#8B8F92",
          100: "#5E6468",
          200: "#384046",
          300: "#A48AED",
          400: "#ED4747",
          500: "#FCC46F",
          600: "#95CCE3",
        },
      },
      fontFamily: {
        lthin: ["Lato-Thin", "sans-serif"],
        lblack: ["Lato-Black", "sans-serif"],
        lbold: ["Lato-Bold", "sans-serif"],
        lregular: ["Lato-Regular", "sans-serif"],
        llight: ["Lato-Light", "sans-serif"],
      },
    },
  },
  plugins: [],
};
