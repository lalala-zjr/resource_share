import axios from 'axios'
const config = {
// baseURL: 'http://localhost:8081/reagent',
// timeout: 60 * 1000,
// withCredentials: true,
// changeOrigin: true
}

const _axios = axios.create(config)

// 异步请求前在header里加入token
_axios.interceptors.request.use(
  config => {
    // 判断是否存在token，如果存在的话，则每个http header都加上token
    let token = sessionStorage.getItem('token')
    if (!config.headers.hasOwnProperty('token') && token) {
      config.headers.token = token
    }
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

_axios.interceptors.response.use(
  response => {
    if (response.data.status === 403) {
      this.$message.error(Response.data.message)
      sessionStorage.removeItem('token')
      this.$router.push('/')
    } else {
      return response
    }
  },
  error => {
    return Promise.reject(error)
  }
)
export default _axios
