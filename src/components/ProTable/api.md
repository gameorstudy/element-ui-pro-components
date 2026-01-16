参考文档 [Antd Pro Components](https://procomponents.ant.design/components/table?current=1&pageSize=5)
> Pro Table 的功能极为强大， 这里借鉴了大量的 API，基于开发框架的差异（react & vue），体验上有一定的差异。

ProTable 的设计需要支持 jsx 语法，主要是为了方便开发和代码结构统一，这里先简单介绍一下 render functions & jsx，详见[官方文档](https://v2.vuejs.org/v2/guide/render-function)语法，下面我做一个简单的介绍。
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
```
<anchored-heading level={1}>
  <span>Hello</span> world!
</anchored-heading>
```

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
#### ProTable - 高级表格
ProTable 的诞生是为了解决项目中需要写很多 table 的样板代码的问题，所以在其中封装了很多常用的逻辑。这些封装可以简单的分类为预设行为与预设逻辑。

![Template](../ProTable/assets/template.png "template")
<font color="red">图片来源 antd pro table</font>
#### 何时使用
当你的表格需要与服务端进行交互或者需要多种单元格样式时，ProTable 是不二选择。

#### API
ProTable 在 el-table 上进行了一层封装，支持了一些预设，并且封装了一些行为。这里只列出与 el-table 不同的 API。

##### ProTable Attributes
| 属性 | 描述 | 类型 | 默认值 |
| ----------- | ----------- | ----------- | ----------- |
| search | 搜索表单，传入对象时为搜索表单的配置 | `boolean \| SearchConfig` | `true` |
| initialValues | 表单默认值，组件初始渲染绑定 | `object` | - |
| columnSettings | 列设置 | `boolean \| ColumnSettingsConfig` | `true` |
| defaultData | 默认的数据 | `[]` | - |
| dataSource | Table 的数据| `[]` | - |
| loading | 表格数据请求加载状态 | `boolean` | - |
| total | 数据总条数 | `number` | 0 |
| tableClassName | 封装的 table 的 `className` | `string` | - |
| tableProps | el-table attributes 的配置 | [TableProps](https://element.eleme.io/2.15/#/zh-CN/component/table) | - |
| tableEvents | el-table events，默认添加了 `sort-change` 事件 | [TableEvents](https://element.eleme.io/2.15/#/zh-CN/component/table) | - |
| columns | 列表项配置 | `columnsConfig` | - |
| paginationProps | el-pagination attributes 的配置，默认完整配置 | `PaginationConfig` | - |
| defaultSize | 默认的 size | `medium` \| `small` \| `mini` | - |
| manualRequest | 是否需要手动触发首次请求，配置为 `true` 时不可隐藏搜索表单 | `boolean` | `false` |
##### ProTable Events
| 属性 | 描述 | 类型 | 默认值 |
| ----------- | ----------- | ----------- | ----------- |
| onParams | 请求的参数（包含`分页`、`排序`），`查询` `重置` 都会触发，用来实现 `接口请求` | `object` | - |
| onSubmit | 提交表单时触发 | `(params: U) => void` | - |
| onReset | 重置表单时触发 | `() => void` | - |
| onCollapse | 收起按钮的事件 | `(collapsed: boolean) => void;` | - |
##### ProTable Methods
| 属性 | 描述 | 类型 | 默认值 |
| ----------- | ----------- | ----------- | ----------- |
| reload | 刷新，接收一个参数：是否重置页码，`resetPageIndex` 默认 `true` | `(resetPageIndex: boolean) => void` | - |
##### 标题栏 slot
| name | 描述 |
| ----------- | ----------- |
| - | 高级筛选栏 和 表格区域之间的区域 |
##### columnSettingsConfig
`columnConfig` 的 `label` 表示显示的标题，如果是自定义标签需要提供 `label`。虽然 `labelSlot` 可以渲染，但是参数一致性问题不能解决。`columnConfig` 的 `prop` 字段用于勾选和取消勾选，但如果 `columnConfig` 里设置了 `disabled: true`，表示不可取消选择，则可不提供 `prop`，反之需要 。
| 属性 | 描述 | 类型 | 默认值 |
| ----------- | ----------- | ----------- | ----------- |
```
columnSettings = {
    draggable: true, // 可拖拽排序
    checkable: true, // 显示勾选框
    persistenceKey: '[key]-pro-table', // 持久化 key
    persistenceType: 'sessionStorage', // 存储类型
    resetText: '重置', // 重置按钮文本
    settingText: '列设置', // 按钮文本
  }
```
##### searchConfig
| 属性 | 描述 | 类型 | 默认值 |
| ----------- | ----------- | ----------- | ----------- |
| searchText | 查询按钮的文本 | `string` | 查询 |
| resetText | 重置按钮的文本 | `string` | 重置 |
| labelWidth | 标签的宽度 | `string` | `80px` |
| labelPosition | 表单域标签的位置，如果值为 left 或者 right 时，则需要设置 `label-width` | `left` \| `right` | `right` |
| rowConfig | Row Attributes | [RowProps](https://element.eleme.io/2.15/#/zh-CN/component/layout#row-attributes) | `{ gutter: 8 }` |
| colConfig | Col Attributes | [ColProps](https://element.eleme.io/2.15/#/zh-CN/component/layout#col-attributes) | defaultColConfig |
| className | 封装的搜索 Form 的 `className` | `string` | - |
| defaultCollapsed | 默认是否收起 | `boolean` | `true` |
| collapsed | 是否收起 | `boolean` | - |
| defaultExpandedRows | 默认展开的行数 | `number` | `2` |
##### defaultColConfig
```
const defaultColConfig = {
  xs: 24, // <768px
  sm: 24, // >=768px
  md: 12, // >=992px
  lg: 8,  // ≥1200px
  xl: 6,  // ≥1920px
};
```
##### PaginationConfig 包含了 element ui [pagination attributes](https://element.eleme.io/2.15/#/zh-CN/component/pagination#attributes)
新增属性如下表
| 属性 | 描述 | 类型 | 默认值 |
| ----------- | ----------- | ----------- | ----------- |
| pageKey | 页码的 `key` | `string` | `pageNum` |
| sizeKey | 页数的 `key` | `string` | `pageSize` |
```
paginationConfig = {
  'page-sizes': [10, 20, 30, 50],
  layout: 'total, sizes, prev, pager, next, jumper',
  'hide-on-single-page': true, // 只有一页时是否隐藏
  total: this.total // prop
}
```
##### columnConfig 列定义 包含了 element ui [table column attributes](https://element.eleme.io/2.15/#/zh-CN/component/table#table-column-attributes)
> 配置包含查询表单，如果查询表单和列表项的字段是同一个，formItemProps 的 prop 字段可以省略；同理，如果查询表单的标题和列表项的标题一致，formItemProps 的 label 字段可以省略。

新增属性如下表 
| 属性 | 描述 | 类型 | 默认值 |
| ----------- | ----------- | ----------- | ----------- |
| formItemProps | 传递给 el-form-item 的 attributes 配置，rules 配置不生效 | [FormItemProps](https://element.eleme.io/2.15/#/zh-CN/component/form#form-item-attributes) | - |
| valueType | 表单组件类型，会生成不同的渲染器，对应 `element` 的值，比如 `input` `select` `date-picker`；如果填 slot 支持自定义，name 取表单配置项或表格的 prop 值 | `el-[element]` \| `slot` | - |
| fieldProps | 查询表单的 attributes，会透传给表单项，如果渲染出来的是 input，就支持 input 的所有 props，同理如果是 select，也支持 select 的所有 props。| `object` | - |
| fieldEvents | 查询表单的 events，会透传给表单项，如果渲染出来的是 input，就支持 input 的所有 events，同理如果是 select，也支持 select 的所有 events。| `object` | - |
| options | el-select, el-checkbox-group, el-radio-group 的数据格式，详见下面提示 | `Array` | - |
| valueEnum | 值的枚举，会自动转化把值当成 `key` 来取出要显示的内容；`valueType: "select"`时，会转化成下拉选项 | { "todo": "待办", "done": "已完成" } | - |
| optionLoader | 返回表单组件的下拉数据，如 `select` `cascader`，返回值需要转化成组件支持的格式 | `() => Promise.resolve([{ label: '标签', value: '值'}])` | - |
| order | 查询表单中的权重，权重大排序在前 | `number` | - |
| labelSlot | 标签文本的内容，同 [Form-Item Slot label](https://element.eleme.io/2.15/#/zh-CN/component/form#form-item-slot)，name 取表单配置项或表格的 `[prop]-label` 值 | `boolean` | - |
| hideInSearch | 在查询表单中不展示此项, `valueType` 存在时不设置 `true` 时默认展示在搜索表单中 | `boolean` | - |
| hideInTable | 在 el-table 中不展示此项 | `boolean` | - |
| initialValue | 表单初始值，优先级高于 initialValues，<font color="#f56c6c">不建议一个 prop 同时设置 initialValue 和 initialValues</font> | `any` | - |
| disabled | 列设置中 `disabled` 的状态 | `boolean` \| `{ checkbox: boolean; }` | - |
| render | 类似自定义 table-column 的 `slot`。 | `(scope) => jsxElement` | - |
| renderCustomHeader | 因为 el-table 默认的 render-header 属性写法在控制台会打印警告，提示使用 `slot`，所以重写。| `(scope) => jsxElement` | - |
> 当使用 Radio 单选框和 Checkbox 多选框时，type 分别传 radio-group 和 checkbox-group，options 传 [{ label: '标签', value: '值' }] 生成选项。
当 select 要使用分组时，只需要传递正确的[数据结构](https://element.eleme.io/2.15/#/zh-CN/component/select#fen-zu)即可，判断依据是列表第一条数据包含 options 数组。
##### el-form-item slot
| name | 描述 |
| ----------- | ----------- |
| `[prop]` | Form Item 的内容，参数为 { form, formItem } |
| `[prop]-label` | 标签文本的内容，参数为 { formItem } |
