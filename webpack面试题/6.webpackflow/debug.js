const webpack = require("webpack");
const config = require("./webpack.config.js"); //1.读取配置文件
debugger;
// webpack是一个函数，执行config 返回编译器
const compiler = webpack(config);
function compilerCallback(err, stats) {
  const statsString = stats.toString();
  console.log(statsString);
}
// 执行编译器
compiler.run((err, stats) => {
  compilerCallback(err, stats);  // stats 打包后结果的描述
});
