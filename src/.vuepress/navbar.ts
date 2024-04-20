import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "前端",
    prefix: "/front-end/",
    children: [
      {
        text: "VUE",
        prefix: "vue/",
        children: [
          { text: "vue2", link: "vue2/介绍" },
          { text: "vue3", link: "vue3/" },
        ],
      },
    ],
  },
]);
