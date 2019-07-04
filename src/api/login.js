import service from '@/request/http.js'
import qs from 'qs'
export function login(data) {  // 用户分页的接口
  return service({
    url: '/admin/user/login?'+qs.stringify(data),
    method: 'post'
  })
}
