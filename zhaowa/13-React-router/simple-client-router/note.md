## 前端路由的优势

- 状态保留，可以通过url获取到当前用户的状态，下次渲染的时候，可以基于URL来决定初始化的组件
- URL不触发后端路由，不发送请求，体验同时能达到更新页面内容的效果
- hash的兼容性很好，同时hash存储的内容不会发送到服务端 #后的不发送
- history的特点是直接改变url，后端也可以拿到前端的状态