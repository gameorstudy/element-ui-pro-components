<script>
  export default {
    name: 'CustomRender',
    props: {
      render: {
        type: Function,
        required: true
      }
    },
    render: function(h) {
      return this.render()
    }
  }
</script>

<style scoped>

</style>
