webpackJsonp([15],{VPzK:function(t,e){},cxjy:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("2Wsv");a("mw3O");var s=a("XoFD"),i={name:"column",data:function(){return{total:0,totalsPage:0,data:{pageSize:10,currentPage:1},enter:{},weixinName:"",sex:0,options:[{value:0,label:"全部"},{value:1,label:"男"},{value:2,label:"女"}],tableData:[],form:{name:""}}},created:function(){},mounted:function(){this.enter=JSON.parse(localStorage.getItem("enter")),this.init()},methods:{init:function(){var t,e,a=this,s={pageIndex:this.data.currentPage,pageSize:this.data.pageSize};this.weixinName&&(s.nicknameLike=this.weixinName),this.sex&&(s.sex=this.sex),(t=s,e=this.enter.sessionId,Object(n.a)({url:"/admin/weixin/find_page",method:"post",data:t,headers:{sessionId:e}})).then(function(t){console.log(t),a.tableData=t.bussData,a.total=t.count,a.totalsPage=t.pageCount})},search:function(){this.init()},exportExcel:function(){var t,e,a=this,s={pageIndex:this.data.currentPage,pageSize:this.data.pageSize};this.weixinName&&(s.nicknameLike=this.weixinName),this.sex&&(s.sex=this.sex),(t=s,e=this.enter.sessionId,Object(n.a)({url:"/admin/weixin/exportList",method:"post",data:t,responseType:"arraybuffer",headers:{sessionId:e}})).then(function(t){console.log(t);a.fileDownload(t,"微信用户列表.xlsx")}).catch(function(t){a.$message({showClose:!0,message:t,type:"error"})})},errorImg:function(t){event.srcElement.src=s},toLink:function(t){this.$router.push({path:t})},handleEdit:function(t,e){this.$router.push({path:"/home/userDetail",query:{weixinUserId:e.id}})},handleSizeChange:function(t){this.data.pageSize=t,this.init()},handleCurrentChange:function(t){this.data.currentPage=t,this.init()},disposeDate:function(t){return t.map(function(t){return t.model}).join(" ")},fileDownload:function(t,e){var a=new Blob([t],{type:"application/octet-stream"}),n=e||"filename.xlsx";if(void 0!==window.navigator.msSaveBlob)window.navigator.msSaveBlob(a,n);else{var s=window.URL.createObjectURL(a),i=document.createElement("a");i.style.display="none",i.href=s,i.setAttribute("download",n),void 0===i.download&&i.setAttribute("target","_blank"),document.body.appendChild(i),i.click(),document.body.removeChild(i),window.URL.revokeObjectURL(s)}}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"w-100 h-100 p-15"},[a("el-breadcrumb",{staticClass:"p-15 b-b-f0",attrs:{separator:"/","separator-class":"el-icon-arrow-right"}},[a("el-button",{staticClass:"right",attrs:{size:"mini",plain:""},on:{click:t.exportExcel}},[t._v("导出数据")]),t._v(" "),a("el-breadcrumb-item",[t._v("用户管理")])],1),t._v(" "),a("div",{staticClass:"w-100 p-15"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:6}},[a("div",{staticClass:"flex w-100"},[a("em",{staticClass:"nowrap",staticStyle:{"line-height":"40px"}},[t._v("微信名：")]),t._v(" "),a("el-input",{attrs:{placeholder:"请输入"},model:{value:t.weixinName,callback:function(e){t.weixinName=e},expression:"weixinName"}})],1)]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"flex w-100"},[a("em",{staticClass:"nowrap",staticStyle:{"line-height":"40px"}},[t._v("性别：")]),t._v(" "),a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.sex,callback:function(e){t.sex=e},expression:"sex"}},t._l(t.options,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1)]),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-button",{on:{click:t.search}},[t._v("查询")])],1)],1)],1),t._v(" "),a("el-table",{staticClass:"w-100 p-15",attrs:{data:t.tableData,stripe:"","default-sort":{prop:"startTime",order:"descending"}}},[a("el-table-column",{attrs:{label:"头像"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("img",{attrs:{src:e.row.headimgurl},on:{error:t.errorImg}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"微信名"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t"+t._s(e.row.nickname)+"\n\t\t\t\t\t")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"年龄"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t"+t._s(e.row.age)+"\n\t\t\t\t\t")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"性别"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t"+t._s(1==e.row.sex?"男":"女")+"\n\t\t\t\t\t")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"设备激活日期",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t"+t._s(e.row.startTime+"("+e.row.intervalDays+"天)")+"\n\t\t\t\t\t")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"设备数"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t"+t._s(e.row.deviceNum)+"\n\t\t\t\t\t")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"设备型号"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t"+t._s(t.disposeDate(e.row.deviceHistories))+"\n\t\t\t\t\t")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"最后一次使用设备",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t"+t._s(e.row.lastUseTime+"("+e.row.city+")")+"\n\t\t\t\t\t")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticClass:"elbut",attrs:{size:"mini"},on:{click:function(a){return t.handleEdit(e.$index,e.row)}}},[t._v("详情")])]}}])})],1),t._v(" "),a("div",{staticClass:"text-center p-t-30"},[a("el-pagination",{attrs:{"current-page":t.data.currentPage,"page-sizes":[10,20,30,40],"page-size":t.data.pageSize,layout:"total,slot, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},[a("span",[t._v("第"+t._s(t.data.currentPage)+" / "+t._s(t.totalsPage)+"页")])])],1)],1)])},staticRenderFns:[]};var o=a("VU/8")(i,l,!1,function(t){a("VPzK")},"data-v-1ab75fe5",null);e.default=o.exports}});
//# sourceMappingURL=15.1f5b4dc068647aa91559.js.map