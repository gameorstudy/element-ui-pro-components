#### ProTable - 高级表格
ProTable 的诞生是为了解决项目中需要写很多 table 的样板代码的问题，所以在其中封装了很多常用的逻辑。这些封装可以简单的分类为预设行为与预设逻辑。

![Template](./assets/template.png "template")
<span style="color: #f56c6c">图片来源 antd pro table</span>

##### 在线示例

<style>
/* 只在当前页面生效 */
.theme-default-content:not(.custom) {
  max-width: 1200px;
}
</style>

##### 基础用法
<DemoIframe src="/element-ui-pro-components/pro-table/basic" />

#### API
ProTable 在 el-form 和 el-table 上进行了一层封装，支持了一些预设。这里只列出与 el-table 不同的 API。
##### ProTable Attributes
<table style="display: table">
  <tr>
    <th style="width: 100px">参数</th>
    <th>说明</th>
    <th style="width: 200px">类型</th>
    <th style="width: 80px">默认值</th>
  </tr>
  <tr>
    <td>search</td>
    <td>搜索表单，传入对象时为搜索表单的配置</td>
    <td><code>boolean | searchConfig</code></td>
    <td><code>true</code></td>
  </tr>
  <tr>
    <td>className</td>
    <td>组件内 el-table 的类名</td>
    <td><code>string</code></td>
    <td>-</td>
  </tr>
  <tr>
    <td>dataSource</td>
    <td>el-table 的数据</td>
    <td><code>Array</code></td>
    <td>-</td>
  </tr>
  <tr>
    <td>loading</td>
    <td>表格数据请求加载状态</td>
    <td><code>boolean</code></td>
    <td>-</td>
  </tr>
  <tr>
    <td>total</td>
    <td>数据总条数</td>
    <td><code>number</code></td>
    <td><code>0</code></td>
  </tr>
  <tr>
    <td>tableProps</td>
    <td>el-table attributes 的配置</td>
    <td>
      <a href="https://element.eleme.io/2.15/#/zh-CN/component/table#table-attributes" target="_blank">TableProps</a>
    </td>
    <td>-</td>
  </tr>
  <tr>
    <td>tableEvents</td>
    <td>el-table events 的配置，默认添加了 <code>sort-change</code> 事件</td>
    <td>
      <a href="https://element.eleme.io/2.15/#/zh-CN/component/table#table-events" target="_blank">TableEvents</a>
    </td>
    <td>-</td>
  </tr>
  <tr>
    <td>columns</td>
    <td>列定义</td>
    <td><code>columnsConfig[]</code></td>
    <td>-</td>
  </tr>
  <tr>
    <td>paginationProps</td>
    <td>el-pagination attributes 的配置</td>
    <td><a href="https://element.eleme.io/2.15/#/zh-CN/component/pagination#attributes" target="_blank">PaginationProps</a></td>
    <td><code>defaultPaginationProps</code></td>
  </tr>
  <tr>
    <td>paginationMapping</td>
    <td>分页参数字段映射配置</td>
    <td><code>paginationMapping</code></td>
    <td>-</td>
  </tr>
  <tr>
    <td>initialValues</td>
    <td>表单默认值</td>
    <td><code>object</code></td>
    <td>-</td>
  </tr>
  <tr>
    <td>defaultSize</td>
    <td>默认的 size</td>
    <td><code>medium | small | mini</code></td>
    <td>-</td>
  </tr>
  <tr>
    <td>manualRequest</td>
    <td>是否需要手动触发首次请求。配置为 <code>true</code> 时不可隐藏搜索表单</td>
    <td><code>boolean</code></td>
    <td><code>false</code></td>
  </tr>
  <tr>
    <td>columnSettings</td>
    <td>列设置</td>
    <td><code>boolean | columnSettingsConfig</code></td>
    <td><code>true</code></td>
  </tr>
</table>

