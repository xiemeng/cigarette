export const formatDate = function(needTime){
			needTime = Number(needTime);
			function add0(m){return m<10?'0'+m:m }
	       var time = new Date(needTime);  
	       var y = time.getFullYear();  
	       var m = time.getMonth()+1;  
	       var d = time.getDate();  
	       var h = time.getHours();  
	      var mm = time.getMinutes();  
	      var s = time.getSeconds();  
		return {
			start:add0(y)+'-'+add0(m)+'-01',
			end:add0(y)+'-'+add0(m)+'-30'
		}
}