const path = require('path');

const entryPath = path.join(__dirname, 'client', 'src', 'components', 'App.jsx');
const outputPath = path.join(__dirname, 'client', 'dist');

module.exports = {
  entry: entryPath,
  output: {
    path: outputPath,
    filename: 'bundle.js',
    libraryTarget: 'commonjs'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  externals: {
    // define newrelic as an external library
    // http://webpack.github.io/docs/configuration.html#externals
    newrelic: true
  }
};
