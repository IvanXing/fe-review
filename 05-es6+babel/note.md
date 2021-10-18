## 1. babel

- 基本概念
  - babel分为三个阶段：解析（成ast），转换（用ast转换，替换成es5语法），生成
  - babel的功能是分解到plugin里的，不配置任何插件，babel输入和输出相同
  - 插件的顺序是从前往后排列
  - Preset, 参数env就是latest版本，env的核心目的是得知目标环境，只做必要的转换

- 插件和预设的区别
  - env包含一个范围，插件是更颗粒度小的，如果没有预设，babel转化需要指定插件
  - 小型库设计，可以只单独引入插件，例如只引入解析promise的插件，不要要更多或者更大范围的env的预设
  - 插件在预设前运行

- babel的运行流程
  - babel/parser，解析，解析成抽象语法树AST
  - babel/traverse，通过遍历ast，进行重组 
  - babel/generator，替换后再进行重组

