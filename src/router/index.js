import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const routes = [
  {
    name:'demo',
    path: '/',
    component: () => import(/* webpackChunkName: "demo" */'@/views/demo/index'),
  },
]
const router = new VueRouter({
  routes
})
export default router
