<template>
  <ProTable 
    :columns="columns"  
    :dataSource="dataSource"
    :total="total"
    :loading="loading"
    @onParams="onParams"
  />  
</template>

<script>
import { ProTable } from 'element-ui-pro-components/src/index'

const TOTAL_RECORDS = 256

export default {
  name: 'BasicProTable',
  components: {
    ProTable
  },
  computed: {
    columns() {
      return [
        {
          'min-width': 120,
          label: '姓名',
          prop: 'name',
          valueType: 'input' 
        },
        {
          'min-width': 180,
          label: '日期',
          prop: 'date',
          valueType: 'date-picker',
          sortable: 'custom'
        },
        {
          'min-width': 120,
          label: '省/直辖市',
          prop: 'province',
          valueType: 'select',
          valueEnum: {
            'beijing': '北京',
            'shanghai': '上海',
            'zhejiang': '浙江'
          }
        },
        {
          width: 240,
          label: '地址',
          prop: 'address',
          'show-overflow-tooltip': true
        },
        {
          width: 120,
          label: '操作',
          fixed: 'right',
          renderCell: () => [
            <el-button type="text">详情</el-button>,
            <el-button type="text">编辑</el-button>
          ],
          key: 'action'
        }
      ]
    },
  },
  data() {
    return {
      dataSource: undefined,
      total: 0,
      loading: false
    }
  },
  methods: {
    onParams(params) {
      console.log('params', params)

      const { pageSize, pageNum } = params
      const data = Array.from({ length: TOTAL_RECORDS }, (_, index) => ({
        id: index,
        name: '名称' + Math.random().toString().slice(2, 6),
        date: '2026-03-21',
        province: index % 3 === 0 ? 'beijing' : index % 3 === 1 ? 'shanghai' : 'zhejiang',
        address: '这是一段很长很长很长很长很长很长很长很长很长很长很长很长的内容'
      }))
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.dataSource = data.slice((pageNum - 1) * pageSize, pageNum * pageSize)
        this.total = TOTAL_RECORDS
      }, 200)
    }
  }
}
</script>

