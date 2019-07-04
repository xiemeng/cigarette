import service from '@/request/http.js'

export function bannerPage(data,ID) {  // 用户分页的接口
  return service({
    url: '/admin/user/find_page',
    method: 'post',
    data:data,
	headers: {
		'sessionId': ID,
		'aaa':'222'
	}
  })
}