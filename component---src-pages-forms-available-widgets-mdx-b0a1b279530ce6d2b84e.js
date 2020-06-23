(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"0fdA":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return m}));n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("E5k/"),n("q1tI");var a=n("7ljp"),i=n("3dLD");var r={},o={_frontmatter:r},s=i.a;function m(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.mdx)(s,Object.assign({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("h1",{id:"available-form-widgets"},"Available form widgets"),Object(a.mdx)("p",null,"Widgets are React components that return specific form elements. Set these widgets in a config file while building your form."),Object(a.mdx)("p",null,"Some widgets are associated with particular schema types or formats. There are additional widgets available, but VAFS uses definitions they're included in, rather than just the field."),Object(a.mdx)("p",null,"Widgets from the ",Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"/veteran-facing-services-tools/forms/about-the-schema-and-uischema-objects#understanding-the-uischema-object"}),"react-jsonschema-form library")," include string mappings. Widgets created specifically for VAFS do not have mappings, and therefore must be specified by passing the component for the widget directly to the config. To include such widgets, import the widget at the top of the file:"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import CurrencyWidget from 'platform/forms-system/src/js/widgets/CurrencyWidget';\n")),Object(a.mdx)("p",null,"Then, set the ",Object(a.mdx)("inlineCode",{parentName:"p"},"ui:widget")," field to the imported widget name:"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"uiSchema: {\n  ...\n  'ui:widget': CurrencyWidget,\n  ...\n}\n")),Object(a.mdx)("p",null,"Available widgets are:"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",Object.assign({parentName:"li"},{href:"#arraycountwidget"}),"ArrayCountWidget")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",Object.assign({parentName:"li"},{href:"#checkboxwidget"}),"CheckboxWidget")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",Object.assign({parentName:"li"},{href:"#currencywidget"}),"CurrencyWidget")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",Object.assign({parentName:"li"},{href:"#datewidget"}),"DateWidget")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",Object.assign({parentName:"li"},{href:"#emailwidget"}),"EmailWidget")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",Object.assign({parentName:"li"},{href:"#phonenumberwidget"}),"PhoneNumberWidget")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",Object.assign({parentName:"li"},{href:"#radiowidget"}),"RadioWidget")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",Object.assign({parentName:"li"},{href:"#selectwidget"}),"SelectWidget")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",Object.assign({parentName:"li"},{href:"#ssnwidget"}),"SSNWidget")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",Object.assign({parentName:"li"},{href:"#textwidget"}),"TextWidget")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",Object.assign({parentName:"li"},{href:"#yesnowidget"}),"YesNoWidget"))),Object(a.mdx)("h2",{id:"arraycountwidget"},"ArrayCountWidget"),Object(a.mdx)("p",null,"Renders a ",Object(a.mdx)("inlineCode",{parentName:"p"},'<input type="number">'),' HTML element, and is used when determining how many times a group of questions should be rendered. For more information about grouping common questions, see "',Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"/veteran-facing-services-tools/forms/available-features-and-usage-guidelines#sequential-duplicate-form-groups"}),"Sequential duplicate form groups"),'."'),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("strong",{parentName:"li"},"File:")," ",Object(a.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/ArrayCountWidget.jsx"}),"ArrayCountWidget.jsx")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("strong",{parentName:"li"},"Usage:")," In the ",Object(a.mdx)("inlineCode",{parentName:"li"},"uiSchema"),", specify ",Object(a.mdx)("inlineCode",{parentName:"li"},"'ui:widget': ArrayCountWidget")," for the given field.")),Object(a.mdx)("h2",{id:"checkboxwidget"},"CheckboxWidget"),Object(a.mdx)("p",null,"Renders a single ",Object(a.mdx)("inlineCode",{parentName:"p"},'<input type="checkbox">'),' HTML element. For information about rendering multiple checkboxes together, see "',Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"/veteran-facing-services-tools/forms/available-features-and-usage-guidelines#checkbox-group"}),"Checkbox Group"),'."'),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("strong",{parentName:"li"},"File:")," ",Object(a.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/CheckboxWidget.jsx"}),"CheckboxWidget.jsx")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("strong",{parentName:"li"},"Usage:")," Usually the ",Object(a.mdx)("inlineCode",{parentName:"li"},"CheckboxWidget")," is not specified directly in the ",Object(a.mdx)("inlineCode",{parentName:"li"},"uiSchema")," because it renders by default for a schema that specifies ",Object(a.mdx)("inlineCode",{parentName:"li"},"type: 'boolean'"),".")),Object(a.mdx)("h2",{id:"currencywidget"},"CurrencyWidget"),Object(a.mdx)("p",null,"Renders a ",Object(a.mdx)("inlineCode",{parentName:"p"},"<input>")," HTML element with some additional logic to handle parsing currency inputs."),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("strong",{parentName:"li"},"File:")," ",Object(a.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/CurrencyWidget.jsx"}),"CurrencyWidget.jsx")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("strong",{parentName:"li"},"Usage:")," In the ",Object(a.mdx)("inlineCode",{parentName:"li"},"uiSchema"),", specify ",Object(a.mdx)("inlineCode",{parentName:"li"},"'ui:widget': CurrencyWidget")," for the given field.")),Object(a.mdx)("h2",{id:"datewidget"},"DateWidget"),Object(a.mdx)("p",null,"Renders three separate fields for dates, two ",Object(a.mdx)("inlineCode",{parentName:"p"},"<select>")," elements for month and day and one ",Object(a.mdx)("inlineCode",{parentName:"p"},"<input>")," element for the year."),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("strong",{parentName:"li"},"File:")," ",Object(a.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/DateWidget.jsx"}),"DateWidget.jsx")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("strong",{parentName:"li"},"Usage:")," In the ",Object(a.mdx)("inlineCode",{parentName:"li"},"uiSchema"),", specify ",Object(a.mdx)("inlineCode",{parentName:"li"},"'ui:widget': 'date'")," for the given field.")),Object(a.mdx)("h2",{id:"emailwidget"},"EmailWidget"),Object(a.mdx)("p",null,"Renders a ",Object(a.mdx)("inlineCode",{parentName:"p"},"TextWidget")," with the ",Object(a.mdx)("inlineCode",{parentName:"p"},'type: "email"')," passed to the ",Object(a.mdx)("inlineCode",{parentName:"p"},"<input>")," element."),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("strong",{parentName:"li"},"File:")," ",Object(a.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/EmailWidget.jsx"}),"EmailWidget.jsx")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("strong",{parentName:"li"},"Usage:")," In the ",Object(a.mdx)("inlineCode",{parentName:"li"},"uiSchema"),", specify ",Object(a.mdx)("inlineCode",{parentName:"li"},"'ui:widget': 'email'")," for the given field.")),Object(a.mdx)("h2",{id:"phonenumberwidget"},"PhoneNumberWidget"),Object(a.mdx)("p",null,"Renders a ",Object(a.mdx)("inlineCode",{parentName:"p"},"TextWidget")," with additional logic to strip non-numeric characters from the input before saving the input."),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("strong",{parentName:"li"},"File:")," ",Object(a.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/PhoneNumberWidget.jsx"}),"PhoneNumberWidget.jsx")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("strong",{parentName:"li"},"Usage:")," In the ",Object(a.mdx)("inlineCode",{parentName:"li"},"uiSchema"),", specify ",Object(a.mdx)("inlineCode",{parentName:"li"},"'ui:widget': PhoneNumberWidget")," for the given field.")),Object(a.mdx)("h2",{id:"radiowidget"},"RadioWidget"),Object(a.mdx)("p",null,"Renders a single radio button for each ",Object(a.mdx)("inlineCode",{parentName:"p"},"enum")," value. This overrides the default ",Object(a.mdx)("inlineCode",{parentName:"p"},"SelectWidget")," that is normally rendered where ",Object(a.mdx)("inlineCode",{parentName:"p"},"enum")," exists."),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("strong",{parentName:"li"},"File:")," ",Object(a.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/RadioWidget.jsx"}),"RadioWidget.jsx")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("strong",{parentName:"li"},"Usage:")," In the ",Object(a.mdx)("inlineCode",{parentName:"li"},"uiSchema"),", specify ",Object(a.mdx)("inlineCode",{parentName:"li"},"'ui:widget': 'radio'")," for the given field. Usually used with ",Object(a.mdx)("inlineCode",{parentName:"li"},"'ui:options': { labels: {}}")," so you can specify the label for each radio button. To see a code example, refer to ",Object(a.mdx)("a",Object.assign({parentName:"li"},{href:"/veteran-facing-services-tools/forms/available-features-and-usage-guidelines#radio-button-group"}),"radio button group in form features"),".")),Object(a.mdx)("h2",{id:"selectwidget"},"SelectWidget"),Object(a.mdx)("p",null,"Renders a ",Object(a.mdx)("inlineCode",{parentName:"p"},"<select>")," HTML element. This is the default widget for data of ",Object(a.mdx)("inlineCode",{parentName:"p"},"type: 'string'")," with an ",Object(a.mdx)("inlineCode",{parentName:"p"},"enum")," property."),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("strong",{parentName:"li"},"File:")," ",Object(a.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/SelectWidget.jsx"}),"SelectWidget.jsx")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("strong",{parentName:"li"},"Usage:")," Usually the ",Object(a.mdx)("inlineCode",{parentName:"li"},"SelectWidget")," is not specified directly in the ",Object(a.mdx)("inlineCode",{parentName:"li"},"uiSchema")," because it renders by default for a schema that specifies ",Object(a.mdx)("inlineCode",{parentName:"li"},"type: 'string'")," with an ",Object(a.mdx)("inlineCode",{parentName:"li"},"enum")," property.")),Object(a.mdx)("h2",{id:"ssnwidget"},"SSNWidget"),Object(a.mdx)("p",null,"Renders a ",Object(a.mdx)("inlineCode",{parentName:"p"},"TextWidget")," with additional logic to strip the dashes before saving the input."),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("strong",{parentName:"li"},"File:")," ",Object(a.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/SSNWidget.jsx"}),"SSNWidget.jsx")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("strong",{parentName:"li"},"Usage:")," In the ",Object(a.mdx)("inlineCode",{parentName:"li"},"uiSchema"),", specify ",Object(a.mdx)("inlineCode",{parentName:"li"},"'ui:widget': SSNWidget")," for the given field.")),Object(a.mdx)("h2",{id:"textwidget"},"TextWidget"),Object(a.mdx)("p",null,"Renders a ",Object(a.mdx)("inlineCode",{parentName:"p"},"<input>")," HTML element, and is the default widget for data of ",Object(a.mdx)("inlineCode",{parentName:"p"},"type: 'string'"),"."),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("strong",{parentName:"li"},"File:")," ",Object(a.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/TextWidget.jsx"}),"TextWidget.jsx")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("strong",{parentName:"li"},"Usage:")," Usually the ",Object(a.mdx)("inlineCode",{parentName:"li"},"TextWidget")," is not specified directly in the ",Object(a.mdx)("inlineCode",{parentName:"li"},"uiSchema")," because it renders by default for a schema that specifies ",Object(a.mdx)("inlineCode",{parentName:"li"},"type: 'string'"),".")),Object(a.mdx)("h2",{id:"yesnowidget"},"YesNoWidget"),Object(a.mdx)("p",null,'Renders two radio buttons, one with a value of "Yes" and one with a value of "No".'),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("strong",{parentName:"li"},"File:")," ",Object(a.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/YesNoWidget.jsx"}),"YesNoWidget.jsx")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("strong",{parentName:"li"},"Usage:")," In the ",Object(a.mdx)("inlineCode",{parentName:"li"},"uiSchema"),", specify ",Object(a.mdx)("inlineCode",{parentName:"li"},"'ui:widget': 'yesNo'")," for the given field.")))}m.isMDXComponent=!0},"1nT/":function(e){e.exports=JSON.parse('{"data":{"components":{"edges":[{"node":{"path":"/visual-design/components/accepttermsprompt/","context":{"source":"component","name":"AcceptTermsPrompt"}}},{"node":{"path":"/visual-design/components/additionalinfo/","context":{"source":"component","name":"AdditionalInfo"}}},{"node":{"path":"/visual-design/components/alertbox/","context":{"source":"component","name":"AlertBox"}}},{"node":{"path":"/visual-design/components/breadcrumbs/","context":{"source":"component","name":"Breadcrumbs"}}},{"node":{"path":"/visual-design/components/collapsiblepanel/","context":{"source":"component","name":"CollapsiblePanel"}}},{"node":{"path":"/visual-design/components/dropdownpanel/","context":{"source":"component","name":"DropDownPanel"}}},{"node":{"path":"/visual-design/components/errorablecheckbox/","context":{"source":"component","name":"ErrorableCheckbox"}}},{"node":{"path":"/visual-design/components/errorablecheckboxgroup/","context":{"source":"component","name":"ErrorableCheckboxGroup"}}},{"node":{"path":"/visual-design/components/errorabledate/","context":{"source":"component","name":"ErrorableDate"}}},{"node":{"path":"/visual-design/components/errorablefileinput/","context":{"source":"component","name":"ErrorableFileInput"}}},{"node":{"path":"/visual-design/components/errorablemonthyear/","context":{"source":"component","name":"ErrorableMonthYear"}}},{"node":{"path":"/visual-design/components/errorablenumberinput/","context":{"source":"component","name":"ErrorableNumberInput"}}},{"node":{"path":"/visual-design/components/errorableradiobuttons/","context":{"source":"component","name":"ErrorableRadioButtons"}}},{"node":{"path":"/visual-design/components/errorableselect/","context":{"source":"component","name":"ErrorableSelect"}}},{"node":{"path":"/visual-design/components/errorabletextarea/","context":{"source":"component","name":"ErrorableTextArea"}}},{"node":{"path":"/visual-design/components/errorabletextinput/","context":{"source":"component","name":"ErrorableTextInput"}}},{"node":{"path":"/visual-design/components/expandinggroup/","context":{"source":"component","name":"ExpandingGroup"}}},{"node":{"path":"/visual-design/components/helpmenu/","context":{"source":"component","name":"HelpMenu"}}},{"node":{"path":"/visual-design/components/iconbase/","context":{"source":"component","name":"IconBase"}}},{"node":{"path":"/visual-design/components/iconhelp/","context":{"source":"component","name":"IconHelp"}}},{"node":{"path":"/visual-design/components/iconsearch/","context":{"source":"component","name":"IconSearch"}}},{"node":{"path":"/visual-design/components/iconuser/","context":{"source":"component","name":"IconUser"}}},{"node":{"path":"/visual-design/components/loadingindicator/","context":{"source":"component","name":"LoadingIndicator"}}},{"node":{"path":"/visual-design/components/megamenu/","context":{"source":"component","name":"MegaMenu"}}},{"node":{"path":"/visual-design/components/modal/","context":{"source":"component","name":"Modal"}}},{"node":{"path":"/visual-design/components/ombinfo/","context":{"source":"component","name":"OMBInfo"}}},{"node":{"path":"/visual-design/components/pagination/","context":{"source":"component","name":"Pagination"}}},{"node":{"path":"/visual-design/components/privacyagreement/","context":{"source":"component","name":"PrivacyAgreement"}}},{"node":{"path":"/visual-design/components/progressbar/","context":{"source":"component","name":"ProgressBar"}}},{"node":{"path":"/visual-design/components/progressbutton/","context":{"source":"component","name":"ProgressButton"}}},{"node":{"path":"/visual-design/components/promobanner/","context":{"source":"component","name":"PromoBanner"}}},{"node":{"path":"/visual-design/components/searchmenu/","context":{"source":"component","name":"SearchMenu"}}},{"node":{"path":"/visual-design/components/segmentedprogressbar/","context":{"source":"component","name":"SegmentedProgressBar"}}},{"node":{"path":"/visual-design/components/sortabletable/","context":{"source":"component","name":"SortableTable"}}},{"node":{"path":"/visual-design/components/systemdownview/","context":{"source":"component","name":"SystemDownView"}}},{"node":{"path":"/visual-design/components/telephone/","context":{"source":"component","name":"Telephone"}}}]}}}')},"3dLD":function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n("q1tI"),i=n.n(a),r=n("8FPV"),o=(n("gu/5"),n("eoYm"),n("v9g0"),n("pJf4"),n("1nT/")),s=n("Wbzz");function m(){return i.a.createElement(s.StaticQuery,{query:"4277382034",render:function(e){return i.a.createElement(d,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})},data:o})}function c(e){var t=e.item;return t.href?i.a.createElement("li",{key:t.name},i.a.createElement(s.Link,{to:t.href},t.name)):i.a.createElement("li",{key:t.name},t.name," (future)")}function d(e){var t=e.items,n=e.isSublist,a=void 0!==n&&n;return t.length?i.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?i.a.createElement("li",{key:e.name},a&&i.a.createElement(c,{item:e}),!a&&i.a.createElement("h2",{className:"heading-level-4"},e.name),i.a.createElement(d,{isSublist:!0,items:e.items})):"componentList"===e.query?i.a.createElement("li",{key:e.name},a&&i.a.createElement(c,{item:e}),!a&&i.a.createElement("h2",{className:"heading-level-4"},e.name),i.a.createElement(m,null)):i.a.createElement(c,{item:e,key:e.name})}))):null}var l=n("MEl4"),p=n.n(l);function u(e){var t=e.location,n=p.a.sections.find((function(e){return t.pathname.includes(e.href)}));return n?i.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},i.a.createElement("div",{className:"site-c-sidenav"},i.a.createElement(d,{items:n.items}))):null}function b(e){var t=e.children,n=e.location;return i.a.createElement(r.a,{location:n},i.a.createElement("div",{className:"vads-l-row"},i.a.createElement(u,{location:n}),i.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t)))}}}]);
//# sourceMappingURL=component---src-pages-forms-available-widgets-mdx-b0a1b279530ce6d2b84e.js.map