<script>
  export default {
    name: 'RenderCell',
    props: {
      render: {
        type: Function,
        required: true
      }
    },
    render: function(h) {
      const dom = this.render()
      console.log('dom', dom)
      return <Fragment>
        { dom }
      </Fragment>
    }
  }
</script>

<style scoped>

</style>
