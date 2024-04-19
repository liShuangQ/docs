import comp from "/Users/lishuangqi/myWork/my-docs/src/.vuepress/.temp/pages/front-end/vue/vue2/jieshao .html.vue"
const data = JSON.parse("{\"path\":\"/front-end/vue/vue2/jieshao%20.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":\"front-end/vue/vue2/jieshao .md\"}")
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
