(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{405:function(e,s,a){"use strict";a.r(s);var r=a(19),t=Object(r.a)({},function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("hr"),e._v(" "),a("h1",{attrs:{id:"记一次使用vuepress博客踩的坑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#记一次使用vuepress博客踩的坑","aria-hidden":"true"}},[e._v("#")]),e._v(" 记一次使用Vuepress博客踩的坑")]),e._v(" "),a("p",[e._v("使用的是"),a("a",{attrs:{href:"https://github.com/meteorlxy/vuepress-theme-meteorlxy",target:"_blank",rel:"noopener noreferrer"}},[e._v("meteorlxy"),a("OutboundLink")],1),e._v("博客主题")]),e._v(" "),a("p",[e._v("主题官网是："),a("a",{attrs:{href:"https://vuepress-theme-meteorlxy.meteorlxy.cn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("官网"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("首先根据官网的方法")]),e._v(" "),a("h3",{attrs:{id:"安装主题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装主题","aria-hidden":"true"}},[e._v("#")]),e._v(" 安装主题")]),e._v(" "),a("p",[e._v("创建一个新的项目"),a("code",[e._v("my-blog")]),e._v("：")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" my-blog\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cd")]),e._v(" my-blog\n")])])]),a("p",[e._v("安装"),a("code",[e._v("vuepress")]),e._v("状语从句："),a("code",[e._v("vuepress-theme-meteorlxy")]),e._v("，添加注意"),a("code",[e._v("next")]),e._v("标签安装"),a("code",[e._v("1.x")]),e._v("版本：")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" vuepress@next vuepress-theme-meteorlxy@next\n")])])]),a("p",[e._v("注意：")]),e._v(" "),a("p",[e._v("现在Vuepress 1.x还处于Alpha阶段，经常会发生改动，如果直接安装"),a("code",[e._v("@next")]),e._v("后使用主题出现问题的话，建议按照本主题的"),a("code",[e._v("peerDependencies")]),e._v("要求锁定对应的"),a("code",[e._v("vuepress")]),e._v("和相关包的版本号。例如：")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" \\\n  vuepress@1.0.0-alpha.35 \\\n  @vuepress/core@1.0.0-alpha.35 \\\n  @vuepress/markdown@1.0.0-alpha.35 \\\n  @vuepress/markdown-loader@1.0.0-alpha.35 \\\n  vuepress-theme-meteorlxy@1.0.0-alpha.13\n")])])]),a("p",[e._v("是的，你必须手动锁定所有相关包的版本号，因为Vuepress并没有锁定它们（这确实很不好）")]),e._v(" "),a("p",[e._v("其中 我是使用全局安装的 Vuepress 在这过程中还是有一些坑：")]),e._v(" "),a("p",[e._v("使用yarn 或者 cnpm 强制版本安装(就像上面注意写到的那样，由于目前是alpha版本必须要安装指定版本本才可以，正确使用)不会按照强制安装的版本来安装，比如主题作者提到的vuepress@1.0.0-alpha.35 以及 @vuepress/markdown@1.0.0-alpha.35 等。")]),e._v(" "),a("p",[e._v("即使使用强制版本安装 还是会 装上 当前时间最新版本 vuepress@1.0.0-alpha.40 这会出问题的。")]),e._v(" "),a("p",[e._v("目前我提供一种方法：")]),e._v(" "),a("p",[e._v("这个issues里有提到"),a("a",{attrs:{href:"https://github.com/Bloss/vuepress-theme-yubisaki-example/issues/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/Bloss/vuepress-theme-yubisaki-example/issues/1"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('workaround：\n\n"vuepress": "1.0.0-alpha.32",\n"@vuepress/core": "1.0.0-alpha.32"\n在项目根目录下更改并添加这两个版本，安装依赖之后:\n\ncd node_modules/vuepress, rm -rf node_modules, 并且将 vuepress 的依赖改为 @vuepress/core: 1.0.0-alpha.32，在 vuepress 目录下执行 npm install 重新安装依赖。\n\n回到项目根目录，npm run dev，跑起来了\n')])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("感谢回答，我的解决方法是：\n全局安装vuepress指定版本\ncnpm i vuepress@1.0.0-alpha.35 -g //这个不会直接安装指定版本还是会安装 1.0.0-alpha.40版本\n所以只能去全局安装根目录 我的全局安装目录是：C:\\Users\\小刘\\AppData\\Roaming\\npm\\node_modules\\vuepress\n然后按照您的方法rm -rf node_modules\n接着手动安装每一个依赖\n(cnpm install 还是会安装 1.0.0-alpha.40版本 所以只能曲线救国 手动安装指定版本了)\ncnpm i @vuepress/core@1.0.0-alpha.35 \ncnpm i @vuepress/theme-default@1.0.0-alpha.35\ncnpm i @cac@6.3.9\n最后按照您的方法\n回到项目根目录，npm run dev，跑起来了\n最后非常感谢您的回答！谢谢！\n")])])]),a("p",[e._v("就如以上方法所示，我就是这样解决的。")]),e._v(" "),a("p",[e._v("另外我所在的时间点来说，一定要安装vuepress-theme-meteorlxy@1.0.0-alpha.13这个版本，我尝试安装其他版本会报错~")])])},[],!1,null,null,null);s.default=t.exports}}]);