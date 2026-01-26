参考文档 [Antd Pro Components](https://procomponents.ant.design/components/modal-form)
> DialogForm 是 ProForm 的一个变体，本质上仍然是个表单。不支持通过 footer 来自定义页脚，如果要定义页脚需要使用 submitter.slot = true 来进行自定义。DialogForm 表单的表现与 ProForm 相同，可以从 ProForm 直接修改而来。
#### DialogForm - 弹框表单
DialogForm 在 el-dialog 组件上进行了一层封装，表单内容延用 ProForm 的设计，方便弹框表单开发。
##### API
##### DialogForm Attributes
结合了 el-dialog 和 ProForm 属性。
| 属性 | 描述 | 类型 | 默认值 |
| ----------- | ----------- | ----------- | ----------- |
| visible / v-model | 是否打开弹框，如果不用 `v-model` 则需要配合 `dialogEvent.close` 手动控制 | `boolean` | - |
| title | 弹框的标题 | `String` | - |
| titleSlot | 是否自定义弹框的标题 | `boolean` | - |
| width |	弹框的宽度 | `String` | - |
| dialogProps | el-dialog attributes。注意：不支持 'visible'，请使用全局的 visible | [DialogProps](https://element.eleme.io/2.15/#/zh-CN/component/dialog#attributes) | - |
| dialogEvents | el-dialog events | [DialogEvents](https://element.eleme.io/2.15/#/zh-CN/component/dialog#events) | - |
| formProps | el-form attributes 的配置 | [FormProps](https://element.eleme.io/2.15/#/zh-CN/component/form#form-attributes) | - |
| formClassName | 封装的搜索 el-form 的 `className` | `string` | - |
| initialValues | 表单默认值，组件初始渲染绑定 | `object` | - |
| submitter | 提交按钮相关配置 | `boolean` \| `SubmitterConfig` | - |
| grid | 开启栅格化模式，宽度默认百分比 | `boolean` | - |
| rowProps | 开启 `grid` 模式时传递给 `el-row` | [RowProps](https://element.eleme.io/2.15/#/zh-CN/component/layout#row-attributes) | { gutter: 8 } |
| formItems | 表单项配置 | `formItemsConfig` | - |
##### Dialog title slot
| name | 描述 |
| ----------- | ----------- |
| title | Dialog 标题区的内容 |
##### Dialog Events
| 属性 | 描述 | 类型 | 默认值 |
| ----------- | ----------- | ----------- | ----------- |
| onFinish | 提交数据时触发 | `async (values)=>void` | - |
##### ProForm Methods
| 属性 | 描述 | 类型 | 默认值 |
| ----------- | ----------- | ----------- | ----------- |
| getFormRef | 获取 el-form 的 ref | `object` | - |
| getForm | 获取表单数据 | `object` | - |
| setFieldsValue | 手动更新表单数据 | `(object) => void` | - |
| setFieldValue | 手动更新单个字段数据 | `(key, value) => void` | - |
| reset | 重置表单 | `() => void` | - |
| resetAllFields | 重置表单的拓展方法，剔除了非表单的字段 | `() => void` | - |
| submit | 提交表单 | `() => void` | - |
##### submitter
支持自定义配置
| 属性 | 描述 | 类型 | 默认值 |
| ----------- | ----------- | ----------- | ----------- |
| searchConfig | 搜索的配置，一般用来配置文本 | `{ cancelText, confirmText }` | - |
| confirmButtonProps | 确定按钮的 props | [ButtonProps](https://element.eleme.io/2.15/#/zh-CN/component/button#attributes) | - |
| cancelButtonProps | 取消按钮的 props | [ButtonProps](https://element.eleme.io/2.15/#/zh-CN/component/button#attributes) | - |
| slot | 完全自定义整个区域 | `boolean` | - |
##### submitConfig
```
submitter = {
  // 配置按钮文本
  searchConfig: {
    cancelText: '取消',
    confirmText: '确定'
  },
  // 配置按钮的属性
  cancelButtonProps: {},
  confirmButtonProps: {
    // 按钮加载...
    loading: true
  },
  // 完全自定义整个区域
  slot: true
}
```
##### submitter slot
| name | 描述 |
| ----------- | ----------- |
| submitter | 自定义按钮，参数为 { action: { reset, resetAllFields, submit }, form } |
##### formItemsConfig 包含了 element ui [form item attributes](https://element.eleme.io/2.15/#/zh-CN/component/form#form-item-attributes)
新增属性如下表
| 属性 | 描述 | 类型 | 默认值 |
| ----------- | ----------- | ----------- | ----------- |
| valueType | 表单组件类型，会生成不同的渲染器。值为 `input` `select` `date-picker`，会生成 `el-[element]`；值为 `slot` 表示自定义，name 取表单配置项的 `prop` 值 | `el-[element]` \| `slot` | - |
| fieldProps | 查询表单的 attributes，会透传给表单项，如果渲染出来的是 input，就支持 input 的所有 props，同理如果是 select，也支持 select 的所有 props。| `object` | - |
| fieldEvents | 查询表单的 events，会透传给表单项，如果渲染出来的是 input，就支持 input 的所有 events，同理如果是 select，也支持 select 的所有 events。| `object` | - |
| options | el-select, el-checkbox-group, el-radio-group 的数据格式，详见下面提示 | `Array` | - |
| valueEnum | 值的枚举，`valueType: "select"`时，自动转换成下拉选项 | `{ "todo": "待办", "done": "已完成" }` | - |
| optionLoader | 返回表单组件的下拉数据，如 `select` `cascader`，返回值需要转化成组件支持的格式 | `() => Promise.resolve([{ label: '标签', value: '值'}])` | - |
| initialValue | 默认值，优先级高于 initialValues，<font color="#f56c6c">不建议一个 prop 同时设置 initialValue 和 initialValues</font> | `any` | - |
| colProps | 开启 `grid` 模式时传递给 `el-col` | [ColProps](https://element.eleme.io/2.15/#/zh-CN/component/layout#col-attributes) | - |
| hideInForm | 在表单中不展示此项 | `boolean` | - |
| labelSlot | 标签文本的内容，同 [Form-Item Slot label](https://element.eleme.io/2.15/#/zh-CN/component/form#form-item-slot)，name 取表单配置项或表格的 `[prop]-label` 值 | `boolean` | - |
| slot | 自定义 el-form-item 整体的内容 | `boolean` | - |
> 当使用 Radio 单选框和 Checkbox 多选框时，type 分别传 radio-group 和 checkbox-group，options 传 [{ label: '标签', value: '值' }] 生成选项。
当 select 要使用分组时，只需要传递正确的[数据结构](https://element.eleme.io/2.15/#/zh-CN/component/select#fen-zu)即可，判断依据是列表第一条数据包含 options 数组。
##### 覆写 el-form-item slot
| name | 描述 |
| ----------- | ----------- |
| `[prop]` | 自定义 el-form-item，参数为{ form, formItem } |
##### el-form-item slot
| name | 描述 |
| ----------- | ----------- |
| `[prop]` | Form Item 的内容，参数为 { form, formItem } |
| `[prop]-label` | 标签文本的内容，参数为 { formItem } |
