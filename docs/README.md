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
