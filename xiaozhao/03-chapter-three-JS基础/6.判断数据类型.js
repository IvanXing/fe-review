const array = [];
const object = {};

const number = 1;
const string = 'string';

// typeof

const type = typeof array;
console.log(`type`, type);  // object


const type1 = Object.prototype.toString.call(array);
const type2 = Object.prototype.toString.call(string);
console.log(`type1`, type1);  // [object Array]
console.log(`type2`, type2);  // [object String]


const type3 = typeof number;
console.log(`type3`, type3);
