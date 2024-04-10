<script setup>
import { reactive, ref } from "vue";
import add from "./components/add.vue";
// ==> 增,删,改功能

const handleEdit = (index, row) => {};
const handleDelete = (index, row) => {};
// ==> 查询功能
const form = reactive({
  name: "",
});

// ==> 分页器
let pageSize = ref("");
let currentPage = ref("");
const handleSizeChange = (val) => (pageSize.value = val);
const handleCurrentChange = (val) => (currentPage.value = val);

// ==> 表格原始数据
let tableData = reactive([
  {
    userName: "租户类型",
    level: "编码",
    state: "正常",
    remark: "租户类型",
  },
]);
// 添加弹框
const dialogVisible = ref(false);
const handleAdd = () => {
  dialogVisible.value = true;
};
// 关闭添加弹框
const childClose = (value) => {
  if (value) {
    tableData.push(value);
  }
  console.log(tableData, "value", value);
  dialogVisible.value = false;
};
// ==> 表格筛选数据
let filterData = [];
</script>
<template>
  <!-- 设备管理dictionaries -->
  <el-card class="dictionaries">
    <div class="actionBar">
      <div class="search">
        <el-form :model="form" label-width="auto" style="max-width: 600px">
          <el-form-item label="">
            <el-input v-model="form.name" placeholder="请输入编码或者名称" />
          </el-form-item>
        </el-form>
        <div class="handle">
          <el-button type="primary">查询</el-button>
          <el-button type="primary" plain>重置</el-button>
        </div>
      </div>
      <div class="add">
        <el-button type="primary" @click="handleAdd">新增</el-button>
      </div>
    </div>
    <div class="main">
      <el-table
        class="listTable"
        :data="tableData"
        border
        height="100%"
        style="width: 95%"
      >
        <el-table-column type="index" label="序号" width="60" align="center" />
        <el-table-column prop="userName" label="用户名称" width="200" />
        <el-table-column prop="coding" label="最新登录时间" width="300" />
        <el-table-column prop="level" label="权限等级" width="200" />
        <el-table-column prop="remark" label="备注" width="500" />
        <el-table-column label="操作" align="center">
          <template #default="scope">
            <el-button
              size="small"
              type="warning"
              plain
              @click="handleEdit(scope.$index, scope.row)"
              >修改</el-button
            >
            <el-button
              size="small"
              type="danger"
              plain
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      class="pagination"
      :page-sizes="[3, 5, 10, 20, 50, 100]"
      background
      small
      layout="total, prev, pager, next, sizes"
      :total="tableData.length"
      :hide-on-single-page="false"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </el-card>
  <!-- 添加弹框 -->
  <el-dialog
    v-model="dialogVisible"
    title="新增"
    width="50%"
    :before-close="handleClose"
  >
    <add @childClose="childClose" />
  </el-dialog>
</template>
<style lang="less">
.dictionaries {
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  // background-color: #ccc;

  .el-card__body {
    height: 100%;
    width: 100%;

    .actionBar {
      display: flex;
      justify-content: space-between;
      .search {
        display: flex;
        height: 50px;

        .handle {
          margin-left: 20px;
        }
      }
    }

    .main {
      width: 100%;
      height: calc(100% - 100px);

      ::v-deep.el-table__header {
        background-color: #f5f7fa;
      }
    }

    .pagination {
      position: absolute;
      bottom: 10px;
      right: 10px;
    }
  }
}
</style>