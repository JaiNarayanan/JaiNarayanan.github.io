/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary':{
          'gray': '#262623',
          'orange': '#FFB400'
        }
      }
    },
  },
  plugins: [],
}
