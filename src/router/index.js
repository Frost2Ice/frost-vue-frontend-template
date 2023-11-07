import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import FullPageLayout from '@/layouts/fullPage/FullPageLayout.vue'
import HomeLayout from '@/layouts/home/HomeLayout.vue'

const routes = [
  {
    path: '/',
    component: FullPageLayout.vue,
    redirect: () => {
      return 'login'
    },
    children: [
      {
        path: '/login',
        name: 'login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "home" */ '@/views/LoginView.vue'),
        component: LoginView,
      },
    ],
  },
  {
    path: '/home',
    component: HomeLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView,
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    redirect: () => {
      return 'login'
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
