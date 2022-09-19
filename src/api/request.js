
import service from '@/api/service'

const request = {}

// get 请求
request.$get = (url, params = {}, config = {}) => {
  return service({
    url,
    method: 'get',
    config,
    params
  })
}

// post 请求
request.$post = (url, data = {}, config = {}) => {
  return service({
    url,
    method: 'post',
    config,
    data
  })
}

export default request