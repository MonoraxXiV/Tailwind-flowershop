const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'Charbreadba' : ['Eczar', 'serif'],
        'heading': ["Hachi Maru Pop", 'cursive'],
        'Sherlock': ["Libre Baskerville", 'serif'],
      },
      colors:{
        blue:{
          malibu: '#5bdbfb',
        },
        teal: colors.teal,
        emerald: colors.emerald,
        lime: colors.lime,
        rose: colors.rose,
        fuchsia: colors.fuchsia,
        violet: colors.violet,
        lightBlue: colors.lightBlue,
        cyan: colors.cyan,
        orange: colors.orange,
        amber: colors.amber,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
