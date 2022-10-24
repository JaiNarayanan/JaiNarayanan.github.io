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
        proxima_nova: ['Proxima Nova', 'sans-serif'],

      },
      colors: {
        'primary':{
          'gray': '#0A253B',
          'blue': '#1FC1C3'
        },
        'secondary':{
          'border': '#304973',
        },
        'fonts':{
          'white': '#FDFEFF',
          'gray': '#95A3B1',
          // 8892B0
        }
      }
    },
  },
  plugins: [],
}
