(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{344:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return s}),t.d(n,"_frontmatter",function(){return i});t(11),t(9),t(6),t(19),t(10);var a=t(2),o=t.n(a),r=t(3),m=t(396);var c={},s=function(e){var n,t;function a(n){var t;return(t=e.call(this,n)||this).layout=m.a,t}return t=e,(n=a).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t,a.prototype.render=function(){var e=this.props,n=e.components,t=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},c,t),components:n},o.a.createElement("h2",{id:"making-updates-to-formation"},"Making updates to formation"),o.a.createElement(r.MDXTag,{name:"p",components:n},"You can find a detailed guide on contributing to formation at ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://dev-design.va.gov/documentation/contributing-to-formation"}},"https://dev-design.va.gov/documentation/contributing-to-formation")),o.a.createElement("h2",{id:"making-updates-to-formation-react"},"Making updates to formation-react"),o.a.createElement(r.MDXTag,{name:"ol",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},"Components should be created and tested in vets-website first before being moved over to formation-react"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},"Transfer component to formation-react"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},"Test the formation-react version of the component in vets-website before publishing ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"/veteran-facing-services-tools/previewing-changes"}},"Check out these instructions on how to do so")),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},"Write component tests"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"/veteran-facing-services-tools/documentation-guide/doc-page"}},"Create your react component documentation"))),o.a.createElement("h2",{id:"publishing-module-to-npm"},"Publishing Module to NPM"),o.a.createElement(r.MDXTag,{name:"p",components:n},"After you've tested and previewed your changes locally it's time to publish a new version of the package to NPM."),o.a.createElement(r.MDXTag,{name:"blockquote",components:n},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"blockquote"},"Prerequisite: you must be ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://docs.npmjs.com/getting-started/publishing-npm-packages"}},"registered"),' with NPM, be a member of the "department-of-veterans-affairs" organization, and have the appropriate organization role to publish an update to the module. Verify that you are logged in correctly by running ',o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"npm whoami"),'. If you are unable to publish an update, confirm you are a member of the "department-of-veterans-affairs" organization by going to your Profile page on ',o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://www.npmjs.com"}},"npmjs.com"),".")),o.a.createElement("h3",{id:"1-submit-your-pr"},"1. Submit your PR"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Submit a PR that includes all of your code changes. This should include the bump in versions you need, which you can change directly in the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"package.json")," files for the modules that are changing. Modules like ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"formation-react")," depend on ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"formation")," via a peer dependency, so you may need to update that as well. We try to keep the peer dependency loose and only update it for breaking changes."),o.a.createElement(r.MDXTag,{name:"p",components:n},"You'll need to choose what type of version update to make:"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"patch")," - for bug fixes and minor changes"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"minor")," - for new features that don't break current features or require changes in consuming applications"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"major")," - for backwards breaking changes")),o.a.createElement(r.MDXTag,{name:"blockquote",components:n},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"blockquote"},"If you are unsure of what to pick, do a major version update on modules that are changing.")),o.a.createElement("h3",{id:"2-merge-your-pr-to-master"},"2. Merge your PR to master"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Once your changes are approved, squash merge them to master. Also, if your change is a breaking change, please prefix your commit message with ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"BREAKING CHANGE:"),". Also keep in mind that your commit messages will be in a changelog that people use to figure out what has changed between releases, so make sure it accurately describes your changes."),o.a.createElement("h3",{id:"3-build-and-publish"},"3. Build and publish"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Checkout the master branch"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Run ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"yarn build")),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"For each module you need to publish, switch to its folder in ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"packages/")," and run ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"npm publish"),".")),o.a.createElement("h3",{id:"4-create-a-release"},"4. Create a release"),o.a.createElement(r.MDXTag,{name:"p",components:n},"You will need a github ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line"}},"personal access token"),".\nThis should be set as ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"GITHUB_API_KEY")," in your environment variable."),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Navigate to the package folder"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Run the release script",o.a.createElement(r.MDXTag,{name:"pre",components:n,parentName:"li"},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"$ yarn release\n"))),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Once the script has succeeded, go to the link provided in the console"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Edit the release and add any relevant information.")),o.a.createElement("h3",{id:"5-update-consuming-apps"},"5. Update consuming apps"),o.a.createElement(r.MDXTag,{name:"p",components:n},"The last step is to update the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"package.json")," files of consuming apps to use the latest version of ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"@department-of-veterans-affairs/formation")," (or ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"formation-react"),"). For example, if you are working with the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"vets-website")," project, open the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"vets-website"),"'s ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"package.json")," to update the version number of the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"@department-of-veterans-affairs/formation")," entry listed in the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"dependencies")," section. The version number should match what you just published to NPM."))},a}(o.a.Component),i={}},395:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/promobanner/",context:{source:"component",name:"PromoBanner"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}}]}}}},396:function(e,n,t){"use strict";var a=t(2),o=t.n(a),r=t(30),m=t.n(r),c=t(399),s=(t(129),t(130),t(92),t(7),t(395)),i=t(397);function p(){return o.a.createElement(i.b,{query:"157057713",render:function(e){return o.a.createElement(u,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:s})}function l(e){var n=e.item;return n.href?o.a.createElement("li",{key:n.name},o.a.createElement(i.a,{to:n.href},n.name)):o.a.createElement("li",{key:n.name},n.name," (future)")}function u(e){var n=e.items,t=e.isSublist,a=void 0!==t&&t;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},a&&o.a.createElement(l,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(u,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},a&&o.a.createElement(l,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(p,null)):o.a.createElement(l,{item:e,key:e.name})})):null}var d=t(398),g=t.n(d);function h(e){var n=e.location,t=g.a.sections.find(function(e){return n.pathname.includes(e.href)});return t?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(u,{items:t.items}))):null}function f(e){var n=e.children,t=e.location;return o.a.createElement(c.a,{location:t},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:t}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}t.d(n,"a",function(){return f}),f.propTypes={children:m.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-getting-started-common-tasks-updating-formation-mdx-7447b2ee2d6cb98428ce.js.map