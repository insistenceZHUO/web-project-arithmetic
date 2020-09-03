const { resolve } = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name][hash:2]',
  },
};
