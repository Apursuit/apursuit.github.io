(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{389:function(s,a,t){"use strict";t.r(a);var p=t(7),e=Object(p.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"upload-labs-pass1-10"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upload-labs-pass1-10"}},[s._v("#")]),s._v(" upload-labs pass1-10")]),s._v(" "),a("h2",{attrs:{id:"注-在以下做题过程中-使用phpinfo-代替了一句话木马"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注-在以下做题过程中-使用phpinfo-代替了一句话木马"}},[s._v("#")]),s._v(" 注："),a("strong",[s._v("在以下做题过程中，使用phpinfo()代替了一句话木马")])]),s._v(" "),a("h2",{attrs:{id:"搭建uploadlabs环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#搭建uploadlabs环境"}},[s._v("#")]),s._v(" 搭建uploadlabs环境")]),s._v(" "),a("p",[s._v("项目地址："),a("a",{attrs:{href:"https://github.com/c0ny1/upload-labs",target:"_blank",rel:"noopener noreferrer"}},[s._v("upload-labs"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("下载zip文件，解压放在"),a("a",{attrs:{href:"https://www.xp.cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("phpstudy"),a("OutboundLink")],1),s._v("的WWW目录下，启动apache，即可在浏览器通过localhost访问打靶")]),s._v(" "),a("p",[s._v("我使用的版本比较老一些，需要自取"),a("a",{attrs:{href:"https://github.com/Apursuit/upload-labs",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/Apursuit/upload-labs"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("该文章参考了"),a("a",{attrs:{href:"https://www.cnblogs.com/chu-jian/p/15515770.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.cnblogs.com/chu-jian/p/15515770.html"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"pass-01-前端js验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pass-01-前端js验证"}},[s._v("#")]),s._v(" pass-01  前端js验证")]),s._v(" "),a("p",[s._v("查看源码，只有前端验证")]),s._v(" "),a("ul",[a("li",[s._v("禁用js绕过验证")]),s._v(" "),a("li",[s._v("bp抓包，修改文件名绕过")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://the0n3.top/medias/upload01-10/1-01.jpg",alt:"源码"}})]),s._v(" "),a("p",[s._v("可以使用禁用javascript脚本的插件或者浏览器开发者工具里自带功能，我使用扩展插件禁用js")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://the0n3.top/medias/upload01-10/1-02.jpg",alt:"禁用js"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://the0n3.top/medias/upload01-10/1-04.jpg",alt:"复制图片路径"}}),s._v("\n禁用js，成功上传文件，右键复制图片上传路径，访问文件，php语句成功解析(后续得到的此php语句解析成功的图片省略)")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://the0n3.top/medias/upload01-10/1-03.jpg",alt:"成功解析"}})]),s._v(" "),a("p",[s._v("通过bp修改文件名的方法,将带有php语句的图片类型文件名修改为filename.php，否则图片文件是不能正确解析的")]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[s._v('------WebKitFormBoundaryiikU2gD9AZcDwcnm\nContent-Disposition: form-data; name="upload_file"; filename="1.php"     # 修改此处文件名\nContent-Type: application/octet-stream\n\n'),a("span",{pre:!0,attrs:{class:"token prolog"}},[s._v("<?php phpinfo();?>")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"pass-02-后端mime验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pass-02-后端mime验证"}},[s._v("#")]),s._v(" pass-02  后端MIME验证")]),s._v(" "),a("p",[s._v("查看源码，服务器端会检测下文件类型")]),s._v(" "),a("blockquote",[a("p",[s._v("[!NOTE]\n文件类型和 MIME 类型是密切相关的，文件类型可以通过文件扩展名来推断，而 MIME 类型通常用于指定网络传输中的数据类型。")])]),s._v(" "),a("p",[s._v("bp抓包，把要上传的php文件MIME类型修改为允许的类型上传")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://the0n3.top/medias/upload01-10/2-01.png",alt:"2"}})]),s._v(" "),a("p",[s._v("右键复制'图片'地址，访问")]),s._v(" "),a("h2",{attrs:{id:"pass-03-历史兼容性问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pass-03-历史兼容性问题"}},[s._v("#")]),s._v(" pass-03  历史兼容性问题")]),s._v(" "),a("p",[s._v("没有过滤php2,php3,php5,phtml等扩展名的php文件，成功上传后，右键复制'图片'地址，访问")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://the0n3.top/medias/upload01-10/3-01.jpg",alt:"php3"}})]),s._v(" "),a("p",[s._v("如果不能解析，查看apache配置文件里是否有这些扩展名,没有的话，查下资料添加进去")]),s._v(" "),a("h2",{attrs:{id:"pass-04-apahce的配置-htacess文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pass-04-apahce的配置-htacess文件"}},[s._v("#")]),s._v(" pass-04  apahce的配置.htacess文件")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://joner11234.github.io/article/592e5fba.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考文章"),a("OutboundLink")],1)]),s._v(" "),a("blockquote",[a("p",[s._v('".htaccess" 文件是 Apache Web 服务器特有的文件，用于配置服务器的行为。通过 ".htaccess" 文件，用户可以在特定目录中覆盖 Apache 服务器的全局配置，包括重定向、认证、缓存控制等。')])]),s._v(" "),a("p",[s._v("写法一：")]),s._v(" "),a("div",{staticClass:"language-htacess line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('# FileMatch 参数即为文件名的正则匹配\n<FilesMatch "png">\n  SetHandler application/x-httpd-php\n</FilesMatch>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("图片马：")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[s._v("# 1.png\n"),a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("phpinfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("?>")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("写法二：")]),s._v(" "),a("div",{staticClass:"language-htacess line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("AddType application/x-httpd-php .png\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("图片马：")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[s._v("# 1.png\n"),a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("phpinfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("?>")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("查看源码，它将php文件的各种扩展名完全限制了，但是没有限制.htaccess文件，可以借助.htaccess文件将其他文件类型作为php文件解析达到目的")]),s._v(" "),a("p",[s._v("创建文件名为.htaccess文件并写入以下内容，上传")]),s._v(" "),a("div",{staticClass:"language-htaccess line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("AddType application/x-httpd-php .png\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("再上传写有php语句的图片文件，成功上传后，访问文件能够解析")]),s._v(" "),a("p",[a("strong",[s._v("在pass05-10题目中，会规律的出现一些漏洞方法，可以在bp中修改绕过验证，他们利用了windows对文件名的处理特性，如果使用linux平台环境，则不能正确解析，")])]),s._v(" "),a("ol",[a("li",[a("p",[s._v("扩展名大小写不敏感")])]),s._v(" "),a("li",[a("p",[s._v("自动去除末尾的点")])]),s._v(" "),a("li",[a("p",[s._v("自动去除首尾的空")])]),s._v(" "),a("li",[a("p",[s._v("去除::$data")])]),s._v(" "),a("li",[a("p",[s._v("过滤php扩展名")]),s._v(" "),a("p",[s._v("其中1，2，3在windows环境下测试，将文件名修改到123的格式时，会无视修改，4文件不允许有:")]),s._v(" "),a("p",[s._v("关于其中的::$data的作用，参考了这篇文章"),a("a",{attrs:{href:"https://blog.csdn.net/weixin_44032232/article/details/109005766",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://blog.csdn.net/weixin_44032232/article/details/109005766"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("windows系统中，在文件名中加入::$data可以避免检测扩展名")])])]),s._v(" "),a("h2",{attrs:{id:"pass-05-windows特性-大小写不敏感"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pass-05-windows特性-大小写不敏感"}},[s._v("#")]),s._v(" pass-05  windows特性--大小写不敏感")]),s._v(" "),a("p",[s._v("源码中没有对扩展名大小写做要求，使用bp抓包修改扩展名大小写绕过,只要不在源码限制里都行")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://the0n3.top/medias/upload01-10/5-01.png",alt:"5-01"}})]),s._v(" "),a("p",[s._v("上传后，复制图片地址，访问")]),s._v(" "),a("h2",{attrs:{id:"pass-06-windows特性-自动去除首尾的空格"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pass-06-windows特性-自动去除首尾的空格"}},[s._v("#")]),s._v(" pass-06  windows特性--自动去除首尾的空格")]),s._v(" "),a("p",[s._v("查看源码，没有进行首尾去空的操作")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://the0n3.top/medias/upload01-10/6-01.png",alt:"06"}})]),s._v(" "),a("p",[s._v("使用bp抓包，在文件名末尾添加空格，成功上传，复制地址访问")]),s._v(" "),a("h2",{attrs:{id:"pass-07-windows特性-自动去除末尾的点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pass-07-windows特性-自动去除末尾的点"}},[s._v("#")]),s._v(" pass-07 windows特性--自动去除末尾的点")]),s._v(" "),a("p",[s._v("查看源码，没有去除文件名末尾的点")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://the0n3.top/medias/upload01-10/7-01.png",alt:"07"}})]),s._v(" "),a("p",[s._v("使用bp抓包，在文件名末尾添加点，成功上传，复制地址访问")]),s._v(" "),a("h2",{attrs:{id:"pass-08-windows特性-去除-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pass-08-windows特性-去除-data"}},[s._v("#")]),s._v(" pass-08  windows特性--去除::$data")]),s._v(" "),a("p",[s._v("查看源码，没有去除末尾的::$data")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://the0n3.top/medias/upload01-10/8-01.png",alt:"08"}})]),s._v(" "),a("p",[s._v("使用bp抓包，在文件名末尾添加::$data，成功上传，复制地址访问")]),s._v(" "),a("h2",{attrs:{id:"pass-09"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pass-09"}},[s._v("#")]),s._v(" pass-09")]),s._v(" "),a("p",[s._v("查看源码，发现几个漏洞同时修复，但是只操作一次，可以把几个漏洞连在一起，"),a("strong",[s._v("1.php. .")])]),s._v(" "),a("p",[s._v("这样它先去除末尾的点，将这个点后的内容(什么都没有)转化为小写，再去除::$data作用，最后首尾去空，得到了1.php.")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://the0n3.top/medias/upload01-10/9-01.png",alt:"9-01"}})]),s._v(" "),a("p",[s._v("其中，末尾的点会被系统忽略")]),s._v(" "),a("p",[s._v("成功上传，复制地址，访问")]),s._v(" "),a("h2",{attrs:{id:"pass-10-双写绕过"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pass-10-双写绕过"}},[s._v("#")]),s._v(" pass-10  双写绕过")]),s._v(" "),a("p",[s._v("看源码，定义了很多格式的扩展名，如果上传的文件中有这些扩展名，过滤掉它们。注意到，只过滤一次，替换为空，通过双写构造绕过")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://the0n3.top/medias/upload01-10/10-01.png",alt:"10-01"}})]),s._v(" "),a("p",[s._v("所有可以通过双写扩展名，并不是规则的双写，将一个php中插入php，避免直接双写都被过滤掉，双写得到一个例如pphphp，删除第一个php时，剩下的p和hp组成php扩展名")]),s._v(" "),a("p",[s._v("成功上传，复制图片地址，访问")])])}),[],!1,null,null,null);a.default=e.exports}}]);