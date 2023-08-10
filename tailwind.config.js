/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'primary': '#C7D9A7',
        'secondary': '#FED36B',
      }
    },
    fontFamily: {
      'arvo': ['Arvo', 'serif'],
      'raleway': ['Raleway', 'serif'],
    },
  },
  plugins: [],
}

