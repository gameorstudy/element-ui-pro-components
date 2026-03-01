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
        submitter: { cancelText, submitText, cancelButtonProps, submitButtonProps },
        action: { close, submit }
      } = this
      // 非原生属性需要放到 props 里，测试是 vue 解析 jsx 的原因
      const cancelProps = { props: cancelButtonProps, cancelButtonProps }
      const submitProps = { props: submitButtonProps, submitButtonProps }
      const doms = [
        <el-button { ...cancelProps } onClick={close} key='close'>{ cancelText }</el-button>,
        <el-button type="primary" { ...submitProps } onClick={submit} key='submit'>{ submitText }</el-button>
      ]

      return <Fragment>
        { this.render(this.action, doms) }
      </Fragment>
    }
  }
</script>

<style scoped>

</style>
