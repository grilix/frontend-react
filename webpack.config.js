const path = require('path');

module.exports = {
  entry: './app/index',

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['', '.ts', '.tsx', '.js']
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        include: path.resolve(__dirname, 'app'),
        exclude: /node_modules/,
      },
    ],
  },
};
