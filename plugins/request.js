/**
 * 基于 axios 封装的请求模块
 */

import axios from 'axios'

// 创建请求对象
export const request = axios.create({
  baseURL: 'http://realworld.api.fed.lagounews.com'
})

// 通过插件机制获取到上下文对象（query、params、req、res、app、store...）
// 插件导出函数必须作为 default 成员
export default (context) => {
  const {
    store
  } = context
  // 添加请求拦截器
  request.interceptors.request.use(function (config) {
    const {
      user
    } = store.state
    if (user && user.token) {
      config.headers.Authorization = `Token ${user.token}`
    }
    if (config.method === 'POST') {
      config.header['Content-Type'] = 'application/json'
    }
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

  // 添加响应拦截器
  request.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error.response);
  });
}