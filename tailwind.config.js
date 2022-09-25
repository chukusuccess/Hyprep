/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundDark: "#1C1B1E",
        backgroundPrimary: "#ECF5EF",
        backgroundSecondary: "#484848",
        textPrimary: "#016729",
        noContent: "#484848",
        textLightGreen: "#11F169",
      },
      fontFamily: {
        merriweather: "Merriweather",
        poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
