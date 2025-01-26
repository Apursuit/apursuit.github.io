(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{428:function(s,a,t){"use strict";t.r(a);var e=t(7),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"git入门指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git入门指令"}},[s._v("#")]),s._v(" Git入门指令")]),s._v(" "),a("p",[s._v("::: Tip\n"),a("strong",[s._v("这是一个基于Github pages + vuepress的主题笔记(博客)，在搭建过程遇到了一些git的用法,具体由GPT生成，暂时记下")]),s._v("\n:::")]),s._v(" "),a("p",[s._v("注意：当多人/多台设备维护一个项目时，项目内个人环境不同，使用.gitignore文件让git忽略这些内容，避免导致其他设备拉取时，运行错误或不必要的问题")]),s._v(" "),a("h2",{attrs:{id:"以写一次博客常用操作为例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#以写一次博客常用操作为例"}},[s._v("#")]),s._v(" 以写一次博客常用操作为例")]),s._v(" "),a("h3",{attrs:{id:"初始化本地仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化本地仓库"}},[s._v("#")]),s._v(" 初始化本地仓库")]),s._v(" "),a("p",[s._v("新建一个文件夹，用来储存要克隆别人仓库的内容")]),s._v(" "),a("p",[s._v("初始化本地git仓库")]),s._v(" "),a("div",{staticClass:"language-git line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[s._v("git init  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"在github克隆某个仓库项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在github克隆某个仓库项目"}},[s._v("#")]),s._v(" 在Github克隆某个仓库项目")]),s._v(" "),a("p",[s._v("在上面新建的文件夹克隆")]),s._v(" "),a("div",{staticClass:"language-git line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[s._v("git clone https://github.com/username/repository.git\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"使用git生成一份rsa密钥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用git生成一份rsa密钥"}},[s._v("#")]),s._v(" 使用git生成一份rsa密钥")]),s._v(" "),a("p",[s._v("这个密钥会在C:盘user的.ssh目录下保留一份")]),s._v(" "),a("div",{staticClass:"language-git line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[s._v("ssh-keygen -t rsa -b 4096 -C "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"your_email"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"本地绑定git身份"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地绑定git身份"}},[s._v("#")]),s._v(" 本地绑定Git身份")]),s._v(" "),a("p",[s._v("配置用户名,用户邮箱")]),s._v(" "),a("div",{staticClass:"language-git line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[s._v("git config --global user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user_name"')]),s._v("    \ngit config --global user.email "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user_email"')]),s._v("  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"复制本地rsa公钥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复制本地rsa公钥"}},[s._v("#")]),s._v(" 复制本地rsa公钥")]),s._v(" "),a("p",[s._v("在C盘/用户/.ssh目录下复制rsa公钥")]),s._v(" "),a("p",[s._v("你需要复制rsa_pub公钥文件内的全部内容，在Github设置中，添加ssh认证，把公钥内容放进去，之后会生成两个文件")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://the0n3.top/medias/Git_0/1.png",alt:"1"}}),s._v(" "),a("img",{attrs:{src:"https://the0n3.top/medias/Git_0/2.png",alt:"2"}})]),s._v(" "),a("h3",{attrs:{id:"测试连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试连接"}},[s._v("#")]),s._v(" 测试连接")]),s._v(" "),a("p",[s._v("测试远程仓库连接")]),s._v(" "),a("div",{staticClass:"language-git line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[s._v("ssh -T git@github.com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果返回了hi!Your_username,那么就连接成功了，你可以远程操控Github的仓库，上传/拉取")]),s._v(" "),a("h3",{attrs:{id:"暂存修改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#暂存修改"}},[s._v("#")]),s._v(" 暂存修改")]),s._v(" "),a("p",[s._v("这不会立即提交到远程仓库，本地会有一个暂存区~(反悔容错)~")]),s._v(" "),a("p",[s._v("将所有修改添加到暂存区")]),s._v(" "),a("div",{staticClass:"language-git line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[s._v("git add -A \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"查看状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看状态"}},[s._v("#")]),s._v(" 查看状态")]),s._v(" "),a("p",[s._v("检查当前状态，查看你距离上次上传有哪些改动")]),s._v(" "),a("div",{staticClass:"language-git line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[s._v("git status\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"记录提交请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#记录提交请求"}},[s._v("#")]),s._v(" 记录提交请求")]),s._v(" "),a("p",[s._v("将你的提交words记录到远程仓库~(这一步并没提交?类似让远程仓库记录一下)~")]),s._v(" "),a("p",[s._v("用于将暂存区（stage）中的更改记录到仓库历史，words改为你本次做了哪些改动")]),s._v(" "),a("div",{staticClass:"language-git line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[s._v("git commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"words"')]),s._v("  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"设置远程仓库url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置远程仓库url"}},[s._v("#")]),s._v(" 设置远程仓库url")]),s._v(" "),a("p",[s._v("添加远程仓库")]),s._v(" "),a("div",{staticClass:"language-git line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[s._v("git remote add origin https://github.com/username/repository.git\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"推送"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#推送"}},[s._v("#")]),s._v(" 推送")]),s._v(" "),a("p",[s._v("将改动新增等内容推送提交到远程仓库")]),s._v(" "),a("p",[s._v("在 Git 中用于将你的本地 master 分支的更改推送到远程仓库")]),s._v(" "),a("div",{staticClass:"language-git line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[s._v("git push -u origin master      \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);