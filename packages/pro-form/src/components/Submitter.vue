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
        submitter: { resetText, submitText, resetButtonProps, submitButtonProps },
        action: { reset, submit }
      } = this
      // 非原生属性需要放到 props 里，测试是 vue 解析 jsx 的原因
      const resetProps = { props: resetButtonProps, resetButtonProps }
      const submitProps = { props: submitButtonProps, submitButtonProps }
      const doms = [
        <el-button { ...resetProps } onClick={reset} key='reset'>{ resetText }</el-button>,
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
