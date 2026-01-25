<template>
    <el-form 
        class="editable-table" 
        :class="formClassName"
        :model="form"
    >
        <div :class="tableClassName" v-loading="globalLoading">
            <el-table class="thead-table">
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
                    <el-button class="btn-add" plain icon="el-icon-plus">添加一行数据</el-button>
                </template>
            </el-table>
            <el-table 
                ref="tableRef"
                :show-header="false"
                :data="form.dataSource"
                v-bind="initializedTableProps"
                v-on="tableEvents"
            >
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
                    <template #default="scope">
                        <!-- pro-form-item -->
                        <!-- start -->
                        <ProFormItem
                            :indexProp="`dataSource.${scope.$index}.${column.prop}`"
                            :item="column.formItem" 
                            :form="scope.row"
                        />
                        <!-- end -->
                        <!-- <el-form-item>
                            <template v-if="column.renderCell" #default="scope">
                                自定义 render
                                start
                                <custom-render :render="() => column.renderCell(scope)" />
                                end
                            </template>
                        </el-form-item> -->
                    </template>
                </el-table-column>
            </el-table>
            <el-button class="btn-add" plain icon="el-icon-plus" style="margin: 10px 0">添加一行数据</el-button>
        </div>
    </el-form>
</template>

<script>
import ProFormItem from '../ProFormItem'
import {
  setPlaceholder,
  setSelectOptions,
  setCascaderOptions,
} from "@/utils/form";
import { generateCryptoUID } from '@/utils/uid'

export default {
    name: 'EditableTable',
    components: {
        ProFormItem
    },
    props: {
        // 是否受控
        controlled: { // todo
            type: Boolean,
            default: false
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
        // 组件内 el-table 的 className
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
        columns: { // todo
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
                        formItem: {
                            ...formItemProps,
                            valueType,
                            fieldProps,
                            fieldEvents,
                            options: col.options,
                        }
                    };
                });
        }
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
    border-style: dashed;
}
</style>