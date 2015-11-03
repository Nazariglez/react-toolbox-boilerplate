var path = require('path');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    './index.js'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['react-hot', 'babel']
      },
      {
        test: /(\.scss|\.css)$/,
        loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.scss'],
  },
  devtool: 'source-map',
  devServer: {
    noInfo: true,
    hot: true,
    inline: true,
    contentBase: "./build",
    historyApiFallback: true
  },
  plugins: []
};
