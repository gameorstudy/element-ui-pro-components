<template>
  <div v-if="columns.length" class="column-settings-item-list">
    <div class="title">{{ title }}</div>
    <div ref="dragDropZoneRef" class="drag-drop-zone">
      <div 
        class="column-settings-item"
        v-for="(column, index) in columns"
        :class="{ draggable, dragging: dragIndex === index}"
        :draggable="draggable"
        @dragstart="(e) => onDragstart(e, index)"
        @dragenter.prevent="onDragenter"
        @dragover.prevent="(e) => onDragover(e, index)"
        @dragleave="onDragleave"
        @drop="(e) => onDrop(e, index)"
        @dragend="onDragend"
        :key="column.prop"  
      >
        <span v-if="draggable" class="icon icon-holder">
          <HolderIcon />
        </span>
        <span class="switcher"></span>
        <component 
          :is="dynamicComponent"
          v-bind="dynamicComponent === 'el-checkbox' 
            ? { value: column.checkable, disabled: column.disabled } 
            : { class: 'text-wrapper' }"
          v-on="dynamicComponent === 'el-checkbox'
            ? { change: (checked) => handleChange(checked, column.prop) }
            : {}"
        >
          <span class="label">{{ column.label }}</span>
          <ColumnAlignSettings :column="column" />
          <!-- 拖拽指示元素 -->
          <!-- start -->
            <!-- ::before 伪元素 -->
            <!-- start -->
            <div v-if="index === 0 && dropIndex === index" class="indicator head-indicator"></div>
            <!-- end -->
            <!-- ::after 伪元素 -->
            <!-- start -->
            <div v-else-if="dropIndex === index + 1" class="indicator tail-indicator"></div>
            <!-- end -->
          <!-- end -->
        </component>
      </div>
    </div>
  </div>
</template>

<script>
import HolderIcon from './svg/HolderIcon'
import ColumnAlignSettings from './ColumnAlignSettings'
import { t } from 'element-ui-pro-components/src/locale'

export default {
  name: 'ColumnSettingsItem',
  components: {
    HolderIcon,
    ColumnAlignSettings
  },
  inject: ["onColumnSettingsChange"],
  props: {
    // 列表项
    columns: {
      type: Array,
      required: true,
      default: () => []
    },
    // 列设置
    columnSettings: {
      type: Object,
    },
  },
  computed: {
    // 列类型
    title() {
      const { columns } = this
      if (Array.isArray(columns) && columns.length) {
        const fixed = columns[0].fixed
        return fixed === "left"
          ? t('elProComponents.tableToolBar.leftFixedTitle')
          : fixed === "right"
          ? t('elProComponents.tableToolBar.rightFixedTitle')
          : t('elProComponents.tableToolBar.noFixedTitle')
      }

      return ""
    },
    // 是否支持拖动
    draggable() {
      return this.columnSettings.draggable && this.columns?.length > 1
    },
    // 动态组件
    dynamicComponent() {
      return this.columnSettings.checkable ? 'el-checkbox' : 'span'
    },
  },
  data() {
    return {
      dragIndex: -1, // 开始拖动目标的下标
      dropIndex: -1, // 可释放目标的下标
    }
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
     * @desc 获取光标位置
     * @param {Object} e
     * @returns {String} top | bottom
     */
    getCursorPos(e) {
      // 1. 获取元素的位置和尺寸
      const rect = e.target.getBoundingClientRect()

      // 2. 获取鼠标相对于元素的位置
      const relativeY = e.clientY - rect.top

      // 3. 判断光标在释放目标位置的上半还是下半
      const cursorPos = relativeY < rect.height / 2 ? "top" : "bottom"

      return cursorPos      
    },
    /**
     * @desc 获取释放位置下标
     * @param {Object} e
     * @param {Number} dropIndex 释放目标的下标
     */
    getDropIndex(e, dropIndex) {
      // 获取光标位置
      const cursorPos = this.getCursorPos(e)
      
      // 光标在释放目标位置上半 则在释放目标位置上方插入
      // 光标在释放目标位置下半 则在释放目标位置下方插入
      const targetDropIndex = cursorPos === 'top' ? dropIndex : dropIndex + 1

      // 当前拖拽的方向
      const dragDirection = this.dragIndex < dropIndex ? "down" : "up"
      
      // 释放位置 = 开始拖拽位置
      if (targetDropIndex === this.dragIndex) {
        return -1
      }

      // 拖拽方向：down && 相邻 则说明位置不变
      const isNear = Math.abs(targetDropIndex - this.dragIndex) === 1
      if (isNear && dragDirection === 'down') {
        return -1
      }

      return targetDropIndex
    },
    /**
     * @desc 开始拖动
     * @param {Object} e 拖拽元素对象
     * @param {Number} index 下标
     */
    onDragstart(e, index) {
      e.dataTransfer.effectAllowed = "move"
      e.dataTransfer.dropEffect = "move"
      this.dragIndex = index
    },
    /**
     * @desc 拖入到释放目标
     * @param {Object} e 拖拽元素对象
     */
    onDragenter(e) {
      if (this.dragIndex === -1) {
        // 其它拖拽区域
        e.dataTransfer.dropEffect = 'none'
      } else {
        e.dataTransfer.dropEffect = 'move'
      }
    },
    /**
     * @desc 拖拽到释放目标上
     * @param {Object} e 释放目标对象
     * @param {Number} dropIndex 下标
     */
    onDragover(e, dropIndex) {
      // ***参数是在事件绑定时确定的 而不是在事件触发时***

      // 如果拖动到其它列 
      if (this.dragIndex < 0) {
        e.dataTransfer.dropEffect = 'none'
        return
      }

      // 释放目标是开始拖动目标 则退出
      if (this.dragIndex === dropIndex) {
        this.dropIndex = -1
        return
      }

      // 获取释放位置下标
      this.dropIndex = this.getDropIndex(e, dropIndex)
    },
    /**
     * @desc 离开可释放目标
     */
    onDragleave(e) {
      const dragDropZoneRef = this.$refs.dragDropZoneRef
      // 是否在列表区域内
      if (dragDropZoneRef.contains(e.relatedTarget)) {
        return
      }

      this.dropIndex = -1
    },
    /**
     * @desc 释放目标停止拖拽
     * @param {Object} e 释放目标对象
     * @param {Number} dropIndex 释放的下标
     */
    onDrop(e, dropIndex) {
      if (this.dragIndex === dropIndex) {
        this.dropIndex = -1
        return
      }

      // 获取释放位置下标
      const index = this.getDropIndex(e, dropIndex)
      if (index > -1) {
        const { columns } = this
        const fromProp = columns[this.dragIndex].prop
        // 是否拖拽到最后一列
        const isAfter = index === this.columns.length
        const toProp = isAfter ? columns[index - 1].prop : columns[index].prop
        // ProTable provide 提供
        this.onColumnSettingsChange({ event: 'drop', fromProp, toProp, isAfter })
      }
    },
    /**
     * @desc 结束拖拽
     */
    onDragend() {
      // 重置
      this.dragIndex = -1
      this.dropIndex = -1
    }
  }
}
</script>

