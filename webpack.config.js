const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  devtool: false,
  mode: 'development',
  cache: true,
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: './dist',
  },
  performance: {
    hints: false,
    // maxEntrypointSize: 512000,
    // maxAssetSize: 512000,
  },
  optimization: {
    splitChunks: {
      minSize: 10000,
      maxSize: 25000,
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
