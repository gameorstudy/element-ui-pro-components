参考文档 [Antd Pro Components](https://procomponents.ant.design/components/editable-table)
> 可编辑表格 EditableTable 主要用于在表格内直接编辑的场景。它和之前的 ProTable、ProForm 不同，主要是在于它更多适合需要更灵活的设置，或许变得受控它才能发挥更大的作用，当然把它当成黑盒子也未尝不可，所以我还是跟随 Antd pro components 设计的脚步，支持受控和非受控两种模式。同时，由于本人能力原因和 API 语义可能难以理解的原因，会减少一些 API 的支持。

EditableTable 的设计需要支持 jsx 语法，主要是为了方便开发和代码结构统一，这里先简单介绍一下 render functions & jsx，详见[官方文档](https://v2.vuejs.org/v2/guide/render-function)语法，下面我做一个简单的介绍。
如下是一段 render 函数的代码
```
render: function (createElement) {
  return createElement('h1', this.blogTitle)
}
```
它实际的作用是创建了一个 `h1` 的标签，内容是 `blogTitle` 的值，这是一个最基础的事例。下面展示了一个更为复杂的 render function。很明显，render function 不仅在编码上和可读性上都存在一定的困难，这时 jsx 应运而生。
```
createElement(
  'anchored-heading', {
    props: {
      level: 1
    }
  }, [
    createElement('span', 'Hello'),
    ' world!'
  ]
)
```
jsx (javascript xml) 熟悉 react 开发的朋友对这个很熟悉了，它支持我们在 js 代码中写入模板语法，与 vue template 有些许不同，不过也不必担心，遇到不解时[查阅资料](https://zh-hans.react.dev/learn/passing-props-to-a-component)即可。
按照如下步骤可开启支持：
1. 安装 `@vue/cli-plugin-babel` 插件
```
npm install -D @vue/cli-plugin-babel
```
2. babel.config.js 文件添加配置
```
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"]
}
```

#### EditableTable - 可编辑表格
#### API
可编辑表格 EditableTable 与 ProTable 的功能基本相同，为了方便使用 EditableTable 增加了一些预设，关掉了查询表单和操作栏
##### EditableTable Attributes
| 属性 | 描述 | 类型 | 默认值 |
| ----------- | ----------- | ----------- | ----------- |
| controlled | 是否受控，如果受控则新建、删除需要手动操作 dataSource | `boolean` | `false` |
| dataSource | 传入一个数组，是 table 渲染的元数据。如果受控，异步数据需要传入方法 | `T[]` \| `()=>Promise.resolve([])` | `[]` |
| rowKey | 对应 el-table 的 row-key，受控时该属性是必填的，防止编辑、校验提示等行为异常，可以是 uid。非受控时会默认添加 temp_uid 作为 row-key | `String` | - |
| recordCreatorProps | 新建一行数据的相关配置 | `RecordCreatorProps` & `ButtonProps` | - |
| maxLength | 最大的行数，到达最大行数新建按钮会自动消失 | `number` | - |
| editable | 可编辑表格的相关配置 | `TableRowEditable` | - |
| loading | 表格数据请求加载状态，非受控模式会自动在异步获取数组时触发 | `boolean` | - |
| tableClassName | 组件内 el-table 的 `className` | `string` | - |
| tableProps | el-table attributes 的配置 | [TableProps](https://element.eleme.io/2.15/#/zh-CN/component/table) | - |
| tableEvents | el-table events | [TableEvents](https://element.eleme.io/2.15/#/zh-CN/component/table) | - |
| columns | 列表项配置 | `columnsConfig` | - |
| defaultSize | 默认的 size | `medium` \| `small` \| `mini` | - |
| addRowRecord | 新增一行的方法，用于受控模式添加 rowKey 值。非受控时会覆盖默认行为 | `(defaultRowData: T) => void` | - |
##### EditableTable Events
| 属性 | 描述 | 类型 | 默认值 |
| ----------- | ----------- | ----------- | ----------- |
##### EditableTable Methods
| 属性 | 描述 | 类型 | 默认值 |
| ----------- | ----------- | ----------- | ----------- |
| getFormRef | 可编辑表格内 el-form 组件引用 | `() => Ref` | - |
| getTableRef | 可编辑表格内 el-table 组件引用 | `() => Ref` | - |
| getRowData | 非受控模式下获取行数据，可以传入第几行的数据，也可以传入 rowKey 的值，根据你列的唯一key 来获得 | `(rowIndex: string \| number) => T \| undefined` | - |
| getRowsData | 非受控模式下获取整个 table 的数据 | `() => T[] \| undefined` | - |
| setRowData | 非受控模式设置一行的数据，会将数据进行简单的 merge，支持传入行号，也支持列的唯一 key 来设置 | `(rowIndex: string \| number, data: Partial<T>) => void` | - |
##### RecordCreatorProps
为了使用，预设了一个新建的功能，大多数情况下已经可以满足大部分新建的需求。与 Pro 系列组件的 API 相同，`recordCreatorProps={false}` 就可以关掉按钮，同时使用 `addEditRecord` 来控制新建行
| 属性 | 描述 | 类型 | 默认值 |
| ----------- | ----------- | ----------- | ----------- |
| position | 顶部添加还是末尾添加 | `top` \| `bottom` | `bottom` |
| newRecordType | 新增一行的方式，默认是缓存，取消后就会消失。如果设置为 dataSource，取消后也不会消失，只能删除 | `dataSource` \| `any` | - |
| creatorButtonText | 设置按钮文案 | `新增一行` | - |
| style | 按钮的样式设置，可以设置按钮是否显示，这样可以做最大行限制和最小行限制之类的功能 | `Object` | - |
##### TableRowEditable
| 属性 | 描述 | 类型 | 默认值 |
| ----------- | ----------- | ----------- | ----------- |
| type | 可编辑表格的类型，单行编辑或者多行编辑 |	`single` \| `multiple` | `single` |
| onSave | 保存一行的时候触发 | `(key: Key, row: T, originRow:T) => Promise<any>` | - |
| saveText | 保存一行的文字 | `String` | 保存 |
| onDelete | 删除一行的时候触发 | `(key: Key, row: T) => Promise<any>` | - |
| deleteText | 删除一行的文字 | `String` | 删除 |
| onCancel | 取消编辑一行时触发 | `(key: Key, row: T, originRow:T) => Promise<any>` | - |
| cancelText | 取消编辑一行的文字 | `String` | 取消 |
| deletePopconfirmMessage | 删除时弹出的确认框提示消息 | `String` | 删除此项？ |
| onlyOneLineEditorAlertMessage	| 只能同时编辑一行的提示 | `String` | 只能同时编辑一行 |
| onlyAddOneLineAlertMessage | 只能同时新增一行的提示 | `String` | 只能新增一行 |
##### columnConfig 列定义 包含了 element ui [table column attributes](https://element.eleme.io/2.15/#/zh-CN/component/table#table-column-attributes)
> 因为 el-form-item 绑定的是表单的列，所以 formItemProps 的 prop 字段直接取同级的 prop。

新增属性如下表 
| 属性 | 描述 | 类型 | 默认值 |
| ----------- | ----------- | ----------- | ----------- |
| formItemProps | 传递给 el-form-item 的 attributes 配置，rules 建议写这里 | [FormItemProps](https://element.eleme.io/2.15/#/zh-CN/component/form#form-item-attributes) | - |
| valueType | 表单组件类型，会生成不同的渲染器，对应 `element` 的值，比如 `input` `select` `date-picker`；如果填 slot 支持自定义，name 取表单配置项或表格的 prop 值 | `el-[element]` \| `slot` | - |
| fieldProps | 查询表单的 attributes，会透传给表单项，如果渲染出来的是 input，就支持 input 的所有 props，同理如果是 select，也支持 select 的所有 props。| `object` | - |
| fieldEvents | 查询表单的 events，会透传给表单项，如果渲染出来的是 input，就支持 input 的所有 events，同理如果是 select，也支持 select 的所有 events。| `{ // todo }` | - |
| options | el-select, el-checkbox-group, el-radio-group 的数据格式，详见下面提示 | `Array` | - |
| valueEnum | 值的枚举，会自动转化把值当成 `key` 来取出要显示的内容；`valueType: "select"`时，会转化成下拉选项 | { "todo": "待办", "done": "已完成" } | - |
| optionLoader | 返回表单组件的下拉数据，如 `select` `cascader`，返回值需要转化成组件支持的格式 | `() => Promise.resolve([{ label: '标签', value: '值'}])` | - |
| key | 对于没有 `prop` 的 `column` 必须提供一个 `key` 用于渲染 | `String` | - |
| hideInTable | 在 el-table 中不展示此项 | `boolean` | - |
| initialValue | 表单初始值，新建一行数据会默认绑定 | `any` | - |
| renderCellHeader | 因为 el-table 默认的 render-header 属性写法在控制台会打印警告，提示使用 `slot`，所以重写。| `(scope) => jsxElement` | - |
> 当使用 Radio 单选框和 Checkbox 多选框时，type 分别传 radio-group 和 checkbox-group，options 传 [{ label: '标签', value: '值' }] 生成选项。
当 select 要使用分组时，只需要传递正确的[数据结构](https://element.eleme.io/2.15/#/zh-CN/component/select#fen-zu)即可，判断依据是列表第一条数据包含 options 数组。
##### el-form-item slot
| name | 描述 |
| ----------- | ----------- |
| `[prop]` | Form Item 的内容，参数为 { form, formItem } |
