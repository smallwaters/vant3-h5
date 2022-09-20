import axios from 'axios'
import { getToken } from '@/utils/auth'

const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: import.meta.env.VITE_API_DOMAIN,
  // 超时
  timeout: 10000,
})
// request拦截器
service.interceptors.request.use(
  (config) => {
    config.headers['token'] = getToken()
    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (res) => {
    console.log(res)
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default service
