---
title: scale适配大屏
category:
- 片段
tag:
- vue
- vue2
- scale
- 大屏

---
## 代码
```js
mounted(){
    //初始化自适应  ----在刚显示的时候就开始适配一次
    handleScreenAuto();
    //绑定自适应函数   ---防止浏览器栏变化后不再适配
    window.onresize = () => handleScreenAuto();
},
destroyed(){
    window.onresize = null;
},
methods: {
    //数据大屏自适应函数
    const handleScreenAuto = (): void => {
        const designDraftWidth = 1920;//设计稿的宽度
        const designDraftHeight = 960;//设计稿的高度
        //根据屏幕的变化适配的比例
        const scale = document.documentElement.clientWidth / document.documentElement.clientHeight < designDraftWidth / designDraftHeight ?
            (document.documentElement.clientWidth / designDraftWidth) :
            (document.documentElement.clientHeight / designDraftHeight);
        //缩放比例
        (document.querySelector('#screen') as any).style.transform = `scale(${scale}) translate(-50%)`;
    }
}

```

```html

<template>
    <div className="screen-wrapper">
        <div className="screen" id="screen">

        </div>
    </div>
</template>
```

```css
    .screen-root {
    height: 100%;
    width: 100%;

    .screen {
        display: inline-block;
        width: 1920px;
    / / 设计稿的宽度 height: 960 px;
    / / 设计稿的高度 transform-origin: 0 0;
        position: absolute;
        left: 50%;
    }
}
```
将上述生命周期和methods中的代码复制，然后在id为screen的div中编写数据大屏即可。
## 缺点:
- 内部组件如果用了鼠标坐标点这些，会有偏移的。比如 slider滑块这些依赖 clientX 这些的。
- 如果大屏内存在地图组件的交互，存在点错位问题