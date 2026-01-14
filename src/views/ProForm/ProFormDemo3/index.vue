<template>
  <div class="form-demo3">
    <h2>对齐方式</h2>
    <p>
      <a href="https://element.eleme.io/2.15/#/zh-CN/component/form#dui-qi-fang-shi" target="_blank" rel="noopener noreferrer">来源</a>
    </p>
    <el-radio-group v-model="labelPosition" size="small">
      <el-radio label="left">左对齐</el-radio>
      <el-radio label="right">右对齐</el-radio>
      <el-radio label="top">顶部对齐</el-radio>
    </el-radio-group>
    <ProForm 
      :formProps="formProps"
      :formItems="formItems"
      :submitter="false"
    />
  </div>
</template>

<script>
  import ProForm from '../../../components/ProForm'
  export default {
    name: 'ProFormDemo3',
    components: {
      ProForm,
    },
    computed: {
      formProps() {
        return {
          'label-position': this.labelPosition,
          'label-width': '80px'
        }
      }
    },
    data() {
      return {
        labelPosition: 'right',
        formItems: [
          {
            label: '名称',
            prop: 'name',
            valueType: 'input'
          },
          {
            label: '活动区域',
            prop: 'region',
            valueType: 'input'
          },
          {
            label: '活动形式',
            prop: 'type',
            valueType: 'input'
          }
        ],
      }
    },
  }
</script>

<style scoped>
.form-demo3 {
  width: 460px;
}
</style>
