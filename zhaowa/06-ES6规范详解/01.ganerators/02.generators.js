function buy(name, cb) {
  setTimeout(() => {
    cb && cb(null, 'content:' + name);
  }, 5);
}

// error first
// buy('cai', function (err, content) {
//     console.log('content', content);
// });

// Promise 形式
function buyPromise(name) {
  return new Promise((resolve, reject) => {
    buy(name, function (err, content) {
      if (err) {
        reject();
      }
      resolve(content);
    });
  });
}

// // 调用promise
// buyPromise('cai')
//   .then(function (content) {
//     console.log(content)
//     return buyPromise('paomian')
//   })
//   .then(function (content) {
//     console.log(content)
//     return buyPromise('huotuichang')
//   })

// 引入 generators
function* buyAmountGenerators() {
  var caiContent = yield buyPromise('cai');
  var paomianContent = yield buyPromise('paomian' + caiContent);  // 每步加上上一步结果
  var shuanghuanglianContent = yield buyPromise('shuanghuanglian' + paomianContent);
  return shuanghuanglianContent;
}

// // 返回的value就是yield后面的Promise对象
// var handler = buyAmountGenerators();
// handler.next().value.then(content => {
//   handler.next(content).value.then(content => {
//     handler.next(content).value.then(shuanghuanglianContent => {
//       console.log('shuanghuanglianContent:', shuanghuanglianContent);
//     });
//   });
// });

// 封装，按照顺序执行 co库原理
// 符合迭代器协议，递归遍历next函数，返回一个promise
function runGenerators(handler) {
  return Promise.resolve()
    .then(function nextAction(value) {
      console.log('每次传入的value=>', value)
      var next = handler.next(value);
      if (next.done) {
        return value  // done 没值，返回上一次的值
      }
      return Promise.resolve(next.value).then(nextAction)
    });
}

runGenerators(buyAmountGenerators()).then(finalRes => {
  console.log('finalRes=>', finalRes)
})


// if use co库，每次执行调用next，generator的一个函数执行器
var co = require('co');
co(buyAmountGenerators).then(content => {
  console.log('用co库的结果=>', content)
})
