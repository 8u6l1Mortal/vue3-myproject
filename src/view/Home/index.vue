<script>
export default {
  name: "App",
  setup() {
    const msg = "Hello Vue3!";
    // 左侧菜单栏

    return {
      msg,
    };
  },
};
</script>
<template>
  <div class="container">
    <div class="menuBar">
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <span>系统管理</span>
          </template>
          <el-menu-item index="1-1">字典管理</el-menu-item>
          <el-menu-item index="1-2">点位管理</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
    <div class="main-body"></div>
  </div>
</template>
<style lang="less">
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  .menuBar {
    width: 230px;
    height: 100%;
    background-color: #545c64;
    padding-right: 1px;
    overflow-y: hidden;
  }

  .main-body {
    flex: 1;
    height: 100%;
  }
}
</style>