import DialogForm from './src'

// 为组件提供 install 方法
DialogForm.install = function(Vue) {
  Vue.component(DialogForm.name, DialogForm)
}

// 默认导出组件
export default DialogForm
