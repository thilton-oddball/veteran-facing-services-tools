(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{280:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d}),n.d(t,"_frontmatter",function(){return u});n(42);var a=n(43),o=n.n(a),r=n(3),m=n.n(r),c=n(2),s=n.n(c),i=n(4),l=n(320),p={},d=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=l.a,n}return m()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=o()(e,["components"]);return s.a.createElement(i.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,n),components:t},s.a.createElement(i.MDXTag,{name:"h1",components:t},"How Are URLs Created?"),s.a.createElement(i.MDXTag,{name:"p",components:t},"Understanding how content URLs are generated by Metalsmith helps prevent build errors. Here's how it works."),s.a.createElement(i.MDXTag,{name:"h2",components:t},"Pages in vagov-content"),s.a.createElement(i.MDXTag,{name:"ul",components:t},s.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Document paths are based on the Markdown file paths. "),s.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Each Markdown file generates a corresponding directory and ",s.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"index.html")," file. For example: ",s.a.createElement(i.MDXTag,{name:"ul",components:t,parentName:"li"},s.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"_education/tools-programs.md")," ","→"," ",s.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"/education/tools-programs/index.html")),s.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"_education/tools-programs/index.md")," ","→"," ",s.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"/education/tools-programs/index.html")),s.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"_education/work-learn/non-traditional.md")," ","→"," ",s.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"_education/work-learn/non-traditional/index.html"))))),s.a.createElement(i.MDXTag,{name:"p",components:t},s.a.createElement(i.MDXTag,{name:"em",components:t,parentName:"p"},s.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"em"},"Make sure that every collection sub-directory also has a Markdown file that shares its name."))," Take the the ",s.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"_employment/job-seekers/")," directory as an example. It also has an ",s.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"_employment/job-seekers.md")," file. Each Markdown file in ",s.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"_employment/job-seekers/")," compiles to  ",s.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"employment/jobs-seekers/name_of_markdown_file/index.html"),", while ",s.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"_employment/job-seekers.md")," itself compiles to ",s.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"employment/job-seekers/index.html"),"."),s.a.createElement(i.MDXTag,{name:"p",components:t},"Failing to take the above step means that you could generate breadcrumbs to pages that do not exist."),s.a.createElement(i.MDXTag,{name:"h2",components:t},"Pages in Drupal"),s.a.createElement(i.MDXTag,{name:"p",components:t},"In Drupal, URLs are created based off the ",s.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"entityUrl.path")," property included on each node. Similar to vagov-content pages, an index.html page is appended to that path, so that urls can reference just the path without an html extension."))},t}(s.a.Component),u={}},315:function(e,t,n){var a;e.exports=(a=n(317))&&a.default||a},316:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov Developer's Documentations"}}}}},317:function(e,t,n){"use strict";n.r(t);var a=n(18),o=n.n(a),r=n(2),m=n.n(r),c=n(13),s=n.n(c),i=n(94),l=n(9),p=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return m.a.createElement(i.a,o()({location:t,pageResources:n},n.json))};p.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=p},318:function(e){e.exports={data:{components:{edges:[{node:{path:"/platform/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/platform/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/platform/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/platform/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/platform/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/platform/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/platform/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/platform/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/platform/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/platform/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/platform/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/platform/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/platform/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/platform/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/platform/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/platform/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/platform/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/platform/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/platform/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/platform/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/platform/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/platform/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/platform/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/platform/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/platform/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/platform/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/platform/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/platform/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/platform/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/platform/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/platform/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/platform/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/platform/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/platform/systemdownview/",context:{source:"component",name:"SystemDownView"}}}]}}}},319:function(e,t){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"getting-started",items:[{name:"Start up guide",items:[{name:"Set up VA.gov locally",href:"getting-started"},{name:"Accessing internal tools",href:"getting-started/internal-tools"},{name:"VA.gov environments",href:"getting-started/environments"},{name:"Development workflow",href:"getting-started/workflow"},{name:"Bundes and Code organization",href:"getting-started/bundles-and-code-organization"}]},{name:"Common tasks",items:[{name:"Running VA.gov locally",href:"getting-started/common-tasks/local"},{name:"Building VA.gov",href:"getting-started/common-tasks/build"},{name:"Running tests",href:"getting-started/common-tasks/tests"},{name:"Linting your code",href:"getting-started/common-tasks/lint"},{name:"Creating a new React application",href:"getting-started/common-tasks/new-app"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"},{name:"Adding new pages to this site",href:"getting-started/common-tasks/doc-page"},{name:"Adding pages from Github to this site",href:"getting-started/common-tasks/external-doc-page"},{name:"Add Graphs to MDX",href:"getting-started/common-tasks/add-graphs-to-mdx"},{name:"Creating A Gatsby Plugin",href:"getting-started/common-tasks/creating-gatsby-plugins"}]},{name:"Standards and conventions",items:[]}]},{id:"architecture",name:"Architecture",href:"architecture",items:[{name:"Metalsmith",items:[{name:"How are URLs created",href:"architecture/metalsmith/urls"},{name:"How templates work",href:"architecture/metalsmith/templates"},{name:"How to create collections and related links",href:"architecture/metalsmith/collections"}]},{name:"Site structure",items:[{name:"Topology",href:"architecture/site-structure/topology-overview"},{name:"Client overview",href:"architecture/site-structure/client-overview"},{name:"Styling",href:"architecture/site-structure/styling-overview"}]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing",href:"architecture/visual-regression-testing"},{name:"Teamsite",href:"architecture/teamsite"}]},{id:"forms",name:"Forms",href:"forms",items:[{name:"Introduction",href:"forms/when-to-use-fs"},{name:"Tutorial",items:[{name:"Form Tutorial - Basic",href:"forms/form-tutorial-basic"},{name:"Form Tutorial - Intermediate",href:"forms/form-tutorial-intermediate"},{name:"Form Tutorial - Advanced",href:"forms/form-tutorial-advanced"},{name:"Setting up Save in Progress",href:"forms/save-in-progress"},{name:"Forms in Production",href:"forms/forms-in-production"}]},{name:"Architecture",items:[]},{name:"Common tasks",items:[]}]},{id:"platform",name:"Platform",href:"platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]}]}},320:function(e,t,n){"use strict";var a=n(3),o=n.n(a),r=n(316),m=n(2),c=n.n(m),s=n(13),i=n.n(s),l=n(321),p=n.n(l),d=n(68),u=n.n(d),h=(n(315),c.a.createContext({})),g=function(e){return c.a.createElement(h.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):c.a.createElement("div",null,"Loading (StaticQuery)")})};g.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func};n(17),n(133),n(134),n(135);var f=n(318);function E(){return c.a.createElement(g,{query:"157057713",render:function(e){return c.a.createElement(b,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:f})}function b(e){var t=e.items;return t.length?c.a.createElement("ul",{className:"menu-list"},t.map(function(e){return c.a.createElement("li",{key:e.name},!!e.items&&c.a.createElement("li",{key:e.name},c.a.createElement("h4",null,e.name),c.a.createElement(b,{items:e.items})),"componentList"===e.query&&c.a.createElement("li",{key:e.name},c.a.createElement("h4",null,e.name),c.a.createElement(E,null)),!!e.href&&c.a.createElement("li",{key:e.name},c.a.createElement(u.a,{to:e.href},e.name)),!e.href&&!e.items&&!e.query&&c.a.createElement("li",{key:e.name},e.name," (future)"))})):null}var x=n(319),y=n.n(x);function w(e){var t=e.location,n=y.a.sections.find(function(e){return t.pathname.includes("/"+e.href)});return c.a.createElement("aside",{className:"sidebar"},c.a.createElement("div",{className:"search"},c.a.createElement("div",{className:"input-wrap"},c.a.createElement("input",{type:"search",value:"",onChange:function(){},placeholder:"Type to search"}))),!!n&&c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,n.name),c.a.createElement(u.a,{className:"home-link",to:""},"Home"),c.a.createElement(b,{items:n.items})),!n&&c.a.createElement("ul",{className:"menu-list"},y.a.sections.map(function(e){return c.a.createElement("li",{key:e.id},c.a.createElement(u.a,{to:e.href},e.name))})))}n(322);var v=function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},n.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},n.render=function(){var e=this.props,t=e.children,n=e.location;return c.a.createElement(g,{query:"1044757290",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},c.a.createElement("html",{lang:"en"})),c.a.createElement(w,{location:n}),c.a.createElement("div",{className:"ContentArea docSearch-content"},t))},data:r})},t}(c.a.Component);v.propTypes={children:i.a.node.isRequired};t.a=v}}]);
//# sourceMappingURL=component---src-pages-architecture-metalsmith-urls-mdx-95bbd3ccf5c64b3afd03.js.map