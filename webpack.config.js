var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, "src", "client.js"),
  output: {
    filename: "client.min.js",
    path: path.resolve(__dirname, "src"),
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  }

}
