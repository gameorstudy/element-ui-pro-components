<template>
  <div v-if="columns.length" class="column-setting-list">
    <div class="column-setting-list-title">{{ title }}</div>
    <div
      class="site-tree-list"
      :class="{ 'site-tree-list-draggable': canDraggable }"
      :draggable="canDraggable"
      v-for="column in columns"
      :key="column.prop"
    >
      <span class="site-tree-draggable-icon">
        <span class="icon icon-holder">
          <HolderIcon />
        </span>
      </span>
      <span class="site-tree-switcher"></span>
      <template v-if="columnSettings.checkable">
        <el-checkbox
          :value="column.checked"
          @change="(checked) => handleChange(checked, column.prop)"
          :disabled="column.disabled"
        >
          <span class="tree-node-content-wrapper">{{ column.label }}</span>
          <ColumnAlignSettings :column="column" />
        </el-checkbox>
      </template>
      <template v-else>
        <span class="tree-node-algin-wrapper">
          <span class="tree-node-content-wrapper">{{ column.label }}</span>
          <ColumnAlignSettings :column="column" />
        </span>
      </template>
    </div>
  </div>
</template>

<script>
import HolderIcon from "./svg/HolderIcon.vue";
import ColumnAlignSettings from "./ColumnAlignSettings.vue";

export default {
  name: "ColumnSettingsItem",
  inject: ["onColumnSettingsChange"],
  components: {
    HolderIcon,
    ColumnAlignSettings,
  },
  props: {
    // 列数据
    columns: {
      type: Array,
      default: () => [],
    },
    // 列设置
    columnSettings: {
      type: [Boolean, Object],
      default: true,
    },
  },
  computed: {
    // 列类型
    title() {
      const { columns } = this;
      if (Array.isArray(columns) && columns.length) {
        const fixed = columns[0].fixed;
        return fixed === "left"
          ? "固定在左侧"
          : fixed === "right"
          ? "固定在右侧"
          : "不固定";
      }

      return "";
    },
    // 数组长度 > 1 可拖动
    canDraggable() {
      return this.columns?.length > 1;
    },
  },
  methods: {
    /**
     * @desc 监听修改
     * @param {Boolean} checked 状态
     * @param {String} prop 属性
     */
    handleChange(checked, prop) {
      // ProTable provide 提供
      this.onColumnSettingsChange({ event: "check", checked, prop });
    },
  },
};
</script>

<style>
.column-setting-popover .column-setting-list-title {
  margin-block-start: 6px;
  margin-block-end: 6px;
  padding-inline-start: 24px;
  color: rgba(42, 46, 54, 0.65);
  font-size: 12px;
}

.column-setting-popover .site-tree-list {
  display: flex;
  align-items: center;
  padding: 0 0 4px 0;
  outline: none;
  color: rgba(42, 46, 54, 0.88);
}

.column-setting-popover .site-tree-list-draggable {
  cursor: grab;
}

.column-setting-popover .site-tree-draggable-icon {
  flex-shrink: 0;
  width: 24px;
  line-height: 24px;
  text-align: center;
  visibility: visible;
  opacity: 0.2;
  transition: opacity 0.3s;
}

.column-setting-popover .icon-holder {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

.column-setting-popover .site-tree-switcher {
  position: relative;
  flex: none;
  align-self: stretch;
  width: 24px;
  margin: 0;
  line-height: 24px;
  text-align: center;
  cursor: unset;
  user-select: none;
  transition: all 0.3s;
  border-radius: 6px;
}

.column-setting-popover .site-tree-list .tree-node-algin-wrapper {
  width: 100%;
  display: inline-block;
}

.column-setting-popover .site-tree-list .el-checkbox {
  flex: 1;
}

.column-setting-popover .site-tree-list .el-checkbox__label {
  width: calc(100% - 18px);
}

.column-setting-popover .site-tree-list .el-checkbox__label,
.column-setting-popover .site-tree-list .tree-node-algin-wrapper {
  line-height: 24px;
  padding-left: 0;
  margin-left: 4px;
  padding: 0 4px;
  border-radius: 6px;
  box-sizing: border-box;
  transition: background-color 0.2s;
}

.column-setting-popover .site-tree-list .el-checkbox__label:hover,
.column-setting-popover .site-tree-list .tree-node-algin-wrapper:hover {
  background-color: rgba(42, 46, 54, 0.04);
}

.column-setting-popover .site-tree-list .icon-group {
  float: right;
  height: 24px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.column-setting-popover .site-tree-list .icon-vertical-align {
  font-size: 14px;
  color: #1677ff;
  cursor: pointer;
  display: none;
  transition: display 0.2s;
}

.column-setting-popover .site-tree-list:hover .icon-vertical-align {
  display: inline-flex;
}

.column-setting-popover .site-tree-list:hover .icon-vertical-align svg {
  outline: none;
}

.column-setting-popover .tree-node-content-wrapper {
  display: inline-flex;
  max-width: 80px;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
  white-space: nowrap;
}
</style>
