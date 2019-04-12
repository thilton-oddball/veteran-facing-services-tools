(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{279:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d}),a.d(t,"_frontmatter",function(){return u});a(42);var n=a(43),o=a.n(n),r=a(3),s=a.n(r),c=a(2),i=a.n(c),m=a(4),l=a(338),p={},d=function(e){function t(t){var a;return(a=e.call(this,t)||this).layout=l.a,a}return s()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,a=o()(e,["components"]);return i.a.createElement(m.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,a),components:t},i.a.createElement(m.MDXTag,{name:"h1",components:t},"Accessibility standards"),i.a.createElement(m.MDXTag,{name:"h2",components:t},"Three rules for link and button success ",i.a.createElement("sup",{id:"heading3"},"[3]")),i.a.createElement(m.MDXTag,{name:"ol",components:t},i.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ol"},"Links go to to another page OR jump to an anchor ID in the current page",i.a.createElement(m.MDXTag,{name:"ol",components:t,parentName:"li"},i.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ol"},"SUCCESS CRITERIA:"),i.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ol"},"Respond to ENTER keypress"),i.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ol"},"The browser URL changes"),i.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ol"},"HTML5 history object changes. (Not applicable if using React Router.)"),i.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ol"},"Avoid hash route URLs if possible. These interfere with in-page anchor links, and were common with early SPA libraries like Backbone. (Not applicable if using React Router.)"),i.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ol"},"Append anchor links to URL when a link points to an in-page anchor ID (skip nav, tabs)"),i.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ol"},"Do not add role=“button” to links. Screen readers announce the link as “button”, and changes user"),i.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ol"},"Recommended to underline links when in paragraphs or blocks of text"))),i.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ol"},"Buttons perform a UI action",i.a.createElement(m.MDXTag,{name:"ol",components:t,parentName:"li"},i.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ol"},"SUCCESS CRITERIA:"),i.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ol"},"Respond to ENTER, SPACEBAR keypresses"),i.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ol"},"Perform UI actions that do not change the URL or load a new page"))),i.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ol"},"Call to action links can look like buttons as long as:",i.a.createElement(m.MDXTag,{name:"ol",components:t,parentName:"li"},i.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ol"},"SUCCESS CRITERIA:"),i.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ol"},"Load another page URL (see rule #1 success criteria)"),i.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ol"},"Announce themselves as “links” to screen readers and assistive devices")))),i.a.createElement(m.MDXTag,{name:"h2",components:t},"Common link and button scenarios ",i.a.createElement("sup",{id:"heading4"},"[4]")),i.a.createElement(m.MDXTag,{name:"ul",components:t},i.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"Imagine copy/pasting a URL into a new browser window, sight unseen. Good scenarios for a LINK:",i.a.createElement(m.MDXTag,{name:"ul",components:t,parentName:"li"},i.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"You expect the page to load scrolled down somewhere"),i.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"You have a call to action that navigates to another page"),i.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"You are loading a second or third tab, pre-selected"))),i.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"Imagine you are presenting users with an action that does not load a new page. Good scenarios for a BUTTON:",i.a.createElement(m.MDXTag,{name:"ul",components:t,parentName:"li"},i.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"You have a conditional message that the user should trigger or dismiss"),i.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"You are adding or removing something like a receipt, prescription, appeal"),i.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"Show/hide accordions"),i.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"Submit a form asynchronously"),i.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"Submit an asynchronous request, then redirect users based on the server response. This is a middle ground, but feels like a good case for using a button, considering the original function was asynchronous and might keep users on the same page depending on the response."),i.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"Open and close a modal dialog"),i.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"Alert boxes or confirmations"),i.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"Do not underline button text. Better to have a halo, background color, or border with plenty of hit space."),i.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"Underline link text"),i.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"Calls to action links can omit the underline, but would be well served with a design that distinguishes them from buttons. Use these sparingly, maybe one per page.")))))},t}(i.a.Component),u={}},331:function(e,t,a){"use strict";a.d(t,"b",function(){return l});var n=a(2),o=a.n(n),r=a(13),s=a.n(r),c=a(68),i=a.n(c);a.d(t,"a",function(){return i.a});a(333);var m=o.a.createContext({}),l=function(e){return o.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},332:function(e,t){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"/getting-started",items:[{name:"Start up guide",items:[{name:"1. Set up VA.gov locally",href:"getting-started"},{name:"2. Access internal tools",href:"getting-started/internal-tools"},{name:"3. Leverage CI workflow",href:"getting-started/workflow"}]},{name:"Project and environment structure",items:[{name:"VA.gov environments",href:"getting-started/environments"},{name:"Bundles and Code organization",href:"getting-started/bundles-and-code-organization"}]},{name:"Common tasks",items:[{name:"Running VA.gov locally",href:"getting-started/common-tasks/local"},{name:"Building VA.gov",href:"getting-started/common-tasks/build"},{name:"Running tests",href:"getting-started/common-tasks/tests"},{name:"Linting your code",href:"getting-started/common-tasks/lint"},{name:"Creating a new React application",href:"getting-started/common-tasks/new-app"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"},{name:"Adding new pages to this site",href:"getting-started/common-tasks/doc-page"},{name:"Adding pages from Github to this site",href:"getting-started/common-tasks/external-doc-page"},{name:"Add Graphs to MDX",href:"getting-started/common-tasks/add-graphs-to-mdx"},{name:"Creating A Gatsby Plugin",href:"getting-started/common-tasks/creating-gatsby-plugins"},{name:"Releases",href:"getting-started/common-tasks/releases"},{name:"Reviewing feature branches",href:"getting-started/common-tasks/reviewing-feature-branches"}]},{name:"Standards and conventions",items:[]}]},{id:"architecture",name:"Architecture",href:"/architecture",items:[{name:"Metalsmith",items:[{name:"How are URLs created",href:"architecture/metalsmith/urls"},{name:"How templates work",href:"architecture/metalsmith/templates"},{name:"How to create collections and related links",href:"architecture/metalsmith/collections"}]},{name:"Site structure",items:[{name:"Topology",href:"architecture/site-structure/topology-overview"},{name:"Client overview",href:"architecture/site-structure/client-overview"},{name:"Styling",href:"architecture/site-structure/styling-overview"}]},{name:"Front End Standards",items:[{name:"React standards",href:"architecture/front-end-standards/react"},{name:"Redux standards",href:"architecture/front-end-standards/redux"},{name:"Styles",href:"architecture/front-end-standards/styles"},{name:"React standards",href:"architecture/front-end-standards/react"},{name:"Accessibility",href:"architecture/front-end-standards/accessibility"},{name:"Documented Decisions",href:"architecture/front-end-standards/documented-decisions/summary"}]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing",href:"architecture/visual-regression-testing"},{name:"Teamsite",href:"architecture/teamsite"}]},{id:"forms",name:"Forms",href:"/forms",items:[{name:"Introduction",href:"forms/when-to-use-fs"},{name:"Tutorial",items:[{name:"Form Tutorial - Basic",href:"forms/form-tutorial-basic"},{name:"Form Tutorial - Intermediate",href:"forms/form-tutorial-intermediate"},{name:"Form Tutorial - Advanced",href:"forms/form-tutorial-advanced"},{name:"Setting up Save in Progress",href:"forms/save-in-progress"},{name:"Forms in Production",href:"forms/forms-in-production"}]},{name:"Architecture",items:[]},{name:"Common tasks",items:[]}]},{id:"platform",name:"Platform",href:"/platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags",href:"platform/feature-flags"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]}]}},333:function(e,t,a){var n;e.exports=(n=a(335))&&n.default||n},334:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov Developer's Documentations"}}}}},335:function(e,t,a){"use strict";a.r(t);var n=a(18),o=a.n(n),r=a(2),s=a.n(r),c=a(13),i=a.n(c),m=a(94),l=a(9),p=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return s.a.createElement(m.a,o()({location:t,pageResources:a},a.json))};p.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=p},336:function(e,t,a){"use strict";var n=a(3),o=a.n(n),r=a(334),s=a(2),c=a.n(s),i=a(13),m=a.n(i),l=a(339),p=a.n(l),d=a(331),u=(a(17),a(133),a(134),a(332)),h=a.n(u),g=a(18),f=a.n(g),E=a(340),b=a.n(E),v=function(e){function t(t){var a;return(a=e.call(this,t)||this).state=h.a.sections.reduce(function(e,t){var a;return f()(((a={})[t.id]=!1,a),e)},{}),a}return o()(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.open,n=t.onClose,o=t.location;return c.a.createElement("div",{className:b()("site-c-mobile-nav",{"is-visible":a}),id:"mobile-nav"},c.a.createElement("button",{id:"close_mobile_nav_button",className:"site-c-mobile-nav__close-button",type:"button",onClick:n,"aria-label":"Close this menu"},c.a.createElement("i",{className:"fas fa-times"})),c.a.createElement("div",{className:"usa-accordion "},h.a.sections.map(function(t){return c.a.createElement("div",{key:t.id},c.a.createElement("p",{className:"usa-accordion-heading site-c-mobile-nav__accordion-heading vads-u-border-top--0"},c.a.createElement("button",{className:"usa-accordion-button site-c-mobile-nav__accordion-button",onClick:function(){var a;return e.setState(((a={})[t.id]=!e.state[t.id],a))},"aria-expanded":e.state[t.id]?"true":"false","aria-controls":"nav-"+t.id},t.name)),c.a.createElement("div",{id:"nav-"+t.id,"aria-hidden":e.state[t.id]?"false":"true",className:"usa-accordion-content site-c-mobile-nav__accordion-content"},c.a.createElement("ul",{className:"site-c-mobile-nav-list"},c.a.createElement("li",{className:"site-c-mobile-nav-list__item"},c.a.createElement(d.a,{className:b()("site-c-mobile-nav-list__link",{current:o.pathname===t.href}),to:t.href},"Overview")))))})))},t}(c.a.Component),N=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={navOpen:!1},a}return o()(t,e),t.prototype.render=function(){var e=this,t=this.props.location;return c.a.createElement("div",null,c.a.createElement("a",{className:"usa-skipnav",href:"#main-content"},"Skip to main content"),c.a.createElement("header",{className:"site-c-header",role:"banner"},c.a.createElement("div",{className:"site-l-wrapper"},c.a.createElement("div",{className:"site-c-header__masthead"},c.a.createElement("div",{className:"site-c-header__logo",id:"extended-logo"},c.a.createElement("em",{className:"site-c-header__logo-text"},c.a.createElement(d.a,{className:"site-c-header__logo-link",title:"VA.gov client application documentation homepage",to:"/"},c.a.createElement("strong",{className:"vads-u-display--block small-screen:vads-u-display--inline"},"VA.gov")," ",c.a.createElement("span",{className:"vads-u-display--none small-screen:vads-u-display--inline"},"|")," ","Client application documentation"))),c.a.createElement("div",{className:"site-c-header__utility-links"},c.a.createElement("div",{id:"search-container",className:"site-search-container"},c.a.createElement("i",{className:"fas fa-search search-icon"}),c.a.createElement("input",{type:"search",className:"site-search-container__input",id:"search-input",placeholder:"Search...","aria-label":"Search"}),c.a.createElement("ul",{id:"results-container",className:"site-search-results",role:"listbox"}))),c.a.createElement("button",{type:"button",id:"toggle-mobile-search","aria-label":"Show search",className:"site-toggle-search","aria-controls":"mobile-search-container"},c.a.createElement("i",{className:"fas fa-search"})),c.a.createElement("button",{className:"site-c-header__open-mobile-nav-button",id:"open-mobile-nav-button","aria-label":"Open navigation menu",type:"button",onClick:function(){return e.setState({navOpen:!0})}},"Menu")),c.a.createElement("nav",{className:"site-c-header__nav"},c.a.createElement("ul",{className:"site-c-header__nav-list"},h.a.sections.map(function(e){return c.a.createElement("li",{key:e.id,className:"site-c-header__nav-item"},c.a.createElement(d.a,{className:"site-c-header__nav-item__link "+(t.pathname.includes(e.href)?"current":""),to:e.href},e.name))}))))),c.a.createElement("div",{id:"mobile-search-container",className:"site-search-container site-seach-container--mobile"},c.a.createElement("i",{className:"fas fa-search search-icon search-icon--mobile"}),c.a.createElement("input",{type:"search",className:"site-search-container__input vads-u-max-width--none",id:"mobile-search-input",placeholder:"Search...","aria-label":"Search"}),c.a.createElement("ul",{id:"mobile-results-container",className:"site-search-results site-search-results--mobile",role:"listbox"})),this.state.navOpen&&c.a.createElement("div",{className:"site-c-overlay is-visible"}),c.a.createElement(v,{location:t,open:this.state.navOpen,onClose:function(){return e.setState({navOpen:!1})}}))},t}(c.a.Component),y=(a(341),function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},a.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},a.render=function(){var e=this.props,t=e.children,a=e.location;return c.a.createElement(d.b,{query:"1044757290",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},c.a.createElement("html",{lang:"en"})),c.a.createElement(N,{location:a}),t)},data:r})},t}(c.a.Component));y.propTypes={children:m.a.node.isRequired};t.a=y},337:function(e){e.exports={data:{components:{edges:[{node:{path:"/platform/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/platform/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/platform/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/platform/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/platform/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/platform/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/platform/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/platform/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/platform/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/platform/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/platform/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/platform/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/platform/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/platform/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/platform/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/platform/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/platform/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/platform/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/platform/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/platform/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/platform/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/platform/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/platform/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/platform/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/platform/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/platform/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/platform/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/platform/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/platform/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/platform/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/platform/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/platform/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/platform/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/platform/modal/",context:{source:"component",name:"Modal"}}}]}}}},338:function(e,t,a){"use strict";var n=a(2),o=a.n(n),r=a(13),s=a.n(r),c=a(336),i=(a(17),a(133),a(134),a(135),a(331)),m=a(337);function l(){return o.a.createElement(i.b,{query:"157057713",render:function(e){return o.a.createElement(p,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:m})}function p(e){var t=e.items;return t.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},t.map(function(e){return o.a.createElement("li",{key:e.name},!!e.items&&o.a.createElement("li",{key:e.name},o.a.createElement("h4",null,e.name),o.a.createElement(p,{items:e.items})),"componentList"===e.query&&o.a.createElement("li",{key:e.name},o.a.createElement("h4",null,e.name),o.a.createElement(l,null)),!!e.href&&o.a.createElement("li",{key:e.name},o.a.createElement(i.a,{to:e.href},e.name)),!e.href&&!e.items&&!e.query&&o.a.createElement("li",{key:e.name},e.name," (future)"))})):null}var d=a(332),u=a.n(d);function h(e){var t=e.location,a=u.a.sections.find(function(e){return t.pathname.includes(e.href)});return o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},!!a&&o.a.createElement(p,{items:a.items}),!a&&o.a.createElement("ul",{className:"site-c-sidenav-list"},u.a.sections.map(function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(i.a,{to:e.href},e.name))})))}function g(e){var t=e.children,a=e.location;return o.a.createElement(c.a,{location:a},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:a}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t)))}a.d(t,"a",function(){return g}),g.propTypes={children:s.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-architecture-front-end-standards-accessibility-mdx-90d8d3c06173febf7de3.js.map