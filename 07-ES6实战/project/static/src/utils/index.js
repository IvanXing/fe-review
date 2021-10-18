// 封装一个request
export const request = params => {
    params.method = params.method || 'GET';
    return fetch(
        params.url,
        params
    )
    .then(res => res.json());
};


// 截流
// 传入原型，函数名
export const throttle = (timeout = 1000) => (targetPrototype, propName) => {
    // 取出方法
    const oldMethod = targetPrototype[propName];
    let prevTime = 0;  // 执行上一次时间
    // 加新方法
    targetPrototype[propName] = function () {
        // 开始计时
        const curTime = +new Date();   // curTime = curTime + newdate
        if (curTime - prevTime > timeout) {  // 当前执行时间 - 上次时间 是否大于 阈值
            oldMethod.call(this);  // 执行
            prevTime = curTime;  // 更新时间
        }
    }
    return targetPrototype;
};

