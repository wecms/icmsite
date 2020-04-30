module.exports = {
    base: '/',
    title: 'WeCMS Develop Docs',
    description: 'open develop tips and tricks',
    head: [
        ['link',
            { rel: 'icon', href: '/favicon.ico' }   //浏览器的标签栏的网页图标,基地址/docs/.vuepress/public
        ],
    ],
    markdown: {
        lineNumbers: true,  //是否在每个代码块的左侧显示行号
    },

    //默认主题配置
    themeConfig: {
        //导航栏
        nav: [
            //链接页面链接的根地址为/docs
            { text: '首页', link: '/' },
            { text: '文章', link: '/docs/' }
        ],
        sidebarDepth: 2,    //侧边栏深度
        //侧边栏
        sidebar: [
            ['/docs/', '文章']
        ],

        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'wecms/icmsite',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: 'Github',
        // 以下为可选的编辑链接选项
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '在 Github 上编辑此页',

        smoothScroll: true, //页面滚动效果
        lastUpdated: '最后更新', // string | boolean
    },

    //插件
    plugins: [
        '@vuepress/medium-zoom',    //zooming images like Medium（页面弹框居中显示）
        '@vuepress/nprogress',  //网页加载进度条
        '@vuepress/plugin-back-to-top', //返回页面顶部按钮
    ]

    // plugins: [
    //     ['@vuepress/search', {
    //         searchMaxSuggestions: 10
    //     }]
    // ]
}