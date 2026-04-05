#### ProForm - 高级表单
ProForm 是一个支持动态配置的高级表单组件，减少了模板语法，使表单开发更简单。

##### API
ProForm 在 el-form 上进行了一层封装，支持了一些预设。
##### ProForm Attributes
<table style="display: table">
  <tr>
    <th style="width: 100px">参数</th>
    <th>说明</th>
    <th style="width: 200px">类型</th>
    <th style="width: 80px">默认值</th>
  </tr>
  <tr>
    <td>formProps</td>
    <td>el-form attributes 的配置</td>
    <td>
      <a href="https://element.eleme.io/2.15/#/zh-CN/component/form#form-attributes" target="_blank">FormProps</a>
    </td>
    <td>-</td>
  </tr>
  <tr>
    <td>className</td>
    <td>el-form 的类名</td>
    <td>
      <code>string</code>
    </td>
    <td>-</td>
  </tr>
  <tr>
    <td>formItems</td>
    <td>列定义</td>
    <td>
      <code>formItemsConfig[]</code>
    </td>
    <td>-</td>
  </tr>
  <tr>
    <td>submitter</td>
    <td>提交按钮相关配置</td>
    <td>
      <code>boolean | submitterProps</code>
    </td>
    <td>-</td>
  </tr>
  <tr>
    <td>grid</td>
    <td>开启栅格化模式，宽度默认百分比</td>
    <td>
      <code>boolean</code>
    </td>
    <td>-</td>
  </tr>
  <tr>
    <td>rowProps</td>
    <td>开启 <code>grid</code> 模式时传递给 <code>el-row</code></td>
    <td>
      <a href="https://element.eleme.io/2.15/#/zh-CN/component/layout#row-attributes" target="_blank">RowProps</a>
    </td>
    <td>{ gutter: 8 }</td>
  </tr>
  <tr>
    <td>initialValues</td>
    <td>表单默认值</td>
    <td>
      <code>object</code>
    </td>
    <td>-</td>
  </tr>
</table>

##### ProForm Events
<table style="display: table">
  <tr>
    <th style="width: 100px">参数</th>
    <th>说明</th>
    <th style="width: 200px">类型</th>
    <th style="width: 80px">默认值</th>
  </tr>
  <tr>
    <td>onFinish</td>
    <td>提交表单且数据验证成功后回调事件</td>
    <td>
      <code>(values) => Promise&lt;void&gt; | void</code>
    </td>
    <td>-</td>
  </tr>
  <tr>
    <td>onError</td>
    <td>提交表单数据验证失败后的回调事件</td>
    <td>
      <code>(error) => void</code>
    </td>
    <td>-</td>
  </tr>
  <tr>
    <td>onReset</td>
    <td>点击重置按钮的回调，此时数据已重置完成</td>
    <td>
      <code>() => void</code>
    </td>
    <td>-</td>
  </tr>
</table>

##### ProForm Methods
<table style="display: table">
  <tr>
    <th style="width: 100px">参数</th>
    <th>说明</th>
    <th style="width: 200px">类型</th>
    <th style="width: 80px">默认值</th>
  </tr>
  <tr>
    <td>getFormRef</td>
    <td>获取 el-form 的 ref</td>
    <td>
      <code>() => ref</code>
    </td>
    <td>-</td>
  </tr>
  <tr>
    <td>getForm</td>
    <td>获取表单数据</td>
    <td>
      <code>(values) => Promise&lt;void&gt; | void</code>
    </td>
    <td>-</td>
  </tr>
  <tr>
    <td>setFieldsValue</td>
    <td>手动更新表单数据</td>
    <td>
      <code>(values) => void</code>
    </td>
    <td>-</td>
  </tr>
  <tr>
    <td>setFieldValue</td>
    <td>手动更新单个字段数据</td>
    <td>
      <code>(key, value) => void</code>
    </td>
    <td>-</td>
  </tr>
  <tr>
    <td>submit</td>
    <td>手动提交表单</td>
    <td>
      <code>() => void</code>
    </td>
    <td>-</td>
  </tr>
  <tr>
    <td>reset</td>
    <td>手动重置表单</td>
    <td>
      <code>() => void</code>
    </td>
    <td>-</td>
  </tr>
  <tr>
    <td>resetAllFields</td>
    <td>重置表单的拓展方法，过滤了非初始化收集的字段</td>
    <td>
      <code>() => void</code>
    </td>
    <td>-</td>
  </tr>
</table>

