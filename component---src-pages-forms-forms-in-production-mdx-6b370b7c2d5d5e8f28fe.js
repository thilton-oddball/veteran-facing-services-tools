(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{285:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return u}),n.d(t,"_frontmatter",function(){return d});n(42);var a=n(43),o=n.n(a),r=n(3),m=n.n(r),s=n(2),i=n.n(s),c=n(4),p=n(308),l={},u=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=p.a,n}return m()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=o()(e,["components"]);return i.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},l,n),components:t},i.a.createElement(c.MDXTag,{name:"h2",components:t},"Forms in Production"),i.a.createElement(c.MDXTag,{name:"p",components:t},"Now that you have a form in production, making future changes requires some extra care."),i.a.createElement(c.MDXTag,{name:"h2",components:t},"Changing your form schema"),i.a.createElement(c.MDXTag,{name:"p",components:t},"Once you're in production and you're also using the save in progress functionality, you have a dilemma when you want to change some fields or some validation on your form. Since there are forms that are saved, if you change the structure of the form, the saved data may no longer match and result in confusing validation errors for a user. Similarly, if validation changes, a user might have already gone past that field and won't know how to fix the new error."),i.a.createElement(c.MDXTag,{name:"p",components:t},'To address this issue, we have the ability to write "migrations" for form data. This way, you can update a user\'s data to match the new structure, as well as move their position in the form back, if they need to adjust something. Migrations are functions, run in a sequence, based on the "version" of the form, which is saved along with the form data.'),i.a.createElement(c.MDXTag,{name:"p",components:t},"Migrations go in the form config object:"),i.a.createElement(c.MDXTag,{name:"pre",components:t},i.a.createElement(c.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"const formConfig = {\n   ...\n   version: 1,\n   migrations: [\n     ({ formData, metadata, formId }) => {\n       // do something\n       return {\n         formData,\n         metadata\n       };\n     }\n   ]\n   ...\n};\n")),i.a.createElement(c.MDXTag,{name:"p",components:t},"We typically start at version 0 and increment each time we need to add a migration. Migrations are functions that get ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"formData"),", ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"metadata"),", and ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"formId")," as arguments. And they must return the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"formData")," and ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"metadata"),", with any changes that they have made. For example, here is a migration that the health care application uses to convert an old url:"),i.a.createElement(c.MDXTag,{name:"pre",components:t},i.a.createElement(c.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"({ formData, metadata }) => {\n  const url = metadata.returnUrl || metadata.return_url;\n  let newMetadata = metadata;\n\n  if (url === '/household-information/child-information') {\n    newMetadata = _.set('returnUrl', '/household-information/dependent-information', metadata);\n  }\n\n  return { formData, metadata: newMetadata };\n}\n")),i.a.createElement(c.MDXTag,{name:"p",components:t},"If the current return URL (which is the URL a user will return to when the load a saved form) matches the outdated one, we update it. The ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"formData")," is not changed in this case."),i.a.createElement(c.MDXTag,{name:"p",components:t},"Another example from the health care application was to fix a bug in our form structure:"),i.a.createElement(c.MDXTag,{name:"pre",components:t},i.a.createElement(c.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"(savedData) => {\n  const newData = savedData;\n  newData.formData = _.unset('isSpanishHispanicLatino', savedData.formData);\n\n  if (typeof _.get('view:demographicCategories.isSpanishHispanicLatino', newData.formData) === 'undefined') {\n    newData.formData = _.set('view:demographicCategories.isSpanishHispanicLatino', false, newData.formData);\n    return newData;\n  }\n\n  return newData;\n}\n")),i.a.createElement(c.MDXTag,{name:"p",components:t},"In this example, we're moving an incorrectly located ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"isSpanishHispanicLatino")," flag and setting it in the right spot."),i.a.createElement(c.MDXTag,{name:"p",components:t},"Writing migrations is not very common, but you may need to do it if you end up modifying a form that's already in production."),i.a.createElement("hr",null),i.a.createElement(c.MDXTag,{name:"p",components:t},"Back: ",i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"save-in-progress.md"}},"Vets Website Save in Progress")))},t}(i.a.Component),d={}},303:function(e,t,n){var a;e.exports=(a=n(305))&&a.default||a},304:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov Developer's Documentations"}}}}},305:function(e,t,n){"use strict";n.r(t);var a=n(18),o=n.n(a),r=n(2),m=n.n(r),s=n(13),i=n.n(s),c=n(94),p=n(9),l=function(e){var t=e.location,n=p.default.getResourcesForPathnameSync(t.pathname);return m.a.createElement(c.a,o()({location:t,pageResources:n},n.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},306:function(e){e.exports={data:{components:{edges:[{node:{path:"/platform/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/platform/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/platform/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/platform/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/platform/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/platform/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/platform/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/platform/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/platform/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/platform/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/platform/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/platform/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/platform/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/platform/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/platform/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/platform/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/platform/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/platform/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/platform/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/platform/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/platform/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/platform/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/platform/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/platform/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/platform/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/platform/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/platform/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/platform/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/platform/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/platform/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/platform/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/platform/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/platform/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/platform/modal/",context:{source:"component",name:"Modal"}}}]}}}},307:function(e,t){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"getting-started",items:[{name:"Environment setup",items:[{name:"Set up VA.gov locally",href:"getting-started"},{name:"Internal Tools",href:"getting-started/internal-tools"}]},{name:"Common tasks",items:[{name:"Running VA.gov locally",href:"getting-started/common-tasks/local"},{name:"Building VA.gov",href:"getting-started/common-tasks/build"},{name:"Running tests",href:"getting-started/common-tasks/tests"},{name:"Linting your code",href:"getting-started/common-tasks/lint"},{name:"Creating a new React application",href:"getting-started/common-tasks/new-app"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"},{name:"Adding new pages to this site",href:"getting-started/common-tasks/doc-page"},{name:"Adding pages from Github to this site",href:"getting-started/common-tasks/external-doc-page"}]},{name:"Code organization",items:[]},{name:"Standards and conventions",items:[]},{name:"Development workflow",items:[]}]},{id:"architecture",name:"Architecture",href:"architecture",items:[{name:"Site structure",items:[]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing"},{name:"Teamsite"}]},{id:"forms",name:"Forms",href:"forms",items:[{name:"Introduction",href:"forms/when-to-use-fs"},{name:"Tutorial",items:[{name:"Form Tutorial - Basic",href:"forms/form-tutorial-basic"},{name:"Form Tutorial - Intermediate",href:"forms/form-tutorial-intermediate"},{name:"Form Tutorial - Advanced",href:"forms/form-tutorial-advanced"},{name:"Setting up Save in Progress",href:"forms/save-in-progress"},{name:"Forms in Production",href:"forms/forms-in-production"}]},{name:"Architecture",items:[]},{name:"Common tasks",items:[]}]},{id:"platform",name:"Platform",href:"platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]}]}},308:function(e,t,n){"use strict";var a=n(3),o=n.n(a),r=n(304),m=n(2),s=n.n(m),i=n(13),c=n.n(i),p=n(309),l=n.n(p),u=n(68),d=n.n(u),h=(n(303),s.a.createContext({})),f=function(e){return s.a.createElement(h.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):s.a.createElement("div",null,"Loading (StaticQuery)")})};f.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func};n(17),n(133),n(134),n(135);var g=n(306);function E(){return s.a.createElement(f,{query:"157057713",render:function(e){return s.a.createElement(y,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:g})}function y(e){var t=e.items;return t.length?s.a.createElement("ul",{className:"menu-list"},t.map(function(e){return s.a.createElement("li",{key:e.name},!!e.items&&s.a.createElement("li",{key:e.name},s.a.createElement("h4",null,e.name),s.a.createElement(y,{items:e.items})),"componentList"===e.query&&s.a.createElement("li",{key:e.name},s.a.createElement("h4",null,e.name),s.a.createElement(E,null)),!!e.href&&s.a.createElement("li",{key:e.name},s.a.createElement(d.a,{to:e.href},e.name)),!e.href&&!e.items&&!e.query&&s.a.createElement("li",{key:e.name},e.name," (future)"))})):null}var v=n(307),w=n.n(v);function x(e){var t=e.location,n=w.a.sections.find(function(e){return t.pathname.includes("/"+e.href)});return s.a.createElement("aside",{className:"sidebar"},s.a.createElement("div",{className:"search"},s.a.createElement("div",{className:"input-wrap"},s.a.createElement("input",{type:"search",value:"",onChange:function(){},placeholder:"Type to search"}))),!!n&&s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",null,n.name),s.a.createElement(d.a,{className:"home-link",to:""},"Home"),s.a.createElement(y,{items:n.items})),!n&&s.a.createElement("ul",{className:"menu-list"},w.a.sections.map(function(e){return s.a.createElement("li",{key:e.id},s.a.createElement(d.a,{to:e.href},e.name))})))}n(310);var b=function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var n=t.prototype;return n.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},n.render=function(){var e=this.props,t=e.children,n=e.location;return s.a.createElement(f,{query:"1044757290",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},s.a.createElement("html",{lang:"en"})),s.a.createElement(x,{location:n}),s.a.createElement("div",{className:"ContentArea docSearch-content"},t))},data:r})},t}(s.a.Component);b.propTypes={children:c.a.node.isRequired};t.a=b}}]);
//# sourceMappingURL=component---src-pages-forms-forms-in-production-mdx-6b370b7c2d5d5e8f28fe.js.map