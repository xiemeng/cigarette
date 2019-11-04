import service from '@/request/http.js'
import qs from 'qs'
export function getWeixinUserLocationStatics(ID) {  // 获取热力图信息
  return service({
    url: '/admin/weixin/getWeixinUserLocationStatics',
    method: 'post',
		headers: {
			'sessionId': ID,
		}
  })
}

export function exportHotList(ID) {  // 导出热力图
  return service({
    url: '/admin/weixin/exportHotList',
    method: 'get',
		responseType: 'arraybuffer',
		headers: {
			'sessionId': ID,
		}
  })
}

export function getMouthNumByWeeks(data,ID) {  // 时间表
  return service({
    url: '/admin/smoke/getMouthNumByWeeks',
    method: 'post',
		data:data,
		headers: {
			'sessionId': ID,
		}
  })
}

export function exportWeekList(data,ID) {  // 导出时间图
  return service({
    url: '/admin/smoke/exportWeekList',
    method: 'get',
		params:data,
		responseType: 'arraybuffer',
		headers: {
			'sessionId': ID,
		}
  })
}

export function getMouthNumByPage(data,ID) {  // 获取抽烟记录
  return service({
    url: '/admin/smoke/find_page',
    method: 'post',
		data:data,
		headers: {
			'sessionId': ID,
		}
  })
}

export function deviceOrder(data,ID) {  // 排行榜
  return service({
    url: '/admin/weixin/find_page',
    method: 'post',
		data:data,
		headers: {
			'sessionId': ID,
		}
  })
}

export function deviceDetail(data,ID) {  // 排行榜详情
  return service({
    url: '/admin/weixin/find_detail?'+qs.stringify(data),
    method: 'post',
		headers: {
			'sessionId': ID,
		}
  })
}

export function exportRankList(data,ID) {  // 导出排行榜
  return service({
    url: '/admin/device/exportRankList',
    method: 'get',
		params:data,
		responseType: 'arraybuffer',
		headers: {
			'sessionId': ID,
		}
  })
}

export function exportDetail(data,ID) {  // 导出用户详情
  return service({
    url: '/admin/weixin/exportDetail?'+qs.stringify(data),
    method: 'get',
		responseType: 'arraybuffer',
		headers: {
			'sessionId': ID,
		}
  })
}

export function configDetail(ID) {  // 是否在app展示
  return service({
    url: '/admin/config/find_detail',
    method: 'post',
		headers: {
			'sessionId': ID,
		}
  })
}

export function configUpdate(data,ID) {  // 修改
  return service({
    url: '/admin/config/update',
    method: 'post',
		data:data,
		headers: {
			'sessionId': ID,
		}
  })
}