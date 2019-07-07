<template>
  <div>
    <div class="w-100 h-100 p-15">
      <el-breadcrumb separator="/" separator-class="el-icon-arrow-right" class="p-15 b-b-f0">
        <el-button size="mini" class="right" @click="exportExcel">导出数据</el-button>
        <el-breadcrumb-item>热力图</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="w-100 p-15 mainTop">
        是否在APP显示
        <el-switch
					@change="change"
          v-model="isShowHot"
          active-color="#13ce66"
          inactive-color="#ccc">
        </el-switch>

      </div>
      <div class="w-100 p-15 conent">
        <div id="container"></div>
        <div>
          <div class="aside">
            <div class="header list">
              <span>地区</span><span>烟友数量</span><span>占比</span>
            </div>
            <ul class="listWrap">
              <li class="list" v-for="item in dataList">
                <span>{{item.provinceName}}</span><span>{{item.num}}个人</span><span>{{item.percent}}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getWeixinUserLocationStatics,exportHotList,configDetail,configUpdate} from '@/api/user';
export default {
  name: "message",
  components: {},
  data() {
    return {
      isShowHot:false,// 是否在APP显示
			dataList:[],// 列表
			id:'',
    };
  },
  created() {},
  mounted() {
		this.enter = JSON.parse(localStorage.getItem("enter"));
		this.init()
    this.getMap()
  },
  methods: {
		change(value){  // 开关状态改变
			console.log(value)
			let isShowHot = value?'y':'n';
			const params = {
				isShowHot:isShowHot,
				id:this.id
			}
			configUpdate(params,this.enter.sessionId).then((res)=>{
				console.log(res)
			})
		},
    exportExcel(){  // 导出数据
    	exportHotList(this.enter.sessionId).then((res)=>{
    		console.log(res)
    		const filename = '热力图列表.xlsx'
    		this.fileDownload(res, filename)
    	}).catch((error)=>{
    		this.$message({
    			showClose: true,
    			message: error,
    			type: 'error'
    		})
    	})
    },
		fileDownload(data, fileName) {
		    const blob = new Blob([data], {
		        type: 'application/octet-stream'
		    })
		   
		    const filename = fileName || 'filename.xlsx'
		    if (typeof window.navigator.msSaveBlob !== 'undefined') {
		        window.navigator.msSaveBlob(blob, filename)
		    } else {
		        var blobURL = window.URL.createObjectURL(blob)
		        var tempLink = document.createElement('a')
		        tempLink.style.display = 'none'
		        tempLink.href = blobURL
		        tempLink.setAttribute('download', filename)
		        if (typeof tempLink.download === 'undefined') {
		        tempLink.setAttribute('target', '_blank')
		        }
		        
		        document.body.appendChild(tempLink)
		        tempLink.click()
		        document.body.removeChild(tempLink)
		        window.URL.revokeObjectURL(blobURL)
		    }
		},
		init(){
			getWeixinUserLocationStatics(this.enter.sessionId).then((res)=>{
				console.log(res)
				this.dataList = res.bussData;
			})
			configDetail(this.enter.sessionId).then((res)=>{
				console.log(res)
				this.id = res.bussData.id;
				this.isShowHot  = res.bussData.isShowHot == 'y'?true:false;
			})
		},
		getMap(){  // 绘制地图
			var map = new BMap.Map("container"); // 创建地图实例
			
			var point = new BMap.Point(116.418261, 39.921984);
			map.centerAndZoom(point, 6); // 初始化地图，设置中心点坐标和地图级别
			map.enableScrollWheelZoom(); // 允许滚轮缩放
			
			var points = [  // 设置热力图的点
			  { lng: 116.418261, lat: 39.921984, count: 50 },
			  { lng: 116.423332, lat: 39.916532, count: 51 }
			];
			if (!isSupportCanvas()) {
			  alert(
			    "热力图目前只支持有canvas支持的浏览器,您所使用的浏览器不能使用热力图功能~"
			  );
			}
			//详细的参数,可以查看heatmap.js的文档 https://github.com/pa7/heatmap.js/blob/master/README.md
			//参数说明如下:
			/* visible 热力图是否显示,默认为true
			 * opacity 热力的透明度,1-100
			 * radius 势力图的每个点的半径大小   
			 * gradient  {JSON} 热力图的渐变区间 . gradient如下所示
			 *	{
				.2:'rgb(0, 255, 255)',
				.5:'rgb(0, 110, 255)',
				.8:'rgb(100, 0, 255)'
			}
			其中 key 表示插值的位置, 0~1. 
					value 为颜色值. 
			 */
			var heatmapOverlay = new BMapLib.HeatmapOverlay({ radius: 20 });
			setTimeout(()=>{
					heatmapOverlay.show();
			},1000)
			map.addOverlay(heatmapOverlay);
			heatmapOverlay.setDataSet({ data: points, max: 100 });
			//判断浏览区是否支持canvas
			function isSupportCanvas() {
				var elem = document.createElement("canvas");
				return !!(elem.getContext && elem.getContext("2d"));
			}
		}
  }
};
</script>
<style lang="less" scoped>
.conent{
  display: flex;
}
#container{height:470px;width:747px;}
.mainTop{
  text-align: right;
}
.aside{
  border: 1px solid #ccc;
  width: 384px;margin-left:21px;
  padding-left: 8px;
  
  .header{
    border-bottom: 1px solid #999;
    line-height: 70px;
  }
  .listWrap{
    line-height: 50px;height: 360px;
    overflow: auto;
  }
  .list{
    display: flex;
    span{
      flex: 1;
      text-align: center;
    }
  }
}
</style>