/**
 * @file:
 *  基于vue-cli 3.x 的配置
 *  详情请查看官网 https://cli.vuejs.org/zh/config/#全局-cli-配置
 */

/* eslint-disable vue/script-indent*/
const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')

const resolve = dir => path.join(__dirname, './', dir)

module.exports = {
  baseUrl: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: false,
  parallel: require('os').cpus().length > 1, // 多进程编译
  devServer: { // devServer配置
    port: process.env.DEV_SERVER_PROT,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/api/': {
        target: 'http://172.16.18.18:8196',
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    name: process.env.APP_NAME,
    resolve: {
      alias: {
        '@': resolve('src'),
        '~': resolve('src')
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        // other modules
        introJs: ['intro.js', 'introJs']
      })
    ]
  },
  chainWebpack: config => {
    /**
     * 删除懒加载模块的 prefetch preload，降低带宽压力
     * https://cli.vuejs.org/zh/guide/html-and-static-assets.html#prefetch
     * https://cli.vuejs.org/zh/guide/html-and-static-assets.html#preload
     * 而且预渲染时生成的 prefetch 标签是 modern 版本的，低版本浏览器是不需要的
     */
    config.plugins.delete('preload')
    
    config.plugins.delete('prefetch')
    
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
    
    // 项目所有scss文件均可调用scss变量
    config.module
      .rule('scss')
      .oneOfs
      .store
      .forEach(item => {
        item
          .use('sass-resources-loader')
          .loader('sass-resources-loader')
          .options({
            resources: [resolve('src/assets/style/variables.scss'), resolve('src/assets/style/mixins.scss')]
          })
          .end()
      })
    
    // 解决 cli3 热更新失效 https://github.com/vuejs/vue-cli/issues/1559
    config.resolve
      .symlinks(true)
    
    config
      .when(process.env.NODE_ENV === 'development', config => config.devtool('source-map'))
    
    config
      .when(process.env.NODE_ENV !== 'development',
        config => {
          config
            .plugin('ScriptExtHtmlWebpackPlugin')
            .use('script-ext-html-webpack-plugin', [{
              // `runtime` must same as runtimeChunk name. default is `runtime`
              inline: /runtime\..*\.js$/
            }])
          config
            .optimization.splitChunks({
            chunks: 'all',
            cacheGroups: {
              libs: {
                name: 'chunk-libs',
                test: /[\\/]node_modules[\\/]/,
                priority: 10,
                chunks: 'initial' // 只打包初始时依赖的第三方
              },
              elementUI: {
                name: 'chunk-elementUI', // 单独将 elementUI 拆包
                priority: 20, // 权重要大于 libs 和 app 不然会被打包进 libs 或者 app
                test: /[\\/]node_modules[\\/]element-ui[\\/]/
              }
            }
          })
          config.optimization.runtimeChunk('single')
          // 移除 console.log
          config.optimization
            .minimizer([
              new UglifyJsPlugin({
                uglifyOptions: {
                  // 移除 console
                  // 其它优化选项 https://segmentfault.com/a/1190000010874406
                  compress: {
                    warnings: false,
                    drop_console: true,
                    drop_debugger: true,
                    pure_funcs: ['console.log']
                  }
                }
              })
            ])
        }
      )
  }
}
