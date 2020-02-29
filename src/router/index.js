import Vue from 'vue'
import VueRouter from 'vue-router'
import Store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  { path: '/home', component: ()=> import('../views/home/home.vue') },
  { path: '/about', component: ()=> import('../views/about/about.vue') },
  { path: '/shop', component: ()=> import('../views/shop/shop.vue') },
  { path: '/profile', component: ()=> import('../views/profile/profile.vue') },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// router.beforeEach((to, from, next) => {
//   Store.state.sign = router.history.current.path
//   next()
// })
router.afterEach( route => {
  Store.state.sign = router.history.current.path
  //console.log(router.history.current.path);
})


export default router
