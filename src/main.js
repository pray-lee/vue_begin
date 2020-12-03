import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from "vue-axios";
import App from './App.vue'



Vue.config.productionTip = false
Vue.use(VueAxios, axios)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
