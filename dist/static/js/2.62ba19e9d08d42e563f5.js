webpackJsonp([2],{J0Oq:function(t,e,n){"use strict";e.__esModule=!0;var r,o=n("rVsN"),i=(r=o)&&r.__esModule?r:{default:r};e.default=function(t){return function(){var e=t.apply(this,arguments);return new i.default(function(t,n){return function r(o,a){try{var s=e[o](a),c=s.value}catch(t){return void n(t)}if(!s.done)return i.default.resolve(c).then(function(t){r("next",t)},function(t){r("throw",t)});t(c)}("next")})}}},PeWV:function(t,e){},XqSp:function(t,e,n){var r=function(){return this}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("k9rz"),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}},gMEU:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("lC5x"),o=n.n(r),i=n("J0Oq"),a=n.n(i);var s=function(t){(t=t||{}).data=t.data||{};var e=t.jsonp?function(t){var e=t.jsonp,r=document.getElementsByTagName("head")[0];t.data.callback=e;var o=n(t.data),i=document.createElement("script");r.appendChild(i),window[e]=function(n){r.removeChild(i),clearTimeout(i.timer),window[e]=null,t.success&&t.success(n)},i.src=t.url+"?"+o,t.time&&(i.timer=setTimeout(function(){window[e]=null,r.removeChild(i),t.error&&t.error({message:"超时"})},time))}(t):e(t);function e(t){t.type=(t.type||"GET").toUpperCase(),t.data=n(t.data);var e=null;(e=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObjcet("Microsoft.XMLHTTP")).onreadystatechange=function(){if(4==e.readyState){var n=e.status;if(n>=200&&n<300){var r="",o=e.getResponseHeader("Content-type");r=-1!==o.indexOf("xml")&&e.responseXML?e.responseXML:"application/json"===o?JSON.parse(e.responseText):e.responseText,t.success&&t.success(r)}else t.error&&t.error(n)}},"GET"==t.type?(e.open(t.type,t.url+"?"+t.data,!1),e.send(null)):(e.open(t.type,t.url,!0),e.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),e.send(t.data))}function n(t){var e=[];for(var n in t)e.push(encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e.push("v="+Math.floor(1e4*Math.random()+500)),e.join("&")}},c=n("vMJZ"),u={name:"message",components:{},data:function(){return{isShowHot:!1,dataList:[],id:"",points:[]}},created:function(){},mounted:function(){this.enter=JSON.parse(localStorage.getItem("enter")),this.init()},methods:{change:function(t){console.log(t);var e={isShowHot:t?"y":"n",id:this.id};Object(c.b)(e,this.enter.sessionId).then(function(t){console.log(t)})},exportExcel:function(){var t=this;Object(c.f)(this.enter.sessionId).then(function(e){console.log(e);t.fileDownload(e,"热力图列表.xlsx")}).catch(function(e){t.$message({showClose:!0,message:e,type:"error"})})},fileDownload:function(t,e){var n=new Blob([t],{type:"application/octet-stream"}),r=e||"filename.xlsx";if(void 0!==window.navigator.msSaveBlob)window.navigator.msSaveBlob(n,r);else{var o=window.URL.createObjectURL(n),i=document.createElement("a");i.style.display="none",i.href=o,i.setAttribute("download",r),void 0===i.download&&i.setAttribute("target","_blank"),document.body.appendChild(i),i.click(),document.body.removeChild(i),window.URL.revokeObjectURL(o)}},init:function(){var t=this;Object(c.a)(this.enter.sessionId).then(function(e){console.log(e),t.id=e.bussData.id,t.isShowHot="y"==e.bussData.isShowHot}),Object(c.k)(this.enter.sessionId).then(function(e){var n,r=(n=a()(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.bussData.forEach(function(t){s({url:"https://api.map.baidu.com/geocoding/v3/",jsonp:"showLocation",data:{address:t.provinceName,output:"json",ak:"964TlhHOSrcfFwQhGuIMH1CEdo1Kt0ID"},success:function(e){console.log(e),i.points.push({lng:e.result.location.lng,lat:e.result.location.lat,count:t.percent}),i.getMap()},error:function(t){}})}),t.abrupt("return",111);case 2:case"end":return t.stop()}},t,this)})),function(){return n.apply(this,arguments)});console.log(e);var i=t;t.dataList=e.bussData,r().then(function(t){console.log(t)})})},getMap:function(){var t=new BMap.Map("container"),e=new BMap.Point(116.418261,39.921984);e=new BMap.Point(114.3,30.6);t.centerAndZoom(e,5),t.enableScrollWheelZoom();var n;(n=document.createElement("canvas")).getContext&&n.getContext("2d")||alert("热力图目前只支持有canvas支持的浏览器,您所使用的浏览器不能使用热力图功能~");var r=new BMapLib.HeatmapOverlay({radius:20});setTimeout(function(){r.show()},1e3),t.addOverlay(r),console.log(this.points),r.setDataSet({data:this.points,max:100})}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"w-100 h-100 p-15"},[n("el-breadcrumb",{staticClass:"p-15 b-b-f0",attrs:{separator:"/","separator-class":"el-icon-arrow-right"}},[n("el-button",{staticClass:"right",attrs:{size:"mini"},on:{click:t.exportExcel}},[t._v("导出数据")]),t._v(" "),n("el-breadcrumb-item",[t._v("热力图")])],1),t._v(" "),n("div",{staticClass:"w-100 p-15 mainTop"},[t._v("\n        是否在APP显示\n        "),n("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ccc"},on:{change:t.change},model:{value:t.isShowHot,callback:function(e){t.isShowHot=e},expression:"isShowHot"}})],1),t._v(" "),n("div",{staticClass:"w-100 p-15 conent"},[n("div",{attrs:{id:"container"}}),t._v(" "),n("div",[n("div",{staticClass:"aside"},[t._m(0),t._v(" "),n("ul",{staticClass:"listWrap"},t._l(t.dataList,function(e){return n("li",{staticClass:"list"},[n("span",[t._v(t._s(e.provinceName))]),n("span",[t._v(t._s(e.num)+"个人")]),n("span",[t._v(t._s(e.percent))])])}),0)])])])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header list"},[e("span",[this._v("地区")]),e("span",[this._v("烟友数量")]),e("span",[this._v("占比")])])}]};var h=n("C7Lr")(u,l,!1,function(t){n("PeWV")},"data-v-46ab4774",null);e.default=h.exports},k9rz:function(t,e){!function(e){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",u="object"==typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{(l=e.regeneratorRuntime=u?t.exports:{}).wrap=b;var h="suspendedStart",f="suspendedYield",p="executing",d="completed",v={},m={};m[a]=function(){return this};var y=Object.getPrototypeOf,g=y&&y(y(R([])));g&&g!==r&&o.call(g,a)&&(m=g);var w=E.prototype=_.prototype=Object.create(m);L.prototype=w.constructor=E,E.constructor=L,E[c]=L.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},l.awrap=function(t){return{__await:t}},O(j.prototype),j.prototype[s]=function(){return this},l.AsyncIterator=j,l.async=function(t,e,n,r){var o=new j(b(t,e,n,r));return l.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},O(w),w[c]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=R,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(M),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return s.type="throw",s.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),M(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;M(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:R(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function b(t,e,n,r){var o=e&&e.prototype instanceof _?e:_,i=Object.create(o.prototype),a=new k(r||[]);return i._invoke=function(t,e,n){var r=h;return function(o,i){if(r===p)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return T()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var s=C(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var c=x(t,e,n);if("normal"===c.type){if(r=n.done?d:f,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=d,n.method="throw",n.arg=c.arg)}}}(t,n,a),i}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function _(){}function L(){}function E(){}function O(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function j(t){var e;this._invoke=function(n,r){function i(){return new Promise(function(e,i){!function e(n,r,i,a){var s=x(t[n],t,r);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"==typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(u).then(function(t){c.value=t,i(c)},a)}a(s.arg)}(n,r,e,i)})}return e=e?e.then(i,i):i()}}function C(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,C(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=x(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function M(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function R(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:T}}function T(){return{value:n,done:!0}}}(function(){return this}()||Function("return this")())},lC5x:function(t,e,n){t.exports=n("XqSp")}});
//# sourceMappingURL=2.62ba19e9d08d42e563f5.js.map