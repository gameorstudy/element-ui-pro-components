#### EditableProTable - 可编辑表格
可编辑表格 EditableProTable 与 ProTable 的功能基本相同，为了方便使用 EditableProTable，增加了一些预设，关掉了查询表单和操作栏。

##### 在线示例

<style>
/* 只在当前页面生效 */
.theme-default-content:not(.custom) {
  max-width: 1200px;
}
</style>

##### 基础用法
<DemoIframe src="/element-ui-pro-components/editable-pro-table/basic" />

#### API
EditableProTable 在 el-table 上进行了一层封装，支持了一些预设。这里只列出与 el-table 不同的 API。

##### EditableProTable Attributes
<table style="display: table">
  <tr>
    <th style="width: 100px">参数</th>
    <th>说明</th>
    <th style="width: 200px">类型</th>
    <th style="width: 80px">默认值</th>
  </tr>
  <tr>
    <td>dataSource</td>
    <td>el-table 的数据</td>
    <td><code>T[]</code></td>
    <td><code>undefined</code></td>
  </tr>
  <tr>
    <td>recordCreatorProps</td>
    <td>新建一行数据的相关配置</td>
    <td>
      <code>boolean | RecordCreatorProps</code>
      </td>
    <td>-</td>
  </tr>
  <tr>
    <td>maxLength</td>
    <td>最大的行数，到达最大行数新建按钮会自动消失</td>
    <td>
      <code>number</code>
      </td>
    <td>-</td>
  </tr>
  <tr>
    <td>editable</td>
    <td>可编辑表格的相关配置</td>
    <td>
      <code>TableRowEditable</code>
      </td>
    <td>-</td>
  </tr>
  <tr>
    <td>rowKey</td>
    <td>行数据的 Key</td>
    <td>
      <code>string</code>
      </td>
    <td>-</td>
  </tr>
  <tr>
    <td>name</td>
    <td>可编辑表格嵌入表单时，需要校验时必填</td>
    <td>
      <code>string</code>
      </td>
    <td>-</td>
  </tr>
  <tr>
    <td>className</td>
    <td>组件内 el-table 的类名</td>
    <td>
      <code>string</code>
      </td>
    <td>-</td>
  </tr>
  <tr>
    <td>loading</td>
    <td>表格数据请求加载状态</td>
    <td><code>boolean</code></td>
    <td>-</td>
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
    <td>el-table events 的配置
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
    <td>defaultSize</td>
    <td>默认的 size</td>
    <td><code>medium | small | mini</code></td>
    <td>-</td>
  </tr>
  <tr>
    <td>sticky</td>
    <td>设置为 <code>true</code> 时，默认用 <code>position: sticky</code> 实现。设置为 <code>false</code> 则是 <code>el-table</code> 原生实现</td>
    <td><code>boolean</code></td>
    <td><code>true</code></td>
  </tr>
</table>

> dataSource 因引用类型这一特性，父组件表格数据随子组件进行 vue 数组响应式方法自动更新。

> `el-table` 固定列原生实现方式会触发多次渲染，因此底层添加了 `position: sticky` 的实现。

##### EditableTable Methods
<table style="display: table">
  <tr>
    <th style="width: 100px">参数</th>
    <th>说明</th>
    <th style="width: 320px">类型</th>
    <th style="width: 80px">默认值</th>
  </tr>
  <tr>
    <td>getFormRef</td>
    <td>获取 el-form 的 ref，如果是内嵌到外部的 el-form，则返回的是外部的 el-form</td>
    <td><code>() => ref</code></td>
    <td>-</td>
  </tr>
  <tr>
    <td>getTableRef</td>
    <td>获取 el-table 的 ref</td>
    <td><code>() => ref</code></td>
    <td>-</td>
  </tr>
  <tr>
    <td>validate</td>
    <td>el-form 的 validate 方法</td>
    <td><code>Function(callback: Function(boolean, object))</code></td>
    <td>-</td>
  </tr>
  <tr>
    <td>validateRow</td>
    <td>自定义的校验一行的方法</td>
    <td><code>(index: number) => Promise&lt;boolean&gt;</code></td>
    <td>-</td>
  </tr>
  <tr>
    <td>reset</td>
    <td>el-form 的 resetFields 方法</td>
    <td><code>() => Promise&lt;void&gt;</code></td>
    <td>-</td>
  </tr>
  <tr>
    <td>getRowData</td>
    <td>获取一行数据</td>
    <td><code>(rowIndex: string | number) => T | undefined</code></td>
    <td>-</td>
  </tr>
  <tr>
    <td>getRowsData</td>
    <td>获取整个 table 的数据</td>
    <td><code>() => T[] | undefined</code></td>
    <td>-</td>
  </tr>
  <tr>
    <td>setRowData</td>
    <td>设置一行的数据</td>
    <td><code>(rowIndex: string | number, data: Partial&lt;T&gt;) => void</code></td>
    <td>-</td>
  </tr>
</table>

