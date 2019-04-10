(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{285:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d}),n.d(t,"_frontmatter",function(){return u});n(42);var a=n(43),o=n.n(a),r=n(3),m=n.n(r),s=n(2),i=n.n(s),c=n(4),l=n(333),p={},d=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=l.a,n}return m()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=o()(e,["components"]);return i.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,n),components:t},i.a.createElement(c.MDXTag,{name:"h1",components:t},"Using Redux"),i.a.createElement(c.MDXTag,{name:"table",components:t},i.a.createElement(c.MDXTag,{name:"thead",components:t,parentName:"table"},i.a.createElement(c.MDXTag,{name:"tr",components:t,parentName:"thead"},i.a.createElement(c.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}}),i.a.createElement(c.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}}),i.a.createElement(c.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}}),i.a.createElement(c.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}}))),i.a.createElement(c.MDXTag,{name:"tbody",components:t,parentName:"table"},i.a.createElement(c.MDXTag,{name:"tr",components:t,parentName:"tbody"},i.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"td"},"Decision Made:")),i.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Yes"),i.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"td"},"Decision Date:")),i.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"08/04/2016")),i.a.createElement(c.MDXTag,{name:"tr",components:t,parentName:"tbody"},i.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"td"},"Revisit Decision:")),i.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Yes"),i.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"td"},"Revisit Date:")),i.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"January 2017")))),i.a.createElement(c.MDXTag,{name:"p",components:t},i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"p"},"Revisit Criteria:")," The JavaScript community changes very quickly. This decision is worth revisiting in in 6 months to determine if the landscape has shifted significantly."),i.a.createElement(c.MDXTag,{name:"p",components:t},i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"p"},"Decision Makers:")," @plusjeff @akainic @alexose @webinista @U-DON @ayaleloehr"),i.a.createElement(c.MDXTag,{name:"hr",components:t}),i.a.createElement(c.MDXTag,{name:"h2",components:t},"tl;dr"),i.a.createElement(c.MDXTag,{name:"p",components:t},"React applications will use Redux to manage state and data flow."),i.a.createElement(c.MDXTag,{name:"h2",components:t},"History"),i.a.createElement(c.MDXTag,{name:"p",components:t},"The Healthcare Application (HCA) began without Redux for the first ~2 months of development.  During this time, the team created a way for state to flow between components that worked, but it was hacky and as the application grew it became unmanagable. The decision was made to try Redux; the codebase retrofit to Redux was hard on both the person doing the retrofit (Albert) and the rest of the developers working on the codebase."),i.a.createElement(c.MDXTag,{name:"p",components:t},"Prescriptions began without Redux for the first ~1 week of development. This was done because prescriptions has a significantly simpler data model than HCA and the majority of the Prescriptions team was new to React, so the thought was learning both React and Redux at the same time was a burden that would decrease velocity. The team did well creating individual components during this week, but started to bump up against questions of how to make components talk to each other. That led to a meeting on 8/4/2016 to make this decision."),i.a.createElement(c.MDXTag,{name:"h2",components:t},"Pros to using Redux"),i.a.createElement(c.MDXTag,{name:"ul",components:t},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Established pattern for managing state for components."),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Easier to follow and maintain than a hacky solution."),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Redux is good for complicated state on the page."),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Team uses it in other areas."),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Development community seems to be coalescing around it (that is, as much as the JS community does around anything...)")),i.a.createElement(c.MDXTag,{name:"h2",components:t},"Cons"),i.a.createElement(c.MDXTag,{name:"ul",components:t},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Redux can be heavy. Why overengineer apps from the beginning if it might not be needed?"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Developer burden to learn (especially if also learning React).")),i.a.createElement(c.MDXTag,{name:"h2",components:t},"Example of an alternative approach"),i.a.createElement(c.MDXTag,{name:"p",components:t},"To make the discussion more tangible, Alex Ose created a branch in the prescriptions repo showing how components could communicate without Redux, using the Observer Pattern. The repository where this was created has now been deleted, so this branch is no longer findable, but did once exist."),i.a.createElement(c.MDXTag,{name:"h2",components:t},"Decision"),i.a.createElement(c.MDXTag,{name:"p",components:t},"React applications will use Redux to manage state and data flow."),i.a.createElement(c.MDXTag,{name:"hr",components:t}),i.a.createElement(c.MDXTag,{name:"p",components:t},"Below is background written by Alex Ose in September 2016 when researching this decision:"),i.a.createElement(c.MDXTag,{name:"h1",components:t},"Woo, Redux!"),i.a.createElement(c.MDXTag,{name:"p",components:t},"There are lots of guides out there about how to do Redux.  This is more of a guide about ",i.a.createElement(c.MDXTag,{name:"em",components:t,parentName:"p"},"why")," to do redux.  Albeit, written by a Redux skeptic, who happens to think that HTML 1.0 was the pinnacale and it's been all downhill from there."),i.a.createElement(c.MDXTag,{name:"h2",components:t},"My understanding of why this is a thing"),i.a.createElement(c.MDXTag,{name:"p",components:t},'Dan Abramov invented Redux by accident when he was messing around with another project.  He was trying to implement undo/redo (a.k.a "time travel"), when he concluded that the holy grail would be to record each successive state of the application as a javascript object.'),i.a.createElement(c.MDXTag,{name:"p",components:t},"This wouldn't work if the application decided to store data outside of that object— in the DOM, for instance— because he would lose track of the change.  It also wouldn't work if there were parts of the application writing and overwriting the object without any kind of oversight."),i.a.createElement(c.MDXTag,{name:"p",components:t},'Thus, he needed a thing to enforce that the application managed this state object (a.k.a "store") in a reasonable way.  Redux became that thing.'),i.a.createElement(c.MDXTag,{name:"p",components:t},"Also, per @jbalboni:  It’s helpful to know that Redux is a simplification of Facebook’s Flux architecture. That’s how they were suggesting you structure React apps, but it’s complicated and jargon-y, and Redux is a much simpler version of it. That’s one of the reasons it took off."),i.a.createElement(c.MDXTag,{name:"p",components:t},"What's neat about his approach is that in trying achieve predictability, it reduces all of the app's functionality down to pure functions (i.e. functions that have zero side effects).  Not only does this make time travel work, and allow for some really interesting ",i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en"}},"DevTools")," but it means that it's possible to write 100% comprehensive tests that test everything that your application can do."),i.a.createElement(c.MDXTag,{name:"h2",components:t},"And now the bad stuff"),i.a.createElement(c.MDXTag,{name:"p",components:t},"While reducing everything to pure functions is extremely cool, it is very different than what we're used to as frontend engineers.  We are used to treating the DOM as the record of truth, and the DOM is a jerk, so we spend a lot of time mitigating weird unintended behaviors."),i.a.createElement(c.MDXTag,{name:"p",components:t},"Redux throws a ",i.a.createElement(c.MDXTag,{name:"em",components:t,parentName:"p"},"lot")," of new jargon at you, and doesn't spend much time explaining why it's necessary to learn it.  On top of that, it assumes that you're up-to-date with a host of new tools and techniques that most people outside of the React world have never used."),i.a.createElement(c.MDXTag,{name:"p",components:t},"Lastly, Redux (the react-redux package especially) makes heavy use of composability.  This is neat and elegant in theory, but it can make hard to debug with traditional tools*.  In this developer's opinion, its key functions are way too magical."),i.a.createElement(c.MDXTag,{name:"h2",components:t},"In conclusion"),i.a.createElement(c.MDXTag,{name:"p",components:t},"Redux gives you some amazing capabilities at the expense of some boilerplate and lots of time spent hitting your head against your desk.  I am personally skeptical that the up-front cost is worth it for a small app, but there is no denying that the principles behind Redux are the future of UI development."),i.a.createElement(c.MDXTag,{name:"p",components:t},"*This is also why people don't like D3, in my experience."),i.a.createElement(c.MDXTag,{name:"p",components:t},"**Slack's UI is written almost completely in native jQuery and a special scrolling plugin.  Redux is not necessary to build a quality product that people use."))},t}(i.a.Component),u={}},328:function(e,t,n){var a;e.exports=(a=n(330))&&a.default||a},329:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov Developer's Documentations"}}}}},330:function(e,t,n){"use strict";n.r(t);var a=n(18),o=n.n(a),r=n(2),m=n.n(r),s=n(13),i=n.n(s),c=n(94),l=n(9),p=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return m.a.createElement(c.a,o()({location:t,pageResources:n},n.json))};p.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=p},331:function(e){e.exports={data:{components:{edges:[{node:{path:"/platform/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/platform/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/platform/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/platform/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/platform/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/platform/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/platform/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/platform/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/platform/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/platform/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/platform/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/platform/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/platform/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/platform/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/platform/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/platform/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/platform/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/platform/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/platform/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/platform/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/platform/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/platform/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/platform/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/platform/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/platform/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/platform/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/platform/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/platform/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/platform/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/platform/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/platform/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/platform/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/platform/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/platform/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}}]}}}},332:function(e,t){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"getting-started",items:[{name:"Start up guide",items:[{name:"Set up VA.gov locally",href:"getting-started"},{name:"Accessing internal tools",href:"getting-started/internal-tools"},{name:"VA.gov environments",href:"getting-started/environments"},{name:"Development workflow",href:"getting-started/workflow"},{name:"Bundes and Code organization",href:"getting-started/bundles-and-code-organization"}]},{name:"Common tasks",items:[{name:"Running VA.gov locally",href:"getting-started/common-tasks/local"},{name:"Building VA.gov",href:"getting-started/common-tasks/build"},{name:"Running tests",href:"getting-started/common-tasks/tests"},{name:"Linting your code",href:"getting-started/common-tasks/lint"},{name:"Creating a new React application",href:"getting-started/common-tasks/new-app"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"},{name:"Adding new pages to this site",href:"getting-started/common-tasks/doc-page"},{name:"Adding pages from Github to this site",href:"getting-started/common-tasks/external-doc-page"},{name:"Add Graphs to MDX",href:"getting-started/common-tasks/add-graphs-to-mdx"},{name:"Creating A Gatsby Plugin",href:"getting-started/common-tasks/creating-gatsby-plugins"}]},{name:"Standards and conventions",items:[]}]},{id:"architecture",name:"Architecture",href:"architecture",items:[{name:"Metalsmith",items:[{name:"How are URLs created",href:"architecture/metalsmith/urls"},{name:"How templates work",href:"architecture/metalsmith/templates"},{name:"How to create collections and related links",href:"architecture/metalsmith/collections"}]},{name:"Site structure",items:[{name:"Topology",href:"architecture/site-structure/topology-overview"},{name:"Client overview",href:"architecture/site-structure/client-overview"},{name:"Styling",href:"architecture/site-structure/styling-overview"}]},{name:"Front End Standards",items:[{name:"React standards",href:"architecture/front-end-standards/react"},{name:"Redux standards",href:"architecture/front-end-standards/redux"},{name:"Styles",href:"architecture/front-end-standards/styles"},{name:"React standards",href:"architecture/front-end-standards/react"},{name:"Accessibility",href:"architecture/front-end-standards/accessibility"},{name:"Documented Decisions",href:"architecture/front-end-standards/documented-decisions/summary"}]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing",href:"architecture/visual-regression-testing"},{name:"Teamsite",href:"architecture/teamsite"}]},{id:"forms",name:"Forms",href:"forms",items:[{name:"Introduction",href:"forms/when-to-use-fs"},{name:"Tutorial",items:[{name:"Form Tutorial - Basic",href:"forms/form-tutorial-basic"},{name:"Form Tutorial - Intermediate",href:"forms/form-tutorial-intermediate"},{name:"Form Tutorial - Advanced",href:"forms/form-tutorial-advanced"},{name:"Setting up Save in Progress",href:"forms/save-in-progress"},{name:"Forms in Production",href:"forms/forms-in-production"}]},{name:"Architecture",items:[]},{name:"Common tasks",items:[]}]},{id:"platform",name:"Platform",href:"platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags",href:"platform/feature-flags"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]}]}},333:function(e,t,n){"use strict";var a=n(3),o=n.n(a),r=n(329),m=n(2),s=n.n(m),i=n(13),c=n.n(i),l=n(334),p=n.n(l),d=n(68),u=n.n(d),h=(n(328),s.a.createContext({})),g=function(e){return s.a.createElement(h.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):s.a.createElement("div",null,"Loading (StaticQuery)")})};g.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func};n(17),n(133),n(134),n(135);var f=n(331);function b(){return s.a.createElement(g,{query:"157057713",render:function(e){return s.a.createElement(w,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:f})}function w(e){var t=e.items;return t.length?s.a.createElement("ul",{className:"menu-list"},t.map(function(e){return s.a.createElement("li",{key:e.name},!!e.items&&s.a.createElement("li",{key:e.name},s.a.createElement("h4",null,e.name),s.a.createElement(w,{items:e.items})),"componentList"===e.query&&s.a.createElement("li",{key:e.name},s.a.createElement("h4",null,e.name),s.a.createElement(b,null)),!!e.href&&s.a.createElement("li",{key:e.name},s.a.createElement(u.a,{to:e.href},e.name)),!e.href&&!e.items&&!e.query&&s.a.createElement("li",{key:e.name},e.name," (future)"))})):null}var y=n(332),E=n.n(y);function T(e){var t=e.location,n=E.a.sections.find(function(e){return t.pathname.includes("/"+e.href)});return s.a.createElement("aside",{className:"sidebar"},s.a.createElement("div",{className:"search"},s.a.createElement("div",{className:"input-wrap"},s.a.createElement("input",{type:"search",value:"",onChange:function(){},placeholder:"Type to search"}))),!!n&&s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",null,n.name),s.a.createElement(u.a,{className:"home-link",to:""},"Home"),s.a.createElement(w,{items:n.items})),!n&&s.a.createElement("ul",{className:"menu-list"},E.a.sections.map(function(e){return s.a.createElement("li",{key:e.id},s.a.createElement(u.a,{to:e.href},e.name))})))}n(335);var D=function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},n.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},n.render=function(){var e=this.props,t=e.children,n=e.location;return s.a.createElement(g,{query:"1044757290",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},s.a.createElement("html",{lang:"en"})),s.a.createElement(T,{location:n}),s.a.createElement("div",{className:"ContentArea docSearch-content"},t))},data:r})},t}(s.a.Component);D.propTypes={children:c.a.node.isRequired};t.a=D}}]);
//# sourceMappingURL=component---src-pages-architecture-front-end-standards-documented-decisions-redux-mdx-86b6bde74975823cdf29.js.map