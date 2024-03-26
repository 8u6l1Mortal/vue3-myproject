// createRouter 是 Vue Router 4.x 新增的方法，用于创建一个新的路由实例。
// createWebHashHistory 是用于创建基于 hash 模式的路由历史记录（history）对象。
// import VueRouter from "vue-router" 只能使用解构导出，因为vue-router没有使用defalt导出法
import { createRouter, createWebHashHistory } from 'vue-router'

// 1. 定义路由组件
// const Home = { template: '<div>Home</div>' }
// const Home = { render() { return '@/view/Home/index.vue' } }

// 2. 定义一些路由 每个路由都需要映射到一个组件。
const routes = [
  {
    path: "/", component: () => import('../view/Home/index.vue')
  }
]

// 3. 创建路由实例并传递 `routes` 配置  
// 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
const router = createRouter({
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

// 4.后期定义路由守卫拦截登录黑白名单操作

// 5.导出路由
export default router