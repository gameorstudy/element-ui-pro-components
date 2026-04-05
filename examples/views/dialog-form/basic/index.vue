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
import { DialogForm } from 'element-ui-pro-components/src/index'
export default {
  name: 'BasicDialogForm',
  components: {
    DialogForm
  },
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