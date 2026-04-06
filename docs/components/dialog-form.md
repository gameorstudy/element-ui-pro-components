#### DialogForm - 弹框表单
DialogForm 是 ProForm 的一个变体，本质上仍然是个表单。DialogForm 的表现与 ProForm 相同，可以从 ProForm 直接修改而来。

#### 基础用法
::: demo
```vue
<template>
  <div>
    <DialogForm
      title="Dialog Form"
      :formProps="{
        'label-position': 'top'
      }"
      v-model="visible"
      :formItems="formItems"
      @onFinish="onFinish"
    >
      <template #name2="{ form }">
        <el-input v-model="form.name2" placeholder="slot" />
      </template>
    </DialogForm>
    <el-button @click="visible = true">Open Dialog</el-button>
  </div>
</template>

<script>
export default {
  name: 'BasicDialogForm',
  computed: {
    formItems() {
      return [
        {
          renderLabel: () => <span>自定义活动名称<i class="el-icon-warning" /></span>,
          prop: 'name1',
          valueType: 'input',
          fieldProps: {
            placeholder: 'valueType'
          }
        },
        {
          label: '活动名称2',
          prop: 'name2', 
          valueType: 'slot',
        },
        {
          label: '活动名称3',
          prop: 'name3',
          renderField: ({ form }) => (
            <el-input value={form.name3} onInput={val => form.name3 = val} placeholder="renderField" />
          )
        },
        {
          label: '活动区域1',
          prop: 'region1',
          valueType: 'select',
          fieldProps: {
            placeholder: 'options',
          },
          options: [
            {
              label: '区域一',
              value: 'region1'
            },
            {
              label: '区域二',
              value: 'region2'
            }
          ]
        },
        {
          label: '活动区域2',
          prop: 'region2',
          valueType: 'select',
          fieldProps: {
            placeholder: 'valueEnum: Object'
          },
          valueEnum: {
            'region1': '区域一',
            'region2': '区域二'
          },
        },
        {
          label: '活动区域3',
          prop: 'region3',
          valueType: 'select',
          fieldProps: {
            placeholder: 'valueEnum: Map'
          },
          valueEnum: new Map([
            ['region1', '区域一'],
            ['region2', '区域二']
          ])
        },
        {
          label: '活动区域4',
          prop: 'region4',
          valueType: 'select',
          fieldProps: {
            placeholder: 'optionLoader'
          },
          optionLoader: () => new Promise(resolve => {
            setTimeout(() => {
              resolve([
                {
                  label: '区域一',
                  value: 'region1'
                },
                {
                  label: '区域二',
                  value: 'region2'
                }
              ])
            }, 100)
          })
        },
        {
          label: '活动类型1',
          prop: 'type',
          valueType: 'cascader',
          fieldProps: {
            placeholder: 'fieldProps.options',
            options: this.cascaderOptions,
          },
        },
        {
          label: '活动类型2',
          prop: 'type2',
          valueType: 'cascader',
          fieldProps: {
            placeholder: 'optionLoader'
          },
          optionLoader: () => new Promise(resolve => {
            setTimeout(() => {
              resolve(this.cascaderOptions)
            }, 500)
          })
        },
        {
          label: '活动时间',
          prop: 'date',
          valueType: 'date-picker',
          fieldProps: {
            'value-format': 'yyyy-MM-dd'
          }
        },
        {
          label: '活动性质',
          prop: 'category',
          valueType: 'checkbox-group',
          options: [
            { label: '美食/餐厅线上活动', value: '美食/餐厅线上活动' },
            { label: '地推活动', value: '地推活动' },
            { label: '线下主题活动', value: '线下主题活动' },
            { label: '单纯品牌曝光', value: '单纯品牌曝光' },
          ],
          initialValue: []
        },
        {
          label: '特殊资源',
          prop: 'resource',
          valueType: 'radio-group',
          options: [
            { label: '线上品牌商赞助', value: '线上品牌商赞助' },
            { label: '线下场地免费', value: '线下场地免费' }
          ]
        },
      ]
    }
  },
  data() {
    return {
      visible: false,
      cascaderOptions: [
        {
          label: '球类',
          value: 'ball',
          children: [
            { label: '乒乓', value: '1' },
            { label: '篮球', value: '2' },
            { label: '足球', value: '3' },
          ]
        },
        {
          label: '铁人三项',
          value: 'other',
          children: [
            { label: '游泳', value: '11' },
            { label: '跑步', value: '22' },
            { label: '骑行', value: '33' },
          ]
        },
      ],
    }
  },
  methods: {
    onFinish(formData) {
      console.log('form', formData)
    }
  }
};
</script>
```
:::

