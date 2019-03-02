(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{393:function(v,_,e){"use strict";e.r(_);var o=e(19),d=Object(o.a)({},function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("hr"),v._v(" "),e("h5",{attrs:{id:"正则表达式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式","aria-hidden":"true"}},[v._v("#")]),v._v(" 正则表达式")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://ws1.sinaimg.cn/large/8660d1bbly1g0mdselqr0j207705egle.jpg",alt:""}})]),v._v(" "),e("h4",{attrs:{id:"基本元字符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本元字符","aria-hidden":"true"}},[v._v("#")]),v._v(" 基本元字符")]),v._v(" "),e("ol",[e("li",[e("code",[v._v(".")]),v._v(" ： 匹配除了换行符之外的任何单个字符")]),v._v(" "),e("li",[e("code",[v._v("\\")]),v._v(" ： 在非特殊字符之前的反斜杠表示下一个字符是特殊的，不能从字面上解释。例如，没有前\\的'b'通常匹配小写'b'，无论它们出现在哪里。如果加了'',这个字符变成了一个特殊意义的字符，反斜杠也可以将其后的特殊字符，转义为字面量。例如，模式 "),e("code",[v._v("/a*/")]),v._v(" 代表会匹配 0 个或者多个 a。相反，模式 "),e("code",[v._v("/a\\*/")]),v._v(" 将 '*' 的特殊性移除，从而可以匹配像 "),e("code",[v._v('"a*"')]),v._v(" 这样的字符串。")]),v._v(" "),e("li",[e("code",[v._v("|")]),v._v(" ： 逻辑或操作符")]),v._v(" "),e("li",[e("code",[v._v("[]")]),v._v(" ：定义一个字符集合，匹配字符集合中的一个字符，在字符集合里面像 "),e("code",[v._v(".")]),v._v("，"),e("code",[v._v("\\")]),v._v("这些字符都表示其本身")]),v._v(" "),e("li",[e("code",[v._v("[^]")]),v._v("：对上面一个集合取非")]),v._v(" "),e("li",[e("code",[v._v("-")]),v._v(" ：定义一个区间，例如"),e("code",[v._v("[A-Z]")]),v._v("，其首尾字符在 ASCII 字符集里面")])]),v._v(" "),e("h4",{attrs:{id:"数量元字符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数量元字符","aria-hidden":"true"}},[v._v("#")]),v._v(" 数量元字符")]),v._v(" "),e("ol",[e("li",[e("code",[v._v("{m,n}")]),v._v(" ：匹配前面一个字符至少 m 次至多 n 次重复，还有"),e("code",[v._v("{m}")]),v._v("表示匹配 m 次，"),e("code",[v._v("{m,}")]),v._v("表示至少 m 次")]),v._v(" "),e("li",[e("code",[v._v("+")]),v._v(" ： 匹配前面一个表达式一次或者多次，相当于 "),e("code",[v._v("{1,}")]),v._v("，记忆方式追加(+)，起码得有一次")]),v._v(" "),e("li",[e("code",[v._v("*")]),v._v(" ： 匹配前面一个表达式零次或者多次，相当于 "),e("code",[v._v("{0,}")]),v._v("，记忆方式乘法(*)，可以一次都没有")]),v._v(" "),e("li",[e("code",[v._v("?")]),v._v(" ： 单独使用匹配前面一个表达式零次或者一次，相当于 "),e("code",[v._v("{0,1}")]),v._v("，记忆方式，有吗？，有(1)或者没有(1)，如果跟在任何量词"),e("code",[v._v("*")]),v._v(","),e("code",[v._v("+")]),v._v(","),e("code",[v._v("?")]),v._v(","),e("code",[v._v("{}")]),v._v('后面的时候将会使量词变为非贪婪模式（尽量匹配少的字符），默认是使用贪婪模式。比如对 "123abc" 应用 '),e("code",[v._v("/\\d+/")]),v._v(' 将会返回 "123"，如果使用 '),e("code",[v._v("/\\d+?/")]),v._v(',那么就只会匹配到 "1"。')])]),v._v(" "),e("h4",{attrs:{id:"位置元字符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#位置元字符","aria-hidden":"true"}},[v._v("#")]),v._v(" 位置元字符")]),v._v(" "),e("ol",[e("li",[e("code",[v._v("^")]),v._v(" ： 单独使用匹配表达式的开始")]),v._v(" "),e("li",[v._v("$ ： 匹配表达式的结束")]),v._v(" "),e("li",[e("code",[v._v("\\b")]),v._v("：匹配单词边界")]),v._v(" "),e("li",[e("code",[v._v("\\B")]),v._v("：匹配非单词边界")]),v._v(" "),e("li",[e("code",[v._v("(?=p)")]),v._v("：匹配 p 前面的位置")]),v._v(" "),e("li",[e("code",[v._v("(?!p)")]),v._v("：匹配不是 p 前面的位置")])]),v._v(" "),e("h4",{attrs:{id:"特殊元字符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#特殊元字符","aria-hidden":"true"}},[v._v("#")]),v._v(" 特殊元字符")]),v._v(" "),e("ol",[e("li",[e("code",[v._v("\\d")]),v._v("："),e("code",[v._v("[0-9]")]),v._v("，表示一位数字，记忆方式 digit")]),v._v(" "),e("li",[e("code",[v._v("\\D")]),v._v("："),e("code",[v._v("[^0-9]")]),v._v("，表示一位非数字")]),v._v(" "),e("li",[e("code",[v._v("\\s")]),v._v("："),e("code",[v._v("[\\t\\v\\n\\r\\f]")]),v._v("，表示空白符，包括空格，水平制表符（"),e("code",[v._v("\\t")]),v._v("），垂直制表符（"),e("code",[v._v("\\v")]),v._v("），换行符（"),e("code",[v._v("\\n")]),v._v("），回车符（"),e("code",[v._v("\\r")]),v._v("），换页符（"),e("code",[v._v("\\f")]),v._v("），记忆方式 space character")]),v._v(" "),e("li",[e("code",[v._v("\\S")]),v._v("："),e("code",[v._v("[^\\t\\v\\n\\r\\f]")]),v._v("，表示非空白符")]),v._v(" "),e("li",[e("code",[v._v("\\w")]),v._v("："),e("code",[v._v("[0-9a-zA-Z]")]),v._v("，表示数字大小写字母和下划线，记忆方式 word")]),v._v(" "),e("li",[e("code",[v._v("\\W")]),v._v("："),e("code",[v._v("[^0-9a-zA-Z]")]),v._v("，表示非单词字符")])]),v._v(" "),e("h4",{attrs:{id:"标志字符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#标志字符","aria-hidden":"true"}},[v._v("#")]),v._v(" 标志字符")]),v._v(" "),e("ol",[e("li",[e("code",[v._v("g")]),v._v(" : 全局搜索 记忆方式global")]),v._v(" "),e("li",[e("code",[v._v("i")]),v._v(" ：不区分大小写 记忆方式 ignore")]),v._v(" "),e("li",[e("code",[v._v("m")]),v._v(" ：多行搜索")])]),v._v(" "),e("p",[e("code",[v._v("/.+yize/g")]),v._v(" 某yize")]),v._v(" "),e("p",[e("code",[v._v("/peng.+/g")]),v._v(" peng某")]),v._v(" "),e("p",[e("code",[v._v("/./g")]),v._v(" 匹配所有字符")]),v._v(" "),e("p",[e("code",[v._v("/../g")]),v._v(" 把字符两个两个的匹配")]),v._v(" "),e("p",[e("code",[v._v("/\\w/g")]),v._v(" 匹配所有0-9，a-z，A-Z")]),v._v(" "),e("p",[e("code",[v._v("/\\W/g")]),v._v(" 匹配除0-9，a-z，A-Z以外的字符")]),v._v(" "),e("p",[e("code",[v._v("/\\d/g")]),v._v(" 匹配数字")]),v._v(" "),e("p",[e("code",[v._v("/\\d\\.\\d/g")]),v._v(" 匹配有一位小数的数字 例：1.1")]),v._v(" "),e("p",[e("code",[v._v("/\\D/g")]),v._v(" 匹配除数字以外的字符")]),v._v(" "),e("p",[e("code",[v._v("/\\s/g")]),v._v(" 匹配空格、TAB、断行")]),v._v(" "),e("p",[e("code",[v._v("/\\S/g")]),v._v(" 匹配除上面之外的字符")]),v._v(" "),e("p",[e("code",[v._v("/[abc]/g")]),v._v(" 匹配a、b、c（一个一个地匹配）")]),v._v(" "),e("p",[e("code",[v._v("/abc/g")]),v._v(" 匹配abc三个连在一起")]),v._v(" "),e("p",[e("code",[v._v("/[a-k]/g")]),v._v(" 匹配a到k（一个一个匹配）")]),v._v(" "),e("p",[e("code",[v._v("/[\\u4e00-\\u9fa5]/g")]),v._v(" 匹配每个中文字（一个一个匹配）")]),v._v(" "),e("p",[e("code",[v._v("/[yY][oO]+/g")]),v._v(" 匹配yo、yoooo、yOOOOO、Yo、Yooo、\nYO或YOOOO，+号表示出现一次或多次")]),v._v(" "),e("p",[e("code",[v._v("/[yY][oO]+[!~\\.]*/g")]),v._v(" 匹配yo!、yo.、yo~~、yooo~~~~、Yoo!!，*\n号代表出现0次或多次")]),v._v(" "),e("p",[e("code",[v._v("/[yY][oO]+p?[!~\\.]*/g")]),v._v(" 匹配yop!，?号匹配0个或1个")]),v._v(" "),e("p",[e("code",[v._v("/yo{2,4}/g")]),v._v(" 只能匹配yo后的2～4个o")]),v._v(" "),e("p",[e("code",[v._v("/yo{2,4}\\b/g")]),v._v(" 截断了大于4个o的yo")]),v._v(" "),e("p",[e("code",[v._v("/yo{5}/g")]),v._v(" 匹配yooooo")]),v._v(" "),e("p",[e("code",[v._v("/yo{2,}/g")]),v._v(" 匹配yo后o大于等于2的")]),v._v(" "),e("p",[e("code",[v._v("1(?:37|39|82|83)\\d{4}(\\d{4})")]),v._v(" 括号里加?:表示仅匹配，不捕获")]),v._v(" "),e("p",[v._v("具体可以看："),e("a",{attrs:{href:"https://juejin.im/post/5b040b456fb9a07a9c048e0b",target:"_blank",rel:"noopener noreferrer"}},[v._v("掘金文章"),e("OutboundLink")],1)])])},[],!1,null,null,null);_.default=d.exports}}]);