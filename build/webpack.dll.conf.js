var path = require('path')
var webpack = require('webpack')

module.exports = {
  // 想要打包的模块
  entry: {
    vendor: [
      'axios',
      'vue/dist/vue.esm.js',
      'element-ui',
      'vue-router',
      'vuex'
    ]
  },
  output: {
    path: path.join(__dirname, '../static/js'),
    filename: '[name].dll.js',
    library: '[name]_library'
  },
  plugins: [
    new webpack.DllPlugin({
      // 生成清单文件
      path: path.join(__dirname, '.', '[name]-manifest.json'),
      name: '[name]_library'
    }),
    // 压缩
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        drop_debugger: true
      },
      output: {
        // 去掉注释内容
        comments: false
      },
      sourceMap: true
    })
  ]
};
