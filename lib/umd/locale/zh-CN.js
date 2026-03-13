(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("element-pro/locale/zh-CN", ["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.ELEMENT_PRO = global.ELEMENT_PRO || {};
  global.ELEMENT_PRO.lang = elementProLocaleZhCN = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = {
    elPro: {
      proForm: {
        reset: '重置',
        submit: '提交'
      },
      dialogForm: {
        cancel: '取消',
        confirm: '确定'
      },
      proTable: {
        expand: '展开',
        collapse: '收起',
        search: '查询',
        reset: '重置'
      },
      tableToolBar: {
        columnSetting: '列设置',
        reset: '重置',
        columnDisplay: '列展示',
        leftPin: '固定在列首',
        rightPin: '固定在列尾',
        noPin: '不固定',
        leftFixedTitle: '固定在左侧',
        rightFixedTitle: '固定在右侧',
        noFixedTitle: '不固定'
      },
      editableProTable: {
        add: '添加一行数据',
        onlyAddOneLine: '只能新增一行',
        save: '保存',
        delete: '删除',
        cancel: '取消',
        deleteThisLine: '删除此项？',
        onlyOneLineEditor: '只能同时编辑一行'
      }
    }
  };
  module.exports = exports.default;
});