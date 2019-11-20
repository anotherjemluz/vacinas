import Vue from 'vue'
import App from './App.vue'
import store from './store'

// import router from './router'

import AOS from 'aos'
import BootstrapVue from 'bootstrap-vue'

import hzqingVueTimeline from 'hzqing-vue-timeline'

Vue.config.productionTip = false

AOS.init();
Vue.use(BootstrapVue)
Vue.use(hzqingVueTimeline)

new Vue({
  // router,
  store,
  render: h => h(App)
}).$mount('#app')
