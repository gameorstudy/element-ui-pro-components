(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("element-pro/locale/en-US", ["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.ELEMENT_PRO = global.ELEMENT_PRO || {};
  global.ELEMENT_PRO.lang = elementProLocaleEnUS = mod.exports;
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
        reset: 'Reset',
        submit: 'Submit'
      },
      dialogForm: {
        cancel: 'Cancel',
        confirm: 'Confirm'
      },
      proTable: {
        expand: 'Expand',
        collapse: 'Collapse',
        search: 'Search',
        reset: 'Reset'
      },
      tableToolBar: {
        columnSetting: 'Settings',
        reset: 'Reset',
        columnDisplay: 'Column Display',
        leftPin: 'Pin to left',
        rightPin: 'Pin to right',
        noPin: 'Unpinned',
        leftFixedTitle: 'Fixed the left',
        rightFixedTitle: 'Fixed the right',
        noFixedTitle: 'Not Fixed'
      },
      editableProTable: {
        add: 'add a row of data',
        onlyAddOneLine: 'Only one line can be added',
        save: 'Save',
        delete: 'Delete',
        cancel: 'Cancel',
        deleteThisLine: 'Delete this line?',
        onlyOneLineEditor: 'Only one line can be edited'
      }
    }
  };
  module.exports = exports.default;
});