##### API
DialogForm 在 el-dialog 和 el-form 上进行了一层封装，支持了一些预设。
##### DialogForm Attributes
在 <a href="./pro-form.md#proform-attributes" target="_blank">ProForm Attributes</a> 基础上，新增了以下 API。
<table style="display: table">
  <tr>
    <th style="width: 100px">参数</th>
    <th>说明</th>
    <th style="width: 180px">类型</th>
    <th style="width: 80px">默认值</th>
  </tr>
  <tr>
    <td>v-model</td>
    <td>是否打开弹框</td>
    <td><code>boolean</code></td>
    <td>-</td>
  </tr>
  <tr>
    <td>title</td>
    <td>弹框的标题</td>
    <td>
      <code>string</code>
    </td>
    <td>-</td>
  </tr>
  <tr>
    <td>renderTitle</td>
    <td>自定义弹框标题</td>
    <td>
      <code>(form) => jsx</code>
    </td>
    <td>-</td>
  </tr>
  <tr>
    <td>width</td>
    <td>弹框的宽度</td>
    <td>
      <code>string</code>
    </td>
    <td>-</td>
  </tr>
  <tr>
    <td>dialogProps</td>
    <td>el-dialog attributes 的配置。注意：不支持 <code>visible</code>，请使用 <code>v-model</code></td>
    <td>
      <a href="https://element.eleme.io/2.15/#/zh-CN/component/dialog#attributes" target="_blank">DialogProps</a>
    </td>
    <td>-</td>
  </tr>
  <tr>
    <td>dialogEvents</td>
    <td>el-dialog events 的配置</td>
    <td>
      <a href="https://element.eleme.io/2.15/#/zh-CN/component/dialog#events" target="_blank">DialogEvents</a>
    </td>
    <td>-</td>
  </tr>
</table>

##### DialogForm Events
同 <a href="./pro-form.md#proform-events" target="_blank">ProForm Events
</a>

##### DialogForm Methods
在 <a href="./pro-form.md#proform-methods" target="_blank">ProForm Methods</a> 基础上新增了以下方法
<table style="display: table">
  <tr>
    <th style="width: 100px">参数</th>
    <th>说明</th>
    <th style="width: 180px">类型</th>
    <th style="width: 80px">默认值</th>
  </tr>
  <tr>
    <td>close</td>
    <td>关闭弹框</td>
    <td><code>() => void</code></td>
    <td>-</td>
  </tr>
</table>

##### formItemsConfig
同 <a href="./pro-form.md#formitemsconfig" target="_blank">ProForm formItemsConfig</a>

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
    <td>cancelText</td>
    <td>取消按钮的文本</td>
    <td><code>string</code></td>
    <td>取消</td>
  </tr>
  <tr>
    <td>confirmText</td>
    <td>确定按钮的文本</td>
    <td><code>string</code></td>
    <td>确定</td>
  </tr>
  <tr>
    <td>cancelButtonProps</td>
    <td>el-button 的 attributes & button 的原生属性</td>
    <td><a href="https://element.eleme.io/2.15/#/zh-CN/component/button#attributes" target="_blank">ButtonProps</a></td>
    <td>-</td>
  </tr>
  <tr>
    <td>confirmButtonProps</td>
    <td>el-button 的 attributes & button 的原生属性</td>
    <td><a href="https://element.eleme.io/2.15/#/zh-CN/component/button#attributes" target="_blank">ButtonProps</a></td>
    <td>-</td>
  </tr>
  <tr>
    <td>customRender</td>
    <td>自定义渲染</td>
    <td>
      <code>false | (form , actions, doms) => jsx[]</code>
    </td>
    <td>-</td>
  </tr>
</table>

> 不支持通过 footer 来自定义页脚，如果要定义页脚需要使用 submitter.customRender。

> customRender 的第一个参数是表单数据；第二个参数是事件对象；第三个参数是默认的 doms 数组，第一个是取消按钮，第二个是确定按钮。