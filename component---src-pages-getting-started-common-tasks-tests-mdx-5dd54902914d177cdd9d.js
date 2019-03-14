(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{294:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return u}),n.d(t,"_frontmatter",function(){return d});n(41);var a=n(42),o=n.n(a),r=n(3),m=n.n(r),s=n(2),c=n.n(s),i=n(4),l=n(307),p={},u=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=l.a,n}return m()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=o()(e,["components"]);return c.a.createElement(i.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,n),components:t},c.a.createElement(i.MDXTag,{name:"h1",components:t},"Running tests"),c.a.createElement(i.MDXTag,{name:"p",components:t},"On VA.gov we have several types of tests, which can be run separately from each other."),c.a.createElement(i.MDXTag,{name:"h2",components:t},"Unit tests"),c.a.createElement(i.MDXTag,{name:"p",components:t},"Unit tests are the most straightforward to run:"),c.a.createElement(i.MDXTag,{name:"p",components:t},c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"yarn test:unit")),c.a.createElement(i.MDXTag,{name:"p",components:t},"This will run all of our ",c.a.createElement(i.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://mochajs.org/"}},"Mocha"),"/",c.a.createElement(i.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"http://chaijs.com/"}},"Chai"),"/",c.a.createElement(i.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://sinonjs.org/"}},"Sinon"),"-based unit tests. These tests use JSDom and Enzyme to test browser and React behavior. They all have a ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"unit.spec.js(x)")," extension and are located in ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"test/")," directories near the code they're testing in ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"src/"),"."),c.a.createElement(i.MDXTag,{name:"p",components:t},"You can also run just one test at a time by passing the path to the command:"),c.a.createElement(i.MDXTag,{name:"p",components:t},c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"yarn test:unit ./src/applications/burials/tests/migrations.unit.spec.js")),c.a.createElement(i.MDXTag,{name:"h2",components:t},"End to end tests"),c.a.createElement(i.MDXTag,{name:"p",components:t},"On VA.gov, we have end-to-end tests written in ",c.a.createElement(i.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"http://nightwatchjs.org/"}},"Nightwatch.js")," that run in headless Chrome. These tests simulate an actual user completing tasks in our tools and services. They can also be run with a ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"yarn")," command:"),c.a.createElement(i.MDXTag,{name:"p",components:t},c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"yarn test:e2e")),c.a.createElement(i.MDXTag,{name:"p",components:t},"Our end-to-end tests all have a ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"e2e.spec.js")," extension and are in ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"test/")," folders located near the application they're testing in ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"src/"),"."),c.a.createElement(i.MDXTag,{name:"p",components:t},"Depending on what you have up and running locally, this command will do slightly different things. If you are running the ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"watch")," task, it will run the tests against the site running on that server. If you are not running anything at ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"localhost:3001"),", it will start up an Express server and serve the build output in ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"build/localhost"),"."),c.a.createElement(i.MDXTag,{name:"p",components:t},"On the backend, if you are running vets-api locally, the end-to-end tests will make requests to that server while running. If you do not have vets-api running locally, it will spin up a mock api server that the e2e tests will make requests to. The e2e tests won't pass if they are talking to a locally running vets-api instance, so it's better to shut down a locally running vets-api instance while running them."),c.a.createElement(i.MDXTag,{name:"p",components:t},"Similar to our unit tests, you can also run just a single e2e test:"),c.a.createElement(i.MDXTag,{name:"p",components:t},c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"yarn test:e2e ./src/applications/burials/tests/00-all-fields.e2e.spec.js")),c.a.createElement(i.MDXTag,{name:"h2",components:t},"Accessibility tests"),c.a.createElement(i.MDXTag,{name:"p",components:t},"Accessibility tests are a variation of e2e tests that run aXe against our content pages running in Chrome. You can run those with the command:"),c.a.createElement(i.MDXTag,{name:"p",components:t},c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"yarn test:accessibility")))},t}(c.a.Component),d={}},301:function(e,t,n){"use strict";n.d(t,"b",function(){return l});var a=n(2),o=n.n(a),r=n(13),m=n.n(r),s=n(66),c=n.n(s);n.d(t,"a",function(){return c.a});n(302);var i=o.a.createContext({}),l=function(e){return o.a.createElement(i.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:m.a.object,query:m.a.string.isRequired,render:m.a.func,children:m.a.func}},302:function(e,t,n){var a;e.exports=(a=n(304))&&a.default||a},303:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov Developer's Documentations"}}}}},304:function(e,t,n){"use strict";n.r(t);var a=n(18),o=n.n(a),r=n(2),m=n.n(r),s=n(13),c=n.n(s),i=n(93),l=n(9),p=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return m.a.createElement(i.a,o()({location:t,pageResources:n},n.json))};p.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=p},305:function(e){e.exports={data:{components:{edges:[{node:{path:"/platform/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/platform/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/platform/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/platform/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/platform/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/platform/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/platform/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/platform/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/platform/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/platform/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/platform/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/platform/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/platform/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/platform/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/platform/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/platform/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/platform/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/platform/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/platform/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/platform/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/platform/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/platform/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/platform/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/platform/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/platform/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/platform/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/platform/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/platform/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/platform/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/platform/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/platform/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/platform/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/platform/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/platform/sortabletable/",context:{source:"component",name:"SortableTable"}}}]}}}},306:function(e,t){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"getting-started",items:[{name:"Environment setup",items:[{name:"Internal Tools",href:"getting-started/internal-tools"}]},{name:"Common tasks",items:[{name:"Running VA.gov locally",href:"getting-started/common-tasks/local"},{name:"Building VA.gov",href:"getting-started/common-tasks/build"},{name:"Running tests",href:"getting-started/common-tasks/tests"},{name:"Linting your code",href:"getting-started/common-tasks/lint"},{name:"Creating a new React application",href:"getting-started/common-tasks/new-app"},{name:"Writing a unit test",href:"getting-started/common-tasks/write-unit-test"},{name:"Writing an end-to-end test",href:"getting-started/common-tasks/write-e2e-test"},{name:"Updating Formation",href:"getting-started/common-tasks/update-formation"},{name:"Adding new pages to this site",href:"getting-started/common-tasks/doc-page"},{name:"Adding pages from Github to this site",href:"getting-started/common-tasks/external-doc-page"}]},{name:"Code organization",items:[]},{name:"Standards and conventions",items:[]},{name:"Development workflow",items:[]}]},{id:"architecture",name:"Architecture",href:"architecture",items:[{name:"Site structure",items:[]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing"},{name:"Teamsite"}]},{id:"forms",name:"Forms",href:"forms",items:[{name:"Introduction",href:"forms/when-to-use-fs"},{name:"Tutorial",items:[{name:"Form Tutorial - Basic",href:"forms/form-tutorial-basic"},{name:"Form Tutorial - Intermediate",href:"forms/form-tutorial-intermediate"},{name:"Form Tutorial - Advanced",href:"forms/form-tutorial-advanced"},{name:"Setting up Save in Progress",href:"forms/save-in-progress"},{name:"Forms in Production",href:"forms/forms-in-production"}]},{name:"Architecture",items:[]},{name:"Common tasks",items:[]}]},{id:"platform",name:"Platform",href:"platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]}]}},307:function(e,t,n){"use strict";var a=n(3),o=n.n(a),r=n(303),m=n(2),s=n.n(m),c=n(13),i=n.n(c),l=n(308),p=n.n(l),u=n(301),d=(n(17),n(132),n(133),n(134),n(305));function h(){return s.a.createElement(u.b,{query:"157057713",render:function(e){return s.a.createElement(g,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:d})}function g(e){var t=e.items;return t.length?s.a.createElement("ul",{className:"menu-list"},t.map(function(e){return s.a.createElement("li",{key:e.name},!!e.items&&s.a.createElement("li",{key:e.name},s.a.createElement("h4",null,e.name),s.a.createElement(g,{items:e.items})),"componentList"===e.query&&s.a.createElement("li",{key:e.name},s.a.createElement("h4",null,e.name),s.a.createElement(h,null)),!!e.href&&s.a.createElement("li",{key:e.name},s.a.createElement(u.a,{to:e.href},e.name)),!e.href&&!e.items&&!e.query&&s.a.createElement("li",{key:e.href},s.a.createElement(u.a,{to:e.href},e.name)))})):null}var f=n(306),E=n.n(f);function y(e){var t=e.location,n=E.a.sections.find(function(e){return t.pathname.includes("/"+e.href)});return s.a.createElement("aside",{className:"sidebar"},s.a.createElement("div",{className:"search"},s.a.createElement("div",{className:"input-wrap"},s.a.createElement("input",{type:"search",value:"",onChange:function(){},placeholder:"Type to search"}))),!!n&&s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",null,n.name),s.a.createElement(u.a,{className:"home-link",to:""},"Home"),s.a.createElement(g,{items:n.items})),!n&&s.a.createElement("ul",{className:"menu-list"},E.a.sections.map(function(e){return s.a.createElement("li",{key:e.id},s.a.createElement(u.a,{to:e.href},e.name))})))}n(309);var b=function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var n=t.prototype;return n.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},n.render=function(){var e=this.props,t=e.children,n=e.location;return s.a.createElement(u.b,{query:"1044757290",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},s.a.createElement("html",{lang:"en"})),s.a.createElement(y,{location:n}),s.a.createElement("div",{className:"ContentArea docSearch-content"},t))},data:r})},t}(s.a.Component);b.propTypes={children:i.a.node.isRequired};t.a=b}}]);
//# sourceMappingURL=component---src-pages-getting-started-common-tasks-tests-mdx-5dd54902914d177cdd9d.js.map