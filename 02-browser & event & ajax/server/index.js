const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')   // 通过contenttype解析body，挂在request上

const app = express()

app.use(bodyParser.json())  // 引入中间件

// 访问根路由时
app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname, './index.html'))
})


app.post('/api/info', function(req, res) {
    console.log(req.body, typeof req.body)
    res.json({
        data: req.body
    })
})

app.listen(8080)