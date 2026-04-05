const path = require("path")
const fs = require('fs');
const Components = require('../components.json');

const utilsList = fs.readdirSync(path.resolve(__dirname, '../src/utils'));
const externals = {};

Object.keys(Components).forEach(function(key) {
  externals[`element-ui-pro-components/packages/${key}`] = `element-ui-pro-components/lib/${key}`;
});

externals['element-ui-pro-components/src/locale'] = 'element-ui-pro-components/lib/locale';
utilsList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`element-ui-pro-components/src/utils/${file}`] = `element-ui-pro-components/lib/utils/${file}`;
});

exports.externals = {
  'el-table-prepend': 'el-table-prepend',
  'element-ui': 'element-ui',
  'vue': 'vue',
  'vue-fragment': 'vue-fragment',
  ...externals
}

exports.alias = {
  '@': path.resolve(__dirname, '../src'),
  'element-ui-pro-components': path.resolve(__dirname, '../')
}

exports.jsExclude = /node_modules\/(?!(element-ui)\/).*/