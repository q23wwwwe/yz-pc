import axios from 'axios'
import { Toast } from 'vant'

const api = {}

axios.interceptors.request.use((request) => {
  Toast.loading({
    message: '加载中...',
    duration: 0,
    forbidClick: true,
    loadingType: 'spinner'
  })
  return request
}, function (error) {
  Toast.clear()
  return Promise.reject(error)
})

axios.interceptors.response.use((response) => {
  Toast.clear()
  return response
}, function (error) {
  Toast.fail('网络不佳，请重试')
  return Promise.reject(error)
})

api.post = (url, data) => {
  return axios({
    method: 'POST',
    url: url,
    data: data,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

api.postForm = (url, data) => {
  return axios({
    method: 'POST',
    url: url,
    transformRequest: [
      function (oldData) {
        let newStr = ''
        for (let item in oldData) {
          newStr += encodeURIComponent(item) + '=' + encodeURIComponent(oldData[item]) + '&'
        }
        newStr = newStr.slice(0, -1)
        return newStr
      }
    ],
    data: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

api.get = (url) => {
  return axios.get(url)
}

export default api
