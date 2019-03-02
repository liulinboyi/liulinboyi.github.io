(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{382:function(t,i,e){"use strict";e.r(i);var a=e(16),r=Object(a.a)({},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("hr"),t._v(" "),e("h4",{attrs:{id:"首先下载git-git"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#首先下载git-git","aria-hidden":"true"}},[t._v("#")]),t._v(" 首先下载Git "),e("a",{attrs:{href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"一-配置github"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-配置github","aria-hidden":"true"}},[t._v("#")]),t._v(" 一. 配置GitHub")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"https://github.com/settings/keys",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击New SSH key"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("title随便写")]),t._v(" "),e("li",[t._v("终端运行"),e("code",[t._v('ssh-keygen -t rsa -b 4096 -C "邮箱"')])]),t._v(" "),e("li",[t._v("运行 "),e("code",[t._v("cat ~/.ssh/id_rsa.pub")]),t._v("，得到一串东西，复制粘贴到key里，点击 Add SSH key")]),t._v(" "),e("li",[t._v("运行 "),e("code",[t._v("ssh -T git@github.com")])])]),t._v(" "),e("h3",{attrs:{id:"二-配置git"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-配置git","aria-hidden":"true"}},[t._v("#")]),t._v(" 二. 配置git")]),t._v(" "),e("p",[t._v("依次运行\n"),e("code",[t._v("git config --global user.name “英文名”")]),t._v(" "),e("code",[t._v("git config --global user.email “邮箱”")]),t._v(" "),e("code",[t._v("git config --global push.default matching")]),t._v(" "),e("code",[t._v("git config --global core.quotepath false")]),t._v(" "),e("code",[t._v('git config --global core.editor "vim"')])]),t._v(" "),e("h3",{attrs:{id:"三-使用git的三种方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三-使用git的三种方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 三. 使用git的三种方法")]),t._v(" "),e("h6",{attrs:{id:"_1-建立本地仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-建立本地仓库","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 建立本地仓库")]),t._v(" "),e("p",[t._v("a. 在桌面创建git-demo目录"),e("code",[t._v("mkdir git-demo")]),t._v("\nb. "),e("code",[t._v("cd git-demo")]),t._v("\nc. "),e("code",[t._v("git init")]),t._v("\nd. 在git-demo目录里运行"),e("code",[t._v("touch index.html")]),t._v("\ne. 运行 "),e("code",[t._v("git status -sb")]),t._v(" 可以看到文件前面有 ??\nf. 运行"),e("code",[t._v("git add .")]),t._v("\ng. "),e("code",[t._v('git commit -m "第一次提交"')]),t._v("\nh. "),e("code",[t._v("git pull")]),t._v("先把github上的文件拉下来（一般可忽略）\ni. "),e("code",[t._v("git push")]),t._v("推上去")]),t._v(" "),e("h6",{attrs:{id:"_2-将本地仓库上传到github"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-将本地仓库上传到github","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 将本地仓库上传到github")]),t._v(" "),e("p",[t._v("a. 先确保有本地仓库，再在github上创建一个仓库\nb. name和电脑上的目录名一样，其他东西不动，创建\nc. 点击SSH地址！然后复制页面上这行代码运行"),e("code",[t._v("git remote add origin git@github.com:xxxxxxxxx/git-demo-1.git")]),t._v("\nd. 复制第二行 "),e("code",[t._v("git push -u origin master")]),t._v("运行")]),t._v(" "),e("h6",{attrs:{id:"_3-在github上创建仓库并下载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-在github上创建仓库并下载","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. 在github上创建仓库并下载")]),t._v(" "),e("p",[t._v("a. 创建时勾选initialize this … ，Add .gitignore 选node，Add a license 选MIT License\nb. 进入仓库点右上角绿色clone or download\nc. 点 use SSH，并复制下面的地址\nd. 终端进入桌面运行"),e("code",[t._v("git clone 地址")]),t._v("，于是将仓库下到了电脑上\ne. 进入文件夹"),e("code",[t._v("git init")]),t._v("，初始化本地仓库")]),t._v(" "),e("h3",{attrs:{id:"四-上传更新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四-上传更新","aria-hidden":"true"}},[t._v("#")]),t._v(" 四.上传更新")]),t._v(" "),e("p",[t._v("1.git add .\n2.git commi -m “第一次更新”\n3.git pull（将网上更新的文件拉到电脑上）\n4.git push（上传）")])])},[],!1,null,null,null);i.default=r.exports}}]);