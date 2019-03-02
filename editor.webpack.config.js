
/**
 * @file:   解决编辑器别名路径不能识别问题， 需要对编辑器进行配置，例如 webstrom  File | Settings | Languages & Frameworks | JavaScript | Webpack 目录指向改文件夹
 * @author: lzc
 * @date:   2019-02-28
 */

'use strict'

const path = require('path')

const resolve = dir => path.join(__dirname, '.', dir)

module.exports = {
  context: path.resolve(__dirname, './'),
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src'),
      '@views': resolve('src/views')
    }
  }
}
