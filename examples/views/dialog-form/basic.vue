<template>
  <CodeBlock
    src="dialog-form/components/Basic.vue">
    <Demo />
  </CodeBlock>
</template>

<script>
  import Demo from './components/Basic.vue'
  import CodeBlock from '@examples/components/CodeBlock.vue'
  export default {
    name: 'DialogFormBasic',
    components: {
      Demo,
      CodeBlock
    },
  }
</script>

<style scoped>

</style>
