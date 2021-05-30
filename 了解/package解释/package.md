```js
version         表明了当前的版本。
name            设置了应用程序/软件包的名称。
description     是应用程序/软件包的简短描述。
main            设置了应用程序的入口点。
private         如果设置为 true，则可以防止应用程序/软件包被意外地发布到npm
scripts         定义了一组可以运行的 node 脚本。
dependencies    设置了作为依赖安装的 npm 软件包的列表。
devDependencies 设置了作为开发依赖安装的 npm 软件包的列表。
engines         设置了此软件包/应用程序在哪个版本的 Node.js 上运行。
browserslist    用于告知要支持哪些浏览器（及其版本）。
```

```json
{
  //列出软件包的作者名称。
  "author": {
    "name": "NodeJS 中文网",
    "email": "mail@nodejs.cn",
    "url": "http://nodejs.cn"
  }
}
```

```json
{
  //用于告知要支持哪些浏览器（及其版本）
  "browserslist": ["> 1%", "last 2 versions", "not ie <= 8"]
}
```

- 无需将 node_modules 文件夹（该文件夹通常很大）提交到 Git
- package-lock.json 文件需要被提交到 Git 仓库，以便被其他人获取
- package-lock.json 会固化当前安装的每个软件包的版本，当运行 npm install 时，npm 会使用这些确切的版本。
