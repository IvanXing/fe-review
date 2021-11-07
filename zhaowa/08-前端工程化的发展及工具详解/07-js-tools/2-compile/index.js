import '@babel/polyfill'  // 腻子 增加es6中新增的方法 例如 includes 静态编译  array上加了incelude方法

const func = () => console.log('hello es6');
let variable = 'this is a variable'
const {a, b = 1} = {a: 'this is a'}


const array = [1, 2, 3]
console.log(array.includes(1))



// polyfill的过程


// 引入会加载所有corejs的方法，而且需要运行时引入 import '@babel/polyfill'，全部引入了
// 在bablerc中配置（按需+corejs的版本）可以按需引入，减少包体积，而且不用刻意import


// let const 是在编译时，编译为es5语法，这是语法问题

// polyfill解决的是运行时，array.includes，这是一个数组方法问题，必须在运行时，挂在prototype上

// babel只能编译语法，不能编译方法




// Babel是编译语法（编译阶段）
// Polyfill挂载方法（运行阶段）
// Corejs是标准方法实现，polyfill依赖