// const path = require('path');
// const { getLoader, loaderByName } = require('@craco/craco');

// const packages = [];
// packages.push(path.resolve(__dirname, 'src/'));

// module.exports = {
//   webpack: {
//     configure: (webpackConfig) => {
//       const { isFound, match } = getLoader(webpackConfig, loaderByName('babel-loader'));
//       if (isFound) {
//         const include = Array.isArray(match.loader.include) ? match.loader.include : [match.loader.include];

//         match.loader.include = include.concat(packages);
//       }
//       return webpackConfig;
//     },
//   },
//   babel: {
//     presets: [
//       "@babel/preset-typescript",
//       ["@babel/preset-env", {"targets": {"esmodules": true}}],
//       ["@babel/preset-react",
//         {
//           "pragma": "dom",
//           "pragmaFrag": "DomFrag",
//           "throwIfNamespace": false,
//           "runtime": "classic"
//         }],
//       ["@babel/preset-flow"]
//     ],
//     plugins: [],
//     loaderOptions: (babelLoaderOptions, { env, paths }) => {
//       console.log("BABEL");
//       console.log(babelLoaderOptions);
//       return babelLoaderOptions;
//     },
//   }
// };