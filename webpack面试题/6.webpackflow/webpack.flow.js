/**
 * webpack的工作流程
 */
let { SyncHook } = require("tapable");
let fs = require('fs');
 class Compiler {
   constructor(options) {
       this.options = options;
       // 有两个钩子，run和done
       this.hooks = {
           run:new SyncHook(),
           done:new SyncHook()
       }
    }
   run(){
     /*
     * 模块modules 变成 代码块chunk 最后变成 文件file，最后文件写入硬盘
     */
     let modules = [];  // 每个文件都是一个模块
     let chunks = [];
     let files = [];
     //触发run钩子执行  广播
     this.hooks.run.call(); 
      /*
      * 2.3 确定入口：根据配置中的entry找出所有的入口文件
      */
     //2.3 根据配置中的entry找出所有的入口文件（根目录+输出文件）
     let entry = path.join(this.options.context, this.options.entry);

     /*
     * 3. 编译模块
     */
     // 3.1 从入口文件出发，调用所有配置的Loader对模块进行编译，再找出该模块依赖的模块，
     // 再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理；
     // 3.1.1 读取模块内容, 递归进行loader转换，压入modules
     //let sum = (a, b) => a + b;let title = require("./title");
     let entryContent = fs.readFileSync(entry, "utf8");  // 返回文件内容
     let entrySource = babelLoader(entryContent);  // babel处理文件内容，js模块

     //模块module和chunk代码块 还有file bundle 文件的关系
     let entryModule = { id: entry, source: entrySource };
     modules.push(entryModule);

     //把入口模块的代码转成抽象语法树AST,分析里面的import 和require依赖
     let title = path.join(this.options.context, "./src/title.js");
     let titleContent = fs.readFileSync(title, "utf8");
     let titleSource = babelLoader(titleContent);
     // push
     let titleModule = { id: title, source: titleSource };
     modules.push(titleModule);

     /*
     *  4.完成编译
     */
     // 4.1 根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk代码块
     // 一个chunk包含多个modules
     let chunk = { name: "main", modules };
     chunks.push(chunk);
     // 4.2 再把每个Chunk转换成一个单独的文件加入到输出列表
     let file = {
       file: this.options.output.filename,  // 文件名
       // 打包后的源码
       source: `  
            (function (modules) {
            function __webpack_require__(moduleId) {
                var module = { exports: {} };
                modules[moduleId].call(
                module.exports,
                module,
                module.exports,
                __webpack_require__
                );
                return module.exports;
            }
            return __webpack_require__("./src/app.js");
            })(
            {
            "./src/app.js": function (module, exports, __webpack_require__) {
                var title = __webpack_require__("./src/title.js");
                console.log(title);
            },
            "./src/title.js": function (module) {
                module.exports = "title";
            },
            });

         `,
     };
     files.push(file);
     /*
     * 5. 输出完成
     */
     //5.1 在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统
     // 拼接输出路径
     let outputPath = path.join(
       this.options.output.path,
       this.options.output.filename
     );
     fs.writeFileSync(outputPath, file.source, "utf8");
     //在以上过程中，Webpack 会在特定的时间点广播出特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑，
     //并且插件可以调用 Webpack 提供的 API 改变 Webpack 的运行结果
     
     this.hooks.done.call();  // plugin的执行
   }
 }

 /**
  * 1.初始化参数：从配置文件和Shell语句中读取与合并参数，得出最终的参数
  *   - shell语句 就是 npx webpack --mode=develop这种参数合并
  *   - 读取配置文件webpack.config'
  */
 let options = require('./webpack.config');
 /*
 *  2.开始编译
 */
/*
* 2.1 用上一步得到的参数初始化Compiler对象
*/
 let compiler = new Compiler(options);
 /* 
 * 2.2.加载所有配置的插件，执行对象的run方法开始执行编译
 *    - 执行plugin（plugin中都有apply方法执行，apply中取注册触发tapable库的行为，发布订阅，目前只注册）
 */
 if(options.plugins&& Array.isArray(options.plugins)){
      for(const plugin of options.plugins){
          plugin.apply(compiler);
      }
 }
// run开始编译
 compiler.run();


///模拟babel-loader  es6编译成es5
 function babelLoader(source){
   return `
       let sum = function sum(a, b){
           return a + b;
       };
       let title = require('./title');
       `;
 }
