(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{445:function(s,t,a){"use strict";a.r(t);var n=a(7),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"极简云盘"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#极简云盘"}},[s._v("#")]),s._v(" 极简云盘")]),s._v(" "),t("p",[s._v("一个php网盘管理项目(nas)，已鸽。")]),s._v(" "),t("p",[s._v("编写语言：PHP")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("贡献者")]),s._v(" "),t("th",[s._v("我")]),s._v(" "),t("th",[s._v("chatGPT")])])]),s._v(" "),t("tbody",[t("tr",[t("td"),s._v(" "),t("td",[s._v("5%")]),s._v(" "),t("td",[s._v("95%")])])])]),s._v(" "),t("p",[s._v("适用场景：局域网")]),s._v(" "),t("p",[s._v("测试：当前仅测试了linux")]),s._v(" "),t("p",[s._v("漏洞及安全问题：未知，很可能存在漏洞，建议局域网下自己玩玩")]),s._v(" "),t("p",[s._v("其他：局域网共享文件夹似乎比这个方案好一些？🤐")]),s._v(" "),t("p",[s._v("想法：一个二手随身wifi刷armbian，挂个机械盘(极简nas??)")]),s._v(" "),t("h2",{attrs:{id:"使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),t("p",[s._v("项目地址："),t("a",{attrs:{href:"https://github.com/Apursuit/CloudPan",target:"_blank",rel:"noopener noreferrer"}},[s._v("【极简云盘】"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("把html里的文件复制到/var/www/html目录下")]),s._v(" "),t("p",[s._v("创建盘根目录/var/www/pan，如果把其他目录作为盘根目录，在配置文件里修改")]),s._v(" "),t("p",[s._v("权限相关：")]),s._v(" "),t("p",[s._v("高权限战神，拉满")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v(" www-data:www-data /var/www/pan\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("755")]),s._v(" /var/www/pan\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("现在www-data用户可以访问文件，上传文件，创建文件夹了")]),s._v(" "),t("p",[s._v("在盘根目录下，创建img，mp3，video等文件夹，否则在线音乐，在线图片，在线视频功能无法正常使用")]),s._v(" "),t("h2",{attrs:{id:"功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#功能"}},[s._v("#")]),s._v(" 功能")]),s._v(" "),t("p",[s._v("现在有以下功能")]),s._v(" "),t("ul",[t("li",[s._v("在线下载")]),s._v(" "),t("li",[s._v("切换主题")]),s._v(" "),t("li",[s._v("在线播放音乐")]),s._v(" "),t("li",[s._v("在线预览图片")]),s._v(" "),t("li",[s._v("视频在线播放")])]),s._v(" "),t("p",[s._v("需登录管理员适用以下功能")]),s._v(" "),t("ul",[t("li",[s._v("登录验证")]),s._v(" "),t("li",[s._v("文件上传")]),s._v(" "),t("li",[s._v("新建文件夹")])]),s._v(" "),t("p",[s._v("删除文件及文件夹功能没有写，需要管理员在服务端自行删除")]),s._v(" "),t("h2",{attrs:{id:"效果图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#效果图"}},[s._v("#")]),s._v(" 效果图")]),s._v(" "),t("p",[s._v("桌面端效果图")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://the0n3.top/medias/cloudpan/index.png",alt:"首页"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://the0n3.top/medias/cloudpan/dark.png",alt:"主题"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://the0n3.top/medias/cloudpan/login.png",alt:"登录"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://the0n3.top/medias/cloudpan/music.png",alt:"在线音乐"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://the0n3.top/medias/cloudpan/photos.png",alt:"预览图片"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://the0n3.top/medias/cloudpan/video.png",alt:"在线视频"}})]),s._v(" "),t("p",[s._v("移动端效果图")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://the0n3.top/medias/cloudpan/index.jpg",alt:"首页"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://the0n3.top/medias/cloudpan/music.jpg",alt:"在线音乐"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://the0n3.top/medias/cloudpan/img.jpg",alt:"预览图片"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://the0n3.top/medias/cloudpan/video.jpg",alt:"在线视频"}})]),s._v(" "),t("h2",{attrs:{id:"配置文件config-php"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置文件config-php"}},[s._v("#")]),s._v(" 配置文件config.php")]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token php language-php"}},[t("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更多图标，请自行到https://www.iconfinder.com/search/icons/related/7077519")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$panTitle")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"极简盘"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$icons")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'txt'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'icons/txt_icon.png'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'php'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'icons/php_icon.png'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'java'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'icons/java_icon.png'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'mp4'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'icons/mp4_icon.png'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'xml'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'icons/xml_icon.png'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'pdf'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'icons/pdf_icon.png'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'doc'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'icons/word_icon.png'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'docx'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'icons/word_icon.png'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'mp3'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'icons/mp3_icon.png'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'png'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'icons/png_icon.png'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'jpg'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'icons/jpg_icon.png'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'md'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'icons/md_icon.png'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'zip'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'icons/zip_icon.png'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'html'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'icons/html_icon.png'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'folder'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'icons/folder_icon.png'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 网盘根目录，建议绝对路径。并且不要放在web目录下，否则可能造成文件上传等漏洞")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁止web父级目录直接作为根目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$panDir")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"/var/www/pan"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取音乐目录MP3下的所有MP3文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$musicDir")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$panDir")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'/mp3/'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取视频目录video下的所有视频文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 此处取消注释会报错")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# $videoDir = $panDir . '/video/';")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# admin超管账号，默认admin password，看到这里，请手动生成你的用户名和密码，换为md5摘要，不要明文存储")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$username")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"admin"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$password")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"password"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$predefinedMd5Hash")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("md5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$username")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('":"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$password")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置php允许上传文件的最大大小")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# php.ini相关配置已通过user.ini设置上限为1GB")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置nginx允许上传文件的最大大小")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 需要在nginx配置文件的server或location中添加下面配置，使能够上传1M大小以上的文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nginx配置文件常见位置：/etc/nginx/sites-available/default")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# client_max_body_size 1024M;")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 路径处理")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$dir")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("isset")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_GET")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'dir'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("urldecode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_GET")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'dir'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$fullPath")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("realpath")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$panDir")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'/'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$dir")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$fullPath")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword type-declaration"}},[s._v("false")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("strpos")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$fullPath")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$panDir")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$rootDir")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$panDir")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$rootDir")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$fullPath")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br")])]),t("h2",{attrs:{id:"样式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#样式"}},[s._v("#")]),s._v(" 样式")]),s._v(" "),t("p",[s._v("所有样式都堆在了styles/index.css里，依托石山。有...有兴趣可以试着修改。")]),s._v(" "),t("h2",{attrs:{id:"更新日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新日志"}},[s._v("#")]),s._v(" 更新日志")]),s._v(" "),t("ul",[t("li",[s._v("2024-09-02：去除在线视频需要登录的限制。v1.0.0版本，功能基础的网盘，满足在线影音")]),s._v(" "),t("li",[s._v("2024-09-01：修复子目录文件无法下载")]),s._v(" "),t("li",[s._v("2024-08-30：添加.user.ini文件，免除手动修改php.ini的麻烦")]),s._v(" "),t("li",[s._v("2024-08-30：上传功能，登录功能，视频播放功能，音乐播放功能，图片预览功能，管理员功能")])])])}),[],!1,null,null,null);t.default=r.exports}}]);