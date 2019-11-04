import service from '@/request/http.js'
import qs from 'qs'
export function messagePage(data,ID) {  // 烟型分页列表
  return service({
    url: '/admin/ectype/find_page',
    method: 'post',
    data:data,
	headers: {
		'sessionId': ID
	}
  })
}

export function messageInsert(data,ID) {  // 烟型分页 增加
  return service({
    url: '/admin/ectype/insert',
    method: 'post',
    data:data,
	headers: {
		'sessionId': ID
	}
  })
}

export function messageUpdate(data,ID) {  // 烟型分页 修改
  return service({
    url: '/admin/ectype/update',
    method: 'post',
    data:data,
	headers: {
		'sessionId': ID
	}
  })
}

export function messageDelete(data,ID) {  // 烟型分页 修改
  return service({
    url: '/admin/ectype/delete?'+qs.stringify(data),
    method: 'post',
		headers: {
			'sessionId': ID
		}
  })
}

export function messageExportList(ID) {  // 导出列表
  return service({
    url: '/admin/ectype/exportList',
    method: 'get',
		responseType: 'arraybuffer',
		headers: {
			'sessionId': ID
		}
  })
}