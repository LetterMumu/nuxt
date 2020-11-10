import axios from 'axios'
// 创建请求对象
const request = axios.create({
  baseUrl: 'https://conduit.productionready.io'
})

// 请求拦截器
// 响应拦截器
export default request