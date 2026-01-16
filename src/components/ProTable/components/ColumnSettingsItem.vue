<template>
  <div v-if="columns.length" class="column-setting-list">
    <div class="column-setting-list-title">{{ title }}</div>
    <div class="site-tree-list" :class="{ 'site-tree-list-draggable': canDraggable }" :draggable="canDraggable" v-for="column in columns" :key="column.prop">
      <span class="site-tree-draggable-icon">
        <span class="icon icon-holder">
          <HolderIcon />
        </span>
      </span>
      <span class="site-tree-switcher"></span>
      <el-checkbox :value="column.checked" @change="(checked) => handleChange(checked, column.prop)" :disabled="column.disabled">
        <span class="tree-node-content-wrapper">{{ column.label }}</span>
        <span class="icon-group">
          <template v-if="column.fixed !== 'left'">
            <span class="icon icon-vertical-align">
              <el-tooltip content="固定在列首" placement="top">
                <VerticalAlignTopIcon />
              </el-tooltip>
            </span>
          </template>
          <template v-if="column.fixed === 'left' || column.fixed === 'right'">
            <span class="icon icon-vertical-align">
              <el-tooltip content="不固定" placement="top">
                <VerticalAlginMiddleIcon />
              </el-tooltip>
            </span>
          </template>
          <template v-if="column.fixed !== 'right'">
            <span class="icon icon-vertical-align">
              <el-tooltip content="固定在列尾" placement="top">
                <VerticalAlginBottomIcon />
              </el-tooltip>
            </span>
          </template>
        </span>
      </el-checkbox>
    </div>
  </div>
</template>

<script>
  import HolderIcon from './svg/HolderIcon.vue';
  import VerticalAlignTopIcon from './svg/VerticalAlignTopIcon.vue';
  import VerticalAlginBottomIcon from './svg/VerticalAlginBottomIcon.vue';
  import VerticalAlginMiddleIcon from './svg/VerticalAlginMiddleIcon.vue';

  export default {
    name: 'ColumnSettingsItem',
    inject: ['onColumnSettingsChange'],
    components: {
      HolderIcon,
      VerticalAlignTopIcon,
      VerticalAlginMiddleIcon,
      VerticalAlginBottomIcon,
    },
    props: {
      // 列数据
      columns: {
        type: Array,
        default: () => []
      }
    },
    computed: {
      // 列类型
      title() {
        const { columns } = this
        if (Array.isArray(columns) && columns.length) {
          const fixed = columns[0].fixed
          return fixed === 'left' ? '固定在左侧' : fixed === 'right' ? '固定在右侧' : '不固定'
        }

        return ''
      },
      // 数组长度 > 1 可拖动
      canDraggable() {
        return this.columns?.length
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
        this.onColumnSettingsChange({ event: 'checked', checked, prop })
      }
    },
  }
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

.column-setting-popover .site-tree-list .el-checkbox {
  flex: 1;
}

.column-setting-popover .site-tree-list .el-checkbox__label {
  line-height: 24px;
  padding-left: 0;
  margin-left: 4px;
  padding: 0 4px;
  border-radius: 6px;
  box-sizing: border-box;
  width: calc(100% - 18px);
  transition: background-color 0.2s;
}

.column-setting-popover .site-tree-list .el-checkbox__label:hover {
  background-color: rgba(42, 46, 54, 0.04);
}

.column-setting-popover .site-tree-list .el-checkbox__label .icon-group {
  float: right;
  height: 24px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.column-setting-popover .site-tree-list .el-checkbox__label .icon-vertical-align {
  font-size: 14px;
  color: #1677FF;
  cursor: pointer;
  display: none;
  transition: display 0.2s;
}

.column-setting-popover .site-tree-list:hover .icon-vertical-align {
  display: inline-flex;
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
