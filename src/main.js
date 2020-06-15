import 'bootstrap'
import '@/assets/style.scss'
import Vue from 'vue'
import Website from './Website.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Website)
}).$mount('#website')
