(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{384:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return c}),n.d(t,"_frontmatter",function(){return l});n(8),n(7),n(4),n(9),n(10);var o=n(1),a=n.n(o),i=n(2),r=n(334);var s={},c=function(e){var t,n;function o(t){var n;return(n=e.call(this,t)||this).layout=r.a,n}return n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.prototype.render=function(){var e=this.props,t=e.components,n=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return a.a.createElement(i.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},s,n),components:t},a.a.createElement("h1",{id:"socks-proxy-design"},"SOCKS proxy design"),a.a.createElement(i.MDXTag,{name:"p",components:t},"Some utilities, such as metrics dashboards, error reporting, and deployment\ntools should not be made available to the public. While such a utility may lock\nfunctionality behind a user login system, these vary among implementations and\nmay be vulnerable to exploits. Additionally, due to the difficulty of creating\nsubdomains for vets.gov, it may be problematic to host some of these utilities\nwhen they do not support relative path installations."),a.a.createElement(i.MDXTag,{name:"p",components:t},"The preferred solution is to host these systems on an internal network that\nprevents public access. While the VA maintains an internal network, the vets.gov\nteam operates within the AWS environment. Installation of a utility like this on\nthe VA network would require additional authority to operate extensions,\na server within the VA, and mapping new connections from AWS to the VA. Since\nthese tools are for use exclusively by the vets.gov services installed within\nAWS, utilizing the VA's internal network is both unnecessary, more complex,\ntime intensive, and would likely impact performance of the utility and\napplication requiring it."),a.a.createElement(i.MDXTag,{name:"p",components:t},"To address this issue we've configured an internal DNS server which can be\naccessed via a SOCKS proxy. The SOCKS proxy is a server on your local system\nwhich tunnels HTTP and DNS traffic to a jumpbox on the vets.gov AWS network.\nOnce connected, a developer will have access to the ",a.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"*.vetsgov-internal")," TLD,\nand can use their browser to connect to tools such as Sentry."),a.a.createElement(i.MDXTag,{name:"p",components:t},"Internal systems will not require any modification to connectivity, and should\ncommunicate with the utilities directly. They may use a ",a.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"/etc/hosts")," entry for\nthe corresponding ",a.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"*.vetsgov-internal")," address when necessary."))},o}(a.a.Component),l={}}}]);
//# sourceMappingURL=component---src-pages-platform-front-end-standards-documented-decisions-socks-proxy-mdx-d58a2e7ceb8a29052b34.js.map