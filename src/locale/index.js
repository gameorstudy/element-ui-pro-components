import Vue from 'vue'
import defaultLang from './lang/zh-CN'

let lang = defaultLang
let i18nHandler = function() {
  const vueI18n = Object.getPrototypeOf(this || Vue).$t
  if (typeof vueI18n === 'function') {
    return vueI18n.apply(this, arguments)
  }
}

export const t = function(path) {  // 去掉 options 参数
  // 优先使用自定义 handler
  if (i18nHandler) {
    const value = i18nHandler(path)
    if (value !== null && value !== undefined) {
      return value
    }
  }

  // 用自己的语言包
  const array = path.split('.')
  let current = lang

  for (let i = 0; i < array.length; i++) {
    const property = array[i]
    const value = current[property]
    
    if (i === array.length - 1) {
      return value || path
    }
    
    if (!value) return path
    current = value
  }
  return path
}

export const use = function(l) {
  lang = l || lang
}

export const i18n = function(fn) {
  i18nHandler = fn
}

export default { use, t, i18n }
