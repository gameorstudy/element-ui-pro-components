<template>
  <EditableProTable
    :dataSource="dataSource"
    :columns="columns"
    :recordCreatorProps="recordCreatorProps" 
    :maxLength="5"
    :editable="editable"
    rowKey="id"
    :loading="loading"
  />
</template>

<script>
import { EditableProTable } from 'element-ui-pro-components/src/index'
export default {
  name: 'EditableProTableDemo',
  components: {
    EditableProTable
  },
  computed: {
    editable() {
      const { editableKeys } = this
      return {
        editableKeys,
        onChange: keys => this.editableKeys = keys,
      }
    },
    columns() {
      return [
        {
          'min-width': 180,
          label: '名称',
          prop: 'name',
          valueType: 'input',
          formItemProps: {
            rules: [{ required: true, message: '请输入名称', trigger: 'blur' }]
          }
        },
        {
          'min-width': 240,
          label: '日期',
          prop: 'date',
          valueType: 'date-picker',
          fieldProps: {
            'value-format': 'yyyy-MM-dd'
          },
          formItemProps: {
            rules: [{ required: true, message: '请选择日期', trigger: 'change' }]
          }
        },
        {
          'min-width': 240,
          label: '省/直辖市',
          prop: 'province',
          valueType: 'select',
          options: [
            { value: 'beijing', label: '北京' },
            { value: 'shanghai', label: '上海' },
            { value: 'zhejiang', label: '浙江' }
          ],
          formItemProps: {
            rules: [{ required: true, message: '请选择', trigger: 'change' }]
          }
        },
        {
          width: 240,
          label: '地址',
          prop: 'address',
          valueType: 'input',
          fieldProps: {
            type: 'textarea'
          },
          'show-overflow-tooltip': true
        },
        {
          width: 180,
          label: '操作',
          fixed: 'right',
          valueType: 'option',
          renderCell: (scope, actions) => [
            <el-button type="text" onClick={() => actions.startEditable(scope.row.id)}>编辑</el-button>,
            <el-button type="text" onClick={() => this.dataSource = this.dataSource.filter(item => item.id !== scope.row.id) }>删除</el-button>,
            <el-button type="text" onClick={() => actions.addEditRecord({ ...scope.row, id: Math.random().toString().slice(2, 10) })}>复制</el-button>,
          ]
        }
      ]
    }
  },
  data() {
    return {
      dataSource: undefined,
      loading: false,
      recordCreatorProps: {
        position: 'top',
        record: () => ({
          // 建议写全，表单重置必须绑定属性
          id: Math.random().toString().slice(2, 10),
        }),
      },
      editableKeys: [],
    }
  },
  created() {
    this.loading = true
    setTimeout(() => {
      this.loading = false
      this.dataSource = [
        { id: 1, name: 'hello', date: '2026-03-21', province: 'beijing', address: '北京xxxxxxxxxxxxxxxx路xxxxxxxxxxxxxxxxxxxxxxxxx街道 ' },
        { id: 2, name: 'world', date: '2026-03-22', province: 'shanghai', address: '上海xxxxxxxxxxxxxxxx路xxxxxxxxxxxxxxxxxxxxxxxx街道 ' }
      ]
    }, 200)
  }
}
</script>