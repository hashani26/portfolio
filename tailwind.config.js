const colors = require('tailwindcss/colors');
const theme = require('./theme');

module.exports = {
  purge: ['./src/**/*.js', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: { opacity: ['disabled', 'bg'] },
    colors: {
      black: theme.colors.black,
      white: theme.colors.white,
      gray: theme.colors.gray,
      pink: theme.colors.pink,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  important: true,
};
