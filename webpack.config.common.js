const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/app/main.ts',
  resolve: {
    extensions: [ '.js', '.ts' ]
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loaders: ['html-loader']
      },
      {
        test: /\.scss$/,
        loaders: ['raw-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        loader: 'raw-loader'
      }
    ],
    exprContextCritical: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
}
