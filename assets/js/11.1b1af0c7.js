(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{394:function(v,_,e){"use strict";e.r(_);var o=e(19),t=Object(o.a)({},function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("hr"),v._v(" "),e("h2",{attrs:{id:"原始（primitive）类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原始（primitive）类型","aria-hidden":"true"}},[v._v("#")]),v._v(" 原始（Primitive）类型")]),v._v(" "),e("p",[v._v("总结：")]),v._v(" "),e("p",[v._v("JS中有"),e("font",{attrs:{color:"C0392B"}},[e("strong",[v._v("六种")])]),v._v("原始数据类型，他们分别是："),e("code",[v._v("number string symbol boolean null undefined")]),v._v(" 并且 "),e("font",{attrs:{color:"5499c7"}},[e("u",[v._v("原始类型存储的都是值，是没有函数可以调用的")])]),v._v("。"),e("font",{attrs:{color:"c0392b"}},[v._v("null 不是对象类型")]),v._v("。")],1),v._v(" "),e("p",[v._v("原始类型也被称做基本类型")]),v._v(" "),e("p",[v._v("涉及面试题：原始类型有哪几种？null 是对象嘛？")]),v._v(" "),e("p",[v._v("在 JS 中，存在着 6 种原始值，分别是：")]),v._v(" "),e("ul",[e("li",[e("p",[e("code",[v._v("boolean")])])]),v._v(" "),e("li",[e("p",[e("code",[v._v("null")])])]),v._v(" "),e("li",[e("p",[e("code",[v._v("undefined")])])]),v._v(" "),e("li",[e("p",[e("code",[v._v("number")])])]),v._v(" "),e("li",[e("p",[e("code",[v._v("string")])])]),v._v(" "),e("li",[e("p",[e("code",[v._v("symbol")])]),v._v(" "),e("p",[v._v("number string symbol boolean null undefined")])])]),v._v(" "),e("p",[v._v("首先原始类型存储的都是值，是没有函数可以调用的，比如 "),e("code",[v._v("undefined.toString()")])]),v._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/11/14/16711c4f991c73ac?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),v._v(" "),e("p",[v._v("此时你肯定会有疑问，这不对呀，明明 "),e("code",[v._v("'1'.toString()")]),v._v(" 是可以使用的。其实在这种情况下，"),e("code",[v._v("'1'")]),v._v(" 已经不是原始类型了，而是被强制转换成了 "),e("code",[v._v("String")]),v._v(" 类型也就是对象类型，所以可以调用 "),e("code",[v._v("toString")]),v._v(" 函数。")]),v._v(" "),e("p",[v._v("除了会在必要的情况下强转类型以外，原始类型还有一些坑。")]),v._v(" "),e("p",[v._v("其中 JS 的 "),e("code",[v._v("number")]),v._v(" 类型是浮点类型的，在使用中会遇到某些 Bug，比如 "),e("code",[v._v("0.1 + 0.2 !== 0.3")]),v._v("，但是这一块的内容会在进阶部分讲到。"),e("code",[v._v("string")]),v._v(" 类型是不可变的，无论你在 "),e("code",[v._v("string")]),v._v(" 类型上调用何种方法，都不会对值有改变。")]),v._v(" "),e("p",[e("font",{attrs:{color:"c0392b"}},[v._v("另外对于 "),e("code",[v._v("null")]),v._v(" 来说，很多人会认为他是个对象类型，其实这是错误的。虽然 "),e("code",[v._v("typeof null")]),v._v(" 会输出 "),e("code",[v._v("object")]),v._v("，但是这只是 JS 存在的一个悠久 Bug。在 JS 的最初版本中使用的是 32 位系统，为了性能考虑使用低位存储变量的类型信息，"),e("code",[v._v("000")]),v._v(" 开头代表是对象，然而 "),e("code",[v._v("null")]),v._v(" 表示为全零，所以将它错误的判断为 "),e("code",[v._v("object")]),v._v(" 。虽然现在的内部类型判断代码已经改变了，但是对于这个 Bug 却是一直流传下来。")])],1)])},[],!1,null,null,null);_.default=t.exports}}]);