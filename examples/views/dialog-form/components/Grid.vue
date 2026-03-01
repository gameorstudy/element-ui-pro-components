<template>
  <div class="dialog-form-demo">
    <el-button @click="visible = true">打开弹框</el-button>
    <DialogForm 
      ref="dialogFormRef"
      v-model="visible"
      width="960px"
      :renderTitle="renderTitle"
      :formItems="formItems"
      :grid="true"
      :rowProps="rowProps"
      :submitter="submitter"
      @onFinish="onFinish"
      @onError="onError"
      @onReset="onReset"
    >
    </DialogForm>
  </div>
</template>

<script>
  import { DialogForm } from 'element-ui-pro-components'

  export default {
    name: 'Demo2',
    components: {
      DialogForm,
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
              <el-button props={{ type: 'danger' }} onClick={action.close}>自定义取消</el-button>,
              <el-button props={{ type: 'info' }} onClick={action.reset}>重置</el-button>,
              <el-button props={{ type: 'warning' }} onClick={action.resetAllFields}>重置增强方法</el-button>,
              doms[1],
              <el-button props={{ type: 'success' }} onClick={action.submit}>自定义确定</el-button>,
              <el-button onClick={this.getFormRef}>getFormRef</el-button>,
              <el-button onClick={this.getForm}>getForm</el-button>,
              <el-button onClick={this.setFieldsValue}>setFieldsValue</el-button>,
              <el-button onClick={this.setFieldValue}>setFieldValue</el-button>
            ]
          }
        }
      }
    },
    data() {
      return {
        visible: false,
        renderTitle: () => <span style="color: #F56C6C">自定义标题</span>,
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
        const form = this.$refs.dialogFormRef.getForm()
        console.log('form', form)
      },
      onClose() {
        this.$refs.dialogFormRef?.close()
      },
      getFormRef() {
        console.log(this.$refs.dialogFormRef?.getFormRef())
      },
      getForm() {
        console.log(this.$refs.dialogFormRef?.getForm())
      },
      setFieldsValue() {
        this.$refs.dialogFormRef?.setFieldsValue({
          name1: 'hello world',
          other: 'hello world'
        })
        this.getForm()
      },
      setFieldValue() {
        this.$refs.dialogFormRef?.setFieldValue('name2', 'hello js')
        this.getForm()
      },
    },
  }
</script>

<style scoped>
.dialog-form-demo {
  padding: 24px;
}

.line {
  text-align: center;
}
</style>

<style>
.cascader-popper .el-cascader-menu__wrap {
  height: 204px;
}
</style>
