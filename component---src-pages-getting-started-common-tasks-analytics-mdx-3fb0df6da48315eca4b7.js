(window.webpackJsonp=window.webpackJsonp||[]).push([[29,50],{"3dLD":function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n("q1tI"),r=n.n(a),i=n("8FPV"),c=n("Wbzz");function o(){return r.a.createElement(c.StaticQuery,{query:"4277382034",render:function(e){return r.a.createElement(s,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})}})}function l(e){var t=e.item;return t.href?r.a.createElement("li",{key:t.name},r.a.createElement(c.Link,{to:t.href},t.name)):r.a.createElement("li",{key:t.name},t.name," (future)")}function s(e){var t=e.items,n=e.isSublist,a=void 0!==n&&n;return t.length?r.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?r.a.createElement("li",{key:e.name},a&&r.a.createElement(l,{item:e}),!a&&r.a.createElement("h2",{className:"heading-level-4"},e.name),r.a.createElement(s,{isSublist:!0,items:e.items})):"componentList"===e.query?r.a.createElement("li",{key:e.name},a&&r.a.createElement(l,{item:e}),!a&&r.a.createElement("h2",{className:"heading-level-4"},e.name),r.a.createElement(o,null)):r.a.createElement(l,{item:e,key:e.name})}))):null}var m=n("MEl4"),u=n.n(m);function d(e){var t=e.location,n=u.a.sections.find((function(e){return t.pathname.includes(e.href)}));return n?r.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},r.a.createElement("div",{className:"site-c-sidenav"},r.a.createElement(s,{items:n.items}))):null}function f(e){var t=e.componentToMatch;return r.a.createElement(c.StaticQuery,{query:"4193446859",render:function(e){return e.components.edges.map((function(e){return t===e.node.context.name.toLowerCase()?r.a.createElement(p,{item:{name:e.node.context.name}}):""}))}})}function p(e){var t=e.item,n="https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master/packages/formation-react/src/components/"+t.name+"/"+t.name+".mdx";return r.a.createElement(c.Link,{to:n},"Edit this page on GitHub")}function v(e){var t=e.pathname.split("/");return r.a.createElement(f,{componentToMatch:t[3]})}var h=function(e){var t=e.pathname.replace("/veteran-facing-services-tools","");return t.length>0&&"/"===t.charAt(t.length-1)&&(t=t.substring(0,t.length-1)),t};function E(e){var t=e.location,n="https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master/packages/documentation/src/pages"+h(t)+function(e){var t=h(e),n=u.a.sections.find((function(e){return t.includes(e.href)})),a=u.a.sections.find((function(e){return e.href===t}));if(null==a?void 0:a.indexmdx)return"/index";if((null==n?void 0:n.items)&&n.items.map((function(e){return Array.isArray(e.items)?e.items.find((function(e){return e.href===t})):null})).map((function(e){if((null==e?void 0:e.href)&&e.href===t)return!!(null==e?void 0:e.indexmdx)})).find((function(e){return e})))return"/index";return""}(t)+".mdx";return r.a.createElement(c.Link,{to:n},"Edit this page on GitHub")}function b(e){var t=e.location;return r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("br",null),r.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",function(e){if(e.pathname.includes("components")){var t=e.pathname.replace("/veteran-facing-services-tools","");return r.a.createElement(v,{pathname:t})}return r.a.createElement(E,{location:e})}(t)))}function g(e){var t=e.children,n=e.location;return r.a.createElement(i.a,{location:n},r.a.createElement("div",{className:"vads-l-row"},r.a.createElement(d,{location:n}),r.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,r.a.createElement(b,{location:n}))))}},l0dI:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n("zLVn"),r=(n("q1tI"),n("7ljp")),i=n("3dLD"),c={},o={_frontmatter:c},l=i.a;function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.mdx)(l,Object.assign({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("h1",{id:"analytics"},"Analytics"),Object(r.mdx)("p",null,"When creating a new page or new feature there might be a need to add analytics to\ncapture events on page. In our code base you will find 2 files that relate to analytics."),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"/src/platform/startup/analytics-middleware.js"),Object(r.mdx)("li",{parentName:"ul"},"/src/platform/monitoring/record-event.js")),Object(r.mdx)("h2",{id:"analytics-middlewarejs"},"analytics-middleware.js"),Object(r.mdx)("p",null,"This file is a plugin for MetalSmith. This is where the google analytics is\ninitialized. Events will get pushed to a ",Object(r.mdx)("inlineCode",{parentName:"p"},"window.dataLayer")," then evaluated then\nsent to our analytics service."),Object(r.mdx)("h2",{id:"record-eventjs"},"record-event.js"),Object(r.mdx)("p",null,"This file is our utility functions for recording analytical events. You will\nwant to use these functions for recording events on your page. The ",Object(r.mdx)("inlineCode",{parentName:"p"},"recordEvent"),"\nfunction will take in an object with an event property like so."),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"recordEvent({\n  event: 'your-event-name',\n})\n")),Object(r.mdx)("p",null,"The event name is determined by your analytics team, so please make sure you\ncommunicate with them to make sure you are using the correct event."))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-getting-started-common-tasks-analytics-mdx-3fb0df6da48315eca4b7.js.map