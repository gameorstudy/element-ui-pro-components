<template>
  <div style="padding: 24px">
    <ProTable
      :defaultData="defaultData"
      :dataSource="dataSource"
      :total="12"
      tableClassName="pro-table-demo1"
      :columns="columns"
      :paginationProps="{
        'page-sizes': [10, 20, 30],
        'hide-on-single-page': false,
        pageKey: 'page',
        sizeKey: 'size',
      }"
      :manualRequest="true"
      @onCollapse="handleCollapse"
      @onParams="onParams"
    >
      <!-- 状态 label -->
      <!-- start -->
      <template #state-label="{ formItem }">
        <span style="color: red">{{ formItem.label }}</span>
      </template>
      <!-- end -->
      <!-- default slot -->
      <!-- start -->
      <!-- <div style="flex: 1; display: flex; justify-content: space-between; margin-right: 10px;">
        <el-button type="primary">新建</el-button>
        <el-button>最右侧按钮</el-button>
      </div> -->
      <!-- end -->
    </ProTable>
    <el-button type="primary" @click="handleClick">切换</el-button>
  </div>
</template>

<script>
import ProTable from "../../../components/ProTable";
export default {
  name: "ProTableDemo1",
  components: {
    ProTable,
  },
  computed: {
    columns() {
      return [
        {
          width: 240,
          label: "标题",
          prop: "title",
          valueType: "input",
        },
        {
          label: "状态",
          prop: "state",
          labelSlot: true,
          disabled: true,
          valueType: "select",
          options: [
            { label: "未解决", value: "open" },
            { label: "已解决", value: "success", disabled: true },
            { label: "解决中", value: "processing" },
          ],
          formatter: (row) => {
            return row.state === "open"
              ? "未解决"
              : row.state === "success"
              ? "已解决"
              : "解决中";
          },
        },
        {
          "min-width": 240,
          label: "进度",
          prop: "progress",
          valueType: "input",
          renderCell: (scope) => (
            <span>
              <span style="color: red">{scope.row.progress}</span>%
            </span>
          ),
        },
        {
          "min-width": 240,
          label: "金额",
          prop: "money",
          valueType: "input",
          renderCellHeader: (scope) => (
            <span>
              {scope.column.label}
              <span style="color: red">自定义标题</span>
            </span>
          ),
        },
        {
          "min-width": 240,
          label: "代码",
          prop: "code",
          valueType: "input",
          hideInSearch: this.hide,
        },
        {
          "min-width": 240,
          label: "创建时间",
          prop: "createDate",
          valueType: "date-picker",
          fieldProps: {
            type: "daterange",
            "start-placeholder": "请选择",
            "end-placeholder": "请选择",
          },
        },
        {
          width: 120,
          valueType: 'option',
          label: "操作",
          fixed: "right",
          disabled: true,
          key: "action",
          renderCell: (scope) => (
            [
              <el-button type="text">详情</el-button>,
              <el-button type="text">编辑</el-button>
            ]
          ),
        },
      ];
    },
  },
  data() {
    return {
      hide: false,
      defaultData: [
        {
          title: "标题一",
          state: "open",
          progress: "0",
          money: "1000",
          code: "JavaScript",
          createDate: "2026-01-01",
        },
        {
          title: "标题二",
          state: "success",
          progress: "100",
          money: "4000",
          code: "Java",
          createDate: "2026-01-13",
        },
      ],
      dataSource: [],
    };
  },
  methods: {
    handleClick() {
      this.dataSource = this.defaultData.slice(0, 1);
    },
    handleCollapse(collapsed) {
      console.log(collapsed);
    },
    onParams(params) {
      console.log("params", params);
    },
  },
};
</script>

<style scoped></style>
