import { defineConfig } from 'vitepress'
export default defineConfig({
    title: 'rainycc的博客',
    description: '个人博客 前端学习记录 css js等',

    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '前端', link: '/js' },
            { text: '关于', link: '/about' },
        ]
    }
})