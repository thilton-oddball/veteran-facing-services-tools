(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{325:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return u}),t.d(n,"_frontmatter",function(){return d});t(42);var o=t(43),a=t.n(o),s=t(3),r=t.n(s),c=t(2),i=t.n(c),m=t(4),l=t(347),p={},u=function(e){function n(n){var t;return(t=e.call(this,n)||this).layout=l.a,t}return r()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,t=a()(e,["components"]);return i.a.createElement(m.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,t),components:n},i.a.createElement("h1",{id:"socks-proxy-design"},"SOCKS proxy design"),i.a.createElement(m.MDXTag,{name:"p",components:n},"Some utilities, such as metrics dashboards, error reporting, and deployment\ntools should not be made available to the public. While such a utility may lock\nfunctionality behind a user login system, these vary among implementations and\nmay be vulnerable to exploits. Additionally, due to the difficulty of creating\nsubdomains for vets.gov, it may be problematic to host some of these utilities\nwhen they do not support relative path installations."),i.a.createElement(m.MDXTag,{name:"p",components:n},"The preferred solution is to host these systems on an internal network that\nprevents public access. While the VA maintains an internal network, the vets.gov\nteam operates within the AWS environment. Installation of a utility like this on\nthe VA network would require additional authority to operate extensions,\na server within the VA, and mapping new connections from AWS to the VA. Since\nthese tools are for use exclusively by the vets.gov services installed within\nAWS, utilizing the VA's internal network is both unnecessary, more complex,\ntime intensive, and would likely impact performance of the utility and\napplication requiring it."),i.a.createElement(m.MDXTag,{name:"p",components:n},"To address this issue we've configured an internal DNS server which can be\naccessed via a SOCKS proxy. The SOCKS proxy is a server on your local system\nwhich tunnels HTTP and DNS traffic to a jumpbox on the vets.gov AWS network.\nOnce connected, a developer will have access to the ",i.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"*.vetsgov-internal")," TLD,\nand can use their browser to connect to tools such as Sentry."),i.a.createElement(m.MDXTag,{name:"p",components:n},"Internal systems will not require any modification to connectivity, and should\ncommunicate with the utilities directly. They may use a ",i.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"/etc/hosts")," entry for\nthe corresponding ",i.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"*.vetsgov-internal")," address when necessary."))},n}(i.a.Component),d={}},346:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}}]}}}},347:function(e,n,t){"use strict";var o=t(2),a=t.n(o),s=t(13),r=t.n(s),c=t(350),i=(t(133),t(134),t(135),t(17),t(346)),m=t(348);function l(){return a.a.createElement(m.b,{query:"157057713",render:function(e){return a.a.createElement(u,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:i})}function p(e){var n=e.item;return n.href?a.a.createElement("li",{key:n.name},a.a.createElement(m.a,{to:n.href},n.name)):a.a.createElement("li",{key:n.name},n.name," (future)")}function u(e){var n=e.items,t=e.isSublist,o=void 0!==t&&t;return n.length?a.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?a.a.createElement("li",{key:e.name},o&&a.a.createElement(p,{item:e}),!o&&a.a.createElement("h2",{className:"heading-level-4"},e.name),a.a.createElement(u,{isSublist:!0,items:e.items})):"componentList"===e.query?a.a.createElement("li",{key:e.name},o&&a.a.createElement(p,{item:e}),!o&&a.a.createElement("h2",{className:"heading-level-4"},e.name),a.a.createElement(l,null)):a.a.createElement(p,{item:e,key:e.name})})):null}var d=t(349),h=t.n(d);function v(e){var n=e.location,t=h.a.sections.find(function(e){return n.pathname.includes(e.href)});return t?a.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},a.a.createElement("div",{className:"site-c-sidenav"},a.a.createElement(u,{items:t.items}))):null}function g(e){var n=e.children,t=e.location;return a.a.createElement(c.a,{location:t},a.a.createElement("div",{className:"vads-l-row"},a.a.createElement(v,{location:t}),a.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}t.d(n,"a",function(){return g}),g.propTypes={children:r.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-platform-front-end-standards-documented-decisions-socks-proxy-mdx-44804cfc2e3629550eea.js.map