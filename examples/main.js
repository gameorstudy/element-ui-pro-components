import Vue from 'vue'
import App from './App.vue'
import router from './router'  // 导入 router 实例
// 导入 Element UI
import './plugins/element'

// 引入 iframe-resizer 内容脚本
import 'iframe-resizer/js/iframeResizer.contentWindow.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
