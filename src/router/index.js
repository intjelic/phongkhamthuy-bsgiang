import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import Questions from '../views/Questions.vue'
import News from '../views/News.vue'
import Shop from '../views/Shop.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/questions',
    name: 'Questions',
    component: Questions
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
