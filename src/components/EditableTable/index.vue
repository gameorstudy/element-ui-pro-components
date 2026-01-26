<template>
    <el-form 
        ref="formRef"
        class="editable-table" 
        :class="formClassName"
        :model="form"
        :size="defaultSize"
    >
        <div :class="tableClassName" v-loading="globalLoading">
            <el-table v-if="initializedRecordCreatorProps.position === 'top'" class="thead-table">
                <el-table-column 
                    v-for="column in normalizedColumns"
                    v-bind="{
                        ...column,
                        formItem: undefined,
                        key: undefined,
                        renderCellHeader: undefined,
                        renderCell: undefined,
                        valueEnum: undefined,
                    }"
                    :key="column.prop || column.key"
                >
                    <template v-if="column.renderCellHeader" #header="scope">
                        <!-- 覆写头部 -->
                        <!-- start -->
                        <custom-render :render="() => column.renderCellHeader(scope)" />
                        <!-- end -->
                    </template>
                </el-table-column>
                <template #empty>
                    <el-button 
                        class="btn-add"
                        plain 
                        :size="defaultSize" 
                        icon="el-icon-plus"
                        :style="initializedRecordCreatorProps.style"
                        v-bind="initializedRecordCreatorProps.buttonProps"
                        @click="handleAdd"
                    >
                        {{ initializedRecordCreatorProps.creatorButtonText }}
                    </el-button>
                </template>
            </el-table>
            <el-table 
                ref="tableRef"
                :show-header="initializedRecordCreatorProps.position !== 'top'"
                :data="form.dataSource"
                v-bind="initializedTableProps"
                v-on="tableEvents"
            >
                <el-table-column 
                    v-for="column in normalizedColumns"
                    v-bind="{
                        ...column,
                        valueType: undefined,
                        formItem: undefined,
                        key: undefined,
                        renderCellHeader: undefined,
                        renderCell: undefined,
                        valueEnum: undefined,
                    }"
                    :key="column.prop || column.key"
                >
                    <template v-if="column.renderCellHeader" #header="scope">
                        <!-- 覆写头部 -->
                        <!-- start -->
                        <custom-render :render="() => column.renderCellHeader(scope)" />
                        <!-- end -->
                    </template>
                    <template #default="scope">
                        <template v-if="column.valueType === 'option'">
                            <!-- 自定义 render -->
                            <!-- start -->
                            <render-cell :render="() => column.renderCell(scope)" />
                            <!-- end -->
                        </template>
                        <template v-else>
                            <!-- pro-form-item -->
                            <!-- start -->
                            <ProFormItem
                                :indexProp="`dataSource.${scope.$index}.${column.prop}`"
                                :item="column.formItem" 
                                :form="scope.row"
                            />
                            <!-- end -->
                        </template>
                    </template>
                </el-table-column>
            </el-table>
            <el-button
                v-if="initializedRecordCreatorProps.position === 'bottom'" 
                class="btn-add"
                plain 
                :size="defaultSize" 
                icon="el-icon-plus"
                :style="initializedRecordCreatorProps.style"
                v-bind="initializedRecordCreatorProps.buttonProps"
                @click="handleAdd"
            >
                {{ initializedRecordCreatorProps.creatorButtonText }}
            </el-button>
        </div>
    </el-form>
</template>

<script>
import ProFormItem from '../ProFormItem'
import CustomRender from '@/components/CustomRender'
import RenderCell from './components/RenderCell.vue';
import {
  setPlaceholder,
  setSelectOptions,
  setCascaderOptions,
} from "@/utils/form";
import { generateCryptoUID } from '@/utils/uid'

