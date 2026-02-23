// axios基础的封装
import axios from 'axios'

const httpInstance = axios.create({
  baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
  timeout: 5000
})

// 请求拦截器
httpInstance.interceptors.request.use(config => {
  // 可以在这里添加请求头、token等信息
  return config
}, e => Promise.reject(e))

// 响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
  return Promise.reject(e)
})

export default httpInstance