(window.webpackJsonp=window.webpackJsonp||[]).push([[61,50],{"3dLD":function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var a=n("q1tI"),r=n.n(a),i=n("8FPV"),s=n("Wbzz");function o(){return r.a.createElement(s.StaticQuery,{query:"4277382034",render:function(e){return r.a.createElement(l,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})}})}function c(e){var t=e.item;return t.href?r.a.createElement("li",{key:t.name},r.a.createElement(s.Link,{to:t.href},t.name)):r.a.createElement("li",{key:t.name},t.name," (future)")}function l(e){var t=e.items,n=e.isSublist,a=void 0!==n&&n;return t.length?r.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?r.a.createElement("li",{key:e.name},a&&r.a.createElement(c,{item:e}),!a&&r.a.createElement("h2",{className:"heading-level-4"},e.name),r.a.createElement(l,{isSublist:!0,items:e.items})):"componentList"===e.query?r.a.createElement("li",{key:e.name},a&&r.a.createElement(c,{item:e}),!a&&r.a.createElement("h2",{className:"heading-level-4"},e.name),r.a.createElement(o,null)):r.a.createElement(c,{item:e,key:e.name})}))):null}var m=n("MEl4"),d=n.n(m);function u(e){var t=e.location,n=d.a.sections.find((function(e){return t.pathname.includes(e.href)}));return n?r.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},r.a.createElement("div",{className:"site-c-sidenav"},r.a.createElement(l,{items:n.items}))):null}function p(e){var t=e.componentToMatch;return r.a.createElement(s.StaticQuery,{query:"4193446859",render:function(e){return e.components.edges.map((function(e){return t===e.node.context.name.toLowerCase()?r.a.createElement(h,{item:{name:e.node.context.name}}):""}))}})}function h(e){var t=e.item,n="https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master/packages/formation-react/src/components/"+t.name+"/"+t.name+".mdx";return r.a.createElement(s.Link,{to:n},"Edit this page on GitHub")}function f(e){var t=e.pathname.split("/");return r.a.createElement(p,{componentToMatch:t[3]})}var b=function(e){var t=e.pathname.replace("/veteran-facing-services-tools","");return t.length>0&&"/"===t.charAt(t.length-1)&&(t=t.substring(0,t.length-1)),t};function g(e){var t=e.location,n="https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master/packages/documentation/src/pages"+b(t)+function(e){var t=b(e),n=d.a.sections.find((function(e){return t.includes(e.href)})),a=d.a.sections.find((function(e){return e.href===t}));if(null==a?void 0:a.indexmdx)return"/index";if((null==n?void 0:n.items)&&n.items.map((function(e){return Array.isArray(e.items)?e.items.find((function(e){return e.href===t})):null})).map((function(e){if((null==e?void 0:e.href)&&e.href===t)return!!(null==e?void 0:e.indexmdx)})).find((function(e){return e})))return"/index";return""}(t)+".mdx";return r.a.createElement(s.Link,{to:n},"Edit this page on GitHub")}function v(e){var t=e.location;return r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("br",null),r.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",function(e){if(e.pathname.includes("components")){var t=e.pathname.replace("/veteran-facing-services-tools","");return r.a.createElement(f,{pathname:t})}return r.a.createElement(g,{location:e})}(t)))}function j(e){var t=e.children,n=e.location;return r.a.createElement(i.a,{location:n},r.a.createElement("div",{className:"vads-l-row"},r.a.createElement(u,{location:n}),r.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,r.a.createElement(v,{location:n}))))}},JCEx:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n("zLVn"),r=(n("q1tI"),n("7ljp")),i=n("3dLD"),s={},o={_frontmatter:s},c=i.a;function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.mdx)(c,Object.assign({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("h1",{id:"switching-to-jest"},"Switching to Jest"),Object(r.mdx)("table",null,Object(r.mdx)("thead",{parentName:"table"},Object(r.mdx)("tr",{parentName:"thead"},Object(r.mdx)("th",Object.assign({parentName:"tr"},{align:null})),Object(r.mdx)("th",Object.assign({parentName:"tr"},{align:null})),Object(r.mdx)("th",Object.assign({parentName:"tr"},{align:null})),Object(r.mdx)("th",Object.assign({parentName:"tr"},{align:null})))),Object(r.mdx)("tbody",{parentName:"table"},Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.mdx)("strong",{parentName:"td"},"Decision Made:")),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"No, but open to revisiting"),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.mdx)("strong",{parentName:"td"},"Decision Date:")),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"12/2018")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.mdx)("strong",{parentName:"td"},"Revisit Decision:")),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Yes"),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.mdx)("strong",{parentName:"td"},"Revisit Date:")),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"July 2019")))),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Revisit Criteria:")," If a developer is interested in Jest and has time or suggestions for fixing the speed issues, we should revisit this."),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Decision Makers:")," @rianfowler @jbalboni"),Object(r.mdx)("hr",null),Object(r.mdx)("h2",{id:"tldr"},"tl;dr"),Object(r.mdx)("p",null,"Jest is probably the most common testing framework in the React ecosystem and has some nice benefits, so we evaluated switching to it from our Mocha-based stack. However, we found that it made our tests twice as slow and were unable to address this in a reasonable amount of time."),Object(r.mdx)("h2",{id:"history"},"History"),Object(r.mdx)("p",null,"See ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/department-of-veterans-affairs/vets.gov-team/issues/12874"}),"#12874")," for the full history. A Jest RFC was started by Ryan McAuliffe and some exploratory work was done by him and Claire Hsu. The overall consensus of developers here was that Jest has some nice features and is typically faster than Mocha based tests, so it seemed like a good improvement for us. However, during our evaluation we found that our tests were significantly slower than our current approach. Rian Fowler did some further testing around this issue and was unable to resolve it."),Object(r.mdx)("h2",{id:"pros"},"Pros"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"Jest is widely supported in the React community"),Object(r.mdx)("li",{parentName:"ul"},"It has easy to use extensions for aXe and snapshot testing that we could use"),Object(r.mdx)("li",{parentName:"ul"},"It supports parallelization, and makes better use of all resources available to it")),Object(r.mdx)("h2",{id:"cons"},"Cons"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"It's approximately ",Object(r.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/vets.gov-team/issues/12874#issuecomment-448280502"}),"2x slower than our current tests")),Object(r.mdx)("li",{parentName:"ul"},"Some of the useful features (snapshots) could be adopted without switching to Jest")),Object(r.mdx)("h2",{id:"decision"},"Decision"),Object(r.mdx)("p",null,"We're putting the switch to Jest on hold for the time being. The slowdown is the primary reason for this, since the consensus otherwise was that Jest was an improvement. Any developer with time or ideas should feel free to attempt to address the performance issue and we will re-evaluate."))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-platform-front-end-standards-documented-decisions-jest-mdx-91d1507f53582b19acb2.js.map