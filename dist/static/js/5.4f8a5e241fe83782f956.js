webpackJsonp([5],{"7Smm":function(e,s){},"kNq/":function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=t("CgFE"),n={name:"columnAdd",components:{},data:function(){return{tips:"",roleName:"",roleDesc:"",menuList:[],menuIds:[!1,!1,!1,!1,!1],menuIdsTrue:[]}},created:function(){this.enter=JSON.parse(localStorage.getItem("enter")),this.tips=this.$router.currentRoute.query.tips,this.tips||this.init(),this.getList()},mounted:function(){},methods:{init:function(){var e=this,s={id:this.$router.currentRoute.query.id};Object(i.h)(s,this.enter.sessionId).then(function(s){console.log(s),e.roleName=s.bussData.roleName,e.roleDesc=s.bussData.roleDesc,e.menuIdsTrue=s.bussData.menuIds,e.menuIdsTrue.forEach(function(s){e.menuIds[s]=!0})})},getList:function(){var e=this;Object(i.l)(this.enter.sessionId).then(function(s){console.log(s),e.menuList=s.bussData})},submit:function(){if(this.roleName)if(this.roleDesc)if(this.menuIds.length<=0)this.$message({message:"请选择角色权限",type:"warning"});else{for(var e=0;e<this.menuIds.length;e++)this.menuIds[e]&&this.menuIdsTrue.push(e+1);this.tips?this.addName():this.upDateName()}else this.$message({message:"请输入角色描述",type:"warning"});else this.$message({message:"请输入角色名",type:"warning"})},addName:function(){var e=this,s={menuIds:this.menuIdsTrue,roleDesc:this.roleDesc,roleName:this.roleName};Object(i.i)(s,this.enter.sessionId).then(function(s){s.code||(console.log(s),e.$message({message:"添加成功",type:"success"}),e.$router.push({path:"/meeting/meetingAdd"}))})},upDateName:function(){var e=this,s={id:this.$router.currentRoute.query.id,menuIds:this.menuIdsTrue,roleDesc:this.roleDesc,roleName:this.roleName};Object(i.k)(s,this.enter.sessionId).then(function(s){console.log(s),s.code||(e.$message({message:"修改成功",type:"success"}),e.$router.push({path:"/meeting/meetingAdd"}))})}}},a={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"columAdd"},[t("div",{staticClass:"w-100 h-100 p-15"},[t("el-breadcrumb",{staticClass:"p-15 b-b-f0",attrs:{separator:"/","separator-class":"el-icon-arrow-right"}},[t("el-breadcrumb-item",[e._v("角色管理》"+e._s("add"==e.tips?"新增":"编辑"))])],1),e._v(" "),t("div",{staticClass:"w-100 p-15"},[t("ul",{staticClass:"wrap"},[t("li",{staticClass:"flex"},[t("em",{staticClass:"nowrap",staticStyle:{"line-height":"40px"}},[e._v("角色名称：")]),e._v(" "),t("el-input",{attrs:{placeholder:"请输入"},model:{value:e.roleName,callback:function(s){e.roleName=s},expression:"roleName"}})],1),e._v(" "),t("li",{staticClass:"flex"},[t("em",{staticClass:"nowrap",staticStyle:{"line-height":"40px"}},[e._v("角色描述：")]),e._v(" "),t("el-input",{attrs:{placeholder:"请输入"},model:{value:e.roleDesc,callback:function(s){e.roleDesc=s},expression:"roleDesc"}})],1),e._v(" "),t("li",{staticClass:"flex"},[t("em",{staticClass:"nowrap",staticStyle:{"line-height":"40px"}},[e._v("权限：")]),e._v(" "),t("div",e._l(e.menuList,function(s,i){return t("div",[t("el-checkbox",{model:{value:e.menuIds[i],callback:function(s){e.$set(e.menuIds,i,s)},expression:"menuIds[index]"}},[e._v(e._s(s.menuName))])],1)}),0)])]),e._v(" "),t("div",{staticClass:"footer"},[t("el-button",{attrs:{plain:""},on:{click:e.submit}},[e._v("确定")])],1)])],1)])},staticRenderFns:[]};var r=t("C7Lr")(n,a,!1,function(e){t("7Smm")},"data-v-783347f6",null);s.default=r.exports}});
//# sourceMappingURL=5.4f8a5e241fe83782f956.js.map