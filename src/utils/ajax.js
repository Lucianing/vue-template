/**
 * @file:   文件描述
 * @author: lzc
 * @date:   2019-02-27
 */
import request from '@/utils/request'

/**
 * 动态URL，把urlParams里面的值按顺序填充到URL中
 * @param url {String} 带占位符的URL 如 /api/v1/{0}/{1}
 * @param urlParams {Array} 需要填充的数组， 如 [12, 20]
 * @return url {String} 返回正确的url， /api/v1/12/20
 */
const dynamicUrl = (url, urlParams) => {
  urlParams.forEach((item, index) => {
    url = url.replace(new RegExp(`\\{${index}\\}`, 'g'), item)
  })
  return url
}

/**
 * 请求方法函数
 * @param method
 * @return {function(*, *, *=): Promise<*>}
 */
const fetchMethodData = method => async (url, params, urlParams) => {
  return new Promise((resolve, reject) => {
    const obj = {
      url: url,
      method: method
    }
    if (params && Object.prototype.toString.call(params) === '[object Object]') {
      if (method.toLowerCase() === 'get') {
        obj.params = params
      } else {
        obj.data = params
      }
    }
    // 动态URL，需要配置 urlParams 数组
    if (urlParams && Object.prototype.toString.call(urlParams) === '[object Array]' && urlParams.length) {
      obj.url = dynamicUrl(url, urlParams)
    }
    request(obj).then(res => resolve(res)).catch(err => reject(err))
  })
}

/**
 * 请求方法
 * @param config
 * @return {Promise<*>}
 */
const fetchData = async config => {
  return new Promise((resolve, reject) => {
    const obj = {
      url: `${config.url}`,
      method: `${config.method}`
    }
    if (config.method.toLowerCase() === 'get') {
      obj.params = config.data
    } else {
      obj.data = config.data
    }
    // 动态URL，需要配置 config.urlParams 数组
    if (config.urlParams && Object.prototype.toString.call(config.urlParams) === '[object Array]' && config.urlParams.length) {
      const url = config.url
      obj.url = dynamicUrl(url, config.urlParams)
    }
    request(obj).then(res => resolve(res)).catch(err => reject(err))
  })
}

const ajax = {
  get: fetchMethodData('GET'),
  post: fetchMethodData('POST'),
  put: fetchMethodData('PUT'),
  delete: fetchMethodData('DELETE'),
  fetch: fetchData
}

export default ajax
