const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  devServer: {
      static: './build',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
            projectReferences: true,
        }
      },
    ],
  },
  plugins: [
      new HtmlWebpackPlugin({
          title: 'Test Staffing'
      })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [
        new TsconfigPathsPlugin()
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  }
};