import 'bootstrap'
import '@/assets/style.scss'
import Vue from 'vue'
import VueMq from 'vue-mq'
import * as VueGoogleMaps from 'vue2-google-maps'
import Website from './Website.vue'
import router from './router'
import i18n from './i18n'

Vue.config.productionTip = false

Vue.use(VueMq, {
  breakpoints: {
    tablet: 992,
    desktop: Infinity
  },
  defaultBreakpoint: 'tablet'
})

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyA257_ta9LCveTnvVe6GFfqLUtTDquTErQ',
    libraries: 'visualization'
  }
})

new Vue({
  router,
  i18n,
  render: h => h(Website)
}).$mount('#website')
