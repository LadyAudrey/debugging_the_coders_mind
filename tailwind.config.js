/**@type {import('tailwindcss').Config} */

const color = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    splitWidth: {
      "two": "40%"
    }
  },
  plugins: [require("@tailwindcss/typography")],
};
