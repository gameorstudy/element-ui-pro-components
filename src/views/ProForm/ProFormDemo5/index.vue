<template>
  <div class="form-demo5">
    <h2>自定义校验规则</h2>
    <p><a href="https://element.eleme.io/2.15/#/zh-CN/component/form#zi-ding-yi-xiao-yan-gui-ze" target="_blank" rel="noopener noreferrer">来源</a></p>
    <ProForm 
      ref="proFormRef"
      :formProps="formProps"
      :formItems="formItems"
      :submitter="submitter"
    >
      <!-- submitter -->
        <!-- start -->
        <template #submitter="{ events: { submit, reset }}">
          <el-form-item>
            <el-button type="primary" @click="submit">立即创建</el-button>
            <el-button @click="reset">重置</el-button>
          </el-form-item>
        </template>
        <!-- end -->
    </ProForm>
  </div>
</template>

<script>
  import ProForm from '../../../components/ProForm'
  export default {
    name: 'ProFormDemo5',
    components: {
      ProForm,
    },
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (Number.isNaN(Number(value))) {
            callback(new Error('请输入数字值'));
          } else {
            if (Number(value) < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入密码'));
        } else {
          const form = this.$refs.proFormRef.getForm()
          if (form.checkPass !== '') {
            const formRef = this.$refs.proFormRef?.getFormRef()
            formRef?.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        const form = this.$refs.proFormRef.getForm()
        if (!value) {
          callback(new Error('请再次输入密码'));
        } else if (value !== form.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };

      return {
        formProps: {
          'status-icon': true,
          'label-width': '100px',
          rules: {
            pass: [
              { validator: validatePass, trigger: 'blur' }
            ],
            checkPass: [
              { validator: validatePass2, trigger: 'blur' }
            ],
            age: [
              { validator: checkAge, trigger: 'blur' }
            ]
          }
        },
        formItems: [
          {
            label: '密码',
            prop: 'pass',
            valueType: 'input',
            fieldProps: {
              placeholder: '',
              autocomplete: 'off'
            }
          },
          {
            label: '确认密码',
            prop: 'checkPass',
            valueType: 'input',
            fieldProps: {
              placeholder: '',
              autocomplete: 'off'
            }
          },
          {
            label: '年龄',
            prop: 'age',
            valueType: 'input',
            fieldProps: {
              placeholder: ''
            }
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
.form-demo5 {
  width: 460px;
}
</style>
