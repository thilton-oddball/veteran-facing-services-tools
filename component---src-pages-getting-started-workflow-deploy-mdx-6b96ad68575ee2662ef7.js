(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{347:function(e,n,a){"use strict";a.r(n),a.d(n,"default",function(){return c}),a.d(n,"_frontmatter",function(){return l});a(11),a(9),a(6),a(19),a(10);var t=a(2),o=a.n(t),m=a(3),r=a(396);var s={},c=function(e){var n,a;function t(n){var a;return(a=e.call(this,n)||this).layout=r.a,a}return a=e,(n=t).prototype=Object.create(a.prototype),n.prototype.constructor=n,n.__proto__=a,t.prototype.render=function(){var e=this.props,n=e.components,a=function(e,n){if(null==e)return{};var a,t,o={},m=Object.keys(e);for(t=0;t<m.length;t++)a=m[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return o.a.createElement(m.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},s,a),components:n},o.a.createElement("h1",{id:"deploy"},"Deploy"),o.a.createElement(m.MDXTag,{name:"p",components:n},"Code goes through several steps to get to production. This document describes this process. It should also be noted that this is the same flow for both content and code changes."),o.a.createElement("h2",{id:"automated-deployment-schedule"},"Automated deployment schedule"),o.a.createElement(m.MDXTag,{name:"table",components:n},o.a.createElement(m.MDXTag,{name:"thead",components:n,parentName:"table"},o.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"thead"},o.a.createElement(m.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Application"),o.a.createElement(m.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Branch"),o.a.createElement(m.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Changes in by"),o.a.createElement(m.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Deployment Start"),o.a.createElement(m.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Release History"))),o.a.createElement(m.MDXTag,{name:"tbody",components:n,parentName:"table"},o.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"vets-website"),o.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"master"),o.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"2:00pm ET M-F"),o.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"3:00pm ET M-F"),o.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"td",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/releases"}},"https://github.com/department-of-veterans-affairs/vets-website/releases"))),o.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"vets-api"),o.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"master"),o.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"2:00pm ET M-F"),o.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"3:00pm ET M-F"),o.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"td",props:{href:"https://github.com/department-of-veterans-affairs/vets-api/releases"}},"https://github.com/department-of-veterans-affairs/vets-api/releases"))))),o.a.createElement("h2",{id:"overview"},"Overview"),o.a.createElement(m.MDXTag,{name:"p",components:n},"Jenkins performs the following tasks after a pull request is merged into ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"master")),o.a.createElement(m.MDXTag,{name:"ol",components:n},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"li"},"Build")," ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"master")," branch to create an deployment artifact (.tar file)"),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"li"},"Deploy")," to development and staging using deployment artifact"),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://help.github.com/en/articles/creating-releases"}},"Create a release")," in GitHub from master, tag artifacts of that commit SHA hash with release name"),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"li"},"Deploy")," to production using deployment artifact according to automated deployment schedule")),o.a.createElement(m.MDXTag,{name:"p",components:n},o.a.createElement(m.MDXTag,{name:"em",components:n,parentName:"p"},"A big assumption in this process is that the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"em"},"master")," should always be deployable. As such, the deployment to the staging environment is configured to happen automatically and can be used to see what something would look like in a production-like environment for any kind of manual testing/verification.")),o.a.createElement("h2",{id:"process-details"},"Process details"),o.a.createElement(m.MDXTag,{name:"ul",components:n},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://help.github.com/en/articles/creating-releases"}},"Create a release")," in GitHub from master, tag artifacts of that commit SHA hash with release name")),o.a.createElement(m.MDXTag,{name:"p",components:n},"Every work day at the configured time a ",o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"http://jenkins.vetsgov-internal/job/deploys/job/vets-gov-automerge/"}},"Jenkins automerge job")," sends a link to the #vetsgov-engineers Slack channel with a diff between the last release and the most recent changes in ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"master"),". This commit reference is stored to ensure the diff and released version is deterministic."),o.a.createElement(m.MDXTag,{name:"p",components:n},"After a time has elapsed ( currently set to 60m ) release is created at the reference from above."),o.a.createElement(m.MDXTag,{name:"ul",components:n},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"li"},"Deploy")," to production using deployment artifacts")),o.a.createElement(m.MDXTag,{name:"p",components:n},"From here, Jenkins can kickoff a production deployment. After the deployment occurs, the normal site monitoring infrastructure will be used to valide it is working. As this process is automatic any new features should have monitoring in place before, or as a part of their deployment"),o.a.createElement("h2",{id:"rollbacks"},"Rollbacks"),o.a.createElement(m.MDXTag,{name:"p",components:n},"If a production deployment introduces issues that affect Service Level Objectives (SLOs) established for the project, the DevOps team may restore service to users by rolling back the deployment. This is accomplished by triggering a new deploy job in Jenkins using a previous release tag."),o.a.createElement(m.MDXTag,{name:"p",components:n},"The ",o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"p"},"use of hotfixes is discouraged"),", but may be useful in an emergency situation when ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"master")," has significantly deviated from the release and a fix to the failed production release is critical. To create a hotfix, create a branch from the last stable release tag, make changes necessary (with review), create a new release tag following the correct naming scheme, and trigger a deploy in Jenkins with the release name as a parameter."),o.a.createElement(m.MDXTag,{name:"p",components:n},"If SLOs are not affected and a fix is not critical, no rollback will be issued. Instead the fix should be applied through the standard development workflow."),o.a.createElement("h2",{id:"manual-deployment"},"Manual deployment"),o.a.createElement(m.MDXTag,{name:"p",components:n},"Two out-of-cycle deploys are supported in Jenkins:"),o.a.createElement(m.MDXTag,{name:"ul",components:n},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"partial deploy including only static page changes (",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"vagov-content")," and ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Drupal"),")"),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"full deploy of VA.gov client app and static pages")),o.a.createElement("h3",{id:"before-deploying"},"Before deploying"),o.a.createElement(m.MDXTag,{name:"ul",components:n},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"Wait for ",o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"li"},"Jenkins")," to ",o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"li"},"build the change")," in ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"vets-website")),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"Builds status can be viewed ",o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"http://jenkins.vetsgov-internal/blue/organizations/jenkins/testing%2Fvets-website/activity?branch=master"}},"here"),". ",o.a.createElement(m.MDXTag,{name:"em",components:n,parentName:"li"},"Requires SOCKS proxy. See ",o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"em",props:{href:"/getting-started/internal-tools"}},"Accessing internal tools"))),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"If this build fails, you may need to log into Jenkins and restart it")),o.a.createElement("h3",{id:"partial-deploy--static-page-changes-only"},"Partial deploy- static page changes only"),o.a.createElement(m.MDXTag,{name:"ol",components:n},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},o.a.createElement(m.MDXTag,{name:"p",components:n,parentName:"li"},"Start a deploy job"),o.a.createElement(m.MDXTag,{name:"ul",components:n,parentName:"li"},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"Log into Jenkins ",o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"http://jenkins.vetsgov-internal/job/deploys/job/vets-gov-autodeploy-vets-website/"}},"here")),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"Click ",o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"li"},"Build with Parameters")),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"Set the ",o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"li"},"release_wait")," option to ",o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"li"},"5")," minutes"),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"Check ",o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"li"},"use_latest_release")," <-- ",o.a.createElement(m.MDXTag,{name:"em",components:n,parentName:"li"},"important")),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"Click ",o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"li"},"Build")),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"Verify commits in ",o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"li"},"deployment notification"))),o.a.createElement(m.MDXTag,{name:"p",components:n,parentName:"li"},o.a.createElement(m.MDXTag,{name:"em",components:n,parentName:"p"},"In Slack channel ",o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"em"},"#vetsgov-engineers"),", Jenkins will include a link that shows the exact commits being released in the ",o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"em"},"deploy notification"),"."))),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},o.a.createElement(m.MDXTag,{name:"p",components:n,parentName:"li"},o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"p"},"Verify")," changes in ",o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"p"},"production")," once the build finishes"))),o.a.createElement("h3",{id:"full-deploy-of-vagov-client-app"},"Full deploy of VA.gov client app"),o.a.createElement(m.MDXTag,{name:"ol",components:n},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},"Verify that your changes are committed and that the changes since the last deploy are safe to deploy:",o.a.createElement(m.MDXTag,{name:"ul",components:n,parentName:"li"},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"li"},"Last deployment time"),": You can check the build ",o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"http://jenkins.vetsgov-internal/job/deploys/job/vets-gov-autodeploy-vets-website/"}},"history")," for the time of the last deploy (usually daily at 2pm EST)"),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"li"},"Commit history"),": ",o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/commits/master"}},"Look")," for commits after the last deploy and verify they're production ready.")))),o.a.createElement(m.MDXTag,{name:"p",components:n},o.a.createElement(m.MDXTag,{name:"em",components:n,parentName:"p"},"You may need to contact the developers of those commits to verify.")),o.a.createElement(m.MDXTag,{name:"ol",components:n,props:{start:2}},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},o.a.createElement(m.MDXTag,{name:"p",components:n,parentName:"li"},"Start a deploy job"),o.a.createElement(m.MDXTag,{name:"ul",components:n,parentName:"li"},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"Log into Jenkins ",o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"http://jenkins.vetsgov-internal/job/deploys/job/vets-gov-autodeploy-vets-website/"}},"here")),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"Click ",o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"li"},"Build with Parameters")),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"Set the ",o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"li"},"release_wait")," option to ",o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"li"},"5")," minutes"),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"Uncheck ",o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"li"},"use_latest_release")," <-- ",o.a.createElement(m.MDXTag,{name:"em",components:n,parentName:"li"},"important")),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"Click ",o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"li"},"Build")),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"Verify commits in ",o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"li"},"deployment notification"))),o.a.createElement(m.MDXTag,{name:"p",components:n,parentName:"li"},o.a.createElement(m.MDXTag,{name:"em",components:n,parentName:"p"},"In Slack channel ",o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"em"},"#vetsgov-engineers"),", Jenkins will include a link that shows the exact commits being released in the ",o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"em"},"deploy notification"),"."))),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},o.a.createElement(m.MDXTag,{name:"p",components:n,parentName:"li"},o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"p"},"Verify")," changes in ",o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"p"},"production")," once the build finishes"))))},t}(o.a.Component),l={}},395:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/promobanner/",context:{source:"component",name:"PromoBanner"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}}]}}}},396:function(e,n,a){"use strict";var t=a(2),o=a.n(t),m=a(30),r=a.n(m),s=a(399),c=(a(129),a(130),a(92),a(7),a(395)),l=a(397);function p(){return o.a.createElement(l.b,{query:"157057713",render:function(e){return o.a.createElement(g,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:c})}function i(e){var n=e.item;return n.href?o.a.createElement("li",{key:n.name},o.a.createElement(l.a,{to:n.href},n.name)):o.a.createElement("li",{key:n.name},n.name," (future)")}function g(e){var n=e.items,a=e.isSublist,t=void 0!==a&&a;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},t&&o.a.createElement(i,{item:e}),!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(g,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},t&&o.a.createElement(i,{item:e}),!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(p,null)):o.a.createElement(i,{item:e,key:e.name})})):null}var d=a(398),u=a.n(d);function h(e){var n=e.location,a=u.a.sections.find(function(e){return n.pathname.includes(e.href)});return a?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(g,{items:a.items}))):null}function E(e){var n=e.children,a=e.location;return o.a.createElement(s.a,{location:a},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:a}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}a.d(n,"a",function(){return E}),E.propTypes={children:r.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-getting-started-workflow-deploy-mdx-6b96ad68575ee2662ef7.js.map