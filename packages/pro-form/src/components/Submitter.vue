<script>
  export default {
    name: 'Submitter',
    props: {
      render: {
        validator: (value) => {
          return value === null || typeof value === 'function'
        },
        required: true
      },
      submitter: {
        type: Object,
        required: true
      },
      actions: {
        type: Object,
        required: true
      }
    },
    render: function(h) {
      const { 
        submitter: { resetText, submitText, resetButtonProps, submitButtonProps },
        actions: { reset, submit },
        render
      } = this
      // { ...props } 传递组件属性时 需要 props 包裹 
      const resetProps = { props: resetButtonProps, resetButtonProps }
      const submitProps = { props: submitButtonProps, submitButtonProps }
      const doms = [
        <el-button { ...resetProps } onClick={reset} key='reset'>{ resetText }</el-button>,
        <el-button type="primary" { ...submitProps } onClick={submit} key='submit'>{ submitText }</el-button>
      ]

      return (
        render 
          ? <Fragment>{render(this.actions, doms)}</Fragment>
          : <el-form-item class="pro-form__submitter">
            {doms}
          </el-form-item>
      )
    }
  }
</script>

<style scoped>

</style>
