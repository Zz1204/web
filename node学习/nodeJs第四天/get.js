
//  引入express
var express=require('express');
//  引入fs模块
var  fs=require('fs');
//  引入router文件(处理具体逻辑的)
var router=require('./router');
//  初始入口函数
var app=express();
// 监听端口号
app.listen(3000,function(){
    console.log('服务器启动');
});
//  使用路由文件
app.use(router);
// 静态资源托管
app.use(express.static('public'));
