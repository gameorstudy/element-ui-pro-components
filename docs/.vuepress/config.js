const path = require("node:path")
const fs = require("node:fs")
module.exports = {
  base: '/element-ui-pro-components/',
  title: 'Element UI Pro Components',
  description: '基于 Element UI 的高级组件库',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  plugins: ['demo-container'],
  themeConfig: {
    repo: 'https://github.com/gameorstudy/element-ui-pro-components',
    nav: [
      { text: '指南', link: '/guide/getting-started' },
      { text: '组件', link: '/components/pro-form' },
    ],
    sidebar: {
      '/guide/': [
        {
          title: '指南',
          collapsable: false,
          children: [
            'getting-started',
            'i18n'
          ],
        }
      ],
      '/components/': [
        {
          title: '组件',
          collapsable: false,
          children: [
            'pro-form',
            'dialog-form',
            'pro-table',
            'editable-pro-table',
          ],
        },
      ],
      '/schema/': [
        {
          title: 'Schema',
          collapsable: false,
        },
      ],
    }
  },
  markdown: {
    lineNumbers: true
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          include: process.cwd(),
          exclude: /node_modules\/(?!(element-ui)\/).*/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@vue/babel-preset-jsx'],
              cacheDirectory: false
            }
          }
        },
      ]
    }
  }
}