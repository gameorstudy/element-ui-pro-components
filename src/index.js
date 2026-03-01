// 导入所有组件
import ProForm from '../packages/pro-form'
import DialogForm from '../packages/dialog-form'
import ProTable from '../packages/pro-table'
import EditableProTable from '../packages/editable-pro-table'

// 组件列表
const components = [
  ProForm,
  DialogForm,
  ProTable,
  EditableProTable
]

// ✅ 1. 全局 install 方法 - 支持 Vue.use(ElementUIProComponents)
const install = function(Vue) {
  // 检查是否已安装
  if (install.installed) {
    return
  }
  
  // 遍历注册所有组件
  components.forEach(component => {
    Vue.component(component.name, component)
  })
  
  // 标记已安装
  install.installed = true
}

// ✅ 2. 自动安装（当通过 script 标签引入时）
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// ✅ 3. 导出组件和 install 方法
export default {
  install,
  ProForm,
  DialogForm,
  ProTable,
  EditableProTable
}

// ✅ 4. 同时也支持按需引入
export {
  ProForm,
  DialogForm,
  ProTable,
  EditableProTable
}
