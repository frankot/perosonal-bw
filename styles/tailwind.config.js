module.exports = {
  mode: 'jit',
  purge: ['_site/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'custom': ['Roboto', 'ui-monospace'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
