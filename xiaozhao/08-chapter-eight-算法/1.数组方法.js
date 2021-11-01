/*
 * 1. concat
 * 连接两个或多个数组，并返回新数组
 */
const firstArray = [1,2,3,4,5];
const secondArray = [6,7,8,9];
const result1 = firstArray.concat(secondArray);
console.log(result1); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

/*
 * 2. every
 * 判断每项是否符合语句判断，都是true返回true
 */
const array2 = [{name:'freemen',age:18},{name:'vinko',age:18}];
const result2  = array2.every((item)=>{
    return item.name==="freemen"
})
console.log(result2);

/*
 * 3. filter
 * 返回通过语句测试的项，返回新数组
 */
const array3 = [{name:'freemen',age:18},{name:'vinko',age:18}];
const result3  = array3.filter(item=>{
    return item.name==="freemen"
})
console.log(result3);

/*
* 4. forEach
* 操作每一项，没有返回值，改变原数组
*/

const array4 = [{name:'freemen',age:18},{name:'vinko',age:18}];
array4.forEach((item,index)=>{
    item.name = item.name + 'see'
})
console.log(array4)

/*
 * 5. join
 * 把所有项连接成一个字符串
 */
const array5  = [1,2,3,4,5];
const result5 = array5.join(';');
console.log(result5);  //1;2;3;4;5

/*
 * 6. indexOf
 * 查找数组中元素，有的话返回索引，没有返回-1
 */
const array6  = [1,2,3,4];
const result6 = array6.indexOf(9);
const result61 = array6.indexOf(3);
console.log(result6);  // -1
console.log(result61);  // 2

/*
* 7. lastIndexOf
* 返回数组中与给定值相同的最大索引
 */
const array7 = [1,2,3,3,3,3,4,5];
const result7 = array7.lastIndexOf(3);
console.log(result7);  // 5

/*
 * 8.map
 * 返回语句操作后的，新数组
 */
const array8 = [{name:'freemen',age:18},{name:'vinko',age:18}];
const result8 = array8.map(item=>{
    if(item.name==='freemen'){
        return item;
    }
    return {}
})
console.log(result8);

/*
 * 9. reverse
 * 对数组进行颠倒
 */
const array9  = [1,2,3,4,5];
const result9 = array9.reverse();
console.log(result9);

/*
 * 10. slice
 * 返回参数切割的新数组，包前不包后，无参是浅拷贝
 */
const array10 = [1,2,3,4,5];
const result10  = array10.slice(0,3);
console.log(result10);

/*
 * 11. some
 * 任意一项返回true，就返回true
 */
const array11  = [1,2,3,4,5];
const result11 = array11.some(item=>{
    return item===4;
})
console.log(result11);

/*
 * 12. sort
 * 排序
 */
const array12  = [1,2,3,4,5];
const result12 = array12.sort((a,b)=>{
    return a-b;
})
console.log(result12);

/*
* 13 toString
 */
const array13 = [1,2,3,4,5];
const result13 = array13.toString();
console.log(result13);
