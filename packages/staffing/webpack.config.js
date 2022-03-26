const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.tsx'),
  devtool: 'inline-source-map',
  devServer: {
      static: './build',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(tsx|jsx|ts|js)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Test Staffing',
        template: path.resolve(__dirname, './src/index.html')
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      "react/jsx-dev-runtime": "react/jsx-dev-runtime.js",
      "react/jsx-runtime": "react/jsx-runtime.js"
    }
  },
  output: {
    filename: 'app.[hash].js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  }
};