var path = require('path');

module.exports = {
  entry: ['babel-polyfill', path.resolve(__dirname, "src", "client.js")],
  output: {
    filename: "client.min.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: '/build'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  }

}
