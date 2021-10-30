// js 如何删除数组中指定的元素
const array = [{name: "freemen",age: 18},{name:'vinko',age:20}];

function cutArray (sourceArray,target) {
    sourceArray.forEach((item,index)=>{
       if(item.name===target){
          sourceArray.splice(index,1);
       }
    })
    return sourceArray;
}

const result = cutArray(array,'freemen');
console.log(result);


// splice
const months1 = ['Jan', 'March', 'April', 'June'];
months1.splice(1, 0, 'Feb');
console.log(months1);


const months2 = ['Jan', 'March', 'April', 'June'];
months2.splice(4, 1, 'May');
console.log(months2);
