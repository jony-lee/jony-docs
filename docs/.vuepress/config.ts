import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { hopeTheme } from "vuepress-theme-hope";    
export default defineUserConfig({
    lang: 'zh-CN',
    title: '阿冲成长笔记',

    theme:hopeTheme({
        displayFooter: true,
        pure:true,
        logo: "/images/logo.png",
        navbar: [    
          {
            text: "关注我",
            link: "/other/aboutme",
            icon: "lightbulb",
          },  
          {
            text: "Golang笔记",
            link: "/golang",
            icon: "lightbulb",
          },
          {
            text: "Python笔记",
            link: "/python",
            icon: "lightbulb",
          },
          {
            text: "Markdown笔记",
            link: "/markdown",
            icon: "lightbulb",
          },
          {
            text: "项目笔记",
            link: "/project_note",
            icon: "lightbulb",
          },
          {
            text: "LeetCode心法",
            link: "/leetcode",
            icon: "lightbulb",
          },
          {
            text: "副业社群",  
            link: "/other/sideline",
            icon: "lightbulb",
            // 仅在 `/zh/guide/` 激活
            // activeMatch: "^/python/$",
          },
          {
            text: "阿冲其他",
            icon: "lightbulb",
            children: [
              {
                text: "阿冲写作",  
                link: "/blog",
                icon: "lightbulb",
                // 仅在 `/zh/guide/` 激活
                // activeMatch: "^/python/$",
              },
              {
                text: "常用网站收录",  
                link: "/other/website",
                icon: "lightbulb",
                // 仅在 `/zh/guide/` 激活
                // activeMatch: "^/python/$",
              },
              {
                text: "chatgpt使用",  
                link: "/chagpt",
                icon: "lightbulb",
                // 仅在 `/zh/guide/` 激活
                // activeMatch: "^/python/$",
              },
            ],
            // 仅在 `/zh/guide/` 激活
            // activeMatch: "^/golang/$",
          },

        ],
        sidebar:{
            "/golang/":"structure",
            "/markdown/":"structure",
            "/python/":"structure",
            "/blog/":"structure",
            "/leetcode/":"structure",
            "/project_note/":"structure",
            "/chatgpt/":"structure",
            "/other/":"structure",
        },
        sidebarSorter: "title",
    }),
    description: '这是我的第一个 VuePress 站点',
    plugins: [
        searchPlugin({
          locales: {}
        }), 
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