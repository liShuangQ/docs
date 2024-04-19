export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/lishuangqi/myWork/my-docs/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":"项目主页","i":"home"} }],
  ["/front-end/vue/vue3/jieshao.html", { loader: () => import(/* webpackChunkName: "jieshao.html" */"/Users/lishuangqi/myWork/my-docs/src/.vuepress/.temp/pages/front-end/vue/vue3/jieshao.html.js"), meta: {"t":"jieshao1"} }],
  ["/front-end/vue/vue3/jieshao2.html", { loader: () => import(/* webpackChunkName: "jieshao2.html" */"/Users/lishuangqi/myWork/my-docs/src/.vuepress/.temp/pages/front-end/vue/vue3/jieshao2.html.js"), meta: {"t":"jieshao2"} }],
  ["/front-end/vue/vue2/%E4%BB%8B%E7%BB%8D.html", { loader: () => import(/* webpackChunkName: "介绍.html" */"/Users/lishuangqi/myWork/my-docs/src/.vuepress/.temp/pages/front-end/vue/vue2/介绍.html.js"), meta: {"t":"介绍"} }],
  ["/front-end/vue/vue2/%E5%9F%BA%E6%9C%AC%E5%86%99%E6%B3%95.html", { loader: () => import(/* webpackChunkName: "基本写法.html" */"/Users/lishuangqi/myWork/my-docs/src/.vuepress/.temp/pages/front-end/vue/vue2/基本写法.html.js"), meta: {"t":"基本写法"} }],
  ["/front-end/vue/vue2/%E4%BB%A3%E7%A0%81%E7%89%87%E6%AE%B5/%E7%89%87%E6%AE%B5%E4%B8%80.html", { loader: () => import(/* webpackChunkName: "片段一.html" */"/Users/lishuangqi/myWork/my-docs/src/.vuepress/.temp/pages/front-end/vue/vue2/代码片段/片段一.html.js"), meta: {"t":"片段一"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/lishuangqi/myWork/my-docs/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
  ["/front-end/vue/vue3/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/lishuangqi/myWork/my-docs/src/.vuepress/.temp/pages/front-end/vue/vue3/index.html.js"), meta: {"t":"Vue3"} }],
  ["/front-end/vue/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/lishuangqi/myWork/my-docs/src/.vuepress/.temp/pages/front-end/vue/index.html.js"), meta: {"t":"Vue"} }],
  ["/front-end/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/lishuangqi/myWork/my-docs/src/.vuepress/.temp/pages/front-end/index.html.js"), meta: {"t":"Front End"} }],
  ["/front-end/vue/vue2/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/lishuangqi/myWork/my-docs/src/.vuepress/.temp/pages/front-end/vue/vue2/index.html.js"), meta: {"t":"Vue2"} }],
  ["/front-end/vue/vue2/%E4%BB%A3%E7%A0%81%E7%89%87%E6%AE%B5/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/lishuangqi/myWork/my-docs/src/.vuepress/.temp/pages/front-end/vue/vue2/代码片段/index.html.js"), meta: {"t":"代码片段"} }],
]);
