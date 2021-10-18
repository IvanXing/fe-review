"use strict";

require("core-js/modules/es7.array.includes");

var func = function func() {
  return console.log('hello es6');
};

var variable = 'this is a variable';
var _a = {
  a: 'this is a'
},
    a = _a.a,
    _a$b = _a.b,
    b = _a$b === void 0 ? 1 : _a$b;
var array = [1, 2, 3];
console.log(array.includes(1));
