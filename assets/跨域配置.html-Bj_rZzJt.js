import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,b as e}from"./app-Dk2qiwrY.js";const t={},i=e(`<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 跨域配置
 */</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CorsConfig</span> <span class="token keyword">implements</span> <span class="token class-name">WebMvcConfigurer</span> <span class="token punctuation">{</span>

   <span class="token doc-comment comment">/**
    * 跨域注册器
    *
    * <span class="token keyword">@param</span> <span class="token parameter">registry</span> 跨域注册器
    */</span>
   <span class="token annotation punctuation">@Override</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addCorsMappings</span><span class="token punctuation">(</span><span class="token class-name">CorsRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       
      <span class="token comment">// 设置允许跨域的路径</span>
      registry<span class="token punctuation">.</span><span class="token function">addMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/**&quot;</span><span class="token punctuation">)</span>
            <span class="token comment">// 设置允许跨域请求的域名</span>
            <span class="token punctuation">.</span><span class="token function">allowedOrigins</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span>
            <span class="token comment">// 是否允许证书 不再默认开启</span>
            <span class="token punctuation">.</span><span class="token function">allowCredentials</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
            <span class="token comment">// 设置允许的方法</span>
            <span class="token punctuation">.</span><span class="token function">allowedMethods</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span>
            <span class="token comment">// 设置允许的头</span>
            <span class="token punctuation">.</span><span class="token function">allowedHeaders</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span>
            <span class="token comment">// 跨域允许时间</span>
            <span class="token punctuation">.</span><span class="token function">maxAge</span><span class="token punctuation">(</span><span class="token number">3600</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[i];function c(p,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","跨域配置.html.vue"]]),m=JSON.parse('{"path":"/back-end/spring/SpringBoot/%E5%B8%B8%E7%94%A8%E9%85%8D%E7%BD%AE/%E8%B7%A8%E5%9F%9F%E9%85%8D%E7%BD%AE.html","title":"Spring Boot跨域配置","lang":"zh-CN","frontmatter":{"title":"Spring Boot跨域配置","category":["代码片段","片段"],"tag":["spring","框架","跨域","cors"]},"headers":[],"git":{"createdTime":1713857586000,"updatedTime":1714038327000,"contributors":[{"name":"shuangqi.li","email":"li_shuangq@foxmail.com","commits":2}]},"readingTime":{"minutes":0.4,"words":120},"filePathRelative":"back-end/spring/SpringBoot/常用配置/跨域配置.md","localizedDate":"2024年4月23日"}');export{r as comp,m as data};
