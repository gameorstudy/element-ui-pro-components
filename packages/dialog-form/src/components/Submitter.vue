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
        submitter: { cancelText, confirmText, cancelButtonProps, confirmButtonProps },
        actions: { close, submit },
        render
      } = this
      // { ...props } 传递组件属性时 需要 props 包裹 
      const cancelProps = { props: cancelButtonProps, cancelButtonProps }
      const confirmProps = { props: confirmButtonProps, confirmButtonProps }
      const doms = [
        <el-button { ...cancelProps } onClick={close} key='close'>{ cancelText }</el-button>,
        <el-button type="primary" { ...confirmProps } onClick={submit} key='submit'>{ confirmText }</el-button>
      ]

      return (
        render 
          ? <Fragment>{render(this.actions, doms)}</Fragment>
          : <span class="dialog-form__submitter">
            {doms}
          </span>
      )
    }
  }
</script>

<style scoped>

</style>
