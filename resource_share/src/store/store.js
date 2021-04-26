import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  // 存储token
    token: sessionStorage.getItem('token') ? sessionStorage.getItem('token') : ''
  },
  mutations: {
    // 设置token，并将token存入localStorage
    setToken (state, user) {
      state.token = user.token
      sessionStorage.setItem('token', user.token)
    },
    // 清除token
    delToken (state) {
      state.token = ''
      sessionStorage.removeItem('token')
    }
  },
  actions: {},
  modules: {}
})
