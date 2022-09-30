import request from '@/utils/request.js'
export function login(data) {
  return request({
    url: '/api/user-service/user/login',
    method: 'POST',
    data
  })
}
export function vali(clientToken) {
  return request({
    url: `/api/user-service/user/imageCode/${clientToken}`,
    method: 'GET',
    responseType: 'blob'
  })
}
