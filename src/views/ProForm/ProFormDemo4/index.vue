<template>
  <div class="pro-form-demo4">
    <h2>表单验证</h2>
    <p><a href="https://element.eleme.io/2.15/#/zh-CN/component/form#biao-dan-yan-zheng" target="_blank" rel="noopener noreferrer">来源</a></p>
    <ProForm
      :formProps="formProps"
      :formItems="formItems"
      :submitter="submitter"
      className="form-demo4"
    >
      <!-- 活动时间 -->
      <!-- start -->
      <template #datetime="{ form }">
        <el-form-item label="活动时间" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
      </template>
      <!-- end -->
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
    name: 'ProFormDemo4',
    components: {
      ProForm,
    },
    data() {
      return {
        formProps: {
          'label-width': '80px',
          rules: {
            name: [
              { required: true, message: '请输入活动名称', trigger: 'blur' },
              { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ],
            region: [
              { required: true, message: '请选择活动区域', trigger: 'change' }
            ],
            date1: [
              { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
            ],
            date2: [
              { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
            ],
            type: [
              { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
            ],
            resource: [
              { required: true, message: '请选择活动资源', trigger: 'change' }
            ],
            desc: [
              { required: true, message: '请填写活动形式', trigger: 'blur' }
            ]
          },
        },
        formItems: [
          {
            label: '活动名称',
            prop: 'name',
            valueType: 'input',
            fieldProps: {
              placeholder: ''
            }
          },
          {
            label: '活动区域',
            prop: 'region',
            valueType: 'select',
            fieldProps: {
              placeholder: '请选择活动区域'
            },
            valueEnum: {
              'shanghai': '区域一',
              'beijing': '区域二'
            }
          },
          {
            prop: 'datetime',
            slot: true
          },
          {
            label: '即时配送',
            prop: 'delivery',
            valueType: 'switch',
            initialValue: false
          },
          {
            label: '活动性质',
            prop: 'type',
            valueType: 'checkbox-group',
            options: [
              { label: '美食/餐厅线上活动', value: '美食/餐厅线上活动' },
              { label: '地推活动', value: '地推活动' },
              { label: '线下主题活动', value: '线下主题活动' },
              { label: '单纯品牌曝光', value: '单纯品牌曝光' },
            ],
            initialValue: [],
          },
          {
            label: '特殊资源',
            prop: 'resource',
            valueType: 'radio-group',
            options: [
              { label: '线上品牌商赞助', value: '线上品牌商赞助' },
              { label: '线下场地免费', value: '线下场地免费' }
            ]
          },
          {
            label: '活动形式',
            prop: 'desc',
            valueType: 'input',
            fieldProps: {
              type: 'textarea',
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
.form-demo4.el-form {
  width: 460px;
}

.form-demo4 .line {
  text-align: center;
}

.form-demo4 /deep/ .el-select .el-input {
  width: 380px;
}
</style>
