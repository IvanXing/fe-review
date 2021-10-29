/**
 * @file 入口文件
 *
 */
var http = require('http');
var enhancer = require('./enhancer');
var path = require('path');
var mockData = require('./mock');
const mockDirData = require('./mock-dirs');
const fs = require('fs');
const RESOURCE_DIR = path.resolve(__dirname, '../project/')

var app = http.createServer(function (req, res) {
    app.handle(req, res);
});

enhancer.decorateApp(app);

// 访问根路径，就是index.html
app.route('/', function (req, res) {
    // console.log('err::???', RESOURCE_DIR + '/index.html');
    fs.readFile(RESOURCE_DIR + '/index.html', (err, content) => {
        console.log('err::', err);
        res.send(content);
    });
});

// 获取数据
app.route('/list', function (req, res) {
    res.send(JSON.stringify(mockData));
});

// 获取tab
app.route('/tabs', function (req, res) {
    res.send(JSON.stringify(mockDirData));
});

// 访问css js静态文件
app.static('static', RESOURCE_DIR);

console.log('启动8099')
app.listen(8099, '0.0.0.0');
