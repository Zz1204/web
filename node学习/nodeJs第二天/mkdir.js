
//  创建文件夹  mkdir(创建文件夹的路径,回调函数(err))
var  fs=require('fs');
// fs.mkdir('public',function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log('创建成功')
//     }
// })
//  删除文件夹
// fs.rmdir('public',function (err) {
//     if(err){
//          console.log(err);
//      }else{
//          console.log('删除成功')
//     }
// });


  //  readdir()  只能读取子级的文件  不能读取孙子辈的文件
    fs.readdir('./public',function (err,files) {
        if(err){
            console.log(err);
        }else{
            //  files  子级的内容  数组
            //console.log(files);
            //forEach(function(item,index){})  循环遍历数组的
            //  item  数组中的每一项
            //  index  数组中每一项的下标
            files.forEach(function(item,index){
                //console.log(item,index);
                var path='public/'+item;
               // console.log(path);
                fs.stat(path,function (err,stats) {
                    if(err){
                        console.log(err);
                    }else{
                       // stats  文件的每一个状态  文件  文件夹
                        //console.log(stats);
                       // stats.isFile()  判断文件的
                       // stats.isDirectory()   判断文件夹的
                        if(stats.isFile()){
                            console.log(path+'是个文件')
                        }else if(stats.isDirectory()){
                            console.log(path+'是个文件夹')
                        }

                    }
                })

            })

        }
    })
