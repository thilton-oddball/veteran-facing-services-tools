(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{292:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d}),n.d(t,"_frontmatter",function(){return u});n(42);var a=n(43),o=n.n(a),r=n(3),m=n.n(r),c=n(2),p=n.n(c),s=n(4),l=n(310),i={},d=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=l.a,n}return m()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=o()(e,["components"]);return p.a.createElement(s.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},i,n),components:t},p.a.createElement(s.MDXTag,{name:"h2",components:t},"How to Add Documents"),p.a.createElement(s.MDXTag,{name:"p",components:t},"This is the process of how you should add new pages and documents to this website."),p.a.createElement(s.MDXTag,{name:"h3",components:t},"MDX Format"),p.a.createElement(s.MDXTag,{name:"p",components:t},"We will be using the .mdx format to create our documents.\nMDX is a format that lets you seamlessly use JSX in your Markdown documents.\nYou can import components, like interactive charts or notifs, and export metadata.\nThis makes writing long-form content with components a blast 🚀"),p.a.createElement(s.MDXTag,{name:"p",components:t},p.a.createElement(s.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://mdxjs.com/"}},"https://mdxjs.com/")),p.a.createElement(s.MDXTag,{name:"h3",components:t},"Adding React Component documentation"),p.a.createElement(s.MDXTag,{name:"p",components:t},"Adding React Components documentation in Formation."),p.a.createElement(s.MDXTag,{name:"ul",components:t},p.a.createElement(s.MDXTag,{name:"li",components:t,parentName:"ul"},p.a.createElement(s.MDXTag,{name:"p",components:t,parentName:"li"},p.a.createElement(s.MDXTag,{name:"strong",components:t,parentName:"p"},"Take a look at the example MDX file at formation-react/src/components/AcceptTermsPrompt/AcceptTermsPrompt.mdx.\nYou can use this as a starter"))),p.a.createElement(s.MDXTag,{name:"li",components:t,parentName:"ul"},p.a.createElement(s.MDXTag,{name:"p",components:t,parentName:"li"},p.a.createElement(s.MDXTag,{name:"strong",components:t,parentName:"p"},"Create a .mdx file the same name as your component in the ",p.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"strong"},"formation-react/src/components")," folder, adjacent to your component.")),p.a.createElement(s.MDXTag,{name:"pre",components:t,parentName:"li"},p.a.createElement(s.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"- components\n  - YourComponent.js\n  - YourComponent.mdx\n"))),p.a.createElement(s.MDXTag,{name:"li",components:t,parentName:"ul"},p.a.createElement(s.MDXTag,{name:"p",components:t,parentName:"li"},p.a.createElement(s.MDXTag,{name:"strong",components:t,parentName:"p"},"Add the required frontmatter at the top of the page")),p.a.createElement(s.MDXTag,{name:"pre",components:t,parentName:"li"},p.a.createElement(s.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"  ---\n  title: AcceptTermsPrompt\n  name: AcceptTermsPrompt\n  ---\n"))),p.a.createElement(s.MDXTag,{name:"li",components:t,parentName:"ul"},p.a.createElement(s.MDXTag,{name:"p",components:t,parentName:"li"},"**Restart the development server")),p.a.createElement(s.MDXTag,{name:"li",components:t,parentName:"ul"},p.a.createElement(s.MDXTag,{name:"p",components:t,parentName:"li"},p.a.createElement(s.MDXTag,{name:"strong",components:t,parentName:"p"},"If you run into any errors or your page doesn't render correctly,\ntry to delete the .cache file and restart the server again"))),p.a.createElement(s.MDXTag,{name:"li",components:t,parentName:"ul"},p.a.createElement(s.MDXTag,{name:"p",components:t,parentName:"li"},p.a.createElement(s.MDXTag,{name:"strong",components:t,parentName:"p"},"After you have your page setup you can add markdown and your component code."))),p.a.createElement(s.MDXTag,{name:"li",components:t,parentName:"ul"},p.a.createElement(s.MDXTag,{name:"p",components:t,parentName:"li"},p.a.createElement(s.MDXTag,{name:"strong",components:t,parentName:"p"},"Add descriptions to your PropTypes in your Component files")),p.a.createElement(s.MDXTag,{name:"p",components:t,parentName:"li"},"We need to convert the propType comments to jsDoc format.\nThis will not show up in the propTypes definitions on your page if you\ndon't have it in a jsDoc format."),p.a.createElement(s.MDXTag,{name:"p",components:t,parentName:"li"},"Here is an examples of how it should look:"),p.a.createElement(s.MDXTag,{name:"p",components:t,parentName:"li"},"Changed code:"),p.a.createElement(s.MDXTag,{name:"pre",components:t,parentName:"li"},p.a.createElement(s.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript"}},"  YourComponent.propTypes = {\n    /**\n     * content shown as the actual terms and conditions\n     */\n    user: PropTypes.object,\n    /**\n     * cancel button click handler\n     */\n    onCancel: PropTypes.func\n  };\n")),p.a.createElement(s.MDXTag,{name:"p",components:t,parentName:"li"},"It will look like this on the page."),p.a.createElement(s.MDXTag,{name:"p",components:t,parentName:"li"},p.a.createElement("a",{className:"gatsby-resp-image-link",href:"/static/45201d2577870335ad99cf46a6f1127d/bf13a/proptypes.png",style:{display:"block"},target:"_blank",rel:"noopener"},p.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"881px"}},p.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"26.4472190692395%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),p.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"proptypes",title:"PropType Image",src:"/static/45201d2577870335ad99cf46a6f1127d/ab4b1/proptypes.png",srcSet:"/static/45201d2577870335ad99cf46a6f1127d/b1fa4/proptypes.png 259w,\n/static/45201d2577870335ad99cf46a6f1127d/c69ca/proptypes.png 518w,\n/static/45201d2577870335ad99cf46a6f1127d/ab4b1/proptypes.png 1035w,\n/static/45201d2577870335ad99cf46a6f1127d/6401b/proptypes.png 1553w,\n/static/45201d2577870335ad99cf46a6f1127d/bf13a/proptypes.png 1762w",sizes:"(max-width: 881px) 100vw, 881px"}))))),p.a.createElement(s.MDXTag,{name:"li",components:t,parentName:"ul"},p.a.createElement(s.MDXTag,{name:"p",components:t,parentName:"li"},p.a.createElement(s.MDXTag,{name:"strong",components:t,parentName:"p"},"Once this is all setup you can start adding your React Component and markdown to your file."))),p.a.createElement(s.MDXTag,{name:"li",components:t,parentName:"ul"},p.a.createElement(s.MDXTag,{name:"p",components:t,parentName:"li"},p.a.createElement(s.MDXTag,{name:"strong",components:t,parentName:"p"},"Start gatsby")),p.a.createElement(s.MDXTag,{name:"pre",components:t,parentName:"li"},p.a.createElement(s.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"yarn develop\n"))),p.a.createElement(s.MDXTag,{name:"li",components:t,parentName:"ul"},p.a.createElement(s.MDXTag,{name:"p",components:t,parentName:"li"},p.a.createElement(s.MDXTag,{name:"strong",components:t,parentName:"p"},"You should be able to see your component in the sidebar or go to the url.")),p.a.createElement(s.MDXTag,{name:"pre",components:t,parentName:"li"},p.a.createElement(s.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"http://localhost:8000/yourcomponentnamelowercase\n")))),p.a.createElement(s.MDXTag,{name:"h3",components:t},"Adding Document Pages"),p.a.createElement(s.MDXTag,{name:"ul",components:t},p.a.createElement(s.MDXTag,{name:"li",components:t,parentName:"ul"},p.a.createElement(s.MDXTag,{name:"p",components:t,parentName:"li"},p.a.createElement(s.MDXTag,{name:"strong",components:t,parentName:"p"},"Create a .mdx file in ",p.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"strong"},"src/pages")))),p.a.createElement(s.MDXTag,{name:"li",components:t,parentName:"ul"},p.a.createElement(s.MDXTag,{name:"p",components:t,parentName:"li"},p.a.createElement(s.MDXTag,{name:"strong",components:t,parentName:"p"},"Add the required frontmatter at the top of the page. You will need this if you\nwant it to display in the sidebar.")),p.a.createElement(s.MDXTag,{name:"pre",components:t,parentName:"li"},p.a.createElement(s.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-markdown"}},"  // Your .mdx page\n  ---\n  title: How to Add Documents\n  ---\n"))),p.a.createElement(s.MDXTag,{name:"li",components:t,parentName:"ul"},p.a.createElement(s.MDXTag,{name:"p",components:t,parentName:"li"},p.a.createElement(s.MDXTag,{name:"strong",components:t,parentName:"p"},"You have the option to create React Components and add them to the MDX file.\nReact components for pages should be located in src/components")))),p.a.createElement(s.MDXTag,{name:"h3",components:t},"Updating the sidebar"),p.a.createElement(s.MDXTag,{name:"p",components:t},"After you've added a page, you may want to add it to the sidebar. At ",p.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"src/sidebar.js"),", you'll find the layout for\nthe main site navigation and sidebar. You can add your page where it makes sense in the site's information architecture."),p.a.createElement(s.MDXTag,{name:"p",components:t},"There are examples in the sidebar file to follow. You'll need to add an object with ",p.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"name")," and ",p.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"href")," properties\nfor regular links and you can also create nested sections by leaving out ",p.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"href")," and adding an ",p.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"items")," array to objects."),p.a.createElement(s.MDXTag,{name:"h3",components:t},"GraphQl Sample Reference"),p.a.createElement(s.MDXTag,{name:"p",components:t},"  ",p.a.createElement(s.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.gatsbyjs.org/docs/graphql-reference/"}},"https://www.gatsbyjs.org/docs/graphql-reference/")),p.a.createElement(s.MDXTag,{name:"h3",components:t},"Github API GraphQL Explorer"),p.a.createElement(s.MDXTag,{name:"p",components:t},"  ",p.a.createElement(s.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://developer.github.com/v4/explorer/"}},"https://developer.github.com/v4/explorer/")))},t}(p.a.Component),u={}},305:function(e,t,n){var a;e.exports=(a=n(307))&&a.default||a},306:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov Developer's Documentations"}}}}},307:function(e,t,n){"use strict";n.r(t);var a=n(18),o=n.n(a),r=n(2),m=n.n(r),c=n(13),p=n.n(c),s=n(94),l=n(9),i=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return m.a.createElement(s.a,o()({location:t,pageResources:n},n.json))};i.propTypes={location:p.a.shape({pathname:p.a.string.isRequired}).isRequired},t.default=i},308:function(e){e.exports={data:{components:{edges:[{node:{path:"/platform/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/platform/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/platform/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/platform/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/platform/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/platform/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/platform/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/platform/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/platform/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/platform/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/platform/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/platform/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/platform/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/platform/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/platform/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/platform/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/platform/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/platform/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/platform/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/platform/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/platform/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/platform/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/platform/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/platform/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/platform/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/platform/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/platform/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/platform/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/platform/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/platform/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/platform/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/platform/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/platform/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/platform/modal/",context:{source:"component",name:"Modal"}}}]}}}},309:function(e,t){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"getting-started",items:[{name:"Environment setup",items:[{name:"Set up VA.gov locally",href:"getting-started"},{name:"Internal Tools",href:"getting-started/internal-tools"}]},{name:"Common tasks",items:[{name:"Running VA.gov locally",href:"getting-started/common-tasks/local"},{name:"Building VA.gov",href:"getting-started/common-tasks/build"},{name:"Running tests",href:"getting-started/common-tasks/tests"},{name:"Linting your code",href:"getting-started/common-tasks/lint"},{name:"Creating a new React application",href:"getting-started/common-tasks/new-app"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"},{name:"Adding new pages to this site",href:"getting-started/common-tasks/doc-page"},{name:"Adding pages from Github to this site",href:"getting-started/common-tasks/external-doc-page"},{name:"Add Graphs to MDX",href:"getting-started/common-tasks/add-graphs-to-mdx"}]},{name:"Code organization",items:[]},{name:"Standards and conventions",items:[]},{name:"Development workflow",items:[]}]},{id:"architecture",name:"Architecture",href:"architecture",items:[{name:"Site structure",items:[]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing"},{name:"Teamsite"}]},{id:"forms",name:"Forms",href:"forms",items:[{name:"Introduction",href:"forms/when-to-use-fs"},{name:"Tutorial",items:[{name:"Form Tutorial - Basic",href:"forms/form-tutorial-basic"},{name:"Form Tutorial - Intermediate",href:"forms/form-tutorial-intermediate"},{name:"Form Tutorial - Advanced",href:"forms/form-tutorial-advanced"},{name:"Setting up Save in Progress",href:"forms/save-in-progress"},{name:"Forms in Production",href:"forms/forms-in-production"}]},{name:"Architecture",items:[]},{name:"Common tasks",items:[]}]},{id:"platform",name:"Platform",href:"platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]}]}},310:function(e,t,n){"use strict";var a=n(3),o=n.n(a),r=n(306),m=n(2),c=n.n(m),p=n(13),s=n.n(p),l=n(311),i=n.n(l),d=n(68),u=n.n(d),g=(n(305),c.a.createContext({})),h=function(e){return c.a.createElement(g.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):c.a.createElement("div",null,"Loading (StaticQuery)")})};h.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func};n(17),n(133),n(134),n(135);var f=n(308);function E(){return c.a.createElement(h,{query:"157057713",render:function(e){return c.a.createElement(T,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:f})}function T(e){var t=e.items;return t.length?c.a.createElement("ul",{className:"menu-list"},t.map(function(e){return c.a.createElement("li",{key:e.name},!!e.items&&c.a.createElement("li",{key:e.name},c.a.createElement("h4",null,e.name),c.a.createElement(T,{items:e.items})),"componentList"===e.query&&c.a.createElement("li",{key:e.name},c.a.createElement("h4",null,e.name),c.a.createElement(E,null)),!!e.href&&c.a.createElement("li",{key:e.name},c.a.createElement(u.a,{to:e.href},e.name)),!e.href&&!e.items&&!e.query&&c.a.createElement("li",{key:e.name},e.name," (future)"))})):null}var y=n(309),D=n.n(y);function M(e){var t=e.location,n=D.a.sections.find(function(e){return t.pathname.includes("/"+e.href)});return c.a.createElement("aside",{className:"sidebar"},c.a.createElement("div",{className:"search"},c.a.createElement("div",{className:"input-wrap"},c.a.createElement("input",{type:"search",value:"",onChange:function(){},placeholder:"Type to search"}))),!!n&&c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,n.name),c.a.createElement(u.a,{className:"home-link",to:""},"Home"),c.a.createElement(T,{items:n.items})),!n&&c.a.createElement("ul",{className:"menu-list"},D.a.sections.map(function(e){return c.a.createElement("li",{key:e.id},c.a.createElement(u.a,{to:e.href},e.name))})))}n(312);var b=function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},n.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},n.render=function(){var e=this.props,t=e.children,n=e.location;return c.a.createElement(h,{query:"1044757290",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(i.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},c.a.createElement("html",{lang:"en"})),c.a.createElement(M,{location:n}),c.a.createElement("div",{className:"ContentArea docSearch-content"},t))},data:r})},t}(c.a.Component);b.propTypes={children:s.a.node.isRequired};t.a=b}}]);
//# sourceMappingURL=component---src-pages-getting-started-common-tasks-doc-page-mdx-6d0a7121ed4ced4f4c9e.js.map