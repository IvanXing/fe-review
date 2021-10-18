## 1. 什么是面向对象编程？

面向对象是一种编程思想:
面向过程：关注的是动词，分析出解决问题所需要的所有步骤，针对所有的步骤一一实现一些函数，按照顺序来调用函数。
面向对象：关注的是主谓，是把构成这个问题的所有事物，拆解成一个个的对象，这一个个的对象是为了描述这个对象在当前问题中的各种行为方式。

### 1.1 面向对象编程的特性

1. 封装：让使用对象的人不用去考虑内部的实现，对象对外暴露出一些 api，提供给使用方使用。
2. 继承：为了代码的复用，从父类上继承它允许继承的属性和方法
3. 多态：不用的对象作用于同一个操作，然后产生不同的结果（下棋操作，不同的人，下不同颜色的子，产生不同结果）。多态的思想实际上把"做什么"和"谁去做"这两者个分离开。 

### 1.2 面向对象特性的表现

五子棋

面向过程：开局 -> 下白棋 -> 展示白棋 -> 判断胜负 -> 下黑棋 - > 展示黑棋 -> 判断胜负

面向对象：棋盘 玩家（黑方，白方）

1. 封装：Player 类，CheckerBoard 类，start, revert, init；
2. 继承：white 和 black 继承自 Player, 可以直接使用 start revert;
3. 多态：white 下棋是白色，Black 下棋是黑色的。

### 1.3 什么场景适合面向对象编程？

面向过程：简单的场景下，协同人员较少
面向对象：中型或者大型项目中，协同人员较多，迭代频繁。健壮

## 2. JS 中的面向对象

- 是一种基于对象的语言object-based，包含属性和方法

### 2.1 Js 中的一些内置对象

- Array Date Function RegExp Math

```js
// 同一个方法对不同对象有不同结果，多台
[1,2,3].toString -> '1,2,3'
{}.toString  -> [obect Object]
```

```js
// 简单的继承
const o = new Object();
o.toString()
```

```js
// 封装
const date = new Date();
date.getTime();
```

### 2.2 JS 中怎么创建对象？

#### 2.2.1 普通方式

```js
const Player = new Object();
Player.color = "red";
Player.start = function () {
  console.log("下棋");
};
```

- 工厂模式 创建对象

```js
function createPlayer(color) {
    const Player = new Object();
    Player.color = color;
    Player.start = function() {
        console.log('下棋')
    }
    return Player;
}
const red = createPlayer('red');
const 1 = createPlayer('1');
const 2 = createPlayer('3');
const red = createPlayer('red');

```
- 工厂模式缺点：无法判断类型

#### 2.2.2 构造函数/实例

```js
function Player() {
    this.color = 'red'；
    this.start = function () {
        console.log(this.color);
    }
}
const p1 = new Player();
const p2 = new Player();
// p1.constructor === p2.constructor  => true
```

- 普通函数直接new创建缺点：每生成一个实例，构造函数内部的方法都会重新开辟一块内存。

#### 2.2.3 原型

```js
function Player() {
    this.color = 'red'；
}

Player.prototype.start = function() {
    console.log(111111);
}

const p1 = new Player();
const p2 = new Player();

console.log(p1.start === p2.start);
console.log(p1.constructor);
// 构造函数里有 prototype
// p1.constructor.prototype === Player.prototype  => true
```

#### 2.2.4 静态属性
- 提供给构造函数使用的属性是静态属性

```javascript
function Player() {
    this.color = 'red'；
    if (!Player.total) {
        Player.total = 0;
    }
    Player.total++;  // 统计创建了多少个
}

const p1 = new Player();
console.log(Player.total);  // 1
const p2 = new Player();
console.log(Player.total);   // 2
```
