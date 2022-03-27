const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.tsx'),
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
      static: './build',
  },
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
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  },
  output: {
    filename: 'app.[chunkhash].js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  }
};