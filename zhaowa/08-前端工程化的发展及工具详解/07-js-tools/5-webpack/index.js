import $ from 'jquery'

// 异步打包，会分两个文件
import('./module')
    .then(content => {
        console.log(content, $('body'))
    })
