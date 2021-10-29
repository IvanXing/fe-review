const TMap = function (options) {
  this.name = options.name;
  this.address = options.address;
  // return {
  //   name: 'map',
  //   address: 'SZ',
  // }                    // 如果有return 实例就是返回值
}

const map = new TMap({
  name: 'tmap',
  address: "BJ"
});

console.log('map :>> ', map);

// 1. 实例化对象
// 2.返回值的问题: 构造函数中如果有值返回 那实例化后的对象就是这个返回值。

const ObjectFactory = (...args) => {
  console.log(args)
  // 初始化一个对象
  const obj = {};
  // 获取构造函数，取第一个值
  const Constructor = [].shift.call(args)
  obj.__proto__ = Constructor.prototype;

  // 执行构造函数
  const ret = Constructor.apply(obj, args);

  // 如果返回的是object，那么就是return的值，否则是obj
  return typeof ret === 'object' ? ret : obj;

}

// 模拟，传入构造函数 和 值
const map2 = ObjectFactory(TMap, {name: "MAP", address: "BJ"});

console.log('map :>> ', map2);
