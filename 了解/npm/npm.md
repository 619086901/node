- 查看软件包在 npm 仓库上最新的可用版本

```
npm view 包 version
```

- 安装并在 package.json 中列出的软件包

```
npm list --depth=0
npm list -g --depth 0
```

- 查看指定软件包的版本

```
npm list cowsay
```

- 发觉软件包的新版本，则运行 npm outdated

- 如果写入的是 ^1.13.0，则当运行 npm update 时，可以更新到 1.13.1、1.14.0 等，但不能更新到 2.0.0 或更高版本。
