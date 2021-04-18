import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import qs from 'qs'
import echarts from 'echarts'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.qs = qs
Vue.prototype.echarts = echarts

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
