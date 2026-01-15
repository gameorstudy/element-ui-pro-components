<template>
  <div>
    <DialogForm
      v-model="visible"
      title="弹窗表单"
      :titleSlot="true"
      :formProps="formProps"
      :formItems="formItems"
      formClassName="dialog-form1"
      :submitter="{
        slot: true
      }"
      @onFinish="handleFinish"
    >
      <!-- 自定义 title -->
      <!-- start -->
      <span slot="title">自定义弹框表单</span>
      <!-- end -->
      <!-- 活动时间 -->
      <!-- start -->
      <template #datetime="{ form }">
        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
      </template>
      <!-- end -->
      <!-- submitter -->
      <!-- start -->
      <template #submitter>
        <el-button type="primary">立即创建</el-button>
        <el-button>取消</el-button>
      </template>
      <!-- end -->
    </DialogForm>
    <el-button type="primary" @click="visible = true">打开弹窗</el-button>
  </div>
</template>

<script>
  import DialogForm from '../../../components/DialogForm'
  
  export default {
    name: 'DialogForm1',
    components: {
      DialogForm,
    },
    data() {
      return {
        visible: false,
        formProps: {
          'label-width': '80px'
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
            labelSlot: true,
            valueType: 'select',
            fieldProps: {
              placeholder: '请选择活动区域'
            },
            optionLoader: () => {
              return new Promise((resolve) => {
                setTimeout(() => {
                  resolve([
                    { label: '区域一', value: 'shanghai' },
                    { label: '区域二', value: 'beijing' }
                  ])
                }, 1000)
              })
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
      }
    },
    methods: {
      handleFinish(form) {
        console.log('form', form)
      }
    },
  }
</script>

<style scoped>
.dialog-form1 .line {
  text-align: center;
}
</style>
