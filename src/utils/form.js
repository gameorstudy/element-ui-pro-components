/**
 * @desc 设置 select options
 * @param {Object} item 表单项
 * @param {String} item.valueType 表单类型
 * @param {Array} item.options 下拉列表
 * @param {String} item.prop 字段属性值
 * @param {Function} item.optionLoader 异步获取下拉数据
 * @param {Object} cachedOptions 下拉数据
 */
export function setSelectOptions(item, cachedOptions) {
  const { valueType, prop, options, valueEnum, optionLoader } = item
  if (valueType !== 'select') {
    return
  }

  // 如果已有 options，保持不变
  if (options?.length > 0) {
    return
  }

  // 有 valueEnum，自动转换
  if (valueEnum) {
    if (valueEnum instanceof Map) {
      item.options = Array.from(valueEnum, ([key, value]) => ({ label: value, value: key }))
    } else {
      item.options = Object.entries(valueEnum)
        .map(([key, value]) => ({ label: value, value: key }))
    }

    return
  }
  
  // 设置 options：优先使用缓存
  item.options = optionLoader && cachedOptions[prop]
    ? cachedOptions[prop]
    : []
}

/**
 * @desc 设置 select options
 * @param {Object} fieldProps 表单元素属性
 * @param {Object} item 表单项
 * @param {String} item.valueType 表单类型
 * @param {String} item.prop 字段属性值
 * @param {Function} item.optionLoader 异步获取下拉数据
 * @param {Object} cachedOptions 下拉数据
 */
export function setCascaderOptions(fieldProps, item, cachedOptions) {
  const { valueType, prop, optionLoader } = item
  if (valueType !== 'cascader') {
    return
  }

  // 如果已有 options，保持不变
  if (fieldProps.options?.length > 0) {
    return
  }
  
  // 设置 options：优先使用缓存
  if (optionLoader && cachedOptions[prop]) {
    fieldProps.options = cachedOptions[prop]
  }
}
