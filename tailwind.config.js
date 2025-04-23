/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#F6BE00',
        dark: '#0f172a',
        light: '#f8fafc',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}

