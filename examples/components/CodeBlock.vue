<template>
  <div class="demo-code-block">
    <!-- 示例展示区 -->
    <div class="demo-show">
      <slot></slot>
    </div>
    
    <!-- 操作栏 -->
    <div class="demo-actions" @click="toggleExpand">
      <div class="action-left"></div>
      <div class="action-center">
        <i class="el-icon-arrow-down" :class="{ expanded: expand }"></i>
        {{ expand ? '隐藏代码' : '显示代码' }}
      </div>
      <div class="action-right">
        <el-button 
          v-if="expand" 
          type="text"
          @click.stop="copyCode"
          class="copy-btn"
          :class="{ 'copy-success': copySuccess }"
        >
          <i :class="copySuccess ? 'el-icon-success' : 'el-icon-document-copy'"></i>
          {{ copySuccess ? '复制成功' : '复制代码' }}
        </el-button>
      </div>
    </div>
    
    <!-- 代码展示区 -->
    <transition name="slide-fade">
      <div v-show="expand" class="demo-code">
        <pre><code class="hljs" v-html="highlightedCode" /></pre>
      </div>
    </transition>
  </div>
</template>

<script>
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
import 'highlight.js/lib/common'

export default {
  name: 'CodeBlock',
  props: {
    src: {
      type: String,
      required: true
    },
    language: {
      type: String,
      default: 'html'
    }
  },
  data() {
    return {
      expand: false,
      copySuccess: false,
      fileCode: ''
    }
  },
  computed: {
    displayCode() {
      return this.fileCode
    },
    highlightedCode() {
      if (!this.displayCode) return ''
      
      try {
        const result = hljs.highlightAuto(this.displayCode)
        return result.value
      } catch (err) {
        console.error('Highlight error:', err)
        return this.displayCode
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#039;')
      }
    }
  },
  created() {
    this.loadCodeFromFile()
  },
  methods: {
    loadCodeFromFile() {
      try {
        this.fileCode = require(`!!raw-loader!@examples/views/${this.src}`).default
      } catch (err) {
        console.error('加载代码文件失败:', err)
        this.fileCode = `// 加载失败: ${err.message}`
      }
    },
    
    toggleExpand() {
      this.expand = !this.expand
    },
    
    async copyCode() {
      try {
        await navigator.clipboard.writeText(this.displayCode)
        this.copySuccess = true
        this.$message({
          message: '复制成功',
          type: 'success',
          duration: 1500
        })
        setTimeout(() => {
          this.copySuccess = false
        }, 2000)
      } catch (err) {
        console.error('复制失败:', err)
        this.$message.error('复制失败')
      }
    },
  }
}
</script>

<style scoped>
.demo-code-block {
  margin: 20px 0;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  overflow: hidden;
}

.demo-show {
  padding: 20px;
  background: #ffffff;
}

.demo-actions {
  padding: 12px 20px;
  background: #f5f7fa;
  border-top: 1px solid #e4e7ed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: background-color 0.2s;
  height: 24px;
  line-height: 24px;
  min-height: 24px;
  max-height: 24px;
}

.demo-actions:hover {
  background-color: #ecf5ff;
}

.action-left {
  width: 80px;
}

.action-center {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: 4px;
  color: #409eff;
  font-size: 14px;
  height: 24px;
  line-height: 24px;
}

.action-right {
  width: 80px;
  text-align: right;
  height: 24px;
  line-height: 24px;
}

.copy-btn {
  cursor: pointer;
  position: relative;
  z-index: 1;
  height: 24px;
  line-height: 24px;
  padding: 0;
  font-size: 14px;
  transition: all 0.3s;
}

.copy-btn.copy-success {
  color: #67c23a;  /* Element UI 成功绿色 */
}

.copy-btn.copy-success i {
  color: #67c23a;
}

.demo-actions .el-icon-arrow-down {
  transition: transform 0.3s;
  font-size: 14px;
  color: #409eff;
  line-height: 24px;
}

.demo-actions .el-icon-arrow-down.expanded {
  transform: rotate(180deg);
}

.demo-code {
  background: #f8f8f8;
  max-height: 500px;
  overflow: auto;
  border-top: 1px solid #e4e7ed;
}

.demo-code pre {
  margin: 0;
  padding: 20px;
}

.demo-code code {
  font-family: 'SF Mono', Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  font-size: 14px;
  line-height: 1.5;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
  max-height: 0;
}

/* highlight.js 样式覆盖 */
:deep(.hljs) {
  background: transparent;
  padding: 0;
}

:deep(.hljs-tag),
:deep(.hljs-name),
:deep(.hljs-attr) {
  color: #3182bd;
}

:deep(.hljs-string) {
  color: #2e7d32;
}

:deep(.hljs-comment) {
  color: #999;
}

:deep(.hljs-keyword) {
  color: #708;
}
</style>
