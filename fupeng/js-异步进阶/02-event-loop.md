# event loop

图片可参考 ppt

```js
console.log('Hi')

setTimeout(function cb1() {
    console.log('cb1') // cb 即 callback
}, 5000)

console.log('Bye')
```

------

DOM 事件，也用 event loop

```html
<button id="btn1">提交</button>

<script>
console.log('Hi')

$('#btn1').click(function (e) {
    console.log('button clicked')
})

console.log('Bye')
</script>
```
---

DOM的主动点击和被动点击

```js
const boxDom = document.querySelector('.box')
console.log(1)
 
boxDom.addEventListener('click', () => {
 console.log(2)
})
 
boxDom.click()
console.log(3)

// 输出1 2 3
```

