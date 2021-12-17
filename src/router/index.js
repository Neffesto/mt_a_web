import Vue from 'vue'
import VueRouter from 'vue-router'
import Description from '../views/Description.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Description',
    component: Description
  },
  {
    path: '/application',
    name: 'Application',

    component: () => import('../views/Application.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
