import EditableProTable from './src'

// 为组件提供 install 方法
EditableProTable.install = function(Vue) {
  Vue.component(EditableProTable.name, EditableProTable)
}

// 默认导出组件
export default EditableProTable
