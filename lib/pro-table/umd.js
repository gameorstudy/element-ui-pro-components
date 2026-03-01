(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["index"] = factory();
	else
		root["index"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) // removed by dead control flow
{ var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/pro-table/src/index.vue?vue&type=template&id=5d0503a8&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "pro-table"
  }, [_vm.search ? [_c('el-form', {
    staticClass: "pro-table__form",
    class: _vm.searchProps.className,
    attrs: {
      "label-width": _vm.searchProps.labelWidth,
      "label-position": _vm.searchProps.labelPosition,
      "model": _vm.form,
      "size": _vm.defaultSize
    }
  }, [_c('el-row', _vm._b({}, 'el-row', _vm.searchProps.rowProps, false), [_vm._l(_vm.formItems, function (formItem, index) {
    return _c('el-col', _vm._b({
      key: formItem.prop ?? _vm.getUID(),
      style: {
        display: index >= _vm.searchCount ? 'none' : ''
      }
    }, 'el-col', _vm.searchProps.colProps, false), [_c('ProFormItem', {
      attrs: {
        "form": _vm.form,
        "formItem": formItem
      },
      scopedSlots: _vm._u([{
        key: formItem.prop,
        fn: function () {
          return [_vm._t(formItem.prop, null, null, {
            form: _vm.form,
            formItem
          })];
        },
        proxy: true
      }], null, true)
    })], 1);
  }), _c('el-col', _vm._b({
    key: "search",
    staticStyle: {
      "display": "flex",
      "align-items": "center",
      "justify-content": "flex-end"
    }
  }, 'el-col', _vm.searchColConfig, false), [_c('el-button', {
    attrs: {
      "icon": "el-icon-refresh",
      "size": _vm.defaultSize
    },
    on: {
      "click": _vm.handleReset
    }
  }, [_vm._v(_vm._s(_vm.searchProps.resetText))]), _c('el-button', {
    attrs: {
      "type": "primary",
      "icon": "el-icon-search",
      "loading": _vm.loading,
      "size": _vm.defaultSize
    },
    on: {
      "click": _vm.handleSearch
    }
  }, [_vm._v(_vm._s(_vm.searchProps.searchText))]), _vm.showExpandToggle ? [_c('el-button', {
    staticClass: "btn-collapse",
    attrs: {
      "type": "text",
      "size": _vm.defaultSize
    },
    on: {
      "click": _vm.handleCollapse
    }
  }, [_vm._v(" " + _vm._s(_vm.collapsed ? "展开" : "收起") + " "), _c('ArrowIcon', {
    staticStyle: {
      "transition": "0.3s"
    },
    style: {
      transform: `rotate(${_vm.collapsed ? 0 : 0.5}turn)`
    }
  })], 1)] : _vm._e()], 2)], 2)], 1)] : _vm._e(), _vm.$slots.default || _vm.columnSettings ? _c('div', {
    staticClass: "pro-table__toolbar"
  }, [_vm._t("default"), _vm.columnSettings ? _c('div', {
    staticClass: "pro-table__toolbar-items"
  }, [_c('ColumnSettings', {
    attrs: {
      "columns": _vm.settingColumns,
      "columnSettings": _vm.initializedColumnSettings
    }
  })], 1) : _vm._e()], 2) : _vm._e(), _c('el-table', _vm._g(_vm._b({
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: _vm.loading,
      expression: "loading"
    }],
    key: _vm.tableKey,
    ref: "tableRef",
    staticClass: "pro-table__table",
    class: _vm.className,
    attrs: {
      "data": _vm.dataSource
    }
  }, 'el-table', _vm.initializedTableProps, false), _vm.initializedTableEvents), _vm._l(_vm.normalizedColumns, function (column) {
    return _c('el-table-column', _vm._b({
      key: column.prop || column.nonElColumnProps.key,
      scopedSlots: _vm._u([column.nonElColumnProps.renderCellHeader ? {
        key: "header",
        fn: function (scope) {
          return [_c('CustomRender', {
            attrs: {
              "render": () => column.nonElColumnProps.renderCellHeader(scope)
            }
          })];
        }
      } : null, column.nonElColumnProps.renderCell ? {
        key: "default",
        fn: function (scope) {
          return [_c('CustomRender', {
            attrs: {
              "render": () => column.nonElColumnProps.renderCell(scope)
            }
          })];
        }
      } : column.nonElColumnProps.valueEnum ? {
        key: "default",
        fn: function (scope) {
          return [_c('span', [_vm._v(" " + _vm._s(column.nonElColumnProps.valueEnum instanceof Map ? column.nonElColumnProps.valueEnum.get(scope.row?.[column.prop]) : column.nonElColumnProps.valueEnum[scope.row?.[column.prop]]) + " ")])];
        }
      } : null], null, true)
    }, 'el-table-column', {
      ...column,
      nonElColumnProps: undefined
    }, false));
  }), 1), _c('el-pagination', _vm._b({
    staticClass: "pro-table__pagination",
    on: {
      "current-change": _vm.handleCurrentChange,
      "size-change": _vm.handleSizeChange
    }
  }, 'el-pagination', _vm.initializedPaginationProps, false))], 2);
};
var staticRenderFns = [];

;// ./src/utils/form.js
/**
 * @desc 获取表单元素默认的 placeholder
 * @param {String} valueType 表单元素类型
 */
function getDefaultPlaceholder(valueType) {
  switch (valueType) {
    case 'input':
    case 'input-number':
      return '请输入';
    case 'select':
    case 'time-picker':
    case 'date-picker':
    case 'cascader':
      return '请选择';
    default:
      return '';
  }
}

/**
 * @desc 设置 placeholder
 * @param {Object} fieldProps 表单元素属性
 * @param {String} valueType 表单元素类型
 */
function setPlaceholder(fieldProps, valueType) {
  fieldProps.placeholder = fieldProps.placeholder ?? getDefaultPlaceholder(valueType);
}

/**
 * @desc 设置 select options
 * @param {Object} item 表单项
 * @param {String} item.valueType 表单类型
 * @param {Array} item.options 下拉列表
 * @param {String} item.prop 字段属性值
 * @param {Function} item.optionLoader 异步获取下拉数据
 * @param {Object} cachedOptions 下拉数据
 */
