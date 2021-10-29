import {request, throttle} from './utils/index';
import * as components from './items';
import regenRumtime from 'regenerator-runtime/runtime';
// react
class Manager {
    constructor($container) {
        this.$container = $container;
    }

    async init() {
        // 发请求没有依赖关系，停!,下两行没有停，并行发请求，不需要有返回后再发下一个，返回promise
        // await相当于上一个的then中才发下一个，没必要串行发请求
        const dirsTask = this.getDirs();
        const listTask = this.getList();

        // 同步发请求，同步语句await无碍
        const dirs = await dirsTask;  // await一个promise，赋值给dirs，async定义函数返回的就是promise
        const list = await listTask;

        console.log(list, components)

        this.renderList(list);
        this.listenScroll();
    }

    // 获取目录
    async getDirs() {
        const {data: dirs} = await request({url: '/tabs'});
        return dirs;
    }

    async getList() {
        const {data: list} = await request({url: '/list'});
        return list;
    }

    // 渲染list
    renderList(list) {
        list.forEach(item => {
            const itemType = item.type.replace(/^\w/, w => w.toUpperCase());  // 第一个字母改成大写
            const Component = components[itemType];
            (new Component(item)).mount(this.$container);
            console.log(item)
        });
    }

    // 下拉加载
    listenScroll() {
        const THRET_HOLD = 100;  // 滑动到距离底部100px 去加载
        // 此处this可能会变，用箭头函数
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;   // window.scrollY y滚动条距离顶部距离，滚动条滑下来多少
            const screenHeight = window.screen.height;  // 屏幕高度
            const documentHeight = document.documentElement.offsetHeight;  // 整个文档高度
            if (documentHeight - (screenHeight + scrollY) < THRET_HOLD) {
                this.appendList();
            }
        });
    }

    // 给页面追加代码
    // 降速截流 2s不执行多次
    @throttle(2000)
    async appendList() {
        console.log('append-actions');
        const listData = await this.getList();
        this.renderList(listData);
    }
}

// 取dom
const $container = document.getElementById('container');
const manager = new Manager($container);
manager.init();