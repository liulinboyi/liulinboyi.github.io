(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{387:function(a,t,s){"use strict";s.r(t);var n=s(19),e=Object(n.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("hr"),a._v(" "),s("ol",[s("li")]),a._v(" "),s("p",[a._v("我们在初始化一个 Vue 应用时，需要首先创建一个 Vue 实例：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("var vm = new Vue(options)\n")])])]),s("p",[a._v("其中 options 是一个对象，请问文档中说 options 可以包含哪些 key ？（多选）")]),a._v(" "),s("hr"),a._v(" "),s("ol",[s("li",[a._v("data props propsData computed methods watch")]),a._v(" "),s("li",[a._v("el template render renderError")]),a._v(" "),s("li",[a._v("beforeCreate created beforeMount mounted beforeUpdate updated activated deactivated beforeDestroy destroyed errorCaptured")]),a._v(" "),s("li",[a._v("directives filters components parent mixins extends provide inject")]),a._v(" "),s("li",[a._v("name delimiters functional model inheritAttrs comments")])]),a._v(" "),s("p",[a._v("答案： 12345")]),a._v(" "),s("ol",{attrs:{start:"2"}},[s("li")]),a._v(" "),s("p",[a._v("有如下"),s("a",{attrs:{href:"http://jsbin.com/yohovuy/3/edit?html,js,output",target:"_blank",rel:"noopener noreferrer"}},[a._v("代码"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("html")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('<div id="app">\n    <span class=span-a>\n      {{obj.a}} \n    </span>\n    <span class=span-b>\n      {{obj.b}}\n    </span>\n  </div>\n')])])]),s("p",[a._v("js")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("var app = new Vue({\n  el: '#app',\n  data: {\n    obj: {\n      a: 'a',\n    }\n  },\n})\napp.obj.a = 'a2'\n")])])]),s("p",[a._v("请问最终 span-a 和 span-b 中分别展示什么字符串？")]),a._v(" "),s("hr"),a._v(" "),s("ol",[s("li",[a._v("span-a 中显示a，span-b 中不显示")]),a._v(" "),s("li",[a._v("span-a 中显示a2，span-b 中不显示")]),a._v(" "),s("li",[a._v("span-a 中显示a，span-b 中显示 undefined")]),a._v(" "),s("li",[a._v("span-a 中显示a2，span-b 中显示 undefined")])]),a._v(" "),s("p",[a._v("答案：2")]),a._v(" "),s("ol",{attrs:{start:"3"}},[s("li")]),a._v(" "),s("p",[a._v("有如下"),s("a",{attrs:{href:"http://jsbin.com/yohovuy/4/edit?html,js,output",target:"_blank",rel:"noopener noreferrer"}},[a._v("代码"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("html")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('<div id="app">\n    <span class=span-a>\n      {{obj.a}} \n    </span>\n    <span class=span-b>\n      {{obj.b}}\n    </span>\n  </div>\n')])])]),s("p",[a._v("js")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("var app = new Vue({\n  el: '#app',\n  data: {\n    obj: {\n      a: 'a',\n    }\n  },\n})\napp.obj.b = 'b'\n")])])]),s("p",[a._v("请问最终 span-a 和 span-b 中分别展示什么字符串？")]),a._v(" "),s("hr"),a._v(" "),s("ol",[s("li",[a._v("span-a 中显示a，span-b 中显示 b")]),a._v(" "),s("li",[a._v("span-a 中显示a，span-b 中显示 undefined")]),a._v(" "),s("li",[a._v("span-a 中显示a，span-b 中不显示")])]),a._v(" "),s("p",[a._v("答案：3")]),a._v(" "),s("ol",{attrs:{start:"4"}},[s("li")]),a._v(" "),s("p",[a._v("有如下"),s("a",{attrs:{href:"http://jsbin.com/yohovuy/5/edit?html,js,output",target:"_blank",rel:"noopener noreferrer"}},[a._v("代码"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("html")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('<div id="app">\n    <span class=span-a>\n      {{obj.a}} \n    </span>\n    <span class=span-b>\n      {{obj.b}}\n    </span>\n  </div>\n')])])]),s("p",[a._v("js")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("var app = new Vue({\n  el: '#app',\n  data: {\n    obj: {\n      a: 'a',\n    }\n  },\n})\napp.obj.a = 'a2'\napp.obj.b = 'b'\n")])])]),s("p",[a._v("请问最终 span-a 和 span-b 中分别展示什么字符串？")]),a._v(" "),s("hr"),a._v(" "),s("ol",[s("li",[a._v("span-a 中显示a2，span-b 中不显示")]),a._v(" "),s("li",[a._v("span-a 中显示a2，span-b 中显示b")])]),a._v(" "),s("p",[a._v("答案：2")]),a._v(" "),s("ol",{attrs:{start:"5"}},[s("li")]),a._v(" "),s("p",[a._v("关于 "),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze",target:"_blank",rel:"noopener noreferrer"}},[a._v("Object.freeze()"),s("OutboundLink")],1),a._v(" 正确的有")]),a._v(" "),s("hr"),a._v(" "),s("ol",[s("li",[a._v("Object.freeze() 方法可以冻结一个对象，冻结指的是不能向这个对象添加新的属性，不能修改其已有属性的值，不能删除已有属性，以及不能修改该对象已有属性的可枚举性、可配置性、可写性。")]),a._v(" "),s("li",[a._v("const object2 = Object.freeze(object1); 其中 object2 和 object1 是同一个对象")]),a._v(" "),s("li",[a._v("被冻结对象有一个属性也是对象，那么这个作为属性的对象也是被冻结的。")])]),a._v(" "),s("p",[a._v("答案：1，2")]),a._v(" "),s("p",[a._v("解答：")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" object1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  property1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("42")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("18")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" object2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("freeze")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("object1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nobject2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("age "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("20")]),a._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("object2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// { age: 20 }")]),a._v("\nobject2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("property1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("33")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Throws an error in strict mode")]),a._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("object2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("property1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// expected output: 42")]),a._v("\n\n")])])]),s("ol",{attrs:{start:"6"}},[s("li")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("var vm = new Vue({\n  el: '#example',\n  data: {message: 'hi'}\n})\n")])])]),s("p",[a._v("请问这个 vm 有哪些属性（API）？")]),a._v(" "),s("hr"),a._v(" "),s("ol",[s("li",[a._v("$data $props $el $options $parent $root $children $slots $scopedSlots $refs $isServer $attrs $listeners")]),a._v(" "),s("li",[a._v("$watch $set $delete")]),a._v(" "),s("li",[a._v("$on $once $off $emit")]),a._v(" "),s("li",[a._v("$mount $forceUpdate $nextTick $destroy")])]),a._v(" "),s("p",[a._v("答案：1234")]),a._v(" "),s("ol",{attrs:{start:"7"}},[s("li")]),a._v(" "),s("p",[a._v("文档中建议 Vue 实例的生命周期钩子不要写成箭头函数，给出的理由是什么")]),a._v(" "),s("hr"),a._v(" "),s("ol",[s("li",[a._v("箭头函数是和父级上下文绑定在一起的，this 不会是如你所预期的 Vue 实例")]),a._v(" "),s("li",[a._v("经常导致 Uncaught TypeError: Cannot read property of undefined 或 Uncaught TypeError: this.myMethod is not a function 之类的错误。")]),a._v(" "),s("li",[a._v("箭头函数不好用")])]),a._v(" "),s("p",[a._v("答案：12")]),a._v(" "),s("ol",{attrs:{start:"8"}},[s("li")]),a._v(" "),s("p",[a._v("关于模板语法说法正确的是")]),a._v(" "),s("hr"),a._v(" "),s("ol",[s("li",[a._v("Vue.js 使用了基于 XML 的模板语法")]),a._v(" "),s("li",[a._v("在底层的实现上，Vue 将模板编译成虚拟 DOM 渲染函数。")]),a._v(" "),s("li",[a._v("结合响应系统，Vue 能够智能地计算出最少需要重新渲染多少组件，并把 DOM 操作次数减到最少。")]),a._v(" "),s("li",[a._v("你也可以不用模板，直接写渲染 (render) 函数，使用可选的 JSX 语法。")])]),a._v(" "),s("p",[a._v("答案：234")]),a._v(" "),s("ol",{attrs:{start:"9"}},[s("li")]),a._v(" "),s("p",[a._v("假设 data 中的 id 为 42\nhtml")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("<div v-bind:id=\"'list-' + id\"></div>\n")])])]),s("p",[a._v("最终该 div 的 id 为")]),a._v(" "),s("hr"),a._v(" "),s("ol",[s("li",[a._v("list-id")]),a._v(" "),s("li",[a._v("list-42")])]),a._v(" "),s("p",[a._v("答案：2")]),a._v(" "),s("ol",{attrs:{start:"10"}},[s("li")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('<form v-on:submit.prevent="onSubmit">...</form>\n')])])]),s("p",[a._v("请问 .prevent 在 Vue 被称作什么（三个汉字）？")]),a._v(" "),s("p",[a._v("答案：修饰符")])])},[],!1,null,null,null);t.default=e.exports}}]);