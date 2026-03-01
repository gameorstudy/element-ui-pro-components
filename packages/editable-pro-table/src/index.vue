<template>
  <component
    :is="formRef ? 'fragment' : 'el-form'"
    v-bind="getDynamicProps"
  >
    <el-table-prepend
      ref="editableProTableRef"
      class="editable-pro-table"
      :class="className"
      v-loading="loading"
      :data="form[name]"
      v-bind="initializedTableProps"
      v-on="tableEvents"
    >
      <template v-if="initializedCreatorProps.position === 'top' && !exceedsMax" #prepend>
        <div class="btn-add-box">
          <RecordCreator
            :recordCreatorProps="initializedCreatorProps"
            :size="defaultSize"
            @click.native="addEditRecord(null)"
          />
        </div>
      </template>
      <el-table-column
        v-for="(column, index) in initializedColumns"
        v-bind="getColumnProps(column, index)"
        :key="column.prop || column.key"
      >
        <template v-if="column.renderCellHeader" #header="scope">
          <!-- 覆写头部 -->
          <!-- start -->
          <CustomRender :render="() => column.renderCellHeader(scope)" />
          <!-- end -->
        </template>
        <template v-if="column.valueType || column.renderField" #default="scope">
          <template v-if="column.valueType === 'option'">
            <!-- 操作栏 -->
            <!-- start -->
            <Editable 
              :editable="initializedEditable"
              :action="{
                cancelEditable,
                startEditable,
                addEditRecord
              }"
              :validateRow="validateRow"
              :recordKey="scope.row[rowKey]"
              :scope="scope"
              :name="name"
              :render="(action) => column.renderCell(scope, action)"
              :newLineRecordCache="newLineRecordCache"
              :preEditRows="preEditRows"
              :defaultSize="defaultSize"
              @delete="filterByRecordKey"
              @cancel="deleteOrResetRow"
            />
            <!-- end -->
          </template>
          <template v-else>
            <RenderCell 
              :editable="initializedEditable"
              :column="column" 
              :name="name"
              :recordKey="scope.row[rowKey]"
              :scope="scope"
              :cachedOptions="cachedOptions"
              :preEditRows="preEditRows"
            >
              <template #[column.prop]="scope">
                <slot :name="column.prop" v-bind="scope"></slot>
              </template>
            </RenderCell>
          </template>
        </template>
      </el-table-column>
    </el-table-prepend>
    <RecordCreator
      v-if="initializedCreatorProps.position === 'bottom' && !exceedsMax" 
      :recordCreatorProps="initializedCreatorProps"
      :size="defaultSize"
      @click.native="addEditRecord(null)"
    />
  </component>
</template>

