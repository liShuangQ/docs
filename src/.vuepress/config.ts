import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { viteBundler } from '@vuepress/bundler-vite'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
export default defineUserConfig({
  base: "/docs/",

  lang: "zh-CN",
  title: "文档演示",
  description: "vuepress-theme-hope 的文档演示",
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