```js
/**
  * 新增一行的方法
  * @param record
  * @param {Object} newLine 新增一行的配置
  * @param {string} newLine.position 顶部添加还是末尾添加
  * @param {string} newLine.newRecordType 新增一行的方式
  * @returns T | undefined
  */
addEditRecord?: (record: T, newLine: Partial<RecordCreatorProps>) => void;
/**
  * 获取一行数据
  * @param rowIndex
  * @returns T | undefined
  *
  * @example getRowData(1)  可以传入第几行的数据
  * @example getRowData("id")  也可以传入 rowKey，根据你列的唯一key 来获得。
  */
getRowData?: (rowIndex: string | number) => T | undefined;
/**
  * 获取整个 table 的数据
  * @returns T[] | undefined
  */
getRowsData?: () => T[] | undefined;
/**
  * 设置一行的数据，会将数据进行简单的 merge
  *
  * {title:"old", decs:"old",id:"old"} -> set {title:"new"} -> {title:"new", decs:"old",id:"old"}
  *
  * @description 只会做最第一层对象的 merge 哦。
  * {title:"old", decs:{name:"old",key:"old"},id:"old"} -> set { decs: { name:"new" } } -> {title:"old", decs:{name:"new"},id:"old"} -> set { decs: { name: "old" } }
  *
  * @param rowIndex
  * @param data
  * @returns void
  *
  * 根据行号设置
  * @example setRowData(1, { title:"new" })  可以传入修改第几行
  *
  * 根据行 id 设置
  * @example setRowData("id", { title:"new" })  也可以传入 rowKey，根据你列的唯一 key 来设置。
  *
  * 清空原有数据
  * @example setRowData(1, { title:undefined })
  *
  */
setRowData?: (rowIndex: string | number, data: Partial<T>) => void;
```

##### RecordCreatorProps
为了使用，预设了一个新建的功能，大多数情况下已经可以满足大部分新建的需求。与 Pro 系列组件的 API 相同，`recordCreatorProps: false` 就可以关掉按钮。
<table style="display: table">
  <tr>
    <th style="width: 100px">参数</th>
    <th>说明</th>
    <th style="width: 400px">类型</th>
    <th style="width: 80px">默认值</th>
  </tr>
  <tr>
    <td>position</td>
    <td>顶部添加还是末尾添加</td>
    <td><code>top | bottom</code></td>
    <td><code>bottom</code></td>
  </tr>
  <tr>
    <td>newRecordType</td>
    <td>新增一行的方式，默认是缓存，取消后就会消失。设置为 <code>dataSource</code>，取消后也不会消失，只能删除</td>
    <td><code>dataSource | cache</code></td>
    <td><code>cache</code></td>
  </tr>
  <tr>
    <td>record</td>
    <td>新增行的默认值</td>
    <td><code>DataSourceType
    | ((index: number, dataSource: DataSourceType[]) => DataSourceType)</code></td>
    <td>-</td>
  </tr>
  <tr>
    <td>creatorButtonText</td>
    <td>设置按钮文案</td>
    <td><code>string</code></td>
    <td><code>添加一行数据</code></td>
  </tr>
  <tr>
    <td>style</td>
    <td>按钮的样式设置，可以设置按钮是否显示，这样可以做最大行限制和最小行限制之类的功能</td>
    <td><code>object</code></td>
    <td>-</td>
  </tr>
  <tr>
    <td>buttonProps</td>
    <td>el-button 的属性</td>
    <td><a href="https://element.eleme.cn/#/zh-CN/component/button#attributes" target="_blank">ButtonProps</a></td>
    <td>-</td>
  </tr>
  <tr>
    <td>onlyAddOneLineAlertMessage</td>
    <td>只能同时新增一行的提示，<code>newRecordType</code> 设置 <code>cache</code> 时会校验</td>
    <td><code>string</code></td>
    <td><code>只能新增一行</code></td>
  </tr>
</table>

新增一行的时候要保证 `recordCreatorProps.record` key 唯一，不然会导致编辑出错。
```jsx
<EditableProTable
  rowKey="id"
  :recordCreatorProps={
    // 每次新增的时候需要Key
    record: () => ({ id: getNewId() }),
  }
/>
```

