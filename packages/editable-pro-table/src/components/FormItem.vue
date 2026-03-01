<template>
  <el-form-item
    v-bind="normalizedFormItem"
    :prop="formItemProp"
    label="" 
    class="editable-form-item"
  >
    <!-- 自定义渲染 -->
    <!-- start -->
    <CustomRender 
      v-if="formItem.renderField"
      :render="() => formItem.renderField({ form, formItem, recordKey, index })" 
    />
    <slot 
      v-else-if="formItem.valueType === 'slot'" 
      :name="formItem.prop"
    ></slot>
    <!-- end -->
    <!-- 元素渲染 -->
    <!-- start -->
    <component
      v-else
      :is="`el-${formItem.valueType}`"
      v-model="form[formItem.prop]"
      v-bind="formItem.fieldProps"
      v-on="normalizedFieldEvents"
    >
      <!-- Select -->
      <!-- start -->
      <template v-if="formItem.valueType === 'select'">
        <!-- Option Group -->
        <!-- start -->
        <template v-if="formItem.options?.[0]?.options">
          <el-option-group
            v-for="group in formItem.options"
            v-bind="group"
            :key="group.label"
          >
            <el-option 
              v-for="option in group.options"
              v-bind="option"
              :key="option.value"
            ></el-option>
          </el-option-group>
        </template>
        <!-- end -->
        <!-- Option -->
        <!-- start -->
        <template v-else>
          <el-option 
            v-for="option in formItem.options"
            v-bind="option"
            :key="option.value"
          ></el-option>
        </template>
        <!-- end -->
      </template>
      <!-- end -->
      <template v-else-if="groups.includes(formItem.valueType)">
        <component
          :is="selection[formItem.valueType]"
          v-for="option in formItem.options"
          :label="option.value"
          :key="option.value"
        >
          {{ option.label }}
        </component>
      </template>
    </component>
    <!-- end -->
  </el-form-item>
</template>

<script>
  import CustomRender from '@packages/custom-render'

  export default {
    name: 'FormItem',
    components: {
      CustomRender,
    },
    props: {
      // formItem 项
      formItem: {
        type: Object,
        required: true
      },
      // 表单数据
      form: {
        type: Object,
        required: true
      },
      // 可编辑表格名称
      name: {
        type: String,
      },
      recordKey: {
        type: [Number, String],
      },
      // 下标
      index: {
        type: Number
      },
      // el-form-item prop
      formItemProp: {
        type: String
      }
    },
    computed: {
      // 过滤 el-form-item 的属性
      normalizedFormItem() {
        const {
          valueType,
          renderField,
          fieldProps, 
          fieldEvents, 
          options,
          valueEnum, 
          optionLoader, 
          initialValue, 
          colProps,
          ...keys
        } = this.formItem
        return keys
      },
      // 表单事件
      normalizedFieldEvents() {
        const { formItem: { fieldEvents } } = this

        if (!fieldEvents) {
          return
        }

        const newEvents = {}
        const { recordKey, form: row, index } = this
        for (const eventName in fieldEvents) {
          const handler = (...args) => fieldEvents[eventName]?.(...args, {
            recordKey,
            row,
            index,
          })

          newEvents[eventName] = handler
        }

        return newEvents
      }
    },
    data() {
      return {
        groups: ['radio-group', 'checkbox-group'], // valueType
        selection: { // 选项组对应的组件
          'radio-group': 'el-radio',
          'checkbox-group': 'el-checkbox'
        }
      }
    },
  }
</script>

<style scoped>
.editable-form-item.el-form-item {
  /* 防止 show-overflow-tooltip 触发 */
  width: calc(100% - 1px);
  margin-bottom: 0;
}

.editable-form-item.is-required {
  position: relative;
}

.editable-form-item.is-required::before {
  content: '*';
  color: #f56c6c;
  position: absolute;
  left: -8px;
}

.editable-form-item /deep/ .el-form-item__content .el-select,
.editable-form-item /deep/ .el-form-item__content .el-input-number,
.editable-form-item /deep/ .el-form-item__content .el-date-editor,
.editable-form-item /deep/ .el-form-item__content .el-cascader {
  width: 100%;
}
</style>
