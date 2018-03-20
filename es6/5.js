// 面向对象
// 核心思想：一切皆对象
// 对象   由相同的一类物体构成    很多对象就构成一个类

// 定义类   class
class People {
    // 属性
    constructor(a,b){
        this.name=a;
        this.age=b;
    };
    // 方法
    speack(){
        console.log(this.name+this.age)
    }
}
//创建实例对象
let zxc=new People('zxc',20);
zxc.speack();