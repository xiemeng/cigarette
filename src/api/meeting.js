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

export function meetUpdate(data,ID) {  // 用户更改
  return service({
    url: '/admin/user/update',
    method: 'post',
    data:data,
	headers: {
		'sessionId': ID
	}
  })
}

export function meetDetail(data,ID) {  // 用户详情
  return service({
    url: '/admin/user/find_detail?'+qs.stringify(data),
    method: 'post',
		headers: {
			'sessionId': ID
		}
  })
}

export function meetDelete(data,ID) {  // 用户删除
  return service({
    url: '/admin/user/delete?'+qs.stringify(data),
    method: 'post',
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

export function meetuserPage(data,ID) {  // 角色分页
  return service({
    url: '/admin/role/find_page',
    method: 'post',
		data:data,
		headers: {
			'sessionId': ID
		}
  })
}

export function meetuserInsert(data,ID) {  // 角色新增
  return service({
    url: '/admin/role/insert',
    method: 'post',
		data:data,
		headers: {
			'sessionId': ID
		}
  })
}

export function meetuserUpdate(data,ID) {  // 角色修改
  return service({
    url: '/admin/role/update',
    method: 'post',
		data:data,
		headers: {
			'sessionId': ID
		}
  })
}

export function meetuserDetail(data,ID) {  // 查看详情
  return service({
    url: '/admin/role/find_detail?'+qs.stringify(data),
    method: 'post',
		headers: {
			'sessionId': ID
		}
  })
}

export function meetuserDelete(data,ID) {  // 删除
  return service({
    url: '/admin/role/delete?'+qs.stringify(data),
    method: 'post',
		headers: {
			'sessionId': ID
		}
  })
}

export function menuList(ID) {  // 后台菜单接口
  return service({
    url: '/admin/menu/find_list',
    method: 'post',
		headers: {
			'sessionId': ID
		}
  })
}