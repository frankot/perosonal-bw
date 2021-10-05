module.exports = {
  mode: 'jit',
  purge: ['_site/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'custom': ['Roboto', 'ui-monospace'],
      },
      colors: {
        'main': '#ece6e6' 
      },
      screens: {
        '3xl': '1920px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
