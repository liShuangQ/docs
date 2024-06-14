import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,b as e}from"./app-CTW_-Fuf.js";const t={},p=e(`<h2 id="pom添加依赖" tabindex="-1"><a class="header-anchor" href="#pom添加依赖"><span>pom添加依赖</span></a></h2><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-amqp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="生产者" tabindex="-1"><a class="header-anchor" href="#生产者"><span>生产者</span></a></h2><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 描述：     rabbitmq配置类
 */</span>
<span class="token annotation punctuation">@Configuration</span> <span class="token comment">// 标识为配置类</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TopicRabbitConfig</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 创建并配置一个名为 &quot;queue1&quot; 的队列。
     *
     * <span class="token keyword">@return</span> Queue 返回一个RabbitMQ队列对象。
     */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">Queue</span> <span class="token function">queue1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Queue</span><span class="token punctuation">(</span><span class="token string">&quot;queue1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 创建并配置一个名为 &quot;queue2&quot; 的队列。
     *
     * <span class="token keyword">@return</span> Queue 返回一个RabbitMQ队列对象。
     */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">Queue</span> <span class="token function">queue2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Queue</span><span class="token punctuation">(</span><span class="token string">&quot;queue2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 创建并配置一个名为 &quot;bootExchange&quot; 的主题交换器。
     *
     * <span class="token keyword">@return</span> TopicExchange 返回一个RabbitMQ主题交换器对象。
     */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token class-name">TopicExchange</span> <span class="token function">exchange</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">TopicExchange</span><span class="token punctuation">(</span><span class="token string">&quot;bootExchange&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 将队列 &quot;queue1&quot; 绑定到 &quot;bootExchange&quot; 交换器上，绑定键为 &quot;dog.red&quot;。
     *
     * <span class="token keyword">@param</span> <span class="token parameter">queue1</span> 队列对象。
     * <span class="token keyword">@param</span> <span class="token parameter">exchange</span> 交换器对象。
     * <span class="token keyword">@return</span> Binding 返回一个绑定对象。
     */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token class-name">Binding</span> <span class="token function">bingdingExchangeMessage1</span><span class="token punctuation">(</span><span class="token class-name">Queue</span> queue1<span class="token punctuation">,</span> <span class="token class-name">TopicExchange</span> exchange<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">BindingBuilder</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>queue1<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">to</span><span class="token punctuation">(</span>exchange<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">with</span><span class="token punctuation">(</span><span class="token string">&quot;dog.red&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 将队列 &quot;queue2&quot; 绑定到 &quot;bootExchange&quot; 交换器上，绑定键为 &quot;dog.#&quot;。
     * 这样的绑定可以匹配以 &quot;dog&quot; 开头的所有路由键。
     *
     * <span class="token keyword">@param</span> <span class="token parameter">queue2</span> 队列对象。
     * <span class="token keyword">@param</span> <span class="token parameter">exchange</span> 交换器对象。
     * <span class="token keyword">@return</span> Binding 返回一个绑定对象。
     */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token class-name">Binding</span> <span class="token function">bingdingExchangeMessage2</span><span class="token punctuation">(</span><span class="token class-name">Queue</span> queue2<span class="token punctuation">,</span> <span class="token class-name">TopicExchange</span> exchange<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">BindingBuilder</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>queue2<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">to</span><span class="token punctuation">(</span>exchange<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">with</span><span class="token punctuation">(</span><span class="token string">&quot;dog.#&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="发送信息" tabindex="-1"><a class="header-anchor" href="#发送信息"><span>发送信息</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 描述：     发送消息
 */</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MsgSender</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">AmqpTemplate</span> rabbitmqTemplate<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 此方法用于发送一条消息到RabbitMQ，消息内容与路由键相关联。
     * <span class="token keyword">@param</span> <span class="token parameter">message</span> 消息内容，描述为&quot;This is message 1, routing key is dog.red&quot;
     * <span class="token keyword">@see</span> <span class="token reference"><span class="token punctuation">#</span><span class="token field">rabbitmqTemplate</span></span> RabbitMQTemplate实例，用于实际的消息发送操作
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">send1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> message <span class="token operator">=</span> <span class="token string">&quot;This is message 1, routing key is dog.red&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;发送了：&quot;</span><span class="token operator">+</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 使用RabbitMQTemplate，通过指定的交换机&quot;bootExchange&quot;和路由键&quot;dog.red&quot;发送消息</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>rabbitmqTemplate<span class="token punctuation">.</span><span class="token function">convertAndSend</span><span class="token punctuation">(</span><span class="token string">&quot;bootExchange&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;dog.red&quot;</span><span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">send2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> message <span class="token operator">=</span> <span class="token string">&quot;This is message 2, routing key is dog.black&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;发送了：&quot;</span><span class="token operator">+</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>rabbitmqTemplate<span class="token punctuation">.</span><span class="token function">convertAndSend</span><span class="token punctuation">(</span><span class="token string">&quot;bootExchange&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;dog.black&quot;</span><span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="消费者" tabindex="-1"><a class="header-anchor" href="#消费者"><span>消费者</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 描述：     消费者1
 */</span>
<span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>queues <span class="token operator">=</span> <span class="token string">&quot;queue1&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Receiver1</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@RabbitHandler</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Receiver1: &quot;</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 描述：     消费者2
 */</span>
<span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>queues <span class="token operator">=</span> <span class="token string">&quot;queue2&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Receiver2</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@RabbitHandler</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Receiver2: &quot;</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),i=[p];function o(c,l){return s(),a("div",null,i)}const r=n(t,[["render",o],["__file","整合spring.html.vue"]]),k=JSON.parse('{"path":"/back-end/spring/SpringCloud/%E5%B8%B8%E7%94%A8%E4%B8%AD%E9%97%B4%E4%BB%B6/RabbitMq/%E6%95%B4%E5%90%88spring.html","title":"5.整合spring","lang":"zh-CN","frontmatter":{"title":"5.整合spring","category":["代码片段","使用"],"tag":["中间件","消息","微服务","java","spring"]},"headers":[{"level":2,"title":"pom添加依赖","slug":"pom添加依赖","link":"#pom添加依赖","children":[]},{"level":2,"title":"生产者","slug":"生产者","link":"#生产者","children":[{"level":3,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":3,"title":"发送信息","slug":"发送信息","link":"#发送信息","children":[]}]},{"level":2,"title":"消费者","slug":"消费者","link":"#消费者","children":[]}],"git":{"createdTime":1714977642000,"updatedTime":1714977642000,"contributors":[{"name":"shuangqi.li","email":"li_shuangq@foxmail.com","commits":1}]},"readingTime":{"minutes":1.67,"words":502},"filePathRelative":"back-end/spring/SpringCloud/常用中间件/RabbitMq/整合spring.md","localizedDate":"2024年5月6日"}');export{r as comp,k as data};
