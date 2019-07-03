(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{322:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return p}),t.d(n,"_frontmatter",function(){return s});t(11),t(9),t(6),t(19),t(10);var a=t(2),o=t.n(a),r=t(3),m=t(396);var c={},p=function(e){var n,t;function a(n){var t;return(t=e.call(this,n)||this).layout=m.a,t}return t=e,(n=a).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t,a.prototype.render=function(){var e=this.props,n=e.components,t=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},c,t),components:n},o.a.createElement("h2",{id:"how-to-add-documents"},"How to Add Documents"),o.a.createElement(r.MDXTag,{name:"p",components:n},"This is the process of how you should add new pages and documents to this website."),o.a.createElement("h3",{id:"mdx-format"},"MDX Format"),o.a.createElement(r.MDXTag,{name:"p",components:n},"We will be using the .mdx format to create our documents.\nMDX is a format that lets you seamlessly use JSX in your Markdown documents.\nYou can import components, like interactive charts or notifs, and export metadata.\nThis makes writing long-form content with components a blast 🚀"),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://mdxjs.com/"}},"https://mdxjs.com/")),o.a.createElement("h3",{id:"adding-react-component-documentation"},"Adding React Component documentation"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Adding React Components documentation in Formation."),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"li"},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"Take a look at the example MDX file at formation-react/src/components/AcceptTermsPrompt/AcceptTermsPrompt.mdx.\nYou can use this as a starter"))),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"li"},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"Create a .mdx file the same name as your component in the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"strong"},"formation-react/src/components")," folder, adjacent to your component.")),o.a.createElement(r.MDXTag,{name:"pre",components:n,parentName:"li"},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"- components\n  - YourComponent.js\n  - YourComponent.mdx\n"))),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"li"},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"Add the required frontmatter at the top of the page")),o.a.createElement(r.MDXTag,{name:"pre",components:n,parentName:"li"},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"  ---\n  title: AcceptTermsPrompt\n  name: AcceptTermsPrompt\n  ---\n"))),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"li"},"**Restart the development server")),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"li"},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"If you run into any errors or your page doesn't render correctly,\ntry to delete the .cache file and restart the server again"))),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"li"},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"After you have your page setup you can add markdown and your component code."))),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"li"},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"Add descriptions to your PropTypes in your Component files")),o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"li"},"We need to convert the propType comments to jsDoc format.\nThis will not show up in the propTypes definitions on your page if you\ndon't have it in a jsDoc format."),o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"li"},"Here is an examples of how it should look:"),o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"li"},"Changed code:"),o.a.createElement(r.MDXTag,{name:"pre",components:n,parentName:"li"},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"  YourComponent.propTypes = {\n    /**\n     * content shown as the actual terms and conditions\n     */\n    user: PropTypes.object,\n    /**\n     * cancel button click handler\n     */\n    onCancel: PropTypes.func\n  };\n")),o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"li"},"It will look like this on the page."),o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"li"},o.a.createElement(r.MDXTag,{name:"img",components:n,parentName:"p",props:{src:"../../../images/proptypes.png",alt:"proptypes",title:"PropType Image"}}))),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"li"},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"Once this is all setup you can start adding your React Component and markdown to your file."))),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"li"},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"Start gatsby")),o.a.createElement(r.MDXTag,{name:"pre",components:n,parentName:"li"},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"yarn develop\n"))),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"li"},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"You should be able to see your component in the sidebar or go to the url.")),o.a.createElement(r.MDXTag,{name:"pre",components:n,parentName:"li"},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"http://localhost:8000/yourcomponentnamelowercase\n")))),o.a.createElement("h3",{id:"adding-document-pages"},"Adding Document Pages"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"li"},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"Create a .mdx file in ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"strong"},"src/pages")))),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"li"},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"Add the required frontmatter at the top of the page. You will need this if you\nwant it to display in the sidebar.")),o.a.createElement(r.MDXTag,{name:"pre",components:n,parentName:"li"},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-markdown"}},"  // Your .mdx page\n  ---\n  title: How to Add Documents\n  ---\n"))),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"li"},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"You have the option to create React Components and add them to the MDX file.\nReact components for pages should be located in src/components")))),o.a.createElement("h3",{id:"updating-the-sidebar"},"Updating the sidebar"),o.a.createElement(r.MDXTag,{name:"p",components:n},"After you've added a page, you may want to add it to the sidebar. At ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"src/sidebar.js"),", you'll find the layout for\nthe main site navigation and sidebar. You can add your page where it makes sense in the site's information architecture."),o.a.createElement(r.MDXTag,{name:"p",components:n},"There are examples in the sidebar file to follow. You'll need to add an object with ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"name")," and ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"href")," properties\nfor regular links and you can also create nested sections by leaving out ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"href")," and adding an ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"items")," array to objects."),o.a.createElement("h3",{id:"graphql-sample-reference"},"GraphQl Sample Reference"),o.a.createElement(r.MDXTag,{name:"p",components:n},"  ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://www.gatsbyjs.org/docs/graphql-reference/"}},"https://www.gatsbyjs.org/docs/graphql-reference/")),o.a.createElement("h3",{id:"github-api-graphql-explorer"},"Github API GraphQL Explorer"),o.a.createElement(r.MDXTag,{name:"p",components:n},"  ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://developer.github.com/v4/explorer/"}},"https://developer.github.com/v4/explorer/")))},a}(o.a.Component),s={}},395:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/promobanner/",context:{source:"component",name:"PromoBanner"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}}]}}}},396:function(e,n,t){"use strict";var a=t(2),o=t.n(a),r=t(30),m=t.n(r),c=t(399),p=(t(129),t(130),t(92),t(7),t(395)),s=t(397);function l(){return o.a.createElement(s.b,{query:"157057713",render:function(e){return o.a.createElement(d,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:p})}function i(e){var n=e.item;return n.href?o.a.createElement("li",{key:n.name},o.a.createElement(s.a,{to:n.href},n.name)):o.a.createElement("li",{key:n.name},n.name," (future)")}function d(e){var n=e.items,t=e.isSublist,a=void 0!==t&&t;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},a&&o.a.createElement(i,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(d,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},a&&o.a.createElement(i,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):o.a.createElement(i,{item:e,key:e.name})})):null}var u=t(398),g=t.n(u);function h(e){var n=e.location,t=g.a.sections.find(function(e){return n.pathname.includes(e.href)});return t?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(d,{items:t.items}))):null}function E(e){var n=e.children,t=e.location;return o.a.createElement(c.a,{location:t},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:t}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}t.d(n,"a",function(){return E}),E.propTypes={children:m.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-documentation-guide-doc-page-mdx-f464b0d821ebce31e512.js.map