---
title: mac的nvm安装
category:
  - 安装 
  - 配置
tag:
  - mac 
  - node 
  - nvm
---

本文环境 macOS Monterey@12.7.4 ，m1 芯片

## 使用 brew 安装

`没安装brew请移步配置寻找`

- brew install nvm

## 换 nvm 的下载源

`安装后在对应shell配置中添加，新版本苹果使用的zsh`
在终端中根目录执行命令： `vi .zshrc`（注：如果 zshrc 不存在执行 `touch ~/.zshrc` ）后在编辑添加下方内容

```shell
export NVM_NODEJS_ORG_MIRROR=http://npm.taobao.org/mirrors/node
export NVM_IOJS_ORG_MIRROR=http://npm.taobao.org/mirrors/iojs
```

然后就可以愉快的使用 nvm 了

## 检查

执行 `nvm -v` 检查版本，如果有版本即可无视本章节。

如果命令无法执行，使用`brew list nvm`检查是否安装成功，如果没有文件夹信息，则检查 brew 重新安装。

在终端根目录执行`cd ~/.nvm`检查是否存在.nvm 文件夹，如果没有文件夹则执行`mkdir ~/.nvm`创建文件夹。

如果上述两个条件都满足，将以下内容添加到~/.zshrc 其它 shell 配置文件

```shell
export NVM_DIR="$HOME/.nvm"
  [ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"
  [ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"
```

再次执行 `nvm -v` 检查版本，即可正常显示版本。

## nvm 常用命令

nvm ls ：列出所有已安装的 node 版本

nvm ls-remote ：列出所有远程服务器的版本（官方 node version list）

nvm list ：列出所有已安装的 node 版本

nvm list available ：显示所有可下载的版本

nvm install stable ：安装最新版 node

nvm install [node 版本号] ：安装指定版本 node

nvm uninstall [node 版本号] ：删除已安装的指定版本

nvm use [node 版本号] ：切换到指定版本 node

nvm current ：当前 node 版本

nvm alias [别名] [node 版本号] ：给不同的版本号添加别名

nvm unalias [别名] ：删除已定义的别名

nvm alias default [node 版本号] ：设置默认版本

## 如果你要用14（包括）之下版本

`注: intel芯片不需要此步骤`

因为 m 系列芯片为 arm 架构，但是 node 在 15 之上才支持 arm 架构。所以 14 之下版本要使用 x86 兼容模式

在使用 nvm 下载的时候，要在终端提前执行
`arch -x86_64 zsh ` （不好用的话可以在访达->终端（右键）->显示简介->使用 Rosetta 打开（勾选）-> common + q 快捷键退出终端（如果你已经开启）,就是 x86 模式了）后下载 14 版本

如果你不确定是不是 x86 模式，终端执行`node -p process.arch`检查

### 完整步骤

- 终端执行`arch -x86_64 zsh`
- `nvm install 14.xx.xx`
- `node -p process.arch` 检查输出为 x86 即可
