(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{287:function(e,n,o){"use strict";o.r(n),o.d(n,"default",function(){return u}),o.d(n,"_frontmatter",function(){return d});o(42);var t=o(43),a=o.n(t),c=o(3),r=o.n(c),s=o(2),m=o.n(s),i=o(4),p=o(348),l={},u=function(e){function n(n){var o;return(o=e.call(this,n)||this).layout=p.a,o}return r()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,o=a()(e,["components"]);return m.a.createElement(i.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},l,o),components:n},m.a.createElement("h1",{id:"documentation-guide"},"Documentation guide"),m.a.createElement(i.MDXTag,{name:"p",components:n},"The source for this site is maintained in the documentation package of the ",m.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/tree/master/packages/documentation"}},"department-of-veterans-affairs/veteran-facing-services-tools")," repo."))},n}(m.a.Component),d={}},347:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}}]}}}},348:function(e,n,o){"use strict";var t=o(2),a=o.n(t),c=o(13),r=o.n(c),s=o(351),m=(o(133),o(134),o(135),o(17),o(347)),i=o(349);function p(){return a.a.createElement(i.b,{query:"157057713",render:function(e){return a.a.createElement(u,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:m})}function l(e){var n=e.item;return n.href?a.a.createElement("li",{key:n.name},a.a.createElement(i.a,{to:n.href},n.name)):a.a.createElement("li",{key:n.name},n.name," (future)")}function u(e){var n=e.items,o=e.isSublist,t=void 0!==o&&o;return n.length?a.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?a.a.createElement("li",{key:e.name},t&&a.a.createElement(l,{item:e}),!t&&a.a.createElement("h2",{className:"heading-level-4"},e.name),a.a.createElement(u,{isSublist:!0,items:e.items})):"componentList"===e.query?a.a.createElement("li",{key:e.name},t&&a.a.createElement(l,{item:e}),!t&&a.a.createElement("h2",{className:"heading-level-4"},e.name),a.a.createElement(p,null)):a.a.createElement(l,{item:e,key:e.name})})):null}var d=o(350),h=o.n(d);function g(e){var n=e.location,o=h.a.sections.find(function(e){return n.pathname.includes(e.href)});return o?a.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},a.a.createElement("div",{className:"site-c-sidenav"},a.a.createElement(u,{items:o.items}))):null}function v(e){var n=e.children,o=e.location;return a.a.createElement(s.a,{location:o},a.a.createElement("div",{className:"vads-l-row"},a.a.createElement(g,{location:o}),a.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}o.d(n,"a",function(){return v}),v.propTypes={children:r.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-documentation-guide-index-mdx-65aedbccbbb126cd2b40.js.map