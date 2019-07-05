import service from '@/request/http.js'
import qs from 'qs'

export function columPage(data,ID) {  // 设备分页
  return service({
    url: '/admin/cigarette/find_page',
    method: 'post',
    data:data,
	headers: {
		'sessionId': ID
	}
  })
}

export function columAdd(data,ID) {  // 新增
  return service({
    url: '/admin/cigarette/insert',
    method: 'post',
    data:data,
	headers: {
		'sessionId': ID
	}
  })
}

export function columType(data,ID) {  // 后台烟型接口
  return service({
    url: '/admin/ectype/find_page',
    method: 'post',
    data:data,
	headers: {
		'sessionId': ID
	}
  })
}

export function getOSSUploadUrl(data) {  // 文件上传接口
  return service({
    url: '/base/h5/getCOSUploadUrl/{suffix}',
    method: 'get',
	params:data,
	headers: {
		'contentType': 'application/x-img'
	}
  })
}

export function exportList(ID) {  // 导出列表
	return service({
      url: '/admin/cigarette/exportList',
      method: 'post',
		responseType: 'arraybuffer',
		headers: {
			'sessionId': ID,
		}
    })
}

