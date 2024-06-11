/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  content: [],
  theme: {
    fontFamily: {
      'libre': ["Libre Franklin, 'sans-serif'"]
    },
    extend: {},
  },
  plugins: [],
}

