<template>
  <el-button
    class="btn-add"
    icon="el-icon-plus"
    :style="recordCreatorProps.style"
    v-bind="initializedButtonProps"
  >
    {{ recordCreatorProps.creatorButtonText }}
  </el-button>
</template>

<script>
  export default {
    name: 'RecordCreator',
    props: {
      recordCreatorProps: {
        type: [Boolean, Object],
        required: true
      },
      size: {
        type: String
      }
    },
    computed: {
      initializedButtonProps() {
        const { size, recordCreatorProps: { buttonProps = {} } } = this
        return {
          plain: true,
          ...buttonProps,
          size,
        }
      }
    },
  }
</script>

<style scoped>
.btn-add {
  width: 100%;
  margin: 10px 0;
  border-style: dashed;
}
</style>
