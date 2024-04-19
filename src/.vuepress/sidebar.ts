import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  // "/": [
  //   "",
  //   {
  //     text: "案例",
  //     prefix: "demo/",
  //     link: "demo/",
  //     children: "structure",
  //   },
  //   {
  //     text: "文档",
  //     prefix: "guide/",
  //     children: "structure",
  //   },
  //   {
  //     text: "幻灯片",
  //     link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
  //   },
  // ],
  "/front-end/vue/vue2/":[
    {
      text: "介绍",
      prefix: "介绍",
      link: "介绍",
      children: "structure",
    },
    {
      text: "基本写法",
      prefix: "基本写法",
      link: "基本写法",
      children: "structure",
    },
    {
      text: "代码片段",
      prefix: "代码片段/",
      link: "代码片段/",
      children: "structure",
    },
  ]
});
