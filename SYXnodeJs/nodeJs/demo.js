//console.log('hello world');
//console.log(global);
//进程  process   argv  数组   进行接受参数
  //数组的下标为0的这项  :  node的运行程序  'C:\\Program Files\\nodejs\\node.exe
  //数组的下标为1的这项   当前的文件路径   'C:\\Users\\suyanxiang\\Desktop\\nodeJs\\demo
  //数组的下标为2的这项开始就是  ：传递的参数

//console.log(process.argv);
    // function add(a,b){
    //   console.log(Math.pow());
    // }
    // add(process.argv[2],process.argv[3]);

  //  console.log(__dirname); // 当前 文件所在的文件夹
  //  console.log(__filename);  //  当前文件的路径

      var add1=require('./modlue');
        console.log(add1(10,20));
