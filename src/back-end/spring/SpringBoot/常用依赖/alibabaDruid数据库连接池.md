---
title: alibaba Druid数据库连接池
category:
  - 代码片段 片段
tag:
  - 框架 数据库 连接池
---

## 使用：

添加 pom 依赖我们这里选用 druid 提供的 springboot starter

```xml
<dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>druid-spring-boot-starter</artifactId>
            <version>1.1.18</version>
        </dependency>
```

## 数据源配置

```yml
spring:
  # 数据源配置
  datasource:
    username: root
    password: 123456
    url: jdbc:mysql://localhost:3306/mytest?useSSL=false&charsetEncoding=utf8
    driver-class-name: com.mysql.jdbc.Driver
    # 连接池配置
    druid:
      max-active: 10 # 最大活跃数量 默认8
      min-idle: 2 # 最小空闲数 默认0
      initial-size: 5 # 初始连接数
      max-wait: 2000 # 获取连接最大等待时间 默认 -1
      validation-query: select 1
      validation-query-timeout: 5000
      time-between-eviction-runs-millis: 2000 # 间隔多久进行检测需要关闭的空闲连接
      min-evictable-idle-time-millis: 600000 # 配置连接在池中最小生存的时间
      max-wait-thread-count: 20 # 最大等待线程数
```

加入了 Druid 的依赖后 就会自动选择使用 druidDatasource 作为数据源的操作，即可直接使用。
