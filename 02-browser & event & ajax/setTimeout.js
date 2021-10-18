function func() {}
setTimeout(function() {
    func()
    setTimeout(func, 500)
}, 500)



// dom array-like
// 通过Array.from() 转换成数组进行操作