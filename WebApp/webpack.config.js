const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: ["@babel/polyfill", "./src/index.js"],
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index-bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader","sass-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new CopyWebpackPlugin([
      { from: 'assets', to: 'assets' }
    ])
  ],
  resolve: {
    alias: {
        scenes: path.resolve(__dirname, 'src/scenes/'),
        layout: path.resolve(__dirname, 'src/components/layout/'),
        services: path.resolve(__dirname, 'src/services/')
    },
    extensions: ['.js', '.jsx', '.json', '.scss']
}
};