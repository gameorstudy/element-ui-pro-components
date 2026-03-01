### 快速开始

#### element-ui-pro-components
本项目是受 Ant Design Pro Components 的启发，旨在为 Vue 2 + Element UI 生态提供更高级别的模板组件，方便表单、表格功能开发。

#### 架构与组件总览

ProComponents 提供了一系列高级组件，覆盖了从布局到表单、表格的核心场景：

*   **ProForm** - 高级表单
*   **DialogForm** - 弹框表单
*   **ProTable** - 查询表格
*   **EditableProTable** - 可编辑表格

#### 前置条件

本组件库依赖以下库，请确保你的项目中已安装：

```json
{
 "peerDependencies": {
    "el-table-prepend": "^1.0.5",
    "element-ui": "^2.15.14",
    "vue": "^2.6.10",
    "vue-fragment": "^1.6.0"
  },
}
```

#### 安装

安装 element-ui-pro-components 库：

```bash
npm install element-ui-pro-components
```

#### 全量引入

```js
// main.js
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Fragment from 'vue-fragment'

import ElementUIPro from 'element-ui-pro-components'
import 'element-ui-pro-components/lib/style.css'

Vue.use(Fragment.Plugin)
Vue.use(ElementUI)
Vue.use(ElementUIPro)
```

### 按需引入

#### 1. 安装 babel 插件

```bash
npm install babel-plugin-component --save-dev
```

#### 2. 配置 babel.config.js

```js
module.exports = {
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui-pro-components',
        style: true
      },
      'element-ui-pro-components'  // 命名，防止多个 component 冲突
    ]
  ]
}
```

#### 效果
```js
import { ProTable } from 'element-ui-pro-components'

// 实际转换为：
import ProTable from 'element-ui-pro-components/lib/pro-table/index'
import 'element-ui-pro-components/lib/pro-table/style.css'
```

#### 3. 在 main.js 中引入

```js
// main.js
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Fragment from 'vue-fragment'

Vue.use(Fragment.Plugin)
Vue.use(ElementUI)
```

#### 4. 在页面中使用

```js
import { ProForm, DialogForm, ProTable, EditableProTable } from 'element-ui-pro-components'

export default {
  components: {
    ProForm,
    DialogForm,
    ProTable,
    EditableProTable
  }
}
```
