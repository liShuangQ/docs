---
title: 3.java中的简单接收
category:
  - 介绍
  - 代码片段
  - 使用
tag:
  - 中间件
  - 消息
  - 微服务
  - java
---

### 发送

```java
/**
 * 描述：     Hello World 的发送类，连接到RabbitMQ服务端，然后发送一条消息，然后退出。
 */
public class Send {

    private final static String QUEUE_NAME = "hello";

    public static void main(String[] args) throws IOException, TimeoutException {
        //创建连接工厂
        ConnectionFactory factory = new ConnectionFactory();
        //设置RabbitMQ地址
        factory.setHost("127.0.0.1");
        factory.setUsername("admin");
        factory.setPassword("password");
        //建立连接
        Connection connection = factory.newConnection();
        //获得信道
        Channel channel = connection.createChannel();
        /**
         * 声明一个队列。
         *
         * @param queue 队列名称。如果为空，服务器将自动生成一个唯一名称。
         * @param durable 是否持久化。如果为true，队列将在服务器重启后仍然存在。
         * @param exclusive 是否排他。如果为true，队列仅能被当前连接访问，
         *                  并且在连接关闭时会被删除。
         * @param autoDelete 是否自动删除。如果为true，当队列不再使用（没有消费者和没有消息）时，队列将被删除。
         * @param arguments 队列声明的其他可选参数。这些参数取决于服务器的配置，
         *                  例如消息的TTL（生存时间）、死信队列设置等。
         * @return 服务器返回的Queue.DeclareOk响应，其中包含队列的名称（当队列名称为空时尤为有用）。
         * @throws IOException 如果在声明队列时发生错误。
         */
        channel.queueDeclare(QUEUE_NAME, false, false, false, null);
        //发布消息
        String message = "Hello World 2!";
        /**
         * 发布消息到指定的交换机。
         *
         * @param exchange 交换机名称。不能为空，除非使用的是默认交换机。
         * @param routingKey 路由键。用于决定消息应该被投递到哪个队列，或者被哪些队列绑定接收。
         * @param props 消息的属性。可以设置消息的持久性、优先级、过期时间等。
         *              如果需要消息持久化，需要将DeliveryMode设置为2。
         * @param body 消息体。实际要发送的数据，通常是字节数组形式。
         * @throws IOException 如果在发送消息过程中发生错误。
         * @throws TimeoutException 如果消息发送超时。
         */
        channel.basicPublish("", QUEUE_NAME, null, message.getBytes("UTF-8"));
        System.out.println("发送了消息：" + message);
        //关闭连接
        channel.close();
        connection.close();
    }
}
```

### 接收

```java

/**
 * 描述：     接收消息，并打印，持续运行
 */
public class Recv {
    private final static String QUEUE_NAME = "hello";

    public static void main(String[] args) throws IOException, TimeoutException {
        //创建连接工厂
        ConnectionFactory factory = new ConnectionFactory();
        //设置RabbitMQ地址
        factory.setHost("127.0.0.1");
        factory.setUsername("admin");
        factory.setPassword("password");
        //建立连接
        Connection connection = factory.newConnection();
        //获得信道
        Channel channel = connection.createChannel();
        //声明队列
        channel.queueDeclare(QUEUE_NAME, false, false, false, null);
        /**
         * 接收消息并消费
         * 启动一个消费者，并返回服务端生成的消费者标识
         * queue:队列名
         * autoAck：true 接收到传递过来的消息后acknowledged（应答服务器），false 接收到消息后不应答服务器
         * deliverCallback： 当一个消息发送过来后的回调接口
         * cancelCallback：当一个消费者取消订阅时的回调接口;取消消费者订阅队列时除了使用{@link Channel#basicCancel}之外的所有方式都会调用该回调方法
         * @return 服务端生成的消费者标识
         */
        channel.basicConsume(QUEUE_NAME, true, new DefaultConsumer(channel) {
            @Override
            public void handleDelivery(String consumerTag, Envelope envelope,
                                       BasicProperties properties, byte[] body) throws IOException {
                String message = new String(body, "UTF-8");
                System.out.println("收到消息：" + message);
            }
        });
    }
}

```