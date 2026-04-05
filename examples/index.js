import Vue from 'vue';
import App from './App.vue';
import router from './router'
import ElementUI from 'element-ui';
import Fragment from 'vue-fragment'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI, { locale })
Vue.use(Fragment.Plugin)

Vue.config.productionTip = false; // 关闭生产环境提示

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');