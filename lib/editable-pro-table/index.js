/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
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

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/editable-pro-table/src/index.vue?vue&type=template&id=b718f0f2&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(_vm.formRef ? 'fragment' : 'el-form', _vm._b({
    tag: "component"
  }, 'component', _vm.getDynamicProps, false), [_c('el-table-prepend', _vm._g(_vm._b({
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: _vm.loading,
      expression: "loading"
    }],
    ref: "editableProTableRef",
    staticClass: "editable-pro-table",
    class: _vm.className,
    attrs: {
      "data": _vm.form[_vm.name]
    },
    scopedSlots: _vm._u([_vm.initializedCreatorProps.position === 'top' && !_vm.exceedsMax ? {
      key: "prepend",
      fn: function () {
        return [_c('div', {
          staticClass: "btn-add-box"
        }, [_c('RecordCreator', {
          attrs: {
            "recordCreatorProps": _vm.initializedCreatorProps,
            "size": _vm.defaultSize
          },
          nativeOn: {
            "click": function ($event) {
              return _vm.addEditRecord(null);
            }
          }
        })], 1)];
      },
      proxy: true
    } : null], null, true)
  }, 'el-table-prepend', _vm.initializedTableProps, false), _vm.tableEvents), _vm._l(_vm.initializedColumns, function (column, index) {
    return _c('el-table-column', _vm._b({
      key: column.prop || column.key,
      scopedSlots: _vm._u([column.renderCellHeader ? {
        key: "header",
        fn: function (scope) {
          return [_c('CustomRender', {
            attrs: {
              "render": () => column.renderCellHeader(scope)
            }
          })];
        }
      } : null, column.valueType || column.renderField ? {
        key: "default",
        fn: function (scope) {
          return [column.valueType === 'option' ? [_c('Editable', {
            attrs: {
              "editable": _vm.initializedEditable,
              "action": {
                cancelEditable: _vm.cancelEditable,
                startEditable: _vm.startEditable,
                addEditRecord: _vm.addEditRecord
              },
              "validateRow": _vm.validateRow,
              "recordKey": scope.row[_vm.rowKey],
              "scope": scope,
              "name": _vm.name,
              "render": action => column.renderCell(scope, action),
              "newLineRecordCache": _vm.newLineRecordCache,
              "preEditRows": _vm.preEditRows,
              "defaultSize": _vm.defaultSize
            },
            on: {
              "delete": _vm.filterByRecordKey,
              "cancel": _vm.deleteOrResetRow
            }
          })] : [_c('RenderCell', {
            attrs: {
              "editable": _vm.initializedEditable,
              "column": column,
              "name": _vm.name,
              "recordKey": scope.row[_vm.rowKey],
              "scope": scope,
              "cachedOptions": _vm.cachedOptions,
              "preEditRows": _vm.preEditRows
            },
            scopedSlots: _vm._u([{
              key: column.prop,
              fn: function (scope) {
                return [_vm._t(column.prop, null, null, scope)];
              }
            }], null, true)
          })]];
        }
      } : null], null, true)
    }, 'el-table-column', _vm.getColumnProps(column, index), false));
  }), 1), _vm.initializedCreatorProps.position === 'bottom' && !_vm.exceedsMax ? _c('RecordCreator', {
    attrs: {
      "recordCreatorProps": _vm.initializedCreatorProps,
      "size": _vm.defaultSize
    },
    nativeOn: {
      "click": function ($event) {
        return _vm.addEditRecord(null);
      }
    }
  }) : _vm._e()], 1);
};
var staticRenderFns = [];

;// external "el-table-prepend"
var external_el_table_prepend_namespaceObject = require("el-table-prepend");
var external_el_table_prepend_default = /*#__PURE__*/__webpack_require__.n(external_el_table_prepend_namespaceObject);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/editable-pro-table/src/components/RecordCreator.vue?vue&type=template&id=162f12bc&scoped=true
var RecordCreatorvue_type_template_id_162f12bc_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('el-button', _vm._b({
    staticClass: "btn-add",
    style: _vm.recordCreatorProps.style,
    attrs: {
      "icon": "el-icon-plus"
    }
  }, 'el-button', _vm.initializedButtonProps, false), [_vm._v(" " + _vm._s(_vm.recordCreatorProps.creatorButtonText) + " ")]);
};
var RecordCreatorvue_type_template_id_162f12bc_scoped_true_staticRenderFns = [];

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/editable-pro-table/src/components/RecordCreator.vue?vue&type=script&lang=js
/* harmony default export */ var RecordCreatorvue_type_script_lang_js = ({
  name: 'RecordCreator',
  props: {
    recordCreatorProps: {
      type: [Boolean, Object],
      required: true
    },
    size: {
      type: String
    }
  },
  computed: {
    initializedButtonProps() {
      const {
        size,
        recordCreatorProps: {
          buttonProps = {}
        }
      } = this;
      return {
        plain: true,
        ...buttonProps,
        size
      };
    }
  }
});
;// ./packages/editable-pro-table/src/components/RecordCreator.vue?vue&type=script&lang=js
 /* harmony default export */ var components_RecordCreatorvue_type_script_lang_js = (RecordCreatorvue_type_script_lang_js); 
;// ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/editable-pro-table/src/components/RecordCreator.vue?vue&type=style&index=0&id=162f12bc&prod&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// ./packages/editable-pro-table/src/components/RecordCreator.vue?vue&type=style&index=0&id=162f12bc&prod&scoped=true&lang=css

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

;// ./packages/editable-pro-table/src/components/RecordCreator.vue



;


/* normalize component */

var component = normalizeComponent(
  components_RecordCreatorvue_type_script_lang_js,
  RecordCreatorvue_type_template_id_162f12bc_scoped_true_render,
  RecordCreatorvue_type_template_id_162f12bc_scoped_true_staticRenderFns,
  false,
  null,
  "162f12bc",
  null
  
)

/* harmony default export */ var RecordCreator = (component.exports);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/custom-render/index.vue?vue&type=script&lang=js
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
;// ./packages/custom-render/index.vue
var custom_render_render, custom_render_staticRenderFns
;



/* normalize component */
;
var custom_render_component = normalizeComponent(
  packages_custom_rendervue_type_script_lang_js,
  custom_render_render,
  custom_render_staticRenderFns,
  false,
  null,
  "2ddfacb0",
  null
  
)

/* harmony default export */ var custom_render = (custom_render_component.exports);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/editable-pro-table/src/components/RenderCell.vue?vue&type=template&id=5943cebf&scoped=true
var RenderCellvue_type_template_id_5943cebf_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('Fragment', [_vm.isEditable ? _c('FormItem', {
    attrs: {
      "formItem": _vm.formItem,
      "formItemProp": _vm.formItemProp,
      "form": _vm.row,
      "name": _vm.name,
      "recordKey": _vm.recordKey,
      "index": _vm.index
    },
    scopedSlots: _vm._u([{
      key: _vm.formItem.prop,
      fn: function () {
        return [_vm._t(_vm.formItem.prop, null, null, {
          form: _vm.row,
          formItem: _vm.formItem,
          recordKey: _vm.recordKey,
          index: _vm.index
        })];
      },
      proxy: true
    }], null, true)
  }) : [_c('el-form-item', {
    staticClass: "editable-form-item",
    attrs: {
      "prop": _vm.formItemProp
    }
  }, [_vm.column.renderCell ? _c('CustomRender', {
    attrs: {
      "render": () => _vm.column.renderCell(_vm.scope)
    }
  }) : _c('span', {
    class: {
      'text-ellipsis': _vm.column['show-overflow-tooltip']
    }
  }, [_vm._v(_vm._s(_vm.value ?? '-'))])], 1)]], 2);
};
var RenderCellvue_type_template_id_5943cebf_scoped_true_staticRenderFns = [];

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/editable-pro-table/src/components/FormItem.vue?vue&type=template&id=1ac7c73e&scoped=true
var FormItemvue_type_template_id_1ac7c73e_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('el-form-item', _vm._b({
    staticClass: "editable-form-item",
    attrs: {
      "prop": _vm.formItemProp,
      "label": ""
    }
  }, 'el-form-item', _vm.normalizedFormItem, false), [_vm.formItem.renderField ? _c('CustomRender', {
    attrs: {
      "render": () => _vm.formItem.renderField({
        form: _vm.form,
        formItem: _vm.formItem,
        recordKey: _vm.recordKey,
        index: _vm.index
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
  }, 'component', _vm.formItem.fieldProps, false), _vm.normalizedFieldEvents), [_vm.formItem.valueType === 'select' ? [_vm.formItem.options?.[0]?.options ? _vm._l(_vm.formItem.options, function (group) {
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
var FormItemvue_type_template_id_1ac7c73e_scoped_true_staticRenderFns = [];

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/editable-pro-table/src/components/FormItem.vue?vue&type=script&lang=js

/* harmony default export */ var FormItemvue_type_script_lang_js = ({
  name: 'FormItem',
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
    },
    // 可编辑表格名称
    name: {
      type: String
    },
    recordKey: {
      type: [Number, String]
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
      } = this.formItem;
      return keys;
    },
    // 表单事件
    normalizedFieldEvents() {
      const {
        formItem: {
          fieldEvents
        }
      } = this;
      if (!fieldEvents) {
        return;
      }
      const newEvents = {};
      const {
        recordKey,
        form: row,
        index
      } = this;
      for (const eventName in fieldEvents) {
        const handler = (...args) => fieldEvents[eventName]?.(...args, {
          recordKey,
          row,
          index
        });
        newEvents[eventName] = handler;
      }
      return newEvents;
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
;// ./packages/editable-pro-table/src/components/FormItem.vue?vue&type=script&lang=js
 /* harmony default export */ var components_FormItemvue_type_script_lang_js = (FormItemvue_type_script_lang_js); 
;// ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/editable-pro-table/src/components/FormItem.vue?vue&type=style&index=0&id=1ac7c73e&prod&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// ./packages/editable-pro-table/src/components/FormItem.vue?vue&type=style&index=0&id=1ac7c73e&prod&scoped=true&lang=css

;// ./packages/editable-pro-table/src/components/FormItem.vue



;


/* normalize component */

var FormItem_component = normalizeComponent(
  components_FormItemvue_type_script_lang_js,
  FormItemvue_type_template_id_1ac7c73e_scoped_true_render,
  FormItemvue_type_template_id_1ac7c73e_scoped_true_staticRenderFns,
  false,
  null,
  "1ac7c73e",
  null
  
)

/* harmony default export */ var FormItem = (FormItem_component.exports);
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
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/editable-pro-table/src/components/RenderCell.vue?vue&type=script&lang=js



/* harmony default export */ var RenderCellvue_type_script_lang_js = ({
  name: 'RenderCell',
  components: {
    FormItem: FormItem,
    CustomRender: custom_render
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
          fieldEvents
        }
      } = this;
      // 设置 placeholder
      setPlaceholder(fieldProps, valueType);

      // 设置 select options
      setSelectOptions(column, this.cachedOptions);

      // 设置 cascader options
      setCascaderOptions(fieldProps, column, this.cachedOptions);
      return {
        ...formItemProps,
        prop,
        valueType,
        renderField,
        fieldProps,
        fieldEvents,
        options: column.options
      };
    },
    // 行数据
    row() {
      return this.scope.row;
    },
    // 下标
    index() {
      return this.scope.$index;
    },
    // 可编辑表格 el-form-item prop
    formItemProp() {
      const {
        formItem: {
          prop
        },
        name,
        index
      } = this;
      return `${name}.${index}.${prop}`;
    },
    isEditable() {
      const {
        editable: {
          editableKeys
        },
        recordKey,
        formItem: {
          prop
        },
        column: {
          readonly,
          editable
        }
      } = this;
      const preEditCellValue = this.preEditRows.get(this.recordKey)?.[prop];
      return editableKeys?.some(key => recordKey === key) && readonly !== true && (editable ? editable?.(preEditCellValue, this.row, this.index) : true);
    },
    // 文本
    value() {
      const {
        column: {
          formatter
        },
        formItem,
        scope,
        row,
        index
      } = this;
      const {
        prop,
        valueType,
        options,
        valueEnum
      } = formItem;
      const cellValue = row[prop];
      if (formatter) {
        // formatter
        return formatter(row, scope.column, cellValue, index);
      } else if (valueType === 'select') {
        // 选择器
        if (valueEnum) {
          // 枚举
          if (valueEnum instanceof Map) {
            return valueEnum.get(cellValue);
          } else {
            return valueEnum[cellValue];
          }
        } else {
          // options
          const map = (options || []).reduce((accu, cur) => ({
            ...accu,
            [cur.value]: cur.label
          }), {});
          return map[cellValue];
        }
      }
      return cellValue;
    }
  }
});
;// ./packages/editable-pro-table/src/components/RenderCell.vue?vue&type=script&lang=js
 /* harmony default export */ var components_RenderCellvue_type_script_lang_js = (RenderCellvue_type_script_lang_js); 
;// ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/editable-pro-table/src/components/RenderCell.vue?vue&type=style&index=0&id=5943cebf&prod&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// ./packages/editable-pro-table/src/components/RenderCell.vue?vue&type=style&index=0&id=5943cebf&prod&scoped=true&lang=css

;// ./packages/editable-pro-table/src/components/RenderCell.vue



;


/* normalize component */

var RenderCell_component = normalizeComponent(
  components_RenderCellvue_type_script_lang_js,
  RenderCellvue_type_template_id_5943cebf_scoped_true_render,
  RenderCellvue_type_template_id_5943cebf_scoped_true_staticRenderFns,
  false,
  null,
  "5943cebf",
  null
  
)

/* harmony default export */ var RenderCell = (RenderCell_component.exports);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/editable-pro-table/src/components/Editable.vue?vue&type=script&lang=js
/* harmony default export */ var Editablevue_type_script_lang_js = ({
  name: 'Editable',
  props: {
    // 可编辑配置
    editable: {
      type: Object,
      required: true
    },
    action: {
      type: Object,
      required: true
    },
    validateRow: {
      type: Function
    },
    recordKey: {
      type: [String, Number]
    },
    render: {
      type: Function,
      required: true
    },
    scope: {
      type: Object
    },
    newLineRecordCache: {
      type: Object
    },
    name: {
      type: String
    },
    preEditRows: {
      type: Map
    },
    defaultSize: {
      type: String
    }
  },
  computed: {
    isEditable() {
      const {
        editable: {
          editableKeys
        },
        recordKey
      } = this;
      return editableKeys?.some(key => recordKey === key);
    },
    isNewLineRecordCache() {
      return this.newLineRecordCache?.options.recordKey === this.recordKey;
    }
  },
  data() {
    return {
      saveLoading: false,
      // 加载中...
      visible: false,
      deleteLoading: false // 加载中
    };
  },
  methods: {
    /**
     * @desc 保存
     */
    async save() {
      const {
        validateRow,
        scope: {
          row,
          $index
        },
        recordKey
      } = this;
      const res = await validateRow($index);
      if (!res) {
        return;
      }
      try {
        this.saveLoading = true;
        const res = await this.editable.onSave?.(recordKey, row, this.preEditRows.get(recordKey));
        this.saveLoading = false;
        if (res === false) {
          return;
        }
        this.action.cancelEditable(recordKey, row);
      } catch (err) {
        this.saveLoading = false;
        console.error('err', err);
      }
    },
    /**
     * @desc 删除
     */
    async delete() {
      try {
        this.deleteLoading = true;
        const {
          scope: {
            row
          },
          recordKey
        } = this;
        const res = await this.editable.onDelete?.(recordKey, row);
        this.deleteLoading = false;
        if (res === false) {
          return;
        }
        this.visible = false;
        await this.action.cancelEditable(recordKey, row);
        this.$emit('delete', recordKey);
      } catch (err) {
        this.deleteLoading = false;
        console.error('err', err);
      }
    },
    /**
     * @desc 取消
     */
    async cancel() {
      try {
        const {
          recordKey,
          scope: {
            row,
            $index
          }
        } = this;
        await this.action.cancelEditable(recordKey, row);
        this.$emit('cancel', recordKey, $index);
      } catch (err) {
        console.error('err', err);
      }
    }
  },
  render: function (h) {
    const {
      saveText,
      deleteText,
      cancelText,
      deletePopconfirmMessage
    } = this.editable;
    const {
      defaultSize
    } = this;
    const doms = {
      save: h("el-button", {
        "class": "btn-save",
        "attrs": {
          "type": "text",
          "size": defaultSize,
          "loading": this.saveLoading
        },
        "on": {
          "click": this.save
        }
      }, [saveText]),
      delete: h("el-popover", {
        "attrs": {
          "placement": "top",
          "popper-class": "delete-popover-message",
          "trigger": "click",
          "value": this.visible
        },
        "on": {
          "input": val => this.visible = val
        }
      }, [h("p", [h("i", {
        "class": "el-icon-warning",
        "style": "color: #ffad00; margin-right: 8px"
      }), h("span", [deletePopconfirmMessage])]), h("div", {
        "style": "text-align: right; margin-left: 22px"
      }, [h("el-button", {
        "attrs": {
          "size": "mini",
          "type": "text"
        },
        "on": {
          "click": () => {
            this.visible = false;
          }
        }
      }, ["\u53D6\u6D88"]), h("el-button", {
        "attrs": {
          "type": "primary",
          "size": "mini"
        },
        "on": {
          "click": this.delete
        }
      }, ["\u786E\u5B9A"])]), h("el-button", {
        "slot": "reference",
        "attrs": {
          "type": "text",
          "size": defaultSize,
          "loading": this.deleteLoading
        }
      }, [deleteText])]),
      cancel: h("el-button", {
        "class": "btn-cancel",
        "attrs": {
          "type": "text",
          "size": defaultSize
        },
        "on": {
          "click": this.cancel
        }
      }, [cancelText])
    };
    const {
      editable: {
        editableKeys,
        onChange,
        onSave,
        onDelete,
        onCancel,
        actionRender
      },
      scope: {
        row
      },
      isNewLineRecordCache
    } = this;
    const {
      recordKey,
      scope: {
        $index
      },
      action: {
        cancelEditable,
        addEditRecord
      },
      name,
      newLineRecordCache
    } = this;
    const config = {
      editableKeys,
      setEditableRowKeys: keys => onChange?.(keys),
      recordKey,
      preEditRow: this.preEditRows.get(recordKey),
      index: $index,
      onSave,
      onDelete,
      onCancel,
      cancelEditable,
      newLineConfig: newLineRecordCache,
      saveText,
      deleteText,
      cancelText,
      deletePopconfirmMessage,
      addEditRecord,
      tableName: name
    };
    const defaultDoms = [doms.save, !isNewLineRecordCache && doms.delete, doms.cancel].filter(Boolean);
    const actionDoms = typeof actionRender === 'function' ? actionRender(row, config, doms) : defaultDoms;
    return h("Fragment", [this.isEditable ? actionDoms : this.render(this.action)]);
  }
});
;// ./packages/editable-pro-table/src/components/Editable.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Editablevue_type_script_lang_js = (Editablevue_type_script_lang_js); 
;// ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/editable-pro-table/src/components/Editable.vue?vue&type=style&index=0&id=39818f6b&prod&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// ./packages/editable-pro-table/src/components/Editable.vue?vue&type=style&index=0&id=39818f6b&prod&scoped=true&lang=css

;// ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/editable-pro-table/src/components/Editable.vue?vue&type=style&index=1&id=39818f6b&prod&lang=css
// extracted by mini-css-extract-plugin

;// ./packages/editable-pro-table/src/components/Editable.vue?vue&type=style&index=1&id=39818f6b&prod&lang=css

;// ./packages/editable-pro-table/src/components/Editable.vue
var Editable_render, Editable_staticRenderFns
;

;



/* normalize component */

var Editable_component = normalizeComponent(
  components_Editablevue_type_script_lang_js,
  Editable_render,
  Editable_staticRenderFns,
  false,
  null,
  "39818f6b",
  null
  
)

/* harmony default export */ var Editable = (Editable_component.exports);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/editable-pro-table/src/index.vue?vue&type=script&lang=js





/* harmony default export */ var srcvue_type_script_lang_js = ({
  name: 'EditableProTable',
  components: {
    ElTablePrepend: (external_el_table_prepend_default()),
    RecordCreator: RecordCreator,
    CustomRender: custom_render,
    RenderCell: RenderCell,
    Editable: Editable
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
      type: Number
    },
    // 可编辑表格的相关配置
    editable: {
      type: Object
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
      type: Boolean
    },
    // el-table attributes 的配置
    tableProps: {
      type: Object
    },
    // el-table events 的配置
    tableEvents: {
      type: Object
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
        return ['medium', 'small', 'mini'].includes(value);
      }
    },
    // 固定列是否使用 position: sticky 实现
    sticky: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    getDynamicProps() {
      const {
        formRef,
        form,
        defaultSize
      } = this;
      if (!formRef) {
        return {
          ref: 'formRef',
          model: form,
          size: defaultSize
        };
      }
      return;
    },
    // recordCreatorProps 初始化
    initializedCreatorProps() {
      const {
        recordCreatorProps
      } = this;
      if (recordCreatorProps) {
        const defaultRecordCreatorProps = {
          position: 'bottom',
          newRecordType: 'cache',
          creatorButtonText: '添加一行数据',
          onlyAddOneLineAlertMessage: '只能新增一行'
        };
        if (typeof recordCreatorProps === 'object') {
          return {
            ...defaultRecordCreatorProps,
            ...recordCreatorProps
          };
        }
        return defaultRecordCreatorProps;
      }
      return false;
    },
    // 是否超过了最大的行数
    exceedsMax() {
      const {
        maxLength
      } = this;
      if (typeof maxLength === 'number') {
        return this.form[this.name].length >= maxLength;
      }
      return false;
    },
    // editable 初始化
    initializedEditable() {
      const defaultEditable = {
        type: 'single',
        saveText: '保存',
        deleteText: '删除',
        cancelText: '取消',
        deletePopconfirmMessage: '删除此项？',
        onlyOneLineEditorAlertMessage: '只能同时编辑一行'
      };
      return {
        ...defaultEditable,
        ...this.editable
      };
    },
    // tableProps 初始化
    initializedTableProps() {
      const {
        rowKey,
        tableProps = {},
        defaultSize: size
      } = this;
      return {
        ...tableProps,
        rowKey,
        size,
        'cell-style': data => this.getCellStyle(data, tableProps['cell-style']),
        'header-cell-style': data => this.getCellStyle(data, tableProps['header-cell-style'])
      };
    },
    // columns 初始化
    initializedColumns() {
      return this.columns.filter(item => !item.hideInTable);
    },
    // 计算定位的偏移
    calculateOffset() {
      const offset = {};
      const {
        initializedColumns,
        sticky
      } = this;
      let totalLeftOffset = 0;
      let leftIndex = -1;
      for (let i = 0; i < initializedColumns.length; i++) {
        const col = initializedColumns[i];
        const isSticky = sticky !== false && col.fixed === 'left';
        if (isSticky) {
          leftIndex = i;
          offset[i] = totalLeftOffset;
          totalLeftOffset += col.width || col.minWidth;
        }
      }
      let totalRightOffset = 0;
      let rightIndex = -1;
      for (let i = initializedColumns.length - 1; i >= 0; i--) {
        const col = initializedColumns[i];
        const isSticky = sticky !== false && col.fixed === 'right';
        if (isSticky) {
          rightIndex = i;
          offset[i] = totalRightOffset;
          totalRightOffset += col.width || col.minWidth;
        }
      }
      return {
        offset,
        leftIndex,
        rightIndex
      };
    }
  },
  data() {
    return {
      cachedOptions: {},
      // 下拉数据 { [prop]: data }
      form: {
        [this.name]: this.dataSource
      },
      newLineRecordCache: undefined,
      // 新增一行草稿数据
      preEditRows: new Map() // 编辑前行数据
    };
  },
  created() {
    // 获取异步数据
    this.getOptions();
  },
  watch: {
    // 监听元数据变化
    dataSource(newValue) {
      this.form[this.name] = newValue;
    }
  },
  methods: {
    /**
     * @desc 获取异步下拉数据
     */
    getOptions() {
      for (const item of this.columns) {
        const {
          prop,
          optionLoader
        } = item;
        if (typeof optionLoader === 'function') {
          optionLoader().then(res => {
            this.cachedOptions = {
              ...this.cachedOptions,
              [prop]: res
            };
          });
        }
      }
    },
    /**
     * 新增一行的方法
     * @param record 数据
     * @param newLine 新增一行的配置
     */
    addEditRecord(record, newLine) {
      const {
        initializedCreatorProps: {
          onlyAddOneLineAlertMessage
        }
      } = this;
      // 只能新增一行校验
      if (this.newLineRecordCache) {
        this.$message.warning(onlyAddOneLineAlertMessage);
        return;
      }

      // 只能同时编辑一行校验
      if (!this.validateCanStartEdit()) {
        return;
      }
      const {
        form,
        name,
        rowKey
      } = this;
      const {
        initializedCreatorProps: {
          position,
          newRecordType,
          record: defaultRecord
        }
      } = this;
      const dataSource = form[name];
      const newLineConfig = {
        position,
        newRecordType,
        ...(newLine || {})
      };
      const index = newLineConfig.position === 'top' ? dataSource.length : 0;
      record = record ?? defaultRecord;
      const newRecord = typeof record === 'function' ? record(index, dataSource) : record;
      if (!newRecord[rowKey]) {
        console.error('Error: 请设置 recordCreatorProps.record 并返回一个唯一的key');
        return;
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
        };
      } else {
        this.newLineRecordCache = undefined;
      }

      // 插入数据
      if (newLineConfig.position === 'top') {
        dataSource.unshift(newRecord);
      } else {
        dataSource.push(newRecord);
      }

      // 更新 editableKeys
      const {
        initializedEditable: {
          editableKeys,
          onChange
        }
      } = this;
      const newKeys = [...editableKeys, newRecord[rowKey]];
      const editableRows = dataSource.filter(item => editableKeys.includes(item[rowKey]));
      onChange?.(newKeys, editableRows);
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
      } = col;
      const {
        sticky
      } = this;
      const getStickyClassName = (fixed, sticky) => {
        if (!sticky) return '';
        if (fixed === 'left') return 'editable-pro-table__fixed-left';
        if (fixed === 'right') return 'editable-pro-table__fixed-right';
        return '';
      };
      let className = col['class-name'] || '';
      if (col.fixed && sticky) {
        className += ' ' + getStickyClassName(col.fixed, sticky);
      }
      if (this.calculateOffset.leftIndex === index) {
        className += ' ' + 'editable-pro-table__fixed-start-shadow';
      } else if (this.calculateOffset.rightIndex === index) {
        className += ' ' + 'editable-pro-table__fixed-end-shadow';
      }
      return {
        ...keys,
        fixed: col.fixed && sticky ? undefined : col.fixed,
        'class-name': className
      };
    },
    /**
     * @desc 获取待校验的字段
     * @param index 下标
     * @returns {Array}
     */
    getValidateFields(index) {
      return this.columns.filter(item => item.valueType && item.valueType !== 'option' || item.renderField).map(item => `${this.name}.${index}.${item.prop}`);
    },
    /**
     * @desc 校验行
     * @param index 下标
     */
    validateRow(index) {
      return new Promise(async resolve => {
        const fields = this.getValidateFields(index);
        const promises = fields.map(field => new Promise(resolve => {
          this.getFormRef()?.validateField(field, error => {
            resolve(!error);
          });
        }));
        const res = await Promise.all(promises);
        resolve(!res.some(item => !item));
      });
    },
    /**
     * @desc 验证是否可以开始编辑
     * @returns {Boolean}
     */
    validateCanStartEdit() {
      const {
        initializedEditable: {
          type,
          editableKeys,
          onlyOneLineEditorAlertMessage
        }
      } = this;
      if (editableKeys.length && type === 'single') {
        this.$message.warning(onlyOneLineEditorAlertMessage);
        return false;
      }
      return true;
    },
    /**
     * @desc 退出编辑
     * @param recordKey 
     */
    clearEditableState(recordKey) {
      const {
        initializedEditable: {
          editableKeys,
          onChange
        }
      } = this;
      if (!editableKeys.includes(recordKey)) {
        return true;
      }
      const newKeys = editableKeys.filter(item => item !== recordKey);
      onChange?.(newKeys);
    },
    /**
     * @desc 清除新增行缓存
     * @param recordKey 
     */
    clearNewLineCache(recordKey) {
      if (this.newLineRecordCache?.options.recordKey === recordKey) {
        this.newLineRecordCache = null;
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
        const originRow = this.preEditRows.get(recordKey);
        await this.editable.onCancel?.(recordKey, editRow, originRow);

        // 退出编辑
        this.clearEditableState(recordKey);

        // 清除新增行缓存
        this.clearNewLineCache(recordKey);
      } catch (err) {
        console.error('err', err);
      }
      return true;
    },
    /**
     * @desc 查找行数据
     * @param recordKey
     */
    findRecordByKey(recordKey) {
      const dataSource = this.form[this.name];
      const record = dataSource.find(item => item[this.rowKey] === recordKey);
      return JSON.parse(JSON.stringify(record));
    },
    /**
     * @desc 开始编辑指定字段
     * @param {String | Number} recordKey 值
     * @returns {Boolean}
     */
    startEditable(recordKey) {
      if (!this.validateCanStartEdit()) {
        return false;
      }
      const {
        initializedEditable: {
          editableKeys,
          onChange
        }
      } = this;
      const isAlreadyEditable = editableKeys?.some(key => key === recordKey);
      if (!isAlreadyEditable) {
        onChange?.([...editableKeys, recordKey]);
        // 更新 preEditRows
        this.preEditRows.set(recordKey, this.findRecordByKey(recordKey));
      }
      return true;
    },
    /**
     * @desc 删除
     * @param recordKey 
     */
    filterByRecordKey(recordKey) {
      const {
        form,
        name,
        rowKey
      } = this;
      const dataSource = form[name];
      const index = dataSource.findIndex(item => item[rowKey] === recordKey);
      if (index !== -1) {
        dataSource.splice(index, 1);
      }
    },
    /**
     * @desc 取消
     * @param recordKey 
     * @param index
     */
    deleteOrResetRow(recordKey, index) {
      const {
        initializedCreatorProps: {
          newRecordType
        }
      } = this;
      const preEditRow = this.preEditRows.get(recordKey);
      if (preEditRow) {
        // 重置为默认值
        const {
          form,
          name,
          rowKey
        } = this;
        const dataSource = form[name];
        const index = dataSource.findIndex(item => item[rowKey] === recordKey);
        if (index !== -1) {
          dataSource.splice(index, 1, preEditRow);
        }
      } else {
        if (newRecordType !== 'dataSource') {
          // 没有历史值 则删除
          this.filterByRecordKey(recordKey);
        } else {
          // 重置为新增的初始值
          const {
            initializedCreatorProps: {
              record
            },
            form,
            name,
            rowKey
          } = this;
          const dataSource = form[name];
          const newRecord = typeof record === 'function' ? record(index, dataSource) : record;
          delete newRecord[rowKey];
          this.setRowData(index, newRecord);
        }
      }
    },
    getFormRef() {
      return this.formRef || this.$refs.formRef;
    },
    validate() {
      return this.getFormRef()?.validate;
    },
    reset() {
      return this.getFormRef()?.resetFields;
    },
    getTableRef() {
      return this.$refs.editableProTableRef;
    },
    /**
     * @desc 获取行数据
     */
    getRowData(rowIndex) {
      const dataSource = this.form[this.name];
      if (typeof rowIndex === 'number' && rowIndex < dataSource.length) {
        return dataSource[rowIndex];
      } else {
        return dataSource.find(item => item[this.rowKey] === rowIndex);
      }
    },
    /**
     * @desc 获取整个 table 的数据
     */
    getRowsData() {
      return this.form[this.name];
    },
    /**
     * @desc 设置一行的数据
     */
    setRowData(rowIndex, data) {
      const dataSource = this.form[this.name];
      if (typeof rowIndex === 'number' && rowIndex < dataSource.length) {
        console.log({
          ...dataSource[rowIndex],
          ...data
        });
        dataSource.splice(rowIndex, 1, {
          ...dataSource[rowIndex],
          ...data
        });
      } else {
        const index = dataSource.findIndex(item => item[this.rowKey] === rowIndex);
        if (index !== -1) {
          dataSource.splice(index, 1, {
            ...dataSource[index],
            ...data
          });
        }
      }
    },
    /**
     * @desc cellStyle
     */
    getCellStyle({
      row,
      column,
      rowIndex,
      columnIndex
    }, parentCellStyle) {
      const parentStyle = parentCellStyle?.({
        row,
        column,
        rowIndex,
        columnIndex
      });
      const childStyle = this.getStickyStyle(columnIndex, this.initializedColumns[columnIndex].fixed);
      if (typeof parentStyle === 'string') {
        let cellStyleString = '';
        cellStyleString += parentStyle + ';';
        if (childStyle) {
          const childStyleString = Object.entries(childStyle).map(([key, value]) => {
            return `${key}: ${value};`;
          });
          cellStyleString += childStyleString;
        }
        return cellStyleString;
      }
      if (parentStyle instanceof Object) {
        return {
          ...parentStyle,
          ...(childStyle || {})
        };
      }
      return childStyle;
    },
    /**
     * @desc 获取 sticky 的样式
     * @param {Number} index 下标
     * @param {String} fixed 固定位置
     */
    getStickyStyle(index, fixed) {
      const offset = this.calculateOffset.offset[index];
      if (offset !== undefined) {
        return {
          [fixed]: `${offset}px`
        };
      }
      return;
    }
  }
});
;// ./packages/editable-pro-table/src/index.vue?vue&type=script&lang=js
 /* harmony default export */ var editable_pro_table_srcvue_type_script_lang_js = (srcvue_type_script_lang_js); 
;// ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/editable-pro-table/src/index.vue?vue&type=style&index=0&id=b718f0f2&prod&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// ./packages/editable-pro-table/src/index.vue?vue&type=style&index=0&id=b718f0f2&prod&scoped=true&lang=css

;// ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/editable-pro-table/src/index.vue?vue&type=style&index=1&id=b718f0f2&prod&lang=css
// extracted by mini-css-extract-plugin

;// ./packages/editable-pro-table/src/index.vue?vue&type=style&index=1&id=b718f0f2&prod&lang=css

;// ./packages/editable-pro-table/src/index.vue



;



/* normalize component */

var src_component = normalizeComponent(
  editable_pro_table_srcvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "b718f0f2",
  null
  
)

/* harmony default export */ var editable_pro_table_src = (src_component.exports);
;// ./packages/editable-pro-table/index.js


// 为组件提供 install 方法
editable_pro_table_src.install = function (Vue) {
  Vue.component(editable_pro_table_src.name, editable_pro_table_src);
};

// 默认导出组件
/* harmony default export */ var editable_pro_table = (editable_pro_table_src);
;// ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (editable_pro_table);


module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=index.common.js.map