// 1. CommonJS模块化
// 解析时候注入require和exports
// 顺序执行，即使有require，也是按照代码顺序同步执行，加载完执行后边代码
// 加载过相同路径就不会加载，取内存的缓存，保证单例，不会重新执行（require导入的是函数，地址变，不取缓存，重新加载）


// 2. node到浏览器的演变
// commonjs在node中，浏览器并不支持
// commonjs同步加载，会阻塞后面代码，浏览器有网络请求，需要异步操作


// 3. AMD模块化
// 基于浏览器 开发了AMD，加载放在回调中，加载完成去执行回调代码，异步
// require.js 之类的 AMD 模块化库之后才可以继续加载模块  提供define和require函数
// 通过http协议加载代码

// // moduleA.js 此种 moduleB在index已经声明过了
// define(function (require) {
//   var m = require('moduleB');
//   setTimeout(() => console.log(m), 1000);
// });
// // 也可以 moduleA.js
// define([moduleB], function (moduleB) {
//   setTimeout(() => console.log(moduleB), 1000);
// });


// 4. UMD->代码有的时候需要在node中跑，有的时候需要在浏览器中跑


// 5.UMD模块化解决方案，同构
// 运行时动态判断是CommonJS还是AMD，最终通过不同环境进行适配
// 都不是就挂在全局上，类似嵌入式设备运行js代码
// 兼容形式的模块化方案


// 6. 以上都是环境层面的，es6之后有了语言层面的模块化方案 ESModule
// ESModule 是由 JS 解释器实现，⽽AMD和common是在宿主环境中运⾏时实现

// 7. ESModule -> import export
// 没有default导出，可以通过 import * as newName 导出


// ESModule 是  编译时加载， commonjs是运行时加载，执行到require去加载


// 如果使用了ESModule，
// 必须使用webpack（babel编译成了CommonJS，不能用在浏览器，所以要打包）
// 和
// babel（es6->es5, ESModule->CommonJS）


// 如果只是使用 AMD或commonjs 只用webpack，甚至不用webpack
