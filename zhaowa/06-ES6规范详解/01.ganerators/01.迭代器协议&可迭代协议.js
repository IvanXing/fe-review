/*
* 迭代器协议
*/
// 拥有一个next方法，方法返回一个对象，包含done和value

// 但是，有next方法就一定可以迭代嘛？

/*
* 可迭代协议
*/
// 有一个属性为 [Symbol.iterator] 的方法，其返回值为一个符合迭代器协议的对象

var inHomeYou = {
  cursor: 0,
  next() {
    const actions = ['抖音', '农药', '吃饭', '睡觉'];   // 不对外暴露，通过next得到
    if(this.cursor > 5) {
      return {
        done: true,
        value: '龟儿子'
      };
    }
    return {
      done: false,
      value: actions[this.cursor++ % actions.length]    // i++ 先 执行后++
    };
  },
  [Symbol.iterator]: function() {
    return this;
  }
}

// // 只符合迭代器协议的方法使用
// console.log('action', inHomeYou.next());
// console.log('action', inHomeYou.next());
// console.log('action', inHomeYou.next());
// console.log('action', inHomeYou.next());
// console.log('action', inHomeYou.next());
// console.log('action', inHomeYou.next());
// console.log('action', inHomeYou.next());

// 符合可迭代协议的方法的使用
// for of 会 拿到可迭代对象，一直执行next直到执行完成
// for of 识别的是协议inHomeYou[Symbol.iterator]，传入对象或者数组都可以
// 不会拿最后一次的done:true的
for(let item of inHomeYou) {
  console.log('item::', item)
}