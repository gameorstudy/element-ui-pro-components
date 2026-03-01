const { defineConfig } = require('@vue/cli-service')
const path = require('node:path')

const isLib = process.env.BUILD_TARGET === 'lib'

module.exports = defineConfig({
  publicPath: !isLib ? '/element-ui-pro-components/' : '/',
  pages: !isLib ? {
    index: {
      entry: 'examples/main.js',  // 明确指定入口文件
    }
  } : undefined,
  transpileDependencies: true,
  // 设置公共路径为相对路径，解决字体文件引用问题
  configureWebpack: {
    // 配置别名
    resolve: {
      alias: {
        '@packages': path.resolve(__dirname, 'packages'),
        '@examples': path.resolve(__dirname, 'examples'),
        // 把 'element-ui-pro-components' 指向本地源码
        'element-ui-pro-components': path.resolve(__dirname, 'src/index.js'),
      },
    },
    externals: isLib ? [
      'el-table-prepend',
      'element-ui',
      'vue',
      'vue-fragment',
    ] : []
  },
  devServer: {
    historyApiFallback: {
      index: '/index.html'  // 这里已经处理了本地 404
    }
  }
})
