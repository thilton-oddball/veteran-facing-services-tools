(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{297:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d}),a.d(t,"_frontmatter",function(){return u});a(42);var n=a(43),o=a.n(n),r=a(3),s=a.n(r),i=a(2),c=a.n(i),m=a(4),l=a(337),p={},d=function(e){function t(t){var a;return(a=e.call(this,t)||this).layout=l.a,a}return s()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,a=o()(e,["components"]);return c.a.createElement(m.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,a),components:t},c.a.createElement(m.MDXTag,{name:"h2",components:t},"VA.gov Client Overview"),c.a.createElement(m.MDXTag,{name:"p",components:t},"Welcome to the VA digital services platform front-end overview. The goal of this article is to provide a high level overview of our front end architecture to get you oriented with the ",c.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website"}},"vets-website")," repository."),c.a.createElement(m.MDXTag,{name:"p",components:t},"The overall architecture for VA.gov is comprised of an API backend written in Ruby on Rails (",c.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-api"}},"vets-api"),") and a static front-end, written in HTML, CSS, and Javascript (",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"vets-website"),"). There's no server-side rendering or processing for the front-end; the build process compiles everything into static resources which are served to users."),c.a.createElement(m.MDXTag,{name:"h2",components:t},"Build process"),c.a.createElement(m.MDXTag,{name:"p",components:t},"The build process for this is controlled by a tool called ",c.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"http://www.metalsmith.io/"}},"Metalsmith"),", which is a pluggable Node.js static site generator. In general, everything in Metalsmith is a plugin, so if you're looking for specific parts of the build process, expect to check out a plugin or two. We use Metalsmith because it's flexible and because it's Javascript based, it's easy to integrate with the rest of our tools."),c.a.createElement(m.MDXTag,{name:"p",components:t},"The build process has two primary kinds of functionality that it processes: static content pages and Javascript applications. Most of VA.gov consists of content that lives in Markdown files and is converted into HTML by a Metalsmith plugin. There are shared templates and other enhancements to make this content easier to structure. This content lives in ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"content/pages"),", which also provides the basic URL structure of the site."),c.a.createElement(m.MDXTag,{name:"h2",components:t},"Javascript applications"),c.a.createElement(m.MDXTag,{name:"p",components:t},"Javascript applications are the other type of functionality in vets-website. These applications are written in ",c.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://reactjs.org/"}},"React")," and ",c.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://redux.js.org/"}},"Redux")," and live in ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"src/applications/")," in ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"vets-website"),". For each app you'll find a ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"manifest.json")," file that contains application information. You'll find the root url of the application, which you can use to navigate to that application on the site. These applications also usually have client-side routes, so opening that root url may allow you to click to other pages that are fully client-side, and not based on pages in ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"content/pages"),"."),c.a.createElement(m.MDXTag,{name:"p",components:t},"If you're a developer, most of your time will likely be spent working on a React application. We use React because it's widely used by front end developers and provides a good balance of performance and approachability. We also use Redux to manage application state, also because it's commonly used with React and fits most of the applications on VA.gov well. We use ",c.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://reacttraining.com/react-router/"}},"React Router")," for client-side routing and ",c.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://webpack.js.org/"}},"Webpack")," as a build tool, both of which are the ",c.a.createElement(m.MDXTag,{name:"em",components:t,parentName:"p"},"de facto")," standards in the Javascript world. For styles we use ",c.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://sass-lang.com/"}},"Sass")," and for dependency management we use ",c.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://yarnpkg.com/en/"}},"Yarn"),"."),c.a.createElement(m.MDXTag,{name:"h2",components:t},"Design system"),c.a.createElement(m.MDXTag,{name:"p",components:t},"You will also find that our visual components and site-wide styles live in an external ",c.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://department-of-veterans-affairs.github.io/design-system/"}},"design system"),". This design system is based on the ",c.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://designsystem.digital.gov/"}},"US Web Design System"),", with some additional modifications by our team. As part of that design system, we provide a set of React components covering common patterns, which is ",c.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.npmjs.com/package/@department-of-veterans-affairs/formation"}},"published to npm"),". You'll likely use these components to make your apps accessible and consistent with the rest of VA.gov."),c.a.createElement(m.MDXTag,{name:"h2",components:t},"Routing for React apps"),c.a.createElement(m.MDXTag,{name:"h3",components:t},"Production"),c.a.createElement(m.MDXTag,{name:"p",components:t},"The production deployment of the vet-website front end consists of static HTML, CSS, and JS assets deployed to an Amazon S3 bucket. We have an nginx server that serves those static assets and does some extra route handling for our single page React apps."),c.a.createElement(m.MDXTag,{name:"p",components:t},"React applications have a single entry page in the ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"content/pages")," folder and a special nginx ",c.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vetsgov/vars/react_routes.yml"}},"config entry"),". Each of the React applications listed in that config are standalone single page apps, and for each of the urls listed in that section of the config, the nginx server routes anything that starts with that url to the static page at that url, instead of trying to find a content page at that spot in the ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"content/pages")," folder structure. See the example below for a step by step view of that process."),c.a.createElement(m.MDXTag,{name:"p",components:t},"When that page is loaded and the JS bundle is downloaded and parsed, React Router sees the original route, removes the base url specified in the entry page from it, and routes to the page configured in the routes for the React app."),c.a.createElement(m.MDXTag,{name:"p",components:t},"In summary, nginx routes a variety of different urls to the same static entry page, and React Router renders the correct component based on the route configuration client side."),c.a.createElement(m.MDXTag,{name:"h4",components:t},"Example"),c.a.createElement(m.MDXTag,{name:"p",components:t},"Here's an example using the claim status application:"),c.a.createElement(m.MDXTag,{name:"ol",components:t},c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ol"},"User opens ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"va.gov/track-claims/your-claims/2344/detail")),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ol"},"Nginx serves ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"va.gov/track-claims/index.html"),", because ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"/track-claims")," is configured as a React application"),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ol"},"In the browser, the JS bundle loads and React Router sees a url of ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"/track-claims/your-claims/2344/detail")),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ol"},"Since React Router has a base url of ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"/track-claims"),", it runs its routing logic on ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"/your-claims/2344/detail"),", and renders the appropriate component for that url.")),c.a.createElement(m.MDXTag,{name:"p",components:t},"One other thing to note is that links that use the ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"Link")," component or the ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"router")," object in the React app use the history api to change the url without reloading the page. React Router listens for these url changes and renders the right component for you. This is why you have to use ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"Link")," and not a regular ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"a")," element, which results in a page refresh for the url you're trying to link to."),c.a.createElement(m.MDXTag,{name:"h3",components:t},"Development"),c.a.createElement(m.MDXTag,{name:"p",components:t},"Locally, we've configured the webpack dev server to do the same redirects as nginx, however they are duplicated in a couple places:"),c.a.createElement(m.MDXTag,{name:"ul",components:t},c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/script/build.js"}},"script/build.js")),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/testing/e2e/test-server.js"}},"src/platform/testing/e2e/test-server.js")," (for e2e tests)")),c.a.createElement(m.MDXTag,{name:"p",components:t},"You will need to update these locations as well as the nginx config when creating a new React application."),c.a.createElement(m.MDXTag,{name:"h2",components:t},"Using React on static content pages"),c.a.createElement(m.MDXTag,{name:"p",components:t},"The way vets-website is built means that we have two types of content to users: static pages and React apps. Our static pages are rendered ahead of time, while React apps are rendered client-side. However, the static pages do have some content rendered client-side, namely the sign in widget. This means we're including React on all static pages, so it is possible to use it if you need it."),c.a.createElement(m.MDXTag,{name:"p",components:t},"All the static pages use the static-pages entry bundle, so any JS code included from that file will be on all static pages. You can easily create a div with a particular id in a static content page, then include JS that renders a React component into that div, the same way any of our React apps do."),c.a.createElement(m.MDXTag,{name:"h3",components:t},"Guidelines for using React on a static page"),c.a.createElement(m.MDXTag,{name:"p",components:t},"All that said, we should be careful to not create a bad user experience when using React on static pages. Here are some guidelines you should follow:"),c.a.createElement(m.MDXTag,{name:"ol",components:t},c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ol"},"JS and React take time to download, parse, and render. Make sure you are providing the appropriate feedback to users while that is happening, with a spinner or another method from the UX team."),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ol"},"Make sure the page is still usable if your React code fails to work. This can mean it fails to download, an error occurs, or just handling the different login states a user can be in."),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ol"},"Be aware of how much weight you're adding to the static-pages bundle and code-split/lazy load when it makes sense.")),c.a.createElement(m.MDXTag,{name:"h3",components:t},"Common widget code"),c.a.createElement(m.MDXTag,{name:"p",components:t},"There's a simple static page widget feature that you can use to help with the first two points above. The code is in ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"src/applications/static-pages/static-page-widgets.js"),". Using this will inline some JS that can handle displaying a loading spinner and showing an error message if something goes wrong before the React code can take over rendering. Several pension pages use this functionality (",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"content/pages/pension/index.md"),", ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"content/pages/pension/apply.md"),"). It's controlled by defining a widgets list in the front matter for the static content page you're on. The options are:"),c.a.createElement(m.MDXTag,{name:"pre",components:t},c.a.createElement(m.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"- widgets\n  - root: react-applicationStatus\n    timeout: 20\n    showSpinnerUnauthed: false\n    slowLoadingThreshold: 6\n    loadingMessage: Loading\n    slowMessage: Sorry, this is taking longer than expected.\n    errorMessage: Sorry, something went wrong.\n")),c.a.createElement(m.MDXTag,{name:"ul",components:t},c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(m.MDXTag,{name:"p",components:t,parentName:"li"},"root: The id of the div where the React component will mount.")),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(m.MDXTag,{name:"p",components:t,parentName:"li"},"timeout: The amount of time in seconds before the error message is shown.")),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(m.MDXTag,{name:"p",components:t,parentName:"li"},c.a.createElement(m.MDXTag,{name:"del",components:t,parentName:"p"},"production: If this widget should be rendered in production. Assumed to be true if left blank.")),c.a.createElement(m.MDXTag,{name:"ul",components:t,parentName:"li"},c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(m.MDXTag,{name:"p",components:t,parentName:"li"},"To disable an application in an environment, you must add that environment as Frontmatter in the corresponding content page and set it to false. For example:"),c.a.createElement(m.MDXTag,{name:"pre",components:t,parentName:"li"},c.a.createElement(m.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"---\ntitle: My app\nlayout: page-react.html\nproduction: false\n---\n")),c.a.createElement(m.MDXTag,{name:"p",components:t,parentName:"li"},'This works for any environment, so adding "staging: false" below the "production: false"  would also disable the page in the Staging environment.')))),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(m.MDXTag,{name:"p",components:t,parentName:"li"},"showSpinnerUnauthed: By default, a spinner is shown only if a user has a session token. This will override that and show it always.")),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(m.MDXTag,{name:"p",components:t,parentName:"li"},"slowLoadingThreshold: The amount of time in seconds before the slow loading message is shown. This is skipped if the threshold is greater than the overall timeout. Defaulted to 6 seconds.")),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(m.MDXTag,{name:"p",components:t,parentName:"li"},"slowMessage: Message shown when the slowThreshold is passed. Defaulted to message above.")),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(m.MDXTag,{name:"p",components:t,parentName:"li"},"loadingMessage: Message shown while the JS code is loading. This should probably match any loading message in your React code.")),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(m.MDXTag,{name:"p",components:t,parentName:"li"},"errorMessage: Message shown when the JS code fails or times out."))))},t}(c.a.Component),u={}},330:function(e,t,a){"use strict";a.d(t,"b",function(){return l});var n=a(2),o=a.n(n),r=a(13),s=a.n(r),i=a(68),c=a.n(i);a.d(t,"a",function(){return c.a});a(332);var m=o.a.createContext({}),l=function(e){return o.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},331:function(e,t){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"/getting-started",items:[{name:"Start up guide",items:[{name:"Set up VA.gov locally",href:"getting-started"},{name:"Accessing internal tools",href:"getting-started/internal-tools"},{name:"VA.gov environments",href:"getting-started/environments"},{name:"Development workflow",href:"getting-started/workflow"},{name:"Bundes and Code organization",href:"getting-started/bundles-and-code-organization"}]},{name:"Common tasks",items:[{name:"Running VA.gov locally",href:"getting-started/common-tasks/local"},{name:"Building VA.gov",href:"getting-started/common-tasks/build"},{name:"Running tests",href:"getting-started/common-tasks/tests"},{name:"Linting your code",href:"getting-started/common-tasks/lint"},{name:"Creating a new React application",href:"getting-started/common-tasks/new-app"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"},{name:"Adding new pages to this site",href:"getting-started/common-tasks/doc-page"},{name:"Adding pages from Github to this site",href:"getting-started/common-tasks/external-doc-page"},{name:"Add Graphs to MDX",href:"getting-started/common-tasks/add-graphs-to-mdx"},{name:"Creating A Gatsby Plugin",href:"getting-started/common-tasks/creating-gatsby-plugins"},{name:"Releases",href:"getting-started/common-tasks/releases"},{name:"Reviewing feature branches",href:"getting-started/common-tasks/reviewing-feature-branches"}]},{name:"Standards and conventions",items:[]}]},{id:"architecture",name:"Architecture",href:"/architecture",items:[{name:"Metalsmith",items:[{name:"How are URLs created",href:"architecture/metalsmith/urls"},{name:"How templates work",href:"architecture/metalsmith/templates"},{name:"How to create collections and related links",href:"architecture/metalsmith/collections"}]},{name:"Site structure",items:[{name:"Topology",href:"architecture/site-structure/topology-overview"},{name:"Client overview",href:"architecture/site-structure/client-overview"},{name:"Styling",href:"architecture/site-structure/styling-overview"}]},{name:"Front End Standards",items:[{name:"React standards",href:"architecture/front-end-standards/react"},{name:"Redux standards",href:"architecture/front-end-standards/redux"},{name:"Styles",href:"architecture/front-end-standards/styles"},{name:"React standards",href:"architecture/front-end-standards/react"},{name:"Accessibility",href:"architecture/front-end-standards/accessibility"},{name:"Documented Decisions",href:"architecture/front-end-standards/documented-decisions/summary"}]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing",href:"architecture/visual-regression-testing"},{name:"Teamsite",href:"architecture/teamsite"}]},{id:"forms",name:"Forms",href:"/forms",items:[{name:"Introduction",href:"forms/when-to-use-fs"},{name:"Tutorial",items:[{name:"Form Tutorial - Basic",href:"forms/form-tutorial-basic"},{name:"Form Tutorial - Intermediate",href:"forms/form-tutorial-intermediate"},{name:"Form Tutorial - Advanced",href:"forms/form-tutorial-advanced"},{name:"Setting up Save in Progress",href:"forms/save-in-progress"},{name:"Forms in Production",href:"forms/forms-in-production"}]},{name:"Architecture",items:[]},{name:"Common tasks",items:[]}]},{id:"platform",name:"Platform",href:"/platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags",href:"platform/feature-flags"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]}]}},332:function(e,t,a){var n;e.exports=(n=a(334))&&n.default||n},333:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov Developer's Documentations"}}}}},334:function(e,t,a){"use strict";a.r(t);var n=a(18),o=a.n(n),r=a(2),s=a.n(r),i=a(13),c=a.n(i),m=a(94),l=a(9),p=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return s.a.createElement(m.a,o()({location:t,pageResources:a},a.json))};p.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=p},335:function(e,t,a){"use strict";var n=a(3),o=a.n(n),r=a(333),s=a(2),i=a.n(s),c=a(13),m=a.n(c),l=a(338),p=a.n(l),d=a(330),u=(a(17),a(133),a(134),a(331)),h=a.n(u),g=a(18),f=a.n(g),v=a(339),b=a.n(v),E=function(e){function t(t){var a;return(a=e.call(this,t)||this).state=h.a.sections.reduce(function(e,t){var a;return f()(((a={})[t.id]=!1,a),e)},{}),a}return o()(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.open,n=t.onClose,o=t.location;return i.a.createElement("div",{className:b()("site-c-mobile-nav",{"is-visible":a}),id:"mobile-nav"},i.a.createElement("button",{id:"close_mobile_nav_button",className:"site-c-mobile-nav__close-button",type:"button",onClick:n,"aria-label":"Close this menu"},i.a.createElement("i",{className:"fas fa-times"})),i.a.createElement("div",{className:"usa-accordion "},h.a.sections.map(function(t){return i.a.createElement("div",{key:t.id},i.a.createElement("p",{className:"usa-accordion-heading site-c-mobile-nav__accordion-heading vads-u-border-top--0"},i.a.createElement("button",{className:"usa-accordion-button site-c-mobile-nav__accordion-button",onClick:function(){var a;return e.setState(((a={})[t.id]=!e.state[t.id],a))},"aria-expanded":e.state[t.id]?"true":"false","aria-controls":"nav-"+t.id},t.name)),i.a.createElement("div",{id:"nav-"+t.id,"aria-hidden":e.state[t.id]?"false":"true",className:"usa-accordion-content site-c-mobile-nav__accordion-content"},i.a.createElement("ul",{className:"site-c-mobile-nav-list"},i.a.createElement("li",{className:"site-c-mobile-nav-list__item"},i.a.createElement(d.a,{className:b()("site-c-mobile-nav-list__link",{current:o.pathname===t.href}),to:t.href},"Overview")))))})))},t}(i.a.Component),w=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={navOpen:!1},a}return o()(t,e),t.prototype.render=function(){var e=this,t=this.props.location;return i.a.createElement("div",null,i.a.createElement("a",{className:"usa-skipnav",href:"#main-content"},"Skip to main content"),i.a.createElement("header",{className:"site-c-header",role:"banner"},i.a.createElement("div",{className:"site-l-wrapper"},i.a.createElement("div",{className:"site-c-header__masthead"},i.a.createElement("div",{className:"site-c-header__logo",id:"extended-logo"},i.a.createElement("em",{className:"site-c-header__logo-text"},i.a.createElement(d.a,{className:"site-c-header__logo-link",title:"VA.gov client application documentation homepage",to:"/"},i.a.createElement("strong",{className:"vads-u-display--block small-screen:vads-u-display--inline"},"VA.gov")," ",i.a.createElement("span",{className:"vads-u-display--none small-screen:vads-u-display--inline"},"|")," ","Client application documentation"))),i.a.createElement("div",{className:"site-c-header__utility-links"},i.a.createElement("div",{id:"search-container",className:"site-search-container"},i.a.createElement("i",{className:"fas fa-search search-icon"}),i.a.createElement("input",{type:"search",className:"site-search-container__input",id:"search-input",placeholder:"Search...","aria-label":"Search"}),i.a.createElement("ul",{id:"results-container",className:"site-search-results",role:"listbox"}))),i.a.createElement("button",{type:"button",id:"toggle-mobile-search","aria-label":"Show search",className:"site-toggle-search","aria-controls":"mobile-search-container"},i.a.createElement("i",{className:"fas fa-search"})),i.a.createElement("button",{className:"site-c-header__open-mobile-nav-button",id:"open-mobile-nav-button","aria-label":"Open navigation menu",type:"button",onClick:function(){return e.setState({navOpen:!0})}},"Menu")),i.a.createElement("nav",{className:"site-c-header__nav"},i.a.createElement("ul",{className:"site-c-header__nav-list"},h.a.sections.map(function(e){return i.a.createElement("li",{key:e.id,className:"site-c-header__nav-item"},i.a.createElement(d.a,{className:"site-c-header__nav-item__link "+(t.pathname.includes(e.href)?"current":""),to:e.href},e.name))}))))),i.a.createElement("div",{id:"mobile-search-container",className:"site-search-container site-seach-container--mobile"},i.a.createElement("i",{className:"fas fa-search search-icon search-icon--mobile"}),i.a.createElement("input",{type:"search",className:"site-search-container__input vads-u-max-width--none",id:"mobile-search-input",placeholder:"Search...","aria-label":"Search"}),i.a.createElement("ul",{id:"mobile-results-container",className:"site-search-results site-search-results--mobile",role:"listbox"})),this.state.navOpen&&i.a.createElement("div",{className:"site-c-overlay is-visible"}),i.a.createElement(E,{location:t,open:this.state.navOpen,onClose:function(){return e.setState({navOpen:!1})}}))},t}(i.a.Component),y=(a(340),function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},a.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},a.render=function(){var e=this.props,t=e.children,a=e.location;return i.a.createElement(d.b,{query:"1044757290",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(w,{location:a}),t)},data:r})},t}(i.a.Component));y.propTypes={children:m.a.node.isRequired};t.a=y},336:function(e){e.exports={data:{components:{edges:[{node:{path:"/platform/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/platform/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/platform/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/platform/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/platform/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/platform/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/platform/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/platform/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/platform/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/platform/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/platform/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/platform/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/platform/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/platform/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/platform/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/platform/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/platform/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/platform/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/platform/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/platform/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/platform/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/platform/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/platform/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/platform/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/platform/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/platform/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/platform/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/platform/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/platform/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/platform/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/platform/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/platform/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/platform/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/platform/modal/",context:{source:"component",name:"Modal"}}}]}}}},337:function(e,t,a){"use strict";var n=a(2),o=a.n(n),r=a(13),s=a.n(r),i=a(335),c=(a(17),a(133),a(134),a(135),a(330)),m=a(336);function l(){return o.a.createElement(c.b,{query:"157057713",render:function(e){return o.a.createElement(p,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:m})}function p(e){var t=e.items;return t.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},t.map(function(e){return o.a.createElement("li",{key:e.name},!!e.items&&o.a.createElement("li",{key:e.name},o.a.createElement("h4",null,e.name),o.a.createElement(p,{items:e.items})),"componentList"===e.query&&o.a.createElement("li",{key:e.name},o.a.createElement("h4",null,e.name),o.a.createElement(l,null)),!!e.href&&o.a.createElement("li",{key:e.name},o.a.createElement(c.a,{to:e.href},e.name)),!e.href&&!e.items&&!e.query&&o.a.createElement("li",{key:e.name},e.name," (future)"))})):null}var d=a(331),u=a.n(d);function h(e){var t=e.location,a=u.a.sections.find(function(e){return t.pathname.includes(e.href)});return o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},!!a&&o.a.createElement(p,{items:a.items}),!a&&o.a.createElement("ul",{className:"site-c-sidenav-list"},u.a.sections.map(function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(c.a,{to:e.href},e.name))})))}function g(e){var t=e.children,a=e.location;return o.a.createElement(i.a,{location:a},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:a}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t)))}a.d(t,"a",function(){return g}),g.propTypes={children:s.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-architecture-site-structure-client-overview-mdx-b670834e6d937da1e0d3.js.map