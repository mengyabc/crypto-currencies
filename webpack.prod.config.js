const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin')

module.exports = {
  devtool: false,
  entry: {
    app: ['babel-polyfill', path.join(process.cwd(), 'app/index.js')],
  },
  output: {
    path: path.join(process.cwd(), 'builds'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    alias: {
      'assets': path.join(process.cwd(), 'builds/assets'),
      'layouts': path.join(process.cwd(), 'app/layouts'),
      'components': path.join(process.cwd(), 'app/components'),
      'scss': path.join(process.cwd(), 'app/scss'),
      'redux_and_actions': path.join(process.cwd(), 'app/redux_and_actions'),
      'react-dom': '@hot-loader/react-dom',
    },
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new UglifyJSPlugin(),
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en-au/),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
    }),
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
      filename: path.join(process.cwd(), 'builds/index.html'),
      template: 'html-loader!' + path.join(process.cwd(), 'app/index.html'),
      inject: true,
      hash: false,
      minify: {
        removeAttributeQuotes: true,
        removeComments: true,
        collapseWhitespace: true,
        conservativeCollapse: false,
        preserveLineBreaks: false,
      },
    }),
    new StyleExtHtmlWebpackPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
          }, {
            loader: 'postcss-loader',
          }, {
            loader: 'sass-loader',
          }],
        }),
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|server)/,
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.woff(2)?(\?[a-z0-9]+)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          mimetype: 'application/font-woff',
        },
      },
      {
        test: /\.(ttf|eot|svg|gif|jpg|png)(\?[a-z0-9]+)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
        },
      },
    ],
  },
}
