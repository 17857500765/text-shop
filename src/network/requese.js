import axios from 'axios'

export function request(config){
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000/api/wh'
  })
  instance.interceptors.request.use(config =>{
    return config
  }, err =>{
    console.log("请求失败1");
  })
  
  instance.interceptors.response.use(config =>{
    return config
  }, err =>{
    console.log("请求失败2");
  })
  return instance(config)
}