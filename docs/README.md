# VuePress Vue 驱动的静态网站生成器小试

## 安装

全局安装

```bash
npm install -g vuepress --registry=https://registry.npm.taobao.org
```

本地安装或者叫局部安装

```bash
npm install -D vuepress --registry=https://registry.npm.taobao.org
```

::: details 提示:npm -D 是什么选项? >>点击查看
npm installdependencies默认将所有指定的软件包保存到其中。此外，您可以使用一些其他标志来控制在何处以及如何保存它们：

-P, --save-prod：包裹将出现在您的中dependencies。这是默认设置，除非-D或-O存在。

-D, --save-dev：包裹将出现在您的中devDependencies。

-O, --save-optional：包裹将出现在您的中optionalDependencies。

--no-save：防止保存到dependencies。

参考:[NPM CLI文档 CLI命令之Install](https://docs.npmjs.com/cli-commands/install.html)
:::

这么多报错,什么原因?

```bash
npm WARN deprecated chokidar@2.1.8: Chokidar 2 will break on node v14+. Upgrade to chokidar 3 with 15x less dependencies.
npm WARN deprecated fsevents@1.2.12: fsevents 1 will break on node v14+. Upgrade to fsevents 2 with massive improvements.
npm WARN deprecated mkdirp@0.3.0: Legacy versions of mkdirp are no longer supported. Please update to mkdirp 1.x. (Note that the API surface has changed to use Promises in 1.x.)

npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.12: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ vuepress@1.4.1
added 1163 packages from 545 contributors in 68.677s

41 packages are looking for funding
  run `npm fund` for details
```

## 使用

开始写作

```bash
npx vuepress dev docs
```

::: details 提示:npx 是什么命令? >>点击查看
npm 从5.2版开始，增加了 npx 命令。它有很多用处:

1. 调用项目安装的模块
2. 避免全局安装模块

参考:[npx 使用教程](https://www.ruanyifeng.com/blog/2019/02/npx.html)
:::

如果在 package.json 里加一些脚本:

{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}

然后就可以这样开始写作了:

```bash
yarn docs:dev # 或者：npm run docs:dev
```

要生成静态的 HTML 文件，运行：

```bash
yarn docs:build # 或者：npm run docs:build
```

默认情况下，文件将会被生成在 .vuepress/dist.

写文档可以参考这样写:

`https://github.com/vuejs/vuepress/edit/master/packages/docs/docs/zh/guide/getting-started.md`

## 持续集成工具 Netlify 怎么用?

参考:

[https://zhuanlan.zhihu.com/p/31416527](https://zhuanlan.zhihu.com/p/31416527)

## 如何将网站部署到一个子路径下

如果你想让你的网站部署到一个子路径下，你将需要设置它。如 GitHub pages，如果你想将你的网站部署到 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/"，它的值应当总是以斜杠开始，并以斜杠结束。

base 将会作为前缀自动地插入到所有以 / 开始的其他选项的链接中，所以你只需要指定一次。

需要先执行打包命令:

```bash
npx vuepress build .
```

然后在生成的 .vuepress 目录下新建一个配置文件:"D:\Hostv\Mustxt\.vuepress\config.js"

```js
module.exports = {
    title: '静态站点生成器',
    description: 'Just playing around',
    base: '/dist/'
}
```

这样,再次执行打包时,静态资源的路径会加上子目录.

参考:[vuepress 基本配置 base](https://vuepress.vuejs.org/zh/config/#基本配置)

## 导航栏和侧边栏不显示

在使用测试时，发现`npx vuepress dev docs`导航栏和侧边栏不显示，而`npx vuepress dev .`就显示导航栏和侧边栏。

找了很久原因，结果就是因为不同的命令，执行所用的配置文件不同，如果`npx vuepress dev docs`就需要在docs目录下，也添加一个`.vuepress/config.js`配置文件即可。

在执行 npx vuepress dev docs 命令时，VuePress 会将 docs 目录作为根目录来构建站点，而导航栏的链接和配置是相对于根目录的。因此，您需要确保在 docs 目录下正确设置和引用导航栏的链接和配置。

`npx vuepress dev docs` 和 `npx vuepress dev .` 是用于启动 VuePress 开发服务器的两个命令，它们之间的区别在于工作目录的不同。

`npx vuepress dev docs`：在执行该命令时，VuePress 将以 docs 目录作为根目录来构建站点。这意味着 VuePress 将解析和渲染 docs 目录下的 Markdown 文件，并根据**docs目录下的**配置文件 `docs/.vuepress/config.js` 中的配置来生成站点。这样做的好处是，您可以将文档相关的文件和配置放在单独的目录中，使其更加清晰和模块化。

`npx vuepress dev .`：在执行该命令时，VuePress 将以当前工作目录作为根目录来构建站点。这意味着 VuePress 将解析和渲染当前目录下的 Markdown 文件，并根据**根目录下的**配置文件 `.vuepress/config.js` 中的配置来生成站点。这种方式适用于项目根目录本身就是文档站点的情况，或者您的文档文件与其他项目文件在同一目录下。

综上所述，选择使用哪个命令取决于您的项目结构和个人偏好。如果您的文档文件位于单独的 docs 目录下，并且您希望以该目录作为根目录来构建站点，则使用 `npx vuepress dev docs`。如果您的文档文件与其他项目文件在同一目录下，则使用 `npx vuepress dev .`。

### 参考

- vuepress dev docs 导航栏 不显示  vuepress dev就显示
- Vuepress 1.x 导航栏 不显示
- Vuepress 1.x 导航栏 和侧边栏 不显示

只找到两篇类似的问题，其他找不到了。

[vuepress的侧边栏css样式一直显示none，我也没把sidebar关闭 - SegmentFault 思否](https://segmentfault.com/q/1010000037596560)

[vuepress-theme-reco@1.x 解决博客首页 与 仓库README不兼容问题_vuepress 禁用readme_Duktig丶的博客-CSDN博客](https://blog.csdn.net/qq_42937522/article/details/123301839)

[基本配置 | VuePress 1.X](https://vuepress.vuejs.org/zh/config/#description)

[基本配置 | VuePress](https://v1.vuepress.vuejs.org/zh/guide/basic-config.html#配置文件)

[默认主题配置 | VuePress](https://v1.vuepress.vuejs.org/zh/theme/default-theme-config.html#%E9%A6%96%E9%A1%B5)

建议单独引入导航栏和侧边栏配置，

将导航栏和侧边栏的配置分离出去，避免全部写在config.js显得很杂乱。

[(Ő∀Ő3)ノ哇喔！欢迎！我的博客之路与vuepress指南 | 小弋の生活馆](https://lovelijunyi.gitee.io/posts/169.html)

[VuePress 自动生成导航栏和侧边栏，不用插件 - 掘金](https://juejin.cn/post/6847902224538927117)

[VuePress搭建博客教程(四)、vuepress导航栏设置_vuepress 导航_勤奋的凯尔森同学的博客-CSDN博客](https://blog.csdn.net/JingLisen/article/details/119838113)

### 其他参考

[VuePress 侧边栏使用详解_OSurer的博客-CSDN博客](https://blog.csdn.net/wq_ocean_/article/details/109220650)

[侧边栏 | vuepress-theme-hope](https://vuepress-theme-hope.github.io/v1/zh/guide/layout/sidebar.html#)

[我的博客之路与vuepress指南 | 小弋の生活馆](https://lovelijunyi.gitee.io/posts/169.html)

[侧边栏 | vuepress-theme-reco](http://v1.vuepress-reco.recoluan.com/views/1.x/sidebar.html)

[系列 | vuepress-reco](https://vuepress-theme-reco.recoluan.com/docs/theme/series.html)


[当 VuePress 遇上 “语雀” - 知乎](https://zhuanlan.zhihu.com/p/56376695)

[DKGEE](http://dkgee.gitee.io/)

[VuePress 快速踩坑 - 知乎](https://zhuanlan.zhihu.com/p/36116211)

## 配合Cloudflare Pages使用，Git提交自动静态页部署

### Cloudflare Page的优点

1. 自动CI/CD部署

参考了工作中日常使用的 CI/CD 流程，在 GitHub 上注册一个 webhook，监听 GitHub 仓库的变更，随即触发 CI 任务构建与 CD 部署。

阅读了下 Cloudflare Pages 的文档，由于其属于纯静态页部署，可以直接使用 CDN 分发，因此其在免费套餐中不限制访问带宽，也不限制请求次数。这简直就是博客 Hosting 的完美服务啊，于是笔者的博客切换到 Cloudflare Pages 就这样提上了日程。

2. 国内可高速直连访问

可以直接使用github中上传的网页，且不需要在github中进行任何设置

·不像github page只根据用户名分配一个三级域名，Cloudflare Page可创建多个三级域名（形如*.pages.dev)

3. 后话

一般最先想的当然是利用github page，奈何直连访问速度太慢；

试图用cloudflare加速，但cf不提供免费的CNAME解析；

若是用gitee page，需要手持身份证的照片实名，被劝退……

正在发愁，突然听说可以用Cloudflare Page实现对github page的高速访问

### 参考

[几分钟、零基础搭建个人网页！- 高速直连，基于Cloudflare Page - 知乎](https://zhuanlan.zhihu.com/p/416269228)

[博客迁移记 · 从 Cloudflare Workers 到 Cloudflare Pages | TripleZ's Blog](https://blog.triplez.cn/posts/cf-workers-to-pages/)

[Deploy a Vuepress site · Cloudflare Pages docs](https://developers.cloudflare.com/pages/framework-guides/deploy-a-vuepress-site/)

### 其他参考

[CloudFlare自动部署GitHub仓库的VuePress文档_github可以在cloudflare上部署吗_m0_60595450的博客-CSDN博客](https://blog.csdn.net/m0_60595450/article/details/128104290)

[GitHub pages+自定义域名(腾讯云域名)+cloudflare加速 - Le先生 - 博客园](https://www.cnblogs.com/yuelblog/p/15829774.html)

[教程[6] 使用 cloudflare pages 来搭建静态网站 - huggy's blog](https://blog.huggy.moe/posts/2021/2-cloudflare-pages/)

[Cloudflare 免费动态托管对比Workers vs Pages - 知乎](https://zhuanlan.zhihu.com/p/453095371)