const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: {
    jsx: "./src/index.jsx",
    css: "./src/main.css",
    html: "./src/index.html"
  },

  output: {
    path: __dirname + "/static",
    filename: "bundle.js"
  },
  module: {
    preLoaders: [
        //Eslint loader
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "eslint-loader"}
    ],
    loaders: [
      { test: /\.html$/, loader: "file?name=[name].[ext]" },
      { test: /\.css$/, loader: "file?name=[name].[ext]" },
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ["react-hot","babel-loader"]}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  eslint: {
    configFile: './.eslintrc'
  },
  plugins: [
    new webpack.DefinePlugin({
      'http://localhost:3000/api/v1': JSON.stringify(http://localhost:3000/api/v1)
    })
  ],
  devServer: {
    historyApiFallback: true
  }
};
