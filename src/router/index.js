import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/audio',
    name:'audio',
    component:()=> import('../views/AudioVisual.vue')
  },
  {
    path:'/list/:type',
    name:'list',
    component:()=> import('../views/List.vue')
  },
  ,
  {
    path:'/detail/:id',
    name:'detail',
    component:()=> import('../views/Detail.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
