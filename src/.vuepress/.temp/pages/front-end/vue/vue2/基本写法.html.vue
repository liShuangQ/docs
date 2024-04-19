<template><div><p>Vue实例</p>
<p>el 挂载点<br>
1.el后可以使用其它选择器，建议使用id选择器<br>
2.只能支持双标签html，body除外（因为单标签的内部无法写{{message}}   ），建议挂载div 因为div没有基础的样式   ，p，h2等会有自己本身的样式
3.其中Message对外部是没用的，在el元素命中的内部才可以使用
4.new Vue   （V是大写的）<br>
5.给一个父元素设置挂载点 下面的元素都可以直接使用
data数据对象
1.当data中复杂类型时   遵守js的语法
methods 方法
1.methods内写绑定的方法
2.方法中通过this关键字   获取data中的数据
Vue指令
v-text
设置元素文本   简写为 {{   }}</p>
<ul>
<li>
<p>覆盖，会顶掉元素内之前写的内容</p>
</li>
<li>
<p>后面可以进行字符串拼接，但是由于两边已经是双引号了，所以另外添加的需要是单引号</p>
</li>
<li>
<p>{{message}}添加不会清除原来的内容，   {{message}}同样支持字符串拼接
v-html
innerHTML</p>
</li>
<li>
<p>写法与v-text相同，效果与innerHTML相同
v-on
为元素绑定事件       简写为 @</p>
</li>
<li>
<p>v-on：与 @ 效果相同</p>
</li>
<li>
<p>methods内写绑定的方法</p>
</li>
<li>
<p>事件不加on与js语法相同（on已经在v-on添加完了）</p>
</li>
<li>
<p>当事件中效果要更改页面数据时   （图一html     图二js）</p>
</li>
<li></li>
</ul>
<p>实现点击一次内容添加一个“好好吃！”</p>
<ul>
<li>获取页面中的元素   this.xxx</li>
<li>添加 this.xxx += “yyy”
案例：点击计数</li>
</ul>
<p>补充！！！</p>
<ul>
<li>
<p>事件绑定的方法写成函数调用的方式     xxx（）</p>
</li>
<li>
<p>定义方法时 定义形参接收传入的实参</p>
</li>
<li>
<p>@keyup.enter 事件修饰符（.修饰符），限制按键是enter才会执行
v-show
根据表达值的布尔值真假，切换元素显示和隐藏
操控样式
原理为     display：none</p>
</li>
<li>
<p>上图中 第一个div满足条件显示 第二个不满足条件不显示</p>
</li>
<li>
<p>v-show后面的判断条件是最后被解析成 布尔值</p>
</li>
<li>
<p>配合v-on等指令更换data中的数值实现灵活控制时候显示（案例）
案例：点击按钮切换显示状态
通过方法更改显示状态</p>
</li>
</ul>
<p>v-if
根据表达值的布尔值真假，切换元素显示和隐藏
与v-show不同 直接操控dom     使用方法一致
元素直接在文档中出现消失
注意：在使用中 频繁切换的元素用v-show反之v-if
v-bind
设置元素的属性（例如src class等 都是行内的）   简写为 ：
用法</p>
<p>表达class是否添加的写法</p>
<ul>
<li>
<p>第一种和第二种效果一致     两种写法     后面通过方法改变data中的值改变class是否出现
简写：v-bind可以省略</p>
</li>
<li>
<p>三元表达式写法     对象写法（推荐）</p>
</li>
<li>
<p>对象写法中：对象取决于对象后面的是否成立 active取决于isActive是否成立
v-for
根据数据生成列表结构
例如：当数组中有4个值的时候，就会给你生成4个（如下图中 会生成4个li）</p>
</li>
<li>
<p>v-for后 （it，index）in arr   。</p>
</li>
<li>
<p>遍历arr这个数组，其中it是数组的每个值     index是数组的下标</p>
</li>
<li>
<p>（it，index）可以写别的</p>
</li>
<li>
<p>当遍历的类型时数组对象时，遍历出来的每个对象在使用处用   .xxx 得到获取的对象的需??????????</p>
</li>
<li>
<p>data中的数组对象可以在方法中进行数组对象操作（push shift。。。）</p>
</li>
<li>
<p>数组长度会随着修改同步更新
案例：遍历数组中对象
v-model
获取和设置表单元素的值（双向数据绑定）</p>
</li>
<li>
<p>更改两边的任意一边 另一个都会随着更改</p>
</li>
<li>
<p>绑定的数据和表单元素值相互关联</p>
</li>
<li>
<p>更改后值确实在同步更新 但是不会体现在代码里面 可以在设置个{{ xxx }}进行查看
案例：验证双向绑定
修改一边另一边改变</p>
</li>
</ul>
<p>Axios</p>
<p>get</p>
<p>Post</p>
<p>Vue+axios</p>
<ul>
<li>由于axios内的this已经改变，所以用新开的that变量与this连接（不新开变量箭头函数也可）</li>
</ul>
</div></template>


