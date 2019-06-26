<style scoped>
.spinner{border-radius:50%;margin:20px;display:inline-block;position:relative;height:60px;width:60px;background-color:#e0e0eb}
.spinnerTwo:before{position:absolute;top:30px;left:27.5px;content:"";height:35px;width:5px;background-color:#535657;transform-origin:50% 0%;border-radius:8px;animation:clockmin 2s linear infinite}
.spinnerTwo:before{position:absolute;top:30px;left:27.5px;content:"";height:35px;width:5px;background-color:#535657;transform-origin:50% 0%;border-radius:8px;animation:clockmin 2s linear infinite}
.spinnerTwo span{position:absolute;top:10px;left:27.5px;height:20px;width:5px;border-radius:2px;background:#535657;transform-origin:50% 100%;animation:clockhour 10s linear infinite}
.spinnerTwo:after{position:absolute;content:"";height:35px;width:2px;top:30px;left:29px;transform-origin:50% 0%;background-color:#D1462F;border-radius:2px;animation:clocksec 0.5s linear infinite}
@keyframes clockhour{0%{transform:rotate(0deg)}
100%{transform:rotate(360deg)}
}
@keyframes clockmin{0%{transform:rotate(0deg)}
100%{transform:rotate(360deg)}
}
@keyframes clocksec{0%{transform:rotate(0deg)}
100%{transform:rotate(360deg)}
}
</style>

<template>
<div class="width--100 height--100 flex-inline just-center align-center">
    <div class="spinner spinnerTwo"><span></span></div>
    </div>
</template>
<script>
export default {
}
</script>
