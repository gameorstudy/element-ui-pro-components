### 快速开始

### Element UI Pro Components
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
  "el-table-prepend": "^1.3.2",
  "element-ui": "^2.15.14",
  "vue": "^2.6.10",
  "vue-fragment": "^1.6.0"
}
```

#### 安装

安装 element-ui-pro-components 库：

```bash
npm install element-ui-pro-components
```

#### 完整引入
在 main.js 中写入以下内容：

```js
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Fragment from 'vue-fragment'
import ElementUIProComponents from 'element-ui-pro-components'
import 'element-ui-pro-components/lib/index.css'

Vue.use(Fragment.Plugin)
Vue.use(ElementUI)
Vue.use(ElementUIProComponents)
```

#### 按需引入

借助 babel-plugin-component，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：

```bash
npm install babel-plugin-component -D
```

然后，将 babel.config.js 修改为：

```js
module.exports = {
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui-pro-components",
        "style": true
      },
      'element-ui-pro-components'
    ]
  ]
}
```

#### 效果
```js
import { ProTable } from 'element-ui-pro-components'
↓ ↓ ↓ ↓ ↓ ↓
var ProTable = require('components/lib/pro-table')
require('components/lib/pro-table/style.css')
```

接下来，如果你只希望引入部分组件，比如 ProForm 和 ProTable，那么需要在 main.js 中写入以下内容：

```js
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Fragment from 'vue-fragment'
import { ProForm, EditableProTable } from 'element-ui-pro-components'

Vue.use(Fragment.Plugin)
Vue.use(ElementUI)
Vue.use(ProForm)
Vue.use(EditableProTable)
```

#### Homepage
[Homepage](https://gameorstudy.github.io/element-ui-pro-components/)

#### 注意
`el-table-prepend` 是在 `element-ui` 的 `table` 源码上添加了一个 `slot`，没有打包 `element-ui`，因此不支持 umd 打包。因此 `element-ui-pro-components` 也不支持 `umd` 打包。