<template>
  <el-form-item
    v-bind="normalizedFormItem"
  >
    <template v-if="formItem.renderLabel" #label>
      <!-- 自定义 label -->
      <!-- start -->
      <CustomRender :render="formItem.renderLabel" />
      <!-- end -->
    </template>
    <!-- 自定义渲染 -->
    <!-- start -->
    <CustomRender 
      v-if="formItem.renderField"
      :render="() => formItem.renderField({ form, formItem })" 
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
      v-bind="dynamicFieldProps"
      v-on="formItem.fieldEvents"
    >
      <!-- Select -->
      <!-- start -->
      <template v-if="formItem.valueType === 'select'">
        <!-- Option Group -->
        <!-- start -->
        <template v-if="isOptionGroup">
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
  import CustomRender from '../custom-render'
  import { t } from 'element-ui-pro-components/src/locale'

  export default {
    name: 'ProFormItem',
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
    },
    computed: {
      // 过滤 el-form-item 的属性
      normalizedFormItem() {
        const {
          renderLabel,
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
      // ✅ 新增：动态 fieldProps（包含响应式 placeholder）
      dynamicFieldProps() {
        const props = { ...this.formItem.fieldProps }
        
        // 如果没有设置 placeholder，根据 valueType 自动生成
        if (!props.placeholder) {
          const { valueType } = this.formItem
          switch (valueType) {
            case 'input':
              props.placeholder = t('elProComponents.placeholder.input')
              break
            case 'select':
            case 'cascader':
              props.placeholder = t('elProComponents.placeholder.select')
              break
            case 'time-picker':
              props.placeholder = t('elProComponents.placeholder.selectTime')
              break
            case 'date-picker':
              props.placeholder = t('elProComponents.placeholder.selectDate')
              break
            default:
              break
          }
        }
        
        return props
      },
      isOptionGroup() {
        return this.formItem.options?.[0]?.options
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
