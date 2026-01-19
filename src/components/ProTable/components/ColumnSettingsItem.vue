<template>
  <div v-if="columns.length" class="column-setting-list">
    <div class="column-setting-list-title">{{ title }}</div>
    <div
      class="site-tree-list"
      v-for="(column, index) in columns"
      :class="{
        'site-tree-list-draggable': draggable,
        dragging: draggingItemProp === column.prop,
      }"
      :draggable="draggable"
      :key="column.prop"
      @dragstart="(e) => onDragstart(e, column.prop, index)"
      @dragenter.prevent="(e) => onDragenter(e, column.prop, index)"
    >
      <span v-if="draggable" class="site-tree-draggable-icon">
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
          <!-- 头部插入 -->
          <!-- start -->
          <Transition name="fade">
            <div
              v-if="index === 0 && showHeadIndicator"
              class="site-tree-top-head-indicator"
            ></div>
          </Transition>
          <!-- end -->
          <!-- 尾部插入 -->
          <!-- start -->
          <Transition name="fade">
            <div
              v-if="targetItemProp === column.prop"
              class="site-tree-drop-indicator"
            ></div>
          </Transition>
          <!-- end -->
        </el-checkbox>
      </template>
      <template v-else>
        <span class="tree-node-algin-wrapper">
          <span class="tree-node-content-wrapper">{{ column.label }}</span>
          <ColumnAlignSettings :column="column" />
          <!-- 头部插入 -->
          <!-- start -->
          <Transition name="fade">
            <div
              v-if="index === 0 && showHeadIndicator"
              class="site-tree-top-head-indicator"
            ></div>
          </Transition>
          <!-- end -->
          <!-- 尾部插入 -->
          <!-- start -->
          <Transition name="fade">
            <div
              v-if="targetItemProp === column.prop"
              class="site-tree-drop-indicator"
            ></div>
          </Transition>
          <!-- end -->
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
      type: Object,
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
    draggable() {
      return this.columnSettings.draggable && this.columns?.length > 1;
    },
  },
  data() {
    return {
      draggingItemProp: "", // 当前拖动列的属性
      targetItemProp: "", // 释放目标列的属性
      showHeadIndicator: false, // 是否在头节点插入
    };
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
    /**
     * @desc 开始拖动
     * @param {Object} e 拖拽元素对象
     * @param {String} prop 属性
     * @param {Number} index 下标
     */
    onDragstart(e, prop, index) {
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.dropEffect = "move";
      e.dataTransfer.setData("from-index", index);
      this.draggingItemProp = prop;
    },
    /**
     * @desc 拖动进入到目标区域
     * @param {Object} e 拖拽元素对象
     * @param {String} prop 属性
     * @param {Number} toIndex 下标
     */
    onDragenter(e, prop, toIndex) {
      // ***参数是在事件绑定时确定的 而不是在事件触发时***

      // 拖动开始的下标
      if (this.draggingItemProp === prop) {
        this.targetItemProp = null
        return;
      }

      // 1. 获取元素的位置和尺寸
      const rect = e.target.getBoundingClientRect();

      // 2. 获取鼠标相对于元素的位置
      const relativeY = e.clientY - rect.top;

      // 3. 判断光标在释放目标位置的上半还是下半
      const cursorPos = relativeY < rect.height / 2 ? "top" : "bottom";

      // 4. 判断当前拖拽的方向
      const fromIndex = this.columns.findIndex(item => item.prop === this.draggingItemProp)
      const dragDirection = fromIndex < toIndex ? "down" : "up";
      
      // 5. 光标在释放目标位置上半 则在释放目标位置上方插入
      //    光标在释放目标位置下半 则在释放目标位置下方插入
      this.showHeadIndicator = false // 需要在 drop 事件执行
      if (cursorPos === 'top') {
        if (toIndex === 0) {
          // 这里有点特殊 因为如果释放元素是下标为 0 时 需要在最上方显示插入标志
          this.targetItemProp = null
          this.showHeadIndicator = true
        } else {
          if (dragDirection === 'down' && fromIndex === toIndex - 1) {
            // 考虑到向下拖动的上一个位置可能是开始拖动的元素
            this.targetItemProp = null
          } else {
            this.targetItemProp = this.columns[toIndex - 1].prop
          }
        }
      } else {
        if (dragDirection === 'up' && fromIndex === toIndex + 1) {
          // 考虑到向上拖动的下一个位置可能是开始拖动的元素
          this.targetItemProp = null
        } else {
          this.targetItemProp = prop
        }
      }
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

.column-setting-popover .dragging {
  position: relative;
}

.column-setting-popover .dragging::after {
  position: absolute;
  top: 0;
  inset-inline-end: 0;
  bottom: 4px;
  inset-inline-start: 0;
  border: 1px solid #1677ff;
  opacity: 0;
  animation-name: show;
  animation-duration: 0.3s;
  animation-play-state: running;
  animation-fill-mode: forwards;
  content: "";
  pointer-events: none;
}

.column-setting-popover .dragging .el-checkbox__label,
.column-setting-popover .dragging .tree-node-algin-wrapper {
  background: #e3f0ff;
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
  position: relative;
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

.column-setting-popover .site-tree-drop-indicator,
.column-setting-popover .site-tree-top-head-indicator {
  width: calc(100% - 4px);
  height: 2px;
  background-color: #1677ff;
  border-radius: 1px;
  pointer-events: none;
  position: absolute;
  z-index: 1;
  bottom: -3px;
}

.column-setting-popover .site-tree-top-head-indicator {
  top: 0;
}

.column-setting-popover .site-tree-top-head-indicator::before,
.column-setting-popover .site-tree-drop-indicator::after {
  position: absolute;
  left: 0;
  top: -3px;
  inset-inline-start: -6px;
  width: 8px;
  height: 8px;
  background-color: transparent;
  border: 2px solid #1677ff;
  border-radius: 50%;
  content: "";
  box-sizing: border-box;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@keyframes show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
