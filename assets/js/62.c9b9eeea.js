(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{424:function(a,s,t){"use strict";t.r(s);var e=t(7),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("做玄机打包服务器源码有点麻烦，所以今天来介绍一下tar打包，scp下载等命令及参数，只用不理解感觉有个疙瘩")]),a._v(" "),s("p",[a._v("全是干货，没点茶水看不下去了哈哈哈哈哈")]),a._v(" "),s("h2",{attrs:{id:"扩展名-tar-gz"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#扩展名-tar-gz"}},[a._v("#")]),a._v(" 扩展名.tar.gz")]),a._v(" "),s("p",[a._v('tar 通常用于将多个文件和目录打包成一个归档文件，称为 "tarball"（通常带有 .tar 扩展名）。')]),a._v(" "),s("p",[a._v("tar 本身不压缩文件，但可以与压缩工具（如 gzip 或 bzip2）结合使用，创建压缩的归档文件（如 .tar.gz 或 .tar.bz2）")]),a._v(" "),s("p",[a._v("所以常见打包文件两个扩展名"),s("code",[a._v(".tar.gz")]),a._v("？")]),a._v(" "),s("h2",{attrs:{id:"打包、压缩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打包、压缩"}},[a._v("#")]),a._v(" 打包、压缩")]),a._v(" "),s("p",[a._v("什么是打包？")]),a._v(" "),s("p",[a._v("打包的作用是把多个文件或目录放在一个归档文件里，类似于把东西装进一个箱子里。"),s("s",[a._v("这不就是我理解的压缩吗")])]),a._v(" "),s("p",[a._v("打包前：")]),a._v(" "),s("div",{staticClass:"language-plaintext line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plaintext"}},[s("code",[a._v("file1.txt  \nfile2.txt  \ndir1/  \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("打包后：")]),a._v(" "),s("div",{staticClass:"language-plaintext line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plaintext"}},[s("code",[a._v("archive.tar  （这个文件包含了 file1.txt、file2.txt 和 dir1/）\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("多个文件，目录，打包成一个文件"),s("code",[a._v("archive.tar")]),a._v("。需要时可以打开，叫做解包")]),a._v(" "),s("p",[a._v("什么是压缩？")]),a._v(" "),s("p",[a._v("压缩是对文件进行大小缩减，通过特定算法减少文件占用的存储空间。"),s("s",[a._v("原来这才是压缩")])]),a._v(" "),s("p",[a._v("压缩前：")]),a._v(" "),s("div",{staticClass:"language-plaintext line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plaintext"}},[s("code",[a._v("archive.tar  （大小可能是 100 MB）\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("压缩后：")]),a._v(" "),s("div",{staticClass:"language-plaintext line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plaintext"}},[s("code",[a._v("archive.tar.gz  （大小可能是 50 MB，文件更小了）\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("压缩的目的是为了节省空间")]),a._v(" "),s("p",[a._v("拷打gpt")]),a._v(" "),s("ul",[s("li",[a._v("打包：像把文件装进一个箱子，方便携带")]),a._v(" "),s("li",[a._v("压缩：像把箱子里的空气抽掉，让箱子更小")])]),a._v(" "),s("p",[a._v("tar命令可以使用参数来压缩文件，"),s("code",[a._v("-z")]),a._v("参数gzip压缩、"),s("code",[a._v("-j")]),a._v("参数bzip2压缩")]),a._v(" "),s("p",[a._v("winrar支持tar文件，双击可以直接像压缩包一样解包")]),a._v(" "),s("h2",{attrs:{id:"tar命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tar命令"}},[a._v("#")]),a._v(" tar命令")]),a._v(" "),s("p",[a._v("tar命令常用参数：")]),a._v(" "),s("ul",[s("li",[s("strong",[s("code",[a._v("-c")])]),a._v("："),s("strong",[a._v("Create")])])]),a._v(" "),s("p",[a._v("创建一个新的打包文件")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-cvf")]),a._v(" archive.tar file1.txt file2.txt\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("strong",[a._v("作用")]),a._v("：将 "),s("code",[a._v("file1.txt")]),a._v(" 和 "),s("code",[a._v("file2.txt")]),a._v(" 打包到 "),s("code",[a._v("archive.tar")]),a._v(" 中")]),a._v(" "),s("ul",[s("li",[s("strong",[s("code",[a._v("-x")])]),a._v("："),s("strong",[a._v("Extract")])])]),a._v(" "),s("p",[a._v("对tar文件解包")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-xvf")]),a._v(" archive.tar\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("strong",[a._v("作用")]),a._v("：解包 "),s("code",[a._v("archive.tar")]),a._v(" 提取到当前目录")]),a._v(" "),s("ul",[s("li",[s("strong",[s("code",[a._v("-v")])]),a._v("："),s("strong",[a._v("View")])])]),a._v(" "),s("p",[a._v("显示详细操作过程，让用户看到哪些文件正在被处理")]),a._v(" "),s("ul",[s("li",[s("strong",[s("code",[a._v("-f")])]),a._v("："),s("strong",[a._v("File")])])]),a._v(" "),s("p",[a._v("指定打包文件名")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-cvf")]),a._v(" archive.tar file1.txt\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("strong",[a._v("作用")]),a._v("：将 "),s("code",[a._v("file1.txt")]),a._v(" 打包成 "),s("code",[a._v("archive.tar")])]),a._v(" "),s("ul",[s("li",[s("strong",[s("code",[a._v("-z")])]),a._v("："),s("strong",[a._v("gzip")])])]),a._v(" "),s("p",[a._v("使用 "),s("code",[a._v("gzip")]),a._v(" 对归档文件进行压缩")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-czvf")]),a._v(" archive.tar.gz file1.txt\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("strong",[a._v("作用")]),a._v("：打包 "),s("code",[a._v("file1.txt")]),a._v(" 并用 "),s("code",[a._v("gzip")]),a._v(" 压缩成 "),s("code",[a._v("archive.tar.gz")])]),a._v(" "),s("ul",[s("li",[s("strong",[s("code",[a._v("-j")])]),a._v("："),s("strong",[a._v("bzip2")])])]),a._v(" "),s("p",[a._v("使用 "),s("code",[a._v("bzip2")]),a._v(" 对归档文件进行压缩")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-cjvf")]),a._v(" archive.tar.bz2 file1.txt\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("strong",[a._v("作用")]),a._v("：打包 "),s("code",[a._v("file1.txt")]),a._v(" 并用 "),s("code",[a._v("bzip2")]),a._v(" 压缩成 "),s("code",[a._v("archive.tar.bz2")])]),a._v(" "),s("ul",[s("li",[s("strong",[s("code",[a._v("-t")])]),a._v("："),s("strong",[a._v("List")])])]),a._v(" "),s("p",[a._v("列出归档文件的内容")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-tvf")]),a._v(" archive.tar\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("strong",[a._v("作用")]),a._v("：只查看 "),s("code",[a._v("archive.tar")]),a._v(" 中的内容，不提取文件")]),a._v(" "),s("ul",[s("li",[s("strong",[s("code",[a._v("-C")])]),a._v("："),s("strong",[a._v("Change Directory")])])]),a._v(" "),s("p",[a._v("指定解包或操作时切换到的目录")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-xvf")]),a._v(" archive.tar "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-C")]),a._v(" /tmp\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("strong",[a._v("作用")]),a._v("：将归档文件的内容提取到 "),s("code",[a._v("/tmp")]),a._v(" 目录")]),a._v(" "),s("p",[a._v("wow，理解好多了")]),a._v(" "),s("h2",{attrs:{id:"tar命令常用参数组合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tar命令常用参数组合"}},[a._v("#")]),a._v(" tar命令常用参数组合")]),a._v(" "),s("ul",[s("li",[a._v("创建并压缩归档文件:")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-czvf")]),a._v(" archive.tar.gz file1.txt file2.txt\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("cz创建打包文件gzip压缩，显示过程，指定打包文件名")]),a._v(" "),s("ul",[s("li",[a._v("解压并提取 gzip 压缩的打包文件")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-xzvf")]),a._v(" archive.tar.gz\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("xz gzip解压解包，v显示过程，f指定打包文件名")]),a._v(" "),s("p",[a._v("完美！")]),a._v(" "),s("h2",{attrs:{id:"scp命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scp命令"}},[a._v("#")]),a._v(" scp命令")]),a._v(" "),s("p",[s("code",[a._v("scp")]),a._v(" (Secure Copy Protocol) 是一个基于 SSH 的文件传输工具")]),a._v(" "),s("p",[a._v("用法：")]),a._v(" "),s("div",{staticClass:"language-plaintext line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plaintext"}},[s("code",[a._v("scp [选项] <源文件路径> <目标路径>\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("本地文件复制到目标服务器，真厉害（"),s("s",[a._v("还能这样")]),a._v("）")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("scp")]),a._v(" file.txt user@remote_host:/path/to/destination/\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("从远程服务器复制文件到本地")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("scp")]),a._v(" user@remote_host:/path/to/file.txt /local/destination/\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("复制整个目录")]),a._v(" "),s("p",[a._v("-r 参数递归复制目录")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("scp")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-r")]),a._v(" my_folder user@remote_host:/path/to/destination/\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("指定端口")]),a._v(" "),s("p",[a._v("如果远程服务器使用的 SSH 端口不是默认的 22")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("scp")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-P")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2222")]),a._v(" file.txt user@remote_host:/path/to/destination/\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"常用选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用选项"}},[a._v("#")]),a._v(" "),s("strong",[a._v("常用选项")])]),a._v(" "),s("ul",[s("li",[s("strong",[s("code",[a._v("-r")])]),a._v("：递归复制整个目录")]),a._v(" "),s("li",[s("strong",[s("code",[a._v("-P")])]),a._v("：指定 SSH 端口号")]),a._v(" "),s("li",[s("strong",[s("code",[a._v("-v")])]),a._v("：显示详细信息，便于调试")]),a._v(" "),s("li",[s("strong",[s("code",[a._v("-i")])]),a._v("：指定私钥文件，用于认证（密钥连接类型）")])])])}),[],!1,null,null,null);s.default=r.exports}}]);