##### ProTable Events
<table style="display: table">
  <tr>
    <th style="width: 100px">参数</th>
    <th>说明</th>
    <th style="width: 200px">类型</th>
    <th style="width: 80px">默认值</th>
  </tr>
  <tr>
    <td>onParams</td>
    <td><code>查询</code>、<code>重置</code>、<code>分页</code>、<code>排序</code> 触发，获取到参数</td>
    <td><code>(params) => Promise&lt;void&gt; | void</code></td>
    <td>-</td>
  </tr>
  <tr>
    <td>onSubmit</td>
    <td>提交表单时触发</td>
    <td><code>(params) => void</code></td>
    <td>-</td>
  </tr>
  <tr>
    <td>onReset</td>
    <td>重置表单时触发</td>
    <td><code>() => void</code></td>
    <td>-</td>
  </tr>
  <tr>
    <td>onCollapse</td>
    <td>展开、收起搜索表单</td>
    <td><code>(collapsed: boolean) => void</code></td>
    <td>-</td>
  </tr>
</table>

##### ProTable Methods
<table style="display: table">
  <tr>
    <th style="width: 100px">参数</th>
    <th>说明</th>
    <th style="width: 200px">类型</th>
    <th style="width: 80px">默认值</th>
  </tr>
  <tr>
    <td>reload</td>
    <td>刷新，接收一个参数：是否重置页码，<code>resetPageIndex</code> 默认 <code>true</code></td>
    <td><code>(resetPageIndex: boolean) => void</code></td>
    <td>-</td>
  </tr>
  <tr>
    <td>getTableRef</td>
    <td>获取 el-table 的 ref</td>
    <td><code>() => ref</code></td>
    <td>-</td>
  </tr>
</table>

##### 标题栏 slot
<table style="display: table">
  <tr>
    <th style="width: 60px">name</th>
    <th>描述</th>
  </tr>
  <tr>
    <td>-</td>
    <td>高级筛选栏 和 表格区域之间的区域</td>
  </tr>
</table>

##### searchConfig
<table style="display: table">
  <tr>
    <th style="width: 100px">参数</th>
    <th>说明</th>
    <th style="width: 200px">类型</th>
    <th style="width: 80px">默认值</th>
  </tr>
  <tr>
    <td>searchText</td>
    <td>查询按钮的文本</td>
    <td><code>string</code></td>
    <td><code>查询</code></td>
  </tr>
  <tr>
    <td>resetText</td>
    <td>重置按钮的文本</td>
    <td><code>string</code></td>
    <td><code>重置</code></td>
  </tr>
  <tr>
    <td>labelWidth</td>
    <td>标签的宽度</td>
    <td><code>string</code></td>
    <td><code>80px</code></td>
  </tr>
  <tr>
    <td>labelPosition</td>
    <td>标签的位置</td>
    <td><code>left | right</code></td>
    <td><code>right</code></td>
  </tr>
  <tr>
    <td>rowProps</td>
    <td>el-row attributes 的配置</td>
    <td><a href="https://element.eleme.io/2.15/#/zh-CN/component/layout#row-attributes" target="_blank">RowProps</a></td>
    <td>{ gutter: 8 }</td>
  </tr>
  <tr>
    <td>colProps</td>
    <td>el-col attributes 的配置</td>
    <td><a href="https://element.eleme.io/2.15/#/zh-CN/component/layout#col-attributes" target="_blank">ColProps</a></td>
    <td><code>defaultColConfig</code></td>
  </tr>
  <tr>
    <td>className</td>
    <td>组件内 el-form 的类名</td>
    <td><code>string</code></td>
    <td>-</td>
  </tr>
  <tr>
    <td>defaultCollapsed</td>
    <td>默认是否收起</td>
    <td><code>boolean</code></td>
    <td><code>true</code></td>
  </tr>
  <tr>
    <td>collapsed</td>
    <td>是否收起</td>
    <td><code>boolean</code></td>
    <td>-</td>
  </tr>
  <tr>
    <td>defaultExpandedRows</td>
    <td>默认展开的行数</td>
    <td><code>number</code></td>
    <td><code>2</code></td>
  </tr>
</table>

##### defaultColConfig
```js
const defaultColConfig = {
  xs: 24, // <768px
  sm: 24, // >=768px
  md: 12, // >=992px
  lg: 8,  // ≥1200px
  xl: 6,  // ≥1920px
}
```

