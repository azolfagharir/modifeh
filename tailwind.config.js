/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "searchBox": "700px",
      },
      margin: { // Added colon here
        "searchBox": "400px", // Added unit to the value
      },
    },
  },
  plugins: [],
}