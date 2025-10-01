/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",                 // main HTML file
    "./public/index.html",          // ✅ include public/index.html too
    "./src/**/*.{js,jsx,ts,tsx}",   // all React source files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
