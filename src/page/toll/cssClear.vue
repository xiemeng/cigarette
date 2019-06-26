<style>
textarea{width:100%;height:420px;font:12px/1.6em "Lucida Console","monospace","Consolas";letter-spacing:1px}
textarea::-webkit-scrollbar{width:10px;height:10px}
textarea::-webkit-scrollbar-button:vertical:increment{background-color:transparent}
textarea::-webkit-scrollbar-track:enabled{background-color:rgba(113,112,107,0.1);-webkit-border-radius:5px}
textarea::-webkit-scrollbar-thumb:vertical{height:50px;background-color:rgba(0,0,0,0.2);-webkit-border-radius:5px}
textarea::-webkit-scrollbar-thumb:horizontal{width:50px;background-color:rgba(0,0,0,0.2);-webkit-border-radius:5px}
</style>
<template>
	<center>
		<textarea id="code" spellcheck="false"></textarea>
		<br>
		<input type="button" name="" value="压缩" id="encode">
		<input type="button" name="" value="美化" id="decode">
		<input type="button" name="" value="净化" id="purify">
		<input type="button" name="" value="清空" id="empty">
	</center>
</template>

<script>
export default {
  name: "CssClear",
  data() {
    return {};
  },
  mounted() {
    var oEncodeBtn = document.getElementById("encode");
    var oDecodeBtn = document.getElementById("decode");
    var oPurify = document.getElementById("purify");
    var oCode = document.getElementById("code");
    var oEmpty = document.getElementById("empty");
    oEmpty.onclick = function() {
      oCode.value = "";
    };

    oEncodeBtn.onclick = function() {
      var val = oCode.value;
      val = val.replace(/\/\*(.|\n)*?\*\//g, ""); //去除注释
      val = val.replace(/^\s+|\s+$/g, ""); //清除首尾空格
      val = val.replace(/(:)\s+/g, "$1"); //去除 冒号后多个空格              如 width:  100px  => width:100px
      val = val.replace(/\s{2,}/g, " "); //去除 多余空格2个以上             如 margin: 10px   20px  30px  => margin:10px 20px 30px
      val = val.replace(/,\s+|\s+,/g, ","); //去除 多个样式共享时的多余空格    如 h1,  h2  , h3  =>h1,h2,h3
      val = val.replace(/;{2,}|;\s+/g, ";"); //去除 多个分号或分号后面多余空格  如 width:200px;;  height:100px  => width:200px;height:100px
      val = val.replace(/\s*\{\s*/g, "{"); //去除 选择符后面多余空格          如 div { height:100px}   => div{height:100px}
      val = val.replace(/\s*}\s*/g, "}"); //去除 选择器前面多余空格          如 div{height:100px}  a{}   => div{height:100px}a{}
      val = val.replace(/[\n\t\f\r]/g, ""); //去除换行,制表符,分页符,回车
      val = val.replace(/;}/g, "}"); //去除 元素样式的最后分号          如 div{height:100px;} => div{height:100px}
      /* 待添加 */
      oCode.value = val;
    };

    oPurify.onclick = function() {
      //净化工具;
      oEncodeBtn.click();
      var val = oCode.value;
      val = val.replace(/\}/g, "}\n");
      oCode.value = val;
    };

    oDecodeBtn.onclick = function() {
      //格式化代码
      var val = oCode.value;
      val = val.replace(/(\*\/)\s+(\w)/g, "$1\n$2"); //格式化注释后的多余空格
      val = val.replace(/(:)\s+/g, "$1"); //格式化冒号间多余空格
      val = val.replace(/,\s+|\s+,/g, ","); //格式化逗号间多余空格
      val = val.replace(/;{2,}|;\s+/g, ";"); //格式化分号后多余字符
      val = val.replace(/;}/g, "}"); //去除最后一个分号
      val = val.replace(/\s*\{\s*/g, " {\n\t"); //格式化左{
      val = val.replace(/\s*}\s*/g, "\n}\n"); //格式化左}
      val = val.replace(/\s*;\s*/g, ";\n\t"); //格式化属性
      oCode.value = val;
    };
  }
};
</script>


