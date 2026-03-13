"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.use = exports.t = exports.i18n = exports.default = void 0;
var _vue = _interopRequireDefault(require("vue"));
var _zhCN = _interopRequireDefault(require("element-ui-pro-components/lib/locale/lang/zh-CN"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
let lang = _zhCN.default;
let i18nHandler = function () {
  const vuei18n = Object.getPrototypeOf(this || _vue.default).$t;
  if (typeof vuei18n === 'function') {
    return vuei18n.apply(this, arguments);
  }
};
const t = function (path) {
  // 去掉 options 参数
  // 优先使用自定义 handler
  if (i18nHandler) {
    const value = i18nHandler(path);
    if (value !== null && value !== undefined) {
      return value;
    }
  }

  // 用自己的语言包
  const array = path.split('.');
  let current = lang;
  for (let i = 0; i < array.length; i++) {
    const property = array[i];
    const value = current[property];
    if (i === array.length - 1) {
      return value || path;
    }
    if (!value) return path;
    current = value;
  }
  return path;
};
exports.t = t;
const use = function (l) {
  lang = l || lang;
};
exports.use = use;
const i18n = function (fn) {
  i18nHandler = fn;
};
exports.i18n = i18n;
var _default = exports.default = {
  use,
  t,
  i18n
};