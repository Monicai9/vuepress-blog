export const data = JSON.parse("{\"key\":\"v-5d7259d4\",\"path\":\"/guide.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"sidebar\":\"auto\"},\"excerpt\":\"\",\"headers\":[],\"git\":{},\"filePathRelative\":\"guide.md\"}")

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
