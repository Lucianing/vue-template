/**
 * @file:   文件描述
 * @author: lzc
 * @date:   2019-02-27
 */

import axios from 'axios'

// 创建实例
const service = axios.create({
  baseURL: '/',
  timeout: 600000 // 请求超时时间
})

// 请求拦截
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.error(error)
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
  error => {
    console.error(error)
    return Promise.reject(error)
  }
)

export default service
