(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{300:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return u}),t.d(n,"_frontmatter",function(){return d});t(42);var a=t(43),o=t.n(a),r=t(3),m=t.n(r),c=t(2),s=t.n(c),p=t(4),l=t(347),i={},u=function(e){function n(n){var t;return(t=e.call(this,n)||this).layout=l.a,t}return m()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,t=o()(e,["components"]);return s.a.createElement(p.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},i,t),components:n},s.a.createElement("h1",{id:"debugging-tests"},"Debugging tests"),s.a.createElement(p.MDXTag,{name:"p",components:n},s.a.createElement(p.MDXTag,{name:"strong",components:n,parentName:"p"},s.a.createElement(p.MDXTag,{name:"em",components:n,parentName:"strong"}," Unit Tests "))),s.a.createElement(p.MDXTag,{name:"ul",components:n},s.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(p.MDXTag,{name:"p",components:n,parentName:"li"},"You can put a console.log in your test code. When you run the test, the output will be in the command line.")),s.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(p.MDXTag,{name:"p",components:n,parentName:"li"},"Use Chrome devtools to debug unit tests"),s.a.createElement(p.MDXTag,{name:"ol",components:n,parentName:"li"},s.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ol"},s.a.createElement(p.MDXTag,{name:"p",components:n,parentName:"li"},"Go to ",s.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"chrome://inspect/"}},"chrome://inspect/"),".")),s.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ol"},s.a.createElement(p.MDXTag,{name:"p",components:n,parentName:"li"},"Add a ",s.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"debugger")," statement in your test code and if you want to run only your test add the ",s.a.createElement(p.MDXTag,{name:"strong",components:n,parentName:"p"},".only")," on your test like so. Make sure to remove the ",s.a.createElement(p.MDXTag,{name:"strong",components:n,parentName:"p"},".only")," once you are done."),s.a.createElement(p.MDXTag,{name:"pre",components:n,parentName:"li"},s.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"  it.only('testing something', () => {\n    debugger\n\n    expect(value).to.eq(true);\n  })\n"))),s.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ol"},s.a.createElement(p.MDXTag,{name:"p",components:n,parentName:"li"},"run in the terminal"),s.a.createElement(p.MDXTag,{name:"pre",components:n,parentName:"li"},s.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"  $ BABEL_ENV=test node_modules/.bin/mocha --inspect-brk --opts src/platform/testing/unit/mocha.opts --recursive '{test,src}/**/*.unit.spec.js?(x)' src/platform/testing/unit/helper.js\n"))),s.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ol"},s.a.createElement(p.MDXTag,{name:"p",components:n,parentName:"li"},"Go to your Node Chrome Developer Tools. Under ",s.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Remote Target")," you should see your test running. Click on the link where your test is running to open the debugger tool.")),s.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ol"},s.a.createElement(p.MDXTag,{name:"p",components:n,parentName:"li"},"You will want to press the debugger play button to start the program. It will initially pause on the first line of code.")),s.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ol"},s.a.createElement(p.MDXTag,{name:"p",components:n,parentName:"li"},"It might take awhile for the tests to setup, just be patient and eventually it will run.")),s.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ol"},s.a.createElement(p.MDXTag,{name:"p",components:n,parentName:"li"},"Once the test runs, your code should break at your debugger statement.")))),s.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(p.MDXTag,{name:"p",components:n,parentName:"li"},"VSCode's debugging tool for unit tests"),s.a.createElement(p.MDXTag,{name:"ul",components:n,parentName:"li"},s.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},"Add this ",s.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Mocha Tests")," configuration to your ",s.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"li"},".vscode/launch.json")," file",s.a.createElement(p.MDXTag,{name:"pre",components:n,parentName:"li"},s.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},'  {\n    "version": "0.2.0",\n    "configurations": [\n        {\n            "type": "node",\n            "request": "launch",\n            "name": "Mocha Tests",\n            "env": {"BABEL_ENV": "test"},\n            "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/mocha",\n            "runtimeArgs": [\n                "--inspect",\n                "--opts",\n                "${workspaceFolder}/src/platform/testing/unit/mocha.opts",\n                "--recursive",\n                "${workspaceFolder}/{test,src}/**/*.unit.spec.js?(x)",\n                "${workspaceFolder}/src/platform/testing/unit/helper.js"\n            ],\n            "port": 9229\n        }\n    ]\n  }\n'))),s.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},"Now you can add breakpoints or debugger statements to debug your code through the VSCode debugger tools.")))),s.a.createElement(p.MDXTag,{name:"p",components:n},"*** End to End tests"),s.a.createElement(p.MDXTag,{name:"ul",components:n},s.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(p.MDXTag,{name:"p",components:n,parentName:"li"},"It's possible to set an infinite pause (",s.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".pause()"),") in the test code and then see what's happening at a given point in the browser where the test is running."),s.a.createElement(p.MDXTag,{name:"pre",components:n,parentName:"li"},s.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"  client\n    .openUrl('http://localhost:3000')\n    .waitForElementVisible('body', Timeouts.normal)\n    .pause()\n    .click('.submit_button')\n"))),s.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(p.MDXTag,{name:"p",components:n,parentName:"li"},"Using Node Chrome DevTools. You can add a (",s.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".perform"),") method and either console.log or add a debugger statement to debug your code in the callback function."),s.a.createElement(p.MDXTag,{name:"ol",components:n,parentName:"li"},s.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ol"},s.a.createElement(p.MDXTag,{name:"p",components:n,parentName:"li"},"add a perform method in your code."),s.a.createElement(p.MDXTag,{name:"pre",components:n,parentName:"li"},s.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"client\n  .openUrl('http://localhost:3000')\n  .waitForElementVisible('body', Timeouts.normal)\n  .perform(() => {\n    console.log(testData);\n\n    debugger\n  })\n  .click('.submit_button')\n"))),s.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ol"},s.a.createElement(p.MDXTag,{name:"p",components:n,parentName:"li"},"open up ",s.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"chrome://inspect"}},"chrome://inspect")," in your browser.")),s.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ol"},s.a.createElement(p.MDXTag,{name:"p",components:n,parentName:"li"},"In your terminal run. You can pass in a specific file path to test after the ",s.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"nightwatch.js")," or leave it blank to run all tests."),s.a.createElement(p.MDXTag,{name:"pre",components:n,parentName:"li"},s.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"$ BABEL_ENV=test WEB_PORT=3001 node --inspect-brk node_modules/nightwatch/bin/runner.js -c config/nightwatch.js [optional file to test]\n"))),s.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ol"},s.a.createElement(p.MDXTag,{name:"p",components:n,parentName:"li"},"Go to your Node Chrome Developer Tools. Under ",s.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Remote Target")," you should see your test running. Click on the link where your test is running to open the debugger tool.")),s.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ol"},s.a.createElement(p.MDXTag,{name:"p",components:n,parentName:"li"},"You will want to press the debugger play button to start the program. It will initially pause on the first line of code.")),s.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ol"},s.a.createElement(p.MDXTag,{name:"p",components:n,parentName:"li"},"after the program starts it should pause at your debugger statement or you should see your console.logs in the console."))))))},n}(s.a.Component),d={}},346:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}}]}}}},347:function(e,n,t){"use strict";var a=t(2),o=t.n(a),r=t(13),m=t.n(r),c=t(350),s=(t(133),t(134),t(135),t(17),t(346)),p=t(348);function l(){return o.a.createElement(p.b,{query:"157057713",render:function(e){return o.a.createElement(u,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:s})}function i(e){var n=e.item;return n.href?o.a.createElement("li",{key:n.name},o.a.createElement(p.a,{to:n.href},n.name)):o.a.createElement("li",{key:n.name},n.name," (future)")}function u(e){var n=e.items,t=e.isSublist,a=void 0!==t&&t;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},a&&o.a.createElement(i,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(u,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},a&&o.a.createElement(i,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):o.a.createElement(i,{item:e,key:e.name})})):null}var d=t(349),g=t.n(d);function h(e){var n=e.location,t=g.a.sections.find(function(e){return n.pathname.includes(e.href)});return t?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(u,{items:t.items}))):null}function E(e){var n=e.children,t=e.location;return o.a.createElement(c.a,{location:t},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:t}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}t.d(n,"a",function(){return E}),E.propTypes={children:m.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-getting-started-common-tasks-debugging-tests-mdx-a1ac1a10122ce50ffd0b.js.map