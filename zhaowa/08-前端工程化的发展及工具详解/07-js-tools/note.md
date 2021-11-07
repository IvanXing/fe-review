02-compile
- 讲 babel

Babel是编译语法（编译阶段 devD阶段就可以）
Polyfill挂载方法（运行阶段 De阶段）
Corejs是标准方法实现，polyfill依赖


03-bundle 
- browserify 作用，打包成浏览器可以用的，模块导入抹平


04-tree-shaking
- tree-shaking 静态分析过程中移除无用代码，打包
- rollup 提出了 tree-shanking的概念
- index.js中导入 module的两个方法，只调用了一个，打包出output文件中，只有一个方法，只保留运行的依赖
- tree-shaking要求，必须使用ESmodules，静态规范 import，是个语法，静态分析时候就知道是否加载
- AST分析的时候，打上无用标记，在代码压缩的时候清掉

- 而commonJS的require是个方法，加载时才能分析


gulp/grunt 流式处理工具，把垂直领域工具串联起来，本身没有什么功能

05-webpack
- loader 处理不同的后缀文件