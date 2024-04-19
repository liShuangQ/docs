import comp from "/Users/lishuangqi/myWork/my-docs/src/.vuepress/.temp/pages/front-end/vue/vue2/介绍/index.html.vue"
const data = JSON.parse("{\"path\":\"/front-end/vue/vue2/%E4%BB%8B%E7%BB%8D/\",\"title\":\"介绍\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"介绍\",\"article\":false,\"feed\":false,\"sitemap\":false,\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/front-end/vue/vue2/%E4%BB%8B%E7%BB%8D/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"文档演示\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"介绍\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Mr.Shuangqi\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"介绍\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null}")
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
