<template>
  <CodeBlock
    src="pro-form/components/Basic.vue">
    <Demo />
  </CodeBlock>
</template>

<script>
  import Demo from './components/Basic.vue'
  import CodeBlock from '@examples/components/CodeBlock.vue'
  export default {
    name: 'ProFormBasic',
    components: {
      Demo,
      CodeBlock
    },
  }
</script>

<style scoped>

</style>
