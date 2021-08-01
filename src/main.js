import Vue from 'vue'
import App from './App.vue'
import router from './router'

import stepProgress from '@/index';
Vue.use(stepProgress);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
