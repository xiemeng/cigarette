import service from '@/request/http.js'
import qs from 'qs'

export function meetPage(data,ID) {  // 用户分页
  return service({
    url: '/admin/user/find_page',
    method: 'post',
    data:data,
	headers: {
		'sessionId': ID
	}
  })
}

export function meetAdd(data,ID) {  // 用户新增
  return service({
    url: '/admin/user/insert',
    method: 'post',
    data:data,
	headers: {
		'sessionId': ID
	}
  })
}

export function meetList(ID) {  // 获取角色列表
  return service({
    url: '/admin/role/find_list',
    method: 'post',
	headers: {
		'sessionId': ID
	}
  })
}