---
title: 2.rabbitmq的安装
category:
  - 介绍
tag:
  - 中间件
  - 消息
  - 微服务
---

## mac

`使用brew安装`
brew update
brew install rabbitmq

### 配置环境变量

`在你的shell配置文件中添加如下代码，我的是os12系统，默认为zsh`

终端根目录输入 `vi .zshrc` 编辑添加

注意：你的版本不一定是3.13.1，通过输入`brew list rabbitmq`获取到对应的文件夹地址

```shell
 export RABBIT_HOME=/opt/homebrew/Cellar/rabbitmq/3.13.1
 export PATH=$PATH:$RABBIT_HOME/sbin
```

### 启用插件

`启用rabbitmq management插件`

```shell
sudo rabbitmq-plugins enable rabbitmq_management
```

### 启动和停止

- `brew services list` 查看 brew 管理的服务状态等
- `brew services start rabbitmq` 启动
- `brew services stop rabbitmq` 停止

### 访问可视化监控插件的界面

浏览器内输入 http://localhost:15672, 默认的用户名密码都是 guest

### 一些命令

- `rabbitmqctl stop` 停止
- `rabbitmq-plugins list` 插件列表
- `rabbitmq-plugins enable management` 启用插件
- `rabbitmq-plugins disable xxx` 卸载插件

### 启动时可能的问题

通过日志查看 `/opt/homebrew/var/log/rabbitmq/` 辨别问题

#### eacces

###### 问题

```log
error:{badmatch,{error,{{shutdown,{failed_to_start_child,auth,{"Error when reading /Users/xxxx/.erlang.cookie: eacces"
```

如果出现如上报错，这通常是由于权限问题（eacces 表示“权限被拒绝”）。

###### 解决方式

- 检查 Erlang cookie 文件的权限： 确保您的用户帐户有权访问和读取这个文件。您可以使用以下命令来检查和修改文件权限：

```shell
ls -l /Users/xxx/.erlang.cookie
chmod 600 /Users/xxx/.erlang.cookie

```

- 检查文件所有者： 确保 Erlang cookie 文件属于启动 RabbitMQ 的用户。如果不是，您可以使用 chown 命令来更改文件所有者：

```shell
chown xxx /Users/xxx/.erlang.cookie

```

- 确保 RabbitMQ 服务使用正确的用户运行。
- 重启 RabbitMQ 服务： 在修改了权限之后，尝试重新启动 RabbitMQ 服务
