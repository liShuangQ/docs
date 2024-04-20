import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,b as t}from"./app-QiWSpeo1.js";const p={},e=t(`<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 引入文件系统模块</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 根据操作系统平台确定路径分隔符</span>
<span class="token keyword">let</span> symbol <span class="token operator">=</span> process<span class="token punctuation">.</span>platform <span class="token operator">===</span> <span class="token string">&#39;win32&#39;</span> <span class="token operator">?</span> <span class="token string">&#39;\\\\&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;/&#39;</span>

<span class="token comment">// 从命令行参数中获取id和type</span>
<span class="token keyword">let</span> id <span class="token operator">=</span> process<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;--&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> type <span class="token operator">=</span> process<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;--&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 定义需要修改的配置数据</span>
<span class="token keyword">let</span> configEditData <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;PROVINCE&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">    PROVINCE: &quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;,</span><span class="token template-punctuation string">\`</span></span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token comment">// 计算基础路径</span>
<span class="token keyword">let</span> basePath <span class="token operator">=</span>
    __dirname
        <span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span>symbol<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> __dirname<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span>symbol<span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>symbol<span class="token punctuation">)</span> <span class="token operator">+</span> symbol

<span class="token comment">// 打印基础路径</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>basePath<span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 复制router文件到pages.json，实现路由配置的覆盖
 */</span>
<span class="token keyword">function</span> <span class="token function">routerRun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;当前地市为：&#39;</span> <span class="token operator">+</span> id<span class="token punctuation">)</span>
    fs<span class="token punctuation">.</span><span class="token function">copyFile</span><span class="token punctuation">(</span>basePath <span class="token operator">+</span> <span class="token string">&#39;router&#39;</span> <span class="token operator">+</span> symbol <span class="token operator">+</span> id <span class="token operator">+</span> <span class="token string">&#39;.json&#39;</span><span class="token punctuation">,</span> basePath <span class="token operator">+</span> <span class="token string">&#39;pages.json&#39;</span><span class="token punctuation">,</span> <span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">pages文件修改覆盖成功!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 读取并修改config.js文件，插入或更新配置项
 */</span>
<span class="token keyword">function</span> <span class="token function">configRun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span>basePath <span class="token operator">+</span> <span class="token string">&#39;utils&#39;</span> <span class="token operator">+</span> symbol <span class="token operator">+</span> <span class="token string">&#39;config.js&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;utf8&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> c <span class="token operator">=</span> data<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;\\r\\n&#39;</span><span class="token punctuation">)</span>
        <span class="token comment">// 遍历配置数据，更新config.js文件中相应的配置项</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> configEditData<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            c<span class="token punctuation">[</span>c<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token parameter">e</span> <span class="token operator">=&gt;</span> e<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>configEditData<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> configEditData<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 写入修改后的配置文件</span>
        fs<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span>basePath <span class="token operator">+</span> <span class="token string">&#39;utils&#39;</span> <span class="token operator">+</span> symbol <span class="token operator">+</span> <span class="token string">&#39;config.js&#39;</span><span class="token punctuation">,</span> c<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;\\r\\n&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;utf8&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
                <span class="token keyword">return</span>
            <span class="token punctuation">}</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;config文件已成功修改并保存！&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 监听router文件改动，并在改动时重新运行routerRun
 */</span>
<span class="token keyword">function</span> <span class="token function">watchRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">&#39;watch&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;当前路由文件修改正在监听中！&#39;</span><span class="token punctuation">)</span>
        fs<span class="token punctuation">.</span><span class="token function">watch</span><span class="token punctuation">(</span>basePath <span class="token operator">+</span> <span class="token string">&#39;router&#39;</span> <span class="token operator">+</span> symbol <span class="token operator">+</span> id <span class="token operator">+</span> <span class="token string">&#39;.json&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">recursive</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">eventType<span class="token punctuation">,</span> filename</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>filename<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">routerRun</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 初始化运行routerRun和configRun</span>
<span class="token function">routerRun</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">configRun</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 在非Windows平台上启动路由文件监听</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>platform <span class="token operator">!==</span> <span class="token string">&#39;win32&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">watchRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","文件修改.html.vue"]]),d=JSON.parse('{"path":"/front-end/runTime/node/%E4%BB%A3%E7%A0%81%E7%89%87%E6%AE%B5/%E6%96%87%E4%BB%B6%E4%BF%AE%E6%94%B9.html","title":"文件修改","lang":"zh-CN","frontmatter":{"title":"文件修改","category":["代码片段"],"tag":["node","文件","fs"],"head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/docs/front-end/runTime/node/%E4%BB%A3%E7%A0%81%E7%89%87%E6%AE%B5/%E6%96%87%E4%BB%B6%E4%BF%AE%E6%94%B9.html"}],["meta",{"property":"og:title","content":"文件修改"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-20T13:54:40.000Z"}],["meta",{"property":"article:author","content":"Mr.Shuangqi"}],["meta",{"property":"article:tag","content":"node"}],["meta",{"property":"article:tag","content":"文件"}],["meta",{"property":"article:tag","content":"fs"}],["meta",{"property":"article:modified_time","content":"2024-04-20T13:54:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"文件修改\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-20T13:54:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Shuangqi\\",\\"url\\":\\"\\"}]}"]]},"headers":[],"git":{"createdTime":1713621280000,"updatedTime":1713621280000,"contributors":[{"name":"liShuangQ-pc","email":"li_shuangq@foxmail.com","commits":1}]},"readingTime":{"minutes":1.24,"words":371},"filePathRelative":"front-end/runTime/node/代码片段/文件修改.md","localizedDate":"2024年4月20日"}');export{k as comp,d as data};
