/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["'DM Mono'", ...defaultTheme.fontFamily.mono],
        ubuntu: ["'Ubuntu'"],
        open_sans: ["'Open Sans'", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary':{
          'gray': '#1D202D',
          'blue': '#01FFF4'
        },
        'secondary':{
          'white': '#FDFEFF',
          'gray': '#8892B0',
          // 8892B0
        }
      }
    },
  },
  plugins: [],
}
