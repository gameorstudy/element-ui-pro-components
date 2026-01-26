<template>
  <div class="form-demo6">
    <h2>动态增减表单项</h2>
    <p><a href="https://element.eleme.io/2.15/#/zh-CN/component/form#dong-tai-zeng-jian-biao-dan-xiang" target="_blank" rel="noopener noreferrer">来源</a></p>
    <ProForm 
      ref="proFormRef"
      :formProps="formProps"
      :formItems="formItems"
      :submitter="{ slot: true }"
    >
      <!-- 域名 -->
      <!-- start -->
      <template #domains="{ form }">
        <el-form-item
          v-for="(domain, index) in form.domains"
          :label="'域名' + index"
          :key="domain.key"
          :prop="'domains.' + index + '.value'"
          :rules="{
            required: true, message: '域名不能为空', trigger: 'blur'
          }"
        >
          <el-input v-model="domain.value"></el-input>
          <el-button @click.prevent="removeDomain(domain)">删除</el-button>
        </el-form-item>
      </template>
      <!-- end -->
      <!-- submitter -->
      <!-- start -->
      <template #submitter="{ action: { submit, reset }}">
        <el-form-item>
          <el-button type="primary" @click="submit">提交</el-button>
          <el-button @click="addDomain">新增域名</el-button>
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
    name: 'ProFormDemo6',
    components: {
      ProForm,
    },
    data() {
      return {
        formProps: {
          'label-width': '100px'
        },
        formItems: [
          {
            label: '邮箱',
            prop: 'email',
            valueType: 'input',
            rules: [
              { required: true, message: '请输入邮箱地址', trigger: 'blur' },
              { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
            ]
          },
          {
            prop: 'domains',
            slot: true,
            initialValue: [{
              value: ''
            }],
          }
        ]
      }
    },
    methods: {
      removeDomain(item) {
        const form = this.$refs.proFormRef.getForm()
        var index = form.domains.indexOf(item)
        if (index !== -1) {
          form.domains.splice(index, 1)
        }
      },
      addDomain() {
        const form = this.$refs.proFormRef.getForm()
        form.domains.push({
          value: '',
          key: Date.now()
        });
      }
    },
  }
</script>

<style scoped>
.form-demo6 {
  width: 460px;
}

.form-demo6 /deep/ .el-input {
  margin-right: 10px;
  width: 270px;
}
</style>
