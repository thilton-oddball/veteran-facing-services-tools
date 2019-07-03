(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{386:function(e,n,a){"use strict";a.r(n),a.d(n,"default",function(){return s}),a.d(n,"_frontmatter",function(){return c});a(11),a(9),a(6),a(19),a(10);var t=a(2),o=a.n(t),i=a(3),r=a(396);var m={},s=function(e){var n,a;function t(n){var a;return(a=e.call(this,n)||this).layout=r.a,a}return a=e,(n=t).prototype=Object.create(a.prototype),n.prototype.constructor=n,n.__proto__=a,t.prototype.render=function(){var e=this.props,n=e.components,a=function(e,n){if(null==e)return{};var a,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return o.a.createElement(i.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},m,a),components:n},o.a.createElement("h1",{id:"intermediate-tutorial"},"Intermediate tutorial"),o.a.createElement(i.MDXTag,{name:"p",components:n},"Previous: ",o.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"./form-tutorial-basic"}},"Basic tutorial")),o.a.createElement(i.MDXTag,{name:"p",components:n},"Now that you've gone through and created a really simple form using the tutorial, let's take a look at how to handle some common use cases on forms."),o.a.createElement("h2",{id:"form-validation"},"Form validation"),o.a.createElement(i.MDXTag,{name:"p",components:n},"Because our forms are based on JSON Schema, you can rely on the built in types and pattern property to do a lot of your validation. However, sometimes you need validation rules that go beyond what JSON Schema offers. To write custom validation, we have a ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ui:validation")," helper:"),o.a.createElement(i.MDXTag,{name:"pre",components:n},o.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    myField: {\n      'ui:title': 'My field label',\n      'ui:validation': [\n        (errors, field) => {\n          if (field && field.startsWith('bad')) {\n            errors.addError(\"Sorry, you can't start this field with 'bad'\");\n          }\n        }\n      ]\n    }\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      myField: {\n        type: 'string'\n      }\n    }\n  }\n}\n")),o.a.createElement(i.MDXTag,{name:"p",components:n},o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ui:validation")," takes an array of functions, each of which is passed an errors object and the field data (plus some other parameters). So in the above example, if a user puts 'badString' in ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"myField"),", then the form will display a validation error with the message passed in ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"addError()"),"."),o.a.createElement(i.MDXTag,{name:"p",components:n},"One thing to note is that you can add ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ui:validation")," on any field or object in ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"uiSchema"),", which allows you to validate groups of fields together:"),o.a.createElement(i.MDXTag,{name:"pre",components:n},o.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    email: {\n      'ui:title': 'Email',\n    },\n    confirmEmail: {\n      'ui:title': 'Confirm email'\n    },\n    'ui:validation': [\n      (errors, field) => {\n        if (field.email !== field.confirmEmail) {\n          errors.confirmEmail.addError('Sorry, your emails must match');\n        }\n      }\n    ]\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      email: {\n        type: 'string'\n      },\n      confirmEmail: {\n        type: 'string'\n      }\n    }\n  }\n}\n")),o.a.createElement(i.MDXTag,{name:"p",components:n},"Since we moved the validation array up to the root of ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"uiSchema"),", the field data it is passed is an object containing both ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"email")," and ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"confirmEmail"),", and we can set validation errors on either field."),o.a.createElement("h3",{id:"custom-validation-error-messages"},"Custom validation error messages"),o.a.createElement(i.MDXTag,{name:"p",components:n},"In addition to the above custom validation, you can also customize the messages for the built in JSON Schema validation. For example, if I have some pattern validation, I can set an understandable message:"),o.a.createElement(i.MDXTag,{name:"pre",components:n},o.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    myField: {\n      'ui:title': 'My field',\n      'ui:errorMessages': {\n        pattern: 'Sorry, you must enter all digits'\n      }\n    },\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      myField: {\n        type: 'string',\n        pattern: '^d+$'\n      }\n    }\n  }\n}\n")),o.a.createElement("h2",{id:"conditional-required-fields"},"Conditional required fields"),o.a.createElement(i.MDXTag,{name:"p",components:n},"In some cases you may want to have fields be required only under certain conditions. To handle that, you can use the ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ui:required")," helper:"),o.a.createElement(i.MDXTag,{name:"pre",components:n},o.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    myField: {\n      'ui:title': 'My field',\n    },\n    myOtherField: {\n      'ui:title': 'My field',\n      'ui:required': (formData) => formData.myField === 'test'\n    },\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      myField: {\n        type: 'string',\n      }\n      myOtherField: {\n        type: 'string',\n      }\n    }\n  }\n}\n")),o.a.createElement(i.MDXTag,{name:"p",components:n},"In the above config, ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"myOtherField")," will be required if ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"myField"),' equals "test". The ',o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"formData")," parameter contains all of the form data, across all pages, so your conditional logic can be based on any other data in the form."),o.a.createElement("h2",{id:"conditionally-displayed-fields"},"Conditionally displayed fields"),o.a.createElement(i.MDXTag,{name:"p",components:n},"Often when building forms you'll need to hide and show fields based on form data or other information. Our form system has three ways of doing so."),o.a.createElement("h4",{id:"expand-under-fields"},"Expand under fields"),o.a.createElement(i.MDXTag,{name:"p",components:n},'A common pattern is to expand some fields "underneath" others, when a user enters information in a field that requires more information to be collected:'),o.a.createElement(i.MDXTag,{name:"p",components:n},o.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"534px"}},o.a.createElement("a",{className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/acb74d8d8ce49a5745002e38ca6fb0a4/ef8bc/expand_under.png",style:{display:"block"},target:"_blank",rel:"noopener"},o.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"30.1498127340824%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),o.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"expand under",title:"",src:"/veteran-facing-services-tools/static/acb74d8d8ce49a5745002e38ca6fb0a4/ef8bc/expand_under.png",srcSet:"/veteran-facing-services-tools/static/acb74d8d8ce49a5745002e38ca6fb0a4/f4a45/expand_under.png 259w,\n/veteran-facing-services-tools/static/acb74d8d8ce49a5745002e38ca6fb0a4/ef0f6/expand_under.png 518w,\n/veteran-facing-services-tools/static/acb74d8d8ce49a5745002e38ca6fb0a4/ef8bc/expand_under.png 534w",sizes:"(max-width: 534px) 100vw, 534px"})))),o.a.createElement(i.MDXTag,{name:"p",components:n},"To do that, you can use the ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"expandUnder")," option:"),o.a.createElement(i.MDXTag,{name:"pre",components:n},o.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    myField: {\n      'ui:title': 'My field',\n      'ui:widget': 'yesNo'\n    },\n    myConditionalField: {\n      'ui:title': 'My conditional field',\n      'ui:options': {\n        expandUnder: 'myField'\n      }\n    },\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      myField: {\n        type: 'boolean',\n      }\n      myOtherField: {\n        type: 'string',\n      }\n    }\n  }\n}\n")),o.a.createElement(i.MDXTag,{name:"p",components:n},"In the above example, ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"myConditionalField")," will display whenever ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"myField")," has a truthy value. You can add this to mutiple fields and all of them will be grouped under the ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"expandUnder")," field. Note, however, that if any of these hidden fields are required when visible, you'll have to use ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ui:required")," to make sure they're not required when they're not displayed."),o.a.createElement("h3",{id:"conditionally-hidden-fields"},"Conditionally hidden fields"),o.a.createElement(i.MDXTag,{name:"p",components:n},"If you just need to hide or show a field, without the expand under treatment, you can use ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"hideIf"),":"),o.a.createElement(i.MDXTag,{name:"pre",components:n},o.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    myField: {\n      'ui:title': 'My field',\n      'ui:widget': 'yesNo'\n    },\n    myConditionalField: {\n      'ui:title': 'My conditional field',\n      'ui:options': {\n        hideIf: (formData) => formData.myField !== true\n      }\n    },\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      myField: {\n        type: 'boolean'\n      }\n      myOtherField: {\n        type: 'string'\n      }\n    }\n  }\n}\n")),o.a.createElement(i.MDXTag,{name:"p",components:n},"In the above example, ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"myConditionalField")," is hidden when ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"myField")," is not true (meaning it's false or undefined)."),o.a.createElement("h2",{id:"conditional-pages"},"Conditional pages"),o.a.createElement(i.MDXTag,{name:"p",components:n},"Another situation you may encounter is needing to make an entire page of the form conditional. You can do that with the ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"depends")," property:"),o.a.createElement(i.MDXTag,{name:"pre",components:n},o.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  depends: (form) => form.fieldOnAnotherPage !== 'test',\n  uiSchema: {\n    myField: {\n      'ui:title': 'My field',\n      'ui:widget': 'yesNo'\n    }\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      myField: {\n        type: 'boolean'\n      }\n    }\n  }\n}\n")),o.a.createElement(i.MDXTag,{name:"p",components:n},"The depends function is passed the current form data, so you can check different conditions and return false if want to skip a page. Note that you want to make sure you're checking data a user would enter before potentially reaching this page, otherwise they won't ever see it."),o.a.createElement("h2",{id:"view-only-data"},"View-only data"),o.a.createElement(i.MDXTag,{name:"p",components:n},"In some cases, you may have fields that you don't need to submit along with the form data. A confirmation email field, for example. In other cases you may also want to group fields into objects but not have that grouping reflected in the submitted data. This can be useful if you need to conditionally hide a group of fields and don't want to write hideIf functions every individual field."),o.a.createElement(i.MDXTag,{name:"p",components:n},"To keep a field from being submitted, you can prefix it with ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"view:"),":"),o.a.createElement(i.MDXTag,{name:"pre",components:n},o.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    email: {\n      'ui:title': 'Email',\n    },\n    'view:confirmEmail': {\n      'ui:title': 'Confirm email'\n    }\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      email: {\n        type: 'string'\n      },\n      'view:confirmEmail': {\n        type: 'string'\n      }\n    }\n  }\n}\n")),o.a.createElement(i.MDXTag,{name:"p",components:n},"Since we've prefixed ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"confirmEmail")," with ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"view:"),", that field will be removed before submitting the completed form."),o.a.createElement(i.MDXTag,{name:"p",components:n},"If you prefix an object with ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"view:"),", something slightly different will happen:"),o.a.createElement(i.MDXTag,{name:"pre",components:n},o.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    email: {\n      'ui:title': 'Email',\n    },\n    'view:confirmEmail': {\n      'ui:title': 'Confirm email'\n    }\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      'view:emails': {\n        email: {\n          type: 'string'\n        },\n        'confirmEmail': {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n")),o.a.createElement(i.MDXTag,{name:"p",components:n},"In this case, the form data that's submitted when a user completes a form would be:"),o.a.createElement(i.MDXTag,{name:"pre",components:n},o.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"{\n  email: 'test@test.com',\n  confirmEmail: 'test@test.com'\n}\n")),o.a.createElement(i.MDXTag,{name:"p",components:n},"If we had left off the ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"view:")," prefix it would be:"),o.a.createElement(i.MDXTag,{name:"pre",components:n},o.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"{\n  emails: {\n    email: 'test@test.com',\n    confirmEmail: 'test@test.com'\n  }\n}\n")),o.a.createElement(i.MDXTag,{name:"p",components:n},"That should get you started with some of the common validation and conditional field scenarios. Many of the options above have extra parameters or options that may help with some less common scenarios, so make sure to check the ",o.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/veteran-facing-services-tools/forms/docs/spec"}},"form config specification")," for a full picture of all the options offered."),o.a.createElement(i.MDXTag,{name:"p",components:n},"Next: ",o.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"./form-tutorial-advanced"}},"Advanced tutorial")))},t}(o.a.Component),c={}},395:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/promobanner/",context:{source:"component",name:"PromoBanner"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}}]}}}},396:function(e,n,a){"use strict";var t=a(2),o=a.n(t),i=a(30),r=a.n(i),m=a(399),s=(a(129),a(130),a(92),a(7),a(395)),c=a(397);function l(){return o.a.createElement(c.b,{query:"157057713",render:function(e){return o.a.createElement(d,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:s})}function p(e){var n=e.item;return n.href?o.a.createElement("li",{key:n.name},o.a.createElement(c.a,{to:n.href},n.name)):o.a.createElement("li",{key:n.name},n.name," (future)")}function d(e){var n=e.items,a=e.isSublist,t=void 0!==a&&a;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},t&&o.a.createElement(p,{item:e}),!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(d,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},t&&o.a.createElement(p,{item:e}),!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):o.a.createElement(p,{item:e,key:e.name})})):null}var u=a(398),g=a.n(u);function h(e){var n=e.location,a=g.a.sections.find(function(e){return n.pathname.includes(e.href)});return a?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(d,{items:a.items}))):null}function f(e){var n=e.children,a=e.location;return o.a.createElement(m.a,{location:a},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:a}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}a.d(n,"a",function(){return f}),f.propTypes={children:r.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-forms-form-tutorial-intermediate-mdx-7e5b7f636cf1eb8efbae.js.map