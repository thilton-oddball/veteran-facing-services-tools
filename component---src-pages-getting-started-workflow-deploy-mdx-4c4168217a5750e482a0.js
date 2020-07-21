(window.webpackJsonp=window.webpackJsonp||[]).push([[45,50],{"3dLD":function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var n=a("q1tI"),i=a.n(n),r=a("8FPV"),l=a("Wbzz");function m(){return i.a.createElement(l.StaticQuery,{query:"4277382034",render:function(e){return i.a.createElement(o,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})}})}function s(e){var t=e.item;return t.href?i.a.createElement("li",{key:t.name},i.a.createElement(l.Link,{to:t.href},t.name)):i.a.createElement("li",{key:t.name},t.name," (future)")}function o(e){var t=e.items,a=e.isSublist,n=void 0!==a&&a;return t.length?i.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?i.a.createElement("li",{key:e.name},n&&i.a.createElement(s,{item:e}),!n&&i.a.createElement("h2",{className:"heading-level-4"},e.name),i.a.createElement(o,{isSublist:!0,items:e.items})):"componentList"===e.query?i.a.createElement("li",{key:e.name},n&&i.a.createElement(s,{item:e}),!n&&i.a.createElement("h2",{className:"heading-level-4"},e.name),i.a.createElement(m,null)):i.a.createElement(s,{item:e,key:e.name})}))):null}var c=a("MEl4"),d=a.n(c);function p(e){var t=e.location,a=d.a.sections.find((function(e){return t.pathname.includes(e.href)}));return a?i.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},i.a.createElement("div",{className:"site-c-sidenav"},i.a.createElement(o,{items:a.items}))):null}function u(e){var t=e.componentToMatch;return i.a.createElement(l.StaticQuery,{query:"4193446859",render:function(e){return e.components.edges.map((function(e){return t===e.node.context.name.toLowerCase()?i.a.createElement(b,{item:{name:e.node.context.name}}):""}))}})}function b(e){var t=e.item,a="https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master/packages/formation-react/src/components/"+t.name+"/"+t.name+".mdx";return i.a.createElement(l.Link,{to:a},"Edit this page on GitHub")}function h(e){var t=e.pathname.split("/");return i.a.createElement(u,{componentToMatch:t[3]})}var j=function(e){var t=e.pathname.replace("/veteran-facing-services-tools","");return t.length>0&&"/"===t.charAt(t.length-1)&&(t=t.substring(0,t.length-1)),t};function g(e){var t=e.location,a="https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master/packages/documentation/src/pages"+j(t)+function(e){var t=j(e),a=d.a.sections.find((function(e){return t.includes(e.href)})),n=d.a.sections.find((function(e){return e.href===t}));if(null==n?void 0:n.indexmdx)return"/index";if((null==a?void 0:a.items)&&a.items.map((function(e){return Array.isArray(e.items)?e.items.find((function(e){return e.href===t})):null})).map((function(e){if((null==e?void 0:e.href)&&e.href===t)return!!(null==e?void 0:e.indexmdx)})).find((function(e){return e})))return"/index";return""}(t)+".mdx";return i.a.createElement(l.Link,{to:a},"Edit this page on GitHub")}function f(e){var t=e.location;return i.a.createElement("div",null,i.a.createElement("p",null,i.a.createElement("br",null),i.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",function(e){if(e.pathname.includes("components")){var t=e.pathname.replace("/veteran-facing-services-tools","");return i.a.createElement(h,{pathname:t})}return i.a.createElement(g,{location:e})}(t)))}function O(e){var t=e.children,a=e.location;return i.a.createElement(r.a,{location:a},i.a.createElement("div",{className:"vads-l-row"},i.a.createElement(p,{location:a}),i.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,i.a.createElement(f,{location:a}))))}},eJaJ:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return o}));var n=a("zLVn"),i=(a("q1tI"),a("7ljp")),r=a("3dLD"),l={},m={_frontmatter:l},s=r.a;function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.mdx)(s,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("h1",{id:"deploy"},"Deploy"),Object(i.mdx)("p",null,"Code goes through several steps to get to production. This document describes this process. It should also be noted that this is the same flow for both content and code changes."),Object(i.mdx)("h2",{id:"automated-deployment-schedule"},"Automated deployment schedule"),Object(i.mdx)("table",null,Object(i.mdx)("thead",{parentName:"table"},Object(i.mdx)("tr",{parentName:"thead"},Object(i.mdx)("th",Object.assign({parentName:"tr"},{align:null}),"Application"),Object(i.mdx)("th",Object.assign({parentName:"tr"},{align:null}),"Branch"),Object(i.mdx)("th",Object.assign({parentName:"tr"},{align:null}),"Changes in by"),Object(i.mdx)("th",Object.assign({parentName:"tr"},{align:null}),"Deployment Start"),Object(i.mdx)("th",Object.assign({parentName:"tr"},{align:null}),"Release History"))),Object(i.mdx)("tbody",{parentName:"table"},Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"vets-website"),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"master"),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"2:00pm ET M-F"),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"3:00pm ET M-F"),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(i.mdx)("a",Object.assign({parentName:"td"},{href:"https://github.com/department-of-veterans-affairs/vets-website/releases"}),"https://github.com/department-of-veterans-affairs/vets-website/releases"))),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"vets-api"),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"master"),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"2:00pm ET M-F"),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"3:00pm ET M-F"),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(i.mdx)("a",Object.assign({parentName:"td"},{href:"https://github.com/department-of-veterans-affairs/vets-api/releases"}),"https://github.com/department-of-veterans-affairs/vets-api/releases"))))),Object(i.mdx)("h2",{id:"overview"},"Overview"),Object(i.mdx)("p",null,"Jenkins performs the following tasks after a pull request is merged into ",Object(i.mdx)("inlineCode",{parentName:"p"},"master")),Object(i.mdx)("ol",null,Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("strong",{parentName:"li"},"Build")," ",Object(i.mdx)("inlineCode",{parentName:"li"},"master")," branch to create an deployment artifact (.tar file)"),Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("strong",{parentName:"li"},"Deploy")," to development and staging using deployment artifact"),Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://help.github.com/en/articles/creating-releases"}),"Create a release")," in GitHub from master, tag artifacts of that commit SHA hash with release name"),Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("strong",{parentName:"li"},"Deploy")," to production using deployment artifact according to automated deployment schedule")),Object(i.mdx)("p",null,Object(i.mdx)("em",{parentName:"p"},"A big assumption in this process is that the ",Object(i.mdx)("inlineCode",{parentName:"em"},"master")," should always be deployable. As such, the deployment to the staging environment is configured to happen automatically and can be used to see what something would look like in a production-like environment for any kind of manual testing/verification.")),Object(i.mdx)("h2",{id:"process-details"},"Process details"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://help.github.com/en/articles/creating-releases"}),"Create a release")," in GitHub from master, tag artifacts of that commit SHA hash with release name")),Object(i.mdx)("p",null,"Every work day at the configured time a ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"http://jenkins.vetsgov-internal/job/deploys/job/vets-gov-automerge/"}),"Jenkins automerge job")," sends a link to the #vetsgov-engineers Slack channel with a diff between the last release and the most recent changes in ",Object(i.mdx)("inlineCode",{parentName:"p"},"master"),". This commit reference is stored to ensure the diff and released version is deterministic."),Object(i.mdx)("p",null,"After a time has elapsed ( currently set to 60m ) release is created at the reference from above."),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("strong",{parentName:"li"},"Deploy")," to production using deployment artifacts")),Object(i.mdx)("p",null,"From here, Jenkins can kickoff a production deployment. After the deployment occurs, the normal site monitoring infrastructure will be used to valide it is working. As this process is automatic any new features should have monitoring in place before, or as a part of their deployment"),Object(i.mdx)("h2",{id:"rollbacks"},"Rollbacks"),Object(i.mdx)("p",null,"If a production deployment introduces issues that affect Service Level Objectives (SLOs) established for the project, the DevOps team may restore service to users by rolling back the deployment. This is accomplished by triggering a new deploy job in Jenkins using a previous release tag."),Object(i.mdx)("p",null,"The ",Object(i.mdx)("strong",{parentName:"p"},"use of hotfixes is discouraged"),", but may be useful in an emergency situation when ",Object(i.mdx)("inlineCode",{parentName:"p"},"master")," has significantly deviated from the release and a fix to the failed production release is critical. To create a hotfix, create a branch from the last stable release tag, make changes necessary (with review), create a new release tag following the correct naming scheme, and trigger a deploy in Jenkins with the release name as a parameter."),Object(i.mdx)("p",null,"If SLOs are not affected and a fix is not critical, no rollback will be issued. Instead the fix should be applied through the standard development workflow."),Object(i.mdx)("h2",{id:"manual-deployment"},"Manual deployment"),Object(i.mdx)("p",null,"Two out-of-cycle deploys are supported in Jenkins:"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"partial deploy including only static page changes (",Object(i.mdx)("inlineCode",{parentName:"li"},"vagov-content")," and ",Object(i.mdx)("inlineCode",{parentName:"li"},"Drupal"),")"),Object(i.mdx)("li",{parentName:"ul"},"full deploy of VA.gov client app and static pages")),Object(i.mdx)("h3",{id:"before-deploying"},"Before deploying"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"Wait for ",Object(i.mdx)("strong",{parentName:"li"},"Jenkins")," to ",Object(i.mdx)("strong",{parentName:"li"},"build the change")," in ",Object(i.mdx)("inlineCode",{parentName:"li"},"vets-website")),Object(i.mdx)("li",{parentName:"ul"},"Builds status can be viewed ",Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"http://jenkins.vetsgov-internal/blue/organizations/jenkins/testing%2Fvets-website/activity?branch=master"}),"here"),". ",Object(i.mdx)("em",{parentName:"li"},"Requires SOCKS proxy. See ",Object(i.mdx)("a",Object.assign({parentName:"em"},{href:"/getting-started/internal-tools"}),"Accessing internal tools"))),Object(i.mdx)("li",{parentName:"ul"},"If this build fails, you may need to log into Jenkins and restart it")),Object(i.mdx)("h3",{id:"partial-deploy--static-page-changes-only"},"Partial deploy- static page changes only"),Object(i.mdx)("ol",null,Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("p",{parentName:"li"},"Start a deploy job"),Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},"Log into Jenkins ",Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"http://jenkins.vetsgov-internal/job/deploys/job/vets-gov-autodeploy-vets-website/"}),"here")),Object(i.mdx)("li",{parentName:"ul"},"Click ",Object(i.mdx)("strong",{parentName:"li"},"Build with Parameters")),Object(i.mdx)("li",{parentName:"ul"},"Set the ",Object(i.mdx)("strong",{parentName:"li"},"release_wait")," option to ",Object(i.mdx)("strong",{parentName:"li"},"5")," minutes"),Object(i.mdx)("li",{parentName:"ul"},"Check ",Object(i.mdx)("strong",{parentName:"li"},"use_latest_release")," <-- ",Object(i.mdx)("em",{parentName:"li"},"important")),Object(i.mdx)("li",{parentName:"ul"},"Click ",Object(i.mdx)("strong",{parentName:"li"},"Build")),Object(i.mdx)("li",{parentName:"ul"},"Verify commits in ",Object(i.mdx)("strong",{parentName:"li"},"deployment notification"))),Object(i.mdx)("p",{parentName:"li"},Object(i.mdx)("em",{parentName:"p"},"In Slack channel ",Object(i.mdx)("strong",{parentName:"em"},"#vetsgov-engineers"),", Jenkins will include a link that shows the exact commits being released in the ",Object(i.mdx)("strong",{parentName:"em"},"deploy notification"),"."))),Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("p",{parentName:"li"},Object(i.mdx)("strong",{parentName:"p"},"Verify")," changes in ",Object(i.mdx)("strong",{parentName:"p"},"production")," once the build finishes"))),Object(i.mdx)("h3",{id:"full-deploy-of-vagov-client-app"},"Full deploy of VA.gov client app"),Object(i.mdx)("ol",null,Object(i.mdx)("li",{parentName:"ol"},"Verify that your changes are committed and that the changes since the last deploy are safe to deploy:",Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("strong",{parentName:"li"},"Last deployment time"),": You can check the build ",Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"http://jenkins.vetsgov-internal/job/deploys/job/vets-gov-autodeploy-vets-website/"}),"history")," for the time of the last deploy (usually daily at 2pm EST)"),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("strong",{parentName:"li"},"Commit history"),": ",Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/vets-website/commits/master"}),"Look")," for commits after the last deploy and verify they're production ready.")))),Object(i.mdx)("p",null,Object(i.mdx)("em",{parentName:"p"},"You may need to contact the developers of those commits to verify.")),Object(i.mdx)("ol",{start:2},Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("p",{parentName:"li"},"Start a deploy job"),Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},"Log into Jenkins ",Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"http://jenkins.vetsgov-internal/job/deploys/job/vets-gov-autodeploy-vets-website/"}),"here")),Object(i.mdx)("li",{parentName:"ul"},"Click ",Object(i.mdx)("strong",{parentName:"li"},"Build with Parameters")),Object(i.mdx)("li",{parentName:"ul"},"Set the ",Object(i.mdx)("strong",{parentName:"li"},"release_wait")," option to ",Object(i.mdx)("strong",{parentName:"li"},"5")," minutes"),Object(i.mdx)("li",{parentName:"ul"},"Uncheck ",Object(i.mdx)("strong",{parentName:"li"},"use_latest_release")," <-- ",Object(i.mdx)("em",{parentName:"li"},"important")),Object(i.mdx)("li",{parentName:"ul"},"Click ",Object(i.mdx)("strong",{parentName:"li"},"Build")),Object(i.mdx)("li",{parentName:"ul"},"Verify commits in ",Object(i.mdx)("strong",{parentName:"li"},"deployment notification"))),Object(i.mdx)("p",{parentName:"li"},Object(i.mdx)("em",{parentName:"p"},"In Slack channel ",Object(i.mdx)("strong",{parentName:"em"},"#vetsgov-engineers"),", Jenkins will include a link that shows the exact commits being released in the ",Object(i.mdx)("strong",{parentName:"em"},"deploy notification"),"."))),Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("p",{parentName:"li"},Object(i.mdx)("strong",{parentName:"p"},"Verify")," changes in ",Object(i.mdx)("strong",{parentName:"p"},"production")," once the build finishes"))))}o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-getting-started-workflow-deploy-mdx-4c4168217a5750e482a0.js.map