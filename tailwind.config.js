/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
"./index.html"],
  theme: {
    extend: {
      fontFamily:{
        'inter':['Inter', 'sans-serif'],
        'deca':['Lexend Deca', 'sans-serif'],
      }
    },
    colors: {
      'mainc': '#090B1A',
      'card':'#1B1938',
      'accent' : '#AA5CDB',
      'white' : '#ffffff',
      'light': 'hsla(0, 0%, 100%, 0.75)'
      

    }
  },
  plugins: [],
}

