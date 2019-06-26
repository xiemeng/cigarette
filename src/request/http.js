
import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import Toast from 'vant/lib/toast'
import 'vant/lib/toast/style'


axios.defaults.timeout = 5000
axios.interceptors.request.use(
  config => {
    // const token = getCookie() //重要数据存入cookie，调用js-cookie的方法
    config.data = JSON.stringify(config.data)
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    //判断token，配合vuex更新登录状态
    // if(token){
    //   config.params = {
    // 'token':token,
    // 'id':id
    //}
    // }
    return config
  },
  error => {
    return Promise.reject(err)
  }
)
axios.interceptors.response.use(
  response => {
    switch (response.status) {
      case 100:
        Toast('100 - 继续。');
        break;
      case 101:
        Toast('101 - 服务器根据客户端的请求切换协议。' + response.config.url);
        break;
      case 200:
        return response;
        break;
      case 201:
        Toast('201 - 成功请求并且创建了新的资源' + response.config.url);
        return response;
        break;
      case 202:
        Toast('202 - 已经接受请求，但未处理完成' + response.config.url);
        return response;
        break;
      case 203:
        Toast('203 - 非授权信息。请求成功。但返回的meta信息不在原始的服务器，是一个副本' + response.config.url);
        return response;
        break;
      case 204:
        Toast('204 - 无内容。服务器成功处理，但未返回内容。在未更新网页的情况下，可确保浏览器继续显示当前文档' + response.config.url);
        return response;
        break;
      case 205:
        Toast('205 - 重置内容。服务器处理成功，用户终端（例如：浏览器）应重置文档视图。可通过此返回码清除浏览器的表单域' + response.config.url);
        return response;
        break;
      case 206:
        Toast('206 - 部分内容。服务器成功处理了部分GET请求' + response.config.url);
        return response;
        break;
      case 300:
        Toast('300 - 多种选择。请求的资源可包括多个位置，相应可返回一个资源特征与地址的列表用于用户终端（例如：浏览器）选择' + response.config.url);
        break;
      case 301:
        Toast('301 - 永久移动。请求的资源已被永久的移动到新URI，返回信息会包括新的URI，浏览器会自动定向到新URI。今后任何新的请求都应使用新的URI代替' + response.config.url);
        break;
      case 302:
        Toast('302 - 临时移动。与301类似。但资源只是临时被移动。客户端应继续使用原有URI' + response.config.url);
        break;
      case 303:
        Toast('303 - 查看其它地址。与301类似。使用GET和POST请求查看' + response.config.url);
        break;
      case 304:
        Toast('304 - 未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源' + response.config.url);
        break;
      case 305:
        Toast('305 - 使用代理。所请求的资源必须通过代理访问' + response.config.url);
        break;
      case 306:
        Toast('306 - 已经被废弃的HTTP状态码' + response.config.url);
        break;
      case 307:
        Toast('307 - 临时重定向。与302类似。使用GET请求重定向' + response.config.url);
        break;
      case 400:
        Toast('400 - 客户端请求的语法错误，服务器无法理解' + response.config.url);
        break;
      case 401:
        Toast('401 - 请求要求用户的身份认证' + response.config.url);
        break;
      case 402:
        Toast('402 - 保留，将来使用' + response.config.url);
        break;
      case 403:
        Toast('403 - 服务器理解请求客户端的请求，但是拒绝执行此请求' + response.config.url);
        break;
      case 404:
        Toast('404 - 服务器无法根据客户端的请求找到资源（网页）。' + response.config.url);
        break;
      case 405:
        Toast('405 - 客户端请求中的方法被禁止' + response.config.url);
        break;
      case 406:
        Toast('406 - 服务器无法根据客户端请求的内容特性完成请求' + response.config.url);
        break;
      case 407:
        Toast('407 - 请求要求代理的身份认证，与401类似，但请求者应当使用代理进行授权' + response.config.url);
        break;
      case 408:
        Toast('408 - 服务器等待客户端发送的请求时间过长，超时' + response.config.url);
        break;
      case 409:
        Toast('409 - 服务器完成客户端的PUT请求是可能返回此代码，服务器处理请求时发生了冲突' + response.config.url);
        break;
      case 410:
        Toast('410 - 客户端请求的资源已经不存在。410不同于404，如果资源以前有现在被永久删除了可使用410代码，网站设计人员可通过301代码指定资源的新位置' + response.config.url);
        break;
      case 411:
        Toast('411 - 服务器无法处理客户端发送的不带Content-Length的请求信息' + response.config.url);
        break;
      case 412:
        Toast('412 - 客户端请求信息的先决条件错误' + response.config.url);
        break;
      case 413:
        Toast('413 - 由于请求的实体过大，服务器无法处理，因此拒绝请求。为防止客户端的连续请求，服务器可能会关闭连接。如果只是服务器暂时无法处理，则会包含一个Retry-After的响应信息' + response.config.url);
        break;
      case 414:
        Toast('414 - 请求的URI过长（URI通常为网址），服务器无法处理' + response.config.url);
        break;
      case 415:
        Toast('415 - 服务器无法处理请求附带的媒体格式' + response.config.url);
        break;
      case 416:
        Toast('416 - 客户端请求的范围无效' + response.config.url);
        break;
      case 417:
        Toast('417 - 服务器无法满足Expect的请求头信息' + response.config.url);
        break;
      case 500:
        Toast('500 - 服务器内部错误，无法完成请求' + response.config.url);
        break;
      case 501:
        Toast('501 - 服务器不支持请求的功能，无法完成请求' + response.config.url);
        break;
      case 502:
        Toast('502 - 充当网关或代理的服务器，从远端服务器接收到了一个无效的请求' + response.config.url);
        break;
      case 503:
        Toast('503 - 由于超载或系统维护，服务器暂时的无法处理客户端的请求。延时的长度可包含在服务器的Retry-After头信息中' + response.config.url);
        break;
      case 504:
        Toast('504 - 充当网关或代理的服务器，未及时从远端服务器获取请求' + response.config.url);
        break;
      case 505:
        Toast('505 - 服务器不支持请求的HTTP协议的版本，无法完成处理' + response.config.url);
        break;
      default:
        Toast('未知错误' + response.config.url);
    }
  },
  error => {
      return Promise.reject(error)
  }
)
export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get('/api/' + url, {
      params: params
    })
      .then(response => {
        resolve(response)
      })
      .catch(err => {
        reject(err)
      })
  })
}
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post('/api/' + url, qs.stringify(data))
      .then(response => {
        resolve(response)
      }, err => {
        reject(err)
      })
  })
}

