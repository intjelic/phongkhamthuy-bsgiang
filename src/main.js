import 'bootstrap'
import '@/assets/style.scss'
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import Website from './Website.vue'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyA257_ta9LCveTnvVe6GFfqLUtTDquTErQ',
    libraries: 'visualization'
  }
})

new Vue({
  router,
  render: h => h(Website)
}).$mount('#website')