##### TableRowEditable
<table style="display: table">
  <tr>
    <th style="width: 100px">参数</th>
    <th>说明</th>
    <th style="width: 400px">类型</th>
    <th style="width: 80px">默认值</th>
  </tr>
  <tr>
    <td>type</td>
    <td>可编辑表格的类型，单行编辑或者多行编辑</td>
    <td><code>single | multiple</code></td> 
    <td><code>single</code></td>
  </tr>
  <tr>
    <td>editableKeys</td>
    <td>正在编辑的行，受控属性。 默认 <code>key</code> 会使用 <code>rowKey</code> 的配置，如果没有配置会使用 <code>index</code>，建议使用 <code>rowKey</code></td>
    <td><code>Key[]</code></td>
    <td>-</td>
  </tr>
  <tr>
    <td>onChange</td>
    <td>行数据被修改的时候触发</td>
    <td><code>(editableKeys: Key[], editableRows: T[]) => void</code></td>
    <td>-</td>
  </tr>
  <tr>
    <td>onSave</td>
    <td>保存一行的时候触发</td>
    <td><code>(recordKey: Key, editRow: T, originRow: T) => Promise&lt;any&gt;</code></td>
    <td>-</td>
  </tr>
  <tr>
    <td>saveText</td>
    <td>保存一行的文字</td>
    <td><code>string</code></td>
    <td><code>保存</code></td>
  </tr>
  <tr>
    <td>onDelete</td>
    <td>删除一行的时候触发</td>
    <td><code>(recordKey: Key, editRow: T) => Promise&lt;any&gt;</code></td>
    <td>-</td>
  </tr>
  <tr>
    <td>deleteText</td>
    <td>删除一行的文字</td>
    <td><code>string</code></td>
    <td><code>删除</code></td>
  </tr>
  <tr>
    <td>onCancel</td>
    <td>取消编辑一行时触发</td>
    <td><code>(recordKey: Key, editRow: T, originRow: T) => Promise&lt;any&gt;</code></td>
    <td>-</td>
  </tr>
  <tr>
    <td>cancelText</td>
    <td>取消编辑一行的文字</td>
    <td><code>string</code></td>
    <td><code>取消</code></td>
  </tr>
  <tr>
    <td>actionRender</td>
    <td>自定义编辑模式的操作栏</td>
    <td><code>(row: T, config: ActionRenderConfig&lt;T&gt;, defaultDom) => jsx[]</code></td>
    <td>-</td>
  </tr>
  <tr>
    <td>deletePopconfirmMessage</td>
    <td>删除时弹出的确认框提示消息</td>
    <td><code>string</code></td>
    <td><code>删除此项？</code></td>
  </tr>
  <tr>
    <td>onlyOneLineEditorAlertMessage</td>
    <td>只能编辑一行的的提示</td>
    <td><code>string</code></td>
    <td><code>只能同时编辑一行</code></td>
  </tr>
</table>

```ts
interface LineConfig {
  defaultValue?: T;
  options: {
    position?: 'top' | 'bottom';
    recordKey?: RecordKey;
    newRecordType?: 'dataSource' | 'cache';
  }
}

interface ActionRenderConfig {
  editableKeys?: RowEditableConfig<T>['editableKeys'];
  setEditableRowKeys: (value: React.Key[]) => void;
  recordKey: RecordKey;
  preEditRow: T;
  index?: number;
  onSave: RowEditableConfig<T>['onSave'];
  onDelete?: RowEditableConfig<T>['onDelete'];
  onCancel: RowEditableConfig<T>['onCancel'];
  cancelEditable: (key: RecordKey) => void;
  newLineConfig?: LineConfig;
  saveText?: React.ReactNode;
  deleteText?: React.ReactNode;
  cancelText?: React.ReactNode;
  deletePopconfirmMessage: RowEditableConfig<T>['deletePopconfirmMessage'];
  addEditRecord?: (row: T, options?: AddLineOptions) => boolean;
  tableName?: String;
}

// 分别对应保存、删除、取消按钮
const { save, delete, cancel } = defaultDom
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
    <td>el-form-item attributes 的配置</td>
    <td><a href="https://element.eleme.io/2.15/#/zh-CN/component/form#form-item-attributes" target="_blank">FormItemProps</a></td>
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
    <td><code>({ form, formItem, recordKey, index }) => jsx</code>
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
    <td>自定义表格内容，操作栏多一个 <code>action</code></td>
    <td><code>(scope, action?: ActionConfig) => jsx | jsx[]</code></td>
    <td>-</td>
  </tr>
  <tr>
    <td>editable</td>
    <td>是否可编辑</td>
    <td><code>(cellValue, record, index) => boolean</code></td>
    <td>-</td>
  </tr>
  <tr>
    <td>readonly</td>
    <td>只读</td>
    <td><code>boolean</code></td>
    <td>-</td>
  </tr>
  <tr>
    <td>key</td>
    <td>组件的 <code>key</code>，可选</td>
    <td><code>string</code></td>
    <td>-</td>
  </tr>
</table>

> 表单元素绑定的是 `column` 的 `prop`，`formItemProps` 的 `label` 属性不支持，推荐写 `rules` 等校验配置,。

> 操作栏需要配置 `valueType: 'option'`。

> `renderField` 自定义渲染因为没有 `v-model`，是值的传递，因此需要在 `RecordCreatorProps.config` 里进行初始化。

> `fieldEvents` 封装了一层，添加了一个额外的 `options` 对象实参，包含了 `recordKey`、`row` 和 `index` 等 `key`。

> 选择器配置 `valueEnum` 或 `options` 在表格中会自动回显 `label` 值。

```ts
interface ActionConfig {
  startEditable: (rowKey: React.Key) => boolean; // 开始编辑指定字段
  cancelEditable: (rowKey: React.Key) => Promise<boolean>; // 取消编辑
  addEditRecord: (record: T, newLine: Partial<RecordCreatorProps>) => void; // 新增一行
}
```

##### valueType slot
<table style="display: table">
  <tr>
    <th style="width: 60px">name</th>
    <th>描述</th>
  </tr>
  <tr>
    <td><code>[prop]</code></td>
    <td>自定义表单元素，参数为 ({ form, formItem, recordKey, index })</td>
  </tr>
</table>
