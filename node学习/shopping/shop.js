
//  引入express框架
var express=require('express');
//  初始入口函数
var app=express();
//  引入fs模块
var  fs=require('fs');
//  引入处理逻辑的文件
var  router=require('./router');
// 监听端口号
app.listen(3000,function(){
    console.log('服务器启动');
});
//  使用逻辑文件
app.use(router);
//  静态托管
app.use(express.static('public'));

