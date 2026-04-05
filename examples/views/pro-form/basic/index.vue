<template>
  <div>
    <ProForm
      :formProps="{
        'label-position': 'top'
      }"
      :formItems="formItems"
      :submitter="submitter"
      @onFinish="onFinish"
    >
      <template #name2="{ form }">
        <el-input v-model="form.name2" placeholder="slot" />
      </template>
      <template #labels="{ form }">
        <EditableProTable
          :dataSource="form.labels"
          :columns="columns"
          :editable="editable"
          name="labels"
          :recordCreatorProps="recordCreatorProps"
          rowKey="id"
        />
      </template>
    </ProForm>
  </div>
</template>

<script>
import { ProForm, EditableProTable } from 'element-ui-pro-components/src/index'
export default {
  name: 'BasicProForm',
  components: {
    ProForm,
    EditableProTable
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
          },         
            rules: [{ required: true, message: '请输入', trigger: 'blur' }]
        },
        {
          label: '活动名称2',
          prop: 'name2', 
          valueType: 'slot',       
            rules: [{ required: true, message: '请输入', trigger: 'blur' }]
        },
        {
          label: '活动名称3',
          prop: 'name3',
          renderField: ({ form }) => (
            <el-input value={form.name3} onInput={val => form.name3 = val} placeholder="renderField" />
          ),         
            rules: [{ required: true, message: '请输入', trigger: 'blur' }]
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
          ],         
            rules: [{ required: true, message: '请选择', trigger: 'change' }]
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
            rules: [{ required: true, message: '请选择', trigger: 'change' }]
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
          ]),       
            rules: [{ required: true, message: '请选择', trigger: 'change' }]
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
          }),       
            rules: [{ required: true, message: '请选择', trigger: 'change' }]
        },
        {
          label: '活动类型1',
          prop: 'type',
          valueType: 'cascader',
          fieldProps: {
            placeholder: 'fieldProps.options',
            options: this.cascaderOptions,
          },       
            rules: [{ required: true, message: '请选择', trigger: 'change' }]
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
          }),       
            rules: [{ required: true, message: '请选择', trigger: 'change' }]
        },
        {
          label: '活动时间',
          prop: 'date',
          valueType: 'date-picker',
          fieldProps: {
            'value-format': 'yyyy-MM-dd'
          },       
            rules: [{ required: true, message: '请选择', trigger: 'change' }]
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
          initialValue: [],       
            rules: [{ required: true, message: '请选择', trigger: 'change' }]
        },
        {
          label: '特殊资源',
          prop: 'resource',
          valueType: 'radio-group',
          options: [
            { label: '线上品牌商赞助', value: '线上品牌商赞助' },
            { label: '线下场地免费', value: '线下场地免费' }
          ],       
          rules: [{ required: true, message: '请选择', trigger: 'change' }]
        },
        {
          prop: 'labels',
          label: '活动标签',
          valueType: 'slot',
          rules: [
            { required: true, message: '请至少添加一条' }
          ],
          initialValue: []
        }
      ]
    },
    submitter() {
      const { loading } = this
      return {
        submitButtonProps: {
          loading
        }
      }
    },
    columns() {
      return [
        { 
          label: '标签名称',
          prop: 'label',
          valueType: 'input',
          formItemProps: {
            rules: [{ required: true, message: '请输入', trigger: 'blur' }]
          }
        },
        {
          label: '标签类型',
          prop: 'type',
          valueType: 'select',
          valueEnum: {
            '1': '类型一',
            '2': '类型二',
            '3': '类型三',
          },
          fieldProps: {
            clearable: true,
          },
          formItemProps: {
            rules: [{ required: true, message: '请输入', trigger: 'change' }]
          }
        },
        {
          width: 80,
          label: '操作',
          valueType: 'option',
          fixed: 'right',
          renderCell: () => null
        }
      ]
    },
    editable() {
      const { editableKeys } = this
      return {
        type: 'multiple',
        editableKeys,
        onChange: keys => this.editableKeys = keys,
        actionRender: (row, config, defaultDoms) => {
          return [defaultDoms.delete]
        },
      }
    },
  },
  data() {
    return {
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
      editableKeys: [],
      recordCreatorProps: {
        newRecordType: 'dataSource',
        record: () => (
          {
            id: Math.random().toString().slice(2, 10),
          }
        )
      },
      loading: false
    }
  },
  methods: {
    onFinish(formData) {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        console.log('form', formData)
      }, 200)
    }
  }
}
</script>