(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{396:function(t,r,a){"use strict";a.r(r);var e=a(19),s=Object(e.a)({},function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("hr"),t._v(" "),a("p",[t._v("HTTP协议底层由TCP协议和IP协议构建")]),t._v(" "),a("h3",{attrs:{id:"_1-tcp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-tcp","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.TCP")]),t._v(" "),a("ol",[a("li",[a("p",[a("a",{attrs:{href:"https://www.nowcoder.com/questionTerminal/63c8b45c91a544bd8febc1f1ff02e3b5?toCommentId=73766",target:"_blank",rel:"noopener noreferrer"}},[t._v("TCP 和 UDP 的区别是什么"),a("OutboundLink")],1),t._v("\n简答：TCP 可靠、面向连接、慢一点，但注重安全性，适应于网页、邮件；\nUDP 不可靠，无连接、较快，安全性低一点，适应于视频、语音。")])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/jawil/blog/issues/14",target:"_blank",rel:"noopener noreferrer"}},[t._v("TCP 的三次握手指的是什么"),a("OutboundLink")],1),t._v("\n简答：每次建立连接前，客户端和服务端之前都要先进行三次对话才开始正式传输内容，三次对话大概是这样的：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1\\. 客户端：我要连接你了，可以吗\n2\\. 服务端：嗯，我准备好了，连接我吧\n3\\. 客户端：那我连接你咯。\n4\\. 开始后面步骤\n")])])]),t._v(" "),a("p",[t._v("上面内容足以应付前端面试中关于 TCP 的考题，如果你想更了解 TCP 可以看 "),a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2017/06/tcp-protocol.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("此文"),a("OutboundLink")],1)])])]),t._v(" "),a("h3",{attrs:{id:"_2-ip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-ip","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.IP")]),t._v(" "),a("ol",[a("li",[t._v("外网IP\n你的路由器自己会有一个外网IP，像访问的腾讯、阿里的网站就是租用了很多外网IP")]),t._v(" "),a("li",[t._v("内网IP\n而你在家用的手机、电脑用的就是内网IP，路由器也会给自己一个内网IP，"),a("strong",[t._v("一般是：192.168.1.1")])]),t._v(" "),a("li",[t._v("内网和外网之间不能互相访问，但是外网和外网之间可以访问，所以你在家上网就是通过路由器的外网和其他外网连接，你访问的网站在外网发送信息到你的路由器上，然后路由器将信息转到内网发送到你电脑上")]),t._v(" "),a("li",[a("strong",[t._v("本地 IP：127.0.0.1")])]),t._v(" "),a("li",[a("strong",[t._v("特别特殊的 IP：0.0.0.0")]),t._v("，它不表示任何设备。")])]),t._v(" "),a("h3",{attrs:{id:"_3-端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-端口","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.端口")]),t._v(" "),a("p",[t._v("一个端口对应一种服务\nHTTP服务用80端口\nHTTPS服务用443端口\nFTP服务用21端口\n使用HTTP协议访问一个IP，要同时提供IP和端口号，平常没填是因为浏览器默认帮你加了")]),t._v(" "),a("h3",{attrs:{id:"_4-node-js服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-node-js服务器","aria-hidden":"true"}},[t._v("#")]),t._v(" 4.Node.js服务器")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://ws1.sinaimg.cn/large/8660d1bbly1g0mgwiijrtj20rw0ij41z.jpg",alt:""}})]),t._v(" "),a("p",[t._v("进入服务器所在文件夹输入\n"),a("code",[t._v("node server.js 1024")]),t._v("服务器开始监听，使用1024端口\n["),a("img",{attrs:{src:"https://ws1.sinaimg.cn/large/8660d1bbly1g0mgxihf0xj20i706f43r.jpg",alt:"开始监听服务器"}})]),t._v(" "),a("p",[t._v("在另一个 窗口输入\n"),a("code",[t._v("curl -s -v -- http://localhost:1024")]),t._v("\n访问服务器的index页面，返回的是请求信息、响应信息和下载内容。\n"),a("img",{attrs:{src:"https://ws1.sinaimg.cn/large/8660d1bbly1g0mgyjju22j20jj0attfy.jpg",alt:"在终端访问服务器"}})]),t._v(" "),a("p",[t._v("在浏览器中访问则直接显示index页面加上css和js效果")]),t._v(" "),a("p",[t._v("一般情况下/代表index，同时在index里引用了css和js文件，所以出现了三个路径\n["),a("img",{attrs:{src:"https://ws1.sinaimg.cn/large/8660d1bbly1g0mgzd2jcwj20f20dh0tk.jpg",alt:"在浏览器中访问"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://ws1.sinaimg.cn/large/8660d1bbly1g0mh02s5nwj20ja087myl.jpg",alt:"服务器中显示的内容"}})])])},[],!1,null,null,null);r.default=s.exports}}]);