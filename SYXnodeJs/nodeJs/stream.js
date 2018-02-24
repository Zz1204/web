
 //读取流   createReadStream()   txt文件  每64k文件大小
 //写入流   createWriteStream()

 var  fs=require('fs');
var i=1;
 var rs=fs.createReadStream('1.txt');
 //  读取数据事件
 rs.on('data',function(data1){
    // console.log(data1);
     fs.writeFile('stream'+i+'.txt',data1,function(err){
         if(err){
             console.log('分流失败');
         }else{
             console.log('分流成功');
         }
     })
     i++;
 })
