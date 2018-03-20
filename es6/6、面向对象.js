/*
// 面向对象   一切皆对象
 // 类  定义类   Class 名称首字母大写 { 自身属性 写在构造函数里面 constructor   自身方法}
  // 特点：抽象   封装、继承、多态
   //构造函数  (constructor)     当实例被初始化就可以自动运行

class Computer{
    // 构造函数
    constructor(pinpai,price,){
        this.pinpai=pinpai;
        this.price=price;
    };
    // 方法
    online(){
        console.log('我是'+this.pinpai+','+'我可以上网'+','+'价格是'+this.price)
    }
};

let huawei = new Computer('华为','9999');
let iphone = new Computer('iPhone','9988');
huawei.online();
iphone.online();


// 继承 extends  父类  子类
class Tscomputer extends Computer {
    constructor(pinpai,price,color){
        // 子类继承后 必须 调用父级的构造函数
        super(pinpai,price,color);
        this.color=color;
    };
    // 子类函数
    zhuji(){
        super.online();
        console.log('我是'+this.pinpai+','+'我可以上网'+','+'价格是'+this.price+','+'颜色是'+this.color);
    }
};
let huipu = new Tscomputer('惠普','10001','红色');
huipu.online();
huipu.zhuji();

*/

// 私有的   公有的    受保护的

class Tv {
    constructor (pinpai,price,color) {
        this.pinpai=pinpai;
        this.price=price;
        this.color=color;
    }
    // 公有的方法   public   默认公有
    // 私有的方法   private  自身的类进行提供


    // 遥控器
    yaokongqi () {
        watch();
    }
}
function watch () {
    console.log('我可以看电视');
}
let tcl = new Tv ('TCL','9999','黑色');
tcl.yaokongqi();