// createRouter： 创建一个路由实例对象。它接受一个配置对象作为参数，包含路由的历史模式和路由表等信息
// createWebHistory:创建history模式的路由

import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // path和component对应关系的位置
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '', // 默认子路由
          component: Home
        },
        {
          path: '/category/:id', // 动态路由
          component: Category
        },
        {
          path: '/category/sub/:id', // 动态路由
          component: SubCategory
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ],
})

export default router
