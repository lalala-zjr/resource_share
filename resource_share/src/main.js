import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import ElementUI from 'element-ui'
// import axios from 'axios'
import qs from 'qs'
import echarts from 'echarts'
import 'element-ui/lib/theme-chalk/index.css'
import axios from './store/axios'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.qs = qs
Vue.prototype.$echarts = echarts

router.afterEach((to, from, next) => {
  scrollTo(0, 0)
})

router.beforeEach((to, from, next) => {
  // 如果是登录页则放行
  if (to.path === '/') return next()
  // 查看token是否存在
  const token = sessionStorage.getItem('token')
  if (!token) return next('/')
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
