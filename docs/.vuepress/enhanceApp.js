import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Fragment from 'vue-fragment';
import ElTablePrepend from 'el-table-prepend'
import ElementUIProComponents from 'element-ui-pro-components'
import 'element-ui-pro-components/lib/index.css'

export default ({ router, Vue }) => {
  Vue.use(ElementUI)
  Vue.use(Fragment.Plugin)
  Vue.use(ElTablePrepend)
  Vue.use(ElementUIProComponents)
  router.afterEach((to, from) => {
    if (to.hash) {
      setTimeout(() => {
        const element = document.querySelector(to.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);
    }
  });
};