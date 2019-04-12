(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{291:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return u}),t.d(n,"_frontmatter",function(){return d});t(42);var a=t(43),o=t.n(a),r=t(3),m=t.n(r),s=t(2),c=t.n(s),i=t(4),l=t(310),p={},u=function(e){function n(n){var t;return(t=e.call(this,n)||this).layout=l.a,t}return m()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,t=o()(e,["components"]);return c.a.createElement(i.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,t),components:n},c.a.createElement(i.MDXTag,{name:"h2",components:n},"How to Create a Gatsby Plugin"),c.a.createElement(i.MDXTag,{name:"h3",components:n},"Creating a Local Gatsby Plugin"),c.a.createElement(i.MDXTag,{name:"p",components:n},"Here we are going to show you how to create a local plugin for Gatsby."),c.a.createElement(i.MDXTag,{name:"ul",components:n},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},"Create a plugin folder in ",c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"p"},"/plugins")),c.a.createElement(i.MDXTag,{name:"pre",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-shell"}},"$ mkdir gatsby-example-plugin\n"))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},"CD into the folder"),c.a.createElement(i.MDXTag,{name:"pre",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-shell"}},"$ cd gatsby-example-plugin\n"))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},"Initialize Node.js using npm. Plugins need to be a Node project."),c.a.createElement(i.MDXTag,{name:"pre",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-shell"}},"$ npm init --yes\n"))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},"Now you can add the Gatsby specific files like gatsby-node.js, gatsby-browser, etc. in your plugin folder."),c.a.createElement(i.MDXTag,{name:"pre",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"gatsby-example-plugin\n  - gatsby-node.js\n  - gatsby-browser.js\n"))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},"To use the plugin you need to add it to the ",c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"p"},"gatsby-config.js")," file."),c.a.createElement(i.MDXTag,{name:"pre",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"// gatsby-config.js\n\nmodule.exports = {\n  siteMetadata: {\n    description: `Resources and documention for the Development within the VA.gov project`,\n    siteUrl: `https://department-of-veterans-affairs.github.io/veteran-facing-services-tools`,\n    title: `VA.gov Developer's Documentations`,\n    sidebar: require('./src/sidebar.js')\n  },\n  pathPrefix: '/veteran-facing-services-tools',\n  plugins: [\n    `gatsby-plugin-react-helmet`,\n    {\n      resolve: `gatsby-source-filesystem`,\n      options: {\n        name: `images`,\n        path: `${__dirname}/src/images`,\n      },\n    },\n    `gatsby-transformer-sharp`,\n    `gatsby-plugin-sharp`,\n    {\n      resolve: `gatsby-plugin-manifest`,\n      options: {\n        name: `vagov-documentation`,\n        short_name: `vagov-documentation`,\n        start_url: `/`,\n      },\n    },\n    `gatsby-example-plugin`,\n  ],\n}\n"))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},"If you would like to debug your build process code, you can run"),c.a.createElement(i.MDXTag,{name:"pre",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-shell"}},"$ yarn develop:inspect\n")))))},n}(c.a.Component),d={}},305:function(e,n,t){var a;e.exports=(a=t(307))&&a.default||a},306:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov Developer's Documentations"}}}}},307:function(e,n,t){"use strict";t.r(n);var a=t(18),o=t.n(a),r=t(2),m=t.n(r),s=t(13),c=t.n(s),i=t(94),l=t(9),p=function(e){var n=e.location,t=l.default.getResourcesForPathnameSync(n.pathname);return m.a.createElement(i.a,o()({location:n,pageResources:t},t.json))};p.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},n.default=p},308:function(e){e.exports={data:{components:{edges:[{node:{path:"/platform/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/platform/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/platform/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/platform/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/platform/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/platform/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/platform/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/platform/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/platform/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/platform/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/platform/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/platform/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/platform/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/platform/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/platform/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/platform/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/platform/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/platform/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/platform/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/platform/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/platform/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/platform/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/platform/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/platform/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/platform/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/platform/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/platform/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/platform/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/platform/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/platform/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/platform/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/platform/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/platform/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/platform/helpmenu/",context:{source:"component",name:"HelpMenu"}}}]}}}},309:function(e,n){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"getting-started",items:[{name:"Environment setup",items:[{name:"Set up VA.gov locally",href:"getting-started"},{name:"Internal Tools",href:"getting-started/internal-tools"}]},{name:"Common tasks",items:[{name:"Running VA.gov locally",href:"getting-started/common-tasks/local"},{name:"Building VA.gov",href:"getting-started/common-tasks/build"},{name:"Running tests",href:"getting-started/common-tasks/tests"},{name:"Linting your code",href:"getting-started/common-tasks/lint"},{name:"Creating a new React application",href:"getting-started/common-tasks/new-app"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"},{name:"Adding new pages to this site",href:"getting-started/common-tasks/doc-page"},{name:"Adding pages from Github to this site",href:"getting-started/common-tasks/external-doc-page"},{name:"Add Graphs to MDX",href:"getting-started/common-tasks/add-graphs-to-mdx"},{name:"Creating A Gatsby Plugin",href:"getting-started/common-tasks/creating-gatsby-plugins"}]},{name:"Bundes and Code organization",href:"getting-started/bundles-and-code-organization"},{name:"Standards and conventions",items:[]},{name:"Development workflow",items:[]}]},{id:"architecture",name:"Architecture",href:"architecture",items:[{name:"Site structure",items:[]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing"},{name:"Teamsite"}]},{id:"forms",name:"Forms",href:"forms",items:[{name:"Introduction",href:"forms/when-to-use-fs"},{name:"Tutorial",items:[{name:"Form Tutorial - Basic",href:"forms/form-tutorial-basic"},{name:"Form Tutorial - Intermediate",href:"forms/form-tutorial-intermediate"},{name:"Form Tutorial - Advanced",href:"forms/form-tutorial-advanced"},{name:"Setting up Save in Progress",href:"forms/save-in-progress"},{name:"Forms in Production",href:"forms/forms-in-production"}]},{name:"Architecture",items:[]},{name:"Common tasks",items:[]}]},{id:"platform",name:"Platform",href:"platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]}]}},310:function(e,n,t){"use strict";var a=t(3),o=t.n(a),r=t(306),m=t(2),s=t.n(m),c=t(13),i=t.n(c),l=t(311),p=t.n(l),u=t(68),d=t.n(u),g=(t(305),s.a.createContext({})),f=function(e){return s.a.createElement(g.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):s.a.createElement("div",null,"Loading (StaticQuery)")})};f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func};t(17),t(133),t(134),t(135);var h=t(308);function b(){return s.a.createElement(f,{query:"157057713",render:function(e){return s.a.createElement(E,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:h})}function E(e){var n=e.items;return n.length?s.a.createElement("ul",{className:"menu-list"},n.map(function(e){return s.a.createElement("li",{key:e.name},!!e.items&&s.a.createElement("li",{key:e.name},s.a.createElement("h4",null,e.name),s.a.createElement(E,{items:e.items})),"componentList"===e.query&&s.a.createElement("li",{key:e.name},s.a.createElement("h4",null,e.name),s.a.createElement(b,null)),!!e.href&&s.a.createElement("li",{key:e.name},s.a.createElement(d.a,{to:e.href},e.name)),!e.href&&!e.items&&!e.query&&s.a.createElement("li",{key:e.name},e.name," (future)"))})):null}var y=t(309),x=t.n(y);function v(e){var n=e.location,t=x.a.sections.find(function(e){return n.pathname.includes("/"+e.href)});return s.a.createElement("aside",{className:"sidebar"},s.a.createElement("div",{className:"search"},s.a.createElement("div",{className:"input-wrap"},s.a.createElement("input",{type:"search",value:"",onChange:function(){},placeholder:"Type to search"}))),!!t&&s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",null,t.name),s.a.createElement(d.a,{className:"home-link",to:""},"Home"),s.a.createElement(E,{items:t.items})),!t&&s.a.createElement("ul",{className:"menu-list"},x.a.sections.map(function(e){return s.a.createElement("li",{key:e.id},s.a.createElement(d.a,{to:e.href},e.name))})))}t(312);var T=function(e){function n(){return e.apply(this,arguments)||this}o()(n,e);var t=n.prototype;return t.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},t.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},t.render=function(){var e=this.props,n=e.children,t=e.location;return s.a.createElement(f,{query:"1044757290",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},s.a.createElement("html",{lang:"en"})),s.a.createElement(v,{location:t}),s.a.createElement("div",{className:"ContentArea docSearch-content"},n))},data:r})},n}(s.a.Component);T.propTypes={children:i.a.node.isRequired};n.a=T}}]);
//# sourceMappingURL=component---src-pages-getting-started-common-tasks-creating-gatsby-plugins-mdx-93b660659339df31ff49.js.map