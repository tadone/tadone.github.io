(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{198:function(e,t,s){"use strict";s.r(t);var a=s(0),n=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[s("p",[s("strong",[e._v("Using cURL and the host header to bypass a load balancer")])]),e._v(" "),s("p",[e._v("The main problem to tackle is that if I try to connect to www.example.com I’ll be connecting to the load balancer and then handed off to a random server. I want to connect directly to each server servers so I’ll need to use their IP address.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" --verbose --header "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Host: www.example.com'")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'http://10.1.1.36:8000/the_url_to_test'")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Over HTTPS use --resolve")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -verbose --resolve www.example.com:443:10.10.10.10 https://www.example.com\n")])])])])}],!1,null,null,null);n.options.__file="http.md";t.default=n.exports}}]);