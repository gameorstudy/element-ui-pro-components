<template>
    <div class="editable-table-demo1">
        <EditableTable
            ref="editableTableRef"
            :columns="columns"
            :dataSource="dataSource"
            defaultSize="small"
        />
        <el-button type="primary" @click="getRowData">获取第二行数据</el-button>
        <el-button type="primary" @click="getRowsData">获取全部数据</el-button>
        <el-button type="primary" @click="setRowData">修改第一行数据</el-button>
    </div>
</template>

<script>
import EditableTable from '../../../components/EditableTable'

export default {
    name: 'EditableTableDemo1',
    components: {
        EditableTable
    },
    computed: {
        columns() {
            return [
                {
                    label: '名称',
                    prop: "title",
                    valueType: 'input',
                },
                {
                    label: '年龄',
                    prop: 'age',
                    valueType: 'input'
                },
                {
                    label: '操作',
                    valueType: 'option',
                    key: 'action',
                    renderCell: (scope, action) => (
                        [                            
                            <el-button key="editable" type="text">编辑</el-button>
                        ]
                    ),
                }
            ]
        }
    },
    data() {
        return {
            dataSource: undefined
        }
    },
    created() {
        this.dataSource = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve([
                        { title: '标题一', age: 10 },
                        { title: '标题二', age: 18 }
                    ])
                }, 1000)
            })
        }
    },
    methods: {
        getRowData() {
            const data = this.$refs.editableTableRef.getRowData(1)
            console.log(data)
        },
        getRowsData() {
            const data = this.$refs.editableTableRef.getRowsData()
            console.log(data)
        },
        setRowData() {
            this.$refs.editableTableRef.setRowData(0, { title: 'hello world', age: 25 })
        }
    },
}
</script>

<style scoped>

</style>
