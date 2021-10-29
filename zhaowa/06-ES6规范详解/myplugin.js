// ./node_modules/.bin/babel test.js --out-dir=dist  执行文件

module.exports = function(babel) {
  return {
    visitor: {
      // 遍历节点，arguments可以访问到所有属性
      CallExpression(path) {
        // console.log(arguments);
        // console.log(path.node)
        if(path.node.callee.property && path.node.callee.property.name === '最终') {
          console.log('path.node.callee.property.name=>', path.node.callee.property.name)
          path.node.callee.property.name = 'finally';
          // 编译后代码就已经换成了finally
          
          // StaticRange.file.ast.push('core-js/Promise-polyfill')  // 编译过程加polyfill
        }

      }
    }
  }
}