<style lang="less" scoped>
.column-settings-item-list {
   > .title {
    margin-block-start: 6px;
    margin-block-end: 6px;
    padding-inline-start: 24px;
    color: rgba(42, 46, 54, 0.65);
    font-size: 12px;
  }

  .column-settings-item {
    display: flex;
    align-items: center;
    padding: 0 0 4px 0;
    outline: none;
    color: rgba(42, 46, 54, 0.88);

    &.draggable {
      cursor: grab;
    }

    &.dragging {
      position: relative;

      &::after {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        bottom: 4px;
        inset-inline-start: 0;
        border: 1px solid #1677ff;
        opacity: 0;
        animation-name: fade;
        animation-duration: 0.3s;
        animation-play-state: running;
        animation-fill-mode: forwards;
        content: "";
        pointer-events: none;
      }
    }

    .indicator {
      width: calc(100% - 4px);
      height: 2px;
      background-color: #1677ff;
      border-radius: 1px;
      pointer-events: none;
      position: absolute;
      z-index: 1;
      bottom: -3px;

      &.head-indicator {
        top: 0;
      }

      &::before,
      &::after {
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
    }

    .icon-holder {
      flex-shrink: 0;
      width: 24px;
      line-height: 24px;
      text-align: center;
      visibility: visible;
      opacity: 0.2;
      transition: opacity 0.3s;
    }

    .switcher {
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

    ::v-deep .el-checkbox,
    .text-wrapper {
      flex: 1;
    }

    ::v-deep .el-checkbox__label,
    .text-wrapper {
      display: inline-flex;
      padding: 0 4px;
      line-height: 24px;
      border-radius: 6px;
      box-sizing: border-box;
      transition: background-color 0.2s;
      position: relative;
    }

    ::v-deep .el-checkbox__label {
      width: calc(100% - 18px);
      margin-left: 4px;
    }

    ::v-deep .label {
      display: inline-block;
      max-width: 80px;
      text-overflow: ellipsis;
      overflow: hidden;
      word-break: break-all;
      white-space: nowrap;

      &:empty::before {
        content: '\00a0';
      }
    }

    &:hover {
      ::v-deep .el-checkbox__label,
      .text-wrapper {
        background: rgba(42, 46, 54, 0.04);
      }

      .icon-algin-group {
        display: inline-flex;
      }
    }
  }
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
