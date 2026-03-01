<template>
  <div class="editable-pro-table-demo">
    <EditableProTable
      ref="editableProTableRef"
      :dataSource="dataSource" 
      :recordCreatorProps="recordCreatorProps" 
      :maxLength="5"
      :editable="editable"
      rowKey="id"
      className="editable-table"
      :loading="loading"
      :tableProps="{
        border: true
      }"
      :tableEvents="{
        'selection-change': this.selectionChange
      }"
      :columns="columns"
      defaultSize="small"
    >
      <!-- 活动名称2 -->
      <!-- start -->
      <template #name2="{ form, formItem, recordKey, index }">
        <el-input v-model="form.name2" v-bind="formItem.fieldProps"></el-input>
      </template>
      <!-- end -->
    </EditableProTable>
    <div style="margin-top: 10px;">
      <el-button @click="getFormRef">getFormRef</el-button>
      <el-button @click="getTableRef">getTableRef</el-button>
      <el-button @click="validate">validate</el-button>
      <el-button @click="validateRow">validateRow</el-button>
      <el-button @click="reset">reset</el-button>
      <el-button @click="getRowData">getRowData</el-button>
      <el-button @click="getRowsData">getRowsData</el-button>
      <el-button @click="setRowData">setRowData</el-button>
    </div>
  </div>
</template>

