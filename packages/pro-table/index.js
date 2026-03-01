import ProTable from './src'

// 为组件提供 install 方法
ProTable.install = function(Vue) {
  Vue.component(ProTable.name, ProTable)
}

// 默认导出组件
export default ProTable
