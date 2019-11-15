import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引入axios
import axios from 'axios'
import VueAxios from 'vue-axios'

//使用
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