<script>
  import { EditableProTable } from 'element-ui-pro-components'
  export default {
    name: 'Demo1',
    components: {
      EditableProTable,
    },
    computed: {
      editable() {
        const { editableKeys } = this
        return {
          type: 'multiple',
          editableKeys,
          onChange: keys => this.editableKeys = keys,
          onSave: (recordKey, editRow, originRow) => {
            console.log('save', recordKey, editRow, originRow)
            return new Promise(resolve => {
              setTimeout(() => {
                resolve(true)
              }, 1000)
            })
          },
          saveText: '保存一行',
          onDelete: (recordKey, editRow) => {
            console.log('delete', recordKey, editRow)
            return new Promise(resolve => {
              setTimeout(() => {
                resolve(true)
              }, 500)
            })
          },
          deleteText: '删除一行',
          onCancel: (recordKey, editRow, originRow) => {
            console.log('cancel', recordKey, editRow, originRow)
            return new Promise(resolve => {
              setTimeout(() => {
                resolve(true)
              }, 50)
            })
          },
          cancelText: '删除或重置',
          deletePopconfirmMessage: '确认删除？',
          onlyOneLineEditorAlertMessage: '一次只能编辑一行'
        }
      },
      columns() {
        return [
          {
            width: 80,
            type: 'selection',
            'reserve-selection': true,
            fixed: 'left'
          },
          { 
            width: 240,
            label: '活动名称1',
            prop: 'name1',
            valueType: 'input',
            formItemProps: {
              rules: [{ required: true, message: '请输入', trigger: 'blur' }]
            },
          },
          {
            width: 240,
            label: '活动名称2',
            renderCellHeader: () => <span style="color: #F56C6C;">活动名称2</span>,
            prop: 'name2',
            valueType: 'slot',
            fieldProps: {
              placeholder: 'valueType: slot 实现的',
              clearable: true
            },
          },
          {
            minWidth: 240,
            label: '活动名称3',
            prop: 'name3',
            renderField: ({ form, formItem, recordKey, index }) => {
              console.log('renderField', recordKey, index)
              return <el-input 
                value={ form.name3 } 
                onInput={ val => form.name3 = val } 
                attrs={ formItem.fieldProps }
              />
            },
            fieldProps: {
              placeholder: 'renderField 实现的',
              clearable: true,
            },
          },
          {
            minWidth: 240,
            label: '活动名称3-1',
            prop: 'name3_1',
            renderField: ({ form, formItem, recordKey, index }) => {
              console.log('renderField', recordKey, index)
              return <el-input 
                value={ form.name3_1 } 
                onInput={ val => form.name3_1 = val } 
                attrs={ formItem.fieldProps }
              />
            },
            formatter: (row, column, cellValue, index) => {
              return row.name3_1
            },
            fieldProps: {
              placeholder: 'renderField 实现的',
              clearable: true,
            },
          },
          {
            minWidth: 240,
            label: '活动名称4',
            prop: 'name4',
            valueType: 'input',
            fieldProps: {
              placeholder: 'formatter 渲染文本',
              clearable: true
            },
            formatter: (row, column, cellValue, index) => {
              return `formatter ${cellValue} loooooooooooooooooooooooooooooooooooooong`
            },
            'show-overflow-tooltip': true
          },
          {
            width: 180,
            label: '活动类型',
            prop: 'type1',
            valueType: 'select',
            valueEnum: {
              '1': '球类',
              '2': '棋类',
              '3': '唱歌'
            },
          },
          {
            width: 180,
            label: '活动类型',
            prop: 'type2',
            valueType: 'select',
            fieldEvents: {
              change: (val, options) => {
                console.log('val', val, options)
              }
            },
            optionLoader: () => new Promise(resolve => {
              setTimeout(() => {
                resolve([
                  { label: '球类', value: '1' },
                  { label: '棋类', value: '2' },
                  { label: '唱歌', value: '3' },
                ])
              }, 100)
            })
          },
          {
            width: 180,
            label: '活动时间',
            prop: 'date',
            valueType: 'date-picker',
            fieldProps: {
              valueFormat: 'yyyy-MM-dd'
            }
          },
          {
            width: 100,
            label: '活动开启',
            prop: 'status',
            valueType: 'switch',
            renderCell: (scope) => <el-switch disabled value={scope.row.status}></el-switch>,
            editable: (cellValue, row, index) => {
              console.log('editable', cellValue, row, index)
              return !cellValue
            }
          },
          {
            width: 100,
            label: '只读',
            prop: 'readonly',
            formatter: (row, column, cellValue, index) => {
              return <span>我是只读的</span>
            },
            readonly: true
          },
          {
            width: 180,
            label: '操作',
            valueType: 'option',
            fixed: 'right',
            renderCell: (scope, action) => [
              <el-button type="text" onClick={() => action.startEditable(scope.row.id)}>编辑</el-button>,
              <el-button type="text" onClick={ () => this.dataSource = this.dataSource.filter(item => item.id !== scope.row.id) }>删除</el-button>,
              <el-button type="text" onClick={() => action.addEditRecord({ id: Math.random().toString().slice(2, 10), name1: scope.row.name1 })}>复制</el-button>,
            ]
          }
        ]
      }
    },
    data() {
      return {
        dataSource: undefined,
        recordCreatorProps: {
          position: 'top',
          newRecordType: 'dataSource',
          record: () => ({
            // 建议写全，表单重置必须绑定属性
            id: Math.random().toString().slice(2, 10),
            name1: 'hello',
            name2: undefined,
            name3: undefined,
            name3_1: undefined,
            name4: undefined,
            type1: undefined,
            type2: undefined,
            date: undefined,
            status: undefined
          }),
          createButtonText: '新增一行',
          style: {
            background: '#d9d9d9'
          },
          buttonProps: {
            type: 'primary'
          },
          onlyAddOneLineAlertMessage: '只能新增一行!'
        },
        editableKeys: [],
        loading: false
      }
    },
    created () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        const data = [
          { name1: undefined, name2: '名称2-1', name3: '名称3-1', name3_1: '名称3_1-1', name4: '名称4-1', id: '1111' },
          { name1: 'hello js', name2: '名称2-2', name3: '名称3-2', name3_1: '名称3_1-2', name4: '名称4-2', id: '11111' }
        ]
        this.dataSource = data
      }, 1000)
    },
    methods: {
      selectionChange(selection) {
        console.log('selection', selection)
      },
      getFormRef() {
        console.log('formRef', this.$refs.editableProTableRef.getFormRef())
      },
      getTableRef() {
        console.log('tableRef', this.$refs.editableProTableRef.getTableRef())
      },
      validate() {
        // 注意：需要在编辑状态下调用
        const validate = this.$refs.editableProTableRef.validate()
        validate(valid => {
          console.log('valid', valid)
        })
      },
      async validateRow() {
        // 注意：需要在编辑状态下调用
        const validateRes = await this.$refs.editableProTableRef.validateRow(0)
        console.log('validateRes', validateRes)
      },
      reset() {
        const reset = this.$refs.editableProTableRef.reset()
        reset()
      },
      getRowData() {
        const data = this.$refs.editableProTableRef.getRowData(1)
        console.log('第二行数据', data)
        const newData = this.$refs.editableProTableRef.getRowData('11111')
        console.log('id 为 11111 的数据', newData)
      },
      getRowsData() {
        console.log('rowsData', this.$refs.editableProTableRef.getRowsData())
      },
      setRowData() {
        const ref = this.$refs.editableProTableRef
        ref.setRowData(1, { name1: 'hello javaScript' })
        ref.setRowData('11111', { name3: undefined })
      }
    },
  }
</script>

<style scoped>
</style>
