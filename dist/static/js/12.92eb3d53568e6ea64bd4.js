webpackJsonp([12],{aDTL:function(t,e){},sXON:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("lq4Q"),o={name:"column",components:{},data:function(){return{enter:{},total:0,totalsPage:0,data:{pageSize:10,currentPage:1},tableData:[],form:{name:""}}},created:function(){},mounted:function(){this.enter=JSON.parse(localStorage.getItem("enter")),this.init()},methods:{init:function(){var t=this,e={pageIndex:this.data.currentPage,pageSize:this.data.pageSize,isVisible:"y"};Object(a.d)(e,this.enter.sessionId).then(function(e){console.log(e),t.tableData=e.bussData,t.total=e.count,t.totalsPage=e.pageCount})},toLink:function(t){this.$router.push({path:t})},handleDelete:function(t,e){var n=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then(function(){var t={id:e.id};Object(a.b)(t,n.enter.sessionId).then(function(t){console.log(t),t&&(n.$message({type:"success",message:"删除成功!"}),n.init())})}).catch(function(){n.$message({type:"info",message:"已取消删除"})})},goexportList:function(){var t=this,e={pageIndex:this.data.currentPage,pageSize:this.data.pageSize};this.weixinName&&(e.nicknameLike=this.weixinName),this.sex&&(e.sex=this.sex),Object(a.h)(this.enter.sessionId).then(function(e){console.log(e);t.fileDownload(e,"设备列表.xlsx")}).catch(function(e){t.$message({showClose:!0,message:e,type:"error"})})},goDetail:function(t,e){console.log(t,e),this.$router.push({path:"/column/column/detail",query:{id:e.id}})},goAdd:function(t,e){console.log(t,e),"add"==t?this.$router.push({path:"/column/column/add",query:{tips:"add"}}):this.$router.push({path:"/column/column/add",query:{id:e.id}})},handleSizeChange:function(t){this.data.pageSize=t,this.init()},handleCurrentChange:function(t){this.data.currentPage=t,this.init()},getNums:function(t,e){return 0==t||0==e?"0":(t/e).toFixed(2)},disposeDate:function(t){return t.map(function(t){return t.name}).join(" ")},fileDownload:function(t,e){var n=new Blob([t],{type:"application/octet-stream"}),a=e||"filename.xlsx";if(void 0!==window.navigator.msSaveBlob)window.navigator.msSaveBlob(n,a);else{var o=window.URL.createObjectURL(n),s=document.createElement("a");s.style.display="none",s.href=o,s.setAttribute("download",a),void 0===s.download&&s.setAttribute("target","_blank"),document.body.appendChild(s),s.click(),document.body.removeChild(s),window.URL.revokeObjectURL(o)}}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"w-100 h-100 p-15"},[n("el-breadcrumb",{staticClass:"p-15 b-b-f0",attrs:{separator:"/","separator-class":"el-icon-arrow-right"}},[n("el-button",{staticClass:"right",attrs:{size:"mini"},on:{click:t.goexportList}},[t._v("导出数据")]),t._v(" "),n("el-button",{staticClass:"elbut elbut2 right",attrs:{size:"mini"},on:{click:function(e){return t.goAdd("add")}}},[t._v("新增")]),t._v(" "),n("el-breadcrumb-item",[t._v("设备管理")])],1),t._v(" "),n("el-table",{staticClass:"w-100 p-15",attrs:{data:t.tableData,stripe:""}},[n("el-table-column",{attrs:{label:"设备型号"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t"+t._s(e.row.model)+"\n\t\t\t\t\t")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"设备照片"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("img",{attrs:{src:t.row.imageUrl}})]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"烟弹类型"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t"+t._s("kao"==e.row.bombName?"烤烟型":"烟油型")+"\n\t\t\t\t\t")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"支持烟型"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t"+t._s(t.disposeDate(e.row.ecTypes))+"\n\t\t\t\t\t")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"上市日期"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t"+t._s(e.row.onDate)+"\n\t\t\t\t\t")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"当月使用人/全部激活比",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t"+t._s(t.getNums(e.row.monthPeopleNum,e.row.allPeopleNum))+"\n\t\t\t\t\t")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"当月吸烟支数"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t"+t._s(e.row.monthUseNum)+"支\n\t\t\t\t\t")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"当月平均每支口数"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t"+t._s(t.getNums(e.row.monthMouthNum,e.row.monthUseNum))+"口\n\t\t\t\t\t")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作",width:"240"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{staticClass:"elbut",attrs:{size:"mini",plain:""},on:{click:function(n){return t.goDetail(e.$index,e.row)}}},[t._v("详情")]),t._v(" "),n("el-button",{staticClass:"elbut",attrs:{size:"mini",plain:""},on:{click:function(n){return t.goAdd(e.$index,e.row)}}},[t._v("编辑")]),t._v(" "),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),n("div",{staticClass:"text-center p-t-30"},[n("el-pagination",{attrs:{"current-page":t.data.currentPage,"page-sizes":[10,20,30,40],"page-size":t.data.pageSize,layout:"total,slot, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},[n("span",[t._v("第"+t._s(t.data.currentPage)+" / "+t._s(t.totalsPage)+"页")])])],1)],1)])},staticRenderFns:[]};var i=n("VU/8")(o,s,!1,function(t){n("aDTL")},"data-v-714533f4",null);e.default=i.exports}});
//# sourceMappingURL=12.92eb3d53568e6ea64bd4.js.map