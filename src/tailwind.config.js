const rtl = require('tailwindcss-rtl');

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // Enables dark mode via .dark class
  theme: {
    extend: {
      colors: {
        light: '#f8f9fa',
        dark: '#343a40',
      },
      borderRadius: {
        'lg': '0.75rem', // rounded-lg
        'xl': '1rem',
      },
    },
  },
  plugins: [
    rtl(),
    require('tailwind-scrollbar')({ nocompatible: true }), // Custom scrollbar styles
  ],
};