function setSelectOptions(item, cachedOptions) {
  const {
    valueType,
    prop,
    options,
    valueEnum,
    optionLoader
  } = item;
  if (valueType !== 'select') {
    return;
  }

  // 如果已有 options，保持不变
  if (options?.length > 0) {
    return;
  }

  // 有 valueEnum，自动转换
  if (valueEnum) {
    if (valueEnum instanceof Map) {
      item.options = Array.from(valueEnum, ([key, value]) => ({
        label: value,
        value: key
      }));
    } else {
      item.options = Object.entries(valueEnum).map(([key, value]) => ({
        label: value,
        value: key
      }));
    }
    return;
  }

  // 设置 options：优先使用缓存
  item.options = optionLoader && cachedOptions[prop] ? cachedOptions[prop] : [];
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
function setCascaderOptions(fieldProps, item, cachedOptions) {
  const {
    valueType,
    prop,
    optionLoader
  } = item;
  if (valueType !== 'cascader') {
    return;
  }

  // 如果已有 options，保持不变
  if (fieldProps.options?.length > 0) {
    return;
  }

  // 设置 options：优先使用缓存
  if (optionLoader && cachedOptions[prop]) {
    fieldProps.options = cachedOptions[prop];
  }
}
;// ./src/utils/breakpoints.js
// 断点配置
const BREAKPOINTS = {
  xs: 0,
  // < 768px
  sm: 768,
  // ≥ 768px
  md: 992,
  // ≥ 992px  
  lg: 1200,
  // ≥ 1200px
  xl: 1920 // ≥ 1920px
};

// Grid cols 份数
const GRID_COLUMNS = 24;

// 断点所占的份数
// 覆盖关系：默认 (span) < xs < sm < md < lg < xl
// 特殊情况：未指定默认（span）则显示 24 列
const defaultColConfig = {
  xs: 24,
  // <768px
  sm: 24,
  // >=768px
  md: 12,
  // >=992px
  lg: 8,
  // ≥1200px
  xl: 6 // ≥1920px
};

// 断点优先级（从大到小）
const BREAKPOINT_ORDER = ['xl', 'lg', 'md', 'sm', 'xs'];

/**
 * 根据当前宽度获取对应的断点
 * @param {number} width - 当前宽度
 * @returns {string} - 断点名称
 */
const getCurrentBreakpoint = width => {
  if (width >= BREAKPOINTS.xl) return 'xl';
  if (width >= BREAKPOINTS.lg) return 'lg';
  if (width >= BREAKPOINTS.md) return 'md';
  if (width >= BREAKPOINTS.sm) return 'sm';
  return 'xs';
};

/**
 * 动态计算当前应占的份数
 * @param {Object} config - 配置对象 {span, xs, sm, md, lg, xl}
 * @returns {number} - 应占的份数
 */
const calculateCurrentSpan = config => {
  const breakpoint = getCurrentBreakpoint(window.innerWidth);

  // 按优先级获取配置值
  const breakpoints = BREAKPOINT_ORDER;
  const currentIndex = breakpoints.indexOf(breakpoint);

  // 按断点优先级查找
  for (let i = currentIndex; i < breakpoints.length; i++) {
    const bp = breakpoints[i];
    if (config[bp]) {
      return config[bp];
    }
  }
  return config.span || GRID_COLUMNS;
};
;// ./src/utils/debounce.js
const debounce = (func, delay = 150) => {
  let timeout;
  const debounced = (...args) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      func.apply(undefined, args);
    }, delay);
  };

  // 添加取消方法
  debounced.cancel = function () {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };
  return debounced;
};
;// ./src/utils/uid.js
function generateCryptoUID() {
  // 浏览器环境
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }

  // 兼容方案
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);

  // 转换为16进制字符串
  return Array.from(array).map(b => b.toString(16).padStart(2, '0')).join('');
}
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/pro-form-item/index.vue?vue&type=template&id=19729659&scoped=true
var pro_form_itemvue_type_template_id_19729659_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('el-form-item', _vm._b({
    scopedSlots: _vm._u([_vm.formItem.renderLabel ? {
      key: "label",
      fn: function () {
        return [_c('CustomRender', {
          attrs: {
            "render": _vm.formItem.renderLabel
          }
        })];
      },
      proxy: true
    } : null], null, true)
  }, 'el-form-item', _vm.normalizedFormItem, false), [_vm.formItem.renderField ? _c('CustomRender', {
    attrs: {
      "render": () => _vm.formItem.renderField({
        form: _vm.form,
        formItem: _vm.formItem
      })
    }
  }) : _vm.formItem.valueType === 'slot' ? _vm._t(_vm.formItem.prop) : _c(`el-${_vm.formItem.valueType}`, _vm._g(_vm._b({
    tag: "component",
    model: {
      value: _vm.form[_vm.formItem.prop],
      callback: function ($$v) {
        _vm.$set(_vm.form, _vm.formItem.prop, $$v);
      },
      expression: "form[formItem.prop]"
    }
  }, 'component', _vm.formItem.fieldProps, false), _vm.formItem.fieldEvents), [_vm.formItem.valueType === 'select' ? [_vm.formItem.options?.[0]?.options ? _vm._l(_vm.formItem.options, function (group) {
    return _c('el-option-group', _vm._b({
      key: group.label
    }, 'el-option-group', group, false), _vm._l(group.options, function (option) {
      return _c('el-option', _vm._b({
        key: option.value
      }, 'el-option', option, false));
    }), 1);
  }) : _vm._l(_vm.formItem.options, function (option) {
    return _c('el-option', _vm._b({
      key: option.value
    }, 'el-option', option, false));
  })] : _vm.groups.includes(_vm.formItem.valueType) ? _vm._l(_vm.formItem.options, function (option) {
    return _c(_vm.selection[_vm.formItem.valueType], {
      key: option.value,
      tag: "component",
      attrs: {
        "label": option.value
      }
    }, [_vm._v(" " + _vm._s(option.label) + " ")]);
  }) : _vm._e()], 2)], 2);
};
var pro_form_itemvue_type_template_id_19729659_scoped_true_staticRenderFns = [];

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/custom-render/index.vue?vue&type=script&lang=js
/* harmony default export */ var custom_rendervue_type_script_lang_js = ({
  name: 'CustomRender',
  props: {
    render: {
      type: Function,
      required: true
    }
  },
  render: function (h) {
    return h("Fragment", [this.render()]);
  }
});
;// ./packages/custom-render/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_custom_rendervue_type_script_lang_js = (custom_rendervue_type_script_lang_js); 
;// ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// ./packages/custom-render/index.vue
var custom_render_render, custom_render_staticRenderFns
;



/* normalize component */
;
var component = normalizeComponent(
  packages_custom_rendervue_type_script_lang_js,
  custom_render_render,
  custom_render_staticRenderFns,
  false,
  null,
  "2ddfacb0",
  null
  
)

/* harmony default export */ var custom_render = (component.exports);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/pro-form-item/index.vue?vue&type=script&lang=js

/* harmony default export */ var pro_form_itemvue_type_script_lang_js = ({
  name: 'ProFormItem',
  components: {
    CustomRender: custom_render
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
    }
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
      } = this.formItem;
      return keys;
    }
  },
  data() {
    return {
      groups: ['radio-group', 'checkbox-group'],
      // valueType
      selection: {
        // 选项组对应的组件
        'radio-group': 'el-radio',
        'checkbox-group': 'el-checkbox'
      }
    };
  }
});
;// ./packages/pro-form-item/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_pro_form_itemvue_type_script_lang_js = (pro_form_itemvue_type_script_lang_js); 
;// ./packages/pro-form-item/index.vue





/* normalize component */
;
var pro_form_item_component = normalizeComponent(
  packages_pro_form_itemvue_type_script_lang_js,
  pro_form_itemvue_type_template_id_19729659_scoped_true_render,
  pro_form_itemvue_type_template_id_19729659_scoped_true_staticRenderFns,
  false,
  null,
  "19729659",
  null
  
)

/* harmony default export */ var pro_form_item = (pro_form_item_component.exports);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/pro-table/src/components/svg/ArrowIcon.vue?vue&type=template&id=03c6aa2a&scoped=true
var ArrowIconvue_type_template_id_03c6aa2a_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('svg', {
    attrs: {
      "viewBox": "64 64 896 896",
      "focusable": "false",
      "data-icon": "down",
      "width": "1em",
      "height": "1em",
      "fill": "currentColor",
      "aria-hidden": "true",
      "xmlns": "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink"
    }
  }, [_c('path', {
    attrs: {
      "d": "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"
    }
  })]);
};
var ArrowIconvue_type_template_id_03c6aa2a_scoped_true_staticRenderFns = [];

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/pro-table/src/components/svg/ArrowIcon.vue?vue&type=script&lang=js
/* harmony default export */ var ArrowIconvue_type_script_lang_js = ({
  name: 'ArrowIcon'
});
;// ./packages/pro-table/src/components/svg/ArrowIcon.vue?vue&type=script&lang=js
 /* harmony default export */ var svg_ArrowIconvue_type_script_lang_js = (ArrowIconvue_type_script_lang_js); 
;// ./packages/pro-table/src/components/svg/ArrowIcon.vue





/* normalize component */
;
var ArrowIcon_component = normalizeComponent(
  svg_ArrowIconvue_type_script_lang_js,
  ArrowIconvue_type_template_id_03c6aa2a_scoped_true_render,
  ArrowIconvue_type_template_id_03c6aa2a_scoped_true_staticRenderFns,
  false,
  null,
  "03c6aa2a",
  null
  
)

