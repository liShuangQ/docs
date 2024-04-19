import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/demo/",
  // {
  //   text: "指南",
  //   icon: "",
  //   prefix: "/guide/",
  //   children: [
  //     {
  //       text: "Bar",
  //       icon: "",
  //       prefix: "bar/",
  //       children: ["baz", { text: "...1", icon: "ellipsis", link: "" }],
  //     },
  //     {
  //       text: "Foo",
  //       icon: "",
  //       prefix: "foo/",
  //       children: ["ray", { text: "...2", icon: "ellipsis", link: "" }],
  //     },
  //   ],
  // },
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
