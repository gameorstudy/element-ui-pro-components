<script>
  export default {
    name: 'Submitter',
    props: {
      render: {
        type: Function,
        required: true
      },
      submitter: {
        type: Object,
        required: true
      },
      action: {
        type: Object,
        required: true
      }
    },
    render: function(h) {
      const { 
        submitter: { cancelText, confirmText, cancelButtonProps, confirmButtonProps },
        action: { close, submit }
      } = this
      // 非原生属性需要放到 props 里，测试是 vue 解析 jsx 的原因
      const cancelProps = { props: cancelButtonProps, cancelButtonProps }
      const confirmProps = { props: confirmButtonProps, confirmButtonProps }
      const doms = [
        <el-button { ...cancelProps } onClick={close} key='close'>{ cancelText }</el-button>,
        <el-button type="primary" { ...confirmProps } onClick={submit} key='submit'>{ confirmText }</el-button>
      ]

      return <Fragment>
        { this.render(this.action, doms) }
      </Fragment>
    }
  }
</script>

<style scoped>

</style>
