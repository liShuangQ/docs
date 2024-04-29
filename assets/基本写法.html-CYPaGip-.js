import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as i,a as s,t as l,b as a}from"./app-Bk5lH8EZ.js";const t={},d=a(`<h1 id="微信小程序" tabindex="-1"><a class="header-anchor" href="#微信小程序"><span>微信小程序</span></a></h1><h2 id="注册账号" tabindex="-1"><a class="header-anchor" href="#注册账号"><span>注册账号</span></a></h2><ul><li>注册微信小程序账号</li><li>拿到 appId</li><li>如果上线的话 要配置 访问的合法域名</li><li>备案过的 域名 不能使用 公网ip</li><li>https协议</li><li>上线 版本管理都在控制台里面</li></ul><h2 id="小程序的配置" tabindex="-1"><a class="header-anchor" href="#小程序的配置"><span>小程序的配置</span></a></h2><ul><li>app.json 全局配置文件</li><li>app.js 全局js文件</li><li>app.wxss 全局样式文件</li></ul><h2 id="app-json之pages" tabindex="-1"><a class="header-anchor" href="#app-json之pages"><span>app.json之pages</span></a></h2><p>pages:[] 添加一段路径 会自动在pages里面生成页面</p><ul><li>默认显示的页面为pages里面第一个路径页面</li><li>&quot;entryPagePath&quot;: &quot;pages/index/index&quot;, （设置入口文件）</li></ul><h2 id="app-json-之-tabbar" tabindex="-1"><a class="header-anchor" href="#app-json-之-tabbar"><span>app.json 之 tabBar</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>tabBar list必须 2-5
 &quot;tabBar&quot;: {
    &quot;color&quot;: &quot;#ff0000&quot;,
    &quot;selectedColor&quot;: &quot;#0000ff&quot;,
    &quot;position&quot;: &quot;bottom&quot;,
    &quot;list&quot;: [{
      &quot;pagePath&quot;: &quot;pages/index/index&quot;,
      &quot;text&quot;: &quot;首页&quot;
    },
    {
      &quot;pagePath&quot;: &quot;pages/center/index&quot;,
      &quot;text&quot;: &quot;中心&quot;
    },
    {
      &quot;pagePath&quot;: &quot;pages/about/index&quot;,
      &quot;text&quot;: &quot;关于&quot;
    },{
      &quot;pagePath&quot;: &quot;pages/logs/logs&quot;,
      &quot;text&quot;: &quot;日志&quot;
    }]
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="app-json之window" tabindex="-1"><a class="header-anchor" href="#app-json之window"><span>app.json之window</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&quot;backgroundTextStyle&quot;:&quot;light&quot;,
&quot;navigationBarBackgroundColor&quot;: &quot;#ff0000&quot;,
&quot;navigationBarTitleText&quot;: &quot;首页&quot;,
&quot;backgroundColor&quot;:&quot;#e1e1e1&quot;,
&quot;navigationBarTextStyle&quot;:&quot;black&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="app-json-之-networktimeout" tabindex="-1"><a class="header-anchor" href="#app-json-之-networktimeout"><span>app.json 之 networkTimeout</span></a></h2><ul><li>连接超时 超过多久不发</li></ul><h2 id="app-json-之-分包-subpackages" tabindex="-1"><a class="header-anchor" href="#app-json-之-分包-subpackages"><span>app.json 之 分包 subpackages</span></a></h2><p>小程序上线的限制</p><ul><li>一个包最大上传2M</li><li>最多上传20M</li><li>图片使用网络路径图片 （）</li></ul><h2 id="渲染数据" tabindex="-1"><a class="header-anchor" href="#渲染数据"><span>渲染数据</span></a></h2>`,18),u=a(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;view disabled=&quot;&quot; &gt;&lt;/view&gt;   属性的话  如果是动态的就加 {{}}   不需要：disabled
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="遍历" tabindex="-1"><a class="header-anchor" href="#遍历"><span>遍历</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;view wx:for=&quot;{{list}}&quot; wx:key=&quot;index&quot; wx:for-item=&#39;a&#39; wx:for-index=&quot;idx&quot;&gt;
  {{a}} --- {{idx}}
&lt;/view&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="移动端使用点击事件会有什么问题" tabindex="-1"><a class="header-anchor" href="#移动端使用点击事件会有什么问题"><span>移动端使用点击事件会有什么问题</span></a></h2><ul><li>移动 使用 click 会有300ms左右的延迟</li><li>可能会早上点击穿透</li><li>把click换成移动端事件 （touchstart,touchend） fast.js</li></ul><h2 id="小程序事件怎么传参" tabindex="-1"><a class="header-anchor" href="#小程序事件怎么传参"><span>小程序事件怎么传参</span></a></h2><ul><li>语法不支持changeShow() ，跟h5不一样</li></ul><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span>   <span class="token attr-name">bindtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>changeShow<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">data-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{item.isShow}}<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">data-</span> <span class="token punctuation">&gt;</span></span>
    {{item.name}} -- {{item.isShow}}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>通过data-[自定义属性]</li><li>事件对象 e.currentTarget.dataset[自定义属性]</li></ul><h2 id="修改data数据" tabindex="-1"><a class="header-anchor" href="#修改data数据"><span>修改data数据</span></a></h2><ul><li>this.setData() 跟react类组件一样</li></ul><h2 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期"><span>生命周期</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>tabBar 切换到时候组件不销毁
onLoad(){
    //请求数据
}
onReady(){
    //初始化  获取到页面元素
}        只执行一次   /pages/about/index?id=1  ?id=2
// 随时切换的  实时的数据 需要再onshow里面请求
onShow(){
    // 
}
onHide(){}
// 卸载的时候触发  
onUnload(){}
// 
/**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
     // 下拉执行
     console.log(&quot;about -- 下拉执行&quot;)
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log(&quot;about -- 触底执行&quot;)
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
     console.log(&quot;分享执行&quot;)
  }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="跳转路由怎么传参-navigator" tabindex="-1"><a class="header-anchor" href="#跳转路由怎么传参-navigator"><span>跳转路由怎么传参 navigator</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;navigator url=&quot;&quot; target=&quot;&quot; open-type=&quot;&quot;&gt;&lt;/navigator&gt;
1 传参 
    url=&quot;/pages/detail/index?id=123&quot;
    url=&quot;pages/detial/index?query=12341&amp;zzz=111&quot;
    获取  去接收参数的页面的  onLoad生命周期  有一个参数 options这个对象就是接收的参数
    onLoad:function(options){}
    
    1 2  3 4  5 6 7 。。。 40
2 open-type
    值    说明    最低版本
    navigate    默认值  它跳转的是有后退记录
    对应 wx.navigateTo 或 wx.navigateToMiniProgram (跳转到其它小程序) 的功能    
    redirect    当相遇 vue replace 没有后退记录 替换栈
    对应 wx.redirectTo 的功能    
    switchTab    如果要跳转到tabBar页面需要 添加改属性 并且&quot;tabBar不能传参&quot;
    对应 wx.switchTab 的功能    
    reLaunch  删除缓存页面跳转
    对应 wx.reLaunch 的功能    1.1.0
    navigateBack  后退 前进 和 刷新  跟这个属性 一起使用  delta
    对应 wx.navigateBack 的功能    1.1.0
    exit    退出小程序，target=&quot;miniProgram&quot;时生效    
    
3 target 
    self 自己小程序跳转
    miniProgram 
     app-id 
     path
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="web-view" tabindex="-1"><a class="header-anchor" href="#web-view"><span>web-view</span></a></h2><ul><li><p>web-view 可以引入外部资源 引入h5页面的这个一个组件</p></li><li><p>三端之间怎么交互？</p><ul><li>前端 + ajax axios 通信后端</li><li>后端</li><li>原生 App</li></ul></li><li><p>开发模式</p><ul><li>pc 纯前端开发前端页面 （pc端和后台管理系统） （H5+客户端）</li><li>移动端 h5移动端页面 少 <ul><li>h5 + 原生开发 （内容由h5做） java (生成app 或者调用 硬件)</li><li>h5开发内容 + 原生套壳</li><li>keep</li><li>taobao</li><li>ele</li></ul></li><li>纯原生开发 原生开发 （安卓和ios）</li></ul></li><li><p>怎么跟原生开发交互</p><ul><li>原生来调用h5的方法 来给我们传参</li><li>h5需要声明 全局函数</li></ul></li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>window<span class="token punctuation">[</span><span class="token string">&#39;taskPhoto&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token comment">// data 回显</span>
      <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>原生里面可以获取到</li><li>调用h5的全局函数 进行传参 实参就是传递数据</li><li>扫码 --- res --&gt;</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">taskPhone</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="canvas" tabindex="-1"><a class="header-anchor" href="#canvas"><span>canvas</span></a></h2><ul><li>canvas h5 新增能力</li><li>做图标 --- echarts height-charts (图标插件)</li><li>你画我猜 画板的应用</li><li>特效 （性能比较好）</li></ul><h2 id="富文本渲染" tabindex="-1"><a class="header-anchor" href="#富文本渲染"><span>富文本渲染</span></a></h2><ul><li>使用它来渲染富文本 能识别 html标签</li></ul><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rich-text</span> <span class="token attr-name">nodes</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{str1}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rich-text</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>如果想要修改富文本的样式 我们可以 进行全局替换添加class</li></ul>`,26);function o(c,r){return e(),i("div",null,[d,s("p",null,l()+" 与vue一样",1),u])}const m=n(t,[["render",o],["__file","基本写法.html.vue"]]),b=JSON.parse('{"path":"/front-end/miniProgram/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E5%B9%B3%E5%8F%B0/%E5%BE%AE%E4%BF%A1/%E5%9F%BA%E6%9C%AC%E5%86%99%E6%B3%95.html","title":"基本写法","lang":"zh-CN","frontmatter":{"title":"基本写法","category":["介绍"],"tag":["小程序","微信"]},"headers":[{"level":2,"title":"注册账号","slug":"注册账号","link":"#注册账号","children":[]},{"level":2,"title":"小程序的配置","slug":"小程序的配置","link":"#小程序的配置","children":[]},{"level":2,"title":"app.json之pages","slug":"app-json之pages","link":"#app-json之pages","children":[]},{"level":2,"title":"app.json 之 tabBar","slug":"app-json-之-tabbar","link":"#app-json-之-tabbar","children":[]},{"level":2,"title":"app.json之window","slug":"app-json之window","link":"#app-json之window","children":[]},{"level":2,"title":"app.json 之 networkTimeout","slug":"app-json-之-networktimeout","link":"#app-json-之-networktimeout","children":[]},{"level":2,"title":"app.json 之 分包 subpackages","slug":"app-json-之-分包-subpackages","link":"#app-json-之-分包-subpackages","children":[]},{"level":2,"title":"渲染数据","slug":"渲染数据","link":"#渲染数据","children":[]},{"level":2,"title":"遍历","slug":"遍历","link":"#遍历","children":[]},{"level":2,"title":"移动端使用点击事件会有什么问题","slug":"移动端使用点击事件会有什么问题","link":"#移动端使用点击事件会有什么问题","children":[]},{"level":2,"title":"小程序事件怎么传参","slug":"小程序事件怎么传参","link":"#小程序事件怎么传参","children":[]},{"level":2,"title":"修改data数据","slug":"修改data数据","link":"#修改data数据","children":[]},{"level":2,"title":"生命周期","slug":"生命周期","link":"#生命周期","children":[]},{"level":2,"title":"跳转路由怎么传参  navigator","slug":"跳转路由怎么传参-navigator","link":"#跳转路由怎么传参-navigator","children":[]},{"level":2,"title":"web-view","slug":"web-view","link":"#web-view","children":[]},{"level":2,"title":"canvas","slug":"canvas","link":"#canvas","children":[]},{"level":2,"title":"富文本渲染","slug":"富文本渲染","link":"#富文本渲染","children":[]}],"git":{"createdTime":1713584896000,"updatedTime":1713854185000,"contributors":[{"name":"shuangqi.li","email":"li_shuangq@foxmail.com","commits":1}]},"readingTime":{"minutes":3.59,"words":1078},"filePathRelative":"front-end/miniProgram/小程序平台/微信/基本写法.md","localizedDate":"2024年4月20日"}');export{m as comp,b as data};
