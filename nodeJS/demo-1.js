// console.log("Hello world");
//console.log(global);
//进程  progress   argv() 方法  进行接收传参
//  argv    数组的下标为0的选项 ：node的运行程序
//          数组的下标为1的选项 ：当前的文件路径
//          数组的下标为2的选项 ：传递的参数
// console.log(process.argv);
 // function add(a,b){
 //     console.log(Math.pow(a,b));
 // }
 // add(process.argv[2],process.argv[3]);

// console.log(__dirname);  //当前文件所在的文件夹
// console.log(__filename); //当前文件的路径

var add1=require("./模块");
add1.add(12);
add1.add1(32);
