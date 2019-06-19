(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{147:function(e,a,t){"use strict";t.r(a);var s=t(4),r=Object(s.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"在webpack4-中利用babel-7取消严格模式方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在webpack4-中利用babel-7取消严格模式方法","aria-hidden":"true"}},[e._v("#")]),e._v(" 在webpack4 中利用Babel 7取消严格模式方法")]),e._v(" "),t("p",[e._v("报错信息：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them\n")])])]),t("p",[e._v("出现个个问题的原因，是在引用mui中的mui.js文件时报的错误，由于在webpack中，采用的时严格模式，而mui.js用了非严格模式的写法。")]),e._v(" "),t("p",[e._v("解决方法：1.把mui.js里面的内容改成严格模式，但这不可能，毕竟我们要引用他们。")]),e._v(" "),t("p",[e._v("2. 只能把webpack改为非严格模式了")]),e._v(" "),t("p",[e._v("安装：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("cnpm i @babel/plugin-transform-modules-commonjs @babel/plugin-transform-strict-mode -D\n")])])]),t("p",[e._v("在.babelrc中进行配置：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('"plugins": [\n      ["@babel/plugin-transform-modules-commonjs", { "strictMode": false }]\n    ]\n')])])]),t("p",[e._v("这样就解决了。0.0")]),e._v(" "),t("p",[e._v("转自 "),t("a",{attrs:{href:"https://www.cnblogs.com/zengsf/p/10981537.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("博客园"),t("OutboundLink")],1),e._v(" 这位老哥")])])},[],!1,null,null,null);a.default=r.exports}}]);