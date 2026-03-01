<template>
  <div class="pro-table-demo">
    <ProTable
      ref="proTableRef"
      :search="search"
      className="pro-table-test"
      :dataSource="dataSource"
      :loading="loading"
      :total="total"
      :tableProps="{
        border: true
      }"
      :tableEvents="{
        'selection-change': this.selectChange
      }"
      :columns="columns"
      :paginationProps="{
        'page-sizes': [10, 20],
      }"
      :paginationMapping="{
        pageKey: 'page',
        sizeKey: 'size'
      }"
      :initialValues="{
        name4: ''
      }"
      defaultSize="small"
      :manualRequest="true"
      :columnSettings="columnSettings"
      @onParams="onParams"
      @onSubmit="onSubmit"
      @onReset="onReset"
      @onCollapse="onCollapse"
    >
      <!-- 活动名称3 -->
      <!-- start -->
      <template #name3="{ form, formItem }">
        <el-input v-model="form.name3" v-bind="formItem.fieldProps"></el-input>
      </template>
      <!-- end -->
      <span>
        <el-button type="primary" @click="collapsed = !collapsed">手动展开、收起</el-button>
        <el-button type="primary" @click="reload">手动刷新</el-button>
        <el-button type="primary" @click="getTableRef">获取引用</el-button>
      </span>
    </ProTable>
  </div>
</template>

<script>
  import { ProTable } from 'element-ui-pro-components'

  const TOTAL_RECORDS = 256

  export default {
    name: 'Demo1',
    components: {
      ProTable,
    },
    computed: {
      search() {
        return {
          searchText: '查询按钮',
          resetText: '重置按钮',
          labelWidth: '105px',
          defaultCollapsed: false,
          collapsed: this.collapsed,
          defaultExpandedRows: 1
        }
      },
      columns() {
        return [
          {
            width: 60,
            type: 'selection',
            key: 'selection',
            disabled: true
          },
          { 
            label: '活动名称1',
            prop: 'name1',
            valueType: 'input',
          },
          {
            label: '活动名称2',
            renderLabel: () => <span style="color: #F56C6C">活动名称2</span>,
            prop: 'name2',
            valueType: 'input',
            fieldProps: {
              placeholder: 'renderLabel'
            }
          },
          {
            label: '活动名称3',
            renderCellHeader: () => <span style="color: #F56C6C;">活动名称3</span>,
            prop: 'name3',
            formItemProps: {
              label: '活动名称3'
            },
            valueType: 'slot',
            fieldProps: {
              placeholder: 'valueType: slot 实现的',
              clearable: true
            },
          },
          {
            label: '活动名称4',
            renderField: ({ form, formItem }) => 
              <el-input 
                value={ form.name4 } 
                onInput={val => form.name4 = val } 
                attrs={ formItem.fieldProps }
              />
            ,
            fieldProps: {
              placeholder: 'renderField 实现的',
              clearable: true,
            },
            renderCell: (scope) => <span>自定义渲染 {scope.row.name4}</span>,
            'show-overflow-tooltip': true,
            key: 'name4'
          },
          {
            label: '活动区域1',
            prop: 'region1',
            valueType: 'select',
            fieldProps: {
              clearable: true
            },
            options: [
              { label: '北京', value: 'beijing' },
              { label: '上海', value: 'shanghai' },
            ],
            initialValue: 'beijing', 
            formatter: (row) => {
              return ({
                'beijing': '北京',
                'shanghai': '上海'
              })?.[row.region1]
            } 
          },
          {
            label: '活动区域2',
            prop: 'region2',
            valueType: 'select',
            valueEnum: {
              'beijing': '北京',
              'shanghai': '上海'
            },
          },
          {
            label: '活动区域3',
            prop: 'region3',
            valueType: 'select',
            valueEnum: new Map([
              ['beijing', '北京'],
              ['shanghai', '上海']
            ]),
          },
          {
            label: '活动区域4',
            prop: 'region4',
            valueType: 'select',
            optionLoader: () => {
              return new Promise(resolve => {
                setTimeout(() => {
                  resolve([
                    { label: '北京', value: 'beijing' },
                    { label: '上海', value: 'shanghai' },
                  ])
                }, 1000)
              })
            },
            formatter: (row) => {
              return ({
                'beijing': '北京',
                'shanghai': '上海'
              })?.[row.region4]
            } 
          },
          {
            label: 'hide in search',
            prop: 'search',
            valueType: 'input',
            hideInSearch: true
          },
          {
            label: 'hide in table',
            prop: 'table',
            valueType: 'input',
            hideInTable: true
          },
          {
            width: 120,
            label: '操作',
            fixed: 'right',
            renderCell: (scope) => [
              <el-button type="text">详情</el-button>,
              <el-button type="text">编辑</el-button>
            ],
            key: 'option',
          }
        ]
      }
    },
    data() {
      return {
        collapsed: undefined,
        dataSource: [],
        loading: false,
        total: 0,
        columnSettings: {
          resetText: '重置按钮',
          settingText: '列设置文本',
        }
      }
    },
    methods: {
      onParams(params) {
        console.log('params', params)
        const data = Array.from({ length: TOTAL_RECORDS }, () => ({
          name1: `名称1 ${Math.random().toString().slice(2, 6)}`,
          name2: `名称2 ${Math.random().toString().slice(2, 6)}`,
          name3: `名称3 ${Math.random().toString().slice(2, 6)}`,
          name4: `名称4 ${Math.random().toString().slice(2, 6)}`,
          region1: 'beijing',
          region2: 'shanghai',
          region3: 'shanghai',
          region4: 'beijing',
        }))
        const { page, size } = params
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.dataSource = data.slice((page - 1) * size, page * size)
          this.total = TOTAL_RECORDS
        }, 1000)
      },
      onSubmit(params) {
        console.log('onSubmit', params)
      },
      onReset() {
        console.log('onReset')
      },
      onCollapse(collapsed) {
        this.collapsed = collapsed
        console.log(`我${collapsed ? '收起了' : '展开了'}`)
      },
      selectChange(rows) {
        console.log('rows', rows)
      },
      reload() {
        this.$refs.proTableRef.reload()
      },
      getTableRef() {
        const ref = this.$refs.proTableRef.getTableRef()
        console.log('ref', ref)
      }
    },
  }
</script>

<style scoped>
.pro-table-demo {
  padding: 24px;
}
</style>
