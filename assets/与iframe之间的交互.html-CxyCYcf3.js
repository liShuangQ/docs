import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,b as e}from"./app-D9Hg6iGQ.js";const i="/docs/assets/img-DHDCHuiN.png",t="/docs/assets/img_1-9HAD3Zvr.png",l="/docs/assets/img_2-BPnPFjQb.png",p="/docs/assets/img_3-CGOciEoW.png",c="/docs/assets/img_4-Dtuu6YUB.png",o="/docs/assets/img_5-DQX89bqt.png",d="/docs/assets/img_6-CDe3gK4d.png",r={},u=e('<p>使用背景，前端采用html单页面引用vue的方式</p><p><img src="'+i+'" alt="img.png" loading="lazy"> 页面大致是这样，现在需要做的是在iframe页面里面触发事件跳转页面，并且使父级vue页面的左侧菜单选中相应页面的菜单，当然iframe子页面也是vue，但是其他页面也不影响</p><h2 id="一、子页面向父页面传值" tabindex="-1"><a class="header-anchor" href="#一、子页面向父页面传值"><span>一、子页面向父页面传值</span></a></h2><p>1、在iframe页面里触发事件，找到他的父级页面的dom元素，用postMessage传值，里面所有的都是参数，cmd是为了能在父级vue页面区分该操作的用途</p><figure><img src="'+t+'" alt="img_1.png" tabindex="0" loading="lazy"><figcaption>img_1.png</figcaption></figure><p>2、在父级vue页面的周期函数mounted中监听iframe中发来的消息，传来的参数就在event.data里面。（loadHtmlFrag() 则是在父级vue页面methods中的方法）</p><figure><img src="'+l+'" alt="img_2.png" tabindex="0" loading="lazy"><figcaption>img_2.png</figcaption></figure><h2 id="二、父页面向子页面传值" tabindex="-1"><a class="header-anchor" href="#二、父页面向子页面传值"><span>二、父页面向子页面传值</span></a></h2><p>会了子页面向父业面传值，那父页面向子页面传值也就会了，就是吧一二步骤调换未知</p><p>1、在父页面中触发事件传递参数，在父页面通过ref来得到iframe子页面的dom元素，然手使用postMessage传参。</p><figure><img src="'+p+'" alt="img_3.png" tabindex="0" loading="lazy"><figcaption>img_3.png</figcaption></figure><p><code>通过ref获取dom，父页面的iframe标签里写ref就行</code></p><p><img src="'+c+'" alt="img_4.png" loading="lazy"> 2、和上面一样，在子页面的周期函数mounted中监听父页面发来的消息</p><p><img src="'+o+'" alt="img_5.png" loading="lazy"><img src="'+d+`" alt="img_6.png" loading="lazy"></p><h2 id="补充" tabindex="-1"><a class="header-anchor" href="#补充"><span>补充</span></a></h2><p>为了确保ifame可以在加载完成后触发父给子的函数, 应在子内在给父发送,在父接受参数中触发</p><h3 id="父" tabindex="-1"><a class="header-anchor" href="#父"><span>父</span></a></h3><h4 id="接收" tabindex="-1"><a class="header-anchor" href="#接收"><span>接收</span></a></h4><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code>mounted() {
    window.addEventListener(
        &quot;message&quot;,
        (e) =&gt; {
        if (e.data.type == &quot;over&quot;) {
        
        }},
        false
    );
},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="发送" tabindex="-1"><a class="header-anchor" href="#发送"><span>发送</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>Ifame<span class="token punctuation">.</span>contentWindow<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span>
<span class="token punctuation">{</span>
<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;Search&quot;</span><span class="token punctuation">,</span>
<span class="token literal-property property">con</span><span class="token operator">:</span> <span class="token punctuation">{</span>

            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token string">&quot;*&quot;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="子" tabindex="-1"><a class="header-anchor" href="#子"><span>子</span></a></h3><h4 id="发送-1" tabindex="-1"><a class="header-anchor" href="#发送-1"><span>发送</span></a></h4><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code>mounted() {
    window.top.postMessage(
        {
        type: &quot;over&quot;,
        },
    &quot;*&quot;
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="接收-1" tabindex="-1"><a class="header-anchor" href="#接收-1"><span>接收</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>
<span class="token string">&quot;message&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>data<span class="token punctuation">.</span>type <span class="token operator">==</span> <span class="token string">&quot;Search&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token boolean">false</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26),m=[u];function v(g,h){return a(),s("div",null,m)}const k=n(r,[["render",v],["__file","与iframe之间的交互.html.vue"]]),_=JSON.parse('{"path":"/front-end/vue/vue2/%E4%BB%A3%E7%A0%81%E7%89%87%E6%AE%B5/%E4%B8%8Eiframe%E4%B9%8B%E9%97%B4%E7%9A%84%E4%BA%A4%E4%BA%92.html","title":"与iframe之间的交互","lang":"zh-CN","frontmatter":{"title":"与iframe之间的交互","category":["片段"],"tag":["vue","vue2","iframe"]},"headers":[{"level":2,"title":"一、子页面向父页面传值","slug":"一、子页面向父页面传值","link":"#一、子页面向父页面传值","children":[]},{"level":2,"title":"二、父页面向子页面传值","slug":"二、父页面向子页面传值","link":"#二、父页面向子页面传值","children":[]},{"level":2,"title":"补充","slug":"补充","link":"#补充","children":[{"level":3,"title":"父","slug":"父","link":"#父","children":[]},{"level":3,"title":"子","slug":"子","link":"#子","children":[]}]}],"git":{"createdTime":1713580660000,"updatedTime":1713584896000,"contributors":[{"name":"liShuangQ-pc","email":"li_shuangq@foxmail.com","commits":2}]},"readingTime":{"minutes":1.45,"words":436},"filePathRelative":"front-end/vue/vue2/代码片段/与iframe之间的交互.md","localizedDate":"2024年4月20日"}');export{k as comp,_ as data};
