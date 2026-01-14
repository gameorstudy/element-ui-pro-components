import Vue from 'vue'
import App from './App.vue'
import './plugins/element' // 引入 element 配置

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
