import service from '@/request/http.js'

export function getWeixinUserLocationStatics(ID) {  // 获取热力图信息
  return service({
    url: '/admin/weixin/getWeixinUserLocationStatics',
    method: 'post',
	headers: {
		'sessionId': ID,
	}
  })
}