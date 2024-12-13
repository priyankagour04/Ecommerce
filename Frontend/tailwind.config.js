/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        FooterImg : "./src/assets/images/FooterImg.png"
      }
    },
  },
  plugins: [],
}