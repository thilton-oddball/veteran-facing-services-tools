(window.webpackJsonp=window.webpackJsonp||[]).push([[25,50],{"3dLD":function(e,t,a){"use strict";a.d(t,"a",(function(){return k}));var r=a("q1tI"),i=a.n(r),m=a("8FPV"),n=a("Wbzz");function s(){return i.a.createElement(n.StaticQuery,{query:"4277382034",render:function(e){return i.a.createElement(l,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})}})}function d(e){var t=e.item;return t.href?i.a.createElement("li",{key:t.name},i.a.createElement(n.Link,{to:t.href},t.name)):i.a.createElement("li",{key:t.name},t.name," (future)")}function l(e){var t=e.items,a=e.isSublist,r=void 0!==a&&a;return t.length?i.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?i.a.createElement("li",{key:e.name},r&&i.a.createElement(d,{item:e}),!r&&i.a.createElement("h2",{className:"heading-level-4"},e.name),i.a.createElement(l,{isSublist:!0,items:e.items})):"componentList"===e.query?i.a.createElement("li",{key:e.name},r&&i.a.createElement(d,{item:e}),!r&&i.a.createElement("h2",{className:"heading-level-4"},e.name),i.a.createElement(s,null)):i.a.createElement(d,{item:e,key:e.name})}))):null}var o=a("MEl4"),c=a.n(o);function f(e){var t=e.location,a=c.a.sections.find((function(e){return t.pathname.includes(e.href)}));return a?i.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},i.a.createElement("div",{className:"site-c-sidenav"},i.a.createElement(l,{items:a.items}))):null}function b(e){var t=e.componentToMatch;return i.a.createElement(n.StaticQuery,{query:"4193446859",render:function(e){return e.components.edges.map((function(e){return t===e.node.context.name.toLowerCase()?i.a.createElement(g,{item:{name:e.node.context.name}}):""}))}})}function g(e){var t=e.item,a="https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master/packages/formation-react/src/components/"+t.name+"/"+t.name+".mdx";return i.a.createElement(n.Link,{to:a},"Edit this page on GitHub")}function p(e){var t=e.pathname.split("/");return i.a.createElement(b,{componentToMatch:t[3]})}var h=function(e){var t=e.pathname.replace("/veteran-facing-services-tools","");return t.length>0&&"/"===t.charAt(t.length-1)&&(t=t.substring(0,t.length-1)),t};function x(e){var t=e.location,a="https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master/packages/documentation/src/pages"+h(t)+function(e){var t=h(e),a=c.a.sections.find((function(e){return t.includes(e.href)})),r=c.a.sections.find((function(e){return e.href===t}));if(null==r?void 0:r.indexmdx)return"/index";if((null==a?void 0:a.items)&&a.items.map((function(e){return Array.isArray(e.items)?e.items.find((function(e){return e.href===t})):null})).map((function(e){if((null==e?void 0:e.href)&&e.href===t)return!!(null==e?void 0:e.indexmdx)})).find((function(e){return e})))return"/index";return""}(t)+".mdx";return i.a.createElement(n.Link,{to:a},"Edit this page on GitHub")}function u(e){var t=e.location;return i.a.createElement("div",null,i.a.createElement("p",null,i.a.createElement("br",null),i.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",function(e){if(e.pathname.includes("components")){var t=e.pathname.replace("/veteran-facing-services-tools","");return i.a.createElement(p,{pathname:t})}return i.a.createElement(x,{location:e})}(t)))}function k(e){var t=e.children,a=e.location;return i.a.createElement(m.a,{location:a},i.a.createElement("div",{className:"vads-l-row"},i.a.createElement(f,{location:a}),i.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,i.a.createElement(u,{location:a}))))}},"4Q/h":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return n})),a.d(t,"default",(function(){return l}));var r=a("zLVn"),i=(a("q1tI"),a("7ljp")),m=a("3dLD"),n={},s={_frontmatter:n},d=m.a;function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.mdx)(d,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("h1",{id:"vagov-forms-library"},"VA.gov Forms Library"),Object(i.mdx)("p",null,"The VA.gov Forms Library provides a simple way to create a consistent experience for complex forms for Veterans. Applications created with this framework generally follow this flow:"),Object(i.mdx)("div",{className:"mermaid","data-processed":"true"},Object(i.mdx)("svg",Object.assign({parentName:"div"},{id:"mermaid-1595335347093",width:"895",xmlns:"http://www.w3.org/2000/svg",height:"54",viewBox:"0 0 895 54"}),Object(i.mdx)("style",{parentName:"svg"},"#mermaid-1595335347093 .label{font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family);color:#333}#mermaid-1595335347093 .label text{fill:#333}#mermaid-1595335347093 .node rect,#mermaid-1595335347093 .node circle,#mermaid-1595335347093 .node ellipse,#mermaid-1595335347093 .node polygon,#mermaid-1595335347093 .node path{fill:#ECECFF;stroke:#9370db;stroke-width:1px}#mermaid-1595335347093 .node .label{text-align:center}#mermaid-1595335347093 .node.clickable{cursor:pointer}#mermaid-1595335347093 .arrowheadPath{fill:#333}#mermaid-1595335347093 .edgePath .path{stroke:#333;stroke-width:1.5px}#mermaid-1595335347093 .flowchart-link{stroke:#333;fill:none}#mermaid-1595335347093 .edgeLabel{background-color:#e8e8e8;text-align:center}#mermaid-1595335347093 .edgeLabel rect{opacity:0.5}#mermaid-1595335347093 .cluster rect{fill:#ffffde;stroke:#aa3;stroke-width:1px}#mermaid-1595335347093 .cluster text{fill:#333}#mermaid-1595335347093 div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family);font-size:12px;background:#ffffde;border:1px solid #aa3;border-radius:2px;pointer-events:none;z-index:100}#mermaid-1595335347093 .actor{stroke:#ccf;fill:#ECECFF}#mermaid-1595335347093 text.actor>tspan{fill:#000;stroke:none}#mermaid-1595335347093 .actor-line{stroke:grey}#mermaid-1595335347093 .messageLine0{stroke-width:1.5;stroke-dasharray:none;stroke:#333}#mermaid-1595335347093 .messageLine1{stroke-width:1.5;stroke-dasharray:2, 2;stroke:#333}#mermaid-1595335347093 #arrowhead path{fill:#333;stroke:#333}#mermaid-1595335347093 .sequenceNumber{fill:#fff}#mermaid-1595335347093 #sequencenumber{fill:#333}#mermaid-1595335347093 #crosshead path{fill:#333;stroke:#333}#mermaid-1595335347093 .messageText{fill:#333;stroke:#333}#mermaid-1595335347093 .labelBox{stroke:#ccf;fill:#ECECFF}#mermaid-1595335347093 .labelText,#mermaid-1595335347093 .labelText>tspan{fill:#000;stroke:none}#mermaid-1595335347093 .loopText,#mermaid-1595335347093 .loopText>tspan{fill:#000;stroke:none}#mermaid-1595335347093 .loopLine{stroke-width:2px;stroke-dasharray:2, 2;stroke:#ccf;fill:#ccf}#mermaid-1595335347093 .note{stroke:#aa3;fill:#fff5ad}#mermaid-1595335347093 .noteText,#mermaid-1595335347093 .noteText>tspan{fill:#000;stroke:none}#mermaid-1595335347093 .activation0{fill:#f4f4f4;stroke:#666}#mermaid-1595335347093 .activation1{fill:#f4f4f4;stroke:#666}#mermaid-1595335347093 .activation2{fill:#f4f4f4;stroke:#666}#mermaid-1595335347093 .mermaid-main-font{font-family:\"trebuchet ms\", verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1595335347093 .section{stroke:none;opacity:0.2}#mermaid-1595335347093 .section0{fill:rgba(102,102,255,0.49)}#mermaid-1595335347093 .section2{fill:#fff400}#mermaid-1595335347093 .section1,#mermaid-1595335347093 .section3{fill:#fff;opacity:0.2}#mermaid-1595335347093 .sectionTitle0{fill:#333}#mermaid-1595335347093 .sectionTitle1{fill:#333}#mermaid-1595335347093 .sectionTitle2{fill:#333}#mermaid-1595335347093 .sectionTitle3{fill:#333}#mermaid-1595335347093 .sectionTitle{text-anchor:start;font-size:11px;text-height:14px;font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1595335347093 .grid .tick{stroke:#d3d3d3;opacity:0.8;shape-rendering:crispEdges}#mermaid-1595335347093 .grid .tick text{font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1595335347093 .grid path{stroke-width:0}#mermaid-1595335347093 .today{fill:none;stroke:red;stroke-width:2px}#mermaid-1595335347093 .task{stroke-width:2}#mermaid-1595335347093 .taskText{text-anchor:middle;font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1595335347093 .taskText:not([font-size]){font-size:11px}#mermaid-1595335347093 .taskTextOutsideRight{fill:#000;text-anchor:start;font-size:11px;font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1595335347093 .taskTextOutsideLeft{fill:#000;text-anchor:end;font-size:11px}#mermaid-1595335347093 .task.clickable{cursor:pointer}#mermaid-1595335347093 .taskText.clickable{cursor:pointer;fill:#003163 !important;font-weight:bold}#mermaid-1595335347093 .taskTextOutsideLeft.clickable{cursor:pointer;fill:#003163 !important;font-weight:bold}#mermaid-1595335347093 .taskTextOutsideRight.clickable{cursor:pointer;fill:#003163 !important;font-weight:bold}#mermaid-1595335347093 .taskText0,#mermaid-1595335347093 .taskText1,#mermaid-1595335347093 .taskText2,#mermaid-1595335347093 .taskText3{fill:#fff}#mermaid-1595335347093 .task0,#mermaid-1595335347093 .task1,#mermaid-1595335347093 .task2,#mermaid-1595335347093 .task3{fill:#8a90dd;stroke:#534fbc}#mermaid-1595335347093 .taskTextOutside0,#mermaid-1595335347093 .taskTextOutside2{fill:#000}#mermaid-1595335347093 .taskTextOutside1,#mermaid-1595335347093 .taskTextOutside3{fill:#000}#mermaid-1595335347093 .active0,#mermaid-1595335347093 .active1,#mermaid-1595335347093 .active2,#mermaid-1595335347093 .active3{fill:#bfc7ff;stroke:#534fbc}#mermaid-1595335347093 .activeText0,#mermaid-1595335347093 .activeText1,#mermaid-1595335347093 .activeText2,#mermaid-1595335347093 .activeText3{fill:#000 !important}#mermaid-1595335347093 .done0,#mermaid-1595335347093 .done1,#mermaid-1595335347093 .done2,#mermaid-1595335347093 .done3{stroke:grey;fill:#d3d3d3;stroke-width:2}#mermaid-1595335347093 .doneText0,#mermaid-1595335347093 .doneText1,#mermaid-1595335347093 .doneText2,#mermaid-1595335347093 .doneText3{fill:#000 !important}#mermaid-1595335347093 .crit0,#mermaid-1595335347093 .crit1,#mermaid-1595335347093 .crit2,#mermaid-1595335347093 .crit3{stroke:#f88;fill:red;stroke-width:2}#mermaid-1595335347093 .activeCrit0,#mermaid-1595335347093 .activeCrit1,#mermaid-1595335347093 .activeCrit2,#mermaid-1595335347093 .activeCrit3{stroke:#f88;fill:#bfc7ff;stroke-width:2}#mermaid-1595335347093 .doneCrit0,#mermaid-1595335347093 .doneCrit1,#mermaid-1595335347093 .doneCrit2,#mermaid-1595335347093 .doneCrit3{stroke:#f88;fill:#d3d3d3;stroke-width:2;cursor:pointer;shape-rendering:crispEdges}#mermaid-1595335347093 .milestone{transform:rotate(45deg) scale(0.8, 0.8)}#mermaid-1595335347093 .milestoneText{font-style:italic}#mermaid-1595335347093 .doneCritText0,#mermaid-1595335347093 .doneCritText1,#mermaid-1595335347093 .doneCritText2,#mermaid-1595335347093 .doneCritText3{fill:#000 !important}#mermaid-1595335347093 .activeCritText0,#mermaid-1595335347093 .activeCritText1,#mermaid-1595335347093 .activeCritText2,#mermaid-1595335347093 .activeCritText3{fill:#000 !important}#mermaid-1595335347093 .titleText{text-anchor:middle;font-size:18px;fill:#000;font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1595335347093 g.classGroup text{fill:#9370db;stroke:none;font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family);font-size:10px}#mermaid-1595335347093 g.classGroup text .title{font-weight:bolder}#mermaid-1595335347093 g.clickable{cursor:pointer}#mermaid-1595335347093 g.classGroup rect{fill:#ECECFF;stroke:#9370db}#mermaid-1595335347093 g.classGroup line{stroke:#9370db;stroke-width:1}#mermaid-1595335347093 .classLabel .box{stroke:none;stroke-width:0;fill:#ECECFF;opacity:0.5}#mermaid-1595335347093 .classLabel .label{fill:#9370db;font-size:10px}#mermaid-1595335347093 .relation{stroke:#9370db;stroke-width:1;fill:none}#mermaid-1595335347093 .dashed-line{stroke-dasharray:3}#mermaid-1595335347093 #compositionStart{fill:#9370db;stroke:#9370db;stroke-width:1}#mermaid-1595335347093 #compositionEnd{fill:#9370db;stroke:#9370db;stroke-width:1}#mermaid-1595335347093 #aggregationStart{fill:#ECECFF;stroke:#9370db;stroke-width:1}#mermaid-1595335347093 #aggregationEnd{fill:#ECECFF;stroke:#9370db;stroke-width:1}#mermaid-1595335347093 #dependencyStart{fill:#9370db;stroke:#9370db;stroke-width:1}#mermaid-1595335347093 #dependencyEnd{fill:#9370db;stroke:#9370db;stroke-width:1}#mermaid-1595335347093 #extensionStart{fill:#9370db;stroke:#9370db;stroke-width:1}#mermaid-1595335347093 #extensionEnd{fill:#9370db;stroke:#9370db;stroke-width:1}#mermaid-1595335347093 .commit-id,#mermaid-1595335347093 .commit-msg,#mermaid-1595335347093 .branch-label{fill:lightgrey;color:lightgrey;font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1595335347093 .pieTitleText{text-anchor:middle;font-size:25px;fill:#000;font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1595335347093 .slice{font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1595335347093 g.stateGroup text{fill:#9370db;stroke:none;font-size:10px;font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1595335347093 g.stateGroup text{fill:#9370db;stroke:none;font-size:10px}#mermaid-1595335347093 g.stateGroup .state-title{font-weight:bolder;fill:#000}#mermaid-1595335347093 g.stateGroup rect{fill:#ECECFF;stroke:#9370db}#mermaid-1595335347093 g.stateGroup line{stroke:#9370db;stroke-width:1}#mermaid-1595335347093 .transition{stroke:#9370db;stroke-width:1;fill:none}#mermaid-1595335347093 .stateGroup .composit{fill:white;border-bottom:1px}#mermaid-1595335347093 .stateGroup .alt-composit{fill:#e0e0e0;border-bottom:1px}#mermaid-1595335347093 .state-note{stroke:#aa3;fill:#fff5ad}#mermaid-1595335347093 .state-note text{fill:black;stroke:none;font-size:10px}#mermaid-1595335347093 .stateLabel .box{stroke:none;stroke-width:0;fill:#ECECFF;opacity:0.5}#mermaid-1595335347093 .stateLabel text{fill:#000;font-size:10px;font-weight:bold;font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1595335347093 .node circle.state-start{fill:black;stroke:black}#mermaid-1595335347093 .node circle.state-end{fill:black;stroke:white;stroke-width:1.5}#mermaid-1595335347093 #statediagram-barbEnd{fill:#9370db}#mermaid-1595335347093 .statediagram-cluster rect{fill:#ECECFF;stroke:#9370db;stroke-width:1px}#mermaid-1595335347093 .statediagram-cluster rect.outer{rx:5px;ry:5px}#mermaid-1595335347093 .statediagram-state .divider{stroke:#9370db}#mermaid-1595335347093 .statediagram-state .title-state{rx:5px;ry:5px}#mermaid-1595335347093 .statediagram-cluster.statediagram-cluster .inner{fill:white}#mermaid-1595335347093 .statediagram-cluster.statediagram-cluster-alt .inner{fill:#e0e0e0}#mermaid-1595335347093 .statediagram-cluster .inner{rx:0;ry:0}#mermaid-1595335347093 .statediagram-state rect.basic{rx:5px;ry:5px}#mermaid-1595335347093 .statediagram-state rect.divider{stroke-dasharray:10,10;fill:#efefef}#mermaid-1595335347093 .note-edge{stroke-dasharray:5}#mermaid-1595335347093 .statediagram-note rect{fill:#fff5ad;stroke:#aa3;stroke-width:1px;rx:0;ry:0}:root{--mermaid-font-family: '\"trebuchet ms\", verdana, arial';--mermaid-font-family: \"Comic Sans MS\", \"Comic Sans\", cursive}#mermaid-1595335347093 .error-icon{fill:#522}#mermaid-1595335347093 .error-text{fill:#522;stroke:#522}#mermaid-1595335347093 .edge-thickness-normal{stroke-width:2px}#mermaid-1595335347093 .edge-thickness-thick{stroke-width:3.5px}#mermaid-1595335347093 .edge-pattern-solid{stroke-dasharray:0}#mermaid-1595335347093 .edge-pattern-dashed{stroke-dasharray:3}#mermaid-1595335347093 .edge-pattern-dotted{stroke-dasharray:2}#mermaid-1595335347093 .marker{fill:#333}#mermaid-1595335347093 .marker.cross{stroke:#333}\n\n:root { --mermaid-font-family: \"trebuchet ms\", verdana, arial;}"),Object(i.mdx)("style",{parentName:"svg"},'#mermaid-1595335347093 {\n    color: rgb(0, 0, 0);\n    font: 16px "trebuchet ms", verdana, arial;\n  }'),Object(i.mdx)("g",{parentName:"svg"},Object(i.mdx)("g",Object.assign({parentName:"g"},{className:"output"}),Object(i.mdx)("g",Object.assign({parentName:"g"},{className:"clusters"})),Object(i.mdx)("g",Object.assign({parentName:"g"},{className:"edgePaths"}),Object(i.mdx)("g",Object.assign({parentName:"g"},{className:"edgePath LS-A LE-B",id:"L-A-B",style:{opacity:"1"}}),Object(i.mdx)("path",Object.assign({parentName:"g"},{className:"path",d:"M153,27L178,27L203,27",markerEnd:"url(#arrowhead19)",style:{fill:"none"}})),Object(i.mdx)("defs",{parentName:"g"},Object(i.mdx)("marker",Object.assign({parentName:"defs"},{id:"arrowhead19",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"}),Object(i.mdx)("path",Object.assign({parentName:"marker"},{d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}}))))),Object(i.mdx)("g",Object.assign({parentName:"g"},{className:"edgePath LS-B LE-C",id:"L-B-C",style:{opacity:"1"}}),Object(i.mdx)("path",Object.assign({parentName:"g"},{className:"path",d:"M347,27L415.5,27L484,27",markerEnd:"url(#arrowhead20)",style:{fill:"none",strokeWidth:"2px",strokeDasharray:"3"}})),Object(i.mdx)("defs",{parentName:"g"},Object(i.mdx)("marker",Object.assign({parentName:"defs"},{id:"arrowhead20",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"}),Object(i.mdx)("path",Object.assign({parentName:"marker"},{d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}}))))),Object(i.mdx)("g",Object.assign({parentName:"g"},{className:"edgePath LS-C LE-D",id:"L-C-D",style:{opacity:"1"}}),Object(i.mdx)("path",Object.assign({parentName:"g"},{className:"path",d:"M600,27L667,27L734,27",markerEnd:"url(#arrowhead21)",style:{fill:"none"}})),Object(i.mdx)("defs",{parentName:"g"},Object(i.mdx)("marker",Object.assign({parentName:"defs"},{id:"arrowhead21",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"}),Object(i.mdx)("path",Object.assign({parentName:"marker"},{d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}})))))),Object(i.mdx)("g",Object.assign({parentName:"g"},{className:"edgeLabels"}),Object(i.mdx)("g",Object.assign({parentName:"g"},{className:"edgeLabel",transform:"",style:{opacity:"1"}}),Object(i.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(0,0)",className:"label"}),Object(i.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",width:"0",height:"0",style:{fill:"#e8e8e8"}})),Object(i.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"0",height:"0"}),Object(i.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),Object(i.mdx)("span",Object.assign({parentName:"div"},{id:"L-L-A-B",className:"edgeLabel L-LS-A' L-LE-B"})))))),Object(i.mdx)("g",Object.assign({parentName:"g"},{className:"edgeLabel",transform:"translate(415.5,27)",style:{opacity:"1"}}),Object(i.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-43.5,-9)",className:"label"}),Object(i.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",width:"87",height:"18",style:{fill:"#e8e8e8"}})),Object(i.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"87",height:"18"}),Object(i.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),Object(i.mdx)("span",Object.assign({parentName:"div"},{id:"L-L-B-C",className:"edgeLabel L-LS-B' L-LE-C"}),"Form Pages"))))),Object(i.mdx)("g",Object.assign({parentName:"g"},{className:"edgeLabel",transform:"translate(667,27)",style:{opacity:"1"}}),Object(i.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-42,-9)",className:"label"}),Object(i.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",width:"84",height:"18",style:{fill:"#e8e8e8"}})),Object(i.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"84",height:"18"}),Object(i.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),Object(i.mdx)("span",Object.assign({parentName:"div"},{id:"L-L-C-D",className:"edgeLabel L-LS-C' L-LE-D"}),"Submission")))))),Object(i.mdx)("g",Object.assign({parentName:"g"},{className:"nodes"}),Object(i.mdx)("g",Object.assign({parentName:"g"},{className:"node default",id:"A",transform:"translate(80.5,27)",style:{opacity:"1"}}),Object(i.mdx)("rect",Object.assign({parentName:"g"},{rx:"5",ry:"5",x:"-72.5",y:"-19",width:"145",height:"38",className:"label-container"})),Object(i.mdx)("g",Object.assign({parentName:"g"},{className:"label",transform:"translate(0,0)"}),Object(i.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-62.5,-9)"}),Object(i.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"125",height:"18"}),Object(i.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),"Introduction Page"))))),Object(i.mdx)("g",Object.assign({parentName:"g"},{className:"node default",id:"B",transform:"translate(275,27)",style:{opacity:"1"}}),Object(i.mdx)("rect",Object.assign({parentName:"g"},{rx:"5",ry:"5",x:"-72",y:"-19",width:"144",height:"38",className:"label-container"})),Object(i.mdx)("g",Object.assign({parentName:"g"},{className:"label",transform:"translate(0,0)"}),Object(i.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-62,-9)"}),Object(i.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"124",height:"18"}),Object(i.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),"Form Pages Start"))))),Object(i.mdx)("g",Object.assign({parentName:"g"},{className:"node default",id:"C",transform:"translate(542,27)",style:{opacity:"1"}}),Object(i.mdx)("rect",Object.assign({parentName:"g"},{rx:"5",ry:"5",x:"-58",y:"-19",width:"116",height:"38",className:"label-container"})),Object(i.mdx)("g",Object.assign({parentName:"g"},{className:"label",transform:"translate(0,0)"}),Object(i.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-48,-9)"}),Object(i.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"96",height:"18"}),Object(i.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),"Review Page"))))),Object(i.mdx)("g",Object.assign({parentName:"g"},{className:"node default",id:"D",transform:"translate(810.5,27)",style:{opacity:"1"}}),Object(i.mdx)("rect",Object.assign({parentName:"g"},{rx:"5",ry:"5",x:"-76.5",y:"-19",width:"153",height:"38",className:"label-container"})),Object(i.mdx)("g",Object.assign({parentName:"g"},{className:"label",transform:"translate(0,0)"}),Object(i.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-66.5,-9)"}),Object(i.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"133",height:"18"}),Object(i.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),"Confirmation Page")))))))))),Object(i.mdx)("p",null,"The forms library consists of several different pieces:"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"Standardized ",Object(i.mdx)("strong",{parentName:"li"},"inputs and field sets")," for common types of form data"),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("strong",{parentName:"li"},"Validation functions")," used for commonly collected types of data"),Object(i.mdx)("li",{parentName:"ul"},"A standardized ",Object(i.mdx)("strong",{parentName:"li"},"data flow")," within the application that triggers validation and updates conditionally displayed UI"),Object(i.mdx)("li",{parentName:"ul"},"Hooks for custom validation, hiding/showing fields, and writing custom fields and widgets"),Object(i.mdx)("li",{parentName:"ul"},"Save and restore form data using the VA.gov save in progress and prefill APIs")),Object(i.mdx)("h2",{id:"when-to-use-the-forms-library"},"When to use the forms library"),Object(i.mdx)("p",null,"The forms library is best suited for forms that"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"are long enough to be organized across multiple pages,"),Object(i.mdx)("li",{parentName:"ul"},"have optionally captured or required fields, and"),Object(i.mdx)("li",{parentName:"ul"},"require field level or multiple field validation.")),Object(i.mdx)("p",null,"The forms library shouldn't be used when"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"the form is simple enough to fit on a single page, or"),Object(i.mdx)("li",{parentName:"ul"},"when the user experience doesn't benefit from ",Object(i.mdx)("strong",{parentName:"li"},"all")," of the steps documented in the above flow.")),Object(i.mdx)("p",null,"In these cases, it's recommended to either make simple single page form or to deploy a React app that doesn't use the forms library. We have form components available in the formation-react library, which can view ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"/veteran-facing-services-tools/platform"}),"here"),"."))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-forms-index-mdx-36dcf0fb99ba337182ef.js.map