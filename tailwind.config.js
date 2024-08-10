/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainTxt: "#677F7F",
        secondaryTxt: "#C4ECE4",
        firstBG: "#1D2729",
        secondBG: "#2F4141",
        activeBG: "#2C525D",
        bgCol: "#0C1118"
      },
      borderWidth: {
        '1': '1px',
      }
    }
  },
  plugins: [],
}

