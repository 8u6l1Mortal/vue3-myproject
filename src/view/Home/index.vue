<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "App",
  setup() {
    const router = useRouter();
    const msg = "Hello Vue3!";
    // setup函数在
    // 左侧菜单栏beforeCreate之前执行,此时this还不是组件实例，所以this是 undefined
    const isCollapse = ref(false);
    const menuBarData = [
      {
        menuName: "系统管理",
        id: "system",
        children: [
          {
            menuName: "字典管理",
            id: "dictionaries",
            path: "dictionaries",
          },
          {
            menuName: "点位管理",
            id: "inode",
            path: "inode",
          },
          {
            menuName: "设备管理",
            id: "equipment",
            path: "equipment",
          },
          {
            menuName: "安保管理",
            id: "security",
          },
          {
            menuName: "登录日志",
            id: "loginLog",
          },
          {
            menuName: "操作日志",
            id: "handleLog",
          },
        ],
      },
      {
        menuName: "权限管理",
        id: "authority",
        children: [
          {
            menuName: "字典管理",
            id: "dictionaries",
            path: "dictionaries",
          },
          {
            menuName: "点位管理",
            id: "inode",
          },
          {
            menuName: "设备管理",
            id: "equipment",
          },
          {
            menuName: "安保管理",
            id: "security",
          },
          {
            menuName: "登录日志",
            id: "loginLog",
          },
          {
            menuName: "操作日志",
            id: "handleLog",
          },
        ],
      },
    ];
    const menulikeApi = (path) => {
      if (path) {
        console.log(router, " router");
        router.push(path);
      }
    };
    return {
      msg,
      isCollapse,
      menuBarData,
      menulikeApi,
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
        :unique-opened="true"
        :collapse="isCollapse"
        default-active="2"
        text-color="#fff"
      >
        <el-sub-menu
          :index="index + ''"
          v-for="(item, index) in menuBarData"
          :key="item.id"
        >
          <template #title>
            <el-icon><location /></el-icon>
            <span>{{ item.menuName }}</span>
          </template>
          <Menu-Item-Group v-if="item.children && item.children.length > 0">
            <el-menu-item
              v-for="(child, inx) in item.children"
              :key="child.id"
              :index="index + '-' + inx"
              @click="menulikeApi(child.path)"
            >
              <el-icon><document /></el-icon>
              <span>{{ child.menuName }}</span>
            </el-menu-item>
          </Menu-Item-Group>
        </el-sub-menu>
      </el-menu>
    </div>
    <div class="main-body">
      <div class="main-title">
        <span @click="isCollapse = !isCollapse">
          <el-icon v-if="isCollapse"><Fold /></el-icon>
          <el-icon v-if="!isCollapse"><Expand /></el-icon>
        </span>
        <span>
          <el-icon><RefreshLeft /></el-icon>
          <el-icon><UserFilled /></el-icon
        ></span>
      </div>
      <div class="main-container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<style lang="less">
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  .menuBar {
    // width: 230px;
    height: 100%;
    background-color: #545c64;
    overflow-y: hidden;
  }

  .main-body {
    flex: 1;
    height: 100%;

    .main-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 30px;
      padding: 0 5px;
      color: #fff;
      background-color: #545c64;
      box-shadow: 0, 0, 0, 0.4;
    }

    .main-container {
      padding: 20px;
      height: calc(100% - 30px);
    }
  }
}
</style>