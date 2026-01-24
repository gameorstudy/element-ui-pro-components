<template>
  <!-- 默认 el-form-item -->
  <!-- start -->
  <el-form-item
    v-bind="{
      ...filteredItem,
      prop: formProp || filteredItem.prop
    }"
    :key="item.prop"
  >
    <template v-if="item.labelSlot" #label>
      <!-- 自定义 label -->
      <!-- start -->
      <slot name="label" :formItem="item" />
      <!-- end -->
    </template>
    <template v-if="item.valueType !== 'slot'">
      <component 
        :is="`el-${item.valueType}`"
        v-model="form[item.prop]"
        v-bind="item.fieldProps"
        v-on="item.fieldEvents"
      >
        <!-- Select -->
        <!-- start -->
        <template v-if="item.valueType === 'select'">
          <!-- Option Group -->
          <!-- start -->
          <template v-if="isGroupedOptions(item.options)">
            <el-option-group
              v-for="group in item.options"
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
              v-for="option in item.options"
              v-bind="option"
              :key="option.value"
            ></el-option>
          </template>
          <!-- end -->
        </template>
        <!-- end -->
        <template v-else-if="item.valueType === 'checkbox-group' || item.valueType === 'radio-group'">
          <component
            :is="selection[item.valueType]"
            v-for="option in item.options"
            :label="option.value"
            :key="option.value"
          >
          {{ option.label }}
        </component>
        </template>
      </component>
    </template>
    <template v-else>
      <slot :name="item.prop" :form="form" :formItem="item"></slot>
    </template>
  </el-form-item>
  <!-- end -->
</template>

<script>
  export default {
    name: 'ProFormItem',
    props: {
      // formItem 项
      item: {
        type: Object,
        required: true 
      },
      // 表单数据
      form: {
        type: Object,
        required: true
      },
      // 可编辑表格 el-form-item prop
      formProp: {
        type: String
      }
    },
    computed: {
      // 过滤非 el-form-item 的属性
      filteredItem() {
        const {
          valueType,
          fieldProps, 
          fieldEvents, 
          options,
          valueEnum, 
          optionLoader, 
          initialValue, 
          colProps, 
          labelSlot,
          ...keys
        } = this.item

        return keys
      }
    },
    data() {
      return {
        selection: { // 选项组对应的组件
          'checkbox-group': 'el-checkbox',
          'radio-group': 'el-radio'
        }
      }
    },
    methods: {
      /**
       * @desc 判断是否是分组选择
       */
      isGroupedOptions(options) {
        if (!options?.length) {
          return false
        }

        // 检查第一个元素是否包含 options 数组
        const opts = options[0].options
        return opts && Array.isArray(opts)
      },
    },
  }
</script>

<style scoped>

</style>
