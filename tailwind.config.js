/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["'DM Mono'", ...defaultTheme.fontFamily.mono],
        open_sans: ["'Open Sans'", ...defaultTheme.fontFamily.sans],
        proxima_nova: ['Proxima Nova', 'sans-serif'],
        scp: ['Source Code Pro', 'monospace'],
      },
      colors: {
        'primary':{
          'gray': '#151522',
          'blue': '#27e3e6',
          'hover': '#212131'
        },
        'secondary':{
          'border': '#304973',
        },
        'fonts':{
          'white': '#FDFEFF',
          'gray': '#a5bdc7',
          // 8892B0
        }
      }
    },
  },
  plugins: [],
}
