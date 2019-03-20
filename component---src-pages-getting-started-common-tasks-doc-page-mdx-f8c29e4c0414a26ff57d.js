(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{292:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return u}),t.d(n,"_frontmatter",function(){return d});t(42);var a=t(43),o=t.n(a),r=t(3),m=t.n(r),c=t(2),p=t.n(c),s=t(4),l=t(308),i={},u=function(e){function n(n){var t;return(t=e.call(this,n)||this).layout=l.a,t}return m()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,t=o()(e,["components"]);return p.a.createElement(s.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},i,t),components:n},p.a.createElement(s.MDXTag,{name:"h2",components:n},"How to Add Documents"),p.a.createElement(s.MDXTag,{name:"p",components:n},"This is the process of how you should add new pages and documents to this website."),p.a.createElement(s.MDXTag,{name:"h3",components:n},"MDX Format"),p.a.createElement(s.MDXTag,{name:"p",components:n},"We will be using the .mdx format to create our documents.\nMDX is a format that lets you seamlessly use JSX in your Markdown documents.\nYou can import components, like interactive charts or notifs, and export metadata.\nThis makes writing long-form content with components a blast 🚀"),p.a.createElement(s.MDXTag,{name:"p",components:n},p.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://mdxjs.com/"}},"https://mdxjs.com/")),p.a.createElement(s.MDXTag,{name:"h3",components:n},"Adding React Component documentation"),p.a.createElement(s.MDXTag,{name:"p",components:n},"Adding React Components documentation in Formation."),p.a.createElement(s.MDXTag,{name:"ul",components:n},p.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},p.a.createElement(s.MDXTag,{name:"p",components:n,parentName:"li"},p.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"p"},"Take a look at the example MDX file at formation-react/src/components/AcceptTermsPrompt/AcceptTermsPrompt.mdx.\nYou can use this as a starter"))),p.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},p.a.createElement(s.MDXTag,{name:"p",components:n,parentName:"li"},p.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"p"},"Create a .mdx file the same name as your component in the ",p.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"strong"},"formation-react/src/components")," folder, adjacent to your component.")),p.a.createElement(s.MDXTag,{name:"pre",components:n,parentName:"li"},p.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"- components\n  - YourComponent.js\n  - YourComponent.mdx\n"))),p.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},p.a.createElement(s.MDXTag,{name:"p",components:n,parentName:"li"},p.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"p"},"Add the required frontmatter at the top of the page")),p.a.createElement(s.MDXTag,{name:"pre",components:n,parentName:"li"},p.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"  ---\n  title: AcceptTermsPrompt\n  name: AcceptTermsPrompt\n  ---\n"))),p.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},p.a.createElement(s.MDXTag,{name:"p",components:n,parentName:"li"},"**Restart the development server")),p.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},p.a.createElement(s.MDXTag,{name:"p",components:n,parentName:"li"},p.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"p"},"If you run into any errors or your page doesn't render correctly,\ntry to delete the .cache file and restart the server again"))),p.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},p.a.createElement(s.MDXTag,{name:"p",components:n,parentName:"li"},p.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"p"},"After you have your page setup you can add markdown and your component code."))),p.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},p.a.createElement(s.MDXTag,{name:"p",components:n,parentName:"li"},p.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"p"},"Add descriptions to your PropTypes in your Component files")),p.a.createElement(s.MDXTag,{name:"p",components:n,parentName:"li"},"We need to convert the propType comments to jsDoc format.\nThis will not show up in the propTypes definitions on your page if you\ndon't have it in a jsDoc format."),p.a.createElement(s.MDXTag,{name:"p",components:n,parentName:"li"},"Here is an examples of how it should look:"),p.a.createElement(s.MDXTag,{name:"p",components:n,parentName:"li"},"Changed code:"),p.a.createElement(s.MDXTag,{name:"pre",components:n,parentName:"li"},p.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"  YourComponent.propTypes = {\n    /**\n     * content shown as the actual terms and conditions\n     */\n    user: PropTypes.object,\n    /**\n     * cancel button click handler\n     */\n    onCancel: PropTypes.func\n  };\n")),p.a.createElement(s.MDXTag,{name:"p",components:n,parentName:"li"},"It will look like this on the page."),p.a.createElement(s.MDXTag,{name:"p",components:n,parentName:"li"},p.a.createElement(s.MDXTag,{name:"img",components:n,parentName:"p",props:{src:"../../images/proptypes.png",alt:"proptypes",title:"PropType Image"}}))),p.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},p.a.createElement(s.MDXTag,{name:"p",components:n,parentName:"li"},p.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"p"},"Once this is all setup you can start adding your React Component and markdown to your file."))),p.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},p.a.createElement(s.MDXTag,{name:"p",components:n,parentName:"li"},p.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"p"},"Start gatsby")),p.a.createElement(s.MDXTag,{name:"pre",components:n,parentName:"li"},p.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"yarn develop\n"))),p.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},p.a.createElement(s.MDXTag,{name:"p",components:n,parentName:"li"},p.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"p"},"You should be able to see your component in the sidebar or go to the url.")),p.a.createElement(s.MDXTag,{name:"pre",components:n,parentName:"li"},p.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"http://localhost:8000/yourcomponentnamelowercase\n")))),p.a.createElement(s.MDXTag,{name:"h3",components:n},"Adding Document Pages"),p.a.createElement(s.MDXTag,{name:"ul",components:n},p.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},p.a.createElement(s.MDXTag,{name:"p",components:n,parentName:"li"},p.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"p"},"Create a .mdx file in ",p.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"strong"},"src/pages")))),p.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},p.a.createElement(s.MDXTag,{name:"p",components:n,parentName:"li"},p.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"p"},"Add the required frontmatter at the top of the page. You will need this if you\nwant it to display in the sidebar.")),p.a.createElement(s.MDXTag,{name:"pre",components:n,parentName:"li"},p.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-markdown"}},"  // Your .mdx page\n  ---\n  title: How to Add Documents\n  ---\n"))),p.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},p.a.createElement(s.MDXTag,{name:"p",components:n,parentName:"li"},p.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"p"},"You have the option to create React Components and add them to the MDX file.\nReact components for pages should be located in src/components")))),p.a.createElement(s.MDXTag,{name:"h3",components:n},"Updating the sidebar"),p.a.createElement(s.MDXTag,{name:"p",components:n},"After you've added a page, you may want to add it to the sidebar. At ",p.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"src/sidebar.js"),", you'll find the layout for\nthe main site navigation and sidebar. You can add your page where it makes sense in the site's information architecture."),p.a.createElement(s.MDXTag,{name:"p",components:n},"There are examples in the sidebar file to follow. You'll need to add an object with ",p.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"name")," and ",p.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"href")," properties\nfor regular links and you can also create nested sections by leaving out ",p.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"href")," and adding an ",p.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"items")," array to objects."),p.a.createElement(s.MDXTag,{name:"h3",components:n},"GraphQl Sample Reference"),p.a.createElement(s.MDXTag,{name:"p",components:n},"  ",p.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://www.gatsbyjs.org/docs/graphql-reference/"}},"https://www.gatsbyjs.org/docs/graphql-reference/")),p.a.createElement(s.MDXTag,{name:"h3",components:n},"Github API GraphQL Explorer"),p.a.createElement(s.MDXTag,{name:"p",components:n},"  ",p.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://developer.github.com/v4/explorer/"}},"https://developer.github.com/v4/explorer/")))},n}(p.a.Component),d={}},303:function(e,n,t){var a;e.exports=(a=t(305))&&a.default||a},304:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov Developer's Documentations"}}}}},305:function(e,n,t){"use strict";t.r(n);var a=t(18),o=t.n(a),r=t(2),m=t.n(r),c=t(13),p=t.n(c),s=t(94),l=t(9),i=function(e){var n=e.location,t=l.default.getResourcesForPathnameSync(n.pathname);return m.a.createElement(s.a,o()({location:n,pageResources:t},t.json))};i.propTypes={location:p.a.shape({pathname:p.a.string.isRequired}).isRequired},n.default=i},306:function(e){e.exports={data:{components:{edges:[{node:{path:"/platform/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/platform/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/platform/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/platform/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/platform/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/platform/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/platform/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/platform/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/platform/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/platform/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/platform/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/platform/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/platform/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/platform/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/platform/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/platform/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/platform/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/platform/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/platform/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/platform/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/platform/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/platform/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/platform/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/platform/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/platform/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/platform/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/platform/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/platform/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/platform/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/platform/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/platform/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/platform/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/platform/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/platform/modal/",context:{source:"component",name:"Modal"}}}]}}}},307:function(e,n){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"getting-started",items:[{name:"Environment setup",items:[{name:"Set up VA.gov locally",href:"getting-started"},{name:"Internal Tools",href:"getting-started/internal-tools"}]},{name:"Common tasks",items:[{name:"Running VA.gov locally",href:"getting-started/common-tasks/local"},{name:"Building VA.gov",href:"getting-started/common-tasks/build"},{name:"Running tests",href:"getting-started/common-tasks/tests"},{name:"Linting your code",href:"getting-started/common-tasks/lint"},{name:"Creating a new React application",href:"getting-started/common-tasks/new-app"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"},{name:"Adding new pages to this site",href:"getting-started/common-tasks/doc-page"},{name:"Adding pages from Github to this site",href:"getting-started/common-tasks/external-doc-page"}]},{name:"Code organization",items:[]},{name:"Standards and conventions",items:[]},{name:"Development workflow",items:[]}]},{id:"architecture",name:"Architecture",href:"architecture",items:[{name:"Site structure",items:[]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing"},{name:"Teamsite"}]},{id:"forms",name:"Forms",href:"forms",items:[{name:"Introduction",href:"forms/when-to-use-fs"},{name:"Tutorial",items:[{name:"Form Tutorial - Basic",href:"forms/form-tutorial-basic"},{name:"Form Tutorial - Intermediate",href:"forms/form-tutorial-intermediate"},{name:"Form Tutorial - Advanced",href:"forms/form-tutorial-advanced"},{name:"Setting up Save in Progress",href:"forms/save-in-progress"},{name:"Forms in Production",href:"forms/forms-in-production"}]},{name:"Architecture",items:[]},{name:"Common tasks",items:[]}]},{id:"platform",name:"Platform",href:"platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]}]}},308:function(e,n,t){"use strict";var a=t(3),o=t.n(a),r=t(304),m=t(2),c=t.n(m),p=t(13),s=t.n(p),l=t(309),i=t.n(l),u=t(68),d=t.n(u),g=(t(303),c.a.createContext({})),h=function(e){return c.a.createElement(g.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):c.a.createElement("div",null,"Loading (StaticQuery)")})};h.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func};t(17),t(133),t(134),t(135);var f=t(306);function E(){return c.a.createElement(h,{query:"157057713",render:function(e){return c.a.createElement(T,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:f})}function T(e){var n=e.items;return n.length?c.a.createElement("ul",{className:"menu-list"},n.map(function(e){return c.a.createElement("li",{key:e.name},!!e.items&&c.a.createElement("li",{key:e.name},c.a.createElement("h4",null,e.name),c.a.createElement(T,{items:e.items})),"componentList"===e.query&&c.a.createElement("li",{key:e.name},c.a.createElement("h4",null,e.name),c.a.createElement(E,null)),!!e.href&&c.a.createElement("li",{key:e.name},c.a.createElement(d.a,{to:e.href},e.name)),!e.href&&!e.items&&!e.query&&c.a.createElement("li",{key:e.name},e.name," (future)"))})):null}var D=t(307),M=t.n(D);function y(e){var n=e.location,t=M.a.sections.find(function(e){return n.pathname.includes("/"+e.href)});return c.a.createElement("aside",{className:"sidebar"},c.a.createElement("div",{className:"search"},c.a.createElement("div",{className:"input-wrap"},c.a.createElement("input",{type:"search",value:"",onChange:function(){},placeholder:"Type to search"}))),!!t&&c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,t.name),c.a.createElement(d.a,{className:"home-link",to:""},"Home"),c.a.createElement(T,{items:t.items})),!t&&c.a.createElement("ul",{className:"menu-list"},M.a.sections.map(function(e){return c.a.createElement("li",{key:e.id},c.a.createElement(d.a,{to:e.href},e.name))})))}t(310);var X=function(e){function n(){return e.apply(this,arguments)||this}o()(n,e);var t=n.prototype;return t.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},t.render=function(){var e=this.props,n=e.children,t=e.location;return c.a.createElement(h,{query:"1044757290",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(i.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},c.a.createElement("html",{lang:"en"})),c.a.createElement(y,{location:t}),c.a.createElement("div",{className:"ContentArea docSearch-content"},n))},data:r})},n}(c.a.Component);X.propTypes={children:s.a.node.isRequired};n.a=X}}]);
//# sourceMappingURL=component---src-pages-getting-started-common-tasks-doc-page-mdx-f8c29e4c0414a26ff57d.js.map