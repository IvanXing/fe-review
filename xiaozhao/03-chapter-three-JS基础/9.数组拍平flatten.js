// 多维数组转换为一维数组，比如echarts做大屏数据展示

// 1. reduce函数
// 2. es6 自带 flat函数
// 3. 用while循环加扩展运算符


const array = [1, 2, 3, 4, [5, 6, [7, 8]]]
// => array  [1,2,3,4,5,6,7,8];

// 1. reduce 实现 ，第一个值是[]

function flatten(array) {
  return array.reduce(function (prev, current) {
    return prev.concat(Array.isArray(current) ? flatten(current) : current)
  }, [])
}

const result = flatten(array);
console.log(`result`, result);



// 2. flat 实现

function flatten2(array) {
  return array.flat(Infinity);  // 无穷大的展平
}

const result1 = flatten2(array)
console.log(`result1`, result1);



// 3. while循环  array.some 判断是否数组

function flatten3(array) {
  while (array.some(Array.isArray)) {
    array = [].concat(...array)
  }
  // 1 array
  // 2 已经被拍平
  return array;
}

const result2 = flatten3(array);
console.log(`result2`, result2);
