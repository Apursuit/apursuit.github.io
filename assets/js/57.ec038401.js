(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{419:function(s,a,t){"use strict";t.r(a);var n=t(7),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"转义字符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#转义字符"}},[s._v("#")]),s._v(" 转义字符")]),s._v(" "),a("blockquote",[a("p",[s._v("反斜杠可以改变紧随其后的字符的含义，或者用来表示一些特殊字符，例如换行符 \\n、制表符 \\t 等，当 \\ 用于转义时，它实际上是在告诉 "),a("strong",[s._v("shell 使用它后面那个字符的特殊含义（如果有的话），如果没有，则还将其视为普通字符")])])]),s._v(" "),a("p",[s._v("所以这一特性可以在CTF题目中绕过一些命令的黑名单过滤，从而使用RCE命令执行")]),s._v(" "),a("p",[s._v("例如：字符c、l都没有特殊含义，转义后还是命令本身，在终端里，"),a("code",[s._v("ta\\c f\\lag")]),s._v(" 会被解析为 "),a("code",[s._v("tac flag")]),s._v("，实现绕过")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("ta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("c f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("lag\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("具有特殊含义的字符")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("n：换行符。\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("t：水平制表符（Tab）。\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("r：回车符。\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("b：退格符。\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("a：警报（响铃）符。\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("f：换页符。\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("v：垂直制表符。\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("：字面意义上的反斜线 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("。\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("'：单引号字符。\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v('"：双引号字符。\n'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("?：问号字符。\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("：空字符（NULL 字符）。通常用于程序和脚本中表示字符串的结束。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);