/* harmony default export */ var ArrowIcon = (ArrowIcon_component.exports);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/pro-table/src/components/ColumnSettings.vue?vue&type=template&id=7e72f8a5&scoped=true
var ColumnSettingsvue_type_template_id_7e72f8a5_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('el-popover', {
    attrs: {
      "popper-class": "column-settings-popover",
      "placement": "bottom-end",
      "trigger": "click"
    }
  }, [_c('div', {
    staticClass: "pro-table__toolbar-item",
    attrs: {
      "slot": "reference"
    },
    slot: "reference"
  }, [_c('el-tooltip', {
    attrs: {
      "content": _vm.columnSettings.settingText,
      "placement": "top"
    }
  }, [_c('SettingIcon')], 1)], 1), _c('div', {
    staticClass: "column-settings-popover-header"
  }, [_vm.columnSettings.checkable ? _c('el-checkbox', {
    attrs: {
      "value": _vm.checkAll,
      "indeterminate": _vm.isIndeterminate
    },
    on: {
      "change": _vm.handleChange
    }
  }, [_vm._v(" " + _vm._s(_vm.columnSettings.settingText) + " ")]) : _c('span', [_vm._v(_vm._s(_vm.columnSettings.settingText))]), _c('el-button', {
    attrs: {
      "type": "text"
    },
    on: {
      "click": _vm.handleReset
    }
  }, [_vm._v(_vm._s(_vm.columnSettings.resetText))])], 1), _c('div', {
    staticClass: "column-settings-popover-content"
  }, [_c('ColumnSettingsItem', {
    attrs: {
      "columns": _vm.leftFixedColumns,
      "columnSettings": _vm.columnSettings
    }
  }), _c('ColumnSettingsItem', {
    attrs: {
      "columns": _vm.noFixedColumns,
      "columnSettings": _vm.columnSettings
    }
  }), _c('ColumnSettingsItem', {
    attrs: {
      "columns": _vm.rightFixedColumns,
      "columnSettings": _vm.columnSettings
    }
  })], 1)]);
};
var ColumnSettingsvue_type_template_id_7e72f8a5_scoped_true_staticRenderFns = [];

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/pro-table/src/components/svg/SettingIcon.vue?vue&type=template&id=5f121054&scoped=true
var SettingIconvue_type_template_id_5f121054_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('svg', {
    staticClass: "icon",
    attrs: {
      "t": "1768525838046",
      "viewBox": "0 0 1024 1024",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg",
      "p-id": "10889",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "width": "1em",
      "height": "1em",
      "fill": "currentColor"
    }
  }, [_c('path', {
    attrs: {
      "d": "M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56c10.1-8.6 13.8-22.6 9.3-35.2l-0.9-2.6c-18.1-50.5-44.9-96.9-79.7-137.9l-1.8-2.1c-8.6-10.1-22.5-13.9-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85c-2.4-13.1-12.7-23.3-25.8-25.7l-2.7-0.5c-52.1-9.4-106.9-9.4-159 0l-2.7 0.5c-13.1 2.4-23.4 12.6-25.8 25.7l-15.8 85.4c-35.9 13.6-69.2 32.9-99 57.4l-81.9-29.1c-12.5-4.4-26.5-0.7-35.1 9.5l-1.8 2.1c-34.8 41.1-61.6 87.5-79.7 137.9l-0.9 2.6c-4.5 12.5-0.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5c-10.1 8.6-13.8 22.6-9.3 35.2l0.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1c8.6 10.1 22.5 13.9 35.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4c2.4 13.1 12.7 23.3 25.8 25.7l2.7 0.5c26.1 4.7 52.8 7.1 79.5 7.1 26.7 0 53.5-2.4 79.5-7.1l2.7-0.5c13.1-2.4 23.4-12.6 25.8-25.7l15.7-85c36.2-13.6 69.7-32.9 99.7-57.6l81.3 28.9c12.5 4.4 26.5 0.7 35.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l0.9-2.6c4.5-12.3 0.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9c-11.3 26.1-25.6 50.7-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97c-28.1 3.2-56.8 3.2-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9z",
      "p-id": "10890"
    }
  }), _c('path', {
    attrs: {
      "d": "M512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176z m79.2 255.2C570 602.3 541.9 614 512 614c-29.9 0-58-11.7-79.2-32.8C411.7 560 400 531.9 400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8C612.3 444 624 472.1 624 502c0 29.9-11.7 58-32.8 79.2z",
      "p-id": "10891"
    }
  })]);
};
var SettingIconvue_type_template_id_5f121054_scoped_true_staticRenderFns = [];

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/pro-table/src/components/svg/SettingIcon.vue?vue&type=script&lang=js
/* harmony default export */ var SettingIconvue_type_script_lang_js = ({
  name: 'SettingIcon'
});
;// ./packages/pro-table/src/components/svg/SettingIcon.vue?vue&type=script&lang=js
 /* harmony default export */ var svg_SettingIconvue_type_script_lang_js = (SettingIconvue_type_script_lang_js); 
;// ./packages/pro-table/src/components/svg/SettingIcon.vue





/* normalize component */
;
var SettingIcon_component = normalizeComponent(
  svg_SettingIconvue_type_script_lang_js,
  SettingIconvue_type_template_id_5f121054_scoped_true_render,
  SettingIconvue_type_template_id_5f121054_scoped_true_staticRenderFns,
  false,
  null,
  "5f121054",
  null
  
)

/* harmony default export */ var SettingIcon = (SettingIcon_component.exports);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/pro-table/src/components/ColumnSettingsItem.vue?vue&type=template&id=bb9b3504&scoped=true
var ColumnSettingsItemvue_type_template_id_bb9b3504_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.columns.length ? _c('div', {
    staticClass: "column-settings-item-list"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.title))]), _c('div', {
    ref: "dragDropZoneRef",
    staticClass: "drag-drop-zone"
  }, _vm._l(_vm.columns, function (column, index) {
    return _c('div', {
      key: column.prop,
      staticClass: "column-settings-item",
      class: {
        draggable: _vm.draggable,
        dragging: _vm.dragIndex === index
      },
      attrs: {
        "draggable": _vm.draggable
      },
      on: {
        "dragstart": e => _vm.onDragstart(e, index),
        "dragenter": function ($event) {
          $event.preventDefault();
          return _vm.onDragenter.apply(null, arguments);
        },
        "dragover": function ($event) {
          $event.preventDefault();
          return (e => _vm.onDragover(e, index)).apply(null, arguments);
        },
        "dragleave": _vm.onDragleave,
        "drop": e => _vm.onDrop(e, index),
        "dragend": _vm.onDragend
      }
    }, [_vm.draggable ? _c('span', {
      staticClass: "icon icon-holder"
    }, [_c('HolderIcon')], 1) : _vm._e(), _c('span', {
      staticClass: "switcher"
    }), _c(_vm.dynamicComponent, _vm._g(_vm._b({
      tag: "component"
    }, 'component', _vm.dynamicComponent === 'el-checkbox' ? {
      value: column.checkable,
      disabled: column.disabled
    } : {
      class: 'toggleable-checkbox'
    }, false), _vm.dynamicComponent === 'el-checkbox' ? {
      change: checked => _vm.handleChange(checked, column.prop)
    } : {}), [_c('span', {
      staticClass: "label"
    }, [_vm._v(_vm._s(column.label))]), _c('ColumnAlignSettings', {
      attrs: {
        "column": column
      }
    }), index === 0 && _vm.dropIndex === index ? _c('div', {
      staticClass: "indicator head-indicator"
    }) : _vm.dropIndex === index + 1 ? _c('div', {
      staticClass: "indicator tail-indicator"
    }) : _vm._e()], 1)], 1);
  }), 0)]) : _vm._e();
};
var ColumnSettingsItemvue_type_template_id_bb9b3504_scoped_true_staticRenderFns = [];

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/pro-table/src/components/svg/HolderIcon.vue?vue&type=template&id=4567deaf&scoped=true
var HolderIconvue_type_template_id_4567deaf_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('svg', {
    staticClass: "icon",
    attrs: {
      "t": "1768466031154",
      "viewBox": "0 0 1024 1024",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg",
      "p-id": "4754",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "width": "1em",
      "height": "1em",
      "fill": "currentColor"
    }
  }, [_c('path', {
    attrs: {
      "d": "M300 276.497a56 56 0 1 0 56-96.994 56 56 0 0 0-56 96.994z m0 284a56 56 0 1 0 56-96.994 56 56 0 0 0-56 96.994zM640 228a56 56 0 1 0 112 0 56 56 0 0 0-112 0z m0 284a56 56 0 1 0 112 0 56 56 0 0 0-112 0zM300 844.497a56 56 0 1 0 56-96.994 56 56 0 0 0-56 96.994zM640 796a56 56 0 1 0 112 0 56 56 0 0 0-112 0z",
      "p-id": "4755"
    }
  })]);
};
var HolderIconvue_type_template_id_4567deaf_scoped_true_staticRenderFns = [];

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/pro-table/src/components/svg/HolderIcon.vue?vue&type=script&lang=js
/* harmony default export */ var HolderIconvue_type_script_lang_js = ({
  name: 'HolderIcon'
});
;// ./packages/pro-table/src/components/svg/HolderIcon.vue?vue&type=script&lang=js
 /* harmony default export */ var svg_HolderIconvue_type_script_lang_js = (HolderIconvue_type_script_lang_js); 
