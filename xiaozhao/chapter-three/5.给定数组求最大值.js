// 1. Math.max

const array = [1,2,3,4,5];

const res = Math.max(...array)
const res1 = Math.max.apply(null,array)
console.log(`res`, res1);


// 2. reduce 函数

function getMax2(array){
  return array.reduce((prev,current)=>{
    return current > prev ? current: prev
  })
}
const res2 = getMax2(array);
console.log(`res`, res2);


// 3. sort

function getMax3(array){
  const result = array.sort();
  return result[result.length-1];
}
const res3 = getMax3(array);
console.log(`res`, res3);
