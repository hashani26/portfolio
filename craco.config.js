// Configure create react app without ejecting
const CracoAntDesignPlugin = require('craco-antd');
const path = require('path');
process.env.BROWSER = 'none';

const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#ff0000',
              '@btn-primary-color': '#ff0000',
              '@btn-primary-color': '#ff0000',
              '@text-color': '#ff0000',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};

// const CracoLessPlugin = require('craco-less');
// const { getThemeVariables } = require('antd/dist/theme');

// module.exports = {
//   plugins: [
//     {
//       plugin: CracoLessPlugin,
//       options: {
//         lessLoaderOptions: {
//           lessOptions: {
//             modifyVars: { '@primary-color': '#ff0000' },
//             javascriptEnabled: true,
//           },
//         },
//       },
//     },
//   ],
//   style: {
//     postcss: {
//       plugins: [require('tailwindcss'), require('autoprefixer')],
//     },
//   },
// };
