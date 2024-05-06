---
title: 5.整合spring
category:
- 代码片段
- 使用
tag:
- 中间件
- 消息
- 微服务
- java
- spring
---
## pom添加依赖
```xml

<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-amqp</artifactId>
</dependency>
```
## 生产者
### 配置
```java
/**
 * 描述：     rabbitmq配置类
 */
@Configuration // 标识为配置类
public class TopicRabbitConfig {

    /**
     * 创建并配置一个名为 "queue1" 的队列。
     *
     * @return Queue 返回一个RabbitMQ队列对象。
     */
    @Bean
    public Queue queue1() {
        return new Queue("queue1");
    }

    /**
     * 创建并配置一个名为 "queue2" 的队列。
     *
     * @return Queue 返回一个RabbitMQ队列对象。
     */
    @Bean
    public Queue queue2() {
        return new Queue("queue2");
    }

    /**
     * 创建并配置一个名为 "bootExchange" 的主题交换器。
     *
     * @return TopicExchange 返回一个RabbitMQ主题交换器对象。
     */
    @Bean
    TopicExchange exchange() {
        return new TopicExchange("bootExchange");
    }

    /**
     * 将队列 "queue1" 绑定到 "bootExchange" 交换器上，绑定键为 "dog.red"。
     *
     * @param queue1 队列对象。
     * @param exchange 交换器对象。
     * @return Binding 返回一个绑定对象。
     */
    @Bean
    Binding bingdingExchangeMessage1(Queue queue1, TopicExchange exchange) {
        return BindingBuilder.bind(queue1).to(exchange).with("dog.red");
    }

    /**
     * 将队列 "queue2" 绑定到 "bootExchange" 交换器上，绑定键为 "dog.#"。
     * 这样的绑定可以匹配以 "dog" 开头的所有路由键。
     *
     * @param queue2 队列对象。
     * @param exchange 交换器对象。
     * @return Binding 返回一个绑定对象。
     */
    @Bean
    Binding bingdingExchangeMessage2(Queue queue2, TopicExchange exchange) {
        return BindingBuilder.bind(queue2).to(exchange).with("dog.#");
    }
}

```
### 发送信息
```java
/**
 * 描述：     发送消息
 */
@Component
public class MsgSender {

    @Autowired
    private AmqpTemplate rabbitmqTemplate;

    /**
     * 此方法用于发送一条消息到RabbitMQ，消息内容与路由键相关联。
     * @param message 消息内容，描述为"This is message 1, routing key is dog.red"
     * @see #rabbitmqTemplate RabbitMQTemplate实例，用于实际的消息发送操作
     */
    public void send1() {
        String message = "This is message 1, routing key is dog.red";
        System.out.println("发送了："+message);
        // 使用RabbitMQTemplate，通过指定的交换机"bootExchange"和路由键"dog.red"发送消息
        this.rabbitmqTemplate.convertAndSend("bootExchange", "dog.red", message);
    }

    public void send2() {
        String message = "This is message 2, routing key is dog.black";
        System.out.println("发送了："+message);
        this.rabbitmqTemplate.convertAndSend("bootExchange", "dog.black", message);
    }
}

```

## 消费者

```java
/**
 * 描述：     消费者1
 */
@Component
@RabbitListener(queues = "queue1")
public class Receiver1 {

    @RabbitHandler
    public void process(String message) {
        System.out.println("Receiver1: " + message);
    }
}
```
```java
/**
 * 描述：     消费者2
 */
@Component
@RabbitListener(queues = "queue2")
public class Receiver2 {

    @RabbitHandler
    public void process(String message) {
        System.out.println("Receiver2: " + message);
    }
}
```