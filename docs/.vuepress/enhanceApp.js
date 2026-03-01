// docs/.vuepress/enhanceApp.js
import DemoIframe from '../components/DemoIframe.vue'

export default ({ Vue }) => {
  // 全局注册组件，这样所有 markdown 文件都能直接使用
  Vue.component('DemoIframe', DemoIframe)
}