<script>
  import ElTablePrepend from 'el-table-prepend'
  import RecordCreator from './components/RecordCreator'
  import CustomRender from '@packages/custom-render'
  import RenderCell from './components/RenderCell'
  import Editable from './components/Editable'

  export default {
    name: 'EditableProTable',
    components: {
      ElTablePrepend,
      RecordCreator,
      CustomRender,
      RenderCell,
      Editable
    },
    // 组件外 el-form 的引用
    inject: {
      formRef: {
        from: 'elForm',
        default: null
      }
    },
    props: {
      // el-table 的数据
      dataSource: {
        type: Array,
        required: true,
        default: () => []
      },
      // 新建一行数据的相关配置
      recordCreatorProps: {
        type: [Boolean, Object],
        default: true
      },
      // 最大的行数
      maxLength: {
        type: Number,
      },
      // 可编辑表格的相关配置
      editable: {
        type: Object,
      },
      // 行数据的 Key
      rowKey: {
        type: String
      },
      // 表格名称
      name: {
        type: String,
        default: 'dataSource'
      },
      // el-table 的类名
      className: {
        type: String
      },
      // 加载中
      loading: {
        type: Boolean,
      },
      // el-table attributes 的配置
      tableProps: {
        type: Object
      },
      // el-table events 的配置
      tableEvents: {
        type: Object,
      },
      // 列定义
      columns: {
        type: Array,
        required: true,
        default: () => []
      },
      // 默认的 size
      defaultSize: {
        type: String,
        validator: function (value) {
          return ['medium', 'small', 'mini'].includes(value)
        },
      },
      // 固定列是否使用 position: sticky 实现
      sticky: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      getDynamicProps() {
        const { formRef, form, defaultSize } = this

        if (!formRef) {
          return {
            ref: 'formRef',
            model: form,
            size: defaultSize
          }
        }

        return
      },
      // recordCreatorProps 初始化
      initializedCreatorProps() {
        const { recordCreatorProps } = this
        if (recordCreatorProps) {
          const defaultRecordCreatorProps = {
            position: 'bottom',
            newRecordType: 'cache',
            creatorButtonText: '添加一行数据',
            onlyAddOneLineAlertMessage: '只能新增一行'
          }
          if (typeof recordCreatorProps === 'object') {
            return {
              ...defaultRecordCreatorProps,
              ...recordCreatorProps
            }
          }

          return defaultRecordCreatorProps
        }

        return false
      },
      // 是否超过了最大的行数
      exceedsMax() {
        const { maxLength } = this
        if (typeof maxLength === 'number') {
          return this.form[this.name].length >= maxLength
        }

        return false
      },
      // editable 初始化
      initializedEditable() {
        const defaultEditable = {
          type: 'single',
          saveText: '保存',
          deleteText: '删除',
          cancelText: '取消',
          deletePopconfirmMessage: '删除此项？',
          onlyOneLineEditorAlertMessage: '只能同时编辑一行',
        }

        return {
          ...defaultEditable,
          ...this.editable
        }
      },
      // tableProps 初始化
      initializedTableProps() {
        const { rowKey, tableProps = {}, defaultSize: size } = this
        return {
          ...tableProps,
          rowKey,
          size,
          'cell-style': (data) => this.getCellStyle(data, tableProps['cell-style']),
          'header-cell-style': (data) => this.getCellStyle(data, tableProps['header-cell-style']),
        }
      },
      // columns 初始化
      initializedColumns() {
        return this.columns.filter(item => !item.hideInTable)
      },
      // 计算定位的偏移
      calculateOffset() {
        const offset = {}
        const { initializedColumns, sticky } = this
        let totalLeftOffset = 0
        let leftIndex = -1
        for (let i = 0; i < initializedColumns.length; i++) {
          const col = initializedColumns[i]
          const isSticky = sticky !== false && col.fixed === 'left'
          if (isSticky) {
            leftIndex = i
            offset[i] = totalLeftOffset
            totalLeftOffset += col.width || col.minWidth
          }
        }
        
        let totalRightOffset = 0
        let rightIndex = -1
        for (let i = initializedColumns.length - 1; i >= 0; i--) {
          const col = initializedColumns[i]
          const isSticky = sticky !== false && col.fixed === 'right'
          if (isSticky) {
            rightIndex = i
            offset[i] = totalRightOffset
            totalRightOffset += col.width || col.minWidth
          }
        }
        
        return {
          offset,
          leftIndex,
          rightIndex
        }
      },
    },
    data() {
      return {
        cachedOptions: {}, // 下拉数据 { [prop]: data }
        form: {
          [this.name]: this.dataSource
        },
        newLineRecordCache: undefined, // 新增一行草稿数据
        preEditRows: new Map(), // 编辑前行数据
      }
    },
    created () {
      // 获取异步数据
      this.getOptions()
    },
    watch: {
      // 监听元数据变化
      dataSource(newValue) {
        this.form[this.name] = newValue
      },
    },
    methods: {
      /**
       * @desc 获取异步下拉数据
       */
      getOptions() {
        for (const item of this.columns) {
          const { prop, optionLoader } = item
          if (typeof optionLoader === 'function') {
            optionLoader().then(res => {
              this.cachedOptions = {
                ...this.cachedOptions,
                [prop]: res
              }
            })
          }
        }
      },
      /**
       * 新增一行的方法
       * @param record 数据
       * @param newLine 新增一行的配置
       */
      addEditRecord(record, newLine) {
        const { initializedCreatorProps: { onlyAddOneLineAlertMessage } } = this
        // 只能新增一行校验
        if (this.newLineRecordCache) {
          this.$message.warning(onlyAddOneLineAlertMessage)
          return
        }

        // 只能同时编辑一行校验
        if (!this.validateCanStartEdit()) {
          return
        }

        const { form, name, rowKey } = this
        const { initializedCreatorProps: { position, newRecordType, record: defaultRecord } } = this
        const dataSource = form[name]
        const newLineConfig = {
          position,
          newRecordType,
          ...(newLine || {})
        }
        const index = newLineConfig.position === 'top' ? dataSource.length : 0
        record = record ?? defaultRecord
        const newRecord = typeof record === 'function' ? record(index, dataSource) : record
        if (!newRecord[rowKey]) {
          console.error('Error: 请设置 recordCreatorProps.record 并返回一个唯一的key')
          return
        }

        // 记录缓存数据
        if (newLineConfig.newRecordType !== 'dataSource') {
          this.newLineRecordCache = {
            // 深拷贝防止引用
            defaultValue: JSON.parse(JSON.stringify(newRecord)),
            options: {
              ...newLineConfig,
              recordKey: newRecord[rowKey]
            }
          }
        } else {
          this.newLineRecordCache = undefined
        }

        // 插入数据
        if (newLineConfig.position === 'top') {
          dataSource.unshift(newRecord)
        } else {
          dataSource.push(newRecord)
        }

        // 更新 editableKeys
        const { initializedEditable: { editableKeys, onChange } } = this
        const newKeys = [...editableKeys, newRecord[rowKey]]
        const editableRows = dataSource.filter(item => editableKeys.includes(item[rowKey]))
        onChange?.(newKeys, editableRows)
      },
      /**
       * @desc 获取 column 配置
       * @param col 列
       */
      getColumnProps(col, index) {
        // 筛选 el-column 属性
        const {
          formItemProps,
          renderLabel,
          valueType,
          renderField,
          fieldProps,
          fieldEvents,
          options,
          valueEnum,
          optionLoader,
          renderCellHeader,
          renderCell,
          editable,
          readonly,
          key,
          ...keys
        } = col
        const { sticky } = this

        const getStickyClassName = (fixed, sticky) => {
          if (!sticky) return ''
          if (fixed === 'left') return 'editable-pro-table__fixed-left'
          if (fixed === 'right') return 'editable-pro-table__fixed-right'
          return ''
        }

        let className = col['class-name'] || ''
        if (col.fixed && sticky) {
          className += ' ' + getStickyClassName(col.fixed, sticky)
        }
        if (this.calculateOffset.leftIndex === index) {
          className += ' ' + 'editable-pro-table__fixed-start-shadow'
        } else if (this.calculateOffset.rightIndex === index) {
          className += ' ' + 'editable-pro-table__fixed-end-shadow'
        }

        return {
          ...keys,
          fixed: col.fixed && sticky ? undefined : col.fixed,
          'class-name': className
        }
      },
      /**
       * @desc 获取待校验的字段
       * @param index 下标
       * @returns {Array}
       */
      getValidateFields(index) {
        return this.columns
          .filter(item => (item.valueType && item.valueType !== 'option') || item.renderField)
          .map(item => `${this.name}.${index}.${item.prop}`)
      },
      /**
       * @desc 校验行
       * @param index 下标
       */
      validateRow(index) {
        return new Promise(async resolve => {
          const fields = this.getValidateFields(index)
          const promises = fields.map(field => new Promise((resolve) => {
            this.getFormRef()?.validateField(field, error => {
              resolve(!error)
            })
          }))
          const res = await Promise.all(promises)
          resolve(!res.some(item => !item))
        })
      },
      /**
       * @desc 验证是否可以开始编辑
       * @returns {Boolean}
       */
      validateCanStartEdit() {
        const { initializedEditable: { type, editableKeys, onlyOneLineEditorAlertMessage } } = this
        if (editableKeys.length && type === 'single') {
          this.$message.warning(onlyOneLineEditorAlertMessage)
          return false
        }

        return true
      },
      /**
       * @desc 退出编辑
       * @param recordKey 
       */
      clearEditableState(recordKey) {
        const { initializedEditable: { editableKeys, onChange } } = this
        if (!editableKeys.includes(recordKey)) {
          return true
        }
        const newKeys = editableKeys.filter(item => item !== recordKey)
        onChange?.(newKeys)
      },
      /**
       * @desc 清除新增行缓存
       * @param recordKey 
       */
      clearNewLineCache(recordKey) {
        if (this.newLineRecordCache?.options.recordKey === recordKey) {
          this.newLineRecordCache = null
        }
      },
      /**
       * @desc 取消编辑
       * @param {String | Number} recordKey 值
       * @param {Object} editRow 行数据
       * @param {Object} originRow 初始行数据
       */
      async cancelEditable(recordKey, editRow) {
        try {
          const originRow = this.preEditRows.get(recordKey)
          await this.editable.onCancel?.(recordKey, editRow, originRow)
          
          // 退出编辑
          this.clearEditableState(recordKey)

          // 清除新增行缓存
          this.clearNewLineCache(recordKey)
        } catch (err) {
          console.error('err', err)
        }

        return true
      },
      /**
       * @desc 查找行数据
       * @param recordKey
       */
      findRecordByKey(recordKey) {
        const dataSource = this.form[this.name]
        const record = dataSource.find(item => item[this.rowKey] === recordKey)
        return JSON.parse(JSON.stringify(record))
      },
      /**
       * @desc 开始编辑指定字段
       * @param {String | Number} recordKey 值
       * @returns {Boolean}
       */
      startEditable(recordKey) {
        if (!this.validateCanStartEdit()) {
          return false
        }

        const { initializedEditable: { editableKeys, onChange } } = this

        const isAlreadyEditable = editableKeys?.some(key => key === recordKey)

        if (!isAlreadyEditable) {
          onChange?.([...editableKeys, recordKey])
          // 更新 preEditRows
          this.preEditRows.set(recordKey, this.findRecordByKey(recordKey))
        }

        return true
      },
      /**
       * @desc 删除
       * @param recordKey 
       */
      filterByRecordKey(recordKey) {
        const { form, name, rowKey } = this
        const dataSource = form[name]
        const index = dataSource.findIndex(item => item[rowKey] === recordKey)
        if (index !== -1) {
          dataSource.splice(index, 1)
        }
      },
      /**
       * @desc 取消
       * @param recordKey 
       * @param index
       */
      deleteOrResetRow(recordKey, index) {
        const { initializedCreatorProps: { newRecordType } } = this
        const preEditRow = this.preEditRows.get(recordKey)
        if (preEditRow) {
          // 重置为默认值
          const { form, name, rowKey } = this
          const dataSource = form[name]
          const index = dataSource.findIndex(item => item[rowKey] === recordKey)
          if (index !== -1) {
            dataSource.splice(index, 1, preEditRow)
          }
        } else {
          if (newRecordType !== 'dataSource') {
            // 没有历史值 则删除
            this.filterByRecordKey(recordKey)
          } else {
            // 重置为新增的初始值
            const { initializedCreatorProps: { record }, form, name, rowKey } = this
            const dataSource = form[name]
            const newRecord = typeof record === 'function' ? record(index, dataSource) : record
            delete newRecord[rowKey]
            this.setRowData(index, newRecord)
          }
        }
      },
      getFormRef() {
        return this.formRef || this.$refs.formRef
      },
      validate() {
        return this.getFormRef()?.validate
      },
      reset() {
        return this.getFormRef()?.resetFields
      },
      getTableRef() {
        return this.$refs.editableProTableRef
      },
      /**
       * @desc 获取行数据
       */
      getRowData(rowIndex) {
        const dataSource = this.form[this.name]
        if (typeof rowIndex === 'number' && rowIndex < dataSource.length) {
          return dataSource[rowIndex]
        } else {
          return dataSource.find(item => item[this.rowKey] === rowIndex)
        }
      },
      /**
       * @desc 获取整个 table 的数据
       */
      getRowsData() {
        return this.form[this.name]
      },
      /**
       * @desc 设置一行的数据
       */
      setRowData(rowIndex, data) {
        const dataSource = this.form[this.name]
        if (typeof rowIndex === 'number' && rowIndex < dataSource.length) {
          console.log({ ...dataSource[rowIndex], ...data })
          dataSource.splice(rowIndex, 1, { ...dataSource[rowIndex], ...data })
        } else {
          const index = dataSource.findIndex(item => item[this.rowKey] === rowIndex)
          if (index !== -1) {
            dataSource.splice(index, 1, { ...dataSource[index], ...data })
          }
        }
      },
      /**
       * @desc cellStyle
       */
      getCellStyle({ row, column, rowIndex, columnIndex }, parentCellStyle) {
        const parentStyle = parentCellStyle?.({ row, column, rowIndex, columnIndex })
        const childStyle = this.getStickyStyle(columnIndex, this.initializedColumns[columnIndex].fixed)
        
        if (typeof parentStyle === 'string') {
          let cellStyleString = ''
          cellStyleString += parentStyle + ';'

          if (childStyle) {
            const childStyleString = Object.entries(childStyle)
            .map(([key, value]) => {
              return `${key}: ${value};`
            })
            cellStyleString += childStyleString
          }

          return cellStyleString
        }

        if (parentStyle instanceof Object) {
          return {
            ...parentStyle,
            ...(childStyle || {})
          }
        }

        return childStyle
      },
      /**
       * @desc 获取 sticky 的样式
       * @param {Number} index 下标
       * @param {String} fixed 固定位置
       */
      getStickyStyle(index, fixed) {
        const offset = this.calculateOffset.offset[index]
        if (offset !== undefined) {
          return {
            [fixed]: `${offset}px`
          }
        }

        return
      },
    },
  }
