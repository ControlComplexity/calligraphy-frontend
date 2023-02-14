import { createRouter, createWebHashHistory  } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TheoryDetail from '@/components/TheoryDetail.vue'
const routes = [
  
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
 
  {
    path: '/copybook',
    name: 'copybook',
    component: () => import(/* webpackChunkName: "about" */ '../views/Copybook.vue')
  },
  // {
  //   path: '/children',
  //   name: 'children',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/ChildrenEducation.vue')
  // },
  {
    path: '/children',
    name: 'Swiper',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/mySwiper/index.vue')
  },
  {
    path: '/university',
    name: 'university',
    component: () => import(/* webpackChunkName: "about" */ '../views/activitySwiper/index.vue')
  },
  {
    path: '/theory',
    name: 'theory',
    component: () => import(/* webpackChunkName: "about" */ '../views/EducationTheory.vue')
  },
  {
    path: '/tech',
    name: 'tech',
    component: () => import(/* webpackChunkName: "about" */ '../views/Tech.vue')
  },
  {
    path: '/communicate',
    name: 'communicate',
    component: () => import(/* webpackChunkName: "about" */ '../views/Communicate.vue')
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
  {
    name: 'theoryDetail', // 命名路由
    path: '/theory_detail/:id', // 动态二级路由
    component: TheoryDetail
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
