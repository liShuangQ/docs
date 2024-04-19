import comp from "/Users/lishuangqi/myWork/my-docs/src/.vuepress/.temp/pages/front-end/vue/vue2/jieshao.html.vue"
const data = JSON.parse("{\"path\":\"/front-end/vue/vue2/jieshao.html\",\"title\":\"Vue2 介绍\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Vue2 介绍\",\"category\":[\"介绍\"],\"tag\":[\"vue\"],\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.03,\"words\":9},\"filePathRelative\":\"front-end/vue/vue2/jieshao.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
