const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')

module.exports = {
  devtool: 'eval',
  entry: {
    app: [
      'babel-polyfill',
      'webpack-hot-middleware/client',
      path.join(process.cwd(), 'app/index.js'),
    ],
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
    }),
    new HtmlWebpackPlugin({
      filename: path.join(process.cwd(), 'builds/index.html'),
      template: 'html-loader!' + path.join(process.cwd(), 'app/index.html'),
      inject: 'body',
      hash: false,
      minify: {
        removeAttributeQuotes: true,
        removeComments: true,
        collapseWhitespace: false,
        conservativeCollapse: false,
        preserveLineBreaks: false,
      },
      alwaysWriteToDisk: true,
    }),
    new HtmlWebpackHarddiskPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader', // inject CSS to page
        }, {
          loader: 'css-loader', // translates CSS into CommonJS modules
        }, {
          loader: 'postcss-loader', // Run post css actions
        }, {
          loader: 'sass-loader', // compiles Sass to CSS
        }],
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
