<template>
  <div class="dialog-form-demo">
    <el-button @click="visible = true">打开弹框</el-button>
    <DialogForm 
      v-model="visible"
      title="标题一"
      width="960px"
      :dialogProps="{
        'show-close': false
      }"
      :dialogEvents="{
        close: this.close
      }"
      ref="dialogFormRef"
      :formProps="formProps"
      :formItems="formItems"
      :initialValues="initialValues"
      :submitter="submitter"
      @onFinish="onFinish"
      @onError="onError"
      @onReset="onReset"
    >
      <!-- 活动名称3 -->
      <!-- start -->
      <template #name3="{ form, formItem }">
        <el-input v-model="form.name3" v-bind="formItem.fieldProps"></el-input>
      </template>
      <!-- end -->
      <!-- 活动时间 -->
      <!-- start -->
      <template #date="{ form }">
        <el-form-item label="活动时间1" required>
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
      <!-- 活动时间 -->
      <!-- start -->
      <template #datetime="{ form }">
        <el-form-item label="活动时间2">
          <el-col :span="11">
            <el-form-item prop="date3">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date3" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-form-item prop="date4">
              <el-time-picker placeholder="选择时间" v-model="form.date4" style="width: 100%;"></el-time-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
      </template>
      <!-- end -->
    </DialogForm>
  </div>
</template>

<script>
  import { DialogForm } from 'element-ui-pro-components'

  export default {
    name: 'Demo1',
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
            ]
          },
          {
            renderLabel: () => <span style="color: #F56C6C">活动名称2</span>,
            prop: 'name2',
            valueType: 'input',
            fieldProps: {
              placeholder: 'renderLabel'
            }
          },
          {
            label: '活动名称3',
            prop: 'name3',
            valueType: 'slot',
            fieldProps: {
              placeholder: 'valueType: slot 实现的',
              clearable: true
            }
          },
          {
            label: '活动名称4',
            prop: 'name4',
            renderField: ({ form, formItem }) => 
              <el-input 
                value={ form.name4 } 
                onInput={val => form.name4 = val } 
                attrs={ formItem.fieldProps }
                on={ formItem.fieldEvents }
                onClear={this.handleClear}
              />
            ,
            fieldProps: {
              placeholder: 'renderField 实现的',
              clearable: true,
            },
            fieldEvents: {
              change: this.handleChange
            }
          },
          {
            label: '活动区域1',
            prop: 'region1',
            valueType: 'select',
            fieldProps: {
              clearable: true
            },
            options: [
              { label: '北京', value: 'beijing' },
              { label: '上海', value: 'shanghai' },
            ],
            initialValue: 'beijing',
            rules: [
              { required: true, message: '请选择', trigger: 'change' }
            ]
          },
          {
            label: '活动区域2',
            prop: 'region2',
            valueType: 'select',
            valueEnum: {
              'beijing': '北京',
              'shanghai': '上海'
            },
          },
          {
            label: '活动区域3',
            prop: 'region3',
            valueType: 'select',
            valueEnum: new Map([
              ['beijing', '北京'],
              ['shanghai', '上海']
            ]),
          },
          {
            label: '活动区域4',
            prop: 'region4',
            valueType: 'select',
            optionLoader: () => {
              return new Promise(resolve => {
                setTimeout(() => {
                  resolve([
                    { label: '北京', value: 'beijing' },
                    { label: '上海', value: 'shanghai' },
                  ])
                }, 1000)
              })
            },
          },
          {
            label: '活动性质',
            prop: 'category',
            valueType: 'checkbox-group',
            options: [
              { label: '美食/餐厅线上活动', value: '美食/餐厅线上活动' },
              { label: '地推活动', value: '地推活动' },
              { label: '线下主题活动', value: '线下主题活动' },
              { label: '单纯品牌曝光', value: '单纯品牌曝光' },
            ],
            initialValue: [],
            rules: [
              { required: true, message: '请选择', trigger: 'change' }
            ]
          },
          {
            label: '特殊资源',
            prop: 'resource',
            valueType: 'radio-group',
            options: [
              { label: '线上品牌商赞助', value: '线上品牌商赞助' },
              { label: '线下场地免费', value: '线下场地免费' }
            ],
            rules: [
              { required: true, message: '请选择', trigger: 'change' }
            ]
          },
          {
            label: '活动类型1',
            prop: 'type',
            valueType: 'cascader',
            fieldProps: {
              options: this.typeOptions,
              'popper-class': 'cascader-popper'
            },
            rules: [
              { required: true, message: '请选择', trigger: 'change' }
            ]
          },
          {
            label: '活动类型2',
            prop: 'type2',
            valueType: 'cascader',
            fieldProps: {
              'popper-class': 'cascader-popper'
            },
            optionLoader: () => new Promise(resolve => {
              setTimeout(() => {
                resolve(this.typeOptions)
              }, 2000)
            })
          },
          {
            label: 'I\'m hide',
            prop: 'hide',
            valueType: 'input',
            hideInForm: true
          },
          {
            prop: 'date',
            customSlot: true,
          },
          {
            customSlot: 'datetime',
          },
          {
            // 没有 v-model 则需要默认添加字段 因为这个时候是值的处理
            renderFormItem: (form) => 
              <el-form-item label="活动时间3">
                <el-col span={11}>
                  <el-form-item prop="date5">
                    <el-date-picker type="date" placeholder="选择日期" value={form.date5} on={ { input: val => form.date5 = val } } style="width: 100%;"></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col class="line" span={2}>-</el-col>
                <el-col span={11}>
                  <el-form-item prop="date6">
                    <el-time-picker placeholder="选择时间" value={form.date6} on={ { input: val => form.date6 = val } } style="width: 100%;"></el-time-picker>
                  </el-form-item>
                </el-col>
              </el-form-item>
          }
        ]
      },
      submitter() {
        const { loading } = this
        return {
          cancelText: '自定义取消',
          submitText: '提交',
          cancelButtonProps: {
            type: 'success',
            plain: true,
            style: {
              'border-style': 'dashed'
            }
          },
          submitButtonProps: {
            loading
          },
        }
      }
    },
    data() {
      return {
        visible: false,
        formProps: {
          'label-width': '110px',
          rules: {
            date1: [{ required: true, message: '请选择', trigger: 'change'}],
            date2: [{ required: true, message: '请选择', trigger: 'change'}]
          }
        },
        typeOptions: [
          {
            label: '球类',
            value: 'ball',
            children: [
              { label: '乒乓', value: '1' },
              { label: '篮球', value: '2' },
              { label: '足球', value: '3' },
            ]
          },
          {
            label: '铁人三项',
            value: 'other',
            children: [
              { label: '游泳', value: '11' },
              { label: '跑步', value: '22' },
              { label: '骑行', value: '33' },
            ]
          },
        ],
        initialValues: {
          date3: new Date(2026, 0, 1),
          date4: Date.now(),
          date5: '',
          date6: ''
        },
        loading: false
      }
    },
    methods: {
      close() {
        console.log('click close')
      },
      handleClear() {
        console.log('clear')
      },
      handleChange(val) {
        console.log('change', val)
      },
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
      }
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
