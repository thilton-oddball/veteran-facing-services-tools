(window.webpackJsonp=window.webpackJsonp||[]).push([[81,50],{"3dLD":function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var a=n("q1tI"),i=n.n(a),s=n("8FPV"),r=n("Wbzz");function l(){return i.a.createElement(r.StaticQuery,{query:"4277382034",render:function(e){return i.a.createElement(c,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})}})}function o(e){var t=e.item;return t.href?i.a.createElement("li",{key:t.name},i.a.createElement(r.Link,{to:t.href},t.name)):i.a.createElement("li",{key:t.name},t.name," (future)")}function c(e){var t=e.items,n=e.isSublist,a=void 0!==n&&n;return t.length?i.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?i.a.createElement("li",{key:e.name},a&&i.a.createElement(o,{item:e}),!a&&i.a.createElement("h2",{className:"heading-level-4"},e.name),i.a.createElement(c,{isSublist:!0,items:e.items})):"componentList"===e.query?i.a.createElement("li",{key:e.name},a&&i.a.createElement(o,{item:e}),!a&&i.a.createElement("h2",{className:"heading-level-4"},e.name),i.a.createElement(l,null)):i.a.createElement(o,{item:e,key:e.name})}))):null}var m=n("MEl4"),d=n.n(m);function p(e){var t=e.location,n=d.a.sections.find((function(e){return t.pathname.includes(e.href)}));return n?i.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},i.a.createElement("div",{className:"site-c-sidenav"},i.a.createElement(c,{items:n.items}))):null}function u(e){var t=e.componentToMatch;return i.a.createElement(r.StaticQuery,{query:"4193446859",render:function(e){return e.components.edges.map((function(e){return t===e.node.context.name.toLowerCase()?i.a.createElement(b,{item:{name:e.node.context.name}}):""}))}})}function b(e){var t=e.item,n="https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master/packages/formation-react/src/components/"+t.name+"/"+t.name+".mdx";return i.a.createElement(r.Link,{to:n},"Edit this page on GitHub")}function h(e){var t=e.pathname.split("/");return i.a.createElement(u,{componentToMatch:t[3]})}var f=function(e){var t=e.pathname.replace("/veteran-facing-services-tools","");return t.length>0&&"/"===t.charAt(t.length-1)&&(t=t.substring(0,t.length-1)),t};function j(e){var t=e.location,n="https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master/packages/documentation/src/pages"+f(t)+function(e){var t=f(e),n=d.a.sections.find((function(e){return t.includes(e.href)})),a=d.a.sections.find((function(e){return e.href===t}));if(null==a?void 0:a.indexmdx)return"/index";if((null==n?void 0:n.items)&&n.items.map((function(e){return Array.isArray(e.items)?e.items.find((function(e){return e.href===t})):null})).map((function(e){if((null==e?void 0:e.href)&&e.href===t)return!!(null==e?void 0:e.indexmdx)})).find((function(e){return e})))return"/index";return""}(t)+".mdx";return i.a.createElement(r.Link,{to:n},"Edit this page on GitHub")}function x(e){var t=e.location;return i.a.createElement("div",null,i.a.createElement("p",null,i.a.createElement("br",null),i.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",function(e){if(e.pathname.includes("components")){var t=e.pathname.replace("/veteran-facing-services-tools","");return i.a.createElement(h,{pathname:t})}return i.a.createElement(j,{location:e})}(t)))}function O(e){var t=e.children,n=e.location;return i.a.createElement(s.a,{location:n},i.a.createElement("div",{className:"vads-l-row"},i.a.createElement(p,{location:n}),i.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,i.a.createElement(x,{location:n}))))}},zjn4:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return c}));var a=n("zLVn"),i=(n("q1tI"),n("7ljp")),s=n("3dLD"),r={},l={_frontmatter:r},o=s.a;function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.mdx)(o,Object.assign({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("h1",{id:"css-general-info"},"CSS General Info"),Object(i.mdx)("h2",{id:"background"},"Background"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"Written in ",Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"http://sass-lang.com/"}),"Sass")," using the ",Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"http://sass-lang.com/documentation/file.SASS_REFERENCE.html"}),"SCSS")," syntax",Object(i.mdx)("blockquote",{parentName:"li"},Object(i.mdx)("p",{parentName:"blockquote"},"There are two syntaxes available for Sass. The first, known as SCSS (Sassy CSS) and used throughout this reference, is an extension of the syntax of CSS. This means that every valid CSS stylesheet is a valid SCSS file with the same meaning. In addition, SCSS understands most CSS hacks and vendor-specific syntax, such as IE's old filter syntax. This syntax is enhanced with the Sass features described below. Files using this syntax have the .scss extension."))),Object(i.mdx)("li",{parentName:"ul"},"Files resides in ",Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/site-wide/sass"}),"src/platform/site-wide/sass")),Object(i.mdx)("li",{parentName:"ul"},"Frameworks and libraries include:",Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://designsystem.digital.gov/"}),"U.S. Web Design System (USWDS)"),Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/uswds/uswds"}),"GitHub Repo")))),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://foundation.zurb.com/sites/docs/v/5.5.3/"}),"Foundation"),Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},"Included only partially, for grid and responsive utilities"),Object(i.mdx)("li",{parentName:"ul"},"Using Foundation classes should be avoided as we plan to remove it eventually."))),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"http://fontawesome.io/"}),"Font Awesome")))),Object(i.mdx)("li",{parentName:"ul"},"Compiled to CSS using Webpack")),Object(i.mdx)("h2",{id:"directory-structure"},"Directory structure"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"root/"),Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},"Site-wide style is defined in ",Object(i.mdx)("inlineCode",{parentName:"li"},"style.scss"),Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},"Includes global imports, such as our frameworks and libraries"))),Object(i.mdx)("li",{parentName:"ul"},"Temporary style lives in ",Object(i.mdx)("inlineCode",{parentName:"li"},"_shame.scss")),Object(i.mdx)("li",{parentName:"ul"},"Other files at the root-level are considered page-specific"),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"base/"),Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},"Contains site-wide styles and overrides that will be imported into ",Object(i.mdx)("inlineCode",{parentName:"li"},"style.scss"),Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"_b-variables.scss")," - site-wide colors and units, many of which are from USWDS."),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"_va.scss")," - Site-wide style declarations for global components/elements"),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"_b-breakpoints.scss")," - This is used to reconcile naming conflicts and differing responsive breakpoints between USWDS and Foundation."))))),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"modules/"),Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},"Contains site-wide styles for individual components that are generally reusable across the website."))),Object(i.mdx)("li",{parentName:"ul"},"Other folders",Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},"Generally used only for specific applications/pages of the website that are organized in a directory rather than a single file.")))))),Object(i.mdx)("h1",{id:"webpackcompilation"},"Webpack/Compilation"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"Sass is configured and compiled into CSS via Webpack",Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},"Configuration at ",Object(i.mdx)("inlineCode",{parentName:"li"},"config/webpack.config.js")))),Object(i.mdx)("li",{parentName:"ul"},"Website is broken into a series of entry files, one of which is the site-wide file, ",Object(i.mdx)("inlineCode",{parentName:"li"},"style.scss"),", while the rest are entry points for applications defined as ",Object(i.mdx)("inlineCode",{parentName:"li"},"JSX")," files."),Object(i.mdx)("li",{parentName:"ul"},"Site-wide style is compiled into ",Object(i.mdx)("inlineCode",{parentName:"li"},"/generated/style.css"),", which is linked to in the header of the website and therefore available on all pages."),Object(i.mdx)("li",{parentName:"ul"},"An import statement within a JavaScript file is used to include style for a specific application. You should also define your application's entry point in the ",Object(i.mdx)("inlineCode",{parentName:"li"},"entryPoint")," map of the Webpack configuration, so that your application's code and style are not included in every page. The key you use to define your application's entry point in that map will also be used as the file name for the generated JavaScript as well as CSS. Files in the content directory can then define an ",Object(i.mdx)("inlineCode",{parentName:"li"},"entryname")," property to link to those files.")),Object(i.mdx)("h2",{id:"example-application"},"Example Application"),Object(i.mdx)("h5",{id:"configwebpackconfigjs"},"config/webpack.config.js"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"const entryFiles = {\n  // ...\n  'my-application': './src/applications/my-application/entry.jsx'\n  // ...\n")),Object(i.mdx)("h5",{id:"contentsomewheresome-applicationmd"},"content/somewhere/some-application.md"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-html"}),'---\ntitle: My Application\nlayout: page-react.html\nentryname: my-application\n---\n<p> Some content</p>\n<div id="react-entry"></div>\n')),Object(i.mdx)("h5",{id:"srcapplicationsmy-applicationentryjsx"},"src/applications/my-application/entry.jsx"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"// Our Webpack configuration will use the file extension to determine how to handle that import, which in our case is to compile it into a CSS file.\nimport '../../sass/my-application.scss';\n")),Object(i.mdx)("h2",{id:"static-assets"},"Static Assets"),Object(i.mdx)("p",null,"The ",Object(i.mdx)("inlineCode",{parentName:"p"},"root/assets/")," directory is used for storing images, fonts, and other files you may want to have reside outside of the Webpack build system. During build time, the contents of that directory will be moved as-is to the build output, so ",Object(i.mdx)("inlineCode",{parentName:"p"},"root/assets/js/something.js")," will be moved to ",Object(i.mdx)("inlineCode",{parentName:"p"},"root/build/development/js/something.js"),", which means it can be linked to in the website with ",Object(i.mdx)("inlineCode",{parentName:"p"},"/js/something.js"),"."),Object(i.mdx)("h1",{id:"roadmap-ahead"},"Roadmap Ahead"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"Keep up-to-date with USWDS",Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://designsystem.digital.gov/whats-new/"}),"What's New")))),Object(i.mdx)("li",{parentName:"ul"},"Foundation needs to go entirely. We should opt for the USWDS grid system or Flexbox instead."),Object(i.mdx)("li",{parentName:"ul"},"Reduce the shame file")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-platform-site-structure-styling-overview-mdx-dda23bfa9cd98b0cc309.js.map