##### columnsConfig 列定义
支持 <a href="https://element.eleme.io/2.15/#/zh-CN/component/form#form-item-attributes" target="_blank">el-table-column attributes</a> 新增了以下 API。
<table style="display: table">
  <tr>
    <th style="width: 100px">参数</th>
    <th>说明</th>
    <th style="width: 200px">类型</th>
    <th style="width: 80px">默认值</th>
  </tr>
  <tr>
    <td>formItemProps</td>
    <td>el-form-item attributes 的配置。<code>rules</code> 配置不生效</td>
    <td><a href="https://element.eleme.io/2.15/#/zh-CN/component/form#form-item-attributes" target="_blank">FormItemProps</a></td>
    <td>-</td>
  </tr>
  <tr>
    <td>renderLabel</td>
    <td>自定义 <code>el-form-item</code> 的 <code>label</code>，不支持 <code>slot</code> 写法</td>
    <td>
      <code>() => jsx</code>
    </td>
    <td>-</td>
  </tr>
  <tr>
    <td>valueType</td>
    <td>表单元素类型，会生成不同的渲染器。设置 <code>slot</code> 表示自定义，可选</td>
    <td>
      <a href="./schema.md#valuetype" target="_blank">valueType</a> | <code>slot</code>
    </td>
    <td>-</td>
  </tr>
  <tr>
    <td>renderField</td>
    <td>自定义表单元素，可选</td>
    <td><code>({ form, formItem }) => jsx</code>
    </td>
    <td>-</td>
  </tr>
  <tr>
    <td>fieldProps</td>
    <td>表单元素的 attributes。如果渲染出来的是 <code>el-input</code>，则对应 <code>el-input</code> 的 attributes</td>
    <td>
      <code>object</code>
    </td>
    <td>-</td>
  </tr>
  <tr>
    <td>fieldEvents</td>
    <td>表单元素的 events。如果渲染出来的是 <code>el-input</code>，则对应 <code>el-input</code> 的 events</td>
    <td>
      <code>object</code>
    </td>
    <td>-</td>
  </tr>
  <tr>
    <td>options</td>
    <td>选择器、单选框组、多选框组 的数据</td>
    <td>
      <code>Array</code>
    </td>
    <td>-</td>
  </tr>
  <tr>
    <td>valueEnum</td>
    <td>选择器枚举，方便自动生成选项</td>
    <td>
      <a href="./schema.md#valueenum" target="_blank">valueEnum</a>
    </td>
    <td>-</td>
  </tr>
  <tr>
    <td>optionLoader</td>
    <td>异步生成 选择器、级联选择器 下拉数据</td>
    <td>
      <code>() => Promise&lt;any&gt;</code>
    </td>
    <td>-</td>
  </tr>
  <tr>
    <td>initialValue</td>
    <td>表单默认值，优先级高于 <code>initialValues</code></td>
    <td>
      <code>any</code>
    </td>
    <td>-</td>
  </tr>
  <tr>
    <td>order</td>
    <td>查询表单中的权重，权重大排序在前</td>
    <td><code>number</code></td>
    <td>-</td>
  </tr>
  <tr>
    <td>hideInSearch</td>
    <td>在查询表单中不展示此项</td>
    <td><code>boolean</code></td>
    <td>-</td>
  </tr>
  <tr>
    <td>hideInTable</td>
    <td>在 <code>el-table</code> 中不展示此项</td>
    <td><code>boolean</code></td>
    <td>-</td>
  </tr>
  <tr>
    <td>renderCellHeader</td>
    <td>自定义表格标题</td>
    <td><code>() => jsx</code></td>
    <td>-</td>
  </tr>
  <tr>
    <td>renderCell</td>
    <td>自定义表格内容</td>
    <td><code>(scope) => jsx | jsx[]</code></td>
    <td>-</td>
  </tr>
  <tr>
    <td>disabled</td>
    <td>控制当前列在列设置面板中是否可被勾选</td>
    <td><code>boolean</code></td>
    <td>-</td>
  </tr>
  <tr>
    <td>key</td>
    <td>在列设置中，若未指定 <code>prop</code> 字段，则默认使用 <code>key</code> 作为唯一标识符</td>
    <td><code>string</code></td>
    <td>-</td>
  </tr>
</table>

> 如果表格和表单的 <code>prop</code> 是同一个，则只需要配置表格的 <code>prop</code> 字段。同理 <code>label</code> 字段。

