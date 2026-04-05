import ProForm from './src'

// 为组件提供 install 方法
ProForm.install = function(Vue) {
  Vue.component(ProForm.name, ProForm)
}

// 默认导出组件
export default ProForm
