import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',  // 使用 history 模式，方便 iframe 嵌入
  base: '/element-ui-pro-components/',
  routes: [
    {
      path: '/pro-form/basic',
      name: 'ProFormBasic',
      component: () => import('../views/pro-form/basic.vue')
    },
    {
      path: '/pro-form/grid',
      name: 'ProFormGrid',
      component: () => import('../views/pro-form/grid.vue')
    },
    {
      path: '/pro-table/basic',
      name: 'ProTableBasic',
      component: () => import('../views/pro-table/basic.vue')
    },
    {
      path: '/dialog-form/basic',
      name: 'DialogFormBasic',
      component: () => import('../views/dialog-form/basic.vue')
    },
    {
      path: '/dialog-form/grid',
      name: 'DialogFormGrid',
      component: () => import('../views/dialog-form/grid.vue')
    },
    {
      path: '/editable-pro-table/basic',
      name: 'EditableProTableBasic',
      component: () => import('../views/editable-pro-table/basic.vue')
    },
    {
      path: '/',
      redirect: '/pro-form/basic'
    }
  ]
})
