const path = require('path')
const express = require('express')
const chalk = require('chalk')

const server = express()
const port = process.env.PORT || 3000
const production = process.env.NODE_ENV === 'production'

if (production) {
  console.log('NODE_ENV: production')
} else {
  console.log('NODE_ENV: development')
  const webpack = require('webpack')
  const config = require('./webpack.dev.config.js')
  const compiler = webpack(config)
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  server.use(webpackDevMiddleware(compiler, {
    quiet: false,
    hot: true,
    publicPath: config.output.publicPath,
    stats: { colors: true },
  }))
  server.use(webpackHotMiddleware(compiler))
}

server.use(express.static('builds'))
server.use(express.static('builds/assets'))

server.get('*', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'builds/index.html'))
})

server.listen(port, '0.0.0.0', (err) => {
  if (err) {
    console.log(err)
  }
  if (production) {
    console.log('listening as production at localhost:' + port)
  } else {
    console.log('listening as development at localhost:' + port)
    console.log(chalk.green('Webpack may still be compiling ... '))
  }
})

module.exports = server
