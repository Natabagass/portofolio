/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Recursive": "Recursive",
        "Lato": "Lato",
        "Nunito": "Nunito"
      }
    },
  },
  plugins: [],
}
