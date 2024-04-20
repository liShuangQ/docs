import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o as a,c as l,a as t,d as e,e as s,b as p}from"./app-QiWSpeo1.js";const i="/docs/assets/img-Bzhxtl7m.png",c="/docs/assets/img_1-CKqeXoFS.png",d={},g=p('<p>JS常用DOM,BOM</p><h2 id="dom" tabindex="-1"><a class="header-anchor" href="#dom"><span>DOM</span></a></h2><p>ES5 通过选择器获取————document.querySelector(&#39; &#39;) / document.querySelectorAll(&#39; &#39;)</p><p>括号内可以用选择器样式,除了hover类似的伪类都可以 例如 document.querySelector(&#39; ul&gt;li&#39;)</p><p>元素样式———— .classList.add(&#39; &#39;) .classList.remove(&#39; &#39;) || .className = &#39; &#39; || .style</p><p>标签内添加内容———— .innerHTML = &#39; &lt;&gt; &lt;&gt;&#39;</p><p>节点操作————</p><p>获取<strong>节点</strong>子级 父级————  <strong>.children</strong>  <strong>.parentNode</strong></p><p>document.createElement(&quot;XXX&quot;)——<strong>创建元素节点</strong></p><p>document.createTextNode(&#39;XXX&#39;) ——创建文本节点  <strong>可用.innerHTML直接添加</strong></p><p>.insertBefore(新内容, 位置[第几个])——<strong>插入节点</strong>  （后） 第几个开始添加节点 [第几个]  <strong>.appendChild</strong>（下） .lastElementchild .firstElementchild</p><p>.removeChild(位置[第几个]])——<strong>删除子元素</strong></p><p>.remove()——<strong>删除自己</strong></p><p>replaceChild(元素, 位置[第几个])——<strong>修改元素</strong></p><p>cloneNode( )——<strong>克隆</strong>（浅拷贝 只是复制标签不复制内容） 括号内（true）为<strong>深度克隆</strong></p><p>获取元素style样式————</p><p>let eleWidth = getComputedStyle(ele)[&#39;width&#39;] // getComputedStyle(要获取的元素)[&#39;要获取的属性&#39;]</p><p>let eleHeight = getComputedStyle(ele)[&#39;height&#39;]</p><p>操作自定义属性</p><p>获取 .getAttribute(&#39;属性&#39;)</p><p>添加 .setgetAttribute(&#39;属性名,值&#39;)</p><p>删除 .removegetAttribute(&#39;属性名&#39;)</p><p>获取宽高</p><p>盒子模型大小</p><p>var w = XXX.offsetWidth</p><p>var h = XXX.offsetHeight</p><p>元素可视区大小</p><p>var w = XXX.clientWidth</p><p>var h = XXX.clientHeight</p><p>获取超出内容大小</p><p>var w = XXX.scrollWidth</p><p>var h = XXX.scrollHeight</p><p>元素位置</p><p>定位父级距离</p><p>console.log(XXX.offsetLeft)</p><p>console.log(XXX.offsetTop)</p><p>浏览器距离</p><p>console.log(XXX.getBoundingClientRect().left)</p><p>console.log(XXX.getBoundingClientRect().top)</p><p>鼠标距离  <strong>（事件对象演示）</strong></p><p>oDiv.onclick = function (ev) { //**ev是形参 表示事件时 ， ev代表事件对象 其中包含很多方法具体可log一下查看要使用的属性进行获取**</p><p>鼠标到浏览器的距离</p><p>console.log(ev.pageX, ev.pageY)</p><p>鼠标到元素的距离</p><p>console.log(ev.offsetX, ev.offsetY)</p><p>鼠标到可视区距离</p><p>console.log(ev.clientX, ev.clientY)</p><p>}</p><p>阻止浏览器<strong>默认行为</strong>————ev.preventDefault() //ev是形参 表示事件时</p><p>键盘码————.keyCode 特殊按键 shiftKey altKey ctrlKey</p><p>事件源————ev.srcElement 返回事件的源头 例如点击事件返回你点击的东西</p><p>事件委托  ————ev.target.tagName</p><p>.target 目标 .tagName 目标名字</p><p>被创建的元素加事件必须要使用事件委托</p><p>用于判断时候 ev.target.tagName === &#39;LI&#39; // &#39;大写&#39;</p><p>事件冒泡 ————标签嵌套，事件相同，就会产生事件冒泡</p><p>ev.cancelBubble = true 阻止事件冒泡</p><p>事件绑定（方法监听）———— .addEventListener （新）.attachEvent(&#39;事件&#39;, function () { alert( )} ) 可以有第三个参数  //true捕获 false冒泡</p><p>同一个按钮的事件 传统方式后面会把前面的覆盖导致只出现一个样式。一个按钮实现多个方式用事件绑定</p><p>var oBtn = document.querySelector(&#39;.btn&#39;)</p><p>oBtn.onclick = function () {</p><p>alert(&#39;1&#39;)</p><p>}</p><p>oBtn.addEventListener(&#39;click&#39;, function () {</p><p>alert(2)</p><p>} ， //true捕获 false冒泡)</p><p>oBtn.addEventListener(&#39;click&#39;, function () {</p><p>alert(3)</p><p>})</p><p>解除绑定———— .removeEventListener(事件, 函数名, boolean) （新）.detachEvent(type, fn)</p><p>oBtn.addEventListener(&#39;click&#39;, fn)</p><p>function fn() {</p><p>alert(1)</p><p>}</p><p>oBtn.removeEventListener(&#39;click&#39;,fn)</p><h2 id="bom" tabindex="-1"><a class="header-anchor" href="#bom"><span>BOM</span></a></h2><p>一般 window 可以省略</p><p>location.href————获取<strong>地址栏</strong>信息</p>',78),m={href:"http://www.jd.com/",target:"_blank",rel:"noopener noreferrer"},h=p('<p>.onscroll————页面<strong>滚动</strong>事件</p><p>document.documentElement.scrollTop || document.body.scrollTop 滚动距离</p><p>window.innerWidth / window.innerHeight————<strong>获取页面大小（包含滚动条）</strong></p><p>document.documentElement.clientWidth / document.documentElement.clientHeight———— 不包含滚动条</p><p>定时器</p><p>setInterval(fn, ms)一直执行—————clearInterval（清除）</p><p>setTimeout(fn, ms) 执行一次——————clearTimeout</p><p>fn为函数</p><h2 id="其它" tabindex="-1"><a class="header-anchor" href="#其它"><span>其它</span></a></h2><p>严格模式 ———— &#39;use strict&#39;</p><p>字符串操作</p><p>indexOf - lastIndexOf————<strong>查找</strong>：返回下标，查找不到返回-1</p><p>.slice(2, 4)————开始位置<strong>切</strong>到结束（2到4）</p><p>.replace(&#39;l&#39;, &#39;*&#39;)————<strong>替换</strong>  （i 变 *）</p><p>.split(&#39;e&#39;)————<strong>字符串转数组</strong>（e为分割条件）</p><p>.join(&#39;&amp;&#39;)————<strong>数组转字符串</strong>（&amp;为条件 可空）</p><h2 id="js补充" tabindex="-1"><a class="header-anchor" href="#js补充"><span>js补充</span></a></h2><p>明知道后期不会重新赋值的的量，尽量使用const设置</p><p>只能设置常量，必须有初始值没有会报错，</p><p>完成一行后尽量写分号；</p><p>下面的例子都是以字符串 a 表示</p>',21),u=t("p",null,[e("字符串拼接的第二种方式 console.log(``my name is{name} and i"),t("strong",{age:""},"nameandi")],-1),f=p('<p>其中${ }内写变量 可以代替 +</p><p>属性没有括号 方法才有（方法是一个函数对象） !!!</p><p>.forEach（funcation（a , b））循环中 a ， b都是形参。可以不是ele，index---</p><p>对象与JSON很像，可以进行转换，JSON内没有单引号，有就报错，JSON为往服务器内发送的数据，对象不是。</p><p>转换方式：</p><p>const zljson = JSON.stringify(zl);</p><p>console.log(zljson); //zl为对象名称 const声明新的常量</p><p>新的函数声明方式</p><p>新变量名 = （形参1 ， 形参2 ---） =&gt; {条件}；{}可以省略</p><p>var a = (n , m) =&gt; n + m;  这样写n+m就是返回值，写上return会报错</p><p>var a = (n , m) =&gt;{  这样加{}写需要写return，否则undefinedreturn n + m</p><p>};</p><p>引用时console.log(a(1 , 1));</p><p>---------------------------------------------------------------分割线-----------------------------------------------------------------</p><h2 id="用的少" tabindex="-1"><a class="header-anchor" href="#用的少"><span>用的少</span></a></h2><p>some————有一个满足条件就返回true</p><p>every————全满足条件才返回true</p><p>var res = arr.some(function (ele, index, arr) {</p><p>return ele &gt; 100</p><p>})</p><p><strong>BOM</strong></p><p>浏览器和系统信息</p><p>navigator.userAgent</p><p>var agent = navigator.userAgent</p><p>if (agent.indexOf(&#39;Android&#39;) !== -1) {</p><p>alert(&#39;Android&#39;)</p><p>} else {</p><p>alert(&#39;IOS&#39;)</p><p>}</p><p>console.log(agent)</p><p>版本————var appVersion = navigator.appVersion</p><p>window.prompt————输入框</p><p>window.confirm(&#39;是否删除？&#39;) ———— 问询框</p><p>history————浏览器历史</p><p><img src="'+i+'" alt="img.png" loading="lazy"><img src="'+c+'" alt="img_1.png" loading="lazy"></p>',35);function v(y,O){const n=r("ExternalLinkIcon");return a(),l("div",null,[g,t("p",null,[e("location.href = '"),t("a",m,[e("http://www.jd.com"),s(n)]),e("'（这样添加网页不会被拦截）")]),h,u,f])}const S=o(d,[["render",v],["__file","JS常用DOM_BOM.html.vue"]]),M=JSON.parse(`{"path":"/front-end/ecmaScript/apis/JS%E5%B8%B8%E7%94%A8DOM_BOM.html","title":"常用DOM,BOM","lang":"zh-CN","frontmatter":{"title":"常用DOM,BOM","category":["api"],"tag":["dom","bom"],"description":"JS常用DOM,BOM DOM ES5 通过选择器获取————document.querySelector(' ') / document.querySelectorAll(' ') 括号内可以用选择器样式,除了hover类似的伪类都可以 例如 document.querySelector(' ul>li') 元素样式———— .classList.a...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/docs/front-end/ecmaScript/apis/JS%E5%B8%B8%E7%94%A8DOM_BOM.html"}],["meta",{"property":"og:title","content":"常用DOM,BOM"}],["meta",{"property":"og:description","content":"JS常用DOM,BOM DOM ES5 通过选择器获取————document.querySelector(' ') / document.querySelectorAll(' ') 括号内可以用选择器样式,除了hover类似的伪类都可以 例如 document.querySelector(' ul>li') 元素样式———— .classList.a..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-20T13:54:40.000Z"}],["meta",{"property":"article:author","content":"Mr.Shuangqi"}],["meta",{"property":"article:tag","content":"dom"}],["meta",{"property":"article:tag","content":"bom"}],["meta",{"property":"article:modified_time","content":"2024-04-20T13:54:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"常用DOM,BOM\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-20T13:54:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Shuangqi\\",\\"url\\":\\"\\"}]}"]]},"headers":[{"level":2,"title":"DOM","slug":"dom","link":"#dom","children":[]},{"level":2,"title":"BOM","slug":"bom","link":"#bom","children":[]},{"level":2,"title":"其它","slug":"其它","link":"#其它","children":[]},{"level":2,"title":"js补充","slug":"js补充","link":"#js补充","children":[]},{"level":2,"title":"用的少","slug":"用的少","link":"#用的少","children":[]}],"git":{"createdTime":1713621280000,"updatedTime":1713621280000,"contributors":[{"name":"liShuangQ-pc","email":"li_shuangq@foxmail.com","commits":1}]},"readingTime":{"minutes":3.91,"words":1174},"filePathRelative":"front-end/ecmaScript/apis/JS常用DOM,BOM.md","localizedDate":"2024年4月20日","autoDesc":true}`);export{S as comp,M as data};
