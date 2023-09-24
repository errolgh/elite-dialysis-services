/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      display: ["Oswald"],
      body: ["Montserrat"],
      heading: ["dmsDisplay", "Georgia"],
    },
    colors: {
      eliteBlue: "#20BEC9",
      elitePurple: "#C920BE",
      eliteGreen: "#9FC920",
  
      darkBlue: "#0D253A",
      black: "#333",
      white: "#FFF",
      lightGray: "#F4F4F4",
    },
    plugins: [require("@tailwindcss/forms")],
  },
}
