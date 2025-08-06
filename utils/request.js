// axios 公共配置
// 基地址
axios.defaults.baseURL = 'http://geek.itheima.net'
// 请求拦截器
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token')
  token && (config.headers.Authorization = `Bearer ${token}`)
  return config
})
// 响应拦截器
axios.interceptors.response.use(
  function (response) {
    return response.data
  },
  function (error) {
    console.dir(error)
    if (error?.response?.status === 401) {
      alert('登录状态过期，请重新登录')
      localStorage.clear()
      location.href = '../login/index.html'
    }
    return Promise.reject(error)
  }
)
