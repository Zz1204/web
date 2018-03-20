// es5 语法
    // 数字  number Number('123') 转数字
    // 字符串  string  charAt()  length
    // 布尔值  true 除0之外的    false 0
    // 对象  (函数、数组、json、null)
    // 函数  function(){}  执行一段功能  原型属性  prototype
    // 数组  []  增删改查  [0]为false
    // json {}  全部是真的
    // null 假的
    // undefined  假的

    //true 除了0以外的数字  除了空字符串和‘0’字符串  函数  除了数组中能转成数字0的  json

    //false   0   ''   '0'  [0]  null  undefined  



// es6 全称 es2015

  //  var  声明变量的    
  //  let
      // 1、用let声明的变量只在命令所在的代码块内有效
      //       {
      //           var a=10;
      //       }
      //       {
      //           let a=10;
      //       }
      //       console.log(a);
      // 2、使用let声明的变量在预解析的时候不会被提升
      //       console.log(a);
      //       var a=10;
      //       console.log(a);
      //       let a=10;
      // 3、let不允许在同一个作用域下声明已经被声明的变量
      //           var a=10;
      //           var a=20;
      //           console.log(a);

      //           let a=10;
      //           let a=20;
      //           console.log(a)

                    // let a=10;
                    // var a=20;
                    // console.log(a)

        // for循环中  处于{}外边的是负作用域的    {}里面是属于子作用域
        //     for(let a=0;a<10;a++){
        //         let a=20;
        //         console.log(a)
        //     }
        //     console.log(a)


        // var btn=document.getElementsByTagName('button');
        // for (let i=0;i<btn.length;i++){
        //     btn[i].onclick=function(){
        //         console.log(i)
        //     }
        // }

  // 声明常量的  const
    // 1、const  必须  声明的时候应该赋值   不允许重复声明    代码块内有效
        {
            const a=10;
        }
        console.log(a)
    // 2、
