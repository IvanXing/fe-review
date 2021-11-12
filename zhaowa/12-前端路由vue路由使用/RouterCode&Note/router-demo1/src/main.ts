import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";

// 最简单的使用
// import router from "./router";  

// 根据参数动态路由匹配
// import router from "./router/dynamic";

// 路由导航，进入&出路由之前之后进行的 全局和局部都可以
// import router from "./router/routeguard";

// 记住前一个页面的scroll位置
import router from "./router/scroll";

// import router from "./router/hash";

Vue.config.productionTip = false;

// 把整个vue实例挂在到#app元素上
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
