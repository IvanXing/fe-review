// 装饰类，把类传给itemfy
const itemFy = (target) => {
    target.prototype.click = function () {
        console.log('click');
    }
    return target;
};

// 装饰方法，传递的是函数的protoype和函数名
const renderShell = (clickAble) => {
    console.log('renderShell');

    return (targetPrototype, propName) => {
        const originRender = targetPrototype[propName];
        targetPrototype[propName] = function () {

            const prefix = clickAble
                ? '<div class="outer" onclick="click">'
                : '<div class="outer">' ;
            return prefix + originRender.call(this) + '</div>';

        };
        return targetPrototype;
    }
}
const renderCloseAble = () => {
    console.log('renderCloseAble');
    return (targetPrototype, propName) => {
        const originRender = targetPrototype[propName];
        targetPrototype[propName] = function () {
            return originRender.call(this) + '<span>x</span>';
        };
        return targetPrototype;
    }
}

// 提取公约
// 装饰器先执行renderCloseAble 后 renderShell
class MyComponent {

    @renderShell(true)
    @renderCloseAble()
    render() {
        return '<div>内容</div>';
    }
}

// function MyComponent() {}

var myComponent = new MyComponent();
console.log(myComponent.render(), '\n');
// console.log(myComponent.renderTwo());