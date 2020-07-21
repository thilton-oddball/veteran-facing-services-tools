(window.webpackJsonp=window.webpackJsonp||[]).push([[76,50],{"0ai4":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return s}));var a=n("zLVn"),i=(n("q1tI"),n("7ljp")),r=n("3dLD"),o={},c={_frontmatter:o},l=r.a;function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.mdx)(l,Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("h2",{id:"about-the-platform"},"About the platform"),Object(i.mdx)("p",null,"In this documentation we will discuss our platform and how it is setup, This Platform section will detail\nspecifics on how things work, site structure, architecture, tools, technologies, and any relavent\ninformation regarding the platform."),Object(i.mdx)("p",null,"The platform is made up of 4 major components."),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"MetalSmith"),Object(i.mdx)("li",{parentName:"ul"},"React/Redux"),Object(i.mdx)("li",{parentName:"ul"},"Drupal CMS"),Object(i.mdx)("li",{parentName:"ul"},"TeamSite")),Object(i.mdx)("h3",{id:"metalsmith"},"MetalSmith"),Object(i.mdx)("p",null,"MetalSmith is a static site generator made from Node.js. It is based off a plugin architecture which\nmakes it very flexible when needing to customize the build process or integrating other systems into it."),Object(i.mdx)("h3",{id:"reactredux"},"React/Redux"),Object(i.mdx)("p",null,"React is a front-end single page application library that helps you create painless interactive UIs.\nWe use React in our platform to create web components and also individual applications within the website.\nThe React applications are injected into specific pages. All applications can be found in ",Object(i.mdx)("inlineCode",{parentName:"p"},"src/applications"),".\nWe use Redux to manage our data and the state of that data."),Object(i.mdx)("h3",{id:"drupal-cms"},"Drupal CMS"),Object(i.mdx)("p",null,"Drupal content is retrieved via GraphQL and pushed into the Metalsmith pipeline with a custom plugin,\nwhere it is then transformed into static html pages using Liquid templates."),Object(i.mdx)("h3",{id:"teamsite"},"TeamSite"),Object(i.mdx)("p",null,"TeamSite is a content management system built with PERL. This is the original system VA.gov was built on. Vets.gov and VA.gov were merged and needed to be integrated to use both systems without feeling like different systems. Some webpages still live under TeamSite and will eventually get ported over into the new Platform. Some components are shared such as the the MegaMenu adn the Footer. These components are injected using a script to render on TeamSite pages."))}s.isMDXComponent=!0},"3dLD":function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var a=n("q1tI"),i=n.n(a),r=n("8FPV"),o=n("Wbzz");function c(){return i.a.createElement(o.StaticQuery,{query:"4277382034",render:function(e){return i.a.createElement(s,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})}})}function l(e){var t=e.item;return t.href?i.a.createElement("li",{key:t.name},i.a.createElement(o.Link,{to:t.href},t.name)):i.a.createElement("li",{key:t.name},t.name," (future)")}function s(e){var t=e.items,n=e.isSublist,a=void 0!==n&&n;return t.length?i.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?i.a.createElement("li",{key:e.name},a&&i.a.createElement(l,{item:e}),!a&&i.a.createElement("h2",{className:"heading-level-4"},e.name),i.a.createElement(s,{isSublist:!0,items:e.items})):"componentList"===e.query?i.a.createElement("li",{key:e.name},a&&i.a.createElement(l,{item:e}),!a&&i.a.createElement("h2",{className:"heading-level-4"},e.name),i.a.createElement(c,null)):i.a.createElement(l,{item:e,key:e.name})}))):null}var m=n("MEl4"),u=n.n(m);function d(e){var t=e.location,n=u.a.sections.find((function(e){return t.pathname.includes(e.href)}));return n?i.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},i.a.createElement("div",{className:"site-c-sidenav"},i.a.createElement(s,{items:n.items}))):null}function p(e){var t=e.componentToMatch;return i.a.createElement(o.StaticQuery,{query:"4193446859",render:function(e){return e.components.edges.map((function(e){return t===e.node.context.name.toLowerCase()?i.a.createElement(h,{item:{name:e.node.context.name}}):""}))}})}function h(e){var t=e.item,n="https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master/packages/formation-react/src/components/"+t.name+"/"+t.name+".mdx";return i.a.createElement(o.Link,{to:n},"Edit this page on GitHub")}function f(e){var t=e.pathname.split("/");return i.a.createElement(p,{componentToMatch:t[3]})}var v=function(e){var t=e.pathname.replace("/veteran-facing-services-tools","");return t.length>0&&"/"===t.charAt(t.length-1)&&(t=t.substring(0,t.length-1)),t};function g(e){var t=e.location,n="https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master/packages/documentation/src/pages"+v(t)+function(e){var t=v(e),n=u.a.sections.find((function(e){return t.includes(e.href)})),a=u.a.sections.find((function(e){return e.href===t}));if(null==a?void 0:a.indexmdx)return"/index";if((null==n?void 0:n.items)&&n.items.map((function(e){return Array.isArray(e.items)?e.items.find((function(e){return e.href===t})):null})).map((function(e){if((null==e?void 0:e.href)&&e.href===t)return!!(null==e?void 0:e.indexmdx)})).find((function(e){return e})))return"/index";return""}(t)+".mdx";return i.a.createElement(o.Link,{to:n},"Edit this page on GitHub")}function b(e){var t=e.location;return i.a.createElement("div",null,i.a.createElement("p",null,i.a.createElement("br",null),i.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",function(e){if(e.pathname.includes("components")){var t=e.pathname.replace("/veteran-facing-services-tools","");return i.a.createElement(f,{pathname:t})}return i.a.createElement(g,{location:e})}(t)))}function E(e){var t=e.children,n=e.location;return i.a.createElement(r.a,{location:n},i.a.createElement("div",{className:"vads-l-row"},i.a.createElement(d,{location:n}),i.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,i.a.createElement(b,{location:n}))))}}}]);
//# sourceMappingURL=component---src-pages-platform-index-mdx-3d66c083e44a7103d5fc.js.map