class BaseRouter {
    constructor() {
        this.routes = {};
        // location.hash; hash的方式
        this.init(location.pathname);  // 获取pathname
        this._bindPopState();
    }

    init(path) {
        console.log('init==>', path)
        window.history.replaceState({   // 初始化 替换
            path
        }, null, path); 
        const cb = this.routes[path];  // 匹配到就执行
        if (cb) {
            cb();
        }
    }

    route(path, callback) {
        this.routes[path] = callback || function () {};
        // console.log('this.routes==>', this.routes)
    }

    go(path) {
        // 跳转并执行对应的callback
        window.history.pushState({
            path
        }, null, path);
        const cb = this.routes[path];
        if (cb) {
            cb();
        }
    }

    _bindPopState() {
        // 演示一下popstate事件触发后，会发生什么
        window.addEventListener('popstate', (e) => {
            const path = e.state && e.state.path;
            console.log(`popstate监听到的path=${path}`);
            this.routes[path] && this.routes[path]();   // 点击回退也得执行，不然匹配不到方法
        })
    }
}

const Router = new BaseRouter();

const body = document.querySelector('body');
const container = document.querySelector('.container');

function changeBgColor(color) {
    body.style.backgroundColor = color;
}

Router.route('/', function () {
    changeBgColor('white');
});
Router.route('/gray', function () {
    changeBgColor('gray');
});
Router.route('/green', function () {
    changeBgColor('green');
});

container.addEventListener('click', e => {
    if (e.target.tagName === 'A') {
        e.preventDefault();
        Router.go(e.target.getAttribute('href'));
    }
});