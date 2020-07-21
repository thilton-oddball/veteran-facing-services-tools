(window.webpackJsonp=window.webpackJsonp||[]).push([[7,50],{"0Aa0":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return n})),a.d(t,"default",(function(){return l}));var r=a("zLVn"),i=(a("q1tI"),a("7ljp")),m=a("3dLD"),n={},s={_frontmatter:n},d=m.a;function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.mdx)(d,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("h2",{id:"add-graphs-to-mdx"},"Add Graphs to MDX"),Object(i.mdx)("h3",{id:"mermaid-library"},"Mermaid Library"),Object(i.mdx)("p",null,"To generate graphs in MDX files, we need to use the ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"https://mermaidjs.github.io/"}),"mermaid")," library.\nWe forked the ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/konsumer/gatsby-remark-graph"}),"gatsby-remark-graph")," plugin and modified it to work with MDX files.\nYou can see the contents of the modified plugin in ",Object(i.mdx)("strong",{parentName:"p"},"/plugins/remarks/gatsby-remark-mdx-mermaid/")),Object(i.mdx)("p",null,"This current file (src/pages/getting-started/add-graphs-to-mdx.mdx) is an example of how to implement graphs in MDX."),Object(i.mdx)("h3",{id:"example-code"},"Example code"),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"Markdown")),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{}),"```mermaid\ngraph LR\n    A[Square Rect] -- Link text --\x3e B((Circle))\n    A --\x3e C(Round Rect)\n    B --\x3e D{Rhombus}\n    C --\x3e D\n```\n")),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"HTML Output")),Object(i.mdx)("div",{className:"mermaid","data-processed":"true"},Object(i.mdx)("svg",Object.assign({parentName:"div"},{id:"mermaid-1595335260692",width:"503.29998779296875",xmlns:"http://www.w3.org/2000/svg",height:"166",viewBox:"0 0 503.29998779296875 166"}),Object(i.mdx)("style",{parentName:"svg"},"#mermaid-1595335260692 .label{font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family);color:#333}#mermaid-1595335260692 .label text{fill:#333}#mermaid-1595335260692 .node rect,#mermaid-1595335260692 .node circle,#mermaid-1595335260692 .node ellipse,#mermaid-1595335260692 .node polygon,#mermaid-1595335260692 .node path{fill:#ECECFF;stroke:#9370db;stroke-width:1px}#mermaid-1595335260692 .node .label{text-align:center}#mermaid-1595335260692 .node.clickable{cursor:pointer}#mermaid-1595335260692 .arrowheadPath{fill:#333}#mermaid-1595335260692 .edgePath .path{stroke:#333;stroke-width:1.5px}#mermaid-1595335260692 .flowchart-link{stroke:#333;fill:none}#mermaid-1595335260692 .edgeLabel{background-color:#e8e8e8;text-align:center}#mermaid-1595335260692 .edgeLabel rect{opacity:0.5}#mermaid-1595335260692 .cluster rect{fill:#ffffde;stroke:#aa3;stroke-width:1px}#mermaid-1595335260692 .cluster text{fill:#333}#mermaid-1595335260692 div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family);font-size:12px;background:#ffffde;border:1px solid #aa3;border-radius:2px;pointer-events:none;z-index:100}#mermaid-1595335260692 .actor{stroke:#ccf;fill:#ECECFF}#mermaid-1595335260692 text.actor>tspan{fill:#000;stroke:none}#mermaid-1595335260692 .actor-line{stroke:grey}#mermaid-1595335260692 .messageLine0{stroke-width:1.5;stroke-dasharray:none;stroke:#333}#mermaid-1595335260692 .messageLine1{stroke-width:1.5;stroke-dasharray:2, 2;stroke:#333}#mermaid-1595335260692 #arrowhead path{fill:#333;stroke:#333}#mermaid-1595335260692 .sequenceNumber{fill:#fff}#mermaid-1595335260692 #sequencenumber{fill:#333}#mermaid-1595335260692 #crosshead path{fill:#333;stroke:#333}#mermaid-1595335260692 .messageText{fill:#333;stroke:#333}#mermaid-1595335260692 .labelBox{stroke:#ccf;fill:#ECECFF}#mermaid-1595335260692 .labelText,#mermaid-1595335260692 .labelText>tspan{fill:#000;stroke:none}#mermaid-1595335260692 .loopText,#mermaid-1595335260692 .loopText>tspan{fill:#000;stroke:none}#mermaid-1595335260692 .loopLine{stroke-width:2px;stroke-dasharray:2, 2;stroke:#ccf;fill:#ccf}#mermaid-1595335260692 .note{stroke:#aa3;fill:#fff5ad}#mermaid-1595335260692 .noteText,#mermaid-1595335260692 .noteText>tspan{fill:#000;stroke:none}#mermaid-1595335260692 .activation0{fill:#f4f4f4;stroke:#666}#mermaid-1595335260692 .activation1{fill:#f4f4f4;stroke:#666}#mermaid-1595335260692 .activation2{fill:#f4f4f4;stroke:#666}#mermaid-1595335260692 .mermaid-main-font{font-family:\"trebuchet ms\", verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1595335260692 .section{stroke:none;opacity:0.2}#mermaid-1595335260692 .section0{fill:rgba(102,102,255,0.49)}#mermaid-1595335260692 .section2{fill:#fff400}#mermaid-1595335260692 .section1,#mermaid-1595335260692 .section3{fill:#fff;opacity:0.2}#mermaid-1595335260692 .sectionTitle0{fill:#333}#mermaid-1595335260692 .sectionTitle1{fill:#333}#mermaid-1595335260692 .sectionTitle2{fill:#333}#mermaid-1595335260692 .sectionTitle3{fill:#333}#mermaid-1595335260692 .sectionTitle{text-anchor:start;font-size:11px;text-height:14px;font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1595335260692 .grid .tick{stroke:#d3d3d3;opacity:0.8;shape-rendering:crispEdges}#mermaid-1595335260692 .grid .tick text{font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1595335260692 .grid path{stroke-width:0}#mermaid-1595335260692 .today{fill:none;stroke:red;stroke-width:2px}#mermaid-1595335260692 .task{stroke-width:2}#mermaid-1595335260692 .taskText{text-anchor:middle;font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1595335260692 .taskText:not([font-size]){font-size:11px}#mermaid-1595335260692 .taskTextOutsideRight{fill:#000;text-anchor:start;font-size:11px;font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1595335260692 .taskTextOutsideLeft{fill:#000;text-anchor:end;font-size:11px}#mermaid-1595335260692 .task.clickable{cursor:pointer}#mermaid-1595335260692 .taskText.clickable{cursor:pointer;fill:#003163 !important;font-weight:bold}#mermaid-1595335260692 .taskTextOutsideLeft.clickable{cursor:pointer;fill:#003163 !important;font-weight:bold}#mermaid-1595335260692 .taskTextOutsideRight.clickable{cursor:pointer;fill:#003163 !important;font-weight:bold}#mermaid-1595335260692 .taskText0,#mermaid-1595335260692 .taskText1,#mermaid-1595335260692 .taskText2,#mermaid-1595335260692 .taskText3{fill:#fff}#mermaid-1595335260692 .task0,#mermaid-1595335260692 .task1,#mermaid-1595335260692 .task2,#mermaid-1595335260692 .task3{fill:#8a90dd;stroke:#534fbc}#mermaid-1595335260692 .taskTextOutside0,#mermaid-1595335260692 .taskTextOutside2{fill:#000}#mermaid-1595335260692 .taskTextOutside1,#mermaid-1595335260692 .taskTextOutside3{fill:#000}#mermaid-1595335260692 .active0,#mermaid-1595335260692 .active1,#mermaid-1595335260692 .active2,#mermaid-1595335260692 .active3{fill:#bfc7ff;stroke:#534fbc}#mermaid-1595335260692 .activeText0,#mermaid-1595335260692 .activeText1,#mermaid-1595335260692 .activeText2,#mermaid-1595335260692 .activeText3{fill:#000 !important}#mermaid-1595335260692 .done0,#mermaid-1595335260692 .done1,#mermaid-1595335260692 .done2,#mermaid-1595335260692 .done3{stroke:grey;fill:#d3d3d3;stroke-width:2}#mermaid-1595335260692 .doneText0,#mermaid-1595335260692 .doneText1,#mermaid-1595335260692 .doneText2,#mermaid-1595335260692 .doneText3{fill:#000 !important}#mermaid-1595335260692 .crit0,#mermaid-1595335260692 .crit1,#mermaid-1595335260692 .crit2,#mermaid-1595335260692 .crit3{stroke:#f88;fill:red;stroke-width:2}#mermaid-1595335260692 .activeCrit0,#mermaid-1595335260692 .activeCrit1,#mermaid-1595335260692 .activeCrit2,#mermaid-1595335260692 .activeCrit3{stroke:#f88;fill:#bfc7ff;stroke-width:2}#mermaid-1595335260692 .doneCrit0,#mermaid-1595335260692 .doneCrit1,#mermaid-1595335260692 .doneCrit2,#mermaid-1595335260692 .doneCrit3{stroke:#f88;fill:#d3d3d3;stroke-width:2;cursor:pointer;shape-rendering:crispEdges}#mermaid-1595335260692 .milestone{transform:rotate(45deg) scale(0.8, 0.8)}#mermaid-1595335260692 .milestoneText{font-style:italic}#mermaid-1595335260692 .doneCritText0,#mermaid-1595335260692 .doneCritText1,#mermaid-1595335260692 .doneCritText2,#mermaid-1595335260692 .doneCritText3{fill:#000 !important}#mermaid-1595335260692 .activeCritText0,#mermaid-1595335260692 .activeCritText1,#mermaid-1595335260692 .activeCritText2,#mermaid-1595335260692 .activeCritText3{fill:#000 !important}#mermaid-1595335260692 .titleText{text-anchor:middle;font-size:18px;fill:#000;font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1595335260692 g.classGroup text{fill:#9370db;stroke:none;font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family);font-size:10px}#mermaid-1595335260692 g.classGroup text .title{font-weight:bolder}#mermaid-1595335260692 g.clickable{cursor:pointer}#mermaid-1595335260692 g.classGroup rect{fill:#ECECFF;stroke:#9370db}#mermaid-1595335260692 g.classGroup line{stroke:#9370db;stroke-width:1}#mermaid-1595335260692 .classLabel .box{stroke:none;stroke-width:0;fill:#ECECFF;opacity:0.5}#mermaid-1595335260692 .classLabel .label{fill:#9370db;font-size:10px}#mermaid-1595335260692 .relation{stroke:#9370db;stroke-width:1;fill:none}#mermaid-1595335260692 .dashed-line{stroke-dasharray:3}#mermaid-1595335260692 #compositionStart{fill:#9370db;stroke:#9370db;stroke-width:1}#mermaid-1595335260692 #compositionEnd{fill:#9370db;stroke:#9370db;stroke-width:1}#mermaid-1595335260692 #aggregationStart{fill:#ECECFF;stroke:#9370db;stroke-width:1}#mermaid-1595335260692 #aggregationEnd{fill:#ECECFF;stroke:#9370db;stroke-width:1}#mermaid-1595335260692 #dependencyStart{fill:#9370db;stroke:#9370db;stroke-width:1}#mermaid-1595335260692 #dependencyEnd{fill:#9370db;stroke:#9370db;stroke-width:1}#mermaid-1595335260692 #extensionStart{fill:#9370db;stroke:#9370db;stroke-width:1}#mermaid-1595335260692 #extensionEnd{fill:#9370db;stroke:#9370db;stroke-width:1}#mermaid-1595335260692 .commit-id,#mermaid-1595335260692 .commit-msg,#mermaid-1595335260692 .branch-label{fill:lightgrey;color:lightgrey;font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1595335260692 .pieTitleText{text-anchor:middle;font-size:25px;fill:#000;font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1595335260692 .slice{font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1595335260692 g.stateGroup text{fill:#9370db;stroke:none;font-size:10px;font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1595335260692 g.stateGroup text{fill:#9370db;stroke:none;font-size:10px}#mermaid-1595335260692 g.stateGroup .state-title{font-weight:bolder;fill:#000}#mermaid-1595335260692 g.stateGroup rect{fill:#ECECFF;stroke:#9370db}#mermaid-1595335260692 g.stateGroup line{stroke:#9370db;stroke-width:1}#mermaid-1595335260692 .transition{stroke:#9370db;stroke-width:1;fill:none}#mermaid-1595335260692 .stateGroup .composit{fill:white;border-bottom:1px}#mermaid-1595335260692 .stateGroup .alt-composit{fill:#e0e0e0;border-bottom:1px}#mermaid-1595335260692 .state-note{stroke:#aa3;fill:#fff5ad}#mermaid-1595335260692 .state-note text{fill:black;stroke:none;font-size:10px}#mermaid-1595335260692 .stateLabel .box{stroke:none;stroke-width:0;fill:#ECECFF;opacity:0.5}#mermaid-1595335260692 .stateLabel text{fill:#000;font-size:10px;font-weight:bold;font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1595335260692 .node circle.state-start{fill:black;stroke:black}#mermaid-1595335260692 .node circle.state-end{fill:black;stroke:white;stroke-width:1.5}#mermaid-1595335260692 #statediagram-barbEnd{fill:#9370db}#mermaid-1595335260692 .statediagram-cluster rect{fill:#ECECFF;stroke:#9370db;stroke-width:1px}#mermaid-1595335260692 .statediagram-cluster rect.outer{rx:5px;ry:5px}#mermaid-1595335260692 .statediagram-state .divider{stroke:#9370db}#mermaid-1595335260692 .statediagram-state .title-state{rx:5px;ry:5px}#mermaid-1595335260692 .statediagram-cluster.statediagram-cluster .inner{fill:white}#mermaid-1595335260692 .statediagram-cluster.statediagram-cluster-alt .inner{fill:#e0e0e0}#mermaid-1595335260692 .statediagram-cluster .inner{rx:0;ry:0}#mermaid-1595335260692 .statediagram-state rect.basic{rx:5px;ry:5px}#mermaid-1595335260692 .statediagram-state rect.divider{stroke-dasharray:10,10;fill:#efefef}#mermaid-1595335260692 .note-edge{stroke-dasharray:5}#mermaid-1595335260692 .statediagram-note rect{fill:#fff5ad;stroke:#aa3;stroke-width:1px;rx:0;ry:0}:root{--mermaid-font-family: '\"trebuchet ms\", verdana, arial';--mermaid-font-family: \"Comic Sans MS\", \"Comic Sans\", cursive}#mermaid-1595335260692 .error-icon{fill:#522}#mermaid-1595335260692 .error-text{fill:#522;stroke:#522}#mermaid-1595335260692 .edge-thickness-normal{stroke-width:2px}#mermaid-1595335260692 .edge-thickness-thick{stroke-width:3.5px}#mermaid-1595335260692 .edge-pattern-solid{stroke-dasharray:0}#mermaid-1595335260692 .edge-pattern-dashed{stroke-dasharray:3}#mermaid-1595335260692 .edge-pattern-dotted{stroke-dasharray:2}#mermaid-1595335260692 .marker{fill:#333}#mermaid-1595335260692 .marker.cross{stroke:#333}\n\n:root { --mermaid-font-family: \"trebuchet ms\", verdana, arial;}"),Object(i.mdx)("style",{parentName:"svg"},'#mermaid-1595335260692 {\n    color: rgb(0, 0, 0);\n    font: 16px "trebuchet ms", verdana, arial;\n  }'),Object(i.mdx)("g",{parentName:"svg"},Object(i.mdx)("g",Object.assign({parentName:"g"},{className:"output"}),Object(i.mdx)("g",Object.assign({parentName:"g"},{className:"clusters"})),Object(i.mdx)("g",Object.assign({parentName:"g"},{className:"edgePaths"}),Object(i.mdx)("g",Object.assign({parentName:"g"},{className:"edgePath LS-A LE-B",id:"L-A-B",style:{opacity:"1"}}),Object(i.mdx)("path",Object.assign({parentName:"g"},{className:"path",d:"M103.92,70L171.5,39L247.5,39",markerEnd:"url(#arrowhead15)",style:{fill:"none"}})),Object(i.mdx)("defs",{parentName:"g"},Object(i.mdx)("marker",Object.assign({parentName:"defs"},{id:"arrowhead15",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"}),Object(i.mdx)("path",Object.assign({parentName:"marker"},{d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}}))))),Object(i.mdx)("g",Object.assign({parentName:"g"},{className:"edgePath LS-A LE-C",id:"L-A-C",style:{opacity:"1"}}),Object(i.mdx)("path",Object.assign({parentName:"g"},{className:"path",d:"M103.92,108L171.5,139L226,139",markerEnd:"url(#arrowhead16)",style:{fill:"none"}})),Object(i.mdx)("defs",{parentName:"g"},Object(i.mdx)("marker",Object.assign({parentName:"defs"},{id:"arrowhead16",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"}),Object(i.mdx)("path",Object.assign({parentName:"marker"},{d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}}))))),Object(i.mdx)("g",Object.assign({parentName:"g"},{className:"edgePath LS-B LE-D",id:"L-B-D",style:{opacity:"1"}}),Object(i.mdx)("path",Object.assign({parentName:"g"},{className:"path",d:"M309.5,39L356,39L403.1231548842124,67.87684358990862",markerEnd:"url(#arrowhead17)",style:{fill:"none"}})),Object(i.mdx)("defs",{parentName:"g"},Object(i.mdx)("marker",Object.assign({parentName:"defs"},{id:"arrowhead17",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"}),Object(i.mdx)("path",Object.assign({parentName:"marker"},{d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}}))))),Object(i.mdx)("g",Object.assign({parentName:"g"},{className:"edgePath LS-C LE-D",id:"L-C-D",style:{opacity:"1"}}),Object(i.mdx)("path",Object.assign({parentName:"g"},{className:"path",d:"M331,139L356,139L403.12315678131347,111.12315525543461",markerEnd:"url(#arrowhead18)",style:{fill:"none"}})),Object(i.mdx)("defs",{parentName:"g"},Object(i.mdx)("marker",Object.assign({parentName:"defs"},{id:"arrowhead18",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"}),Object(i.mdx)("path",Object.assign({parentName:"marker"},{d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}})))))),Object(i.mdx)("g",Object.assign({parentName:"g"},{className:"edgeLabels"}),Object(i.mdx)("g",Object.assign({parentName:"g"},{className:"edgeLabel",transform:"translate(171.5,39)",style:{opacity:"1"}}),Object(i.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-29.5,-9)",className:"label"}),Object(i.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",width:"59",height:"18",style:{fill:"#e8e8e8"}})),Object(i.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"59",height:"18"}),Object(i.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),Object(i.mdx)("span",Object.assign({parentName:"div"},{id:"L-L-A-B",className:"edgeLabel L-LS-A' L-LE-B"}),"Link text"))))),Object(i.mdx)("g",Object.assign({parentName:"g"},{className:"edgeLabel",transform:"",style:{opacity:"1"}}),Object(i.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(0,0)",className:"label"}),Object(i.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",width:"0",height:"0",style:{fill:"#e8e8e8"}})),Object(i.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"0",height:"0"}),Object(i.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),Object(i.mdx)("span",Object.assign({parentName:"div"},{id:"L-L-A-C",className:"edgeLabel L-LS-A' L-LE-C"})))))),Object(i.mdx)("g",Object.assign({parentName:"g"},{className:"edgeLabel",transform:"",style:{opacity:"1"}}),Object(i.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(0,0)",className:"label"}),Object(i.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",width:"0",height:"0",style:{fill:"#e8e8e8"}})),Object(i.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"0",height:"0"}),Object(i.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),Object(i.mdx)("span",Object.assign({parentName:"div"},{id:"L-L-B-D",className:"edgeLabel L-LS-B' L-LE-D"})))))),Object(i.mdx)("g",Object.assign({parentName:"g"},{className:"edgeLabel",transform:"",style:{opacity:"1"}}),Object(i.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(0,0)",className:"label"}),Object(i.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",width:"0",height:"0",style:{fill:"#e8e8e8"}})),Object(i.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"0",height:"0"}),Object(i.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),Object(i.mdx)("span",Object.assign({parentName:"div"},{id:"L-L-C-D",className:"edgeLabel L-LS-C' L-LE-D"}))))))),Object(i.mdx)("g",Object.assign({parentName:"g"},{className:"nodes"}),Object(i.mdx)("g",Object.assign({parentName:"g"},{className:"node default",id:"A",transform:"translate(62.5,89)",style:{opacity:"1"}}),Object(i.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",x:"-54.5",y:"-19",width:"109",height:"38",className:"label-container"})),Object(i.mdx)("g",Object.assign({parentName:"g"},{className:"label",transform:"translate(0,0)"}),Object(i.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-44.5,-9)"}),Object(i.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"89",height:"18"}),Object(i.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),"Square Rect"))))),Object(i.mdx)("g",Object.assign({parentName:"g"},{className:"node default",id:"B",transform:"translate(278.5,39)",style:{opacity:"1"}}),Object(i.mdx)("circle",Object.assign({parentName:"g"},{x:"-31",y:"-19",r:"31",className:"label-container"})),Object(i.mdx)("g",Object.assign({parentName:"g"},{className:"label",transform:"translate(0,0)"}),Object(i.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-21,-9)"}),Object(i.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"42",height:"18"}),Object(i.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),"Circle"))))),Object(i.mdx)("g",Object.assign({parentName:"g"},{className:"node default",id:"C",transform:"translate(278.5,139)",style:{opacity:"1"}}),Object(i.mdx)("rect",Object.assign({parentName:"g"},{rx:"5",ry:"5",x:"-52.5",y:"-19",width:"105",height:"38",className:"label-container"})),Object(i.mdx)("g",Object.assign({parentName:"g"},{className:"label",transform:"translate(0,0)"}),Object(i.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-42.5,-9)"}),Object(i.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"85",height:"18"}),Object(i.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),"Round Rect"))))),Object(i.mdx)("g",Object.assign({parentName:"g"},{className:"node default",id:"D",transform:"translate(438.1500015258789,89)",style:{opacity:"1"}}),Object(i.mdx)("polygon",Object.assign({parentName:"g"},{points:"57.15,0 114.3,-57.15 57.15,-114.3 0,-57.15",transform:"translate(-57.15,57.15)",className:"label-container"})),Object(i.mdx)("g",Object.assign({parentName:"g"},{className:"label",transform:"translate(0,0)"}),Object(i.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-34.5,-9)"}),Object(i.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"69",height:"18"}),Object(i.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),"Rhombus")))))))))))}l.isMDXComponent=!0},"3dLD":function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a("q1tI"),i=a.n(r),m=a("8FPV"),n=a("Wbzz");function s(){return i.a.createElement(n.StaticQuery,{query:"4277382034",render:function(e){return i.a.createElement(l,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})}})}function d(e){var t=e.item;return t.href?i.a.createElement("li",{key:t.name},i.a.createElement(n.Link,{to:t.href},t.name)):i.a.createElement("li",{key:t.name},t.name," (future)")}function l(e){var t=e.items,a=e.isSublist,r=void 0!==a&&a;return t.length?i.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?i.a.createElement("li",{key:e.name},r&&i.a.createElement(d,{item:e}),!r&&i.a.createElement("h2",{className:"heading-level-4"},e.name),i.a.createElement(l,{isSublist:!0,items:e.items})):"componentList"===e.query?i.a.createElement("li",{key:e.name},r&&i.a.createElement(d,{item:e}),!r&&i.a.createElement("h2",{className:"heading-level-4"},e.name),i.a.createElement(s,null)):i.a.createElement(d,{item:e,key:e.name})}))):null}var o=a("MEl4"),c=a.n(o);function f(e){var t=e.location,a=c.a.sections.find((function(e){return t.pathname.includes(e.href)}));return a?i.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},i.a.createElement("div",{className:"site-c-sidenav"},i.a.createElement(l,{items:a.items}))):null}function g(e){var t=e.componentToMatch;return i.a.createElement(n.StaticQuery,{query:"4193446859",render:function(e){return e.components.edges.map((function(e){return t===e.node.context.name.toLowerCase()?i.a.createElement(b,{item:{name:e.node.context.name}}):""}))}})}function b(e){var t=e.item,a="https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master/packages/formation-react/src/components/"+t.name+"/"+t.name+".mdx";return i.a.createElement(n.Link,{to:a},"Edit this page on GitHub")}function p(e){var t=e.pathname.split("/");return i.a.createElement(g,{componentToMatch:t[3]})}var h=function(e){var t=e.pathname.replace("/veteran-facing-services-tools","");return t.length>0&&"/"===t.charAt(t.length-1)&&(t=t.substring(0,t.length-1)),t};function x(e){var t=e.location,a="https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master/packages/documentation/src/pages"+h(t)+function(e){var t=h(e),a=c.a.sections.find((function(e){return t.includes(e.href)})),r=c.a.sections.find((function(e){return e.href===t}));if(null==r?void 0:r.indexmdx)return"/index";if((null==a?void 0:a.items)&&a.items.map((function(e){return Array.isArray(e.items)?e.items.find((function(e){return e.href===t})):null})).map((function(e){if((null==e?void 0:e.href)&&e.href===t)return!!(null==e?void 0:e.indexmdx)})).find((function(e){return e})))return"/index";return""}(t)+".mdx";return i.a.createElement(n.Link,{to:a},"Edit this page on GitHub")}function k(e){var t=e.location;return i.a.createElement("div",null,i.a.createElement("p",null,i.a.createElement("br",null),i.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",function(e){if(e.pathname.includes("components")){var t=e.pathname.replace("/veteran-facing-services-tools","");return i.a.createElement(p,{pathname:t})}return i.a.createElement(x,{location:e})}(t)))}function u(e){var t=e.children,a=e.location;return i.a.createElement(m.a,{location:a},i.a.createElement("div",{className:"vads-l-row"},i.a.createElement(f,{location:a}),i.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,i.a.createElement(k,{location:a}))))}}}]);
//# sourceMappingURL=component---src-pages-documentation-guide-add-graphs-to-mdx-mdx-db52e5701a93c63b5ca1.js.map