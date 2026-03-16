### Changelog

#### v1.3.2 - 2026-03-13

#### 🚀 新特性
支持国际化

#### 🛠 优化
- EditableProTable 编辑时删除按钮确认组件由 el-popover 替换成了 el-popconfirm

- EditableProTable 调整表格间距

- ProTable 列展示和重置按钮没有垂直居中

- ProTable 查询表单去掉 padding

#### 🐛🩹 - Bug Fixed
- ProTable
列设置拖动排序异常

#### 📝 文档
- DialogForm
API 修改

| 旧属性 | 新属性 | description |
|--------|--------|------|
| submitterProps.submitText | submitterProps.confirmText | 确定按钮文本 |
| submitterProps.submitButtonProps | submitterProps.confirmButtonProps | 确定按钮属性 |

- ProTable
API 修改

| 旧属性 | 新属性 | description |
|--------|--------|------|
| columnSettingsConfig.settingText | columnSettingsConfig.columnSetting | 列设置文本 |

新增 API

| 新属性 | description |
|--------|------|
| columnSettingsConfig.columnDisplay | 列展示文本 |

#### 🔧 废弃
- DialogForm

| 属性 | description |
|--------|------|
| submitterProps.submitText | 确定按钮文本 |
| submitterProps.submitButtonProps| 确定按钮属性 |

- ProTable

| 属性 | description |
|--------|------|
| columnSettingsConfig.settingText | 列设置文本 |


