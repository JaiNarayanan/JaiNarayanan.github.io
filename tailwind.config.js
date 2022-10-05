/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary':{
          'gray': '#1A1A1D',
          'neon-orange': '#FFB400'
        }
      }
    },
  },
  plugins: [],
}