;// ./packages/pro-table/src/components/svg/HolderIcon.vue





/* normalize component */
;
var HolderIcon_component = normalizeComponent(
  svg_HolderIconvue_type_script_lang_js,
  HolderIconvue_type_template_id_4567deaf_scoped_true_render,
  HolderIconvue_type_template_id_4567deaf_scoped_true_staticRenderFns,
  false,
  null,
  "4567deaf",
  null
  
)

/* harmony default export */ var HolderIcon = (HolderIcon_component.exports);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/pro-table/src/components/ColumnAlignSettings.vue?vue&type=template&id=25fd06be&scoped=true
var ColumnAlignSettingsvue_type_template_id_25fd06be_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', {
    staticClass: "icon-algin-group"
  }, [_vm.column.fixed !== 'left' ? [_c('el-tooltip', {
    attrs: {
      "content": "固定在列首",
      "placement": "top"
    }
  }, [_c('VerticalAlignTopIcon', {
    nativeOn: {
      "click": function ($event) {
        $event.stopPropagation();
        $event.preventDefault();
        return _vm.handleAlgin('left');
      }
    }
  })], 1)] : _vm._e(), _vm.column.fixed === 'left' || _vm.column.fixed === 'right' ? [_c('el-tooltip', {
    attrs: {
      "content": "不固定",
      "placement": "top"
    }
  }, [_c('VerticalAlginMiddleIcon', {
    nativeOn: {
      "click": function ($event) {
        $event.stopPropagation();
        $event.preventDefault();
        return _vm.handleAlgin();
      }
    }
  })], 1)] : _vm._e(), _vm.column.fixed !== 'right' ? [_c('el-tooltip', {
    attrs: {
      "content": "固定在列尾",
      "placement": "top"
    }
  }, [_c('VerticalAlginBottomIcon', {
    nativeOn: {
      "click": function ($event) {
        $event.stopPropagation();
        $event.preventDefault();
        return _vm.handleAlgin('right');
      }
    }
  })], 1)] : _vm._e()], 2);
};
var ColumnAlignSettingsvue_type_template_id_25fd06be_scoped_true_staticRenderFns = [];

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/pro-table/src/components/svg/VerticalAlignTopIcon.vue?vue&type=template&id=157c15ff&scoped=true
var VerticalAlignTopIconvue_type_template_id_157c15ff_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('svg', {
    staticClass: "icon",
    attrs: {
      "t": "1768466090113",
      "viewBox": "0 0 1024 1024",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg",
      "p-id": "5827",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "width": "1em",
      "height": "1em"
    }
  }, [_c('path', {
    attrs: {
      "d": "M955.968 100.864v66.944h-864V100.864h864zM528.064 215.616l150.784 150.784H565.76V928H490.24l0.128-561.6H377.216L528 215.68z",
      "fill": "currentColor",
      "p-id": "5828"
    }
  })]);
};
var VerticalAlignTopIconvue_type_template_id_157c15ff_scoped_true_staticRenderFns = [];

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/pro-table/src/components/svg/VerticalAlignTopIcon.vue?vue&type=script&lang=js
/* harmony default export */ var VerticalAlignTopIconvue_type_script_lang_js = ({
  name: 'VerticalAlignTopIcon'
});
;// ./packages/pro-table/src/components/svg/VerticalAlignTopIcon.vue?vue&type=script&lang=js
 /* harmony default export */ var svg_VerticalAlignTopIconvue_type_script_lang_js = (VerticalAlignTopIconvue_type_script_lang_js); 
;// ./packages/pro-table/src/components/svg/VerticalAlignTopIcon.vue





/* normalize component */
;
var VerticalAlignTopIcon_component = normalizeComponent(
  svg_VerticalAlignTopIconvue_type_script_lang_js,
  VerticalAlignTopIconvue_type_template_id_157c15ff_scoped_true_render,
  VerticalAlignTopIconvue_type_template_id_157c15ff_scoped_true_staticRenderFns,
  false,
  null,
  "157c15ff",
  null
  
)

/* harmony default export */ var VerticalAlignTopIcon = (VerticalAlignTopIcon_component.exports);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/pro-table/src/components/svg/VerticalAlginBottomIcon.vue?vue&type=template&id=5f3f60a5&scoped=true
var VerticalAlginBottomIconvue_type_template_id_5f3f60a5_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('svg', {
    staticClass: "icon",
    attrs: {
      "t": "1768466105119",
      "viewBox": "0 0 1024 1024",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg",
      "p-id": "6880",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "width": "1em",
      "height": "1em"
    }
  }, [_c('path', {
    attrs: {
      "d": "M955.968 928v-66.944h-864V928h864z m-427.904-114.752l150.784-150.784H565.76V100.864H490.24l0.128 561.6H377.216l150.848 150.784z",
      "fill": "currentColor",
      "p-id": "6881"
    }
  })]);
};
var VerticalAlginBottomIconvue_type_template_id_5f3f60a5_scoped_true_staticRenderFns = [];

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/pro-table/src/components/svg/VerticalAlginBottomIcon.vue?vue&type=script&lang=js
/* harmony default export */ var VerticalAlginBottomIconvue_type_script_lang_js = ({
  name: 'VerticalAlignBottomIcon'
});
;// ./packages/pro-table/src/components/svg/VerticalAlginBottomIcon.vue?vue&type=script&lang=js
 /* harmony default export */ var svg_VerticalAlginBottomIconvue_type_script_lang_js = (VerticalAlginBottomIconvue_type_script_lang_js); 
;// ./packages/pro-table/src/components/svg/VerticalAlginBottomIcon.vue





/* normalize component */
;
var VerticalAlginBottomIcon_component = normalizeComponent(
  svg_VerticalAlginBottomIconvue_type_script_lang_js,
  VerticalAlginBottomIconvue_type_template_id_5f3f60a5_scoped_true_render,
  VerticalAlginBottomIconvue_type_template_id_5f3f60a5_scoped_true_staticRenderFns,
  false,
  null,
  "5f3f60a5",
  null
  
)

/* harmony default export */ var VerticalAlginBottomIcon = (VerticalAlginBottomIcon_component.exports);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/pro-table/src/components/svg/VerticalAlginMiddleIcon.vue?vue&type=template&id=5047af18&scoped=true
var VerticalAlginMiddleIconvue_type_template_id_5047af18_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('svg', {
    staticClass: "icon",
    attrs: {
      "t": "1768466311335",
      "viewBox": "0 0 1024 1024",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg",
      "p-id": "9722",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "width": "1em",
      "height": "1em",
      "fill": "currentColor"
    }
  }, [_c('path', {
    attrs: {
      "d": "M512 614.4l-153.6 153.6 102.4 0 0 204.8 102.4 0 0-204.8 102.4 0L512 614.4zM665.6 256l-102.4 0L563.2 51.2 460.8 51.2l0 204.8L358.4 256l153.6 153.6L665.6 256zM921.6 512c0-28.3136-2.4576-51.2-30.72-51.2L133.12 460.8C104.8576 460.8 102.4 483.6864 102.4 512c0 28.2112 2.4576 51.2 30.72 51.2L890.88 563.2C919.1424 563.2 921.6 540.2112 921.6 512z",
      "p-id": "9723"
    }
  })]);
};
var VerticalAlginMiddleIconvue_type_template_id_5047af18_scoped_true_staticRenderFns = [];

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/pro-table/src/components/svg/VerticalAlginMiddleIcon.vue?vue&type=script&lang=js
/* harmony default export */ var VerticalAlginMiddleIconvue_type_script_lang_js = ({
  name: 'VerticalAlignMiddleIcon'
});
;// ./packages/pro-table/src/components/svg/VerticalAlginMiddleIcon.vue?vue&type=script&lang=js
 /* harmony default export */ var svg_VerticalAlginMiddleIconvue_type_script_lang_js = (VerticalAlginMiddleIconvue_type_script_lang_js); 
