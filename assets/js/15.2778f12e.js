(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{146:function(a,s,t){"use strict";t.r(s);var e=t(0),r=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"mysql-mariadb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql-mariadb","aria-hidden":"true"}},[a._v("#")]),a._v(" MySQL (MariaDB)")]),a._v(" "),t("p",[t("strong",[a._v("Backup & Restore MySQL Database")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token comment"}},[a._v("# Export:")]),a._v("\nmysqldump -u username –-password"),t("span",{attrs:{class:"token operator"}},[a._v("=")]),a._v("your_password database_name "),t("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v(" file.sql\n"),t("span",{attrs:{class:"token comment"}},[a._v("# Import:")]),a._v("\nmysql -u username –-password"),t("span",{attrs:{class:"token operator"}},[a._v("=")]),a._v("your_password database_name "),t("span",{attrs:{class:"token operator"}},[a._v("<")]),a._v(" file.sql\n")])])])])}],!1,null,null,null);r.options.__file="sql.md";s.default=r.exports}}]);