import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',  // 使用 history 模式，方便 iframe 嵌入
  routes: [
    {
      path: '/pro-form/basic',
      name: 'ProFormBasic',
      component: () => import('../views/pro-form/basic')
    },
    {
      path: '/dialog-form/basic',
      name: 'DialogFormBasic',
      component: () => import('../views/dialog-form/basic')
    },
    {
      path: '/pro-table/basic',
      name: 'ProTableBasic',
      component: () => import('../views/pro-table/basic')
    },
    {
      path: '/editable-pro-table/basic',
      name: 'EditableProTableBasic',
      component: () => import('../views/editable-pro-table/basic')
    },
    {
      path: '/',
      redirect: '/pro-form/basic'
    }
  ]
})