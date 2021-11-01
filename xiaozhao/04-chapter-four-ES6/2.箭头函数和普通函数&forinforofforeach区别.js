// 1. 箭头函数的this指向定义时，父级作用域的this

// 2. call bind apply 无法改变箭头函数的this指向

// 3. 箭头函数不可被当做构造函数

// 4. 不可以使用arguments对象，但是可以通过解构赋值来取
const sayName = (...args) => {
  console.log(args)
}
sayName('a', 'b')

// 5. 箭头函数不支持new.target

function Person() {
  this.name = 'paul';
  const target = new.target;
  console.log(target)
}
const obj = new Person;
console.log(obj)    // Person {name: 'paul'}


/*
*  1. forEach 是数组方法
*   没有返回值
*   不能使用break中断循环
*
*  2. for in 用于循环遍历数组或对象的属性，遍历键名
*
*  3. for of 用于遍历迭代器对象
*   拥有 Symbol.iterator 属性，就被视为具有 iterator 接口
*   可以遍历 数组 set map 类数组
*/
