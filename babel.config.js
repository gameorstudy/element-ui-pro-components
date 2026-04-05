const path = require('node:path')

module.exports = {
  presets: [
    '@vue/babel-preset-jsx'
  ],
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
  ],
  env: {
    utils: {
      plugins: [
        ["module-resolver", {
          root: ["element-ui-pro-components"],
          alias: {
            'element-ui-pro-components/src': 'element-ui-pro-components/lib',
          }
        }]
      ]
    },
  }
};