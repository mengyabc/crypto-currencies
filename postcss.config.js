module.exports = {
  plugins: [
    require('postcss-smart-import')({ /* ...options */ }),
    require('postcss-custom-properties')(/* {variables: { fixed_height: '120px'}} */),
    require('precss'),
    require('postcss-cssnext'),
    require('postcss-initial'),
    // require('postcss-autoreset'),
  ],
}
