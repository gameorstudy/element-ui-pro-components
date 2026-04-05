<template>
  <span class="icon-algin-group">
    <template v-if="column.fixed !== 'left'">
      <el-tooltip :content="t('elProComponents.tableToolBar.leftPin')" placement="top">
        <VerticalAlignTopIcon @click.native.stop.prevent="handleAlgin('left')" />
      </el-tooltip>
    </template>
    <template v-if="column.fixed === 'left' || column.fixed === 'right'">
      <el-tooltip :content="t('elProComponents.tableToolBar.noPin')" placement="top">
        <VerticalAlginMiddleIcon @click.native.stop.prevent="handleAlgin()" />
      </el-tooltip>
    </template>
    <template v-if="column.fixed !== 'right'">
      <el-tooltip :content="t('elProComponents.tableToolBar.rightPin')" placement="top">
        <VerticalAlginBottomIcon @click.native.stop.prevent="handleAlgin('right')" />
      </el-tooltip>
    </template>
  </span>
</template>

<script>
import VerticalAlignTopIcon from "./svg/VerticalAlignTopIcon"
import VerticalAlginBottomIcon from "./svg/VerticalAlginBottomIcon"
import VerticalAlginMiddleIcon from "./svg/VerticalAlginMiddleIcon"
import { t } from 'element-ui-pro-components/src/locale'

export default {
  name: "ColumnAlginSettings",
  inject: ["onColumnSettingsChange"],
  components: {
    VerticalAlignTopIcon,
    VerticalAlginMiddleIcon,
    VerticalAlginBottomIcon,
  },
  props: {
    // 单个列表项
    column: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    /**
     * @desc 支持国际化
     * @param key 
     */
    t(key) {
      return t(key)
    },
    /**
     * @desc 监听修改
     * @param {string | undefined} fixed 固定位置
     */
    handleAlgin(fixed) {
      const { prop } = this.column
      // ProTable provide 提供
      this.onColumnSettingsChange({ event: "align", prop, fixed })
    },
  },
};
</script>

<style scoped>
.icon-algin-group {
  margin-left: auto;
  align-items: center;
  gap: 8px;
  color: #1677ff;
  cursor: pointer;
  display: none;
  transition: display 0.2s;
}

.icon-algin-group svg {
  outline: none;
}
</style>
