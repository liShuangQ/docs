import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { viteBundler } from '@vuepress/bundler-vite'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
export default defineUserConfig({
  base: "/docs/",

  lang: "zh-CN",
  title: "",
  description: "ShuangQi 的文档",
  bundler: viteBundler({
    viteOptions: {
    },
    vuePluginOptions: {
    },
   
  }),

  theme,

  plugins: [
    // docsearchPlugin({
    //   // 配置项
    // }),
  ],
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
