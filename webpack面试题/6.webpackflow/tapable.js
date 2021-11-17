/**
 * button.addEventListener('click',()=>{console.log('click')});
 * button.trigger('click');
 */

//  类似于订阅发布的核心库 tapable库

//let {SyncHook} = require('tapable');

// 模拟实现
class SyncHook{
    constructor(){
        this.taps = []
    }
    tap(name,fn){
        this.taps.push(fn);
    }
    call(){
        this.taps.forEach(tap=>tap());
    }
}
let hook = new SyncHook();
//hook.addEventListener();
/*
*  注册监听
*/
hook.tap('some name',()=>{
    console.log("some name");
});
/*
*  触发监听
*/
hook.call();
/* 
function add(){}
add.call(); */
//webpack-dev-server memory-fs