export default {
    name: 'EditableTable',
    components: {
        ProFormItem,
        CustomRender,
        RenderCell
    },
    props: {
        // 是否受控
        controlled: { // todo
            type: Boolean,
            default: false
        },
        // 表单默认值
        initialValues: {
            type: Object,
            default: () => {},
        },
        // table 渲染的元数据
        dataSource: {
            type: [Array, Function, undefined],
        },
        // el-table 的 row-key
        rowKey: {
            type: String,
            validator: function (value) {
                if (!this.controlled) {
                    return true
                }

                return !!value
            },
        },
        // 新建一行数据的相关配置
        recordCreatorProps: { // todo
            type: [Boolean, Object],
            default: true
        },
        // 最大的行数，到达最大行数新建按钮会自动消失
        maxLength: { // todo
            type: Number,
        },
        // 可编辑表格的相关配置
        editable: { // todo
            type: Object
        },
        // 表格数据请求加载状态，非受控时传入的是异步数据会自动添加
        loading: {
            type: Boolean,
        },
        // 组件内 el-form 的 className
        formClassName: {
            type: String,
        },
        // 组件内 el-table 的父盒子 className
        tableClassName: {
            type: String,
        },
        // el-table attributes 的配置
        tableProps: {
            type: Object,
            default: () => ({})
        },
        // el-table events 的配置
        tableEvents: {
            type: Object,
            default: () => ({})
        },
        // 列设置
        columns: {
            type: Array,
            required: true
        },
        // 默认的 size
        defaultSize: {
            type: String,
            validator: function (value) {
                return ["medium", "small", "mini"].includes(value);
            },
        },
    },
    computed: {
        // 初始化 tableProps
        initializedTableProps() {
            const { rowKey, defaultSize, tableProps, controlled } = this
            return {
                ...tableProps,
                size: defaultSize,
                'row-key': controlled ? rowKey : 'temp_uid'
            }
        },
        // 初始化新建
        initializedRecordCreatorProps() {
            const { recordCreatorProps } = this
            // 设置默认值
            const defaultRecordCreatorProps = {
                position: 'bottom',
                newRecordType: 'cache',
                creatorButtonText: '添加一行数据'
            }
            if (recordCreatorProps) {
                if (typeof recordCreatorProps === 'object') {
                    return {
                        ...defaultRecordCreatorProps,
                        ...recordCreatorProps
                    }
                }

                return defaultRecordCreatorProps
            }

            return {}
        },
        // 可编辑表格的相关配置
        initializedEditable() {
            const { editable } = this
            const defaultEditable = {
                type: 'single',
                saveText: '保存',
                deleteText: '删除',
                cancelText: '取消',
                deletePopconfirmMessage: '删除此项？',
                onlyOneLineEditorAlertMessage: '只能同时编辑一行',
                onlyAddOneLineAlertMessage: '只能新增一行'
            }

            return {
                ...defaultEditable,
                ...editable
            }
        },
        // 标准化列配置
        normalizedColumns() {
            const { columns } = this;

            return columns
                // 过滤不展示的
                .filter((item) => !item.hideInTable)
                .map((col) => {
                    // 过滤多余属性
                    const {
                        formItemProps = {},
                        valueType,
                        fieldProps = {},
                        fieldEvents,
                        options,
                        optionLoader,
                        initialValue,
                        ...keys
                    } = col;

                    // 设置 formItemProps
                    formItemProps.prop = col.prop;

                    // 设置 placeholder
                    setPlaceholder(fieldProps, valueType);

                    // 设置 select options
                    setSelectOptions(col, this.cachedOptions);

                    // 设置 cascader options
                    setCascaderOptions(fieldProps, col, this.cachedOptions);

                    return { 
                        ...keys,
                        valueType,
                        formItem: {
                            ...formItemProps,
                            valueType,
                            fieldProps,
                            fieldEvents,
                            options: col.options,
                        }
                    };
                });
        },
    },
    data() {
        return {
            globalLoading: false, // 加载中...
            form: { // 表单绑定值
                dataSource: [], // 表格数据绑定
            },
            cachedOptions: {}, // 下拉数据 { [prop]: data }
        }
    },
    async mounted() {
        try {
            const { controlled, dataSource } = this
            // 非受控
            this.globalLoading = true
            if (!controlled && typeof dataSource === 'function') {
                const res = await dataSource()
                this.form.dataSource = res.map(item => ({
                    ...item,
                    temp_uid: generateCryptoUID()
                }))
                this.globalLoading = false
            } else {
                setTimeout(() => {
                    this.globalLoading = false
                    this.form.dataSource = dataSource.map(item => ({
                        ...item,
                        temp_uid: generateCryptoUID()
                    }))
                })
            }
        } catch (err) {
            this.globalLoading = false
            console.log('err', err)
        }
    },
    methods: {
        /**
         * @desc 获取异步下拉数据
         */
        getOptions() {
            const { columns } = this;
            for (const column of columns) {
                const { prop, optionLoader } = column;
                if (optionLoader && typeof optionLoader === "function") {
                    optionLoader().then((res) => {
                        this.cachedOptions = {
                            ...this.cachedOptions,
                            [prop]: res,
                        };
                    });
                }
            }
        },
        /**
         * @desc 获取默认的行数据
         */
        getDefaultRowData() {
            const data = this.columns
                // 筛选表单类型
                .filter((item) => item.valueType && item.valueType !== 'option')
                .reduce((accu, cur) => {
                    const { prop, initialValue } = cur

                    return {
                        ...accu,
                        [prop]: initialValue
                    }
                }, {})

            return { ...this.initialValues, ...data };
        },
        /**
         * @desc 添加一行数据
         */
        handleAdd() {
            const { initializedRecordCreatorProps: { position, addRowRecord } } = this
            const defaultRowData = this.getDefaultRowData()

            if (typeof addRowRecord === 'function') {
                addRowRecord()
                return
            }

            const rowData = {
                ...defaultRowData,
                temp_uid: generateCryptoUID()
            }
            
            if (position === 'top') {
                this.form.dataSource.unshift(rowData)
            } else {
                this.form.dataSource.push(rowData)
            }
        },
        /**
         * @desc 获取 el-form 的引用
         */
        getFormRef() {
            return this.$refs.formRef
        },
        /**
         * @desc 获取 el-table 的引用
         */
        getTableRef() {
            return this.$refs.tableRef
        },
        /**
         * @desc 获取行数据
         */
        getRowData(rowIndex) {
            if (typeof rowIndex === 'number') {
                return this.form.dataSource[rowIndex]
            } else if (typeof rowIndex === 'string') {
                const { rowKey } = this
                return this.form.dataSource.find(item => item[rowKey] === rowIndex)
            }
        },
        /**
         * @desc 获取整个 table 的数据
         */
        getRowsData() {
            return this.form.dataSource.map(row => {
                const { temp_uid, ...keys } = row
                return { ...keys }
            })
        },
        /**
         * @desc 设置一行的数据
         */
        setRowData(rowIndex, data) {
            const { form: { dataSource } } = this
            if (typeof rowIndex === 'number') {
                const rowData = dataSource[rowIndex]
                dataSource.splice(rowIndex, 1, { ...rowData, ...data })
            } else if (typeof rowIndex === 'string') {
                const { rowKey } = this
                const index = dataSource.findIndex(item => item[rowKey] === rowIndex)
                if (index === -1) {
                    return
                }

                dataSource.splice(index, 1, { ...dataSource[index], ...data })
            }
        }
    }
}
</script>

<style>
.editable-table .thead-table .el-table__empty-block {
    min-height: unset;
}

.editable-table .thead-table .el-table__empty-text {
    width: 100%;
}

.editable-table .btn-add {
    width: 100%;
    margin: 10px 0;
    border-style: dashed;
}
</style>
