
//模块 :  一个文件就是一个模块
//   3种类型的模块:
//     内置模块(自带的)   node  中最重要的2个
//
//     fs模块   文件系统模块
//     http模块  系统服务模块  搭建自己的服务器
//
//     第三方模块 （包  jquery  bootstrap）
//     我们自己定义的模块（上午的时候）

//怎么引入  fs模块
    //  引入fs模块
    var fs=require('fs');
//   如何读取文件  readFile(
//      读取的文件的路径,
//      编码格式,
//      回到函数(err(读取失败返回的错误信息),data(读取成功的信息)))

    // fs.readFile('1.txt','utf-8',function(err,data){
    //     if(err){
    //         console.log('读取文件失败');
    //         console.log(err);
    //     }else{
    //         console.log(data);
    //     }
    // })

    //写入文件  writeFile(写入的文件名称,写入的数据,回到函数(err))
    // 1.   假设你写入的这个文件没有  他会自己创建文件 并且写入
    // 2.  文件存在，写入的时候执行 覆盖式的写入

    // fs.writeFile('2.txt','354364664',function(err){
    //     if(err){
    //         console.log('写入失败');
    //     }else{
    //         console.log('写入成功');
    //     }
    // })

    // fs.readFile('1.txt','utf-8',function(err,data){
    //     if(err){
    //         console.log(err);
    //     }else{
    //         fs.writeFile('2.txt',data,function(err){
    //             if(err){
    //                 console.log(err)
    //             }else{
    //                 console.log('写入成功');
    //             }
    //         })
    //     }
    // })


   // 追加写入 appendFile(写入的文件名称,数据;回调函数)
   //  fs.appendFile('2.txt','我是追加的数据',function(err){
   //      if(err){
   //          console.log('追加失败');
   //      }else{
   //          console.log('追加成功');
   //      }
   //  })
    //删除文件 unlink(文件的路径,回调函数(err))
    fs.unlink('2.txt',function(err){
        if(err){
            console.log('删除失败')
        }else{
            console.log('删除成功')
        }
    })




