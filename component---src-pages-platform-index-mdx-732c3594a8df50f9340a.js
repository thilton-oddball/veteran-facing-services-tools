(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{"0ai4":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return s})),t.d(n,"default",(function(){return i}));t("rzGZ"),t("Dq+y"),t("8npG"),t("Ggvi"),t("E5k/"),t("q1tI");var o=t("7ljp"),a=t("3dLD");var s={},c={_frontmatter:s},r=a.a;function i(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(o.mdx)(r,Object.assign({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("h2",{id:"about-the-platform"},"About the platform"),Object(o.mdx)("p",null,"In this documentation we will discuss our platform and how it is setup, This Platform section will detail\nspecifics on how things work, site structure, architecture, tools, technologies, and any relavent\ninformation regarding the platform."),Object(o.mdx)("p",null,"The platform is made up of 4 major components."),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"MetalSmith"),Object(o.mdx)("li",{parentName:"ul"},"React/Redux"),Object(o.mdx)("li",{parentName:"ul"},"Drupal CMS"),Object(o.mdx)("li",{parentName:"ul"},"TeamSite")),Object(o.mdx)("h3",{id:"metalsmith"},"MetalSmith"),Object(o.mdx)("p",null,"MetalSmith is a static site generator made from Node.js. It is based off a plugin architecture which\nmakes it very flexible when needing to customize the build process or integrating other systems into it."),Object(o.mdx)("h3",{id:"reactredux"},"React/Redux"),Object(o.mdx)("p",null,"React is a front-end single page application library that helps you create painless interactive UIs.\nWe use React in our platform to create web components and also individual applications within the website.\nThe React applications are injected into specific pages. All applications can be found in ",Object(o.mdx)("inlineCode",{parentName:"p"},"src/applications"),".\nWe use Redux to manage our data and the state of that data."),Object(o.mdx)("h3",{id:"drupal-cms"},"Drupal CMS"),Object(o.mdx)("p",null,"Drupal content is retrieved via GraphQL and pushed into the Metalsmith pipeline with a custom plugin,\nwhere it is then transformed into static html pages using Liquid templates."),Object(o.mdx)("h3",{id:"teamsite"},"TeamSite"),Object(o.mdx)("p",null,"TeamSite is a content management system built with PERL. This is the original system VA.gov was built on. Vets.gov and VA.gov were merged and needed to be integrated to use both systems without feeling like different systems. Some webpages still live under TeamSite and will eventually get ported over into the new Platform. Some components are shared such as the the MegaMenu adn the Footer. These components are injected using a script to render on TeamSite pages."))}i.isMDXComponent=!0},"1nT/":function(e){e.exports=JSON.parse('{"data":{"components":{"edges":[{"node":{"path":"/visual-design/components/accepttermsprompt/","context":{"source":"component","name":"AcceptTermsPrompt"}}},{"node":{"path":"/visual-design/components/additionalinfo/","context":{"source":"component","name":"AdditionalInfo"}}},{"node":{"path":"/visual-design/components/alertbox/","context":{"source":"component","name":"AlertBox"}}},{"node":{"path":"/visual-design/components/breadcrumbs/","context":{"source":"component","name":"Breadcrumbs"}}},{"node":{"path":"/visual-design/components/collapsiblepanel/","context":{"source":"component","name":"CollapsiblePanel"}}},{"node":{"path":"/visual-design/components/dropdownpanel/","context":{"source":"component","name":"DropDownPanel"}}},{"node":{"path":"/visual-design/components/errorablecheckbox/","context":{"source":"component","name":"ErrorableCheckbox"}}},{"node":{"path":"/visual-design/components/errorablecheckboxgroup/","context":{"source":"component","name":"ErrorableCheckboxGroup"}}},{"node":{"path":"/visual-design/components/errorabledate/","context":{"source":"component","name":"ErrorableDate"}}},{"node":{"path":"/visual-design/components/errorablefileinput/","context":{"source":"component","name":"ErrorableFileInput"}}},{"node":{"path":"/visual-design/components/errorablemonthyear/","context":{"source":"component","name":"ErrorableMonthYear"}}},{"node":{"path":"/visual-design/components/errorablenumberinput/","context":{"source":"component","name":"ErrorableNumberInput"}}},{"node":{"path":"/visual-design/components/errorableradiobuttons/","context":{"source":"component","name":"ErrorableRadioButtons"}}},{"node":{"path":"/visual-design/components/errorableselect/","context":{"source":"component","name":"ErrorableSelect"}}},{"node":{"path":"/visual-design/components/errorabletextarea/","context":{"source":"component","name":"ErrorableTextArea"}}},{"node":{"path":"/visual-design/components/errorabletextinput/","context":{"source":"component","name":"ErrorableTextInput"}}},{"node":{"path":"/visual-design/components/expandinggroup/","context":{"source":"component","name":"ExpandingGroup"}}},{"node":{"path":"/visual-design/components/helpmenu/","context":{"source":"component","name":"HelpMenu"}}},{"node":{"path":"/visual-design/components/iconbase/","context":{"source":"component","name":"IconBase"}}},{"node":{"path":"/visual-design/components/iconhelp/","context":{"source":"component","name":"IconHelp"}}},{"node":{"path":"/visual-design/components/iconsearch/","context":{"source":"component","name":"IconSearch"}}},{"node":{"path":"/visual-design/components/iconuser/","context":{"source":"component","name":"IconUser"}}},{"node":{"path":"/visual-design/components/loadingindicator/","context":{"source":"component","name":"LoadingIndicator"}}},{"node":{"path":"/visual-design/components/megamenu/","context":{"source":"component","name":"MegaMenu"}}},{"node":{"path":"/visual-design/components/modal/","context":{"source":"component","name":"Modal"}}},{"node":{"path":"/visual-design/components/ombinfo/","context":{"source":"component","name":"OMBInfo"}}},{"node":{"path":"/visual-design/components/pagination/","context":{"source":"component","name":"Pagination"}}},{"node":{"path":"/visual-design/components/privacyagreement/","context":{"source":"component","name":"PrivacyAgreement"}}},{"node":{"path":"/visual-design/components/progressbar/","context":{"source":"component","name":"ProgressBar"}}},{"node":{"path":"/visual-design/components/progressbutton/","context":{"source":"component","name":"ProgressButton"}}},{"node":{"path":"/visual-design/components/promobanner/","context":{"source":"component","name":"PromoBanner"}}},{"node":{"path":"/visual-design/components/searchmenu/","context":{"source":"component","name":"SearchMenu"}}},{"node":{"path":"/visual-design/components/segmentedprogressbar/","context":{"source":"component","name":"SegmentedProgressBar"}}},{"node":{"path":"/visual-design/components/sortabletable/","context":{"source":"component","name":"SortableTable"}}},{"node":{"path":"/visual-design/components/systemdownview/","context":{"source":"component","name":"SystemDownView"}}},{"node":{"path":"/visual-design/components/telephone/","context":{"source":"component","name":"Telephone"}}}]}}}')},"3dLD":function(e,n,t){"use strict";t.d(n,"a",(function(){return h}));var o=t("q1tI"),a=t.n(o),s=t("8FPV"),c=(t("gu/5"),t("eoYm"),t("v9g0"),t("pJf4"),t("1nT/")),r=t("Wbzz");function i(){return a.a.createElement(r.StaticQuery,{query:"4277382034",render:function(e){return a.a.createElement(l,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})},data:c})}function m(e){var n=e.item;return n.href?a.a.createElement("li",{key:n.name},a.a.createElement(r.Link,{to:n.href},n.name)):a.a.createElement("li",{key:n.name},n.name," (future)")}function l(e){var n=e.items,t=e.isSublist,o=void 0!==t&&t;return n.length?a.a.createElement("ul",{className:"site-c-sidenav-list"},n.map((function(e){return e.items?a.a.createElement("li",{key:e.name},o&&a.a.createElement(m,{item:e}),!o&&a.a.createElement("h2",{className:"heading-level-4"},e.name),a.a.createElement(l,{isSublist:!0,items:e.items})):"componentList"===e.query?a.a.createElement("li",{key:e.name},o&&a.a.createElement(m,{item:e}),!o&&a.a.createElement("h2",{className:"heading-level-4"},e.name),a.a.createElement(i,null)):a.a.createElement(m,{item:e,key:e.name})}))):null}var p=t("MEl4"),u=t.n(p);function d(e){var n=e.location,t=u.a.sections.find((function(e){return n.pathname.includes(e.href)}));return t?a.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},a.a.createElement("div",{className:"site-c-sidenav"},a.a.createElement(l,{items:t.items}))):null}function h(e){var n=e.children,t=e.location;return a.a.createElement(s.a,{location:t},a.a.createElement("div",{className:"vads-l-row"},a.a.createElement(d,{location:t}),a.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}}}]);
//# sourceMappingURL=component---src-pages-platform-index-mdx-732c3594a8df50f9340a.js.map