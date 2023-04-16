import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { hopeTheme } from "vuepress-theme-hope";    
export default defineUserConfig({
    lang: 'zh-CN',
    title: '你好， jony ！',

    theme:hopeTheme({
        displayFooter: true,
        pure:true,
        logo: "/images/logo.png",
        navbar: [      
            {
            text: "快速开始",
            link: "/home.md",
            icon: "lightbulb",
            // 仅在 `/zh/guide/` 激活
            // activeMatch: "^/python/$",
          },
          {
            text: "golang",
            link: "/golang",
            icon: "lightbulb",
            // 仅在 `/zh/guide/` 激活
            // activeMatch: "^/golang/$",
          },
          {
            text: "markdown",
            link: "/markdown",
            icon: "lightbulb",
            // 仅在 `/zh/guide/` 激活
            // activeMatch: "^/golang/$",
          },
        ],
        sidebar:{
            "/golang/":"structure",
            "/markdown/":"structure"
        },
        sidebarSorter: "title",
    }),
    description: '这是我的第一个 VuePress 站点',
    plugins: [
        searchPlugin({}), 
        registerComponentsPlugin({}),
    ],
    head: [
        [
            "script",
            {
                crossorigin: "anonymous",
                async: true,
                src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2256034117578399"
            }
        ]
    ]
})