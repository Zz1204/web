
//   express框架  post方式提交处理
var express=require('express');
var fs=require('fs');
//  引入插件body-parser
var bodyParser=require('body-parser');
var router=require('./router');
var app=express();
//  设置处理的数据格式
app.use(bodyParser.json());
//  设置编码格式
app.use(bodyParser.urlencoded({extended:true}));
app.listen(3000,function () {
    console.log('服务器启动');
});
app.use(express.static('work'));
app.use(router);

