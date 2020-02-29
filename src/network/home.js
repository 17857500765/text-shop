import {request} from './requese'

export function getHomeData(){
  return request({
    url: '/home/multidata'
  })
}