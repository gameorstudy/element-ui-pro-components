<template>
  <div ref="proTableRef" class="element-pro-table">
    <!-- form -->
    <!-- start -->
    <template v-if="search">
      <el-form
        class="pro-table-form"
        :label-width="searchProps.labelWidth"
        :label-position="searchProps.labelPosition"
        :model="form"
        :size="defaultSize"
        :class="searchProps.className"
      >
        <!-- 栅格化布局 -->
        <!-- start -->
          <el-row v-bind="searchProps.rowConfig">
            <el-col v-for="(item, index) in formItems" v-bind="searchProps.colConfig" :style="{ display: index >= searchCount ? 'none' : '' }" :key="item.prop">
              <!-- pro-form-item -->
              <!-- start -->
              <ProFormItem :item="item" :form="form">
                <template #label="scope">
                  <slot :name="`${item.prop}-label`" v-bind="scope" />
                </template>
              </ProFormItem>
              <!-- end -->
            </el-col>
            <!-- button -->
            <!-- start -->
            <el-col v-bind="searchColConfig" align="right" key="search">
              <el-form-item>
                <el-button icon="el-icon-refresh" @click="handleReset">{{ searchProps.resetText }}</el-button>
                <el-button type="primary" icon="el-icon-search" :loading="loading" @click="handleSearch">{{ searchProps.searchText }}</el-button>
                <template v-if="showExpandToggle">
                  <a class="collapse-button" @click="handleCollapse">
                    {{ collapsed ? '展开' : '收起' }}
                    <ArrowIcon style="margin-inline-start: 5px; transition: 0.3s;" :style="{ transform: `rotate(${collapsed ? 0 : 0.5}turn)` }" />
                  </a>
                </template>
              </el-form-item>
            </el-col>
            <!-- end -->
          </el-row>
      </el-form>
    </template>
    <!-- end -->
    <!-- slot -->
    <!-- start -->
    <slot></slot>
    <!-- end -->
    <el-table
      class="pro-table"
      :class="tableClassName"
      v-loading="loading"
      :data="tableData"
      v-bind="{ size: defaultSize, ...tableProps }"
      v-on="initializedTableEvents"
    >
      <el-table-column 
        v-for="column in normalizedColumns" 
        v-bind="{ 
          ...column, 
          renderCustomHeader: undefined, 
          render: undefined,
          valueEnum: undefined
        }" 
        :key="column.prop"
      >
        <template v-if="column.renderCustomHeader" #header="scope">
          <!-- 覆写头部 -->
          <!-- start -->
          <custom-render :render="() => column.renderCustomHeader(scope)" />
          <!-- end -->
        </template>
        <template v-if="column.render" #default="scope">
          <!-- 自定义 render -->
          <!-- start -->
          <custom-render :render="() => column.render(scope)" />
          <!-- end -->
        </template>
        <template v-else-if="column.valueEnum" #default="scope">
          <!-- valueEnum -->
          <!-- start -->
          <span>{{ scope.row && column.valueEnum[scope.row[column.prop]] }}</span>
          <!-- end -->
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="pro-table-pagination"
      v-bind="{ ...initializedPaginationProps, pageKey: undefined, sizeKey: undefined }"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
    />
  </div>
</template>

