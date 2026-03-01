<!-- docs/.vuepress/components/DemoIframe.vue -->
<template>
  <client-only>
    <iframe 
      :src="src"
      ref="iframe"
      width="100%"
      frameborder="0"
      allow="clipboard-write"
      :style="{ height: height + 'px' }"
    ></iframe>
  </client-only>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      height: 300
    }
  },
  mounted() {
    // 监听 iframe 发来的消息
    window.addEventListener('message', this.handleIframeMessage)
    
    // 加载 iframe-resizer（如果你在用）
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/iframe-resizer@4.3.2/js/iframeResizer.min.js'
    script.onload = this.initResizer
    document.head.appendChild(script)
  },
  methods: {
    initResizer() {
      // 确保 iframe 已经加载完成
      this.$refs.iframe.onload = () => {
        // 使用全局的 iFrameResize 函数
        window.iFrameResize({
          log: false,
          autoResize: true,
          checkOrigin: false,
          license: 'GPLv3',  // 告诉库你在开源项目中使用
          heightCalculationMethod: 'lowestElement',  // 用最敏感的计算方式
          interval: 100,  // 缩短轮询间隔到 100ms
          enablePublicMethods: true,
          // 开启对 fixed 元素的检测
          tolerance: 5,
          onResized: (data) => {
            // 内容完全显示后，再加 20px 的缓冲
            this.height = Number(data.height) + 20
          }
        }, this.$refs.iframe)
      }
    },
    handleIframeMessage(event) {
      const data = event.data
      
      if (data.type === 'dialog') {
        if (data.action === 'open') {
          // 弹窗打开，增加 iframe 高度
          this.iframeHeight = data.height || 600
          // 可选：阻止父页面滚动
          document.body.style.overflow = 'hidden'
        } else if (data.action === 'close') {
          // 弹窗关闭，恢复高度
          this.iframeHeight = this.defaultHeight
          document.body.style.overflow = ''
        }
      }
    },
  },
  beforeDestroy() {
    window.removeEventListener('message', this.handleIframeMessage)
  },
}
</script>