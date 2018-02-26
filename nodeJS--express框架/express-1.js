/**
 * Created by zz on 2018/2/26.
 */
//express框架   nodeJS再次封装的框架

//如何使用express    安装框架   npm i -S express
// 引入express框架
var express=require('express');
//初始一个express入口函数
var app=express();
//设置监听端口号  listen(端口号(必填),回调函数(非必填项))
app.listen(8000,function () {
    console.log('服务器已启动');
});
//中间件   use(匹配路径,回调函数(req,res,next)); 使用   req.url     默认匹配路径'/'  参数req,res,next
//express框架中  向前台返回数据   用   send()
    //next();  函数一定要放在send前面
// app.use('/index',function(req,res){
//     res.send('我是index返回的数据')
// });
// app.use('/',function(req,res){
//     // res.send('<img src="1.jpg" />');
//     // res.send('我是后台返回的数据');
//
// });
//加载静态资源托管
app.use(express.static('public',{index:'get.html'}));

