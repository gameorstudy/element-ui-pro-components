module.exports = {
  base: '/element-ui-pro-components/docs/',
  title: 'Element UI Pro Components',
  description: '基于 Element UI 的高级组件库',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
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
          ],
        },
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
  }
}
