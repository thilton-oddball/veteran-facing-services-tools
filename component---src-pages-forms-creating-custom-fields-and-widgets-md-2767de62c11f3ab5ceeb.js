(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{329:function(e,n,a){"use strict";a.r(n),a.d(n,"default",function(){return i}),a.d(n,"_frontmatter",function(){return c});a(11),a(9),a(6),a(19),a(10);var t=a(2),o=a.n(t),r=a(3),m=a(396);var s={},i=function(e){var n,a;function t(n){var a;return(a=e.call(this,n)||this).layout=m.a,a}return a=e,(n=t).prototype=Object.create(a.prototype),n.prototype.constructor=n,n.__proto__=a,t.prototype.render=function(){var e=this.props,n=e.components,a=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},s,a),components:n},o.a.createElement("h1",{id:"creating-custom-fields-and-widgets"},"Creating custom fields and widgets"),o.a.createElement(r.MDXTag,{name:"p",components:n},"You can customize the base library to satisfy the unique requirements of your particular form."),o.a.createElement("h2",{id:"in-this-guide"},"In this guide"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#how-vafs-uses-rjsf"}},"How the VAFS uses RJSF")),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#customizing-fields-and-widgets-from-rjsf"}},"Customizing fields, widgets, and events from RJSF")),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#supporting-multi-page-forms"}},"Supporting multi-page forms"))),o.a.createElement("h2",{id:"how-vafs-uses-rjsf"},"How VAFS uses RJSF"),o.a.createElement(r.MDXTag,{name:"p",components:n},"The VAFS code uses react-jsonschema-form, or RJSF, to render form fields, but it builds a scaffolding on top of it to support multi-page forms and common form patterns. Additionally, VAFS uses RJSF to create a form configuration spec that allows developers to specify the structure of a multi-page form."),o.a.createElement("h3",{id:"customizing-fields-widgets-and-events-from-rjsf"},"Customizing fields, widgets, and events from RJSF"),o.a.createElement(r.MDXTag,{name:"p",components:n},"RJSF passes all field and widget components to ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"SchemaField")," (and most other components) as a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"registry")," property. To override fields and widgets in the registry, pass components of the same name into the library's main ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Form")," component. The VAFS uses custom versions of these components:"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"ObjectField")),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"ArrayField")),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"FieldTemplate")),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"/forms/available-widgets.md#textwidget"}},"TextWidget")),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"/forms/available-widgets.md#selectwidget"}},"SelectWidget")),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"/forms/available-widgets.md#emailwidget"}},"EmailWidget")),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"/forms/available-widgets.md#checkboxwidget"}},"CheckboxWidget")),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"/forms/available-widgets.md#radiowidget"}},"RadioWidget")),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"TextareaWidget"))),o.a.createElement(r.MDXTag,{name:"p",components:n},"The VAFS uses these custom fields and widgets:"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"/forms/available-widgets.md#yesnowidget"}},"YesNoWidget")),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"/forms/available-widgets.md#datewidget"}},"DateWidget")),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"/forms/available-widgets.md#ssnwidget"}},"SSNWidget")),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"/forms/available-widgets.md#phonenumberwidget"}},"PhoneNumberWidget"))),o.a.createElement(r.MDXTag,{name:"p",components:n},"Writing custom widgets is similar to writing React components: A value is passed in, and an ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"onChange")," hook is provided for changing data. Other properties like the schemas and field ID are also provided."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Custom fields receive all properties listed previously for field components in RJSF."),o.a.createElement(r.MDXTag,{name:"p",components:n},"In addition to customizing fields and widgets, the VAFS code hooks into a number of events provided by ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Form")," to support our form patterns, found in the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"FormPage")," component. These events are:"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"validate"),": This event is called when validation occurs. We call our custom validation, which reads uiSchema for custom validation hooks that have been included for form fields outside of what JSON Schema provides."),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"transformErrors"),": This event is provided when the VAFS receives the list of JSON Schema validation errors and can return a transformed list. It replaces the messages with a set of default messages, as well as any messages provided for specific fields in uiSchema. It also moves the errors for required fields from the object level to the field level. Because JSON Schema specifies required fields with a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"required")," array on an object field schema, any errors about missing data are associated with that object and moved so they're associated with the missing field and rendered with that field on the form."),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"onError"),": This event is called if a user tries to submit a form with a validation error. The VAFS sets a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"submitted")," flag in ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"formContext"),", which is an object passed to all fields and components in the RJSF form. The ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"FieldTemplate")," component uses ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"formContext")," to display all error messages to the user."),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"onSubmit"),": This event is called when a user submits a form with no validation errors. When this happens, the VAFS code looks for the next page in the multi-page form and navigates to it."),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"onChange"),": This event is called when a user changes data in the form. The VAFS fires a Redux action and updates the store with the new data. The reducer code does several recalculations:",o.a.createElement(r.MDXTag,{name:"ul",components:n,parentName:"li"},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"li"},"Recalculate the required fields for the schema:")," You can specify functions in uiSchema that set fields as optional or required based on form data. This runs them and updates the schema."),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"li"},"Recalculate which schema fields are hidden and remove that data:")," In uiSchema, you can specify fields that are conditionally hidden based on user data. To avoid validation errors from data a user can't see, the VAFS updates the schema to add a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"ui:hidden")," property and remove any user data for those fields."),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"li"},"Recalcuate general schema updates:")," Because you can make arbitrary changes to the schema based on form data, the VAFS must also make those changes, for example, removing options in an ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"enum")," array when a user has entered certain data.")))),o.a.createElement("h3",{id:"supporting-multi-page-forms"},"Supporting multi-page forms"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Large forms are organized into ",o.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"chapters")," and ",o.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"pages"),". A chapter is a collection of pages, each rendered as a single RJSF form with a schema and ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"uiSchema")," field component. The chapter and page organization is described in a form config file that the VAFS uses to generate a list of routes. A user can move through the list of pages until they reach the review page."),o.a.createElement(r.MDXTag,{name:"p",components:n},"The review page also takes the config file and renders each chapter in an accordion panel. Inside a panel, the VAFS uses RJSF to render each page in a read-only view. This view uses simplified widgets and a different ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"FieldTemplate")," component to render each form field in a definition list. The read-only view uses the RJSF ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Form")," component with no input elements, rendering instead with text. When a user on the review page clicks Edit for a form page, the normal widgets are used and a normal form is rendered."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Each array item on a review page is rendered as read-only, and individual items can be edited independently. To accomplish this, the review ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ArrayField")," component renders each item in the array as its own RJSF ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Form"),". In addition, array fields are taken from the page's read-only view and rendered separately."))},t}(o.a.Component),c={}},395:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/promobanner/",context:{source:"component",name:"PromoBanner"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}}]}}}},396:function(e,n,a){"use strict";var t=a(2),o=a.n(t),r=a(30),m=a.n(r),s=a(399),i=(a(129),a(130),a(92),a(7),a(395)),c=a(397);function l(){return o.a.createElement(c.b,{query:"157057713",render:function(e){return o.a.createElement(d,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:i})}function p(e){var n=e.item;return n.href?o.a.createElement("li",{key:n.name},o.a.createElement(c.a,{to:n.href},n.name)):o.a.createElement("li",{key:n.name},n.name," (future)")}function d(e){var n=e.items,a=e.isSublist,t=void 0!==a&&a;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},t&&o.a.createElement(p,{item:e}),!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(d,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},t&&o.a.createElement(p,{item:e}),!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):o.a.createElement(p,{item:e,key:e.name})})):null}var u=a(398),g=a.n(u);function h(e){var n=e.location,a=g.a.sections.find(function(e){return n.pathname.includes(e.href)});return a?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(d,{items:a.items}))):null}function f(e){var n=e.children,a=e.location;return o.a.createElement(s.a,{location:a},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:a}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}a.d(n,"a",function(){return f}),f.propTypes={children:m.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-forms-creating-custom-fields-and-widgets-md-2767de62c11f3ab5ceeb.js.map