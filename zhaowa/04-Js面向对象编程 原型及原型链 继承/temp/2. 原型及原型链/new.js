// 1. 一个继承自 Player 的新对象 p1 被创建了。
// 2. p1.__proto__ = Player.prototype，p1 的__proto__指向 Player 的原型对象
// 3. 将 this 指向新创建的对象 p1
// 4. 返回这个新对象 p1

function Player(name) {
    this.name = name;
}


function objectFactory() { 
    // arguments [Player,'秋裤']
    let o = new Object();

    // 拿到构造函数
    // arguments是类数组，不能用shift方法，用call 把 arguments赋值给[].shift的this，取第一个参数，构造函数Player
    // 已经把arguments改成数组，并把第一个参数Player  shift出去了
    // Array.from转换类数组到数组也行
    let FunctionConstructor = [].shift.call(arguments); // call传递 Player 参数,参数,

    o.__proto__ = FunctionConstructor.prototype;
    // arguments ['秋裤']

    let resultObj = FunctionConstructor.apply(o, arguments); // apply传递参数数组，此时的arguments是不包含Player的参数
    return typeof resultObj === 'object' ? resultObj : o;
    // 构造函数返回的是基本类型或者undefined，返回的就不是resultObj，而是o
    // 根据构造函数的返回值判断
}



// const p1 = new Player();
const p1 = objectFactory(Player, '秋裤');

console.log(p1);