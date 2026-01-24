<template>
    <EditableTable
        :columns="columns"
        :dataSource="dataSource"
    />
</template>

<script>
import EditableTable from '../../../components/EditableTable'

export default {
    name: 'EditableTableDemo2',
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
    }
}
</script>

<style scoped>

</style>