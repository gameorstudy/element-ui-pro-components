<template>
  <div>
    <el-form :model="form" size="small">
      <el-table :data="form.dataSource" size="small">
        <el-table-column label="名称">
          <template #default="scope">
            <el-form-item
              :prop="`dataSource.${scope.$index}.name`"
              :rules="{ required: true, message: '请输入名称', trigger: ['blur'] }"
              >
              <el-input
                v-model="scope.row.name"
                placeholder="请输入名称"
              />
            </el-form-item>
          </template>
        </el-table-column>
        <el-table-column label="年龄">
          <template #default="scope">
            <el-form-item
              :prop="`dataSource.${scope.$index}.age`"          
              :rules="{ required: true, message: '请输入年龄', trigger: ['blur'] }"
            >
              <el-input
                v-model="scope.row.age"
                placeholder="请输入年龄"
              />
            </el-form-item>
          </template>
        </el-table-column>
      </el-table>
    </el-form>
    <el-button type="primary" @click="handleAdd">添加到底部</el-button>
    <el-button type="primary" @click="handleAddHead">添加到顶部</el-button>
  </div>
</template>

<script>
  import { generateCryptoUID } from '@/utils/uid';

  export default {
    name: 'EditableTableDemo1',
    data() {
      return {
        form: {
          dataSource: [
            { name: '', age: '' }
          ],
        }
      }
    },
    methods: {
      getItemProp(row, field) {
        const index = this.dataSource.findIndex(item => row.uid === item.uid)
        return `${index}.${field}`
      },
      handleAdd() {
        this.form.dataSource.push({ name: '', age: '', uid: generateCryptoUID() })
      },
      handleAddHead() {
        this.form.dataSource.unshift({ name: '', age: '', uid: generateCryptoUID() })
      }
    },
  }
</script>

<style scoped>

</style>
