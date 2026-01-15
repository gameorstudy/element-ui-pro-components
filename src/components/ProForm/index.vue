<template>
  <el-form 
    ref="proFormRef" 
    class="pro-form" 
    :model="form"
    :class="className" 
    v-bind="formProps"
  >
    <!-- 栅格化布局 -->
    <!-- start -->
    <template v-if="grid">
      <el-row v-bind="rowProps">
        <template v-for="item in normalizedFormItems">
          <el-col v-bind="item.colProps" :key="item.prop">
            <!-- 默认 el-form-item -->
            <!-- start -->
            <template v-if="!item.slot">
              <ProFormItem :item="item" :form="form">
                <template #label="scope">
                  <slot :name="`${item.prop}-label`" v-bind="scope" />
                </template>
              </ProFormItem>
            </template>
            <!-- end -->
            <!-- 自定义 el-form-item -->
            <!-- start -->
            <slot v-else :name="item.prop" :form="form" :formItem="item"></slot>
            <!-- end -->
          </el-col>
        </template>
      </el-row>
    </template>
    <!-- end -->
    <!-- 非栅格化布局 -->
    <!-- start -->
    <template v-else>
      <template v-for="item in normalizedFormItems">
        <!-- 默认 el-form-item -->
        <!-- start -->
        <template v-if="!item.slot">
          <ProFormItem :item="item" :form="form">
            <template #label="scope">
              <slot :name="`${item.prop}-label`" v-bind="scope" />
            </template>
          </ProFormItem>
        </template>
        <!-- end -->
        <!-- 自定义 el-form-item -->
        <!-- start -->
        <slot v-else :name="item.prop" :form="form" :formItem="item"></slot>
        <!-- end -->
      </template>
    </template>
    <!-- end -->
    <!-- submitter -->
    <!-- start -->
    <template v-if="submitter">
      <!-- 自定义 submitter -->
      <!-- start -->
      <template v-if="submitter.slot">
        <slot name="submitter" :events="{ reset, resetAllFields, submit }" :form="form"></slot>
      </template>
      <!-- end -->
      <!-- 默认 submitter -->
      <!-- start -->
      <template v-else>
        <el-form-item>
          <el-button v-bind="submitterProps.resetButtonProps" @click="reset" >{{ submitterProps.searchConfig.resetText }}</el-button>
          <el-button type="primary" v-bind="submitterProps.submitButtonProps" @click="submit">{{ submitterProps.searchConfig.submitText }}</el-button>
        </el-form-item>
      </template>
      <!-- end -->
    </template>
    <!-- end -->
  </el-form>
</template>

<script>
import ProFormItem from '../ProFormItem'
import { setPlaceholder, setSelectOptions, setCascaderOptions } from '../../utils/form'

export default {
  name: 'ProForm',
  components: {
    ProFormItem,
  },
  props: {
    // el-form attributes 的配置
    formProps: {
      type: Object,
      default: () => { }
    },
    // el-form 的类名
    className: {
      type: String,
      default: ''
    },
    // 表单默认值
    initialValues: {
      type: Object,
      default: () => { }
    },
    // 提交按钮相关配置
    submitter: {
      type: [Boolean, Object],
      default: true
    },
    // 开启栅格化模式
    grid: {
      type: Boolean,
    },
    // 开启 grid 模式时传递给 el-row
    rowProps: {
      type: Object,
      default: () => ({ gutter: 8 })
    },
    // 表单项配置
    formItems: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  computed: {
    // 标准化处理 formItems
    normalizedFormItems() {
      const { formItems } = this
      return formItems
        // 过滤隐藏项
        .filter(item => !item.hideInForm)
        .map(item => {
          const { valueType, fieldProps = {} } = item
          // 设置 placeholder
          setPlaceholder(fieldProps, valueType)

          // 设置 select options
          setSelectOptions(item, this.cachedOptions)

          // 设置 cascader options
          setCascaderOptions(fieldProps, item, this.cachedOptions)

          return {
            ...item,
            fieldProps
          }
        })
    },
    // submitter 标准化处理
    submitterProps() {
      if (this.submitter) {
        // 配置按钮文本
        const defaultSearchConfig = {
          resetText: '重置',
          submitText: '提交'
        }

        // 对象类型
        if (typeof this.submitter === 'object') {
          const { searchConfig = {}, submitButtonProps = {}, resetButtonProps = {} } = this.submitter
        
          return {
            searchConfig: { ...defaultSearchConfig, ...searchConfig },
            submitButtonProps,
            resetButtonProps
          }
        }

        // 返回默认设置
        return {
          searchConfig: defaultSearchConfig
        }
      }

      return false
    }
  },
  data() {
    return {
      cachedOptions: {}, // 下拉数据 { [prop]: data }
      form: this.initForm(), // 表单数据
    }
  },
  created () {
    // 获取异步数据
    this.getOptions()
  },
  methods: {
    /**
     * @desc 获取异步下拉数据
     */
    getOptions() {
      const { formItems } = this
      for (const item of formItems) {
        const { optionLoader, prop } = item
        if (optionLoader && typeof optionLoader === 'function') {
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
     * @desc 初始化表单数据
     */
    initForm() {
      const { formItems } = this
      // 兼容
      if (!formItems.length) {
        return {}
      }

      const data = formItems.reduce((accu, cur) => {
        const { prop, initialValue } = cur

        return {
          ...accu,
          [prop]: initialValue
        }
      }, {})

      return { ...this.initialValues, ...data }
    },    
    /**
     * @desc 获取 el-form ref
     * @returns {Object}
     */
    getFormRef() {
      return this.$refs.proFormRef
    },
    /**
     * @desc 获取表单数据
     * @returns {Object}
     */
    getForm() {
      return this.form
    },
    /**
     * @desc 手动更新表单数据
     * @param {Object} data 对象
     */
    setFieldsValue(data) {
      if (typeof data === 'object') {
        this.form = {
          ...this.form,
          ...data
        }
      }
    },
    /**
     * @desc 手动更新单个字段数据
     * @param {String} key 键
     * @param {any} value 值
     */
    setFieldValue(key, value) {
      this.form[key] = value
    },
    /**
     * @desc 重置
     */
    async reset() {
      try {
        await this.$refs.proFormRef?.resetFields()
        // 回传给父组件
        this.$emit('onReset')
      } catch (err) {
        console.error('err', err)
      }
    },
    /**
     * @desc 重置表单的拓展方法，剔除了非表单的字段
     */
    resetAllFields() {
      // 清除校验
      this.$refs.proFormRef?.clearValidate()
      // 重置数据
      this.form = this.initForm()
    },
    /**
     * @desc 提交
     */
    submit() {
      this.$refs.proFormRef?.validate((valid, object) => {
        if (valid) {
          // 回传给父组件
          this.$emit('onFinish', this.form)
          return
        }

        // 回传给父组件
        this.$emit('onError', object)
      })
    }
  },
}
</script>

<style scoped></style>
