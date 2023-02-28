
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");


module.exports = function override(config) {

  config.optimization = {
    ...config.optimization,

    splitChunks: {
      chunks: 'async',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        reactVendor: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
          name: 'react.vendor',
          chunks: 'all',
        },
        mobxVendor: {
          test: /[\\/]node_modules[\\/](mobx|mobx-react|mobx-react-light)[\\/]/,
          name: 'mobx.vendor',
          chunks: 'all',
        },
        libraryVendor: {
          test: /[\\/](library)[\\/](kit|design|app)[\\/]/,
          name: 'library.vendor',
          chunks: 'all',
        },
        helperVendor: {
          test: /[\\/](helper)[\\/](utils)[\\/]/,
          name: 'helper.vendor',
          chunks: 'all',
        },
        kernelVendor: {
          test: /[\\/](kernel)[\\/]/,
          name: 'kernel.vendor',
          chunks: 'all',
        },
      },
    },
  };

  config.plugins = [
    ...config.plugins,

    new WorkboxWebpackPlugin.InjectManifest({
      swSrc: "@library/workbox",
      swDest: "service-worker.js",
    }),
  ];

  return config;
};
