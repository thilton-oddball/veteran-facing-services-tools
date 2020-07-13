(window.webpackJsonp=window.webpackJsonp||[]).push([[47,50],{"094v":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return r})),t.d(n,"default",(function(){return m}));var a=t("zLVn"),o=(t("q1tI"),t("7ljp")),s=t("3dLD"),r={},c={_frontmatter:r},i=s.a;function m(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.mdx)(i,Object.assign({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("h1",{id:"review"},"Review"),Object(o.mdx)("h2",{id:"submit-pull-request"},"Submit pull request"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("strong",{parentName:"li"},"Pull master")," and ",Object(o.mdx)("strong",{parentName:"li"},"push feature branch")," to ",Object(o.mdx)("inlineCode",{parentName:"li"},"vets-website")," repository")),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"git pull origin master\ngit push origin 12345-issue-title\n")),Object(o.mdx)("p",null,Object(o.mdx)("em",{parentName:"p"},"Always ",Object(o.mdx)("strong",{parentName:"em"},"pull master")," into your feature branch before creating a pull request.")),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("strong",{parentName:"li"},"Create a pull request")," indicating that your code is ready for review."),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("strong",{parentName:"li"},"Request peer review")," on Github by tagging a fellow team member who you feel is qualified to review the code (this prevents the pull request from just sitting). You may also want to tag developers on other teams if the changes cover more than one application.")),Object(o.mdx)("p",null,Object(o.mdx)("em",{parentName:"p"},"Depending on the type of work done, you may need a product person to review and / or a developer to review. See ",Object(o.mdx)("a",Object.assign({parentName:"em"},{href:"https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Work%20Practices/Engineering/Code%20Review%20Norms.md"}),"Code Review Norms")," for more information on how we do code reviews.")),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Use Zenhub to ",Object(o.mdx)("strong",{parentName:"li"},"connect")," pull request with a ",Object(o.mdx)("strong",{parentName:"li"},"linked issue"))),Object(o.mdx)("p",null,Object(o.mdx)("em",{parentName:"p"},"If you use the Zenhub Chrome ",Object(o.mdx)("a",Object.assign({parentName:"em"},{href:"https://chrome.google.com/webstore/detail/zenhub-for-github/ogcgkffhplmphkaahpmffcafajaocjbd"}),"extension"),', there will be a "Connect this pull request with an existing issue" section at the bottom of Github\'s create pull request UI. You can click the "Connect with an issue" button to link the PR to the original issue in Zenhub.')),Object(o.mdx)("p",null,Object(o.mdx)("span",Object.assign({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"765px"}}),"\n      ",Object(o.mdx)("a",Object.assign({parentName:"span"},{className:"gatsby-resp-image-link",href:"/static/d16a8f63d7f7ad20701141bbe9190083/bbb77/connect-issue.png",style:{display:"block"},target:"_blank",rel:"noopener"}),"\n    ",Object(o.mdx)("span",Object.assign({parentName:"a"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"10.038610038610038%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYAAABYBvyLAAAACXBIWXMAAAsSAAALEgHS3X78AAAAcUlEQVQI102MSw7CMAxEe3XE6bgACK7QxE5K7HykZHDNpounGVuat93uD7w/hCIHQiQQM5iT50nKGZHYqa1hLWDO6Yio7QSi6n2Mge35IuSj2dAk9JdEIoQQwSk5573vAar1IlyoteFbiv1NXAS9d/wAxJWYiwPE99IAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.mdx)("img",Object.assign({parentName:"a"},{className:"gatsby-resp-image-image",alt:"PR deployment list",title:"PR deployment list",src:"/static/d16a8f63d7f7ad20701141bbe9190083/bbb77/connect-issue.png",srcSet:["/static/d16a8f63d7f7ad20701141bbe9190083/a2ead/connect-issue.png 259w","/static/d16a8f63d7f7ad20701141bbe9190083/6b9fd/connect-issue.png 518w","/static/d16a8f63d7f7ad20701141bbe9190083/bbb77/connect-issue.png 765w"],sizes:"(max-width: 765px) 100vw, 765px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n  "),"\n    ")),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("strong",{parentName:"li"},"Change status")," of the ",Object(o.mdx)("strong",{parentName:"li"},"linked issue")," to ",Object(o.mdx)("strong",{parentName:"li"},"validate"))),Object(o.mdx)("h2",{id:"run-tests-and-compliance-scans"},"Run tests and compliance scans"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("strong",{parentName:"li"},"Jenkins")," automatically ",Object(o.mdx)("strong",{parentName:"li"},"builds")," and ",Object(o.mdx)("strong",{parentName:"li"},"runs all tests")," your feature branch:",Object(o.mdx)("ul",{parentName:"li"},Object(o.mdx)("li",{parentName:"ul"},"when the pull request is created"),Object(o.mdx)("li",{parentName:"ul"},"after a pull request is created when the feature branch is updated"))),Object(o.mdx)("li",{parentName:"ul"},"Test results are displayed on the pull request page")),Object(o.mdx)("p",null,Object(o.mdx)("span",Object.assign({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"699px"}}),"\n      ",Object(o.mdx)("a",Object.assign({parentName:"span"},{className:"gatsby-resp-image-link",href:"/static/4faf58036ea7db547dd9a3340a594242/3fe45/test-results.png",style:{display:"block"},target:"_blank",rel:"noopener"}),"\n    ",Object(o.mdx)("span",Object.assign({parentName:"a"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"16.988416988416986%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAYAAACTWi8uAAAACXBIWXMAAAsSAAALEgHS3X78AAAAmklEQVQI132OyQ7CMAwF+/+/xoEDglMvJV2gaZamEiXNMoSWM5ZG1pNsj6uTuXAervT3gUYIhGgRbccoJTlDSqmQSSXs/UfOB1tMSBcY54B7RarbUlObBqtnJqXR2uC9J8bIv8pf8iHyIZXDh6hKZS+tET1p+sezfKbo+sdO2/WFAW1njHUoY5mKUJbZ9e3ZQsRvYZdL51GL5wN4FOcnbaxMwwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.mdx)("img",Object.assign({parentName:"a"},{className:"gatsby-resp-image-image",alt:"PR deployment list",title:"PR deployment list",src:"/static/4faf58036ea7db547dd9a3340a594242/3fe45/test-results.png",srcSet:["/static/4faf58036ea7db547dd9a3340a594242/a2ead/test-results.png 259w","/static/4faf58036ea7db547dd9a3340a594242/6b9fd/test-results.png 518w","/static/4faf58036ea7db547dd9a3340a594242/3fe45/test-results.png 699w"],sizes:"(max-width: 699px) 100vw, 699px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n  "),"\n    ")),Object(o.mdx)("p",null,Object(o.mdx)("em",{parentName:"p"},"See ",Object(o.mdx)("a",Object.assign({parentName:"em"},{href:"/getting-started/common-tasks/test"}),"Run Tests")," to run these tests locally")),Object(o.mdx)("h2",{id:"manually-test-change"},"Manually test change"),Object(o.mdx)("p",null,"Manual testing can involve some separate things:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Making sure the functionality works in the web browsers users are most likely to use"),Object(o.mdx)("li",{parentName:"ul"},"Run the code on production-like environment. This could be done by spinning up a cloud instance that resembles production, or launching a container that is production like (such as a Docker image, etc.)"),Object(o.mdx)("li",{parentName:"ul"},"See if there are there any bugs or unexpected nuisances that users might encounter"),Object(o.mdx)("li",{parentName:"ul"},"Does it meet the requirements?")),Object(o.mdx)("p",null,Object(o.mdx)("em",{parentName:"p"},Object(o.mdx)("strong",{parentName:"em"},"The person making the change is responsible")," for ensuring the change is adequately tested. Testing can include automated tests or manual testing by stakeholders on the review instance or staging build.")),Object(o.mdx)("h3",{id:"review-instance-automatic-creation"},"Review instance automatic creation"),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Jenkins")," automatically ",Object(o.mdx)("strong",{parentName:"p"},"deploys")," two remote ",Object(o.mdx)("strong",{parentName:"p"},"review instances")," of a ",Object(o.mdx)("strong",{parentName:"p"},"feature branch")," when a pull request is created:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("p",{parentName:"li"},"an instance that just includes static pages content deployed by ",Object(o.mdx)("strong",{parentName:"p"},"va-bot"))),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("p",{parentName:"li"},"an instance that includes static pages and the VA.gov client application deployed by ",Object(o.mdx)("strong",{parentName:"p"},"va-vfs-bot")),Object(o.mdx)("p",{parentName:"li"},Object(o.mdx)("em",{parentName:"p"},"Example of deployment links:")),Object(o.mdx)("p",{parentName:"li"},Object(o.mdx)("span",Object.assign({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"709px"}}),"\n      ",Object(o.mdx)("a",Object.assign({parentName:"span"},{className:"gatsby-resp-image-link",href:"/static/82df6872c5a0578f1ad667636438ad90/4d08a/PR-deployment-list.png",style:{display:"block"},target:"_blank",rel:"noopener"}),"\n    ",Object(o.mdx)("span",Object.assign({parentName:"a"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"26.25482625482626%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsSAAALEgHS3X78AAAA80lEQVQY01WP62rDMAxG8/7PN7qWQSFrc3Hiu53Et+SbbOiPGQ6yBDqSulgStLdgbMGycnAusHKOmfLKNM2YZoacM67rwnme/xAuYzEJjNhCQVeFbt9a0zBOTSCkhHMezloYownTZJ9X/x/yeaEQuVAsJ7o9BlgSKm0aXEjElOE81bYC6TP2I7bceQ9Lg3IuSI0M6SJmHcGIEDO6LQRoZ/EeprblSCx0dovKtwYhNdUUJuHBuG7yQEPrYOUjnRywEkdM6Hw8MPMV98cPbt8PfN3ueL1HcKmw73vbqH8NePYjeuagHC1gbJNVquiXHxgECUPCHzhjfzrOrqB7AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.mdx)("img",Object.assign({parentName:"a"},{className:"gatsby-resp-image-image",alt:"PR deployment list",title:"PR deployment list",src:"/static/82df6872c5a0578f1ad667636438ad90/4d08a/PR-deployment-list.png",srcSet:["/static/82df6872c5a0578f1ad667636438ad90/a2ead/PR-deployment-list.png 259w","/static/82df6872c5a0578f1ad667636438ad90/6b9fd/PR-deployment-list.png 518w","/static/82df6872c5a0578f1ad667636438ad90/4d08a/PR-deployment-list.png 709w"],sizes:"(max-width: 709px) 100vw, 709px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n  "),"\n    ")))),Object(o.mdx)("p",null,"After a pull request is created, ",Object(o.mdx)("strong",{parentName:"p"},"Jenkins")," will automatically ",Object(o.mdx)("strong",{parentName:"p"},"rebuild")," these instances when feature branch ",Object(o.mdx)("strong",{parentName:"p"},"changes are pushed")),Object(o.mdx)("p",null,"  ",Object(o.mdx)("em",{parentName:"p"},"You will need your browser configured to access the vetsgov-internal domain via the SOCKS proxy. Please see the ",Object(o.mdx)("a",Object.assign({parentName:"em"},{href:"/getting-started/internal-tools"}),"2. Access internal tools")," for detailed instructions.")),Object(o.mdx)("h3",{id:"review-instance-manual-creation"},"Review instance manual creation"),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Jenkins")," can be ",Object(o.mdx)("strong",{parentName:"p"},"manually triggered")," to build a ",Object(o.mdx)("strong",{parentName:"p"},"review instance"),"."),Object(o.mdx)("ol",null,Object(o.mdx)("li",{parentName:"ol"},"Visit the ",Object(o.mdx)("a",Object.assign({parentName:"li"},{href:"http://jenkins.vfs.va.gov/job/deploys/job/vets-review-instance-deploy/"}),"Jenkins Review Application Deploy job UI")," and log in."),Object(o.mdx)("li",{parentName:"ol"},"Select ",Object(o.mdx)("strong",{parentName:"li"},"Build with Parameters")),Object(o.mdx)("li",{parentName:"ol"},"Specify the branch names for ",Object(o.mdx)("inlineCode",{parentName:"li"},"api_branch")," and ",Object(o.mdx)("inlineCode",{parentName:"li"},"web_branch"),". These branches will be deployed together with the review instance."),Object(o.mdx)("li",{parentName:"ol"},"When the process is completed, the URL for the review instance will be provided at the end of the output logs.")),Object(o.mdx)("p",null,Object(o.mdx)("em",{parentName:"p"},"A Jenkins job will run periodically and remove review instances for which the source branches no longer exist. To ensure that your instance is cleaned up appropriately, just delete the branch from the origin repository.")),Object(o.mdx)("h2",{id:"peer-review-and-merge"},"Peer review and merge"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Get at least one ",Object(o.mdx)("strong",{parentName:"li"},"pull request approval")," from a peer"),Object(o.mdx)("li",{parentName:"ul"},"It is recommended not to merge at the end of the day or right before the weekend unless necessary."),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.blog/2016-04-01-squash-your-commits/"}),"Squash your commits")," and ",Object(o.mdx)("strong",{parentName:"li"},"merge")," into ",Object(o.mdx)("strong",{parentName:"li"},"master")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("strong",{parentName:"li"},"Delete")," pull request branch")),Object(o.mdx)("p",null,Object(o.mdx)("em",{parentName:"p"},"See our team's ",Object(o.mdx)("a",Object.assign({parentName:"em"},{href:"https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Work%20Practices/Engineering/Code%20Review%20Norms.md"}),"code review norms")," for details on how code review work and what needs to be checked.")))}m.isMDXComponent=!0},"1nT/":function(e){e.exports=JSON.parse('{"data":{"components":{"edges":[{"node":{"path":"/visual-design/components/accepttermsprompt/","context":{"source":"component","name":"AcceptTermsPrompt"}}},{"node":{"path":"/visual-design/components/additionalinfo/","context":{"source":"component","name":"AdditionalInfo"}}},{"node":{"path":"/visual-design/components/alertbox/","context":{"source":"component","name":"AlertBox"}}},{"node":{"path":"/visual-design/components/breadcrumbs/","context":{"source":"component","name":"Breadcrumbs"}}},{"node":{"path":"/visual-design/components/collapsiblepanel/","context":{"source":"component","name":"CollapsiblePanel"}}},{"node":{"path":"/visual-design/components/dropdownpanel/","context":{"source":"component","name":"DropDownPanel"}}},{"node":{"path":"/visual-design/components/errorablecheckbox/","context":{"source":"component","name":"ErrorableCheckbox"}}},{"node":{"path":"/visual-design/components/errorablecheckboxgroup/","context":{"source":"component","name":"ErrorableCheckboxGroup"}}},{"node":{"path":"/visual-design/components/errorabledate/","context":{"source":"component","name":"ErrorableDate"}}},{"node":{"path":"/visual-design/components/errorablefileinput/","context":{"source":"component","name":"ErrorableFileInput"}}},{"node":{"path":"/visual-design/components/errorablemonthyear/","context":{"source":"component","name":"ErrorableMonthYear"}}},{"node":{"path":"/visual-design/components/errorablenumberinput/","context":{"source":"component","name":"ErrorableNumberInput"}}},{"node":{"path":"/visual-design/components/errorableradiobuttons/","context":{"source":"component","name":"ErrorableRadioButtons"}}},{"node":{"path":"/visual-design/components/errorableselect/","context":{"source":"component","name":"ErrorableSelect"}}},{"node":{"path":"/visual-design/components/errorabletextarea/","context":{"source":"component","name":"ErrorableTextArea"}}},{"node":{"path":"/visual-design/components/errorabletextinput/","context":{"source":"component","name":"ErrorableTextInput"}}},{"node":{"path":"/visual-design/components/expandinggroup/","context":{"source":"component","name":"ExpandingGroup"}}},{"node":{"path":"/visual-design/components/helpmenu/","context":{"source":"component","name":"HelpMenu"}}},{"node":{"path":"/visual-design/components/iconbase/","context":{"source":"component","name":"IconBase"}}},{"node":{"path":"/visual-design/components/iconhelp/","context":{"source":"component","name":"IconHelp"}}},{"node":{"path":"/visual-design/components/iconsearch/","context":{"source":"component","name":"IconSearch"}}},{"node":{"path":"/visual-design/components/iconuser/","context":{"source":"component","name":"IconUser"}}},{"node":{"path":"/visual-design/components/loadingindicator/","context":{"source":"component","name":"LoadingIndicator"}}},{"node":{"path":"/visual-design/components/megamenu/","context":{"source":"component","name":"MegaMenu"}}},{"node":{"path":"/visual-design/components/modal/","context":{"source":"component","name":"Modal"}}},{"node":{"path":"/visual-design/components/ombinfo/","context":{"source":"component","name":"OMBInfo"}}},{"node":{"path":"/visual-design/components/pagination/","context":{"source":"component","name":"Pagination"}}},{"node":{"path":"/visual-design/components/privacyagreement/","context":{"source":"component","name":"PrivacyAgreement"}}},{"node":{"path":"/visual-design/components/progressbar/","context":{"source":"component","name":"ProgressBar"}}},{"node":{"path":"/visual-design/components/progressbutton/","context":{"source":"component","name":"ProgressButton"}}},{"node":{"path":"/visual-design/components/promobanner/","context":{"source":"component","name":"PromoBanner"}}},{"node":{"path":"/visual-design/components/searchmenu/","context":{"source":"component","name":"SearchMenu"}}},{"node":{"path":"/visual-design/components/segmentedprogressbar/","context":{"source":"component","name":"SegmentedProgressBar"}}},{"node":{"path":"/visual-design/components/sortabletable/","context":{"source":"component","name":"SortableTable"}}},{"node":{"path":"/visual-design/components/systemdownview/","context":{"source":"component","name":"SystemDownView"}}},{"node":{"path":"/visual-design/components/telephone/","context":{"source":"component","name":"Telephone"}}}]}}}')},"3dLD":function(e,n,t){"use strict";t.d(n,"a",(function(){return j}));var a=t("q1tI"),o=t.n(a),s=t("8FPV"),r=t("1nT/"),c=t("Wbzz");function i(){return o.a.createElement(c.StaticQuery,{query:"4277382034",render:function(e){return o.a.createElement(l,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})},data:r})}function m(e){var n=e.item;return n.href?o.a.createElement("li",{key:n.name},o.a.createElement(c.Link,{to:n.href},n.name)):o.a.createElement("li",{key:n.name},n.name," (future)")}function l(e){var n=e.items,t=e.isSublist,a=void 0!==t&&t;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map((function(e){return e.items?o.a.createElement("li",{key:e.name},a&&o.a.createElement(m,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},a&&o.a.createElement(m,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(i,null)):o.a.createElement(m,{item:e,key:e.name})}))):null}var p=t("MEl4"),d=t.n(p);function u(e){var n=e.location,t=d.a.sections.find((function(e){return n.pathname.includes(e.href)}));return t?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(l,{items:t.items}))):null}var b=t("Z/Vb");function g(e){var n=e.componentToMatch;return o.a.createElement(c.StaticQuery,{query:"4193446859",render:function(e){return e.components.edges.map((function(e){return n===e.node.context.name.toLowerCase()?o.a.createElement(h,{item:{name:e.node.context.name}}):""}))},data:b})}function h(e){var n=e.item,t="https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master/packages/formation-react/src/components/"+n.name+"/"+n.name+".mdx";return o.a.createElement(c.Link,{to:t},"Edit this page on GitHub")}function x(e){var n=e.pathname.split("/");return o.a.createElement(g,{componentToMatch:n[3]})}var v=function(e){var n=e.pathname.replace("/veteran-facing-services-tools","");return n.length>0&&"/"===n.charAt(n.length-1)&&(n=n.substring(0,n.length-1)),n};function f(e){var n=e.location,t="https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master/packages/documentation/src/pages"+v(n)+function(e){var n=v(e),t=d.a.sections.find((function(e){return n.includes(e.href)})),a=d.a.sections.find((function(e){return e.href===n}));if(null==a?void 0:a.indexmdx)return"/index";if((null==t?void 0:t.items)&&t.items.map((function(e){return Array.isArray(e.items)?e.items.find((function(e){return e.href===n})):null})).map((function(e){if((null==e?void 0:e.href)&&e.href===n)return!!(null==e?void 0:e.indexmdx)})).find((function(e){return e})))return"/index";return""}(n)+".mdx";return o.a.createElement(c.Link,{to:t},"Edit this page on GitHub")}function O(e){var n=e.location;return o.a.createElement("div",null,o.a.createElement("p",null,o.a.createElement("br",null),o.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",function(e){if(e.pathname.includes("components")){var n=e.pathname.replace("/veteran-facing-services-tools","");return o.a.createElement(x,{pathname:n})}return o.a.createElement(f,{location:e})}(n)))}function j(e){var n=e.children,t=e.location;return o.a.createElement(s.a,{location:t},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(u,{location:t}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n,o.a.createElement(O,{location:t}))))}},"Z/Vb":function(e){e.exports=JSON.parse('{"data":{"components":{"edges":[{"node":{"path":"/visual-design/components/accepttermsprompt/","context":{"source":"component","name":"AcceptTermsPrompt"}}},{"node":{"path":"/visual-design/components/additionalinfo/","context":{"source":"component","name":"AdditionalInfo"}}},{"node":{"path":"/visual-design/components/alertbox/","context":{"source":"component","name":"AlertBox"}}},{"node":{"path":"/visual-design/components/breadcrumbs/","context":{"source":"component","name":"Breadcrumbs"}}},{"node":{"path":"/visual-design/components/collapsiblepanel/","context":{"source":"component","name":"CollapsiblePanel"}}},{"node":{"path":"/visual-design/components/dropdownpanel/","context":{"source":"component","name":"DropDownPanel"}}},{"node":{"path":"/visual-design/components/errorablecheckbox/","context":{"source":"component","name":"ErrorableCheckbox"}}},{"node":{"path":"/visual-design/components/errorablecheckboxgroup/","context":{"source":"component","name":"ErrorableCheckboxGroup"}}},{"node":{"path":"/visual-design/components/errorabledate/","context":{"source":"component","name":"ErrorableDate"}}},{"node":{"path":"/visual-design/components/errorablefileinput/","context":{"source":"component","name":"ErrorableFileInput"}}},{"node":{"path":"/visual-design/components/errorablemonthyear/","context":{"source":"component","name":"ErrorableMonthYear"}}},{"node":{"path":"/visual-design/components/errorablenumberinput/","context":{"source":"component","name":"ErrorableNumberInput"}}},{"node":{"path":"/visual-design/components/errorableradiobuttons/","context":{"source":"component","name":"ErrorableRadioButtons"}}},{"node":{"path":"/visual-design/components/errorableselect/","context":{"source":"component","name":"ErrorableSelect"}}},{"node":{"path":"/visual-design/components/errorabletextarea/","context":{"source":"component","name":"ErrorableTextArea"}}},{"node":{"path":"/visual-design/components/errorabletextinput/","context":{"source":"component","name":"ErrorableTextInput"}}},{"node":{"path":"/visual-design/components/expandinggroup/","context":{"source":"component","name":"ExpandingGroup"}}},{"node":{"path":"/visual-design/components/helpmenu/","context":{"source":"component","name":"HelpMenu"}}},{"node":{"path":"/visual-design/components/iconbase/","context":{"source":"component","name":"IconBase"}}},{"node":{"path":"/visual-design/components/iconhelp/","context":{"source":"component","name":"IconHelp"}}},{"node":{"path":"/visual-design/components/iconsearch/","context":{"source":"component","name":"IconSearch"}}},{"node":{"path":"/visual-design/components/iconuser/","context":{"source":"component","name":"IconUser"}}},{"node":{"path":"/visual-design/components/loadingindicator/","context":{"source":"component","name":"LoadingIndicator"}}},{"node":{"path":"/visual-design/components/megamenu/","context":{"source":"component","name":"MegaMenu"}}},{"node":{"path":"/visual-design/components/modal/","context":{"source":"component","name":"Modal"}}},{"node":{"path":"/visual-design/components/ombinfo/","context":{"source":"component","name":"OMBInfo"}}},{"node":{"path":"/visual-design/components/pagination/","context":{"source":"component","name":"Pagination"}}},{"node":{"path":"/visual-design/components/privacyagreement/","context":{"source":"component","name":"PrivacyAgreement"}}},{"node":{"path":"/visual-design/components/progressbar/","context":{"source":"component","name":"ProgressBar"}}},{"node":{"path":"/visual-design/components/progressbutton/","context":{"source":"component","name":"ProgressButton"}}},{"node":{"path":"/visual-design/components/promobanner/","context":{"source":"component","name":"PromoBanner"}}},{"node":{"path":"/visual-design/components/searchmenu/","context":{"source":"component","name":"SearchMenu"}}},{"node":{"path":"/visual-design/components/segmentedprogressbar/","context":{"source":"component","name":"SegmentedProgressBar"}}},{"node":{"path":"/visual-design/components/sortabletable/","context":{"source":"component","name":"SortableTable"}}},{"node":{"path":"/visual-design/components/systemdownview/","context":{"source":"component","name":"SystemDownView"}}},{"node":{"path":"/visual-design/components/telephone/","context":{"source":"component","name":"Telephone"}}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-getting-started-workflow-review-mdx-e9dd2903c82c017089c2.js.map