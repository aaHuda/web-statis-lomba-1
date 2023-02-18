/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
  container: {
    center:true,
    padding:'16px',
  },
    extend: {
      colors : {
        primary: '#10b981',
        secondary: '#34d399',
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}
