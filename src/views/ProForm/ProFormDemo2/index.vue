<template>
  <div class="form-demo2">
    <h2>行内表单</h2>
    <p>
      <a href="https://element.eleme.io/2.15/#/zh-CN/component/form#xing-nei-biao-dan" target="_blank" rel="noopener noreferrer">来源</a>
    </p>
    <ProForm
      :formProps="formProps"
      :formItems="formItems" 
      :submitter="submitter" 
    >
      <!-- submitter -->
      <!-- start -->
      <template #submitter>
        <el-form-item>
          <el-button type="primary">查询</el-button>
        </el-form-item>
      </template>
      <!-- end -->
    </ProForm>
  </div>
</template>

<script>
  import ProForm from '../../../components/ProForm'

  export default {
    name: 'ProFormDemo2',
    components: {
      ProForm
    },
    data() {
      return {
        formProps: {
          inline: true
        },
        formItems: [
          {
            label: '审批人',
            prop: 'user',
            valueType: 'input',
            fieldProps: {
              placeholder: '审批人'
            },
          },
          {
            label: '活动区域',
            prop: 'region',
            valueType: 'select',
            fieldProps: {
              placeholder: '活动区域'
            },
            options: [
              { label: '区域一', value: 'shanghai' },
              { label: '区域二', value: 'beijing' }
            ]
          }
        ],
        submitter: {
          slot: true
        }
      }
    },
  }
</script>

<style scoped>

</style>
