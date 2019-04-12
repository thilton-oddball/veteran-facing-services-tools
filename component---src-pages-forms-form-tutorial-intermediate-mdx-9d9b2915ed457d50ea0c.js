(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{290:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return d}),t.d(n,"_frontmatter",function(){return u});t(42);var a=t(43),o=t.n(a),r=t(3),m=t.n(r),i=t(2),s=t.n(i),c=t(4),l=t(321),p={},d=function(e){function n(n){var t;return(t=e.call(this,n)||this).layout=l.a,t}return m()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,t=o()(e,["components"]);return s.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,t),components:n},s.a.createElement(c.MDXTag,{name:"h2",components:n},"Form Tutorial - Intermediate"),s.a.createElement(c.MDXTag,{name:"h3",components:n},"Form Validation & Conditional Fields"),s.a.createElement(c.MDXTag,{name:"p",components:n},"Now that you've gone through and created a really simple form using the tutorial, let's take a look at how to handle some common use cases on forms."),s.a.createElement(c.MDXTag,{name:"h2",components:n},"Custom validation"),s.a.createElement(c.MDXTag,{name:"p",components:n},"Because our forms are based on JSON Schema, you can rely on the built in types and pattern property to do a lot of your validation. However, sometimes you need validation rules that go beyond what JSON Schema offers. To write custom validation, we have a ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ui:validation")," helper:"),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    myField: {\n      'ui:title': 'My field label',\n      'ui:validation': [\n        (errors, field) => {\n          if (field && field.startsWith('bad')) {\n            errors.addError(\"Sorry, you can't start this field with 'bad'\");\n          }\n        }\n      ]\n    }\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      myField: {\n        type: 'string'\n      }\n    }\n  }\n}\n")),s.a.createElement(c.MDXTag,{name:"p",components:n},s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ui:validation")," takes an array of functions, each of which is passed an errors object and the field data (plus some other parameters). So in the above example, if a user puts 'badString' in ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"myField"),", then the form will display a validation error with the message passed in ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"addError()"),"."),s.a.createElement(c.MDXTag,{name:"p",components:n},"One thing to note is that you can add ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ui:validation")," on any field or object in ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"uiSchema"),", which allows you to validate groups of fields together:"),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    email: {\n      'ui:title': 'Email',\n    },\n    confirmEmail: {\n      'ui:title': 'Confirm email'\n    },\n    'ui:validation': [\n      (errors, field) => {\n        if (field.email !== field.confirmEmail) {\n          errors.confirmEmail.addError('Sorry, your emails must match');\n        }\n      }\n    ]\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      email: {\n        type: 'string'\n      },\n      confirmEmail: {\n        type: 'string'\n      }\n    }\n  }\n}\n")),s.a.createElement(c.MDXTag,{name:"p",components:n},"Since we moved the validation array up to the root of ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"uiSchema"),", the field data it is passed is an object containing both ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"email")," and ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"confirmEmail"),", and we can set validation errors on either field."),s.a.createElement(c.MDXTag,{name:"h2",components:n},"Custom validation error messages"),s.a.createElement(c.MDXTag,{name:"p",components:n},"In addition to the above custom validation, you can also customize the messages for the built in JSON Schema validation. For example, if I have some pattern validation, I can set an understandable message:"),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    myField: {\n      'ui:title': 'My field',\n      'ui:errorMessages': {\n        pattern: 'Sorry, you must enter all digits'\n      }\n    },\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      myField: {\n        type: 'string',\n        pattern: '^d+$'\n      }\n    }\n  }\n}\n")),s.a.createElement(c.MDXTag,{name:"h2",components:n},"Conditional required fields"),s.a.createElement(c.MDXTag,{name:"p",components:n},"In some cases you may want to have fields be required only under certain conditions. To handle that, you can use the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ui:required")," helper:"),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    myField: {\n      'ui:title': 'My field',\n    },\n    myOtherField: {\n      'ui:title': 'My field',\n      'ui:required': (formData) => formData.myField === 'test'\n    },\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      myField: {\n        type: 'string',\n      }\n      myOtherField: {\n        type: 'string',\n      }\n    }\n  }\n}\n")),s.a.createElement(c.MDXTag,{name:"p",components:n},"In the above config, ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"myOtherField")," will be required if ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"myField"),' equals "test". The ',s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"formData")," parameter contains all of the form data, across all pages, so your conditional logic can be based on any other data in the form."),s.a.createElement(c.MDXTag,{name:"h2",components:n},"Conditionally displayed fields"),s.a.createElement(c.MDXTag,{name:"p",components:n},"Often when building forms you'll need to hide and show fields based on form data or other information. Our form system has three ways of doing so."),s.a.createElement(c.MDXTag,{name:"h3",components:n},"Expand under fields"),s.a.createElement(c.MDXTag,{name:"p",components:n},'A common pattern is to expand some fields "underneath" others, when a user enters information in a field that requires more information to be collected:'),s.a.createElement(c.MDXTag,{name:"p",components:n},"TODO: expandUnder image"),s.a.createElement(c.MDXTag,{name:"p",components:n},"To do that, you can use the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"expandUnder")," option:"),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    myField: {\n      'ui:title': 'My field',\n      'ui:widget': 'yesNo'\n    },\n    myConditionalField: {\n      'ui:title': 'My conditional field',\n      'ui:options': {\n        expandUnder: 'myField'\n      }\n    },\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      myField: {\n        type: 'boolean',\n      }\n      myOtherField: {\n        type: 'string',\n      }\n    }\n  }\n}\n")),s.a.createElement(c.MDXTag,{name:"p",components:n},"In the above example, ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"myConditionalField")," will display whenever ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"myField")," has a truthy value. You can add this to mutiple fields and all of them will be grouped under the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"expandUnder")," field. Note, however, that if any of these hidden fields are required when visible, you'll have to use ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ui:required")," to make sure they're not required when they're not displayed."),s.a.createElement(c.MDXTag,{name:"h3",components:n},"Conditionally hidden fields"),s.a.createElement(c.MDXTag,{name:"p",components:n},"If you just need to hide or show a field, without the expand under treatment, you can use ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"hideIf"),":"),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    myField: {\n      'ui:title': 'My field',\n      'ui:widget': 'yesNo'\n    },\n    myConditionalField: {\n      'ui:title': 'My conditional field',\n      'ui:options': {\n        hideIf: (formData) => formData.myField !== true\n      }\n    },\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      myField: {\n        type: 'boolean'\n      }\n      myOtherField: {\n        type: 'string'\n      }\n    }\n  }\n}\n")),s.a.createElement(c.MDXTag,{name:"p",components:n},"In the above example, ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"myConditionalField")," is hidden when ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"myField")," is not true (meaning it's false or undefined)."),s.a.createElement(c.MDXTag,{name:"h2",components:n},"Conditional pages"),s.a.createElement(c.MDXTag,{name:"p",components:n},"Another situation you may encounter is needing to make an entire page of the form conditional. You can do that with the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"depends")," property:"),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  depends: (form) => form.fieldOnAnotherPage !== 'test',\n  uiSchema: {\n    myField: {\n      'ui:title': 'My field',\n      'ui:widget': 'yesNo'\n    }\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      myField: {\n        type: 'boolean'\n      }\n    }\n  }\n}\n")),s.a.createElement(c.MDXTag,{name:"p",components:n},"The depends function is passed the current form data, so you can check different conditions and return false if want to skip a page. Note that you want to make sure you're checking data a user would enter before potentially reaching this page, otherwise they won't ever see it."),s.a.createElement(c.MDXTag,{name:"h2",components:n},"View only data"),s.a.createElement(c.MDXTag,{name:"p",components:n},"In some cases, you may have fields that you don't need to submit along with the form data. A confirmation email field, for example. In other cases you may also want to group fields into objects but not have that grouping reflected in the submitted data. This can be useful if you need to conditionally hide a group of fields and don't want to write hideIf functions every individual field."),s.a.createElement(c.MDXTag,{name:"p",components:n},"To keep a field from being submitted, you can prefix it with ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"view:"),":"),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    email: {\n      'ui:title': 'Email',\n    },\n    'view:confirmEmail': {\n      'ui:title': 'Confirm email'\n    }\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      email: {\n        type: 'string'\n      },\n      'view:confirmEmail': {\n        type: 'string'\n      }\n    }\n  }\n}\n")),s.a.createElement(c.MDXTag,{name:"p",components:n},"Since we've prefixed ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"confirmEmail")," with ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"view:"),", that field will be removed before submitting the completed form."),s.a.createElement(c.MDXTag,{name:"p",components:n},"If you prefix an object with ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"view:"),", some slightly different will happen:"),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    email: {\n      'ui:title': 'Email',\n    },\n    'view:confirmEmail': {\n      'ui:title': 'Confirm email'\n    }\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      'view:emails': {\n        email: {\n          type: 'string'\n        },\n        'confirmEmail': {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n")),s.a.createElement(c.MDXTag,{name:"p",components:n},"In this case, the form data that's submitted when a user completes a form would be:"),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"{\n  email: 'test@test.com',\n  confirmEmail: 'test@test.com'\n}\n")),s.a.createElement(c.MDXTag,{name:"p",components:n},"If we had left off the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"view:")," prefix it would be:"),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"{\n  emails: {\n    email: 'test@test.com',\n    confirmEmail: 'test@test.com'\n  }\n}\n")),s.a.createElement(c.MDXTag,{name:"p",components:n},"That should get you started with some of the common validation and conditional field scenarios. Many of the options above have extra parameters or options that may help with some less common scenarios, so make sure to check the form config spec for a full picture of all the options offered."),s.a.createElement("hr",null),s.a.createElement(c.MDXTag,{name:"p",components:n},"Back: ",s.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"./form-tutorial-basic"}},"Vets Website Form Tutorial - Basic")),s.a.createElement(c.MDXTag,{name:"p",components:n},"Next: ",s.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"./form-tutorial-advanced"}},"Vets Website Form Tutorial - Advanced")))},n}(s.a.Component),u={}},316:function(e,n,t){var a;e.exports=(a=t(318))&&a.default||a},317:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov Developer's Documentations"}}}}},318:function(e,n,t){"use strict";t.r(n);var a=t(18),o=t.n(a),r=t(2),m=t.n(r),i=t(13),s=t.n(i),c=t(94),l=t(9),p=function(e){var n=e.location,t=l.default.getResourcesForPathnameSync(n.pathname);return m.a.createElement(c.a,o()({location:n,pageResources:t},t.json))};p.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},n.default=p},319:function(e){e.exports={data:{components:{edges:[{node:{path:"/platform/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/platform/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/platform/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/platform/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/platform/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/platform/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/platform/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/platform/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/platform/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/platform/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/platform/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/platform/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/platform/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/platform/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/platform/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/platform/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/platform/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/platform/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/platform/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/platform/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/platform/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/platform/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/platform/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/platform/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/platform/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/platform/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/platform/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/platform/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/platform/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/platform/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/platform/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/platform/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/platform/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/platform/modal/",context:{source:"component",name:"Modal"}}}]}}}},320:function(e,n){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"getting-started",items:[{name:"Start up guide",items:[{name:"Set up VA.gov locally",href:"getting-started"},{name:"Accessing internal tools",href:"getting-started/internal-tools"},{name:"VA.gov environments",href:"getting-started/environments"},{name:"Development workflow",href:"getting-started/workflow"},{name:"Bundes and Code organization",href:"getting-started/bundles-and-code-organization"}]},{name:"Common tasks",items:[{name:"Running VA.gov locally",href:"getting-started/common-tasks/local"},{name:"Building VA.gov",href:"getting-started/common-tasks/build"},{name:"Running tests",href:"getting-started/common-tasks/tests"},{name:"Linting your code",href:"getting-started/common-tasks/lint"},{name:"Creating a new React application",href:"getting-started/common-tasks/new-app"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"},{name:"Adding new pages to this site",href:"getting-started/common-tasks/doc-page"},{name:"Adding pages from Github to this site",href:"getting-started/common-tasks/external-doc-page"},{name:"Add Graphs to MDX",href:"getting-started/common-tasks/add-graphs-to-mdx"},{name:"Creating A Gatsby Plugin",href:"getting-started/common-tasks/creating-gatsby-plugins"}]},{name:"Standards and conventions",items:[]}]},{id:"architecture",name:"Architecture",href:"architecture",items:[{name:"Metalsmith",items:[{name:"How are URLs created",href:"architecture/metalsmith/urls"},{name:"How templates work",href:"architecture/metalsmith/templates"},{name:"How to create collections and related links",href:"architecture/metalsmith/collections"}]},{name:"Site structure",items:[{name:"Topology",href:"architecture/site-structure/topology-overview"},{name:"Client overview",href:"architecture/site-structure/client-overview"},{name:"Styling",href:"architecture/site-structure/styling-overview"}]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing",href:"architecture/visual-regression-testing"},{name:"Teamsite",href:"architecture/teamsite"}]},{id:"forms",name:"Forms",href:"forms",items:[{name:"Introduction",href:"forms/when-to-use-fs"},{name:"Tutorial",items:[{name:"Form Tutorial - Basic",href:"forms/form-tutorial-basic"},{name:"Form Tutorial - Intermediate",href:"forms/form-tutorial-intermediate"},{name:"Form Tutorial - Advanced",href:"forms/form-tutorial-advanced"},{name:"Setting up Save in Progress",href:"forms/save-in-progress"},{name:"Forms in Production",href:"forms/forms-in-production"}]},{name:"Architecture",items:[]},{name:"Common tasks",items:[]}]},{id:"platform",name:"Platform",href:"platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags",href:"platform/feature-flags"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]}]}},321:function(e,n,t){"use strict";var a=t(3),o=t.n(a),r=t(317),m=t(2),i=t.n(m),s=t(13),c=t.n(s),l=t(322),p=t.n(l),d=t(68),u=t.n(d),h=(t(316),i.a.createContext({})),g=function(e){return i.a.createElement(h.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};g.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func};t(17),t(133),t(134),t(135);var f=t(319);function y(){return i.a.createElement(g,{query:"157057713",render:function(e){return i.a.createElement(E,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:f})}function E(e){var n=e.items;return n.length?i.a.createElement("ul",{className:"menu-list"},n.map(function(e){return i.a.createElement("li",{key:e.name},!!e.items&&i.a.createElement("li",{key:e.name},i.a.createElement("h4",null,e.name),i.a.createElement(E,{items:e.items})),"componentList"===e.query&&i.a.createElement("li",{key:e.name},i.a.createElement("h4",null,e.name),i.a.createElement(y,null)),!!e.href&&i.a.createElement("li",{key:e.name},i.a.createElement(u.a,{to:e.href},e.name)),!e.href&&!e.items&&!e.query&&i.a.createElement("li",{key:e.name},e.name," (future)"))})):null}var T=t(320),b=t.n(T);function M(e){var n=e.location,t=b.a.sections.find(function(e){return n.pathname.includes("/"+e.href)});return i.a.createElement("aside",{className:"sidebar"},i.a.createElement("div",{className:"search"},i.a.createElement("div",{className:"input-wrap"},i.a.createElement("input",{type:"search",value:"",onChange:function(){},placeholder:"Type to search"}))),!!t&&i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,t.name),i.a.createElement(u.a,{className:"home-link",to:""},"Home"),i.a.createElement(E,{items:t.items})),!t&&i.a.createElement("ul",{className:"menu-list"},b.a.sections.map(function(e){return i.a.createElement("li",{key:e.id},i.a.createElement(u.a,{to:e.href},e.name))})))}t(323);var w=function(e){function n(){return e.apply(this,arguments)||this}o()(n,e);var t=n.prototype;return t.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},t.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},t.render=function(){var e=this.props,n=e.children,t=e.location;return i.a.createElement(g,{query:"1044757290",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(M,{location:t}),i.a.createElement("div",{className:"ContentArea docSearch-content"},n))},data:r})},n}(i.a.Component);w.propTypes={children:c.a.node.isRequired};n.a=w}}]);
//# sourceMappingURL=component---src-pages-forms-form-tutorial-intermediate-mdx-9d9b2915ed457d50ea0c.js.map