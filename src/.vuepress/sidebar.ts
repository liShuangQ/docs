import { sidebar } from "vuepress-theme-hope";

export default sidebar({
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
