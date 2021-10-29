/*
*  1. 基本方法使用
*/

// Array.prototype.indexOf 返回第一个查找到的查找项的下标，不包含返回-1
// filter 对每项进行过滤，返回过滤后的数组
// sort 对数组排序，返回数组
// reduce
// push  返回值是push以后的length


const array = [1,2,3,4,5];


// indexOf用法
const res = array.indexOf(2);
console.log(`res`, res)  // 1


// filter用法  return 判断条件 true or false 从而进入与否
const res1 = array.filter((item, index) => {
  return item%2 === 0
})
console.log(res1)  // [2, 4]


// sort排序，a-b从小到大，b-a从大到小
const res3 = array.sort((a,b)=>{
  return b-a
})
console.log(`res3`, res3);

/*
*  reduce用法  参数：上一个元素，当前元素，当前元素index，原始数组
*/
const res4 = array.reduce(function(prev,current,currentIndex,sourceArray){
  // console.log(prev, current, currentIndex, sourceArray)
  return prev+current;
})
console.log(`res4`, res4)  // 15

// push 的用法
const res5 = array.push(1);
console.log(`res5`, res5)  // 6
console.log(`array`, array)  // [1, 2, 3, 4, 5, 1]


/*
*  2. 数组去重
*/

const array1 = [{name:"freemen",age:"20"},{name:"mukwang",age:"20"}]
const array2 = [1,2,3,4,5,2,3];

function handleError(array){
  if(!Array.isArray(array)){
    throw new Error("unique function params is not Array")
  }
}

/*
*  2.1 filter + indexOf
*/
function unique(array) {
  handleError(array)
  return array.filter((item,index)=>{
    return array.indexOf(item) === index   // 包含项&索引和现在相同，也就是说后面重复的是false
  })
}
const res11 = unique(array2);
console.log(`res11`, res11)

/*
*  2.2 相邻元素排序
*/
function unique2(array){
  handleError(array);
  array = array.sort()   // 先从小到大排序
  let res = [];
  for (let i = 0; i < array.length; i++){
    if(array[i] !==array[i-1]){
      res.push(array[i])
    }
  }
  return res;
}
const res12 = unique2(array2);
console.log(`res12`, res12);


/*
*  2.3 Set + 解构赋值
*/
function unique3(array){
  handleError(array);
  return [...new Set(array)]   // set返回值是类数组
}
const res13 = unique3(array2);
console.log(`res13`, res13);


/*
*  2.4 Set + Array.from
*/
function unique4(array) {
  handleError(array);
  return Array.from(new Set(array));
};
const res14 = unique4(array);
console.log(`res14`, res14)


/*
*  3. 对对象数组去重
*/

const array4 = [{name:"freemen",age:"22"},{name:"mukwang",age:"20"},{name:"dodo",age:"20"}]

/*
* 3.1 临时对象缓存数组项key值
*/
function unique5(array,key) {
  handleError(array);
  let result = [];
  let template = {};
  for (let i = 0; i < array.length; i++) {
    let keyName = array[i][key];   // 把age属性的值当key存在template中，就设置true，如果相同下次跳过
    if(template[keyName]){
      continue;
    }
    template[keyName] = true;
    console.log(template)
    result.push(array[i]);
  }
  return result;
}
const res21 = unique5(array4,'age');
console.log(`res21`, res21);

/*
* 3.2 用reduce , 第二个参数是第一次调用callback函数的第一个参数初始值，如果没有提供初始值，则是数组第一个元素
*/

function unique6(array,key) {
  handleError(array);
  let cacheObject = {}
  return array.reduce((prev,current)=>{
    // 包含返回空，不包含，赋值true，并压入
     cacheObject[current[key]]?"":cacheObject[current[key]]=true&&prev.push(current)
     return prev;
  },[])
}
const res66 = unique6(array,'age');
console.log(res66);
