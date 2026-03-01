const isLib = process.env.BUILD_TARGET === 'lib'

module.exports = {
  presets: [
    [
      '@vue/cli-plugin-babel/preset', {
        useBuiltIns: isLib ? false : 'usage'  // 直接关闭，不需要 corejs
      }
    ]
  ],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ],
  ]
}
