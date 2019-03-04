(window.webpackJsonp = window.webpackJsonp || []).push([[12], { 370: function (t, a, s) { 'use strict'; s.r(a); var n = s(16); var e = Object(n.a)({}, function () { var t = this; var a = t.$createElement; var s = t._self._c || a; return s('ContentSlotsDistributor', { attrs: { 'slot-key': t.$parent.slotKey } }, [s('hr'), t._v(' '), s('p', [t._v('众所周知, JavaScript有六个基本的值类型：**number string symbol boolean null undefined。**除了null和undefined以外，其他三个具有所谓的基本包装对象。可以使用内置构造函数Number()、String()、Boolean()创建包装对象。')]), t._v(' '), s('p', [t._v('首先我们要知道，在 JS 中类型转换只有三种情况，分别是：')]), t._v(' '), s('ul', [s('li', [t._v('转换为布尔值')]), t._v(' '), s('li', [t._v('转换为数字')]), t._v(' '), s('li', [t._v('转换为字符串')])]), t._v(' '), s('p', [t._v('我们先来看一个类型转换表格，然后再进入正题')]), t._v(' '), s('p', [s('img', { attrs: { src: 'https://user-gold-cdn.xitu.io/2018/11/15/16716dec14421e47?imageView2/0/w/1280/h/960/format/webp/ignore-error/1', alt: 'img' } })]), t._v(' '), s('h3', { attrs: { id: '转boolean' } }, [s('a', { staticClass: 'header-anchor', attrs: { href: '#转boolean', 'aria-hidden': 'true' } }, [t._v('#')]), t._v(' 转Boolean')]), t._v(' '), s('p', [t._v('在条件判断时，除了 '), s('code', [t._v('undefined')]), t._v('， '), s('code', [t._v('null')]), t._v('， '), s('code', [t._v('false')]), t._v('， '), s('code', [t._v('NaN')]), t._v('， '), s('code', [t._v("''")]), t._v('， '), s('code', [t._v('0')]), t._v('， '), s('code', [t._v('-0')]), t._v('，其他所有值都转为 '), s('code', [t._v('true')]), t._v('，包括所有对象。')]), t._v(' '), s('h3', { attrs: { id: '对象转原始类型' } }, [s('a', { staticClass: 'header-anchor', attrs: { href: '#对象转原始类型', 'aria-hidden': 'true' } }, [t._v('#')]), t._v(' 对象转原始类型')]), t._v(' '), s('p', [t._v('对象在转换类型的时候，会调用内置的 '), s('code', [t._v('[[ToPrimitive]]')]), t._v(' 函数，对于该函数来说，算法逻辑一般来说如下：')]), t._v(' '), s('ul', [s('li', [t._v('如果已经是原始类型了，那就不需要转换了')]), t._v(' '), s('li', [t._v('调用 '), s('code', [t._v('x.valueOf()')]), t._v('，如果转换为基础类型，就返回转换的值')]), t._v(' '), s('li', [t._v('调用 '), s('code', [t._v('x.toString()')]), t._v('，如果转换为基础类型，就返回转换的值')]), t._v(' '), s('li', [t._v('如果都没有返回原始类型，就会报错')])]), t._v(' '), s('p', [t._v('当然你也可以重写 '), s('code', [t._v('Symbol.toPrimitive')]), t._v(' ，该方法在转原始类型时调用优先级最高。')]), t._v(' '), s('div', { staticClass: 'language-javascript extra-class' }, [s('pre', { pre: !0, attrs: { class: 'language-javascript' } }, [s('code', [s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('let')]), t._v(' a '), s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]), t._v(' '), s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]), t._v('\n  '), s('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('valueOf')]), s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]), s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]), t._v(' '), s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]), t._v('\n    '), s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('return')]), t._v(' '), s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]), t._v('\n  '), s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]), s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]), t._v('\n  '), s('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('toString')]), s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]), s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]), t._v(' '), s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]), t._v('\n    '), s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('return')]), t._v(' '), s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'1'")]), t._v('\n  '), s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]), s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]), t._v('\n  '), s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]), t._v('Symbol'), s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]), t._v('toPrimitive'), s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]), s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]), s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]), t._v(' '), s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]), t._v('\n    '), s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('return')]), t._v(' '), s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('2')]), t._v('\n  '), s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]), t._v('\n'), s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]), t._v('\n'), s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1')]), t._v(' '), s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('+')]), t._v(' a '), s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// => 3')]), t._v('\n')])])]), s('h3', { attrs: { id: '四则运算符' } }, [s('a', { staticClass: 'header-anchor', attrs: { href: '#四则运算符', 'aria-hidden': 'true' } }, [t._v('#')]), t._v(' 四则运算符')]), t._v(' '), s('p', [t._v('加法运算符不同于其他几个运算符，它有以下几个特点：')]), t._v(' '), s('ul', [s('li', [t._v('运算中其中一方为字符串，那么就会把另一方也转换为字符串')]), t._v(' '), s('li', [t._v('如果一方不是字符串或者数字，那么会将它转换为数字或者字符串')])]), t._v(' '), s('div', { staticClass: 'language-javascript extra-class' }, [s('pre', { pre: !0, attrs: { class: 'language-javascript' } }, [s('code', [s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1')]), t._v(' '), s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('+')]), t._v(' '), s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'1'")]), t._v(' '), s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v("// '11'")]), t._v('\n'), s('span', { pre: !0, attrs: { class: 'token boolean' } }, [t._v('true')]), t._v(' '), s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('+')]), t._v(' '), s('span', { pre: !0, attrs: { class: 'token boolean' } }, [t._v('true')]), t._v(' '), s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 2')]), t._v('\n'), s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('4')]), t._v(' '), s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('+')]), t._v(' '), s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]), s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1')]), s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]), s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('2')]), s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]), s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('3')]), s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]), t._v(' '), s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// "41,2,3"')]), t._v('\n')])])]), s('p', [t._v('如果你对于答案有疑问的话，请看解析：')]), t._v(' '), s('ul', [s('li', [t._v('对于第一行代码来说，触发特点一，所以将数字 '), s('code', [t._v('1')]), t._v(' 转换为字符串，得到结果 '), s('code', [t._v("'11'")])]), t._v(' '), s('li', [t._v('对于第二行代码来说，触发特点二，所以将 '), s('code', [t._v('true')]), t._v(' 转为数字 '), s('code', [t._v('1')])]), t._v(' '), s('li', [t._v('对于第三行代码来说，触发特点二，所以将数组通过 '), s('code', [t._v('toString')]), t._v(' 转为字符串 '), s('code', [t._v('1,2,3')]), t._v('，得到结果 '), s('code', [t._v('41,2,3')])])]), t._v(' '), s('p', [t._v('另外对于加法还需要注意这个表达式 '), s('code', [t._v("'a' + + 'b'")])]), t._v(' '), s('div', { staticClass: 'language-javascript extra-class' }, [s('pre', { pre: !0, attrs: { class: 'language-javascript' } }, [s('code', [s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'a'")]), t._v(' '), s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('+')]), t._v(' '), s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('+')]), t._v(' '), s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'b'")]), t._v(' '), s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// -> "aNaN"')]), t._v('\n')])])]), s('p', [t._v('因为 '), s('code', [t._v("+ 'b'")]), t._v(' 等于 '), s('code', [t._v('NaN')]), t._v('，所以结果为 '), s('code', [t._v('"aNaN"')]), t._v('，你可能也会在一些代码中看到过 '), s('code', [t._v("+ '1'")]), t._v(' 的形式来快速获取 '), s('code', [t._v('number')]), t._v(' 类型。')]), t._v(' '), s('p', [t._v('那么对于除了加法的运算符来说，只要其中一方是数字，那么另一方就会被转为数字')]), t._v(' '), s('div', { staticClass: 'language-javascript extra-class' }, [s('pre', { pre: !0, attrs: { class: 'language-javascript' } }, [s('code', [s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('4')]), t._v(' '), s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('*')]), t._v(' '), s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'3'")]), t._v(' '), s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 12')]), t._v('\n'), s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('4')]), t._v(' '), s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('*')]), t._v(' '), s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]), s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]), t._v(' '), s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 0')]), t._v('\n'), s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('4')]), t._v(' '), s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('*')]), t._v(' '), s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]), s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1')]), s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]), t._v(' '), s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('2')]), s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]), t._v(' '), s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// NaN')]), t._v('\n')])])]), s('h3', { attrs: { id: '比较运算符' } }, [s('a', { staticClass: 'header-anchor', attrs: { href: '#比较运算符', 'aria-hidden': 'true' } }, [t._v('#')]), t._v(' 比较运算符')]), t._v(' '), s('ol', [s('li', [t._v('如果是对象，就通过 '), s('code', [t._v('toPrimitive')]), t._v(' 转换对象')]), t._v(' '), s('li', [t._v('如果是字符串，就通过 '), s('code', [t._v('unicode')]), t._v(' 字符索引来比较')])]), t._v(' '), s('div', { staticClass: 'language-javascript extra-class' }, [s('pre', { pre: !0, attrs: { class: 'language-javascript' } }, [s('code', [s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('let')]), t._v(' a '), s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]), t._v(' '), s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]), t._v('\n  '), s('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('valueOf')]), s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]), s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]), t._v(' '), s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]), t._v('\n    '), s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('return')]), t._v(' '), s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]), t._v('\n  '), s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]), s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]), t._v('\n  '), s('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('toString')]), s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]), s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]), t._v(' '), s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]), t._v('\n    '), s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('return')]), t._v(' '), s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'1'")]), t._v('\n  '), s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]), t._v('\n'), s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]), t._v('\na '), s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('>')]), t._v(' '), s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('-')]), s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1')]), t._v(' '), s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// true')]), t._v('\n')])])]), s('p', [t._v('在以上代码中，因为 '), s('code', [t._v('a')]), t._v(' 是对象，所以会通过 '), s('code', [t._v('valueOf')]), t._v(' 转换为原始类型再比较值。')])]) }, [], !1, null, null, null); a.default = e.exports } }])
