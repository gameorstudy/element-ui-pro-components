<template>
  <CodeBlock
    src="editable-pro-table/components/Basic.vue">
    <Demo />
  </CodeBlock>
</template>

<script>
  import Demo from './components/Basic.vue'
  import CodeBlock from '@examples/components/CodeBlock.vue'
  export default {
    name: 'EditableProTableBasic',
    components: {
      Demo,
      CodeBlock
    },
  }
</script>

<style scoped>

</style>
