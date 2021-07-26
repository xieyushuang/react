import axios from "axios"

axios.interceptors.request.use(function (config) {
  let token = window.localStorage.getItem("accessToken")
  if (token) {
      config.headers.Authorization = token;    //将token放到请求头发送给服务器
      return config;
  }
}, function (error) {
  return Promise.reject(error);
})

export default axios