> `renderField` 自定义渲染因为没有 `v-model`，是值的传递，所以需要进行初始化。如果 `column` 或 `el-form-item` 配置了 `prop` 且是绑定字段，则默认进行了初始化。反之则需要在 initialValue 或 initialValues 进行配置。

> 配置 `valueEnum` 在表格中会自动回显 `label` 值。

##### valueType slot
<table style="display: table">
  <tr>
    <th style="width: 60px">name</th>
    <th>描述</th>
  </tr>
  <tr>
    <td><code>[prop]</code></td>
    <td>自定义表单元素，参数为 ({ form, formItem })</td>
  </tr>
</table>

##### defaultPaginationProps
```js
{
  "page-sizes": [10, 20, 30, 50],
  layout: "total, sizes, prev, pager, next, jumper",
  "hide-on-single-page": true,
}
```

##### paginationMapping
<table style="display: table">
  <tr>
    <th style="width: 100px">参数</th>
    <th>说明</th>
    <th style="width: 200px">类型</th>
    <th style="width: 80px">默认值</th>
  </tr>
  <tr>
    <td>pageKey</td>
    <td>页码字段</td>
    <td><code>string</code></td>
    <td><code>pageNum</code></td>
  </tr>
  <tr>
    <td>sizeKey</td>
    <td>页数字段</td>
    <td><code>string</code></td>
    <td><code>pageSize</code></td>
  </tr>
</table>

> 通过 `Vue.extends` 方法，可以全局配置这两个字段，参考下方示例代码。

```jsx
import Vue from 'vue'
import { ProTable as ElProTable } from 'element-ui-pro-components'

const ProTable = Vue.extend({
  name: 'ElProTable',
  extends: ElProTable,
  props: {
    // 分页字段映射配置
    paginationMapping: {
      type: Object,
      default: () => ({
        pageKey: 'page',
        sizeKey: 'size'
      })
    }
  }
})

Vue.component('ProTable', ProTable)
```

##### columnSettingsConfig
列设置功能提供了灵活、可配置的表格列管理能力，支持动态显示/隐藏列、列排序、固定列等功能，适用于复杂的数据展示场景。列设置中标题对应 `columnsConfig.label` 字段，显示/隐藏列是 `columnsConfig.prop || columnsConfig.key`。
<table style="display: table">
  <tr>
    <th style="width: 100px">参数</th>
    <th>说明</th>
    <th style="width: 200px">类型</th>
    <th style="width: 80px">默认值</th>
  </tr>
  <tr>
    <td>resetText</td>
    <td>重置按钮文本</td>
    <td><code>string</code></td>
    <td><code>重置</code></td>
  </tr>
  <tr>
    <td>settingText</td>
    <td>列设置按钮文本</td>
    <td><code>string</code></td>
    <td><code>列设置</code></td>
  </tr>
  <tr>
    <td>draggable</td>
    <td>是否支持拖拽排序</td>
    <td><code>boolean</code></td>
    <td><code>true</code></td>
  </tr>
  <tr>
    <td>checkable</td>
    <td>显示/隐藏列</td>
    <td><code>boolean</code></td>
    <td><code>true</code></td>
  </tr>
  </tr>
</table>

> 拖拽排序遵循的是先排序，后分组，目的是保证列是整体有序的。

举个例子：
```js
[
  { label: '标题1', prop: title1, index: 0 }, // 不固定
  { label: '标题2', prop: title2: index: 1, fixed: 'right' }, // 固定在右侧
  { label: '标题3', prop: title3, index: 2, fixed: 'left }, // 固定在左侧
  { label: '标题4', prop: title4: index: 3 } // 不固定
]
```
当拖拽 `prop = title4` 到 `prop = "title` 上方的位置时，此时的列设置规则对应如下 
```js
[
  { label: '标题4', prop: title4, index: 0 }, // 不固定
  { label: '标题1', prop: title1: index: 1 } // 不固定
  { label: '标题2', prop: title2: index: 2, fixed: 'right' }, // 固定在右侧
  { label: '标题3', prop: title3, index: 3, fixed: 'left }, // 固定在左侧
]
```
可以看到固定列的 `index` 也发生了变化。
