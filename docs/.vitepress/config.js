// .vitepress/config.js
import sideBarRoutes from './sideBarRoutes.js'
export default {
    // site-level options
    title: 'vue3-tiptap-katex docs',
    description: 'documentation of vue3-tiptap-katex package for developers',
    srcDir: 'src',
    base: '/vue-tiptap-katex-docs/',
    ignoreDeadLinks: true,
    themeConfig: {
        nav: [
            { text: 'user guide', link: '/guide' }
        ],
        sidebar: sideBarRoutes,
        socialLinks: [
            { icon: 'github', link: 'https://github.com/kerasus/vue3-tiptap-katex' }
        ]
    },
    rewrites: {
        'packages/pkg-a/src/pkg-a-docs.md': 'pkg-a/index.md',
        'packages/pkg-b/src/pkg-b-docs.md': 'pkg-b/index.md'
    }
}
