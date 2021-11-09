const  json = require('format-json');
const fs = require('fs');

class LogPlugin{
    constructor(options){
        this.options = options;
        // console.log(options);
    }
    // 插件在运行过程中会自动执行apply，通过compiler会拿到编译过程的信息
    apply(compiler){
        compiler.hooks.done.tapAsync('getStats',(stats)=>{
            // stats是webpack编译详情，记录，并打印
           const log =  json.plain(stats.toJson());
           // 获取输出目录
           const output = this.options.output;
           fs.writeFileSync(output,log);
        })
    }
}

module.exports = LogPlugin;
