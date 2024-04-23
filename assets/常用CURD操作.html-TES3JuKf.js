import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,b as t}from"./app-DbMoMdSU.js";const p={},e=t(`<p>大致使用以下三个方法:1.execute方法，用于直接执行SQL语句2.update方法，用户新增修改删除操作3.query方法，用于查询方法</p><h2 id="代码演示" tabindex="-1"><a class="header-anchor" href="#代码演示"><span>代码演示</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;CREATE TABLE \`user\` (\\n&quot;</span> <span class="token operator">+</span>
<span class="token string">&quot;  \`id\` int(11) NOT NULL AUTO_INCREMENT,\\n&quot;</span> <span class="token operator">+</span>
<span class="token string">&quot;  \`user_name\` varchar(255) DEFAULT NULL,\\n&quot;</span> <span class="token operator">+</span>
<span class="token string">&quot;  \`pass_word\` varchar(255) DEFAULT NULL,\\n&quot;</span> <span class="token operator">+</span>
<span class="token string">&quot;  PRIMARY KEY (\`id\`)\\n&quot;</span> <span class="token operator">+</span>
<span class="token string">&quot;) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;\\n&quot;</span> <span class="token operator">+</span>
<span class="token string">&quot;\\n&quot;</span><span class="token punctuation">;</span>
jdbcTemplate<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token string">&quot;创建User表成功&quot;</span><span class="token punctuation">;</span>

<span class="token operator">--</span><span class="token operator">-</span>

<span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;INSERT INTO USER (USER_NAME,PASS_WORD) VALUES (&#39;dalaoyang&#39;,&#39;123&#39;)&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> rows<span class="token operator">=</span> jdbcTemplate<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token string">&quot;执行成功，影响&quot;</span><span class="token operator">+</span>rows<span class="token operator">+</span><span class="token string">&quot;行&quot;</span><span class="token punctuation">;</span>

<span class="token operator">--</span><span class="token operator">-</span>

<span class="token keyword">int</span> rows<span class="token operator">=</span> jdbcTemplate<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token string">&quot;INSERT INTO USER (USER_NAME,PASS_WORD) VALUES (?,?)&quot;</span><span class="token punctuation">,</span>userName<span class="token punctuation">,</span>passWord<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token string">&quot;执行成功，影响&quot;</span><span class="token operator">+</span>rows<span class="token operator">+</span><span class="token string">&quot;行&quot;</span><span class="token punctuation">;</span>

<span class="token operator">--</span><span class="token operator">-</span>

<span class="token keyword">int</span> rows<span class="token operator">=</span> jdbcTemplate<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token string">&quot;UPDATE USER SET PASS_WORD = ? WHERE ID = ?&quot;</span><span class="token punctuation">,</span>passWord<span class="token punctuation">,</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token string">&quot;执行成功，影响&quot;</span><span class="token operator">+</span>rows<span class="token operator">+</span><span class="token string">&quot;行&quot;</span><span class="token punctuation">;</span>

<span class="token operator">--</span><span class="token operator">-</span>

<span class="token keyword">int</span> rows<span class="token operator">=</span> jdbcTemplate<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token string">&quot;DELETE FROM  USER  WHERE ID = ?&quot;</span><span class="token punctuation">,</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token string">&quot;执行成功，影响&quot;</span><span class="token operator">+</span>rows<span class="token operator">+</span><span class="token string">&quot;行&quot;</span><span class="token punctuation">;</span>

<span class="token operator">--</span><span class="token operator">-</span>

<span class="token class-name">String</span> sql <span class="token operator">=</span>
<span class="token string">&quot;INSERT INTO USER (USER_NAME,PASS_WORD) VALUES (?,?)&quot;</span> <span class="token punctuation">;</span>
<span class="token class-name">List</span><span class="token operator">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> paramList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;zhangsan&quot;</span><span class="token operator">+</span>i<span class="token punctuation">;</span>
    arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;password&quot;</span><span class="token operator">+</span>i<span class="token punctuation">;</span>
    paramList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
jdbcTemplate<span class="token punctuation">.</span><span class="token function">batchUpdate</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span>paramList<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token string">&quot;执行成功&quot;</span><span class="token punctuation">;</span>

<span class="token operator">--</span><span class="token operator">-</span>

<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> list<span class="token operator">=</span> jdbcTemplate<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>userName<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> list<span class="token punctuation">;</span>

<span class="token operator">--</span><span class="token operator">-</span>


<span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;SELECT * FROM USER WHERE ID = ?&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">Map</span> map<span class="token operator">=</span> jdbcTemplate<span class="token punctuation">.</span><span class="token function">queryForMap</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> map<span class="token punctuation">;</span>

<span class="token operator">--</span><span class="token operator">-</span>

<span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;SELECT * FROM USER WHERE ID = ?&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">User</span> user<span class="token operator">=</span> jdbcTemplate<span class="token punctuation">.</span><span class="token function">queryForObject</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>id<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> user<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试方法介绍" tabindex="-1"><a class="header-anchor" href="#测试方法介绍"><span>测试方法介绍</span></a></h2><ul><li>使用execute方法创建User表</li><li>使用update方法，传入参数sql语句，直接执行插入操作</li><li>使用update方法，传入sql语句和对应字段值，进行插入操作</li><li>使用update方法，传入sql语句和对应字段值，进行修改操作</li><li>使用update方法，传入sql语句和对应字段值，进行删除操作</li><li>使用batchUpdate方法，传入sql和参数集合，进行批量更新</li><li>使用query方法，传入sql，实体对象，查询参数，这里就用到了实体类重写的mapRow方法</li><li>使用queryForMap方法，传入sql和参数，返回Map</li><li>使用queryForObject方法，传入sql，实体对象，查询参数，返回User实体类，这里也用到了实体类重写的mapRow方法</li></ul>`,5),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","常用CURD操作.html.vue"]]),d=JSON.parse('{"path":"/back-end/spring/SpringBoot/%E5%B8%B8%E7%94%A8%E4%BE%9D%E8%B5%96/JdbcTemplate/%E5%B8%B8%E7%94%A8CURD%E6%93%8D%E4%BD%9C.html","title":"常用CURD操作","lang":"zh-CN","frontmatter":{"title":"常用CURD操作","category":["操作 代码片段"],"tag":["spring 框架 jdbc CURD"]},"headers":[{"level":2,"title":"代码演示","slug":"代码演示","link":"#代码演示","children":[]},{"level":2,"title":"测试方法介绍","slug":"测试方法介绍","link":"#测试方法介绍","children":[]}],"git":{"createdTime":1713854185000,"updatedTime":1713854185000,"contributors":[{"name":"shuangqi.li","email":"li_shuangq@foxmail.com","commits":1}]},"readingTime":{"minutes":1.62,"words":485},"filePathRelative":"back-end/spring/SpringBoot/常用依赖/JdbcTemplate/常用CURD操作.md","localizedDate":"2024年4月23日"}');export{k as comp,d as data};
