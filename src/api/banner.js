import service from '@/request/http.js'

export function bannerPage(data,ID) {  // 微信用户列表
  return service({
    url: '/admin/weixin/find_page',
    method: 'post',
    data:data,
		headers: {
			'sessionId': ID,
		}
  })
}