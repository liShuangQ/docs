export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/lishuangqi/myWork/my-docs/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":"项目主页","i":"home"} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/lishuangqi/myWork/my-docs/src/.vuepress/.temp/pages/demo/index.html.js"), meta: {"t":"主要功能与配置演示","i":"laptop-code"} }],
  ["/demo/disable.html", { loader: () => import(/* webpackChunkName: "disable.html" */"/Users/lishuangqi/myWork/my-docs/src/.vuepress/.temp/pages/demo/disable.html.js"), meta: {"t":"布局与功能禁用","i":"gears","O":4} }],
  ["/demo/encrypt.html", { loader: () => import(/* webpackChunkName: "encrypt.html" */"/Users/lishuangqi/myWork/my-docs/src/.vuepress/.temp/pages/demo/encrypt.html.js"), meta: {"t":"密码加密的文章","i":"lock"} }],
  ["/demo/layout.html", { loader: () => import(/* webpackChunkName: "layout.html" */"/Users/lishuangqi/myWork/my-docs/src/.vuepress/.temp/pages/demo/layout.html.js"), meta: {"t":"布局","i":"object-group","O":2} }],
  ["/demo/markdown.html", { loader: () => import(/* webpackChunkName: "markdown.html" */"/Users/lishuangqi/myWork/my-docs/src/.vuepress/.temp/pages/demo/markdown.html.js"), meta: {"t":"Markdown 展示","i":"fab fa-markdown","O":2} }],
  ["/demo/page.html", { loader: () => import(/* webpackChunkName: "page.html" */"/Users/lishuangqi/myWork/my-docs/src/.vuepress/.temp/pages/demo/page.html.js"), meta: {"t":"页面配置","i":"file","O":3} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/lishuangqi/myWork/my-docs/src/.vuepress/.temp/pages/guide/index.html.js"), meta: {"t":"指南","i":"lightbulb"} }],
  ["/guide/bar/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/lishuangqi/myWork/my-docs/src/.vuepress/.temp/pages/guide/bar/index.html.js"), meta: {"t":"Bar 功能","i":"lightbulb"} }],
  ["/guide/bar/baz.html", { loader: () => import(/* webpackChunkName: "baz.html" */"/Users/lishuangqi/myWork/my-docs/src/.vuepress/.temp/pages/guide/bar/baz.html.js"), meta: {"t":"Baz","i":"circle-info"} }],
  ["/guide/foo/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/lishuangqi/myWork/my-docs/src/.vuepress/.temp/pages/guide/foo/index.html.js"), meta: {"t":"Foo 功能","i":"lightbulb"} }],
  ["/guide/foo/ray.html", { loader: () => import(/* webpackChunkName: "ray.html" */"/Users/lishuangqi/myWork/my-docs/src/.vuepress/.temp/pages/guide/foo/ray.html.js"), meta: {"t":"Ray","i":"circle-info"} }],
  ["/front-end/vue/vue2/%E4%BB%8B%E7%BB%8D.html", { loader: () => import(/* webpackChunkName: "介绍.html" */"/Users/lishuangqi/myWork/my-docs/src/.vuepress/.temp/pages/front-end/vue/vue2/介绍.html.js"), meta: {"t":"介绍"} }],
  ["/front-end/vue/vue2/%E5%9F%BA%E6%9C%AC%E5%86%99%E6%B3%95.html", { loader: () => import(/* webpackChunkName: "基本写法.html" */"/Users/lishuangqi/myWork/my-docs/src/.vuepress/.temp/pages/front-end/vue/vue2/基本写法.html.js"), meta: {"t":"基本写法"} }],
  ["/front-end/vue/vue3/jieshao.html", { loader: () => import(/* webpackChunkName: "jieshao.html" */"/Users/lishuangqi/myWork/my-docs/src/.vuepress/.temp/pages/front-end/vue/vue3/jieshao.html.js"), meta: {"t":"jieshao1"} }],
  ["/front-end/vue/vue3/jieshao2.html", { loader: () => import(/* webpackChunkName: "jieshao2.html" */"/Users/lishuangqi/myWork/my-docs/src/.vuepress/.temp/pages/front-end/vue/vue3/jieshao2.html.js"), meta: {"t":"jieshao2"} }],
  ["/front-end/vue/vue2/%E4%BB%A3%E7%A0%81%E7%89%87%E6%AE%B5/%E7%89%87%E6%AE%B5%E4%B8%80.html", { loader: () => import(/* webpackChunkName: "片段一.html" */"/Users/lishuangqi/myWork/my-docs/src/.vuepress/.temp/pages/front-end/vue/vue2/代码片段/片段一.html.js"), meta: {"t":"片段一"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/lishuangqi/myWork/my-docs/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
  ["/front-end/vue/vue2/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/lishuangqi/myWork/my-docs/src/.vuepress/.temp/pages/front-end/vue/vue2/index.html.js"), meta: {"t":"Vue2"} }],
  ["/front-end/vue/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/lishuangqi/myWork/my-docs/src/.vuepress/.temp/pages/front-end/vue/index.html.js"), meta: {"t":"Vue"} }],
  ["/front-end/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/lishuangqi/myWork/my-docs/src/.vuepress/.temp/pages/front-end/index.html.js"), meta: {"t":"Front End"} }],
  ["/front-end/vue/vue3/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/lishuangqi/myWork/my-docs/src/.vuepress/.temp/pages/front-end/vue/vue3/index.html.js"), meta: {"t":"Vue3"} }],
  ["/front-end/vue/vue2/%E4%BB%A3%E7%A0%81%E7%89%87%E6%AE%B5/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/lishuangqi/myWork/my-docs/src/.vuepress/.temp/pages/front-end/vue/vue2/代码片段/index.html.js"), meta: {"t":"代码片段"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
