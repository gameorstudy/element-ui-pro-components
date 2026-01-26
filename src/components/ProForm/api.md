参考文档 [Antd Pro Components](https://procomponents.ant.design/components/form)
> 与 ProTable 组件不同，ProForm 组件没有那么固定的模板，封装的特性有较多主观的想法。

> ProForm 组件重点在于自定义表单元素的设计， `jsx` or `slot`，本打算延续 ProTable 的设计继续采用 `jsx`，但还是放弃了。主要有两点：一是 pro form 自定义内容非常频繁，写过多的 `jsx` 语法无疑是在写 `react` 代码；二是好用的 `v-model` 语法不能使用。
#### ProForm - 高级表单
ProForm 是通过配置动态生成 el-form 组件，减少模板语法，使表单开发更简单。
##### API
ProForm 在 el-form 上进行了一层封装，支持了一些预设，并且封装了一些行为。这里只列出与 el-form 不同的 API。
##### ProForm Attributes
| 属性 | 描述 | 类型 | 默认值 |
| ----------- | ----------- | ----------- | ----------- |
| formProps | el-form attributes 的配置 | [FormProps](https://element.eleme.io/2.15/#/zh-CN/component/form#form-attributes) | - |
| className | 封装的搜索 el-form 的 `className` | `string` | - |
| initialValues | 表单默认值，组件初始渲染绑定 | `object` | - |
| submitter | 提交按钮相关配置 | `boolean` \| `SubmitterConfig` | - |
| grid | 开启栅格化模式，宽度默认百分比 | `boolean` | - |
| rowProps | 开启 `grid` 模式时传递给 `el-row` | [RowProps](https://element.eleme.io/2.15/#/zh-CN/component/layout#row-attributes) | { gutter: 8 } |
| formItems | 表单项配置 | `formItemsConfig` | - |
##### ProTable Events
| 属性 | 描述 | 类型 | 默认值 |
| ----------- | ----------- | ----------- | ----------- |
| onFinish | 提交表单且数据验证成功后回调事件 | `(values) => void` | - |
| onError | 提交表单数据验证失败后的回调事件 | `(object) => void` | - |
| onReset | 点击重置按钮的回调，这时数据已重置 | `() => void` | - |
##### ProForm Methods
| 属性 | 描述 | 类型 | 默认值 |
| ----------- | ----------- | ----------- | ----------- |
| getFormRef | 获取 el-form 的 ref | `() => Ref` | - |
| getForm | 获取表单数据 | `() => Ref` | - |
| setFieldsValue | 手动更新表单数据 | `(object) => void` | - |
| setFieldValue | 手动更新单个字段数据 | `(key, value) => void` | - |
| reset | 重置表单 | `() => void` | - |
| resetAllFields | 重置表单的拓展方法，剔除了非表单的字段 | `() => void` | - |
| submit | 提交表单 | `() => void` | - |
##### submitter
支持自定义配置
| 属性 | 描述 | 类型 | 默认值 |
| ----------- | ----------- | ----------- | ----------- |
| searchConfig | 搜索的配置，一般用来配置文本 | `{ resetText, submitText }` | - |
| submitButtonProps | 提交按钮的 props | [ButtonProps](https://element.eleme.io/2.15/#/zh-CN/component/button#attributes) | - |
| resetButtonProps | 重置按钮的 props | [ButtonProps](https://element.eleme.io/2.15/#/zh-CN/component/button#attributes) | - |
| slot | 完全自定义整个区域 | `boolean` | - |
##### submitConfig
```
submitter = {
  // 配置按钮文本
  searchConfig: {
    resetText: '重置',
    submitText: '提交'
  },
  // 配置按钮的属性
  resetButtonProps: {
    style: {
      // 隐藏重置按钮
      display: 'none'
    }
  },
  submitButtonProps: {},
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
