//module  模块
//什么叫模块？
    //一个文件就是一个模块
      //网页 包含很多文件(模块)  模块里面可以包含多个组件

    //模块下面有暴露功能
        //1、module.exports  暴露   原理commonJS
            //module.exports   可以暴露多个
            //如果要暴露多个  需进行区分  从这个对象下面去加属性就可以了
        //2、exports      暴露   原理   node

        //接收   require(文件的路径);

    // var add=function(a,b){
    //     return a+b;
    // }
    // module.exports=add;

    // var add=function(str){
    //     console.log(str);
    // }
    // var add1=function(str1){
    //     console.log(str1);
    // }
    // module.exports.add=add;
    // module.exports.add1=add1;


    //三种模块类型
        // 1、内置模块(自带的)  node中最重要的两个
            // fs模块  文件系统模块
            // http模块  系统服务模块  搭建自己的服务器
        // 2、第三方模块(包、jQuery、bootstrap)
        // 3、我们自己定义的模块


// 怎么引入fs模块
    var fs=require("fs");
// 如何读取一个文件
    // readFile(
        // 读取的文件的路径,
        // 编码格式,
        // 回调函数(err(读取失败时反悔的错误信息),data(读取成功的信息))
    // );
    // fs.readFile("./1.txt","utf-8",function(err,data){
    //     if(err){
    //         console.log("读取失败");
    //         console.log(err);
    //     }else{
    //         fs.writeFile("2.txt",data,function(err){
    //             if(err){
    //                 console.log("写入失败");
    //             }else {
    //                 console.log("写入成功");
    //             }
    //         })
    //     }
    // })

// 如何写入文件
    // writeFile(写入的文件名称,写入的数据,回调函数(err));
        // 1、假设你写入的这个文件没有，他会自己去创建文件，并且写入
        // 2、文件存在，写入的时候执行覆盖式的写入
    // fs.writeFile("2.txt","假期余额已欠费",function(err){
    //     if(err){
    //         console.log("写入失败");
    //     }else {
    //         console.log("写入成功");
    //     }
    // })

// 追加写入   appendFile(写入的文件名称,写入的数据,回调函数(err))
    // fs.appendFile("2.txt","假期余额已欠费",function(err){
    //     if(err){
    //         console.log("写入失败");
    //     }else {
    //         console.log("写入成功");
    //     }
    // })


// 删除文件  unlink(文件的路径,回调函数(err))
//  fs.unlink("2.txt",function(err){
//      if(err){
//          console.log("删除失败");
//      }else {
//          console.log("删除成功");
//      }
//  })


//创建文件夹   mkdir(创建文件夹的路径,回调函数(err))
	
//	fs.mkdir("public",function(err){
//		if (err) {
//			console.log(err);
//		} else{
//			console.log("创建成功");
//		}
//	})

//删除文件夹  rmdir(删除文件夹的路径,回调函数(err))
//	fs.rmdir("public",function(err){
//		if (err) {
//			console.log(err);
//		} else{
//			console.log("删除成功");
//		}
//	})


//读取文件夹    readdir()    只能读取子级的文件 
	fs.readdir("./public",function(err,files){
		if (err) {
			console.log(err);
		} else{
//			files   子级的内容   数组
//			console.log(files);
//			forEach(function(item,index){})   循环遍历数组
//			item  数组中的每一项
//			index 数组中每一项的下标
//检测    stat(路径，回调)
			files.forEach(function(item,index){
//				console.log(item,index);
				var path="./public/"+item;
				fs.stat(path,function(err,stats){
					if (err) {
						console.log(err);
					} else{
						//stat   文件的每一个状态		文件、文件夹
//						stats.isFile()  // 判断文件的
//						stats.isDirectory()  // 判断文件夹的
						if(stats.isFile()){
							console.log(path+"是个文件");
						}else if(stats.isDirectory()){
							console.log(path+"是个文件夹");
						}
					}
				})
			})
		}
	})


	