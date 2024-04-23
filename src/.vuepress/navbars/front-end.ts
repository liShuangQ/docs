export const frontEnd =  {
    text: "前端",
    prefix: "/front-end/",
    children: [
        { text: "EcmaScript", link: "ecmaScript/介绍" },
        { text: "浏览器", link: "browser/介绍" },
        {
            text: "VUE",
            prefix: "vue/",
            children: [
                { text: "vue2", link: "vue2/介绍" },
                { text: "vue3", link: "vue3/介绍" },
            ],
        },
        { text: "小程序", link: "miniProgram/介绍" },
        {
            text: "打包工具",
            prefix: "packingTool/",
            children: [
                { text: "webpack", link: "webpack/介绍" },
                { text: "vite", link: "vite/介绍" },
            ],
        },
        {
            text: "运行时",
            prefix: "runTime/",
            children: [
                { text: "node", link: "node/介绍" },
            ],
        },
    ],
}