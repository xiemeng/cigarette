<!--  移动端自适应方案flexible.js+px2rem-loader -->

npm i lib-flexible --save

import 'lib-flexible'

<meta name="viewport" content="width=device-width, initial-scale=1.0">

npm i px2rem-loader --save-dev


<!-- build/utils.js -->
var cssLoader = {
        loader: 'css-loader',
        options: {
            minimize: process.env.NODE_ENV === 'production',
            sourceMap: options.sourceMap
        }
    }
var px2remLoader = {
        loader: 'px2rem-loader',
        options: {
            remUnit: 75   //设置视宽尺寸
        }
}


<!-- build/utils.js -->
function generateLoaders(loader, loaderOptions) {
    var loaders = [cssLoader, px2remLoader]
// ...





<!-- 用法 -->
px，直接编译
/no/，不会转化px，会原样输出。
/px/,会根据dpr的不同，生成三套代码。