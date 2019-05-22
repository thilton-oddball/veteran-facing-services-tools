(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{323:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return d}),t.d(n,"_frontmatter",function(){return u});t(42);var a=t(43),o=t.n(a),r=t(3),m=t.n(r),s=t(2),c=t.n(s),i=t(4),l=t(350),p={},d=function(e){function n(n){var t;return(t=e.call(this,n)||this).layout=l.a,t}return m()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,t=o()(e,["components"]);return c.a.createElement(i.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,t),components:n},c.a.createElement("h1",{id:"building-forms"},"Building forms"),c.a.createElement(i.MDXTag,{name:"table",components:n},c.a.createElement(i.MDXTag,{name:"thead",components:n,parentName:"table"},c.a.createElement(i.MDXTag,{name:"tr",components:n,parentName:"thead"},c.a.createElement(i.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}}),c.a.createElement(i.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}}),c.a.createElement(i.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}}),c.a.createElement(i.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}}))),c.a.createElement(i.MDXTag,{name:"tbody",components:n,parentName:"table"},c.a.createElement(i.MDXTag,{name:"tr",components:n,parentName:"tbody"},c.a.createElement(i.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"td"},"Decision Made:")),c.a.createElement(i.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Yes"),c.a.createElement(i.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"td"},"Decision Date:")),c.a.createElement(i.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"01/2017")),c.a.createElement(i.MDXTag,{name:"tr",components:n,parentName:"tbody"},c.a.createElement(i.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"td"},"Revisit Decision:")),c.a.createElement(i.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Yes"),c.a.createElement(i.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"td"},"Revisit Date:")),c.a.createElement(i.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"December 2017")))),c.a.createElement(i.MDXTag,{name:"p",components:n},c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"p"},"Revisit Criteria:")," As of 9/2017, all our forms are using RJSF. We should regroup and take a look at how it's going a few months after that."),c.a.createElement(i.MDXTag,{name:"p",components:n},c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"p"},"Decision Makers:")," @annekainicUSDS @jbalboni @ayaleloehr @aub"),c.a.createElement(i.MDXTag,{name:"hr",components:n}),c.a.createElement("h2",{id:"tldr"},"tl;dr"),c.a.createElement(i.MDXTag,{name:"p",components:n},"When bringing lengthy paper forms to Vets.gov, we use react-jsonschema-form and the common code we've built on top of it."),c.a.createElement(i.MDXTag,{name:"p",components:n},"A longer form ",c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://medium.com/the-u-s-digital-service/building-forms-faster-on-vets-gov-d8619f4e9db"}},"article on this decision")," can be found on the USDS Medium. The information below is meant to be a distilled version."),c.a.createElement("h2",{id:"history"},"History"),c.a.createElement(i.MDXTag,{name:"p",components:n},"We built two forms (10-10EZ and 22-1990) with a basic React/Redux approach. The 10-10EZ (HCA) took 5 months and the 1990 took 2 months. We also had numerous production bugs to fix around validation and incorrectly formatted data. Based on those two forms, we thought we had a stable set of patterns for long forms and could make better use of shared code to make development faster and more reliable. We evaluated a few different form libraries for React and settled on ",c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/mozilla-services/react-jsonschema-form"}},"react-json-schemaform")," (RJSF). We used that to build the 22-1995 form. We found that building the 1995 with RJSF was a big improvement and have been building forms with RJSF since then."),c.a.createElement("h2",{id:"pros"},"Pros"),c.a.createElement(i.MDXTag,{name:"ul",components:n},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Almost all form specific information is in a single configuration file, and has less boilerplate than building forms with React components"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"There's very little form-specific React code. Most form specific code are files that export configuration information, which is easy to modify and overwrite when necessary"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Forms are built using a JSON Schema file as a base and the backend uses the same file to validate submissions. So we're less likely to have schema errors than previously"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Building the config files is generally faster than building React components for each form")),c.a.createElement("h2",{id:"cons"},"Cons"),c.a.createElement(i.MDXTag,{name:"ul",components:n},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"The application code for each form is very centralized, which makes it hard to use code splitting"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Overall form bundle size is still a little big (but generally smaller than before)"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Form-specific customizations that fall outside our expected patterns are more difficult to implement"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Handling different variations on our patterns means adding options to the config file, which can add noise to the form config files"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"The shared code built on top of RJSF is complicated")),c.a.createElement("h2",{id:"example-of-an-alternative-approach"},"Example of an alternative approach"),c.a.createElement(i.MDXTag,{name:"p",components:n},"There are other React form libraries, most of which have you still building forms with React components (",c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"redux-form.com"}},"redux-form"),", ",c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://react-form.js.org/#/story/readme-documentation"}},"react-form"),"). We could have gone with one of those, and put more effort into building reusable components, but we didn't feel like we would make as big of an improvement as with config file based approaches."),c.a.createElement("h2",{id:"decision"},"Decision"),c.a.createElement(i.MDXTag,{name:"p",components:n},"Long paper forms on Vets.gov will use RJSF and the shared code built on top of it."))},n}(c.a.Component),u={}},349:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}}]}}}},350:function(e,n,t){"use strict";var a=t(2),o=t.n(a),r=t(13),m=t.n(r),s=t(353),c=(t(133),t(134),t(135),t(17),t(349)),i=t(351);function l(){return o.a.createElement(i.b,{query:"157057713",render:function(e){return o.a.createElement(d,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:c})}function p(e){var n=e.item;return n.href?o.a.createElement("li",{key:n.name},o.a.createElement(i.a,{to:n.href},n.name)):o.a.createElement("li",{key:n.name},n.name," (future)")}function d(e){var n=e.items,t=e.isSublist,a=void 0!==t&&t;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},a&&o.a.createElement(p,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(d,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},a&&o.a.createElement(p,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):o.a.createElement(p,{item:e,key:e.name})})):null}var u=t(352),g=t.n(u);function h(e){var n=e.location,t=g.a.sections.find(function(e){return n.pathname.includes(e.href)});return t?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(d,{items:t.items}))):null}function f(e){var n=e.children,t=e.location;return o.a.createElement(s.a,{location:t},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:t}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}t.d(n,"a",function(){return f}),f.propTypes={children:m.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-platform-front-end-standards-documented-decisions-building-forms-mdx-e5c79b4aef6c6e6f815f.js.map