;// ./packages/pro-table/src/components/svg/VerticalAlginMiddleIcon.vue





/* normalize component */
;
var VerticalAlginMiddleIcon_component = normalizeComponent(
  svg_VerticalAlginMiddleIconvue_type_script_lang_js,
  VerticalAlginMiddleIconvue_type_template_id_5047af18_scoped_true_render,
  VerticalAlginMiddleIconvue_type_template_id_5047af18_scoped_true_staticRenderFns,
  false,
  null,
  "5047af18",
  null
  
)

/* harmony default export */ var VerticalAlginMiddleIcon = (VerticalAlginMiddleIcon_component.exports);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/pro-table/src/components/ColumnAlignSettings.vue?vue&type=script&lang=js



/* harmony default export */ var ColumnAlignSettingsvue_type_script_lang_js = ({
  name: "ColumnAlginSettings",
  inject: ["onColumnSettingsChange"],
  components: {
    VerticalAlignTopIcon: VerticalAlignTopIcon,
    VerticalAlginMiddleIcon: VerticalAlginMiddleIcon,
    VerticalAlginBottomIcon: VerticalAlginBottomIcon
  },
  props: {
    // 单个列表项
    column: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    /**
     * @desc 监听修改
     * @param {string | undefined} fixed 固定位置
     */
    handleAlgin(fixed) {
      const {
        prop
      } = this.column;
      // ProTable provide 提供
      this.onColumnSettingsChange({
        event: "align",
        prop,
        fixed
      });
    }
  }
});
;// ./packages/pro-table/src/components/ColumnAlignSettings.vue?vue&type=script&lang=js
 /* harmony default export */ var components_ColumnAlignSettingsvue_type_script_lang_js = (ColumnAlignSettingsvue_type_script_lang_js); 
;// ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/pro-table/src/components/ColumnAlignSettings.vue?vue&type=style&index=0&id=25fd06be&prod&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// ./packages/pro-table/src/components/ColumnAlignSettings.vue?vue&type=style&index=0&id=25fd06be&prod&scoped=true&lang=css

;// ./packages/pro-table/src/components/ColumnAlignSettings.vue



;


/* normalize component */

var ColumnAlignSettings_component = normalizeComponent(
  components_ColumnAlignSettingsvue_type_script_lang_js,
  ColumnAlignSettingsvue_type_template_id_25fd06be_scoped_true_render,
  ColumnAlignSettingsvue_type_template_id_25fd06be_scoped_true_staticRenderFns,
  false,
  null,
  "25fd06be",
  null
  
)

/* harmony default export */ var ColumnAlignSettings = (ColumnAlignSettings_component.exports);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/pro-table/src/components/ColumnSettingsItem.vue?vue&type=script&lang=js


/* harmony default export */ var ColumnSettingsItemvue_type_script_lang_js = ({
  name: 'ColumnSettingsItem',
  components: {
    HolderIcon: HolderIcon,
    ColumnAlignSettings: ColumnAlignSettings
  },
  inject: ["onColumnSettingsChange"],
  props: {
    // 列表项
    columns: {
      type: Array,
      required: true,
      default: () => []
    },
    // 列设置
    columnSettings: {
      type: Object
    }
  },
  computed: {
    // 列类型
    title() {
      const {
        columns
      } = this;
      if (Array.isArray(columns) && columns.length) {
        const fixed = columns[0].fixed;
        return fixed === "left" ? "固定在左侧" : fixed === "right" ? "固定在右侧" : "不固定";
      }
      return "";
    },
    // columnSettings.draggable && columns.length > 1
    draggable() {
      return this.columnSettings.draggable && this.columns?.length > 1;
    },
    // 动态组件
    dynamicComponent() {
      return this.columnSettings.checkable ? 'el-checkbox' : 'span';
    }
  },
  data() {
    return {
      dragIndex: -1,
      // 开始拖动目标的下标
      dropIndex: -1 // 可释放目标的下标
    };
  },
  methods: {
    /**
     * @desc 监听修改
     * @param {Boolean} checked 状态
     * @param {String} prop 属性
     */
    handleChange(checked, prop) {
      // ProTable provide 提供
      this.onColumnSettingsChange({
        event: "check",
        checked,
        prop
      });
    },
    /**
     * @desc 获取光标位置
     * @param {Object} e
     * @returns {String} top | bottom
     */
    getCursorPos(e) {
      // 1. 获取元素的位置和尺寸
      const rect = e.target.getBoundingClientRect();

      // 2. 获取鼠标相对于元素的位置
      const relativeY = e.clientY - rect.top;

      // 3. 判断光标在释放目标位置的上半还是下半
      const cursorPos = relativeY < rect.height / 2 ? "top" : "bottom";
      return cursorPos;
    },
    /**
     * @desc 获取释放位置下标
     * @param {Object} e
     * @param {Number} dropIndex 释放目标的下标
     */
    getDropIndex(e, dropIndex) {
      // 获取光标位置
      const cursorPos = this.getCursorPos(e);

      // 光标在释放目标位置上半 则在释放目标位置上方插入
      // 光标在释放目标位置下半 则在释放目标位置下方插入
      const targetDropIndex = cursorPos === 'top' ? dropIndex : dropIndex + 1;

      // 当前拖拽的方向
      const dragDirection = this.dragIndex < dropIndex ? "down" : "up";

      // 释放位置 = 开始拖拽位置
      if (targetDropIndex === this.dragIndex) {
        return -1;
      }

      // 拖拽方向：down && 相邻 则说明位置不变
      const isNear = Math.abs(targetDropIndex - this.dragIndex) === 1;
      if (isNear && dragDirection === 'down') {
        return -1;
      }
      return targetDropIndex;
    },
    /**
     * @desc 开始拖动
     * @param {Object} e 拖拽元素对象
     * @param {Number} index 下标
     */
    onDragstart(e, index) {
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.dropEffect = "move";
      this.dragIndex = index;
    },
    /**
     * @desc 拖入到释放目标
     * @param {Object} e 拖拽元素对象
     */
    onDragenter(e) {
      if (this.dragIndex === -1) {
        // 其它拖拽区域
        e.dataTransfer.dropEffect = 'none';
      } else {
        e.dataTransfer.dropEffect = 'move';
      }
    },
    /**
     * @desc 拖拽到释放目标上
     * @param {Object} e 释放目标对象
     * @param {Number} dropIndex 下标
     */
    onDragover(e, dropIndex) {
      // ***参数是在事件绑定时确定的 而不是在事件触发时***

      // 如果拖动到其它列 
      if (this.dragIndex < 0) {
        e.dataTransfer.dropEffect = 'none';
        return;
      }

      // 释放目标是开始拖动目标 则退出
      if (this.dragIndex === dropIndex) {
        this.dropIndex = -1;
        return;
      }

      // 获取释放位置下标
      this.dropIndex = this.getDropIndex(e, dropIndex);
    },
    /**
     * @desc 离开可释放目标
     */
    onDragleave(e) {
      const dragDropZoneRef = this.$refs.dragDropZoneRef;
      // 是否在列表区域内
      if (dragDropZoneRef.contains(e.relatedTarget)) {
        return;
      }
      this.dropIndex = -1;
    },
    /**
     * @desc 释放目标停止拖拽
     * @param {Object} e 释放目标对象
     * @param {Number} dropIndex 释放的下标
     */
    onDrop(e, dropIndex) {
      if (this.dragIndex === dropIndex) {
        this.dropIndex = -1;
        return;
      }

      // 获取释放位置下标
      const index = this.getDropIndex(e, dropIndex);
      if (index > -1) {
        const {
          columns
        } = this;
        const fromProp = columns[this.dragIndex].prop;
        // 要判断是否拖拽到最后一列
        const isAfter = index === this.columns.length;
        const toProp = isAfter ? columns[index - 1].prop : columns[index].prop;
        // ProTable provide 提供
        this.onColumnSettingsChange({
          event: 'drop',
          fromProp,
          toProp,
          isAfter
        });
      }
    },
    /**
     * @desc 结束拖拽
     */
    onDragend() {
      // 重置
      this.dragIndex = -1;
      this.dropIndex = -1;
    }
  }
});
;// ./packages/pro-table/src/components/ColumnSettingsItem.vue?vue&type=script&lang=js
 /* harmony default export */ var components_ColumnSettingsItemvue_type_script_lang_js = (ColumnSettingsItemvue_type_script_lang_js); 
;// ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/pro-table/src/components/ColumnSettingsItem.vue?vue&type=style&index=0&id=bb9b3504&prod&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// ./packages/pro-table/src/components/ColumnSettingsItem.vue?vue&type=style&index=0&id=bb9b3504&prod&scoped=true&lang=css

;// ./packages/pro-table/src/components/ColumnSettingsItem.vue



;


/* normalize component */

var ColumnSettingsItem_component = normalizeComponent(
  components_ColumnSettingsItemvue_type_script_lang_js,
  ColumnSettingsItemvue_type_template_id_bb9b3504_scoped_true_render,
  ColumnSettingsItemvue_type_template_id_bb9b3504_scoped_true_staticRenderFns,
  false,
  null,
  "bb9b3504",
  null
  
)

/* harmony default export */ var ColumnSettingsItem = (ColumnSettingsItem_component.exports);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/pro-table/src/components/ColumnSettings.vue?vue&type=script&lang=js


/* harmony default export */ var ColumnSettingsvue_type_script_lang_js = ({
  name: 'ColumnSettings',
  components: {
    SettingIcon: SettingIcon,
    ColumnSettingsItem: ColumnSettingsItem
  },
  inject: ["onColumnSettingsChange"],
  props: {
    // 列表项
    columns: {
      type: Array,
      required: true
    },
    // 列设置
    columnSettings: {
      type: Object
    }
  },
  computed: {
    // 固定在左侧列
    leftFixedColumns() {
      return this.columns.filter(item => item.fixed === "left");
    },
    // 不固定列
    noFixedColumns() {
      return this.columns.filter(item => item.fixed !== "left" && item.fixed !== "right");
    },
    // 固定在右侧列
    rightFixedColumns() {
      return this.columns.filter(item => item.fixed === "right");
    },
    // 列展示勾选状态
    checkAll() {
      return this.columns.length === this.columns.filter(item => item.checkable).length;
    },
    // 表示 checkbox 的不确定状态
    isIndeterminate() {
      return !this.checkAll && this.columns.filter(item => !item.disabled && item.checkable).length > 0;
    }
  },
  data() {
    return {};
  },
  methods: {
    /**
     * @desc 监听修改
     * @param {Boolean} checked 状态
     */
    handleChange(checked) {
      // ProTable provide 提供
      this.onColumnSettingsChange({
        event: "checkAll",
        checked
      });
    },
    /**
     * @desc 重置
     */
    handleReset() {
      // ProTable provide 提供
      this.onColumnSettingsChange({
        event: "reset"
      });
    }
  }
});
;// ./packages/pro-table/src/components/ColumnSettings.vue?vue&type=script&lang=js
 /* harmony default export */ var components_ColumnSettingsvue_type_script_lang_js = (ColumnSettingsvue_type_script_lang_js); 
;// ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/pro-table/src/components/ColumnSettings.vue?vue&type=style&index=0&id=7e72f8a5&prod&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// ./packages/pro-table/src/components/ColumnSettings.vue?vue&type=style&index=0&id=7e72f8a5&prod&scoped=true&lang=css

;// ./packages/pro-table/src/components/ColumnSettings.vue



;


/* normalize component */

var ColumnSettings_component = normalizeComponent(
  components_ColumnSettingsvue_type_script_lang_js,
  ColumnSettingsvue_type_template_id_7e72f8a5_scoped_true_render,
  ColumnSettingsvue_type_template_id_7e72f8a5_scoped_true_staticRenderFns,
  false,
  null,
  "7e72f8a5",
  null
  
)

/* harmony default export */ var ColumnSettings = (ColumnSettings_component.exports);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/pro-table/src/index.vue?vue&type=script&lang=js








