/**
 * Created by zz on 2018/2/26.
 */
//express框架   post方式提交处理
var express=require('express');
var fs=require('fs');
var app=express();
//引入body-parser
var bodyParser=require('body-parser');
var router=require('./router');
//设置处理的数据格式
app.use(bodyParser.json());
//设置编码格式
app.use(bodyParser.urlencoded({extended:true}));
app.listen(8989,function () {
    console.log('服务器已启动');
});
app.use(express.static('public2'));
app.use(router);
