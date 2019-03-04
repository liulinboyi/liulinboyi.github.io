(window.webpackJsonp = window.webpackJsonp || []).push([[11], { 358: function (t, s, a) { 'use strict'; a.r(s); var n = a(16); var p = Object(n.a)({}, function () { var t = this; var s = t.$createElement; var a = t._self._c || s; return a('ContentSlotsDistributor', { attrs: { 'slot-key': t.$parent.slotKey } }, [a('hr'), t._v(' '), a('h2', { attrs: { id: '对象（object）类型' } }, [a('a', { staticClass: 'header-anchor', attrs: { href: '#对象（object）类型', 'aria-hidden': 'true' } }, [t._v('#')]), t._v(' 对象（Object）类型')]), t._v(' '), a('p', [t._v('总结：')]), t._v(' '), a('p', [a('font', { attrs: { color: 'f1c40f' } }, [t._v('1.除了原始类型其他都是对象类型，对象类型和原始类型不同的是，原始类型存储的是值，对象类型存储的是地址（指针）。')])], 1), t._v(' '), a('p', [a('strong', [t._v('2.当我们将变量赋值给另外一个变量时，复制的是原本变量的地址（指针）')])]), t._v(' '), a('p', [a('u', [t._v('3.当我们进行数据修改的时候，就会修改存放在地址（指针） '), a('code', [t._v('#001')]), t._v(' 上的值，也就导致了两个变量的值都发生了改变。')])]), t._v(' '), a('p', [t._v('对象也被称做引用类型，对象是属性和方法的集合')]), t._v(' '), a('p', [t._v('在 JS 中，除了原始类型那么其他的都是对象类型了。对象类型和原始类型不同的是，原始类型存储的是值，对象类型存储的是地址（指针）。当你创建了一个对象类型的时候，计算机会在内存中帮我们开辟一个空间来存放值，但是我们需要找到这个空间，这个空间会拥有一个地址（指针）。')]), t._v(' '), a('div', { staticClass: 'language-javascript extra-class' }, [a('pre', { pre: !0, attrs: { class: 'language-javascript' } }, [a('code', [a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]), t._v(' a '), a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]), t._v(' '), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]), t._v('\n')])])]), a('p', [t._v('对于常量 '), a('code', [t._v('a')]), t._v(' 来说，假设内存地址（指针）为 '), a('code', [t._v('#001')]), t._v('，那么在地址 '), a('code', [t._v('#001')]), t._v(' 的位置存放了值 '), a('code', [t._v('[]')]), t._v('，常量 '), a('code', [t._v('a')]), t._v('存放了地址（指针） '), a('code', [t._v('#001')]), t._v('，再看以下代码')]), t._v(' '), a('div', { staticClass: 'language-javascript extra-class' }, [a('pre', { pre: !0, attrs: { class: 'language-javascript' } }, [a('code', [a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]), t._v(' a '), a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]), t._v(' '), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]), t._v('\n'), a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]), t._v(' b '), a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]), t._v(' a\nb'), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]), a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('push')]), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]), a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1')]), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]), t._v('\n')])])]), a('p', [t._v('当我们将变量赋值给另外一个变量时，赋值的是原本变量的地址（指针），也就是说当前变量 '), a('code', [t._v('b')]), t._v(' 存放的地址（指针）也是 '), a('code', [t._v('#001')]), t._v('，当我们进行数据修改的时候，就会修改存放在地址（指针） '), a('code', [t._v('#001')]), t._v(' 上的值，也就导致了两个变量的值都发生了改变。')]), t._v(' '), a('p', [t._v('接下来我们来看函数参数是对象的情况')]), t._v(' '), a('div', { staticClass: 'language-javascript extra-class' }, [a('pre', { pre: !0, attrs: { class: 'language-javascript' } }, [a('code', [a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('function')]), t._v(' '), a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('test')]), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]), t._v('person'), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]), t._v(' '), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]), t._v('\n  person'), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]), t._v('age '), a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]), t._v(' '), a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('26')]), t._v('\n  person '), a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]), t._v(' '), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]), t._v('\n    name'), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]), t._v(' '), a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'yyy'")]), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]), t._v('\n    age'), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]), t._v(' '), a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('30')]), t._v('\n  '), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]), t._v('\n\n  '), a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('return')]), t._v(' person\n'), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]), t._v('\n'), a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]), t._v(' p1 '), a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]), t._v(' '), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]), t._v('\n  name'), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]), t._v(' '), a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'yck'")]), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]), t._v('\n  age'), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]), t._v(' '), a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('25')]), t._v('\n'), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]), t._v('\n'), a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]), t._v(' p2 '), a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]), t._v(' '), a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('test')]), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]), t._v('p1'), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]), t._v('\nconsole'), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]), a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('log')]), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]), t._v('p1'), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]), t._v(' '), a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// -> ?')]), t._v('\nconsole'), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]), a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('log')]), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]), t._v('p2'), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]), t._v(' '), a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// -> ?')]), t._v('\n')])])]), a('div', { staticClass: 'language-javascript extra-class' }, [a('pre', { pre: !0, attrs: { class: 'language-javascript' } }, [a('code', [a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('function')]), t._v(' '), a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('test')]), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]), a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('...')]), t._v('person'), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]), t._v(' '), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]), a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('//不定参数 ...形参')]), t._v('\n  person'), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]), t._v('age '), a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]), t._v(' '), a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('26')]), t._v('\n  person '), a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]), t._v(' '), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]), t._v('\n    name'), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]), t._v(' '), a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'yyy'")]), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]), t._v('\n    age'), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]), t._v(' '), a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('30')]), t._v('\n  '), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]), t._v('\n\n  '), a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('return')]), t._v(' person\n'), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]), t._v('\n'), a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('var')]), t._v(' p1 '), a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]), t._v(' '), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]), t._v('\n    name'), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]), t._v(' '), a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'yck'")]), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]), t._v('\n    age'), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]), a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('25')]), t._v('\n'), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]), t._v('\np2 '), a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]), t._v(' '), a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('test')]), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]), t._v('p1'), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]), t._v('\nconsole'), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]), a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('info')]), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]), a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'p1'")]), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]), t._v('p1'), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]), t._v('\nconsole'), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]), a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('info')]), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]), a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'p2'")]), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]), t._v('p2'), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]), t._v('\n'), a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('test')]), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]), t._v('\n\n打印结果\np1 '), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]), t._v('name'), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]), t._v(' '), a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v('"yck"')]), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]), t._v(' age'), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]), t._v(' '), a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('25')]), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]), t._v('\np2 '), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]), t._v('name'), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]), t._v(' '), a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v('"yyy"')]), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]), t._v(' age'), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]), t._v(' '), a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('30')]), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]), t._v('\n'), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]), t._v('name'), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]), t._v(' '), a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v('"yyy"')]), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]), t._v(' age'), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]), t._v(' '), a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('30')]), a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]), t._v('\n')])])]), a('p', [t._v('对于以上代码，你是否能正确的写出结果呢？接下来让我为你解析一番：')]), t._v(' '), a('ul', [a('li', [t._v('首先，函数传参是传递对象指针的副本')]), t._v(' '), a('li', [t._v('到函数内部修改参数的属性这步，我相信大家都知道，当前 '), a('code', [t._v('p1')]), t._v(' 的值也被修改了')]), t._v(' '), a('li', [t._v('但是当我们重新为 '), a('code', [t._v('person')]), t._v(' 分配了一个对象时就出现了分歧，请看下图')])]), t._v(' '), a('p', [a('img', { attrs: { src: 'https://user-gold-cdn.xitu.io/2018/11/14/16712ce155afef8c?imageView2/0/w/1280/h/960/format/webp/ignore-error/1', alt: 'img' } })]), t._v(' '), a('p', [t._v('所以最后 '), a('code', [t._v('person')]), t._v(' 拥有了一个新的地址（指针），也就和 '), a('code', [t._v('p1')]), t._v(' 没有任何关系了，导致了最终两个变量的值是不相同的。')]), t._v(' '), a('p', [t._v('console.log(p1) // -> ?\nconsole.log(p2) // -> ?')]), t._v(' '), a('p', [a('font', { attrs: { color: '3498db' } }, [t._v('打印输出的值不相同')])], 1)]) }, [], !1, null, null, null); s.default = p.exports } }])
