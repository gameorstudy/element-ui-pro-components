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
/******/ 	var __webpack_modules__ = ({

/***/ 632:
/***/ (function(module) {



function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (a) {
    for (var b, c = 1; c < arguments.length; c++) for (var d in b = arguments[c], b) Object.prototype.hasOwnProperty.call(b, d) && (a[d] = b[d]);
    return a;
  }, _extends.apply(this, arguments);
}
var normalMerge = ["attrs", "props", "domProps"],
  toArrayMerge = ["class", "style", "directives"],
  functionalMerge = ["on", "nativeOn"],
  mergeJsxProps = function (a) {
    return a.reduce(function (c, a) {
      for (var b in a) if (!c[b]) c[b] = a[b];else if (-1 !== normalMerge.indexOf(b)) c[b] = _extends({}, c[b], a[b]);else if (-1 !== toArrayMerge.indexOf(b)) {
        var d = c[b] instanceof Array ? c[b] : [c[b]],
          e = a[b] instanceof Array ? a[b] : [a[b]];
        c[b] = [].concat(d, e);
      } else if (-1 !== functionalMerge.indexOf(b)) {
        for (var f in a[b]) if (c[b][f]) {
          var g = c[b][f] instanceof Array ? c[b][f] : [c[b][f]],
            h = a[b][f] instanceof Array ? a[b][f] : [a[b][f]];
          c[b][f] = [].concat(g, h);
        } else c[b][f] = a[b][f];
      } else if ("hook" === b) for (var i in a[b]) c[b][i] = c[b][i] ? mergeFn(c[b][i], a[b][i]) : a[b][i];else c[b] = a[b];
      return c;
    }, {});
  },
  mergeFn = function (a, b) {
    return function () {
      a && a.apply(this, arguments), b && b.apply(this, arguments);
    };
  };
module.exports = mergeJsxProps;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/dialog-form/src/index.vue?vue&type=template&id=7c2048c2&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('el-dialog', _vm._g(_vm._b({
    attrs: {
      "visible": _vm.dialogVisible
    },
    on: {
      "update:visible": function ($event) {
        _vm.dialogVisible = $event;
      }
    },
    scopedSlots: _vm._u([_vm.renderTitle ? {
      key: "title",
      fn: function () {
        return [_c('CustomRender', {
          attrs: {
            "render": () => _vm.renderTitle(_vm.form)
          }
        })];
      },
      proxy: true
    } : null, _vm.submitter ? {
      key: "footer",
      fn: function () {
        return [_vm.submitter.customRender ? [_c('Submitter', {
          attrs: {
            "submitter": _vm.submitterProps,
            "action": {
              submit: _vm.submit,
              close: _vm.close,
              reset: _vm.reset,
              resetAllFields: _vm.resetAllFields
            },
            "render": (action, doms) => _vm.submitter.customRender(_vm.form, action, doms)
          }
        })] : [_c('span', {
          staticClass: "dialog-form-footer"
        }, [_c('el-button', _vm._b({
          on: {
            "click": _vm.close
          }
        }, 'el-button', _vm.submitterProps.cancelButtonProps, false), [_vm._v(_vm._s(_vm.submitterProps.cancelText))]), _c('el-button', _vm._b({
          attrs: {
            "type": "primary"
          },
          on: {
            "click": _vm.submit
          }
        }, 'el-button', _vm.submitterProps.submitButtonProps, false), [_vm._v(_vm._s(_vm.submitterProps.submitText))])], 1)]];
      },
      proxy: true
    } : null], null, true)
  }, 'el-dialog', _vm.normalizedDialogProps, false), _vm.normalizedDialogEvents), [_c('el-form', _vm._b({
    ref: "dialogFormRef",
    staticClass: "pro-form",
    class: _vm.className,
    attrs: {
      "model": _vm.form
    }
  }, 'el-form', _vm.formProps, false), [_vm.grid ? [_c('el-row', _vm._b({}, 'el-row', _vm.rowProps, false), _vm._l(_vm.normalizedFormItems, function (formItem) {
    return _c('el-col', _vm._b({
      key: formItem.prop ?? _vm.getUID()
    }, 'el-col', formItem.colProps, false), [formItem.customSlot ? _vm._t(formItem.customSlot === true ? formItem.prop : formItem.customSlot, null, null, {
      form: _vm.form
    }) : formItem.renderFormItem ? _c('CustomRender', {
      attrs: {
        "render": () => formItem.renderFormItem(_vm.form)
      }
    }) : _c('ProFormItem', {
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
    })], 2);
  }), 1)] : [_vm._l(_vm.normalizedFormItems, function (formItem) {
    return [formItem.customSlot ? _vm._t(formItem.customSlot === true ? formItem.prop : formItem.customSlot, null, null, {
      form: _vm.form
    }) : formItem.renderFormItem ? _c('CustomRender', {
      attrs: {
        "render": () => formItem.renderFormItem(_vm.form)
      }
    }) : _c('ProFormItem', {
      key: formItem.prop ?? _vm.getUID(),
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
    })];
  })]], 2)], 1);
};
var staticRenderFns = [];

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
// EXTERNAL MODULE: ./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js
var helper = __webpack_require__(632);
var helper_default = /*#__PURE__*/__webpack_require__.n(helper);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/dialog-form/src/components/Submitter.vue?vue&type=script&lang=js

/* harmony default export */ var Submittervue_type_script_lang_js = ({
  name: 'Submitter',
  props: {
    render: {
      type: Function,
      required: true
    },
    submitter: {
      type: Object,
      required: true
    },
    action: {
      type: Object,
      required: true
    }
  },
  render: function (h) {
    const {
      submitter: {
        cancelText,
        submitText,
        cancelButtonProps,
        submitButtonProps
      },
      action: {
        close,
        submit
      }
    } = this;
    // 非原生属性需要放到 props 里，测试是 vue 解析 jsx 的原因
    const cancelProps = {
      props: cancelButtonProps,
      cancelButtonProps
    };
    const submitProps = {
      props: submitButtonProps,
      submitButtonProps
    };
    const doms = [h("el-button", helper_default()([{}, cancelProps, {
      "on": {
        "click": close
      },
      "key": 'close'
    }]), [cancelText]), h("el-button", helper_default()([{
      "attrs": {
        "type": "primary"
      }
    }, submitProps, {
      "on": {
        "click": submit
      },
      "key": 'submit'
    }]), [submitText])];
    return h("Fragment", [this.render(this.action, doms)]);
  }
});
;// ./packages/dialog-form/src/components/Submitter.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Submittervue_type_script_lang_js = (Submittervue_type_script_lang_js); 
;// ./packages/dialog-form/src/components/Submitter.vue
var Submitter_render, Submitter_staticRenderFns
;



/* normalize component */
;
var Submitter_component = normalizeComponent(
  components_Submittervue_type_script_lang_js,
  Submitter_render,
  Submitter_staticRenderFns,
  false,
  null,
  "6996c191",
  null
  
)

/* harmony default export */ var Submitter = (Submitter_component.exports);
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
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/dialog-form/src/index.vue?vue&type=script&lang=js





/* harmony default export */ var srcvue_type_script_lang_js = ({
  name: 'DialogForm',
  model: {
    prop: 'visible',
    event: 'close'
  },
  components: {
    CustomRender: custom_render,
    ProFormItem: pro_form_item,
    Submitter: Submitter
  },
  props: {
    // 是否打开弹框
    visible: {
      type: Boolean,
      default: false
    },
    // 弹框的标题
    title: {
      type: String
    },
    // 自定义弹框标题
    renderTitle: {
      type: Function
    },
    // 弹框的宽度
    width: {
      type: String
    },
    // el-dialog attributes 的配置
    dialogProps: {
      type: Object,
      default: () => ({})
    },
    // el-dialog events 的配置
    dialogEvents: {
      type: Object,
      default: () => ({})
    },
    // el-form attributes 的配置
    formProps: {
      type: Object,
      default: () => ({})
    },
    // el-form 的类名
    className: {
      type: String
    },
    // 表单项配置
    formItems: {
      type: Array,
      required: true,
      default: () => []
    },
    // 提交按钮相关配置
    submitter: {
      type: [Boolean, Object],
      default: true
    },
    // 开启栅格化模式
    grid: {
      type: Boolean
    },
    // 开启 grid 模式时传递给 el-row
    rowProps: {
      type: Object,
      default: () => ({
        gutter: 8
      })
    },
    // 表单默认值
    initialValues: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    // 标准化 dialog props
    normalizedDialogProps() {
      const {
        title,
        width,
        dialogProps = {}
      } = this;
      const customClass = dialogProps['custom-class'];
      return {
        ...dialogProps,
        'custom-class': customClass ? `${customClass} dialog-form` : 'dialog-form',
        visible: undefined,
        // 阻止绑定
        title,
        width
      };
    },
    // 标准化 dialog events
    normalizedDialogEvents() {
      const {
        dialogEvents,
        close
      } = this;
      const originalClose = dialogEvents.close;
      // 包装以下 close 方法，确保执行 close 方法
      if (originalClose) {
        dialogEvents.close = () => {
          originalClose();
          close();
        };
        return {
          ...dialogEvents
        };
      }
      return {
        close
      };
    },
    // formItems 标准化处理
    normalizedFormItems() {
      return this.formItems
      // 过滤隐藏项
      .filter(item => !item.hideInForm).map(item => {
        const {
          valueType,
          fieldProps = {}
        } = item;
        // 设置 placeholder
        setPlaceholder(fieldProps, valueType);

        // 设置 select options
        setSelectOptions(item, this.cachedOptions);

        // 设置 cascader options
        setCascaderOptions(fieldProps, item, this.cachedOptions);
        return {
          ...item,
          fieldProps
        };
      });
    },
    // submitter 标准化处理
    submitterProps() {
      if (this.submitter) {
        // 配置按钮文本
        const defaultTextConfig = {
          cancelText: '取消',
          submitText: '确定'
        };

        // 对象类型
        if (typeof this.submitter === 'object') {
          return {
            ...defaultTextConfig,
            ...this.submitter
          };
        }

        // 返回默认配置
        return {
          ...defaultTextConfig
        };
      }
      return false;
    }
  },
  data() {
    return {
      dialogVisible: false,
      // 是否打开弹框
      cachedOptions: {},
      // 下拉数据 { [prop]: res }
      form: this.initForm() // 表单数据
    };
  },
  watch: {
    // 监听 visible
    visible: {
      handler(newValue) {
        this.dialogVisible = newValue;
      },
      immediate: true
    }
  },
  created() {
    // 获取异步数据
    this.getOptions();
  },
  methods: {
    /**
     * @desc 获取异步下拉数据
     */
    getOptions() {
      for (const item of this.formItems) {
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
     * @desc 初始化表单数据
     */
    initForm() {
      const {
        formItems,
        initialValues
      } = this;
      const data = formItems.reduce((accu, cur) => {
        const {
          prop,
          initialValue
        } = cur;
        if (!prop) {
          return accu;
        }
        return {
          ...accu,
          [prop]: initialValue
        };
      }, {});
      return {
        ...initialValues,
        ...data
      };
    },
    /**
     * @desc 获取 el-form ref
     * @returns {Object}
     */
    getFormRef() {
      return this.$refs.dialogFormRef;
    },
    /**
     * @desc 获取表单数据
     * @returns {Object}
     */
    getForm() {
      return this.form;
    },
    /**
     * @desc 手动更新表单数据
     * @param {Object} data 数据
     */
    setFieldsValue(data) {
      this.form = {
        ...this.form,
        ...data
      };
    },
    /**
     * @desc 手动更新单个字段数据
     * @param {String} key 键
     * @param {any} value 值
     */
    setFieldValue(key, value) {
      this.form[key] = value;
    },
    /**
     * @desc Dialog 关闭的回调
     */
    close() {
      this.$emit('close', false);
    },
    /**
     * @desc 提交
     */
    submit() {
      this.$refs.dialogFormRef?.validate((valid, object) => {
        if (valid) {
          // 回传给父组件
          this.$emit('onFinish', this.form);
          return;
        }

        // 回传给父组件
        this.$emit('onError', object);
      });
    },
    /**
     * @desc 重置
     */
    async reset() {
      try {
        await this.$refs.dialogFormRef?.resetFields();
        // 回传给父组件
        this.$emit('onReset');
      } catch (err) {
        console.error('err', err);
      }
    },
    /**
     * @desc 重置表单的拓展方法，过滤了非表单项的字段
     */
    resetAllFields() {
      // 清除校验
      this.$refs.dialogFormRef?.clearValidate();
      // 重置数据
      this.form = this.initForm();
    },
    /**
     * @desc 获取 uid
     */
    getUID() {
      return generateCryptoUID();
    }
  }
});
;// ./packages/dialog-form/src/index.vue?vue&type=script&lang=js
 /* harmony default export */ var dialog_form_srcvue_type_script_lang_js = (srcvue_type_script_lang_js); 
;// ./packages/dialog-form/src/index.vue





/* normalize component */
;
var src_component = normalizeComponent(
  dialog_form_srcvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "7c2048c2",
  null
  
)

/* harmony default export */ var dialog_form_src = (src_component.exports);
;// ./packages/dialog-form/index.js


// 为组件提供 install 方法
dialog_form_src.install = function (Vue) {
  Vue.component(dialog_form_src.name, dialog_form_src);
};

// 默认导出组件
/* harmony default export */ var dialog_form = (dialog_form_src);
;// ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (dialog_form);


/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.umd.js.map