/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // For files directly in college-website/src
    "./frontend/src/**/*.{js,ts,jsx,tsx}", // For frontend app files
    "./dashboard/src/**/*.{js,ts,jsx,tsx}", // For dashboard app files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}