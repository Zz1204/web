
//module  模块
//什么叫模块？   一个文件就是一个模块
//淘宝    搜索  购物车 支付.......  整合到一起  有利于后期代码维护
  // 网页   包含  很多文件（模块）  模块里面他可以包含多个组件

//  模块 下面有暴露的功能
      //module.exports   暴露   原理commonJS方法
      //exports        暴露      原理 node

    //  接收   require(文件的路径);

  var add=function(a,b){
        return a+b;
      }

module.exports=add;
