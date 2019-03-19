(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{392:function(t,n,e){"use strict";e.r(n);var s=e(19),a=Object(s.a)({},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"react测试题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react测试题","aria-hidden":"true"}},[t._v("#")]),t._v(" React测试题")]),t._v(" "),e("p",[t._v("假设页面中已经有一个 id 为 root 的 div，我希望把 "),e("code",[t._v("<h1>Hello, world!</h1>")]),t._v(" 展示在页面里，代码如下")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("________A________")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("h1"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Hello"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" world"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("h1"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'root'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("答案：ReactDOM.render")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("function ComponentA(){\n    return\n      <div>hi</div>\n}\n")])])]),e("p",[t._v("请问 "),e("code",[t._v("ComponentA()")]),t._v(" 的返回值是")]),t._v(" "),e("hr"),t._v(" "),e("ol",[e("li",[t._v("undefined")]),t._v(" "),e("li",[t._v("一个 React 元素，对应一个 div")])]),t._v(" "),e("p",[t._v("答案： 1")]),t._v(" "),e("p",[t._v("解析return ()//一定要加小括号或者紧跟其后")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("function ComponentA(props){\n    return(\n        <div style=_______B________>hi</div>\n    )\n}\n\nfunction App(){\n    return (\n        <div>\n            <ComponentA width={100}/>\n        </div>\n    )\n}\n")])])]),e("p",[t._v("需求是让 ComponentA 的 div 的宽度与 props.width 一致，请问 "),e("code",[t._v("_____B______")]),t._v(" 处应该怎么填？\n代码运行处："),e("a",{attrs:{href:"https://codesandbox.io/s/01z20q1p8w",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://codesandbox.io/s/01z20q1p8w"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("答案：{{width:props.width}}\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("function ComponentA(props){\n    const {children, ...rest} = props\n    return(\n        <div>\n            <div> A 组件</div>\n            <ComponentB ______C______/>\n        </div>\n    )\n}\n\nfunction ComponentB(props){\n    console.log(props)  // 注意这里\n    return(\n        <div>\n            <div> B 组件</div>\n        </div>\n    )\n}\n\nfunction App(){\n    return (\n        <div>\n            <ComponentA width={100} height={100} other={404}>\n              A\n            </ComponentA>\n        </div>\n    )\n}\n")])])]),e("p",[t._v("需求是让 ComponentA 把自己接收到的所有属性都传递给 ComponentB，请问 "),e("code",[t._v("_____C______")]),t._v(" 处应该怎么填？\n也就是说代码中的 console.log(props) 必须打印出 "),e("code",[t._v("{width: 100, height: 100, other: 404}")]),t._v("\n代码运行处："),e("a",{attrs:{href:"https://codesandbox.io/s/z6q431v44l",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://codesandbox.io/s/z6q431v44l"),e("OutboundLink")],1)]),t._v(" "),e("hr"),t._v(" "),e("ol",[e("li",[t._v("props")]),t._v(" "),e("li",[t._v("rest")]),t._v(" "),e("li",[t._v("...props")]),t._v(" "),e("li",[t._v("...rest")]),t._v(" "),e("li",[t._v("{...props}")]),t._v(" "),e("li",[t._v("{...rest}")])]),t._v(" "),e("p",[t._v("答案：6")])])},[],!1,null,null,null);n.default=a.exports}}]);