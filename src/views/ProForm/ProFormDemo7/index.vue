<template>
  <div class="form-demo7">
    <h2>栅格化布局</h2>
    <ProForm 
      :grid="true"
      :formProps="{ 'label-width': '100px' }"
      :formItems="formItems"
    />
  </div>
</template>

<script>
  import ProForm from '../../../components/ProForm'
  export default {
    name: 'ProFormDemo7',
    components: {
      ProForm,
    },
    data() {
      return {
        formItems: [
          {
            label: 'Field 1',
            prop: 'field1',
            valueType: 'input',
            colProps: {
              span: 8
            }
          },
          {
            label: 'Field 2',
            prop: 'field2',
            valueType: 'select',
            options: [
              {
                value: '1',
                label:
                  'longlonglonglonglonglonglonglonglonglonglong',
              },
              {
                value: '2',
                label: '222',
              },
            ],
            colProps: {
              span: 8
            }
          },
          {
            label: 'Field 3',
            prop: 'field3',
            valueType: 'input',
            colProps: {
              span: 8
            }
          },
          {
            label: 'Field 4',
            prop: 'field4',
            valueType: 'input',
            colProps: {
              span: 8
            }
          },
          {
            label: 'Field 5',
            prop: 'field5',
            valueType: 'select',
            options: [
              {
                value: '1',
                label:
                  'longlonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglong',
              },
              {
                value: '2',
                label: '222',
              },
            ],
            colProps: {
              span: 8
            }
          },
          {
            label: 'Field 6',
            prop: 'field6',
            valueType: 'input',
            colProps: {
              span: 8
            }
          }
        ]
      }
    },
  }
</script>

<style scoped>
.form-demo7 /deep/ .el-select {
  width: 100%;
}
</style>
