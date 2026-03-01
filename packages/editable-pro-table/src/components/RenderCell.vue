<template>
  <Fragment>
    <!-- 编辑 -->
    <!-- start -->
    <FormItem
      v-if="isEditable"
      :formItem="formItem"
      :formItemProp="formItemProp"
      :form="row"
      :name="name"
      :recordKey="recordKey"
      :index="index"
    >
      <template #[formItem.prop]>
        <slot 
          :name="formItem.prop" 
          v-bind="{ form: row, formItem, recordKey, index }"
        ></slot>
      </template>
    </FormItem>
    <!-- end -->
    <!-- 文本 -->
    <!-- start -->
    <template v-else>
      <!-- 无 el-form-item 包裹会造成表单校验失败 -->
      <!-- start -->
      <el-form-item class="editable-form-item" :prop="formItemProp">
        <CustomRender 
          v-if="column.renderCell"
          :render="() => column.renderCell(scope)"
        />
        <span v-else :class="{ 'text-ellipsis': column['show-overflow-tooltip'] }">{{ value ?? '-' }}</span>
      </el-form-item>
      <!-- end -->
    </template>
    <!-- end -->
  </Fragment>
</template>

<script>
  import FormItem from './FormItem'
  import CustomRender from '@packages/custom-render'
  import { setPlaceholder, setSelectOptions, setCascaderOptions } from '@/utils/form'

  export default {
    name: 'RenderCell',
    components: {
      FormItem,
      CustomRender
    },
    props: {
      editable: {
        type: Object,
        required: true
      },
      // 列
      column: {
        type: Object,
        required: true
      },
      // 数据
      scope: {
        type: Object
      },
      name: {
        type: String,
        required: true
      },
      recordKey: {
        type: [String, Number]
      },
      cachedOptions: {
        type: Object
      },
      preEditRows: {
        type: Map
      }
    },
    computed: {
      // 表单项
      formItem() {
        const {
          column,
          column: {
            prop,
            formItemProps = {},
            valueType,
            renderField,
            fieldProps = {},
            fieldEvents,
          }
        } = this
        // 设置 placeholder
        setPlaceholder(fieldProps, valueType)

        // 设置 select options
        setSelectOptions(column, this.cachedOptions)

        // 设置 cascader options
        setCascaderOptions(fieldProps, column, this.cachedOptions)

        return {
          ...formItemProps,
          prop,
          valueType,
          renderField,
          fieldProps,
          fieldEvents,
          options: column.options,
        }
      },
      // 行数据
      row() {
        return this.scope.row
      },
      // 下标
      index() {
        return this.scope.$index
      },
      // 可编辑表格 el-form-item prop
      formItemProp() {
        const { formItem: { prop }, name, index } = this
        return `${name}.${index}.${prop}`
      },
      isEditable() {
        const { 
          editable: { editableKeys },
          recordKey,
          formItem: { prop },
          column: { readonly, editable}
        } = this
        const preEditCellValue = this.preEditRows.get(this.recordKey)?.[prop]
        return editableKeys?.some(key => recordKey === key)
          && readonly !== true
          && (editable ? editable?.(preEditCellValue, this.row, this.index) : true)
      },
      // 文本
      value() {
        const { column: { formatter }, formItem, scope, row, index } = this
        const { prop, valueType, options, valueEnum } = formItem
        const cellValue = row[prop]

        if (formatter) { // formatter
          return formatter(row, scope.column, cellValue, index)
        } else if (valueType === 'select') { // 选择器
          if (valueEnum) { // 枚举
            if (valueEnum instanceof Map) {
              return valueEnum.get(cellValue)
            } else {
              return valueEnum[cellValue]
            }
          } else { // options
            const map = (options || []).reduce((accu, cur) => ({ ...accu, [cur.value]: cur.label }), {})
            return map[cellValue]
          }
        }

        return cellValue
      }
    },
  }
</script>

<style scoped>
.text-ellipsis {
  display: block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: inherit;    /* 继承父元素行高 */
}

.editable-form-item.el-form-item {
  margin-bottom: 0;
}

.editable-form-item.el-form-item /deep/ .el-form-item__content {
  font-size: unset;
}
</style>
