import service from '@/request/http.js'
import qs from 'qs'
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

export function bannerDetail(data,ID) {  // 详情
  return service({
    url: '/admin/weixin/find_detail?'+qs.stringify(data),
    method: 'post',
		headers: {
			'sessionId': ID,
		}
  })
}

export function exportBannerExcel(data,ID) {  // 导出用户列表
  return service({
    url: '/admin/weixin/exportList',
    method: 'post',
		data:data,
		responseType: 'arraybuffer',
		headers: {
			'sessionId': ID,
		}
  })
}