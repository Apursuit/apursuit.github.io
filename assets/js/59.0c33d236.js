(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{421:function(s,e,a){"use strict";a.r(e);var t=a(7),n=Object(t.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"centos不显示ipv4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#centos不显示ipv4"}},[s._v("#")]),s._v(" centos不显示ipv4")]),s._v(" "),e("h2",{attrs:{id:"问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[s._v("#")]),s._v(" 问题")]),s._v(" "),e("p",[s._v("在使用centos虚拟机过程搭建MC服务器时，ip等命令不显示ipv4地址")]),s._v(" "),e("h2",{attrs:{id:"解决"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决"}},[s._v("#")]),s._v(" 解决")]),s._v(" "),e("p",[s._v("到/etc/sysconfig/network-scripts目录下修改配置文件")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /etc/sysconfig/network-scripts\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" ifcfg-ens33\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("将最后的ONBOOT=no改为ONEBOOT=yes")]),s._v(" "),e("p",[s._v("重启")]),s._v(" "),e("h2",{attrs:{id:"域名无法解析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#域名无法解析"}},[s._v("#")]),s._v(" 域名无法解析")]),s._v(" "),e("p",[s._v("问题描述：centos可以ping通ip，无法ping通域名问题")]),s._v(" "),e("p",[s._v("解决方案：")]),s._v(" "),e("p",[s._v("修改"),e("code",[s._v("/etc/resolv.conf")]),s._v("文件，添加nameserver dns服务器")]),s._v(" "),e("p",[s._v("谷歌、cloudflare、阿里云、腾讯dns")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Generated by NetworkManager")]),s._v("\nsearch localdomain\nnameserver "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.8")]),s._v(".8.8\nnameserver "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.8")]),s._v(".4.4\nnameserver "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v(".1.1\nnameserver "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v(".0.1\nnameserver "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("223.5")]),s._v(".5.5\nnameserver "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("223.6")]),s._v(".6.6\nnameserver "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("114.114")]),s._v(".114.114\nnameserver "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("114.114")]),s._v(".115.115\nnameserver "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("119.29")]),s._v(".29.29\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("h2",{attrs:{id:"centos-7-8-yum换源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#centos-7-8-yum换源"}},[s._v("#")]),s._v(" CentOS 7/8 yum换源")]),s._v(" "),e("p",[s._v("以下是一些常用的国内镜像源，你可以选择其中一个替换。")]),s._v(" "),e("ul",[e("li",[s._v("阿里云源")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-O")]),s._v(" /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("清华大学源")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-O")]),s._v(" /etc/yum.repos.d/CentOS-Base.repo https://mirrors.tuna.tsinghua.edu.cn/repo/Centos-7.repo\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("网易源")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-O")]),s._v(" /etc/yum.repos.d/CentOS-Base.repo http://mirrors.163.com/.help/CentOS7-Base-163.repo\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("中科大源")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-O")]),s._v(" /etc/yum.repos.d/CentOS-Base.repo http://mirrors.ustc.edu.cn/centos/7/os/x86_64/\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum clean all\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum makecache\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("参考、致谢：")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://blog.csdn.net/keepkind/article/details/128890618",target:"_blank",rel:"noopener noreferrer"}},[s._v("centos解决不显示ipv4"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/branwel/article/details/102907927",target:"_blank",rel:"noopener noreferrer"}},[s._v("解决Centos-7 修改DNS后还无法解析地址问题"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/yxyc666/article/details/141705431",target:"_blank",rel:"noopener noreferrer"}},[s._v("Centos7将yum源更换为国内源保姆级教程"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=n.exports}}]);