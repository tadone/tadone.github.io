(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{179:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h2",{attrs:{id:"title-linux-tools"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#title-linux-tools","aria-hidden":"true"}},[t._v("#")]),t._v(" title: Linux Tools")]),t._v(" "),s("h1",{attrs:{id:"linux-tools"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-tools","aria-hidden":"true"}},[t._v("#")]),t._v(" Linux Tools")]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"curl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#curl","aria-hidden":"true"}},[t._v("#")]),t._v(" CURL")]),t._v(" "),s("p",[t._v("https://linuxacademy.com/howtoguides/posts/show/topic/13852-understanding-curl-and-http-headers\nGet response headers from the server:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("curl")]),t._v(" --head www.acooke.org    "),s("span",{attrs:{class:"token comment"}},[t._v("# Get headers")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("curl")]),t._v(" -I www.acooke.org        "),s("span",{attrs:{class:"token comment"}},[t._v("# Older way")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("curl")]),t._v(" -vI www.acooke.org       "),s("span",{attrs:{class:"token comment"}},[t._v("# -v for verbose")]),t._v("\n")])])]),s("p",[t._v("Download a file:"),s("br"),t._v(" "),s("code",[t._v("-O")]),t._v(" (uppercase O) the filename in the URL will be taken and it will be used as the filename to store the result")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("curl")]),t._v(" -o mygettext.html http://www.gnu.org/software/gettext/manual/gettext.html "),s("span",{attrs:{class:"token comment"}},[t._v('# Custom file name "mygettext.html"')]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("curl")]),t._v(" -O http://www.gnu.org/software/gettext/manual/gettext.html                "),s("span",{attrs:{class:"token comment"}},[t._v('# Same name as original file "gettext.html"')]),t._v("\n")])])]),s("p",[t._v("Grep output of a curl command:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("curl")]),t._v(" -vs google.com 2"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("1 "),s("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("grep")]),t._v(" pattern\n")])])]),s("p",[s("strong",[t._v("For simple download of a file use "),s("code",[t._v("wget <URL>")])])]),t._v(" "),s("h2",{attrs:{id:"awk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#awk","aria-hidden":"true"}},[t._v("#")]),t._v(" AWK")]),t._v(" "),s("p",[t._v("Three ‘blocks’ of instructions are used in awk:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("BEGIN")]),t._v(", executed before the first input line is read")]),t._v(" "),s("li",[t._v("The "),s("code",[t._v("main loop")]),t._v(" executed for each line of input")]),t._v(" "),s("li",[s("code",[t._v("END")]),t._v(" executed after the last input line has been read\n"),s("ul",[s("li",[t._v("The BEGIN and END procedures are optional")])])])]),t._v(" "),s("p",[t._v("Each input line is treated as a record, referred to as $0 and each word (delimited by spaces or tabs) is treated as a field. Fields are referenced by using a "),s("code",[t._v("“$”")]),t._v(" ($1 –  first field, $2 – second, and so on).")]),t._v(" "),s("p",[t._v("Simple Example:")]),t._v(" "),s("div",{staticClass:"language-Bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{attrs:{class:"token function"}},[t._v("cat")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("file.txt"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("# OUTPUT")]),t._v("\navi 1200 haifa\ndani 2300 tel aviv\nrina 3100 aco\n\n$ "),s("span",{attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'{ print "),s("span",{attrs:{class:"token variable"}},[t._v("$1")]),t._v(',"-",'),s("span",{attrs:{class:"token variable"}},[t._v("$3")]),t._v(" }'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("file.txt"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("# OUTPUT")]),t._v("\navi - haifa\ndani - tel\nrina - aco\n")])])]),s("p",[t._v("Simple print the file:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("' { print } '")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("file.txt"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[t._v("Use BEGIN and END:")]),t._v(" "),s("div",{staticClass:"language-Bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('\'BEGIN { print "Customers List:\\n==="} { print } END { print "====\\nnum:" NR }\'')]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("file.txt"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("# OUTPUT")]),t._v("\nCustomers List:\n"),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("\navi 1200 haifa\ndani 2300 tel aviv\nrina 3100 aco\n"),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v("\nnum:3\n")])])]),s("p",[s("strong",[t._v("Example:")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{attrs:{class:"token function"}},[t._v("cat")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("file.txt"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\navi,1200,haifa\ndani,2300,tel aviv\nrina,3100,aco\n\n$ "),s("span",{attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('\'BEGIN{ FS=","} {print '),s("span",{attrs:{class:"token variable"}},[t._v("$3")]),t._v(","),s("span",{attrs:{class:"token variable"}},[t._v("$2")]),t._v("}'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("file.txt"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("# OUTPUT")]),t._v("\nhaifa 1200\ntel aviv 2300\naco 3100\n\n$ "),s("span",{attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('\'BEGIN{ FS=","; OFS="*"} {print '),s("span",{attrs:{class:"token variable"}},[t._v("$3")]),t._v(","),s("span",{attrs:{class:"token variable"}},[t._v("$2")]),t._v("}'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("file.txt"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("# Output separator will be '*'")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("# OUTPUT")]),t._v("\nhaifa*1200\ntel aviv*2300\naco*3100\n")])])]),s("table",[s("thead",[s("tr",[s("th",[t._v("Predefined awk values")]),t._v(" "),s("th")])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("FS")]),t._v(" "),s("td",[t._v("Field separator – default spaces and tabs")])]),t._v(" "),s("tr",[s("td",[t._v("OFS")]),t._v(" "),s("td",[t._v("Output field separator – default space")])]),t._v(" "),s("tr",[s("td",[t._v("RS")]),t._v(" "),s("td",[t._v("Record separator – default newline")])]),t._v(" "),s("tr",[s("td",[t._v("ORS")]),t._v(" "),s("td",[t._v("Output record separator – default newline")])]),t._v(" "),s("tr",[s("td",[t._v("OFMT")]),t._v(" "),s("td",[t._v("Output format – default “%.6g”")])])])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Constants:")]),t._v(" "),s("th")])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("NF")]),t._v(" "),s("td",[t._v("Number of Fields, ie number of words on a particular line")])]),t._v(" "),s("tr",[s("td",[t._v("NR")]),t._v(" "),s("td",[t._v("Number of Records, ie number of lines read thus far")])]),t._v(" "),s("tr",[s("td",[t._v("FILENAME")]),t._v(" "),s("td",[t._v("The name of the current file being processed")])]),t._v(" "),s("tr",[s("td",[t._v("FNR")]),t._v(" "),s("td",[t._v("Current line number in the current file (nawk only)")])])])]),t._v(" "),s("h2",{attrs:{id:"gpg"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gpg","aria-hidden":"true"}},[t._v("#")]),t._v(" GPG")]),t._v(" "),s("p",[t._v("Use "),s("code",[t._v("gpg")]),t._v(" to encrypt & decrypt files and directories. Install gpg from any Linux repository.")]),t._v(" "),s("h3",{attrs:{id:"encrypt-a-file-in-linux-or-unix"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#encrypt-a-file-in-linux-or-unix","aria-hidden":"true"}},[t._v("#")]),t._v(" Encrypt a file in Linux or Unix")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ gpg -c myfinancial.info.txt\nEnter passphrase:"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("YOUR-PASSWORD"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\nRepeat passphrase:"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("YOUR-PASSWORD"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[t._v("This will create a "),s("strong",[t._v("myfinancial.info.txt.gpg")]),t._v(" file")]),t._v(" "),s("h3",{attrs:{id:"decrypt-a-file-in-linux-or-unix"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#decrypt-a-file-in-linux-or-unix","aria-hidden":"true"}},[t._v("#")]),t._v(" Decrypt a file in Linux or Unix")]),t._v(" "),s("p",[t._v("To decrypt file use the gpg command as follow:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ gpg myfinancial.info.txt.gpg                    "),s("span",{attrs:{class:"token comment"}},[t._v("# Will decrypt to a file (Will ask to overwirte existing)")]),t._v("\n$ gpg -d myfinancial.info.txt.gpg                 "),s("span",{attrs:{class:"token comment"}},[t._v("# Will decrypt to STDOUT")]),t._v("\n$ gpg myfinancial.info.gpg -o new-file.info.txt   "),s("span",{attrs:{class:"token comment"}},[t._v('# Will decrypt to "new-file.info.txt" (-o output)')]),t._v("\n\n")])])]),s("h3",{attrs:{id:"non-interactive"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#non-interactive","aria-hidden":"true"}},[t._v("#")]),t._v(" Non Interactive")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("# Encrypt it…")]),t._v("\ngpg --yes --passphrase "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("passphrase"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" -c "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("filename"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("# Decrypt it…")]),t._v("\ngpg -–yes -–passphrase "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("passphrase"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("filename"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("h2",{attrs:{id:"rsync"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rsync","aria-hidden":"true"}},[t._v("#")]),t._v(" Rsync")]),t._v(" "),s("p",[t._v("Simple copy\n"),s("code",[t._v("rsync -av --progress sourcefolder /destinationfolder --exclude thefoldertoexclude")])]),t._v(" "),s("h2",{attrs:{id:"find"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#find","aria-hidden":"true"}},[t._v("#")]),t._v(" Find")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("# list every file bigger than 20000 blocks (10MB if you have 512-byte blocks)")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("find")]),t._v(" / -type f -size +20000 -print\n"),s("span",{attrs:{class:"token comment"}},[t._v("# find every file not accessed for the last week or more")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("find")]),t._v(" / -type f -atime +7 -print\n")])])]),s("h2",{attrs:{id:"dd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dd","aria-hidden":"true"}},[t._v("#")]),t._v(" DD")]),t._v(" "),s("p",[s("strong",[t._v("Syntax")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("dd")]),t._v(" if"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("source "),s("span",{attrs:{class:"token function"}},[t._v("file")]),t._v(" name"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" of"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("target "),s("span",{attrs:{class:"token function"}},[t._v("file")]),t._v(" name"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Options"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[s("strong",[t._v("Write ISO to USB")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Identify the name of the USB drive partition.")])]),t._v(" "),s("li",[s("p",[t._v("Unmount all mounted partition from that device. This is very important, otherwise the written image might get corrupted. You can umount all mounted partitions from the device with "),s("code",[t._v("umount /dev/sdX*")]),t._v(", where X is the appropriate letter, e.g. "),s("code",[t._v("umount /dev/sdc1")])])]),t._v(" "),s("li",[s("p",[t._v("Write the ISO file to the device:")])])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("# dd if=/path/to/image.iso of=/dev/sdX bs=8M status=progress oflag=direct")]),t._v("\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[t._v("Wait until the command completes.\n"),s("em",[t._v("If you see dd: invalid status flag: 'progress', your dd version doesn’t support the status=progress option and you’ll need to remove it. In this case, you won’t see writing progress.")])])]),t._v(" "),s("p",[s("strong",[t._v("Backup/Restore with DD")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("# Backing up a partition to a file(to my home directory as hdadisk.img)")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("dd")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("/dev/sda2 of"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("~/hdadisk.img\n"),s("span",{attrs:{class:"token comment"}},[t._v("# Restoring this image file in to other machine")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("dd")]),t._v(" if"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("hdadisk.img of"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("/dev/sdb3\n")])])])])}],!1,null,null,null);n.options.__file="linux_tools.md";a.default=n.exports}}]);