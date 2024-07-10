import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,b as e}from"./app-CBR03jKm.js";const t={},p=e(`<p><strong>1 webpack 打包工具 打包 html 打包js 打包css 打包图片</strong></p><p><strong>2 @vue/cli create-react-app 通过webpack构建的项目</strong></p><ul><li>打包工具 -- 把所有模块文件 打包成一个或者多个文件</li><li>最终引入一个文件或者几个文件 降低了 http请求</li><li>模块化开发 ， 提高复用变得更好维护</li><li>按照commonjs规范使用就可以 自动引入加载</li></ul><p><strong>webpack安装</strong></p><ul><li>npm i webpack webpack-cli -g 同时安装这两个 （需要注意版本 ）</li><li>webpack</li><li>webpack-cli</li><li>webpack-dev-server</li></ul><p><strong>webpack 配置文件</strong></p><ul><li>webpack.config.js 打包后的文件 --- 【本地访问无效】</li></ul><p><strong>4 入口文件 （要打包的文件）</strong></p><ul><li>默认入口文件 项目目录 src/index.js</li><li>entry:&quot;文件路径&quot;</li></ul><p><strong>5 出口文件 （出口文件打包之后生成的文件） 【项目使用的是出口文件】</strong></p><p>默认出口文件 dist/index.js</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token literal-property property">output</span><span class="token operator">:</span><span class="token punctuation">{</span>

<span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&quot;绝对路劲&quot;</span><span class="token punctuation">,</span>

<span class="token literal-property property">filename</span><span class="token operator">:</span><span class="token string">&quot;文件名&quot;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>6 多入口多出口</strong></p><ul><li>特大型项目会用这种</li><li>单页面应用 spa (一个页面，剩下都是路由)</li><li>优点 减少资源请求</li><li>缺点 项目不是特别好分项目</li><li>多页面应用 打包出多个文件 （多入口和多出口）</li><li>请求的时候 需要跳转页面才行</li><li>优点 多页面应用 更适合多人开发 （页面 )</li><li>缺点 多次请求资源 （资源浪费）</li><li>单页应用 (vue，react) 和 传统开发 jquery;</li><li>如果考虑 seo 搜索引擎优化 用 jquery这种h5开发最好 <ul><li>传统开发 页面很多 ，内容嵌入再html5里面的</li></ul></li></ul><p><strong>7 多入口多出口</strong></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token literal-property property">entry</span><span class="token operator">:</span><span class="token punctuation">{</span>

    <span class="token literal-property property">index</span><span class="token operator">:</span><span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>

        <span class="token literal-property property">main</span>
<span class="token operator">:</span>
    <span class="token string">&quot;./src/main.js&quot;</span><span class="token punctuation">,</span>

        <span class="token literal-property property">center</span>
<span class="token operator">:</span>
    <span class="token string">&quot;./src/center.js&quot;</span>

<span class="token punctuation">}</span>
<span class="token punctuation">,</span>

<span class="token literal-property property">output</span><span class="token operator">:</span><span class="token punctuation">{</span>

    <span class="token literal-property property">path</span><span class="token operator">:</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>\\__dirname<span class="token punctuation">,</span> <span class="token string">&quot;dist&quot;</span>
<span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token literal-property property">filename</span><span class="token operator">:</span><span class="token string">&quot;\\[name\\]\\[hash\\].js&quot;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>不加 center.js (dns缓存有的) --- center.js -- 把之前的清空（webpack 提供方法清空的）</li></ul><p><strong>8 loader</strong></p><ul><li>想让 css 能解析 <ul><li>style-loader</li><li>css-loader</li></ul></li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token literal-property property">module</span><span class="token operator">:</span><span class="token punctuation">{</span>

    <span class="token literal-property property">rules</span><span class="token operator">:</span>
        <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),l=[p];function i(o,r){return s(),a("div",null,l)}const d=n(t,[["render",i],["__file","基本配置.html.vue"]]),v=JSON.parse('{"path":"/front-end/packingTool/webpack/%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE.html","title":"webpack基本配置","lang":"zh-CN","frontmatter":{"title":"webpack基本配置","category":["介绍"],"tag":["小程序","微信"]},"headers":[],"git":{"createdTime":1713621280000,"updatedTime":1713621280000,"contributors":[{"name":"liShuangQ-pc","email":"li_shuangq@foxmail.com","commits":1}]},"readingTime":{"minutes":1.57,"words":472},"filePathRelative":"front-end/packingTool/webpack/基本配置.md","localizedDate":"2024年4月20日"}');export{d as comp,v as data};
