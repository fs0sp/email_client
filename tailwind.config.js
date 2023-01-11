/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:
      {
        primary: '#E54065',
        background: '#F4F5F9',
        border: '#CFD2DC',
        text: '#636363',
        filterbtn: '#E1E4EA',
        readBg: '#F2F2F2',
      },
    },
  },
  plugins: [],
}