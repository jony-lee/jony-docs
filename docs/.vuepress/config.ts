import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'

export default defineUserConfig({
    lang: 'zh-CN',
    title: '你好， jony ！',
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