</script>

<style scoped>
.btn-add-box {
  padding: 0 10px;
  position: sticky;
  left: 0;
}

.btn-add-box::after {
  content: '';
  display: inline-block;
  width: 100%;
  height: 1px;
  background-color: #EBEEF5;
  position: absolute;
  left: 0;
  bottom: 0;
}

.editable-pro-table /deep/ .editable-pro-table__fixed-left,
.editable-pro-table /deep/ .editable-pro-table__fixed-right {
  position: sticky;
  background-color: #fff;
  z-index: 2;
}

.editable-pro-table /deep/ th.el-table__cell {
  overflow: unset;
}

.editable-pro-table /deep/ td.el-table__cell {
  padding: 20px 0;
}

.editable-pro-table /deep/ .cell {
  overflow: unset;
}
</style>

<style>
/* 防止外部 el-form-item 校验错误影响 */
/* star */
.el-form-item.is-error .editable-pro-table .el-input__inner {
  border-color: #DCDFE6;
}

.el-form-item.is-error .editable-pro-table .el-input__inner:focus {
  border-color: #DCDFE6;
}

.editable-pro-table .el-form-item.is-error .el-input__inner {
  border-color: #F56C6C;
}
/* end */

/* sticky 滚动样式 */
/* start */
.editable-pro-table:has(.el-table__body-wrapper.is-scrolling-middle) .el-table__header-wrapper th.editable-pro-table__fixed-start-shadow::after,
.editable-pro-table:has(.el-table__body-wrapper.is-scrolling-right) .el-table__header-wrapper th.editable-pro-table__fixed-start-shadow::after,
.editable-pro-table .el-table__body-wrapper.is-scrolling-middle .editable-pro-table__fixed-start-shadow::after,
.editable-pro-table .el-table__body-wrapper.is-scrolling-right .editable-pro-table__fixed-start-shadow::after {
  inset-inline-start: 100%;
  position: absolute;
  top: 0px;
  width: 30px;
  height: 100%;
  content: "";
  box-shadow: inset 10px 0 8px -8px rgba(5, 5, 5, 0.06);
  pointer-events: none;
  transition: box-shadow 0.3s;
  z-index: 4;
}

.editable-pro-table:has(.el-table__body-wrapper.is-scrolling-left) .el-table__header-wrapper th.editable-pro-table__fixed-end-shadow::after,
.editable-pro-table:has(.el-table__body-wrapper.is-scrolling-middle) .el-table__header-wrapper th.editable-pro-table__fixed-end-shadow::after,
.editable-pro-table .el-table__body-wrapper.is-scrolling-left .editable-pro-table__fixed-end-shadow::before,
.editable-pro-table .el-table__body-wrapper.is-scrolling-middle .editable-pro-table__fixed-end-shadow::before {
  position: absolute;
  top: 0px;
  inset-inline-end: 100%;
  width: 30px;
  height: 100%;
  content: "";
  box-shadow: inset -10px 0 8px -8px rgba(5, 5, 5, 0.06);
  pointer-events: none;
  transition: box-shadow 0.3s;
}
/* end */
</style>

