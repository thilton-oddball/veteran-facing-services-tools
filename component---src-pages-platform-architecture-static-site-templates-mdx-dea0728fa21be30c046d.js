(window.webpackJsonp=window.webpackJsonp||[]).push([[55,50],{"3dLD":function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n("q1tI"),r=n.n(a),i=n("8FPV"),c=n("Wbzz");function o(){return r.a.createElement(c.StaticQuery,{query:"4277382034",render:function(e){return r.a.createElement(m,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})}})}function l(e){var t=e.item;return t.href?r.a.createElement("li",{key:t.name},r.a.createElement(c.Link,{to:t.href},t.name)):r.a.createElement("li",{key:t.name},t.name," (future)")}function m(e){var t=e.items,n=e.isSublist,a=void 0!==n&&n;return t.length?r.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?r.a.createElement("li",{key:e.name},a&&r.a.createElement(l,{item:e}),!a&&r.a.createElement("h2",{className:"heading-level-4"},e.name),r.a.createElement(m,{isSublist:!0,items:e.items})):"componentList"===e.query?r.a.createElement("li",{key:e.name},a&&r.a.createElement(l,{item:e}),!a&&r.a.createElement("h2",{className:"heading-level-4"},e.name),r.a.createElement(o,null)):r.a.createElement(l,{item:e,key:e.name})}))):null}var s=n("MEl4"),d=n.n(s);function u(e){var t=e.location,n=d.a.sections.find((function(e){return t.pathname.includes(e.href)}));return n?r.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},r.a.createElement("div",{className:"site-c-sidenav"},r.a.createElement(m,{items:n.items}))):null}function p(e){var t=e.componentToMatch;return r.a.createElement(c.StaticQuery,{query:"4193446859",render:function(e){return e.components.edges.map((function(e){return t===e.node.context.name.toLowerCase()?r.a.createElement(f,{item:{name:e.node.context.name}}):""}))}})}function f(e){var t=e.item,n="https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master/packages/formation-react/src/components/"+t.name+"/"+t.name+".mdx";return r.a.createElement(c.Link,{to:n},"Edit this page on GitHub")}function h(e){var t=e.pathname.split("/");return r.a.createElement(p,{componentToMatch:t[3]})}var b=function(e){var t=e.pathname.replace("/veteran-facing-services-tools","");return t.length>0&&"/"===t.charAt(t.length-1)&&(t=t.substring(0,t.length-1)),t};function x(e){var t=e.location,n="https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master/packages/documentation/src/pages"+b(t)+function(e){var t=b(e),n=d.a.sections.find((function(e){return t.includes(e.href)})),a=d.a.sections.find((function(e){return e.href===t}));if(null==a?void 0:a.indexmdx)return"/index";if((null==n?void 0:n.items)&&n.items.map((function(e){return Array.isArray(e.items)?e.items.find((function(e){return e.href===t})):null})).map((function(e){if((null==e?void 0:e.href)&&e.href===t)return!!(null==e?void 0:e.indexmdx)})).find((function(e){return e})))return"/index";return""}(t)+".mdx";return r.a.createElement(c.Link,{to:n},"Edit this page on GitHub")}function v(e){var t=e.location;return r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("br",null),r.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",function(e){if(e.pathname.includes("components")){var t=e.pathname.replace("/veteran-facing-services-tools","");return r.a.createElement(h,{pathname:t})}return r.a.createElement(x,{location:e})}(t)))}function g(e){var t=e.children,n=e.location;return r.a.createElement(i.a,{location:n},r.a.createElement("div",{className:"vads-l-row"},r.a.createElement(u,{location:n}),r.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,r.a.createElement(v,{location:n}))))}},"8zTB":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return m}));var a=n("zLVn"),r=(n("q1tI"),n("7ljp")),i=n("3dLD"),c={},o={_frontmatter:c},l=i.a;function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.mdx)(l,Object.assign({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("h1",{id:"how-templates-work-for-markdown-pages"},"How templates work for Markdown pages"),Object(r.mdx)("p",null,"Templates use ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/leizongmin/tinyliquid/"}),"tinyliquid"),", a JavaScript implementation of ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://shopify.github.io/liquid/"}),"Liquid"),"."),Object(r.mdx)("p",null,'There are three "wrapper" templates currently in use for Markdown content. They\'re all in ',Object(r.mdx)("inlineCode",{parentName:"p"},"src/site/layouts"),"."),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"page-react"),": Houses our React pages."),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"page-react-sidebar"),": Houses our React pages that have a sidebar."),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"page-breadcrumbs"),": Houses our non-React content pages."),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"page-playbook"),": Houses Playbook pages."),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"home"),": Template for the home page"),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"home"),": Template for the home page without search")),Object(r.mdx)("p",null,Object(r.mdx)("inlineCode",{parentName:"p"},"page-breadcrumbs")," is a container template that loads layouts for the content between the header and the footer. Those are in ",Object(r.mdx)("inlineCode",{parentName:"p"},"content/layouts/includes/"),"."),Object(r.mdx)("p",null,"Templates are loaded based on the value of the ",Object(r.mdx)("inlineCode",{parentName:"p"},"template")," property in the ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"http://yaml.org/"}),"YAML"),"/front-page data of each content file -- the text between the ",Object(r.mdx)("inlineCode",{parentName:"p"},"---"),". Content files can be found in ",Object(r.mdx)("inlineCode",{parentName:"p"},"content/pages/"),"."),Object(r.mdx)("h2",{id:"adding-a-new-template"},"Adding a new template"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"Add a new HTML + Liquid template file to ",Object(r.mdx)("inlineCode",{parentName:"li"},"src/site/includes")),Object(r.mdx)("li",{parentName:"ul"},"Update ",Object(r.mdx)("inlineCode",{parentName:"li"},"page-breadcrumbs")," with a new case for the new layout."),Object(r.mdx)("li",{parentName:"ul"},"Update the ",Object(r.mdx)("inlineCode",{parentName:"li"},"template")," YAML property for whichever pages should load the new template.")),Object(r.mdx)("h2",{id:"content-meta-data"},"Content meta data"),Object(r.mdx)("p",null,"To date, we've used ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"http://yaml.org/"}),"YAML")," syntax in Markdown files as a way to structure data such as related links (majorlinks) and navigation cards."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-platform-architecture-static-site-templates-mdx-dea0728fa21be30c046d.js.map