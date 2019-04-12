(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{297:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d}),n.d(t,"_frontmatter",function(){return u});n(42);var a=n(43),o=n.n(a),r=n(3),m=n.n(r),s=n(2),i=n.n(s),c=n(4),p=n(312),l={},d=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=p.a,n}return m()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=o()(e,["components"]);return i.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},l,n),components:t},i.a.createElement(c.MDXTag,{name:"h2",components:t},"Adding External Pages from Github API"),i.a.createElement(c.MDXTag,{name:"p",components:t},"We are going to be using Github's GraphQL API to consume markdown pages from GitHub.\nThis document will detail the process of adding pages and how it all works."),i.a.createElement(c.MDXTag,{name:"h3",components:t},"Why?"),i.a.createElement(c.MDXTag,{name:"p",components:t},"We wanted a way to get pre-existing documents from GitHub without having to\nduplicate it."),i.a.createElement(c.MDXTag,{name:"h3",components:t},"How to Add External pages"),i.a.createElement(c.MDXTag,{name:"p",components:t},"I have created a Gatsby plugin called ",i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"p"},"github-api-pages")," located at ",i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"p"},"/plugins/github-api-pages"),".\nYou can learn more about creating your own plugin at ",i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/getting-started/common-tasks/creating-gatsby-plugins"}},"creating-gatsby-plugins"),"\nAll code that is interfacing with the GitHubAPI is located at ",i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"p"},"/plugins/github-api-pages/-github-api"),". We should try to\nkeep any code that is interfacing with the GitHubAPI in this file so we have one source of truth."),i.a.createElement(c.MDXTag,{name:"h5",components:t},"Limitations"),i.a.createElement(c.MDXTag,{name:"p",components:t},"Due to GitHub's rate limit we can only grab whole directories or single files at a time.\nIf we try to get the whole repo it will give us a rate limit error. This is also due to the size of our documentation repo."),i.a.createElement(c.MDXTag,{name:"h5",components:t},"Data you will need to make the API request"),i.a.createElement(c.MDXTag,{name:"ul",components:t},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Owner of the repo"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Repo name"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"File directory you want to add or file fileName")),i.a.createElement(c.MDXTag,{name:"p",components:t},"Example:"),i.a.createElement(c.MDXTag,{name:"pre",components:t},i.a.createElement(c.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"department-of-veterans-affairs/vets.gov-team/Work Practices/Accessing-Staging.md\n|            owner           |     repo    |           file directory           |\n")),i.a.createElement(c.MDXTag,{name:"p",components:t},i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"p"},i.a.createElement(c.MDXTag,{name:"em",components:t,parentName:"strong"},"Note")),": The file directory is not the url but the actual directory.\nHere is an example of what the file directory should look like:"),i.a.createElement(c.MDXTag,{name:"h2",components:t},i.a.createElement("a",{className:"gatsby-resp-image-link",href:"/static/9351180725b6bc47870739d8a8fd4a71/fa498/github-file-directory.png",style:{display:"block"},target:"_blank",rel:"noopener"},i.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"665px"}},i.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"9.323308270676693%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),i.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"github file directory",title:"",src:"/static/9351180725b6bc47870739d8a8fd4a71/17fa4/github-file-directory.png",srcSet:"/static/9351180725b6bc47870739d8a8fd4a71/f4a45/github-file-directory.png 259w,\n/static/9351180725b6bc47870739d8a8fd4a71/ef0f6/github-file-directory.png 518w,\n/static/9351180725b6bc47870739d8a8fd4a71/17fa4/github-file-directory.png 1035w,\n/static/9351180725b6bc47870739d8a8fd4a71/fa498/github-file-directory.png 1330w",sizes:"(max-width: 665px) 100vw, 665px"})))),i.a.createElement(c.MDXTag,{name:"p",components:t},i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"p"},"How to add files:"),"\nAfter you have gathered the information (owner, repo, file directory) from github, now you can add the files\ninto Gatsby."),i.a.createElement(c.MDXTag,{name:"ul",components:t},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},"Located in the ",i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"p"},"/plugins/github-api-pages/")," you should see a ",i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"p"},"pages")," directory. To add github file locations\nyou need to either add it to a list or create your own list. Here are the steps of how to add your own list."),i.a.createElement(c.MDXTag,{name:"ul",components:t,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},"Add a JSON file named the main directory of your github directory. In this example we will be using ",i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"p"},"work-practices"),".\nYou can see how we are using the data we gathered earlier (owner, repo, file directory). All you need to do is add your\nfile directory to the ",i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"p"},"directoryPaths")," array. It can be a directory or just a file location."),i.a.createElement(c.MDXTag,{name:"pre",components:t,parentName:"li"},i.a.createElement(c.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-JSON"}},'// /plugins/github-api-pages/pages/work-practices.json\n\n{\n  "owner": "department-of-veterans-affairs",\n  "repo": "vets.gov-team",\n  "directoryPaths": [\n    "Work Practices/Accessibility and 508",\n    "Work Practices/Accessibility and 508/meeting-notes/2017-06-05-meeting-508-office.md"\n  ]\n}\n'))),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},"After you have set up the JSON file, now you have to add it to the list of pages. This is\ndone in the ",i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"p"},"/plugins/github-api-pages/pages/index.js")," file."),i.a.createElement(c.MDXTag,{name:"pre",components:t,parentName:"li"},i.a.createElement(c.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"// /plugins/github-api-pages/pages/index.js\n\nexports.workPractices = require('./work-practices.json');\n")))))),i.a.createElement(c.MDXTag,{name:"h3",components:t},"How it Works"),i.a.createElement(c.MDXTag,{name:"p",components:t},"Initially we were trying to use pre-existing Gatsby plugins to do this but\ncouldn't find one that did what we exactly wanted it to do. The ones that came\ncloses to doing what we wanted ended up timing out due to the massive document repo\nwe have. So we ended up writing our own local plugin. Here is a list of steps we\ntook to make this work."),i.a.createElement(c.MDXTag,{name:"ul",components:t},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Use Gatsby's ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"sourceNodes")," lifecycle hook to get data."),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Use GitHub's GraphQL API to query page information from GitHub"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Create a Gatsby Node for the pages"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Use ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"gatsby-transformer-remark")," to convert the markdown data into an html document"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Create pages using the createPages lifecycle hook.")),i.a.createElement(c.MDXTag,{name:"h4",components:t},"Use Gatsby's ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"h4"},"sourceNodes")," lifecycle hook to get data."),i.a.createElement(c.MDXTag,{name:"p",components:t},"First thing we have to do to get data from an API request into Gatsby is hook into the\n",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"sourceNodes")," lifecycle hook. This is were Gatsby allows you to do this."),i.a.createElement(c.MDXTag,{name:"pre",components:t},i.a.createElement(c.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript"}},"// /plugins/github-api-pages/gatsby-node.js\n\nconst path  = require('path');\nconst githubApi = require('./github-api');\nconst githubPages = require('./pages');\n\nexports.sourceNodes = async ({\n  actions,\n  getNode,\n  hasNodeChanged,\n}) => {\n  const { createNode } = actions\n\n  await githubApi.getPagesAndCreateNodes(githubPages, createNode);\n}\n")),i.a.createElement(c.MDXTag,{name:"h4",components:t},"Use GitHub's GraphQL API to query page information from GitHub"),i.a.createElement(c.MDXTag,{name:"p",components:t},"Now we have to do a API request using the Github GraphQL API. You can use the ",i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://developer.github.com/v4/explorer/"}},"GitHub's GraphQL Explorer")," to generate your query. You'll have to explore GitHub's GraphQL API to understand more but here is a reference of how to get content data from GitHub."),i.a.createElement(c.MDXTag,{name:"p",components:t},i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://platform.github.community/t/query-repo-contents-with-graphql-api/1896"}},"https://platform.github.community/t/query-repo-contents-with-graphql-api/1896")),i.a.createElement(c.MDXTag,{name:"p",components:t},"Here is an example of what it looks like."),i.a.createElement(c.MDXTag,{name:"pre",components:t},i.a.createElement(c.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript"}},"// gatsby-node.js\n\nconst crypto = require('crypto');\nconst GithubGraphQLApi = require('node-github-graphql');\nconst path = require('path');\n\nconst github = new GithubGraphQLApi({\n  token: process.env.GITHUB_API_KEY,\n});\n\nexports.sourceNodes = async ({\n  boundActionCreators,\n  getNode,\n  hasNodeChanged,\n}) => {\n  const { createNode } = boundActionCreators\n\n  const result = await github.query(`\n    {\n      repository(owner: \"department-of-veterans-affairs\" , name: \"vets.gov-team\"){\n        id\n        name\n        object (expression: \"master:Work Practices\"){\n          ... on Tree {\n            entries {\n              oid\n              name\n              object {\n                ... on Tree {\n                  entries {\n                    oid\n                    name\n                    object {\n                      ... on Blob {\n                        text\n                      }\n                    }\n                  }\n                }\n                ... on Blob {\n                  text\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  `);\n}\n")),i.a.createElement(c.MDXTag,{name:"h4",components:t},"Create a Gatsby Node for the pages"),i.a.createElement(c.MDXTag,{name:"p",components:t},"After that we have to create a Node so that Gatsby can add it to the GraphQL data system.\nThere are notes in the below code which shows what is required and what is optional.\nYou may add custom properties that will be available in GraphQL."),i.a.createElement(c.MDXTag,{name:"pre",components:t},i.a.createElement(c.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript"}},"// gatsby-node.js\n\nconst crypto = require('crypto');\nconst GithubGraphQLApi = require('node-github-graphql');\nconst path = require('path');\n\nconst github = new GithubGraphQLApi({\n  token: process.env.GITHUB_API_KEY,\n});\n\nexports.sourceNodes = async ({\n  boundActionCreators,\n  getNode,\n  hasNodeChanged,\n}) => {\n  const { createNode } = boundActionCreators\n\n  const result = await github.query(`\n    {\n      repository(owner: \"department-of-veterans-affairs\" , name: \"vets.gov-team\"){\n        id\n        name\n        object (expression: \"master:Work Practices\"){\n          ... on Tree {\n            entries {\n              oid\n              name\n              object {\n                ... on Tree {\n                  entries {\n                    oid\n                    name\n                    object {\n                      ... on Blob {\n                        text\n                      }\n                    }\n                  }\n                }\n                ... on Blob {\n                  text\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  `);\n\n  result\n    .data\n    .repository\n    .object\n    .entries.filter(item => item.name.endsWith('.md')).forEach(({ name, oid, object }) => {\n      createNode({\n        id: oid, <---- required\n        parent: null, <---- required\n        children: [], <---- required\n        internal: { <---- required\n          type: 'GithubAPI', <---- define type for look up in GraphQL\n          contentDigest: crypto  <---- required\n            .createHash('md5')\n            .update(object.text)\n            .digest('hex'),\n          mediaType: 'text/markdown', <---- required\n          content: object.text, <---- required\n          directory: dir, <---- custom properties\n          name: name.replace('.md', ''), <---- custom properties\n        }\n      });\n    });\n}\n")),i.a.createElement(c.MDXTag,{name:"h4",components:t},"Use gatsby-transformer-remark to convert the markdown data into an html document"),i.a.createElement(c.MDXTag,{name:"p",components:t},"When we did a ",i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"p"},"createNode")," we set the ",i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"p"},"mediaType: 'text/markdown'"),". This will automatically convert the markdown using ",i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"p"},"gatsby-transformer-remark"),"."),i.a.createElement(c.MDXTag,{name:"h3",components:t},"Create pages using the createPages lifecycle hook"),i.a.createElement(c.MDXTag,{name:"p",components:t},"After everything is set and we have all our pages in GraphQL. We can now create pages using our new data. Here is an example."),i.a.createElement(c.MDXTag,{name:"pre",components:t},i.a.createElement(c.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript"}},"// gatsby-node.js\n\nresult.data.allMarkDown.edges.forEach(async ({ node }) => {\n  createPage({\n    path: `/${node.fields.slug.toLowerCase().replace(/ /g, '-')}/`,\n    component: path.resolve('./src/layouts/external-layout.js'),\n    context: {\n      id: node.id,\n      name: node.fields.slug,\n    },\n  })\n})\n")))},t}(i.a.Component),u={}},307:function(e,t,n){var a;e.exports=(a=n(309))&&a.default||a},308:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov Developer's Documentations"}}}}},309:function(e,t,n){"use strict";n.r(t);var a=n(18),o=n.n(a),r=n(2),m=n.n(r),s=n(13),i=n.n(s),c=n(94),p=n(9),l=function(e){var t=e.location,n=p.default.getResourcesForPathnameSync(t.pathname);return m.a.createElement(c.a,o()({location:t,pageResources:n},n.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},310:function(e){e.exports={data:{components:{edges:[{node:{path:"/platform/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/platform/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/platform/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/platform/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/platform/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/platform/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/platform/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/platform/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/platform/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/platform/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/platform/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/platform/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/platform/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/platform/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/platform/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/platform/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/platform/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/platform/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/platform/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/platform/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/platform/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/platform/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/platform/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/platform/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/platform/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/platform/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/platform/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/platform/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/platform/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/platform/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/platform/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/platform/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/platform/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/platform/modal/",context:{source:"component",name:"Modal"}}}]}}}},311:function(e,t){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"getting-started",items:[{name:"Environment setup",items:[{name:"Set up VA.gov locally",href:"getting-started"},{name:"Internal Tools",href:"getting-started/internal-tools"}]},{name:"Common tasks",items:[{name:"Running VA.gov locally",href:"getting-started/common-tasks/local"},{name:"Building VA.gov",href:"getting-started/common-tasks/build"},{name:"Running tests",href:"getting-started/common-tasks/tests"},{name:"Linting your code",href:"getting-started/common-tasks/lint"},{name:"Creating a new React application",href:"getting-started/common-tasks/new-app"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"},{name:"Adding new pages to this site",href:"getting-started/common-tasks/doc-page"},{name:"Adding pages from Github to this site",href:"getting-started/common-tasks/external-doc-page"},{name:"Add Graphs to MDX",href:"getting-started/common-tasks/add-graphs-to-mdx"},{name:"Creating A Gatsby Plugin",href:"getting-started/common-tasks/creating-gatsby-plugins"}]},{name:"Bundes and Code organization",href:"getting-started/bundles-and-code-organization"},{name:"Standards and conventions",items:[]},{name:"Development workflow",items:[]}]},{id:"architecture",name:"Architecture",href:"architecture",items:[{name:"Site structure",items:[]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing",href:"architecture/visual-regression-testing"},{name:"Teamsite",href:"architecture/teamsite"}]},{id:"forms",name:"Forms",href:"forms",items:[{name:"Introduction",href:"forms/when-to-use-fs"},{name:"Tutorial",items:[{name:"Form Tutorial - Basic",href:"forms/form-tutorial-basic"},{name:"Form Tutorial - Intermediate",href:"forms/form-tutorial-intermediate"},{name:"Form Tutorial - Advanced",href:"forms/form-tutorial-advanced"},{name:"Setting up Save in Progress",href:"forms/save-in-progress"},{name:"Forms in Production",href:"forms/forms-in-production"}]},{name:"Architecture",items:[]},{name:"Common tasks",items:[]}]},{id:"platform",name:"Platform",href:"platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]}]}},312:function(e,t,n){"use strict";var a=n(3),o=n.n(a),r=n(308),m=n(2),s=n.n(m),i=n(13),c=n.n(i),p=n(313),l=n.n(p),d=n(68),u=n.n(d),g=(n(307),s.a.createContext({})),h=function(e){return s.a.createElement(g.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):s.a.createElement("div",null,"Loading (StaticQuery)")})};h.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func};n(17),n(133),n(134),n(135);var f=n(310);function b(){return s.a.createElement(h,{query:"157057713",render:function(e){return s.a.createElement(y,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:f})}function y(e){var t=e.items;return t.length?s.a.createElement("ul",{className:"menu-list"},t.map(function(e){return s.a.createElement("li",{key:e.name},!!e.items&&s.a.createElement("li",{key:e.name},s.a.createElement("h4",null,e.name),s.a.createElement(y,{items:e.items})),"componentList"===e.query&&s.a.createElement("li",{key:e.name},s.a.createElement("h4",null,e.name),s.a.createElement(b,null)),!!e.href&&s.a.createElement("li",{key:e.name},s.a.createElement(u.a,{to:e.href},e.name)),!e.href&&!e.items&&!e.query&&s.a.createElement("li",{key:e.name},e.name," (future)"))})):null}var E=n(311),w=n.n(E);function T(e){var t=e.location,n=w.a.sections.find(function(e){return t.pathname.includes("/"+e.href)});return s.a.createElement("aside",{className:"sidebar"},s.a.createElement("div",{className:"search"},s.a.createElement("div",{className:"input-wrap"},s.a.createElement("input",{type:"search",value:"",onChange:function(){},placeholder:"Type to search"}))),!!n&&s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",null,n.name),s.a.createElement(u.a,{className:"home-link",to:""},"Home"),s.a.createElement(y,{items:n.items})),!n&&s.a.createElement("ul",{className:"menu-list"},w.a.sections.map(function(e){return s.a.createElement("li",{key:e.id},s.a.createElement(u.a,{to:e.href},e.name))})))}n(314);var x=function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},n.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},n.render=function(){var e=this.props,t=e.children,n=e.location;return s.a.createElement(h,{query:"1044757290",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},s.a.createElement("html",{lang:"en"})),s.a.createElement(T,{location:n}),s.a.createElement("div",{className:"ContentArea docSearch-content"},t))},data:r})},t}(s.a.Component);x.propTypes={children:c.a.node.isRequired};t.a=x}}]);
//# sourceMappingURL=component---src-pages-getting-started-common-tasks-external-doc-page-mdx-c821162b537f51d80b3e.js.map