##### formItemsConfig
在 [el-form-item attributes](https://element.eleme.io/2.15/#/zh-CN/component/form#form-item-attributes) 基础上，新增了以下 API。
<table style="display: table">
  <tr>
    <th style="width: 100px">参数</th>
    <th>说明</th>
    <th style="width: 160px">类型</th>
    <th style="width: 80px">默认值</th>
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
      <a href="/element-ui-pro-components/schema/#valuetype" target="_blank">valueType</a> | <code>slot</code>
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
      <a href="/element-ui-pro-components/schema/#valueenum" target="_blank">valueEnum</a>
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
    <td>colProps</td>
    <td>开启 <code>grid</code> 模式时传递给 <code>el-col</code></td>
    <td>
      <a href="https://element.eleme.io/2.15/#/zh-CN/component/layout#col-attributes" target="_blank">ColProps</a>
    </td>
    <td>-</td>
  </tr>
  <tr>
    <td>hideInForm</td>
    <td>在表单中不展示此项</td>
    <td>
      <code>boolean</code>
    </td>
    <td>-</td>
  </tr>
  <tr>
    <td>customSlot</td>
    <td>自定义 <code>el-form-item</code>，可选。<code>true</code> 默认取 <code>prop</code> 的值</td>
    <td>
      <code>boolean | string</code>
    </td>
    <td>-</td>
  </tr>
  <tr>
    <td>renderFormItem</td>
    <td>自定义 <code>el-form-item</code>，可选</td>
    <td>
      <code>(form) => jsx</code>
    </td>
    <td>-</td>
  </tr>
  <tr>
    <td>key</td>
    <td>vue 需要的 key，如果已经设置了唯一的 <code>prop</code>，可以忽略这个属性
    <td><code>string</code></td>
    <td>-</td>
  </tr>
</table>

> `renderField` 和 `renderFormItem` 自定义渲染是值的传递。如果 `prop` 存在，则默认进行了初始化；反之则需要在 `initialValues` 添加默认值。

> `options` 参数的格式为选择器[选项](https://element.eleme.io/2.15/#/zh-CN/component/select#ji-chu-yong-fa)。同时，也兼容了选择器的分组[选项](https://element.eleme.io/2.15/#/zh-CN/component/select#fen-zu)，判断依据是列表中第一条数据包含了 `options` 数组。

<span style="color: #E6A23C">注意：组件的 `JSX` 语法传递 `props` 与模板语法有一定差异。</span>

```jsx
// ✅ 单独绑定每个属性 和 vue 语法一致
<el-input placeholder="请输入" clearable />

// ✅ 一次性传递多个 props 时，需要用 props 属性包裹
<el-button {...{ props: { type: 'primary', size: 'small' } }}>提交</el-button>

// ✅ 原生属性继承要用 attrs
<el-input attrs={{ placeholder: '请输入', clearable: true }} />
```

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

##### el-form-item slot
<table style="display: table">
  <tr>
    <th style="width: 60px">name</th>
    <th>描述</th>
  </tr>
  <tr>
    <td>customSlot</td>
    <td>自定义 el-form-item，参数为 ({ form })</td>
  </tr>
</table>

##### submitterProps
submitter 设置 `false` 会隐藏默认的提交按钮。
<table style="display: table">
  <tr>
    <th style="width: 100px">参数</th>
    <th>说明</th>
    <th style="width: 160px">类型</th>
    <th style="width: 80px">默认值</th>
  </tr>
  <tr>
    <td>resetText</td>
    <td>重置按钮的文本</td>
    <td><code>string</code></td>
    <td>重置</td>
  </tr>
  <tr>
    <td>submitText</td>
    <td>提交按钮的文本</td>
    <td><code>string</code></td>
    <td>提交</td>
  </tr>
  <tr>
    <td>resetButtonProps</td>
    <td>el-button 的 attributes & button 的原生属性</td>
    <td><a href="https://element.eleme.io/2.15/#/zh-CN/component/button#attributes" target="_blank">ButtonProps</a></td>
    <td>-</td>
  </tr>
  <tr>
    <td>submitButtonProps</td>
    <td>el-button 的 attributes & button 的原生属性</td>
    <td><a href="https://element.eleme.io/2.15/#/zh-CN/component/button#attributes" target="_blank">ButtonProps</a></td>
    <td>-</td>
  </tr>
  <tr>
    <td>customRender</td>
    <td>自定义渲染</td>
    <td>
      <code>false | (form, actions, doms) => jsx[]</code>
    </td>
    <td>-</td>
  </tr>
</table>

```js
/**
 * @desc 自定义渲染
 * @param {Object} form 表单数据
 * @param {Object} actions 事件对象
 * @param {Function} actions.submit 手动提交表单
 * @param {Function} actions.reset 手动重置表单
 * @param {Function} actions.resetAllFields 重置增强方法
 * @param {Array} doms 默认的提交按钮 doms 第一个是重置按钮，第二个是提交按钮
 */
customRender: (form, actions, doms) => jsx[]
```