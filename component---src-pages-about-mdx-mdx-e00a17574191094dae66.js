(window.webpackJsonp=window.webpackJsonp||[]).push([[6,50],{"3dLD":function(e,n,t){"use strict";t.d(n,"a",(function(){return g}));var a=t("q1tI"),o=t.n(a),r=t("8FPV"),i=t("Wbzz");function c(){return o.a.createElement(i.StaticQuery,{query:"4277382034",render:function(e){return o.a.createElement(l,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})}})}function s(e){var n=e.item;return n.href?o.a.createElement("li",{key:n.name},o.a.createElement(i.Link,{to:n.href},n.name)):o.a.createElement("li",{key:n.name},n.name," (future)")}function l(e){var n=e.items,t=e.isSublist,a=void 0!==t&&t;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map((function(e){return e.items?o.a.createElement("li",{key:e.name},a&&o.a.createElement(s,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},a&&o.a.createElement(s,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(c,null)):o.a.createElement(s,{item:e,key:e.name})}))):null}var m=t("MEl4"),u=t.n(m);function d(e){var n=e.location,t=u.a.sections.find((function(e){return n.pathname.includes(e.href)}));return t?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(l,{items:t.items}))):null}function p(e){var n=e.componentToMatch;return o.a.createElement(i.StaticQuery,{query:"4193446859",render:function(e){return e.components.edges.map((function(e){return n===e.node.context.name.toLowerCase()?o.a.createElement(f,{item:{name:e.node.context.name}}):""}))}})}function f(e){var n=e.item,t="https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master/packages/formation-react/src/components/"+n.name+"/"+n.name+".mdx";return o.a.createElement(i.Link,{to:t},"Edit this page on GitHub")}function h(e){var n=e.pathname.split("/");return o.a.createElement(p,{componentToMatch:n[3]})}var x=function(e){var n=e.pathname.replace("/veteran-facing-services-tools","");return n.length>0&&"/"===n.charAt(n.length-1)&&(n=n.substring(0,n.length-1)),n};function b(e){var n=e.location,t="https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master/packages/documentation/src/pages"+x(n)+function(e){var n=x(e),t=u.a.sections.find((function(e){return n.includes(e.href)})),a=u.a.sections.find((function(e){return e.href===n}));if(null==a?void 0:a.indexmdx)return"/index";if((null==t?void 0:t.items)&&t.items.map((function(e){return Array.isArray(e.items)?e.items.find((function(e){return e.href===n})):null})).map((function(e){if((null==e?void 0:e.href)&&e.href===n)return!!(null==e?void 0:e.indexmdx)})).find((function(e){return e})))return"/index";return""}(n)+".mdx";return o.a.createElement(i.Link,{to:t},"Edit this page on GitHub")}function v(e){var n=e.location;return o.a.createElement("div",null,o.a.createElement("p",null,o.a.createElement("br",null),o.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",function(e){if(e.pathname.includes("components")){var n=e.pathname.replace("/veteran-facing-services-tools","");return o.a.createElement(h,{pathname:n})}return o.a.createElement(b,{location:e})}(n)))}function g(e){var n=e.children,t=e.location;return o.a.createElement(r.a,{location:t},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(d,{location:t}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n,o.a.createElement(v,{location:t}))))}},ljIB:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return l}));var a=t("zLVn"),o=(t("q1tI"),t("7ljp")),r=t("3dLD"),i={},c={_frontmatter:i},s=r.a;function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.mdx)(s,Object.assign({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("h2",{id:"about-mdx"},"About MDX"),Object(o.mdx)("h3",{id:"what-is-mdx"},"What is MDX?"),Object(o.mdx)("p",null,"We will be using the .mdx format to create our documents.\nMDX is a format that lets you seamlessly use JSX in your Markdown documents.\nYou can import components, like interactive charts or notifs, and export metadata.\nThis makes writing long-form content with components a blast 🚀"),Object(o.mdx)("p",null,Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://mdxjs.com/"}),"https://mdxjs.com/")),Object(o.mdx)("h3",{id:"examples"},"Examples"),Object(o.mdx)("p",null,"Here is a great page of examples of using MDX"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",Object.assign({parentName:"li"},{href:"http://dump.jamesknelson.com/mdxc-playground.html"}),"http://dump.jamesknelson.com/mdxc-playground.html"))),Object(o.mdx)("h3",{id:"things-you-can-do-with-mdx-and-gotchas"},"Things you can do with MDX and gotchas"),Object(o.mdx)("p",null,"This is documentation of findings for using MDX in our projects. Please feel\nfree to add to this document if you find anything else."),Object(o.mdx)("h4",{id:"inline-components"},"Inline components"),Object(o.mdx)("p",null,"You can use components inline inside your MDX files. Below is an example\nof how to do it."),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"You will need to export it for it to work."),Object(o.mdx)("li",{parentName:"ul"},"You can write both Function components and Class components."),Object(o.mdx)("li",{parentName:"ul"},"The reason why you need to use this is when you need the parent state to change.")),Object(o.mdx)("p",null,"This example uses state to toggle the drop down."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"// Class Component\nexport class InlineClassComponent extends React.Component {\n  constructor() {\n    super()\n    this.state = {\n      open: false\n    }\n  }\n  render() {\n    return (\n      <div className=\"site-c-reactcomp__rendered\">\n        <div style={{ backgroundColor: '#112e51' }}>\n          <DropDownPanel\n            buttonText='Helpdesk'\n            cssClass='va-dropdown'\n            isOpen={this.state.open}\n            contents='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper at eros eu suscipit. Ut imperdiet libero et luctus pretium.'\n            clickHandler={() => this.setState({ open: !this.state.open }) }>\n            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper at eros eu suscipit. Ut imperdiet libero et luctus pretium.'\n          </DropDownPanel>\n        </div>\n      </div>\n    )\n  }\n}\n\n<InlineClassComponent />\n\n// Function Component\nexport const InlinePresentationalComponent = () => (\n  <h1>Hello World</h1>\n)\n\n<InlinePresentationalComponent />\n")),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},Object(o.mdx)("em",{parentName:"strong"},"Gotchas"))),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"MDX doesn't like newlines in between methods in a class based component."),Object(o.mdx)("li",{parentName:"ul"},"Inline components need to begin with an uppercase letter. If it starts with a\nlowercase it will not render.")),Object(o.mdx)("p",null,"Bad:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{}),'export class inlineClassComponent extends React.Component {\n  constructor() {\n    super()\n  }\n\n  render() {\n    return (\n      <div className="site-c-reactcomp__rendered">\n        Hello World\n      </div>\n    )\n  }\n}\n')),Object(o.mdx)("p",null,"Good:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{}),'export class InlineClassComponent extends React.Component {\n  constructor() {\n    super()\n  }\n  render() {\n    return (\n      <div className="site-c-reactcomp__rendered">\n        Hello World\n      </div>\n    )\n  }\n}\n')))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-about-mdx-mdx-e00a17574191094dae66.js.map