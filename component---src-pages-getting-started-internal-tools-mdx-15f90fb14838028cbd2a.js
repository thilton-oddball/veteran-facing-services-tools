(window.webpackJsonp=window.webpackJsonp||[]).push([[44,50],{"3dLD":function(e,t,a){"use strict";a.d(t,"a",(function(){return x}));var n=a("q1tI"),i=a.n(n),o=a("8FPV"),s=a("Wbzz");function r(){return i.a.createElement(s.StaticQuery,{query:"4277382034",render:function(e){return i.a.createElement(l,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})}})}function c(e){var t=e.item;return t.href?i.a.createElement("li",{key:t.name},i.a.createElement(s.Link,{to:t.href},t.name)):i.a.createElement("li",{key:t.name},t.name," (future)")}function l(e){var t=e.items,a=e.isSublist,n=void 0!==a&&a;return t.length?i.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?i.a.createElement("li",{key:e.name},n&&i.a.createElement(c,{item:e}),!n&&i.a.createElement("h2",{className:"heading-level-4"},e.name),i.a.createElement(l,{isSublist:!0,items:e.items})):"componentList"===e.query?i.a.createElement("li",{key:e.name},n&&i.a.createElement(c,{item:e}),!n&&i.a.createElement("h2",{className:"heading-level-4"},e.name),i.a.createElement(r,null)):i.a.createElement(c,{item:e,key:e.name})}))):null}var m=a("MEl4"),d=a.n(m);function p(e){var t=e.location,a=d.a.sections.find((function(e){return t.pathname.includes(e.href)}));return a?i.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},i.a.createElement("div",{className:"site-c-sidenav"},i.a.createElement(l,{items:a.items}))):null}function g(e){var t=e.componentToMatch;return i.a.createElement(s.StaticQuery,{query:"4193446859",render:function(e){return e.components.edges.map((function(e){return t===e.node.context.name.toLowerCase()?i.a.createElement(b,{item:{name:e.node.context.name}}):""}))}})}function b(e){var t=e.item,a="https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master/packages/formation-react/src/components/"+t.name+"/"+t.name+".mdx";return i.a.createElement(s.Link,{to:a},"Edit this page on GitHub")}function h(e){var t=e.pathname.split("/");return i.a.createElement(g,{componentToMatch:t[3]})}var u=function(e){var t=e.pathname.replace("/veteran-facing-services-tools","");return t.length>0&&"/"===t.charAt(t.length-1)&&(t=t.substring(0,t.length-1)),t};function f(e){var t=e.location,a="https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master/packages/documentation/src/pages"+u(t)+function(e){var t=u(e),a=d.a.sections.find((function(e){return t.includes(e.href)})),n=d.a.sections.find((function(e){return e.href===t}));if(null==n?void 0:n.indexmdx)return"/index";if((null==a?void 0:a.items)&&a.items.map((function(e){return Array.isArray(e.items)?e.items.find((function(e){return e.href===t})):null})).map((function(e){if((null==e?void 0:e.href)&&e.href===t)return!!(null==e?void 0:e.indexmdx)})).find((function(e){return e})))return"/index";return""}(t)+".mdx";return i.a.createElement(s.Link,{to:a},"Edit this page on GitHub")}function O(e){var t=e.location;return i.a.createElement("div",null,i.a.createElement("p",null,i.a.createElement("br",null),i.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",function(e){if(e.pathname.includes("components")){var t=e.pathname.replace("/veteran-facing-services-tools","");return i.a.createElement(h,{pathname:t})}return i.a.createElement(f,{location:e})}(t)))}function x(e){var t=e.children,a=e.location;return i.a.createElement(o.a,{location:a},i.a.createElement("div",{className:"vads-l-row"},i.a.createElement(p,{location:a}),i.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,i.a.createElement(O,{location:a}))))}},SuvF:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return l}));var n=a("zLVn"),i=(a("q1tI"),a("7ljp")),o=a("3dLD"),s={},r={_frontmatter:s},c=o.a;function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.mdx)(c,Object.assign({},r,a,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("h1",{id:"internal-tools"},"Internal Tools"),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"This content/page is no longer maintained and likely outdated.")),Object(i.mdx)("p",null,Object(i.mdx)("em",{parentName:"p"},Object(i.mdx)("a",Object.assign({parentName:"em"},{href:"https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/internal-tools.md"}),"Please see the most current documentation in the va.gov-team repo."))),Object(i.mdx)("p",null,"These instructions cover the configuration of a SOCKS proxy necessary for access to:"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"Static ",Object(i.mdx)("inlineCode",{parentName:"li"},"vets-website")," content"),Object(i.mdx)("li",{parentName:"ul"},"Remote build logs for pull requests and deployments (Jenkins)"),Object(i.mdx)("li",{parentName:"ul"},"System metrics for diagnostic/troubleshooting purposes"),Object(i.mdx)("li",{parentName:"ul"},"Exception reports and tracebacks")),Object(i.mdx)("h2",{id:"prerequisites-and-assumptions"},"Prerequisites and assumptions"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"These steps assume you're running on Linux or OSX."),Object(i.mdx)("li",{parentName:"ul"},"That you have a Github account that's ",Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://help.github.com/en/articles/adding-a-new-ssh-key-to-your-github-account"}),"configured")," to use ",Object(i.mdx)("inlineCode",{parentName:"li"},".ssh")," authentication with one of your computer's public keys.")),Object(i.mdx)("h2",{id:"create-an-ssh-public-key"},"Create an SSH public key"),Object(i.mdx)("p",null,Object(i.mdx)("em",{parentName:"p"},"You can skip to")," ",Object(i.mdx)("strong",{parentName:"p"},"Configure the SOCKS proxy")," ",Object(i.mdx)("em",{parentName:"p"},"if you have a public ssh key you want to use. These instructions refer to the public key as ",Object(i.mdx)("inlineCode",{parentName:"em"},"id_rsa_vagov.pub"))),Object(i.mdx)("ol",null,Object(i.mdx)("li",{parentName:"ol"},"Open a terminal and create an ",Object(i.mdx)("inlineCode",{parentName:"li"},"~/.ssh")," directory")),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"mkdir ~/.ssh\n")),Object(i.mdx)("p",null,Object(i.mdx)("em",{parentName:"p"},"It's safe to ignore the error if this directory already exists")),Object(i.mdx)("ol",{start:2},Object(i.mdx)("li",{parentName:"ol"},"Set the ",Object(i.mdx)("inlineCode",{parentName:"li"},"~/.ssh")," directory to read only.")),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"chmod 700 ~/.ssh\n")),Object(i.mdx)("ol",{start:3},Object(i.mdx)("li",{parentName:"ol"},"Change to the ",Object(i.mdx)("inlineCode",{parentName:"li"},"~/.ssh")," directory")),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"cd ~/.ssh\n")),Object(i.mdx)("ol",{start:4},Object(i.mdx)("li",{parentName:"ol"},"Generate the ssh keys. You will be prompted to enter a secure passphrase to protect your private key.")),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"ssh-keygen -f id_rsa_vagov\n")),Object(i.mdx)("ol",{start:5},Object(i.mdx)("li",{parentName:"ol"},"Confirm that the keys were generated.")),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"ls ~/.ssh\n")),Object(i.mdx)("p",null,Object(i.mdx)("em",{parentName:"p"},"The list of files should include ",Object(i.mdx)("inlineCode",{parentName:"em"},"id_rsa_vagov")," and ",Object(i.mdx)("inlineCode",{parentName:"em"},"id_rsa_vagov.pub"),". Only share keys with ",Object(i.mdx)("inlineCode",{parentName:"em"},".pub")," (public) extension; Private keys should never leave your computer.")),Object(i.mdx)("p",null,Object(i.mdx)("em",{parentName:"p"},"Once the keys are verified, continue with")," ",Object(i.mdx)("strong",{parentName:"p"},"Configure the SOCKS proxy")),Object(i.mdx)("h2",{id:"configure-the-socks-proxy"},"Configure the SOCKS proxy"),Object(i.mdx)("p",null,"Below are configuration instructions for internal or external developers."),Object(i.mdx)("h3",{id:"for-internal-developers"},"For internal developers"),Object(i.mdx)("ol",null,Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("p",{parentName:"li"},'Create an issue in the va.gov-team repo using the issue template named "Environment Access Request Template" which can be found ',Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=external-request%2C+operations&template=Environment-Access-Request-Template.md&title=Access+for+%5Bindividual%5D"}),"here"),". In filling out the template you will provide your public ssh key.")),Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("p",{parentName:"li"},"Once approval has been verified and this is reflected on the issue you created, your public key will be added to the devops repo which will give you access to the internal tools.")),Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("p",{parentName:"li"},"Copy the SSH ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/department-of-veterans-affairs/devops/blob/master/ssh/config"}),"config")," from the ",Object(i.mdx)("inlineCode",{parentName:"p"},"devops")," repo to ",Object(i.mdx)("inlineCode",{parentName:"p"},"~/.ssh")))),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"cp ./ssh/config ~/.ssh/config\n")),Object(i.mdx)("ol",{start:4},Object(i.mdx)("li",{parentName:"ol"},"Add your SSH key to your local agent")),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"ssh-add -K ~/.ssh/id_rsa_vagov\n")),Object(i.mdx)("p",null,Object(i.mdx)("em",{parentName:"p"},"If you're on OSX you can configure the ssh client to automatically add your keys with the by adding the following to the top of ",Object(i.mdx)("inlineCode",{parentName:"em"},"~/.ssh/config"))),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{}),"  Host *\n    AddKeysToAgent yes\n    UseKeychain yes\n    IdentityFile ~/.ssh/id_rsa_vagov\n")),Object(i.mdx)("p",null,Object(i.mdx)("em",{parentName:"p"},"Once your public key has been added to the devops repo, an update job should automatically run to update the jumpboxes and SOCKS proxy endpoints. This job takes about 5 minutes to run. Wait five minutes, then continue with")," ",Object(i.mdx)("strong",{parentName:"p"},"Starting the SOCKS proxy"),"."),Object(i.mdx)("h3",{id:"for-external-developers"},"For external developers"),Object(i.mdx)("ol",null,Object(i.mdx)("li",{parentName:"ol"},"As part of onboarding, you should have provided your ",Object(i.mdx)("strong",{parentName:"li"},"public SSH key")," to DSVA. If you haven't, do that now."),Object(i.mdx)("li",{parentName:"ol"},"DSVA will add your public SSH key to the list of authorized keys."),Object(i.mdx)("li",{parentName:"ol"},"When that process is completed (24 hours), you will receive a Github notification that your key has been added.")),Object(i.mdx)("p",null,Object(i.mdx)("em",{parentName:"p"},"Once you receive the notification, continue with")," ",Object(i.mdx)("strong",{parentName:"p"},"Starting the SOCKS proxy"),"."),Object(i.mdx)("h2",{id:"starting-the-socks-proxy"},"Starting the SOCKS proxy"),Object(i.mdx)("p",null,"There are slightly different commands to connect to the proxy depending on whether you are connected to the VA network or not. The ",Object(i.mdx)("inlineCode",{parentName:"p"},"~/.ssh/config")," file on your local system contains configuration to access the SOCKS proxy both from the VA network and the internet."),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("p",{parentName:"li"},"If you're on the VA network, run:"),Object(i.mdx)("pre",{parentName:"li"},Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"ssh socks-va -D 2001 -N &\n"))),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("p",{parentName:"li"},"If you're on the internet (outside the VA network), run:"),Object(i.mdx)("pre",{parentName:"li"},Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"ssh socks -D 2001 -N &\n"))),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("p",{parentName:"li"},"Alternatively, if you have the ",Object(i.mdx)("inlineCode",{parentName:"p"},"devops")," repo cloned on your device, add the following alias:"),Object(i.mdx)("pre",{parentName:"li"},Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"alias socks=~/path_to_repo/devops/utilities/socks.sh\n")),Object(i.mdx)("p",{parentName:"li"},"then use ",Object(i.mdx)("inlineCode",{parentName:"p"},"socks on")," or ",Object(i.mdx)("inlineCode",{parentName:"p"},"socks off")," to toggle."))),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"Note"),": ",Object(i.mdx)("em",{parentName:"p"},'The first time you connect to the jumpbox, ssh will prompt to ask if you are sure you want to connect to a new host. You will be unable to respond "yes" if ssh is in the background, so either bring it to the foreground with ',Object(i.mdx)("inlineCode",{parentName:"em"},"fg")," or omit the ",Object(i.mdx)("inlineCode",{parentName:"em"},"&")," character from the above command.")),Object(i.mdx)("p",null,Object(i.mdx)("em",{parentName:"p"},"After running the command below, continue to")," ",Object(i.mdx)("strong",{parentName:"p"},"Testing and Using thje SOCKS proxy")),Object(i.mdx)("h2",{id:"test-the-socks-proxy-conneciton-is-working"},"Test the SOCKS proxy conneciton is working"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"curl")," sentry, a tool available only on through the SOCKS proxy")),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"$ curl -v --proxy socks5h://127.0.0.1:2001 sentry.vetsgov-internal\n")),Object(i.mdx)("p",null,Object(i.mdx)("em",{parentName:"p"},"Verify that the output includes ",Object(i.mdx)("inlineCode",{parentName:"em"},"HTTP/1.1 302 FOUND"),". If not, check that the\nSOCKS proxy server is running. You can ",Object(i.mdx)("inlineCode",{parentName:"em"},"$ nc -z 127.0.0.1 2001")," as a first step.")),Object(i.mdx)("h2",{id:"install-browser-extensions"},"Install browser extensions"),Object(i.mdx)("p",null,"These instructions cover installing and configuring browser extensions used to connect to ",Object(i.mdx)("inlineCode",{parentName:"p"},"vetsgov-internal")," via the SOCKS proxy."),Object(i.mdx)("h3",{id:"chrome"},"Chrome"),Object(i.mdx)("ol",null,Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("p",{parentName:"li"},"Install Proxy SwitchyOmega"),Object(i.mdx)("p",{parentName:"li"},Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"https://chrome.google.com/webstore/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif"}),"https://chrome.google.com/webstore/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif"))),Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("p",{parentName:"li"},"Configure the ",Object(i.mdx)("inlineCode",{parentName:"p"},"proxy")," profile like this:"),Object(i.mdx)("p",{parentName:"li"},Object(i.mdx)("span",Object.assign({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1035px"}}),"\n      ",Object(i.mdx)("a",Object.assign({parentName:"span"},{className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/e1e2ff69a2f38f19a2af28739bf21ed0/21cdd/switchy-omega-config-1.png",style:{display:"block"},target:"_blank",rel:"noopener"}),"\n    ",Object(i.mdx)("span",Object.assign({parentName:"a"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"20.077220077220076%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAhElEQVQY06WOXQuCIQyF/f//UeEF8cLSSMVvPbXBG1HdNThsPNvZJo7jgJQSSilordF7B8Wck+u995fGGD85SZDZGINSCkIIXK+1kFKCtZbNtPwUHXHOcX7nZ0+QwdoLYoy8xHuPWityznyAGA221l6ZOPU/OT0l6Bt7izDX+1OB4T96AJmENt2LeACoAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.mdx)("img",Object.assign({parentName:"a"},{className:"gatsby-resp-image-image",alt:"switchy omega config 1",title:"switchy omega config 1",src:"/veteran-facing-services-tools/static/e1e2ff69a2f38f19a2af28739bf21ed0/e3189/switchy-omega-config-1.png",srcSet:["/veteran-facing-services-tools/static/e1e2ff69a2f38f19a2af28739bf21ed0/a2ead/switchy-omega-config-1.png 259w","/veteran-facing-services-tools/static/e1e2ff69a2f38f19a2af28739bf21ed0/6b9fd/switchy-omega-config-1.png 518w","/veteran-facing-services-tools/static/e1e2ff69a2f38f19a2af28739bf21ed0/e3189/switchy-omega-config-1.png 1035w","/veteran-facing-services-tools/static/e1e2ff69a2f38f19a2af28739bf21ed0/44d59/switchy-omega-config-1.png 1553w","/veteran-facing-services-tools/static/e1e2ff69a2f38f19a2af28739bf21ed0/21cdd/switchy-omega-config-1.png 1680w"],sizes:"(max-width: 1035px) 100vw, 1035px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n  "),"\n    "))),Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("p",{parentName:"li"},"Configure the ",Object(i.mdx)("inlineCode",{parentName:"p"},"auto switch")," profile like this:"),Object(i.mdx)("p",{parentName:"li"},Object(i.mdx)("span",Object.assign({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1035px"}}),"\n      ",Object(i.mdx)("a",Object.assign({parentName:"span"},{className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/60af0631adeab52415d26ccc49f73b3f/efa1a/switchy-omega-config-2.png",style:{display:"block"},target:"_blank",rel:"noopener"}),"\n    ",Object(i.mdx)("span",Object.assign({parentName:"a"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"22.007722007722005%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAqUlEQVQY022P3QrCMAyF9/6PNxC98HbCoNN2q/1Ne0wyKl5YOKXk5DtpplIKjDFY1xXm+UKtxKrYtg3LssA5h9aa1ogIMUYY9ipzrXdEZ/GYZ1T2pG+Sy3uvgfu+a1GGCHgcB0IIGvYVg++YkHMGcWDlwHS7ILGngeAjoLVWASmKOjcPjdrQOSgCveGVCq6e+N11g0mAsc4/+FfDT+n8YW8EFzPuNmigeB+hgTg/ag7EywAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.mdx)("img",Object.assign({parentName:"a"},{className:"gatsby-resp-image-image",alt:"switchy omega config 2",title:"switchy omega config 2",src:"/veteran-facing-services-tools/static/60af0631adeab52415d26ccc49f73b3f/e3189/switchy-omega-config-2.png",srcSet:["/veteran-facing-services-tools/static/60af0631adeab52415d26ccc49f73b3f/a2ead/switchy-omega-config-2.png 259w","/veteran-facing-services-tools/static/60af0631adeab52415d26ccc49f73b3f/6b9fd/switchy-omega-config-2.png 518w","/veteran-facing-services-tools/static/60af0631adeab52415d26ccc49f73b3f/e3189/switchy-omega-config-2.png 1035w","/veteran-facing-services-tools/static/60af0631adeab52415d26ccc49f73b3f/44d59/switchy-omega-config-2.png 1553w","/veteran-facing-services-tools/static/60af0631adeab52415d26ccc49f73b3f/efa1a/switchy-omega-config-2.png 2040w"],sizes:"(max-width: 1035px) 100vw, 1035px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n  "),"\n    "))),Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("p",{parentName:"li"},"In Chrome's menu bar, click on the proxy app and change the setting to 'auto switch':"),Object(i.mdx)("p",{parentName:"li"},Object(i.mdx)("span",Object.assign({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"440px"}}),"\n      ",Object(i.mdx)("a",Object.assign({parentName:"span"},{className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/602026a7c01ed5959d9d965b285bd4d4/48c0e/switch-omega-auto-switch.png",style:{display:"block"},target:"_blank",rel:"noopener"}),"\n    ",Object(i.mdx)("span",Object.assign({parentName:"a"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"97.68339768339767%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABYlAAAWJQFJUiTwAAADY0lEQVQ4y41VS4sTWRTOv3DrRvEHyCxkQAR1ZHAnrkaclY1v0FkOgrSbHlyMCxUGcWwRcaHSOq20qNjjW9Ox46vVPEwyialK6v2upFJVn+eeSjfd2oNe+Lin7j33u+fc86hcEASYRxiGcByHYds2z5qmsWxqKvRGDb7nodvtQtd1qKqKZrPJs9C1LAs5DIeiKJibm4NHB9rtNkOQXb82gXpbQmVqEhdHfkW5VMLs7CxeFosoV8q4Mn0V5WqFz7daLeT6/T5832d2WZLguC7fbpgmr9VqNWj0bcoSioUCPtbrkGWZoagKqo0qVLJeXN7pdJBziUC4kCQJEmFqmuKrQWvLrC4ZLnlmkhG5lJRdx4biRnjVCWF4fTwtq3j4QcHzqga/N+ADSZJml6ZpJqdDJGwGPPJSeJoTCza5Jjb7tBfFCUwidYIIkhnge0e/F/D7U1ASenQFhy/M4BDhwPgM9p2bwX6aD54vYOTMc+w5m8fev/O8Lvb3L4LQ2XUmj7N33wGDniCM8aoi4YfRy9h44hLWjd7AztPPmGDr8X9JOSM8MF7AlrFprDx4HasPT2LVoX8Ya36bxIo9E9j910OyMyLCNMb7Rgebx25h09gUfhq7S4RPsOPUY2z78wF+OfkI2088wI6Tj/HzH/fw49HbWD96h3CbseHYHaz9/RaOXMqTs33koiiCbpiQDR9dK0RTddHUXJ5bmsfzJ91jWWKdIFvXFuv5kFUTgQhKj/Iw8By06NCjksIP/LZlodpxOShtI6CDPl42DJQkh+XlRi8cBkUktufaaOs+inQojGK8aZp4UddR6ThM9Jq+CzWdZXFZPJ82SQZOG8/PCIXLJqUNvpm6X+Z6umQWObhgoe86/E43i20MSOFew8Z0w0Fe8jCnBih2fJZLqg83jBaI5vEVoW1bCPsD2D5ZG8aY+mjhdTcjeUuEs0T4RqG3tHqIBlllpF9YuoRQ1GASx5nCsJSWcVIUIJdaTLqLweVLPWFIGLGFPbJQPLrXi1BXXPynehz5NqWKTWUoDsVJRrjY3YVaJrIlUZYpB0uyh4j2n1Z13P+gYqZm4klFxycj/GaQRINeiLLoyBa57domDEMn2WB5HuJb9Mj/g2EYDNHxuX0JUtFEu9R1RZMUEB24O4TyHRC/AOH+Zxnyvjlg/C68AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.mdx)("img",Object.assign({parentName:"a"},{className:"gatsby-resp-image-image",alt:"switch omega auto switch",title:"switch omega auto switch",src:"/veteran-facing-services-tools/static/602026a7c01ed5959d9d965b285bd4d4/48c0e/switch-omega-auto-switch.png",srcSet:["/veteran-facing-services-tools/static/602026a7c01ed5959d9d965b285bd4d4/a2ead/switch-omega-auto-switch.png 259w","/veteran-facing-services-tools/static/602026a7c01ed5959d9d965b285bd4d4/48c0e/switch-omega-auto-switch.png 440w"],sizes:"(max-width: 440px) 100vw, 440px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n  "),"\n    "))),Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("p",{parentName:"li"},"Be sure to hit the Apply Changes button to save your changes!"),Object(i.mdx)("p",{parentName:"li"},Object(i.mdx)("span",Object.assign({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"322px"}}),"\n      ",Object(i.mdx)("a",Object.assign({parentName:"span"},{className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/520b8f7aad273651ae173cf6a3332574/fc778/switchy-omega-config-3.png",style:{display:"block"},target:"_blank",rel:"noopener"}),"\n    ",Object(i.mdx)("span",Object.assign({parentName:"a"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.05405405405405%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABfElEQVQoz6WSy0rDQBSG+3YuhSIuRdyoCCqiYr2BILr0UQpeKLoQFUW8MG0pRtvaxhqoJE160dpb0nxOUt1owYgHvjnMOf/8HJgTQkZef0PRLJJZnftniwdJKm9g1ZpeG9clULhSGPqp7XqtT0EX27ED4XQd/02o1WhSNauYusVrpc5/wp/QfDMRz4LbpxuEJshWsmTKGdLltOTBv6s1FbWal6g/kb1cNYfxbvQmjD3FmDgeZ+Nqg9XLNRbPFpk/W2DlPMLyxSozJ9OMHI4wejjal7GjMYYPhtkROz3D6GPUL8yezrF2sU7kfInpkxmZI2xebTN1PMng7iDhvXBfhvaHGIgOsHW91TMstyqI4i1xDyNOwkiQ0OMIXSAMQbKURDEV7sy7viiWQqqUQnvVeobeYRdL1NN5apkC9ZxGo/DCe6FILa1SUbLQcP6wNvJwvK+3O3RaTdoSu9OmI2k3G7QkXr8rV8hxHT9/56vuT+gG3NqgutCX+DeCmn4AR/QiWIGv/YUAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.mdx)("img",Object.assign({parentName:"a"},{className:"gatsby-resp-image-image",alt:"switchy omega config 3",title:"switchy omega config 3",src:"/veteran-facing-services-tools/static/520b8f7aad273651ae173cf6a3332574/fc778/switchy-omega-config-3.png",srcSet:["/veteran-facing-services-tools/static/520b8f7aad273651ae173cf6a3332574/a2ead/switchy-omega-config-3.png 259w","/veteran-facing-services-tools/static/520b8f7aad273651ae173cf6a3332574/fc778/switchy-omega-config-3.png 322w"],sizes:"(max-width: 322px) 100vw, 322px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n  "),"\n    "))),Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("p",{parentName:"li"},"NOTE: You may have to uncheck a settings flag in Chrome, see"),Object(i.mdx)("p",{parentName:"li"},Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/FelisCatus/SwitchyOmega/wiki/DNS-and-SOCKS-proxy"}),"https://github.com/FelisCatus/SwitchyOmega/wiki/DNS-and-SOCKS-proxy"))),Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("p",{parentName:"li"},"Check your connection by navigating to Sentry at\n",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"http://sentry.vetsgov-internal"}),"http://sentry.vetsgov-internal"),"."))),Object(i.mdx)("h3",{id:"firefox"},"Firefox"),Object(i.mdx)("ol",null,Object(i.mdx)("li",{parentName:"ol"},"Install Proxy Switcher\n",Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://addons.mozilla.org/en-US/firefox/addon/proxy-switcher/"}),"https://addons.mozilla.org/en-US/firefox/addon/proxy-switcher/")),Object(i.mdx)("li",{parentName:"ol"},"create a file on your system with the following contents",Object(i.mdx)("pre",{parentName:"li"},Object(i.mdx)("code",Object.assign({parentName:"pre"},{}),"function FindProxyForURL(url, host) {\n         if( /.*\\.vetsgov-internal$/.test(host) ) {\n             return 'SOCKS5 localhost:2001';\n         }\n         return 'DIRECT';\n}\n"))),Object(i.mdx)("li",{parentName:"ol"},"Configure the ",Object(i.mdx)("inlineCode",{parentName:"li"},"automatic")," tab by setting the path to be the file created above"),Object(i.mdx)("li",{parentName:"ol"},"Press the reload button in the proxy switcher configuration dialog"),Object(i.mdx)("li",{parentName:"ol"},"Check your connection by navigating to Sentry at\n",Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"http://sentry.vetsgov-internal"}),"http://sentry.vetsgov-internal"),".")),Object(i.mdx)("h2",{id:"issues"},"Issues"),Object(i.mdx)("p",null,"If your key doesn't seem to be working, contact the Platform team in the ",Object(i.mdx)("em",{parentName:"p"},"#vetsgov-devops")," Slack channel."),Object(i.mdx)("h2",{id:"tools"},"Tools"),Object(i.mdx)("h3",{id:"jenkins"},"Jenkins"),Object(i.mdx)("p",null,"With the Socks proxy set up and running, go to ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"http://jenkins.vetsgov-internal."}),"http://jenkins.vetsgov-internal.")," You can see the builds without logging in, but will need to authenticate (with GitHub) to re-run failed builds."),Object(i.mdx)("h3",{id:"sentry"},"Sentry"),Object(i.mdx)("p",null,"With the Socks proxy set up and running, go to ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"http://sentry.vetsgov-internal."}),"http://sentry.vetsgov-internal.")," You will need to register for Sentry, but after creating any username/password, you will have access. We do not really use Sentry teams except to separate production, staging, and dev errors. To view the most recent production errors, which is the most common thing to do while on call, go to ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"http://sentry.vetsgov-internal/vets-gov/platform-api-production/"}),"http://sentry.vetsgov-internal/vets-gov/platform-api-production/")),Object(i.mdx)("h3",{id:"grafana"},"Grafana"),Object(i.mdx)("p",null,"With the Socks proxy set up and running, go to ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"http://grafana.vetsgov-internal."}),"http://grafana.vetsgov-internal.")," You will need to register for Grafana, but after creating any username/password, you will have access."),Object(i.mdx)("p",null,"There are many dashboards and you should click around to get familiar with the variety of metrics being collected and visualized (make sure Data Source is set to Production). A few highlights are:"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"http://grafana.vetsgov-internal/dashboard/db/site"}),"Site")," to see overall metrics about the health of the site"),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"http://grafana.vetsgov-internal/dashboard/db/external-service-status"}),"External Service Status")," to see the availability of the services vets.gov depends on."),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"http://grafana.vetsgov-internal/dashboard/db/rds"}),"RDS")," to see the database statistics."),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"http://grafana.vetsgov-internal/dashboard/db/revproxy"}),"Rev Proxy")," to see metrics on the reverse proxies.")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-getting-started-internal-tools-mdx-15f90fb14838028cbd2a.js.map