/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary':{
          'gray': '#323231',
          'orange': '#FFB400'
        }
      }
    },
  },
  plugins: [],
}
