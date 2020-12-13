const theme = require("./theme");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: { ...theme.colors },
    fontFamily: {
      sans: [theme.fonts.primary],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
