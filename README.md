# icms-site

The documentation use VuePress 1.x.

This documentation is built using [VuePress 1](https://v1.vuepress.vuejs.org/zh/guide/), a modern static website generator.

The documentation source of [icmsite](https://github.com/wecms/icmsite)

[Online](https://wecms.github.io/icmsite)

## Development

```bash
# clone the project
git clone git@github.com:wecms/icmsite.git

# install dependency
npm install

# develop
npm run dev
```

open http://localhost:8080/icmsite/

> Generator by [vuepress](https://github.com/vuejs/vuepress)

## Publish GitHub Pages

命令行切换到工作根目录(`icmsite`)下，执行 `sh deploy.sh`，就会开始构建，然后提交到远程仓库，注意这里提交到了 gh-pages 分支。

原理是执行了`./deploy.sh`脚本，具体步骤可看`./deploy.sh`脚本内容。

也可以在 package.json 里加一些脚本：

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs",
    "deploy-gh": "GH=1 yarn docs:build && bash ./deploy-gh.sh"
  }
}
```

它的作用如下：

`GH=1`：设置一个环境变量 GH 的值为 1，用于在后续的构建脚本和部署脚本中进行判断。注意在 Windows 系统上设置环境变量`set GH=1`和Linux上不同。

我的直接这样写：`"deploy": "sh ./deploy.sh"`

`yarn docs:build`：运行 yarn 命令的 docs:build 脚本，用于构建 VuePress 网站。

`bash scripts/deploy-gh.sh`：运行 `./deploy-gh.sh` 脚本，用于将构建好的网站部署到 GitHub Pages 上。

[一篇带你用 VuePress + Github Pages 搭建博客 - 掘金](https://juejin.cn/post/7041134607869149215)

[部署 VuePress 到 GitHub Pages (超详细) - 掘金](https://juejin.cn/post/6844904122873806856)

[搭建一个免费的，无限流量的Blog----github Pages和Jekyll入门 - 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2012/08/blogging_with_jekyll.html)

[配置 GitHub Pages 站点的发布源 - GitHub 文档](https://docs.github.com/zh/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

虽然可使用自定义 GitHub Actions 工作流进行发布站点，但是限于GitHub Pages网速，这里建议配合Cloudflare Pages使用，Git提交推送后，Cloudflare Pages自动静态页部署。

See detail [配合cloudflare-pages使用-git提交自动静态页部署](/docs/#配合cloudflare-pages使用-git提交自动静态页部署)

## 查看我的站点

[Cloudflare Pages master branch build  https://blog.prodev.cn/](https://blog.prodev.cn/)

[Cloudflare Pages master branch build https://icmsite.pages.dev/](https://icmsite.pages.dev/)

直接使用Git推送到Github，使用Cloudflare Workers and Pages线上编译打包运算能力。

[GitHub Pages gh-pages branch static file https://dev.prodev.cn/](https://dev.prodev.cn/)

在本地使用自定义命令 `npm run deploy` 本地编译打包运算能力。然后再推送到gh-pages分支。

## 使用Docusaurus创建的站点

1. [部署在Github Pages上的 https://doc-github.prodev.cn/ ](https://doc-github.prodev.cn/)

直接使用Git推送到Github，使用Github Pages线上编译打包运算能力。

或者在本地使用自定义命令 `npm run shell` 本地编译打包运算能力。然后再推送到gh-pages分支。

2. [部署在Cloudflare Workers and Pages上的 https://doc-cloudflare.prodev.cn/ ](https://doc-cloudflare.prodev.cn/)

也是直接使用Git推送到Github，使用Cloudflare Workers and Pages线上编译打包运算能力。

### 使用Docusaurus创建的站点参考

1. [Hello from go-things | go-things](https://go-things.github.io/)
2. [K3s - 轻量级 Kubernetes | K3s](https://docs.k3s.io/zh/)
3. [Casbin · An authorization library that supports access control models like ACL, RBAC, ABAC](https://casbin.org/zh/)
4. [Casdoor · An Open Source UI-first Identity Access Management](https://casdoor.org/zh/)
5. [SRS (Simple Realtime Server) | SRS](https://ossrs.net/lts/zh-cn/)
6. [JuiceFS Document Center](https://juicefs.com/docs/zh/)
7. [Build smaller, faster, and more secure desktop applications with a web frontend | Tauri Apps](https://tauri.app/zh-cn/)
8. [欢迎使用 ent | ent](https://entgo.io/zh/blog/2019/10/03/introducing-ent/)

### 使用VuePress创建的站点

[主页 | Simple Admin](https://doc.ryansu.pro/zh/)

[主题介绍 | vuepress-theme-hope](https://theme-hope.vuejs.press/zh/guide/get-started/intro.html)


### 参考文献

1. [Installation | Docusaurus](https://docusaurus.io/zh-CN/docs/installation)

2. [Troubleshooting custom domains and GitHub Pages - GitHub Docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages)

3. [Branch build controls · Cloudflare Pages docs](https://developers.cloudflare.com/pages/platform/branch-build-controls/#preview-branch-control)

其他参考文献

[博客迁移记 · 从 Cloudflare Workers 到 Cloudflare Pages | TripleZ's Blog](https://blog.triplez.cn/posts/cf-workers-to-pages/)

[物联网技术指南](https://iot.mushuwei.cn/#/)

## 站点更新

1. Publish GitHub Pages

```bash
npm run deploy
```

在本地编译打包，并使用脚本自动推送到GitHub Pages下gh-pages分支。

2. Publish Cloudflare Pages

直接Git push 推送即可。

直接使用Git推送到Github，使用Cloudflare Workers and Pages线上编译打包运算能力，自动编译并更新到站点。