/* harmony default export */ var srcvue_type_script_lang_js = ({
  name: 'ProTable',
  components: {
    ProFormItem: pro_form_item,
    CustomRender: custom_render,
    ArrowIcon: ArrowIcon,
    ColumnSettings: ColumnSettings
  },
  provide() {
    if (!this.columnSettings) {
      return;
    }
    return {
      // 监听列设置修改
      onColumnSettingsChange: this.onColumnSettingsChange
    };
  },
  props: {
    // 搜索表单
    search: {
      type: [Boolean, Object],
      default: true
    },
    // el-table 的类名
    className: {
      type: String
    },
    // el-table 的数据
    dataSource: {
      type: Array
    },
    // 表格数据请求加载状态
    loading: {
      type: Boolean
    },
    // 数据总条数
    total: {
      type: Number,
      default: 0
    },
    // el-table attributes 的配置
    tableProps: {
      type: Object,
      default: () => ({})
    },
    // el-table events 的配置
    tableEvents: {
      type: Object,
      default: () => ({})
    },
    // 列定义
    columns: {
      type: Array,
      required: true,
      default: () => []
    },
    // el-pagination attributes 的配置
    paginationProps: {
      type: Object,
      default: () => ({})
    },
    // 分页参数字段映射配置
    paginationMapping: {
      type: Object,
      default: () => ({})
    },
    // 表单默认值
    initialValues: {
      type: Object,
      default: () => ({})
    },
    // 默认的 size
    defaultSize: {
      type: String,
      validator: function (value) {
        return ['medium', 'small', 'mini'].includes(value);
      }
    },
    // 是否需要手动触发首次请求
    manualRequest: {
      type: Boolean,
      default: false
    },
    // 列设置
    columnSettings: {
      type: [Boolean, Object],
      default: true
    }
  },
  computed: {
    // search 初始化
    searchProps() {
      const {
        search
      } = this;
      if (search) {
        const defaultSearch = {
          searchText: "查询",
          resetText: "重置",
          labelWidth: "80px",
          rowProps: {
            gutter: 8
          },
          colProps: defaultColConfig,
          collapsed: true,
          // 默认收起
          defaultExpandedRows: 2
        };
        if (typeof search === "object") {
          return {
            ...defaultSearch,
            ...this.search,
            collapsed: search.collapsed ?? search.defaultCollapsed ?? defaultSearch.collapsed
          };
        }
        return {
          ...defaultSearch
        };
      }
      return false;
    },
    // 表单项
    formItems() {
      const {
        columns
      } = this;
      return columns
      // 过滤 隐藏的 & 无表单类型的 & 操作栏
      .filter(item => !item.hideInSearch && (!!item.valueType || item.renderField))
      // 权重大排序在前
      .sort((a, b) => b.order - a.order)
      // 筛选
      .map(col => {
        const {
          label,
          prop,
          formItemProps = {},
          renderLabel,
          valueType,
          renderField,
          fieldProps = {},
          fieldEvents,
          initialValue
        } = col;
        // 设置 el-form-item
        formItemProps.label = formItemProps.label || label;
        formItemProps.prop = formItemProps.prop || prop;

        // 设置 placeholder
        setPlaceholder(fieldProps, valueType);

        // 设置 select options
        setSelectOptions(col, this.cachedOptions);

        // 设置 cascader options
        setCascaderOptions(fieldProps, col, this.cachedOptions);
        return {
          ...formItemProps,
          renderLabel,
          valueType,
          renderField,
          fieldProps,
          fieldEvents,
          options: col.options,
          initialValue
        };
      });
    },
    // 表单项总个数
    totalSearchCount() {
      return this.formItems.length;
    },
    // 标准化列定义配置
    normalizedColumns() {
      const {
        columns,
        initializedColumnSettings,
        columnSettingsRule
      } = this;
      let normalizedColumns = columns
      // 筛选隐藏项
      .filter(item => !item.hideInTable).map(col => {
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
          initialValue,
          order,
          hideInSearch,
          renderCellHeader,
          renderCell,
          disabled,
          key,
          ...keys
        } = col;
        return {
          ...keys,
          nonElColumnProps: {
            valueEnum,
            renderCellHeader,
            renderCell,
            key,
            disabled
          }
        };
      });

      // 合并列设置规则
      if (initializedColumnSettings && columnSettingsRule?.length) {
        normalizedColumns = normalizedColumns.map(col => {
          const rule = columnSettingsRule.find(item => (col.prop || col.nonElColumnProps.key) === item.prop);
          if (rule) {
            const {
              checkable,
              fixed,
              index
            } = rule;
            col.nonElColumnProps = {
              ...col.nonElColumnProps,
              checkable,
              index
            };
            return {
              ...col,
              fixed
            };
          }
          return col;
        });
      }

      // 列设置处理
      const {
        draggable,
        checkable
      } = initializedColumnSettings;

      // 支持拖拽排序
      if (draggable) {
        normalizedColumns.sort((a, b) => a.nonElColumnProps.index - b.nonElColumnProps.index);
      }

      // 支持显示/隐藏列
      if (checkable) {
        normalizedColumns = normalizedColumns.filter(item => item.nonElColumnProps.checkable);
      }
      return normalizedColumns;
    },
    // 列设置的列表项
    settingColumns() {
      const {
        columnSettings
      } = this;
      if (!columnSettings) {
        return [];
      }
      const {
        columnSettingsRule,
        columns
      } = this;
      return columnSettingsRule.map(rule => {
        const col = columns.find(item => rule.prop === (item.prop || item.key));
        if (col) {
          const {
            label,
            disabled
          } = col;
          return {
            ...rule,
            label,
            disabled
          };
        }
        return rule;
      });
    },
    // columnSettings 初始化
    initializedColumnSettings() {
      const {
        columnSettings
      } = this;
      if (columnSettings) {
        const defaultColumnSettings = {
          resetText: '重置',
          settingText: '列设置',
          draggable: true,
          checkable: true
        };

        // 如果不是对象，返回默认值
        if (typeof columnSettings === 'object') {
          // 合并基本设置
          return {
            ...defaultColumnSettings,
            ...columnSettings
          };
        }
        return defaultColumnSettings;
      }
      return false;
    },
    // tableProps 初始化
    initializedTableProps() {
      const {
        tableProps,
        defaultSize
      } = this;
      return {
        size: defaultSize,
        ...tableProps
      };
    },
    // tableEvents 初始化
    initializedTableEvents() {
      return {
        'sort-change': this.sortChange,
        // 排序
        ...this.tableEvents
      };
    },
    // paginationProps 初始化
    initializedPaginationProps() {
      return {
        "page-sizes": [10, 20, 30, 50],
        layout: "total, sizes, prev, pager, next, jumper",
        "hide-on-single-page": true,
        ...this.paginationProps,
        "current-page": this.pageNum,
        "page-size": this.pageSize,
        total: this.total
      };
    }
  },
  data() {
    return {
      cachedOptions: {},
      // 下拉数据 { [prop]: data }
      form: this.initForm(),
      // 表单数据
      showExpandToggle: false,
      // 是否显示展开、收起
      searchColConfig: defaultColConfig,
      // search Col 配置
      collapsed: true,
      // 展开、收起
      searchCount: 0,
      // 收起展示的表单个数收起展示的表单个数
      tableKey: 1,
      // table key
      pageNum: 1,
      // 页码
      pageSize: this.paginationProps["page-size"] || 10,
      // 页数
      columnSettingsRule: [] // 列设置规则
    };
  },
  watch: {
    // 监听表单项总个数
    totalSearchCount() {
      this.calculateSearchLayout();
    },
    // 监听 search.collapsed
    "search.collapsed": function (newValue) {
      if (newValue !== this.collapsed) {
        this.handleCollapse();
      }
    }
  },
  created() {
    // 获取异步数据
    this.getOptions();
    // 是否手动执行
    if (!this.manualRequest) {
      this.handleSearch();
    }
    // 开启列设置
    if (this.columnSettings) {
      this.columnSettingsRule = this.initializeColumnSettingsRule();
    }
  },
  mounted() {
    // 是否支持响应式
    const isResponsive = this.isResponsive();
    // 计算是否需要展开、收起以及位置
    this.calculateSearchLayout(isResponsive);

    // 监听 window 宽度变化
    if (isResponsive) {
      // window 宽度变化防抖
      this.debounceResize = debounce(this.resize);
      // 监听 window resize
      window.addEventListener("resize", this.debounceResize);
    }
  },
  methods: {
    /**
     * @desc 获取异步下拉数据
     */
    getOptions() {
      const {
        columns
      } = this;
      for (const column of columns) {
        const {
          prop,
          fieldProps = {},
          optionLoader
        } = column;
        if (optionLoader && typeof optionLoader === "function") {
          optionLoader().then(res => {
            const key = fieldProps.prop || prop;
            this.cachedOptions = {
              ...this.cachedOptions,
              [key]: res
            };
          });
        }
      }
    },
    /**
     * @desc 初始化表单数据
     */
    initForm() {
      const {
        columns
      } = this;
      // 兼容
      if (!columns.length) {
        return {};
      }
      const data = columns
      // 筛选表单类型
      .filter(item => !!item.valueType).reduce((accu, cur) => {
        const {
          prop,
          fieldProps = {},
          initialValue
        } = cur;
        const key = fieldProps.prop || prop;
        if (!key) {
          return accu;
        }
        return {
          ...accu,
          [key]: initialValue
        };
      }, {});
      return {
        ...this.initialValues,
        ...data
      };
    },
    /**
     * @desc 是否需要支持响应式
     * @returns {boolean}
     */
    isResponsive() {
      const {
        searchProps: {
          colProps
        }
      } = this;
      const keys = Object.keys(colProps);
      return keys.some(key => BREAKPOINT_ORDER.includes(key));
    },
    /**
     * @desc 计算搜索区域的布局配置（展开/收起状态）
     * @param {boolean} isResponsive 是否是响应式
     */
    calculateSearchLayout(isResponsive = false) {
      const {
        searchProps: {
          colProps,
          defaultExpandedRows
        },
        totalSearchCount
      } = this;

      // 1. 计算每个表单项所占的栅格跨度
      this.cachedSpanPerField = isResponsive ? calculateCurrentSpan(colProps) : colProps.span || 8;

      // 2. 计算最大可展示的表单项数量
      this.maxVisibleFields = Math.floor(GRID_COLUMNS / this.cachedSpanPerField * defaultExpandedRows) - 1;

      // 3. 判断是否需要显示展开/收起按钮
      this.showExpandToggle = totalSearchCount > this.maxVisibleFields;
      if (this.showExpandToggle) {
        this.collapsed = this.searchProps.collapsed;
      }

      // 4. 更新布局配置
      this.updateSearchLayout();
    },
    /**
     * @desc 更新搜索按钮的位置
     */
    updateSearchLayout() {
      const {
        searchProps: {
          colProps
        },
        cachedSpanPerField
      } = this;

      // 1. 计算可见的表单项数量
      this.searchCount = this.showExpandToggle && this.collapsed ? this.maxVisibleFields : this.totalSearchCount;

      // 2. 计算搜索按钮的位置
      const restSpan = GRID_COLUMNS - cachedSpanPerField * this.searchCount % GRID_COLUMNS;

      // 3. 计算偏差值 offset
      const offset = restSpan - cachedSpanPerField;
      this.searchColConfig = {
        ...colProps,
        offset
      };
    },
    /**
     * @desc 宽度变化
     * @param {Array} entries 监听元素数据
     */
    resize() {
      // 重新计算
      this.calculateSearchLayout(true);
    },
    /**
     * @desc 点击展开、收起
     */
    handleCollapse() {
      this.collapsed = !this.collapsed;
      this.$emit("onCollapse", this.collapsed);
      if (this.showExpandToggle) {
        // 更新展开、收起的位置
        this.updateSearchLayout();
      }
    },
    /**s
     * @desc 表单请求参数（分页）
     */
    getParams() {
      const {
        pageNum,
        pageSize,
        paginationMapping: {
          pageKey,
          sizeKey
        }
      } = this;
      return {
        ...this.form,
        [pageKey || "pageNum"]: pageNum,
        [sizeKey || "pageSize"]: pageSize
      };
    },
    /**
     * @desc 重置
     */
    handleReset() {
      this.form = this.initForm();
      // 重置第一页
      this.pageNum = 1;
      this.$emit("onParams", this.getParams());
      this.$emit("onReset");
    },
    /**
     * @desc 查询
     */
    handleSearch() {
      // 重置第一页
      this.pageNum = 1;
      const params = this.getParams();
      this.$emit("onParams", params);
      this.$emit("onSubmit", params);
    },
    /**
     * @desc 刷新
     * @param {boolean} resetPageIndex 是否重置页码
     */
    reload(resetPageIndex = true) {
      if (resetPageIndex) {
        this.pageNum = 1;
      }
      this.$emit("onParams", this.getParams());
    },
    /**
     * @desc 排序
     * @param {String} prop 属性
     * @param {String} order 升序: ASC 倒序: DESC
     */
    sortChange({
      prop,
      order
    }) {
      // 重置第一页
      this.pageNum = 1;
      this.$emit("onParams", {
        ...this.getParams(),
        prop,
        order
      });
    },
    /**
     * @desc 监听页码修改
     * @param {Number} page 页码
     */
    handleCurrentChange(page) {
      this.pageNum = page;
      this.$emit("onParams", this.getParams());
    },
    /**
     * @desc 监听页数修改
     * @param {Number} pageSize 页数
     */
    handleSizeChange(pageSize) {
      this.pageSize = pageSize;
      // 重置页码（防止组件会自动计算页码 可能在 nextTick 后执行 current-change 事件）
      this.pageNum = 1;
      this.$emit("onParams", this.getParams());
    },
    /**
     * @desc 获取 table ref
     */
    getTableRef() {
      return this.$refs.tableRef;
    },
    /**
     * @desc 初始化列设置
     */
    initializeColumnSettingsRule() {
      return this.columns
      // 过滤隐藏的 && (columnConfig.prop || columnConfig.key)
      .filter(item => !item.hideInTable && (item.prop || item.key)).map((col, index) => {
        const {
          prop,
          key,
          fixed
        } = col;
        return {
          prop: prop || key,
          fixed,
          checkable: true,
          index
        };
      });
    },
    /**
     * @desc 获取 uid
     */
    getUID() {
      return generateCryptoUID();
    },
    /**
     * @desc 全选、取消全选
     * @param {Boolean} checked 勾选状态
     */
    checkAllRule(checked) {
      this.columnSettingsRule = this.columnSettingsRule.map(rule => {
        const col = this.columns.find(item => (item.prop || item.key) === rule.prop);
        if (col) {
          return {
            ...rule,
            checkable: !col.disabled ? checked : rule.checkable
          };
        }
        return rule;
      });
    },
    /**
     * @desc 单个勾选、取消勾选
     * @param {String} prop 标识
     * @param {Boolean} checked 勾选状态
     */
    checkRule(prop, checked) {
      const {
        columnSettingsRule
      } = this;
      const index = columnSettingsRule.findIndex(item => item.prop === prop);
      if (index !== -1) {
        columnSettingsRule.splice(index, 1, {
          ...columnSettingsRule[index],
          checkable: checked
        });
      }
    },
    /**
     * @desc 固定位置修改
     * @param {String} prop 属性
     * @param {String | undefined} fixed 固定位置
     */
    handleAlignRule(prop, fixed) {
      const {
        columnSettingsRule
      } = this;
      const index = columnSettingsRule.findIndex(item => item.prop === prop);
      if (index !== -1) {
        const rule = columnSettingsRule[index];
        columnSettingsRule.splice(index, 1, {
          ...rule,
          fixed
        });
      }
    },
    /**
     * @desc 重置列设置规则
     */
    handleResetRule() {
      this.columnSettingsRule = this.initializeColumnSettingsRule();
    },
    /**
     * @desc 拖拽更新
     * @param {String} fromProp 拖拽开始列
     * @param {String} toProp 释放目标列
     * @param {Boolean} isAfter 是否拖拽到分组的最后一列
     */
    handleDropRule(fromProp, toProp, isAfter = false) {
      const {
        columnSettingsRule
      } = this;
      const fromIndex = columnSettingsRule.findIndex(item => (item.prop || item.key) === fromProp);
      if (fromIndex === -1) {
        return;
      }
      const toIndex = columnSettingsRule.findIndex(item => (item.prop || item.key) === toProp);
      if (toIndex === -1) {
        return;
      }
      // 向上拖拽
      const isUp = fromIndex > toIndex;
      // 开始移动下标
      const startIndex = isUp ? toIndex : fromIndex + 1;
      // 结束移动下标
      const endIndex = isUp ? fromIndex : isAfter ? toIndex + 1 : toIndex;
      // 移动
      for (let i = startIndex; i < endIndex; ++i) {
        const column = columnSettingsRule[i];
        columnSettingsRule.splice(i, 1, {
          ...column,
          index: isUp ? column.index + 1 : column.index - 1
        });
      }
      const fromColumn = columnSettingsRule[fromIndex];
      if (isUp) {
        // 先删除 后插入
        columnSettingsRule.splice(fromIndex, 1);
        columnSettingsRule.splice(toIndex, 0, {
          ...fromColumn,
          index: toIndex
        });
      } else {
        // 先插入 后删除
        columnSettingsRule.splice(toIndex, 0, {
          ...fromColumn,
          index: toIndex
        });
        columnSettingsRule.splice(fromIndex, 1);
      }
    },
    /**
     * @desc el-table 列的数量发生变化时需要重新布局
     */
    doLayout() {
      this.$nextTick(() => {
        // 对 Table 进行重新布局
        this.$refs.tableRef?.doLayout();
      });
    },
    /**
     * @desc 监听列设置修改
     * @param { Object } data 数据
     * @param {String} data.event 事件类型
     */
    onColumnSettingsChange(data) {
      const {
        event,
        prop,
        checked,
        fixed,
        fromProp,
        toProp,
        isAfter
      } = data;
      // 勾选或取消勾选
      switch (event) {
        case "checkAll":
          this.checkAllRule(checked);
          this.doLayout();
          break;
        case "check":
          this.checkRule(prop, checked);
          this.doLayout();
          break;
        case "align":
          this.handleAlignRule(prop, fixed);
          break;
        case "reset":
          this.handleResetRule();
          // 更新 table key
          this.tableKey = this.getUID();
          break;
        case 'drop':
          this.handleDropRule(fromProp, toProp, isAfter);
          // 更新 table key
          this.tableKey = this.getUID();
          break;
        default:
          break;
      }
    }
  },
  beforeDestroy() {
    // 清除 resize
    window.removeEventListener("resize", this.resize);
    // 取消防抖
    this.debounceResize?.cancel();
  }
});
;// ./packages/pro-table/src/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pro_table_srcvue_type_script_lang_js = (srcvue_type_script_lang_js); 
;// ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/pro-table/src/index.vue?vue&type=style&index=0&id=5d0503a8&prod&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// ./packages/pro-table/src/index.vue?vue&type=style&index=0&id=5d0503a8&prod&scoped=true&lang=css

;// ./packages/pro-table/src/index.vue



;


/* normalize component */

var src_component = normalizeComponent(
  pro_table_srcvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "5d0503a8",
  null
  
)

/* harmony default export */ var pro_table_src = (src_component.exports);
;// ./packages/pro-table/index.js


// 为组件提供 install 方法
pro_table_src.install = function (Vue) {
  Vue.component(pro_table_src.name, pro_table_src);
};

// 默认导出组件
/* harmony default export */ var pro_table = (pro_table_src);
;// ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (pro_table);


/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.umd.js.map