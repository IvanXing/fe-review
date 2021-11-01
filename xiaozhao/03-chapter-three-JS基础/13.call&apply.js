const obj = {
  name: "freemen"
}

function testFunc(a, b) {
  console.log('a :>> ', a);
  console.log('b :>> ', b);
  console.log('this.name :>> ', this.name);
}
testFunc.call(obj, 'a', 'b')
testFunc.apply(obj, ['a', 'b'])


const core = (context, args, _this) => {
  args = args || [];
  const key = Symbol();
  context[key] = _this;  // context是当前this，把执行函数绑定到context里 context[key] = this;
  const result = context[key](...args)
  delete context[key]   // 删除这个函数
  return result;
}

Function.prototype.callFn = function (context, ...args) {
  return core(context, args, this);  // this就是当前调用call的函数
}

Function.prototype.applyFn = function (context, args) {
  return core(context, args, this);
}

testFunc.callFn(obj, 'a', 'b');
testFunc.applyFn(obj, ['a', 'b']);
//
