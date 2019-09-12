(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{349:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return i}),t.d(a,"_frontmatter",function(){return l});t(8),t(7),t(4),t(9),t(10);var n=t(1),o=t.n(n),r=t(2),s=t(334);var m={},i=function(e){var a,t;function n(a){var t;return(t=e.call(this,a)||this).layout=s.a,t}return t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,n.prototype.render=function(){var e=this.props,a=e.components,t=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},m,t),components:a},o.a.createElement("h1",{id:"basic-tutorial"},"Basic tutorial"),o.a.createElement(r.MDXTag,{name:"p",components:a},"In this doc, we'll walk through creating a new form and making some simple changes."),o.a.createElement(r.MDXTag,{name:"p",components:a},"Prerequisites:"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"VA.gov ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"/veteran-facing-services-tools/getting-started"}},"running locally")),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"/veteran-facing-services-tools/platform/generator"}},"VA.gov Yeoman generator")," installed locally (first step in linked page)")),o.a.createElement(r.MDXTag,{name:"p",components:a},"If you both of those steps completed, you're ready to get started."),o.a.createElement("h2",{id:"create-new-form-application-with-yeoman-generator"},"Create new form application with Yeoman generator"),o.a.createElement(r.MDXTag,{name:"p",components:a},"To begin, run the generator from the root of your local vets-website repository:"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-bash"}},"yo @department-of-veterans-affairs/vets-website\n")),o.a.createElement(r.MDXTag,{name:"p",components:a},"This tutorial uses the following answers to the questions asked by the generator:"),o.a.createElement(r.MDXTag,{name:"table",components:a},o.a.createElement(r.MDXTag,{name:"thead",components:a,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"thead"},o.a.createElement(r.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Question"),o.a.createElement(r.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Answer"))),o.a.createElement(r.MDXTag,{name:"tbody",components:a,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"What's the name of your application?"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"My new form")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"What folder in ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"src/applications/")," should your app live in?"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"new-form")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"What should be the name of your app's entry bundle?"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"newForm")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"What's the root url for this app?"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"/new-form")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Is this a form app?"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Y")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"What's your form number?"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"XX-230")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"What's the Google Analytics event prefix you want to use?"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"new-form-")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"What's the respondent burden of this form in minutes?"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"30")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"What's the OMB control number for this form?"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"XX3344")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"What's the OMB expiration date (in M/D/YYYY format) for this form?"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"5/31/2018")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"What's the benefit description for this form?"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"new form benefits")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Which form template would you like to start with?"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"BLANK: A form without any fields")))),o.a.createElement(r.MDXTag,{name:"p",components:a},"After answering the questions, the generator will create several source files for a new form application in ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"/src/applications/new-form"),"."),o.a.createElement("h2",{id:"open-the-new-form-application"},"Open the new form application"),o.a.createElement(r.MDXTag,{name:"p",components:a},"Next you'll need to start the site up locally (restart this task if it is already running):"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-bash"}},"yarn watch\n")),o.a.createElement(r.MDXTag,{name:"p",components:a},"Then navigate to ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"http://localhost:3001/new-form"}},"http://localhost:3001/new-form"),"."),o.a.createElement(r.MDXTag,{name:"p",components:a},"You should see something like this:"),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"816px"}},o.a.createElement("a",{className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/627b2f096a0dfa6590c45a87621b3406/ac127/initial-form.png",style:{display:"block"},target:"_blank",rel:"noopener"},o.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"94.36274509803923%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),o.a.createElement("img",{className:"gatsby-resp-image-image",alt:"initial form",title:"initial form",src:"/veteran-facing-services-tools/static/627b2f096a0dfa6590c45a87621b3406/ac127/initial-form.png",srcSet:"/veteran-facing-services-tools/static/627b2f096a0dfa6590c45a87621b3406/f4a45/initial-form.png 259w,\n/veteran-facing-services-tools/static/627b2f096a0dfa6590c45a87621b3406/ef0f6/initial-form.png 518w,\n/veteran-facing-services-tools/static/627b2f096a0dfa6590c45a87621b3406/ac127/initial-form.png 816w",sizes:"(max-width: 816px) 100vw, 816px",loading:"lazy"})))),o.a.createElement("h2",{id:"update-your-form"},"Update your form"),o.a.createElement(r.MDXTag,{name:"p",components:a},"Now that you're up and running, we can add a new page and field to our form. If you open up ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"src/applications/new-form/config.js"),", you should see a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"formConfig")," variable:"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},"const formConfig = {\n  urlPrefix: '/',\n  submitUrl: '/v0/api',\n  trackingPrefix: 'new-form-',\n  introduction: IntroductionPage,\n  confirmation: ConfirmationPage,\n  formId: 'XX-230',\n  version: 0,\n  prefillEnabled: true,\n  savedFormMessages: {\n    notFound: 'Please start over to apply for new form benefits.',\n    noAuth: 'Please sign in again to continue your application for new form benefits.'\n  },\n  title: 'My new form',\n  defaultDefinitions: {\n  },\n  chapters: {\n    chapter1: {\n      title: 'Chapter 1',\n      pages: {\n        page1: {\n          path: 'first-page',\n          title: 'First Page',\n          uiSchema: {\n          },\n          schema: {\n            type: 'object',\n            properties: {\n            }\n          }\n        }\n      }\n    }\n  }\n};\n")),o.a.createElement(r.MDXTag,{name:"p",components:a},"There's a lot of information already there, and you can check out the ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/veteran-facing-services-tools/forms/docs/spec"}},"form config specification")," to see what each property means. For now, we're going to look at the content of the form, which lives in ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"chapters"),"."),o.a.createElement(r.MDXTag,{name:"p",components:a},"At the most basic level, our forms consist of: widgets, fields, pages, and chapters."),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"Widgets")," are the basic form controls, things like ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"<input/>")," and ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"<select/>")," elements."),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"Fields")," are the next level up and contain a widget and a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"<label/>"),", plus some extra optional description information."),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"We then have ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"pages"),", which are collections of fields."),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"Chapters")," are collections of pages.")),o.a.createElement(r.MDXTag,{name:"p",components:a},"We can see in the config that there's already one chapter, with one page inside it, called ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"page1"),". In the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"page1")," object there are a few pieces of information, which we can mostly ignore for now. The important properties for us right now are ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"uiSchema")," and ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"schema"),". ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"schema")," is the initial structure of our page, in the form of a ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://spacetelescope.github.io/understanding-json-schema/"}},"JSON Schema"),". This describes the type of data that will result from a user filling in our form. It's also used by the form library to determine what fields and widgets to display in the application, except when overridden by ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"uiSchema"),". ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"uiSchema")," is an object that has extra, user interface-focused information to help render the form."),o.a.createElement(r.MDXTag,{name:"p",components:a},"Let's add a property to ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"schema"),":"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      myField: {\n        type: 'string'\n      }\n    }\n  }\n}\n")),o.a.createElement(r.MDXTag,{name:"p",components:a},"Now if you go to ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"http://localhost:3001/new-form/first-page"}},"http://localhost:3001/new-form/first-page")," you should see this:"),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"674px"}},o.a.createElement("a",{className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/65b5f11ebcfadc7831092f6c2aa79637/61857/first-field.png",style:{display:"block"},target:"_blank",rel:"noopener"},o.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.34124629080118%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),o.a.createElement("img",{className:"gatsby-resp-image-image",alt:"first field",title:"first field",src:"/veteran-facing-services-tools/static/65b5f11ebcfadc7831092f6c2aa79637/61857/first-field.png",srcSet:"/veteran-facing-services-tools/static/65b5f11ebcfadc7831092f6c2aa79637/f4a45/first-field.png 259w,\n/veteran-facing-services-tools/static/65b5f11ebcfadc7831092f6c2aa79637/ef0f6/first-field.png 518w,\n/veteran-facing-services-tools/static/65b5f11ebcfadc7831092f6c2aa79637/61857/first-field.png 674w",sizes:"(max-width: 674px) 100vw, 674px",loading:"lazy"})))),o.a.createElement(r.MDXTag,{name:"p",components:a},"That's not the most exciting field, but it's a field! We can add a title to it by adding to ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"uiSchema"),":"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    myField: {\n      'ui:title': 'My field label'\n    }\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      myField: {\n        type: 'string'\n      }\n    }\n  }\n}\n")),o.a.createElement(r.MDXTag,{name:"p",components:a},"That makes it look a little more presentable:"),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"726px"}},o.a.createElement("a",{className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/8110d69efa83f373f2423126a7269553/8d582/field-with-label.png",style:{display:"block"},target:"_blank",rel:"noopener"},o.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"45.3168044077135%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),o.a.createElement("img",{className:"gatsby-resp-image-image",alt:"field with label",title:"field with label",src:"/veteran-facing-services-tools/static/8110d69efa83f373f2423126a7269553/8d582/field-with-label.png",srcSet:"/veteran-facing-services-tools/static/8110d69efa83f373f2423126a7269553/f4a45/field-with-label.png 259w,\n/veteran-facing-services-tools/static/8110d69efa83f373f2423126a7269553/ef0f6/field-with-label.png 518w,\n/veteran-facing-services-tools/static/8110d69efa83f373f2423126a7269553/8d582/field-with-label.png 726w",sizes:"(max-width: 726px) 100vw, 726px",loading:"lazy"})))),o.a.createElement(r.MDXTag,{name:"p",components:a},"Note that ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"uiSchema")," doesn't follow exactly the same structure as ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"schema"),": you don't need the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"properties")," object. This is because ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"uiSchema")," treats everything without a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"ui:")," prefix as a field name, with one exception for array fields."),o.a.createElement(r.MDXTag,{name:"p",components:a},"Changing the the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"type")," property in your field will change the data accepted and also the way it displays on the form. You can change it to be ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"boolean")," and get a checkbox and ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"number")," to get a number input. If you want a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"select")," box, you use JSON Schema's ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"enum")," property:"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    myField: {\n      'ui:title': 'My field label'\n    }\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      myField: {\n        type: 'string',\n        'enum': [\n          'First option',\n          'Second option'\n        ]\n      }\n    }\n  }\n}\n")),o.a.createElement(r.MDXTag,{name:"p",components:a},"That will get you a select box with options:"),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"692px"}},o.a.createElement("a",{className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/dbf48af7f1578ec6af86a6dfb0f4389d/cbf4c/select-field.png",style:{display:"block"},target:"_blank",rel:"noopener"},o.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"48.55491329479769%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),o.a.createElement("img",{className:"gatsby-resp-image-image",alt:"select field",title:"select field",src:"/veteran-facing-services-tools/static/dbf48af7f1578ec6af86a6dfb0f4389d/cbf4c/select-field.png",srcSet:"/veteran-facing-services-tools/static/dbf48af7f1578ec6af86a6dfb0f4389d/f4a45/select-field.png 259w,\n/veteran-facing-services-tools/static/dbf48af7f1578ec6af86a6dfb0f4389d/ef0f6/select-field.png 518w,\n/veteran-facing-services-tools/static/dbf48af7f1578ec6af86a6dfb0f4389d/cbf4c/select-field.png 692w",sizes:"(max-width: 692px) 100vw, 692px",loading:"lazy"})))),o.a.createElement(r.MDXTag,{name:"p",components:a},"Some types of data might have different valid ways of asking the user for input. For example, a field that uses ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"enum")," could also use radio buttons. You can change that with ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"ui:widget"),":"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    myField: {\n      'ui:title': 'My field label',\n      'ui:widget': 'radio'\n    }\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      myField: {\n        type: 'string',\n        'enum': [\n          'First option',\n          'Second option'\n        ]\n      }\n    }\n  }\n}\n")),o.a.createElement(r.MDXTag,{name:"p",components:a},"Now the form offers two radio buttons to choose from:"),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"688px"}},o.a.createElement("a",{className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/eca115081f915c328f66dd7d97edb9c3/4f3bc/radio-buttons.png",style:{display:"block"},target:"_blank",rel:"noopener"},o.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.48837209302325%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),o.a.createElement("img",{className:"gatsby-resp-image-image",alt:"radio buttons",title:"radio buttons",src:"/veteran-facing-services-tools/static/eca115081f915c328f66dd7d97edb9c3/4f3bc/radio-buttons.png",srcSet:"/veteran-facing-services-tools/static/eca115081f915c328f66dd7d97edb9c3/f4a45/radio-buttons.png 259w,\n/veteran-facing-services-tools/static/eca115081f915c328f66dd7d97edb9c3/ef0f6/radio-buttons.png 518w,\n/veteran-facing-services-tools/static/eca115081f915c328f66dd7d97edb9c3/4f3bc/radio-buttons.png 688w",sizes:"(max-width: 688px) 100vw, 688px",loading:"lazy"})))),o.a.createElement(r.MDXTag,{name:"p",components:a},"You can also mark fields as required, which will prevent you from moving to the next page without filling them out:"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    myField: {\n      'ui:title': 'My field label',\n      'ui:widget': 'radio'\n    }\n  },\n  schema: {\n    type: 'object',\n    required: ['myField'],\n    properties: {\n      myField: {\n        type: 'string',\n        'enum': [\n          'First option',\n          'Second option'\n        ]\n      }\n    }\n  }\n}\n")),o.a.createElement(r.MDXTag,{name:"p",components:a},"If you do fill in the required information and click Continue, you'll end up on the review page. The review page for our forms is generated based on your chapters and pages and provides a quick way to review the data that you've entered:"),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"695px"}},o.a.createElement("a",{className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/45223130f8b3010e7fd768288ea3799f/e6592/review.png",style:{display:"block"},target:"_blank",rel:"noopener"},o.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"81.43884892086331%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),o.a.createElement("img",{className:"gatsby-resp-image-image",alt:"review",title:"review",src:"/veteran-facing-services-tools/static/45223130f8b3010e7fd768288ea3799f/e6592/review.png",srcSet:"/veteran-facing-services-tools/static/45223130f8b3010e7fd768288ea3799f/f4a45/review.png 259w,\n/veteran-facing-services-tools/static/45223130f8b3010e7fd768288ea3799f/ef0f6/review.png 518w,\n/veteran-facing-services-tools/static/45223130f8b3010e7fd768288ea3799f/e6592/review.png 695w",sizes:"(max-width: 695px) 100vw, 695px",loading:"lazy"})))),o.a.createElement(r.MDXTag,{name:"p",components:a},"Note that if you refresh in the middle of the form, your data will be lost and the review page won't have any content to edit."),o.a.createElement(r.MDXTag,{name:"p",components:a},"Once you've reviewed your form, you have to click the checkbox to agree to the privacy policy and then you can submit! For now, though, that Submit button will fail because there's no api to submit the data to."),o.a.createElement(r.MDXTag,{name:"p",components:a},"That's it! Continue on in our documentation to learn about building more complex forms and the whole process for building and submitting a new form."),o.a.createElement(r.MDXTag,{name:"p",components:a},"Next: ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"./form-tutorial-intermediate"}},"Intermediate tutorial")))},n}(o.a.Component),l={}}}]);
//# sourceMappingURL=component---src-pages-forms-form-tutorial-basic-mdx-df8ad508be21d73232a7.js.map