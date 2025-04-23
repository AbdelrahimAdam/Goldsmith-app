const path = require('path');
const webpack = require('webpack'); // <-- import webpack to use plugins and define fallback

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules\/(?!(i18next|react-i18next)\/).*/, // Allow transpiling i18next and react-i18next
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    fallback: {
      process: require.resolve('process/browser'), // Polyfill for process in the browser
      // Additional fallbacks can be added as needed, like 'crypto', 'fs', etc.
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV), // Inject the current environment
      'process.env': JSON.stringify(process.env) // Optional: inject all environment variables if needed
    })
  ]
};

