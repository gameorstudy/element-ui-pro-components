<template>
  <div class="pro-form-demo">
    <ProForm 
      ref="proFormRef"
      :formItems="formItems"
      :grid="true"
      :rowProps="rowProps"
      :submitter="submitter"
      @onFinish="onFinish"
      @onError="onError"
      @onReset="onReset"
    >
    </ProForm>
    <p></p>
    <el-button @click="getFormRef">getFormRef</el-button>
    <el-button @click="getForm">getForm</el-button>
    <el-button @click="setFieldsValue">setFieldsValue</el-button>
    <el-button @click="setFieldValue">setFieldValue</el-button>
  </div>
</template>

<script>
  import { ProForm } from 'element-ui-pro-components'

  export default {
    name: 'Demo1',
    components: {
      ProForm,
    },
    computed: {
      formItems() {
        return [
          { 
            label: '活动名称1',
            prop: 'name1',
            valueType: 'input',
            rules: [
              { required: true, message: '请输入', trigger: 'blur' }
            ],
            colProps: {
              span: 8
            }
          },
          { 
            label: '活动名称2',
            prop: 'name2',
            valueType: 'input',
            rules: [
              { required: true, message: '请输入', trigger: 'blur' }
            ],
            colProps: {
              span: 8
            }
          },
          { 
            label: '活动名称3',
            prop: 'name3',
            valueType: 'input',
            rules: [
              { required: true, message: '请输入', trigger: 'blur' }
            ],
            colProps: {
              span: 8
            }
          },
          { 
            label: '活动名称4',
            prop: 'name4',
            valueType: 'input',
            rules: [
              { required: true, message: '请输入', trigger: 'blur' }
            ],
            colProps: {
              span: 8
            }
          },
          { 
            label: '活动名称5',
            prop: 'name5',
            valueType: 'input',
            rules: [
              { required: true, message: '请输入', trigger: 'blur' }
            ],
            colProps: {
              span: 8
            }
          },
          { 
            label: '活动名称6',
            prop: 'name6',
            valueType: 'input',
            rules: [
              { required: true, message: '请输入', trigger: 'blur' }
            ],
            colProps: {
              span: 8
            }
          },
        ]
      },
      submitter() {
        const { loading } = this
        return {
          submitButtonProps: {
            loading
          },
          customRender: (form, action, doms) => {
            return [
              doms[0],
              <el-button props={{ type: 'danger' }} onClick={action.reset}>自定义重置</el-button>,
              <el-button props={{ type: 'warning' }} onClick={action.resetAllFields}>重置增强方法</el-button>,
              doms[1],
              <el-button props={{ type: 'success' }} onClick={action.submit}>自定义提交</el-button>,
            ]
          }
        }
      }
    },
    data() {
      return {
        rowProps: { gutter: 20 },
        loading: false
      }
    },
    methods: {
      onFinish(values) {
        this.loading = true
        console.log('values', values)
        setTimeout(() => {
          this.loading = false
        }, 2000)
      },
      onError(errors) {
        console.log('errors', errors)
      },
      onReset() {
        const form = this.$refs.proFormRef.getForm()
        console.log('form', form)
      },
      getFormRef() {
        console.log(this.$refs.proFormRef?.getFormRef())
      },
      getForm() {
        console.log(this.$refs.proFormRef?.getForm())
      },
      setFieldsValue() {
        this.$refs.proFormRef?.setFieldsValue({
          name1: 'hello world',
          other: 'hello world'
        })
        this.getForm()
      },
      setFieldValue() {
        this.$refs.proFormRef?.setFieldValue('name2', 'hello js')
        this.getForm()
      },
    }
  }
</script>

<style scoped>
.pro-form-demo {
  padding: 24px;
}
</style>