<script>
  import ProFormItem from '../ProForm/children/ProFormItem'
  import ArrowIcon from './components/ArrowIcon.vue'
  import CustomRender from './components/render.vue'
  import { setPlaceholder, setSelectOptions, setCascaderOptions } from '../../utils/form'
  import { defaultColConfig, BREAKPOINT_ORDER, GRID_COLUMNS, calculateCurrentSpan } from '../../utils/breakpoints'
  import { debounce } from '@/utils/debounce';
  
  export default {
    name: 'ProTable',
    components: {
      ProFormItem,
      ArrowIcon,
      CustomRender
    },
    props: {
      // 搜索表单
      search: {
        type: [Boolean, Object],
        default: true
      },
      // 列设置
      columnSettings: { // todo
        type: [Boolean, Object],
        default: true
      },
      // 默认数据
      defaultData: {
        type: Array,
        default: () => []
      },
      // 表格数据
      dataSource: {
        type: Array,
        default: () => [],
      },
      // el-table 的 class name
      tableClassName: {
        type: String
      },
      // el-table attributes 配置
      tableProps: {
        type: Object,
        default: () => ({})
      },
      // el-table events 配置
      tableEvents: {
        type: Object,
        default: () => ({})
      },
      // 列表项配置
      columns: {
        type: Array,
        default: () => [],
        required: true
      },
      // el-pagination 配置
      paginationProps: {
        type: Object,
        default: () => ({})
      },
      // 默认的 size
      defaultSize: {
        type: String,
        validator: function(value) {
          return ['medium', 'small', 'mini'].includes(value)
        }
      },
      // 表格数据请求加载状态
      loading: {
        type: Boolean,
        default: false
      },
      // el-pagination 条数
      total: {
        type: Number,
        default: 0
      },
      // 是否需要手动触发首次请求
      manualRequest: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      // search 标准化处理
      searchProps() {
        const { search } = this
        if (search) {
          const defaultSearch = {
            searchText: '查询',
            resetText: '重置',
            labelWidth: '80px',
            rowConfig: {
              gutter: 8
            },
            colConfig: defaultColConfig,
            collapsed: true, // 默认收起
            defaultExpandedRows: 2
          }

          if (typeof search === 'object') {
            return {
              ...defaultSearch,
              ...this.search,
              collapsed: search.collapsed ?? search.defaultCollapsed ?? true
            }
          }

          return {
            ...defaultSearch,
          }
        }

        return false
      },
      // 表单项
      formItems() {
        const { columns } = this
        return columns
          // 过滤隐藏的 && 无表单类型的
          .filter(col => !col.hideInSearch && col.valueType)
          // 权重大排序在前
          .sort((a, b) => b - a)
          // 筛选
          .map(col => {
            const { label, prop, formItemProps = {}, valueType, fieldProps = {}, fieldEvents, valueEnum, optionLoader, labelSlot, initialValue } = col
            // 设置 el-form-item
            formItemProps.label = formItemProps.label || label
            formItemProps.prop = formItemProps.prop || prop

            // 设置 placeholder
            setPlaceholder(fieldProps, valueType)

            // 设置 select options
            setSelectOptions(col, this.cachedOptions)

            // 设置 cascader options
            setCascaderOptions(fieldProps, col, this.cachedOptions)
            
            return {
              ...formItemProps,
              valueType,
              fieldProps,
              fieldEvents,
              options: col.options,
              valueEnum,
              optionLoader,
              labelSlot,
              initialValue,
            }
          })
      },
      // 表单项总个数
      totalSearchCount() {
        return this.formItems.length
      },
      // 标准化列配置
      normalizedColumns() {
        const { columns } = this
        return columns
          // 过滤不展示的
          .filter(col => !col.hideInTable)
          .map(col => {
            // 过滤多余属性
            const { formItemProps, valueType, fieldProps, fieldEvents, options, optionLoader,
              order, labelSlot, hideInSearch, initialValue, disabled, ...keys } = col
              return { ...keys }
          })
      },
      // 初始化 table events
      initializedTableEvents() {
        const { tableEvents } = this
        return {
          'sort-change': this.sortChange, // 添加排序
          ...tableEvents
        }
      },
      // 初始化分页参数
      initializedPaginationProps() {
        const { paginationProps } = this
        return {
          'page-sizes': [10, 20, 30, 50],
          layout: 'total, sizes, prev, pager, next, jumper',
          'hide-on-single-page': true,
          ...paginationProps,
          'current-page': this.pageNum,
          'page-size': this.pageSize,
          total: this.total
        }
      }
    },
    data() {
      return {
        cachedOptions: {}, // 下拉数据 { [prop]: data }
        form: this.initForm(), // 表单数据
        showExpandToggle: false, // 是否显示展开、收起
        searchColConfig: defaultColConfig, // search Col 配置
        collapsed: true, // 展开、收起
        searchCount: 0, // 收起展示的表单个数
        tableData: this.defaultData, // 表格数据
        pageNum: 1, // 页码
        pageSize: this.paginationProps['page-size'] || 10, // 页数
      }
    },
    watch: {
      // 监听表单项总个数
      totalSearchCount() {
        this.calculateSearchLayout()
      },
      // 监听 search.collapsed
      'search.collapsed': function(newValue) {
        if (newValue !== this.collapsed) {
          this.handleCollapse()
        }
      },
      // 监听表格数据
      dataSource(newVal) {
        this.tableData = newVal
      }
    },
    created () {
      // 获取异步数据
      this.getOptions()
      // 是否手动执行
      if (!this.manualRequest) {
        this.handleSearch()
      }
    },
    mounted () {
      // 是否支持响应式
      const isResponsive = this.isResponsive()
      // 计算是否需要展开、收起以及位置
      this.calculateSearchLayout(isResponsive)
      // 监听 window 宽度变化
      if (isResponsive) {
        // window 宽度变化防抖
        this.debounceResize = debounce(this.resize)
        // 监听 window resize
        window.addEventListener('resize', this.debounceResize)
      }
    },
    methods: {
      /**
       * @desc 是否需要支持响应式
       * @returns {boolean}
       */
      isResponsive() {
        const { searchProps: { colConfig } } = this
        const keys = Object.keys(colConfig)
        return keys.some(key => BREAKPOINT_ORDER.includes(key))
      },
      /**
       * @desc 计算搜索区域是否需要展开、收起或显示的位置
       * @param {boolean} isResponsive 是否是响应式
       */
      calculateSearchLayout(isResponsive) {
        const { searchProps: { colConfig, defaultExpandedRows }, totalSearchCount } = this
        if (isResponsive) {
          // 缓存一栏占的 span
          this.cachedSpanPerField = calculateCurrentSpan(colConfig)
        } else {
          // 缓存一栏占的 span
          this.cachedSpanPerField = colConfig.span || 8
        }

        // 计算最大展示的表单个数
        const maxSearchCount = GRID_COLUMNS / this.cachedSpanPerField * defaultExpandedRows - 1

        // 计算是否需要展开、收起
        this.showExpandToggle = totalSearchCount > maxSearchCount

        if (this.showExpandToggle) {
          // 当前是否展开
          this.collapsed = this.searchProps.collapsed

          // 缓存收起的的表单个数
          this.cachedSearchCount = maxSearchCount
        }

        // 更新展开、收起的位置
        this.updateSearchLayout()
      },
      /**
       * @desc 更新展开、收起的位置
       */
      updateSearchLayout() {
        const { searchProps: { colConfig } } = this
        // 判断展开、收起的表单个数
        if (this.showExpandToggle && this.collapsed) {
          this.searchCount = this.cachedSearchCount
        } else {
          this.searchCount = this.totalSearchCount
        }

        // 计算展开、收起的剩余空间
        const restSpan = GRID_COLUMNS - this.cachedSpanPerField * this.searchCount % GRID_COLUMNS 
        // 计算偏差值 offset
        const offset = restSpan - this.cachedSpanPerField
        this.searchColConfig = { ...colConfig, offset }
      },
      /**
       * @desc 宽度变化
       * @param {Array} entries 监听元素数据
       */
      resize() {
        // 重新计算
        this.calculateSearchLayout(true)
      },
      /**
       * @desc 点击展开、收起
       */
      handleCollapse() {
        this.collapsed = !this.collapsed
        this.$emit('onCollapse', this.collapsed)
        if (this.showExpandToggle) {
          // 更新展开、收起的位置
          this.updateSearchLayout()
        }
      },
      /**
       * @desc 获取异步下拉数据
       */
      getOptions() {
        const { columns } = this
        for (const column of columns) {
          const { prop, optionLoader, fieldProps } = column
          if (optionLoader && typeof optionLoader === 'function') {
            optionLoader().then(res => {
              const key = fieldProps?.prop || prop
              this.cachedOptions = {
                ...this.cachedOptions,
                [key]: res
              }
            })
          }
        }
      },
      /**
       * @desc 初始化表单数据
       */
      initForm() {
        const { columns } = this
        // 兼容
        if (!columns.length) {
          return {}
        }

        return columns
          // 筛选表单类型
          .filter(column => column.valueType)
          .reduce((accu, cur) => {
            const { prop, initialValue, fieldProps } = cur
            const key = fieldProps?.prop || prop
            return {
              ...accu,
              [key]: initialValue
            }
          }, {})
      },
      /**s
       * @desc 表单请求参数（分页）
       */
      getParams() {
        const { pageNum, pageSize, paginationProps: { pageKey, sizeKey } } = this
        return {
          ...this.form,
          [pageKey || 'pageNum']: pageNum,
          [sizeKey || 'pageSize']: pageSize
        }
      },
      /**
       * @desc 重置
       */
      handleReset() {
        this.form = this.initForm()
        // 重置第一页
        this.pageNum = 1
        this.$emit('onParams', this.getParams())
        this.$emit('onReset')
      },
      /**
       * @desc 查询
       */
      handleSearch() {
        // 重置第一页
        this.pageNum = 1
        this.$emit('onParams', this.getParams())
        this.$emit('onSubmit')
      },
      /**
       * @desc 刷新
       * @param {boolean} resetPageIndex 是否重置页码
       */
      reload(resetPageIndex = true) {
        if (resetPageIndex) {
          this.pageNum = 1
        }

        this.$emit('onParams', this.getParams())
      },
      /**
       * @desc 排序
       * @param {String} prop 属性
       * @param {String} order 升序: ASC 倒序: DESC
       */
      sortChange({ prop, order }) {
        this.$emit('onParams', { ...this.getParams(), prop, order })
      },
      /**
       * @desc 监听页码修改
       * @param {Number} page 页码
       */
      handleCurrentChange(page) {
        this.pageNum = page
        this.$emit('onParams', this.getParams())
      },
      /**
       * @desc 监听页数修改
       * @param {Number} pageSize 页数
       */
      handleSizeChange(pageSize) {
        this.pageSize = pageSize
        // 重置页码（防止组件会自动计算页码 可能在 nextTick 后执行 current-change 事件）
        this.pageNum = 1

        this.$emit('onParams', this.getParams())
      }
    },
    beforeDestroy () {
      // 清除 resize
      window.removeEventListener('resize', this.resize)
      // 取消防抖
      this.debounceResize?.cancel()
    },
  }
</script>

<style scoped>
.pro-table-form {
  padding: 24px 24px 2px;
  margin-block-end: 16px;
  background-color: #fff;
}

.pro-table-form /deep/ .el-form-item__content .el-select,
.pro-table-form /deep/ .el-form-item__content .el-input-number,
.pro-table-form /deep/ .el-form-item__content .el-date-editor,
.pro-table-form /deep/ .el-form-item__content .el-cascader {
  width: 100%;
}

.collapse-button {
  margin-left: 16px;
  color: #409eff;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}

.pro-table {
  background-color: #fff;
}

.pro-table-pagination {
  margin: 16px 0;
  margin-block-end: 0;
  display: flex;
  justify-content: flex-end;
}
</style>
