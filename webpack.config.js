const { resolve } = require('path');

module.exports = {
  entry: {
    index: './src/demo.js',
  },

  output: {
    path: resolve(__dirname, 'dist'),
  },
};
