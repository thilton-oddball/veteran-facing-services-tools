(window.webpackJsonp=window.webpackJsonp||[]).push([[83,50],{"3dLD":function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var n=a("q1tI"),r=a.n(n),i=a("8FPV"),o=a("Wbzz");function s(){return r.a.createElement(o.StaticQuery,{query:"4277382034",render:function(e){return r.a.createElement(m,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})}})}function l(e){var t=e.item;return t.href?r.a.createElement("li",{key:t.name},r.a.createElement(o.Link,{to:t.href},t.name)):r.a.createElement("li",{key:t.name},t.name," (future)")}function m(e){var t=e.items,a=e.isSublist,n=void 0!==a&&a;return t.length?r.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?r.a.createElement("li",{key:e.name},n&&r.a.createElement(l,{item:e}),!n&&r.a.createElement("h2",{className:"heading-level-4"},e.name),r.a.createElement(m,{isSublist:!0,items:e.items})):"componentList"===e.query?r.a.createElement("li",{key:e.name},n&&r.a.createElement(l,{item:e}),!n&&r.a.createElement("h2",{className:"heading-level-4"},e.name),r.a.createElement(s,null)):r.a.createElement(l,{item:e,key:e.name})}))):null}var c=a("MEl4"),d=a.n(c);function p(e){var t=e.location,a=d.a.sections.find((function(e){return t.pathname.includes(e.href)}));return a?r.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},r.a.createElement("div",{className:"site-c-sidenav"},r.a.createElement(m,{items:a.items}))):null}function u(e){var t=e.componentToMatch;return r.a.createElement(o.StaticQuery,{query:"4193446859",render:function(e){return e.components.edges.map((function(e){return t===e.node.context.name.toLowerCase()?r.a.createElement(g,{item:{name:e.node.context.name}}):""}))}})}function g(e){var t=e.item,a="https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master/packages/formation-react/src/components/"+t.name+"/"+t.name+".mdx";return r.a.createElement(o.Link,{to:a},"Edit this page on GitHub")}function b(e){var t=e.pathname.split("/");return r.a.createElement(u,{componentToMatch:t[3]})}var f=function(e){var t=e.pathname.replace("/veteran-facing-services-tools","");return t.length>0&&"/"===t.charAt(t.length-1)&&(t=t.substring(0,t.length-1)),t};function h(e){var t=e.location,a="https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master/packages/documentation/src/pages"+f(t)+function(e){var t=f(e),a=d.a.sections.find((function(e){return t.includes(e.href)})),n=d.a.sections.find((function(e){return e.href===t}));if(null==n?void 0:n.indexmdx)return"/index";if((null==a?void 0:a.items)&&a.items.map((function(e){return Array.isArray(e.items)?e.items.find((function(e){return e.href===t})):null})).map((function(e){if((null==e?void 0:e.href)&&e.href===t)return!!(null==e?void 0:e.indexmdx)})).find((function(e){return e})))return"/index";return""}(t)+".mdx";return r.a.createElement(o.Link,{to:a},"Edit this page on GitHub")}function j(e){var t=e.location;return r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("br",null),r.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",function(e){if(e.pathname.includes("components")){var t=e.pathname.replace("/veteran-facing-services-tools","");return r.a.createElement(b,{pathname:t})}return r.a.createElement(h,{location:e})}(t)))}function O(e){var t=e.children,a=e.location;return r.a.createElement(i.a,{location:a},r.a.createElement("div",{className:"vads-l-row"},r.a.createElement(p,{location:a}),r.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,r.a.createElement(j,{location:a}))))}},nR2c:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return m}));var n=a("zLVn"),r=(a("q1tI"),a("7ljp")),i=a("3dLD"),o={},s={_frontmatter:o},l=i.a;function m(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.mdx)(l,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("h1",{id:"feature-toggles"},"Feature toggles"),Object(r.mdx)("p",null,"Feature toggles can be used in both vets-api and vets-website to manage unreleased features in a continuous integration environment. Feature toggles enable VFS teams to test out new functionality (applications, features, VA.gov content pages, Metalsmith) in the VSP development, staging, or production environments for a set of users. Teams can enable or disable a feature for all users, a percentage of all users, a percentage of all logged-in users, a list of users, or users defined in a method."),Object(r.mdx)("p",null,"Feature toggles:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"Allow for production toggle switching without redeploying vets-website"),Object(r.mdx)("li",{parentName:"ul"},"Provide a user interface for managing feature toggle behavior"),Object(r.mdx)("li",{parentName:"ul"},"Provide code helpers for handling common user experience scenarios"),Object(r.mdx)("li",{parentName:"ul"},"Are powered by an open-source gem called ",Object(r.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/jnunemaker/flipper"}),"Flipper gem"))),Object(r.mdx)("p",null,"See the following sections for information about creating feature toggles:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("a",Object.assign({parentName:"li"},{href:"#writing-good-feature-toggles"}),"Writing good feature toggles")),Object(r.mdx)("li",{parentName:"ul"},"Adding a new feature toggle",Object(r.mdx)("ul",{parentName:"li"},Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("a",Object.assign({parentName:"li"},{href:"#add-feature"}),"Frontend")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("a",Object.assign({parentName:"li"},{href:"#backend"}),"Backend")))),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("a",Object.assign({parentName:"li"},{href:"#flipper-ui"}),"Enabling and disabling features"))),Object(r.mdx)("h2",{id:"a-idwriting-good-feature-toggleswriting-good-feature-togglesa"},Object(r.mdx)("a",Object.assign({parentName:"h2"},{id:"writing-good-feature-toggles"}),"Writing good feature toggles")),Object(r.mdx)("p",null,"Keep the following items in mind as you add feature toggles:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"Remember that each environment has its own set of feature toggle values."),Object(r.mdx)("li",{parentName:"ul"},"Test your feature toggle in staging before using it in production."),Object(r.mdx)("li",{parentName:"ul"},"Remove feature toggles as soon as they are not needed."),Object(r.mdx)("li",{parentName:"ul"},"Make toggles that are ",Object(r.mdx)("a",Object.assign({parentName:"li"},{href:"https://programmingisterrible.com/post/139222674273/write-code-that-is-easy-to-delete-not-easy-to"}),"easy to delete")," by gating a behavior in as few places as possible. It's often better to have blocks of repeating code that can be quickly deleted later than it is to gate several small pieces of code.")),Object(r.mdx)("p",null,"After a page is rendered, the feature toggle client retrieves the latest toggle values from the feature toggle service and the page is updated using the latest feature toggle values. The application shows a loading state for the new feature while the toggle values are retrieved from the service."),Object(r.mdx)("h2",{id:"a-idadd-featureadding-a-new-feature-toggle-frontenda"},Object(r.mdx)("a",Object.assign({parentName:"h2"},{id:"add-feature"}),"Adding a new feature toggle (frontend)")),Object(r.mdx)("p",null,"Follow these steps to add and use a new feature toggle in vets-website:"),Object(r.mdx)("ol",null,Object(r.mdx)("li",{parentName:"ol"},Object(r.mdx)("p",{parentName:"li"},"Determine your feature toggle name."),Object(r.mdx)("p",{parentName:"li"},Object(r.mdx)("strong",{parentName:"p"},"Note:")," There are no naming conventions yet. Current examples put the application name first, such as ",Object(r.mdx)("inlineCode",{parentName:"p"},"facilityLocatorShowCommunityCares")," and ",Object(r.mdx)("inlineCode",{parentName:"p"},"profileShowDirectDeposit"),".")),Object(r.mdx)("li",{parentName:"ol"},Object(r.mdx)("p",{parentName:"li"},"Add the feature name to vets-api (in snake case) by updating ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/department-of-veterans-affairs/vets-api/blob/master/config/features.yml"}),"config/features.yml"),":"),Object(r.mdx)("pre",{parentName:"li"},Object(r.mdx)("code",Object.assign({parentName:"pre"},{className:"language-yml"}),"features:\n app_name_then_your_feature_name:\n   actor_type: user\n   description: >\n     This describes what the feature does and\n     which team is responsible for the toggle.\n"))),Object(r.mdx)("li",{parentName:"ol"},Object(r.mdx)("p",{parentName:"li"},'Determine how you want the feature toggle to be "sticky".\nFor the behavior to be consistent across all devices for a logged in user choose "user" as the  actor_type.\nFor the behavior to be consistent for a user for the duration of a cookie within a single browser, regardless of their logged in status choose "cookie_id" as the actor_type.')),Object(r.mdx)("li",{parentName:"ol"},Object(r.mdx)("p",{parentName:"li"},"Run vets-api locally. This can be done on master after your pull request (PR) is merged or off of your feature branch.")),Object(r.mdx)("li",{parentName:"ol"},Object(r.mdx)("p",{parentName:"li"},"Navigate to ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"http://localhost:3000/flipper/features"}),"http://localhost:3000/flipper/features")," and verify that you see your new feature name. If not, restart your rails server.")),Object(r.mdx)("li",{parentName:"ol"},Object(r.mdx)("p",{parentName:"li"},"Add the feature toggle name (in camel case) to vets-website by updating ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/utilities/feature-toggles/featureFlagNames.js"}),"featureFlagNames.js"),"."))),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"const FEATURE_FLAG_NAMES = Object.freeze({\n showYourFeatureName: 'appNameThenYourFeatureName',\n})\n")),Object(r.mdx)("ol",{start:7},Object(r.mdx)("li",{parentName:"ol"},Object(r.mdx)("p",{parentName:"li"},"Submit a PR for each feature. Crosslinking the PRs in a comment will make it easier for the reviewers to check.")),Object(r.mdx)("li",{parentName:"ol"},Object(r.mdx)("p",{parentName:"li"},"Use the selector helper to build a ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://daveceddia.com/redux-selectors/"}),"selector")," for your feature toggle. See an example ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/f6178ac59b1d691e0f31fb36903b8ba54091b517/src/applications/gi/containers/ProfilePage.jsx#L118"}),"here"),"."),Object(r.mdx)("p",{parentName:"li"},Object(r.mdx)("strong",{parentName:"p"},"Note:")," In the following example, the ",Object(r.mdx)("inlineCode",{parentName:"p"},"toggleValues")," object is a flat list of ",Object(r.mdx)("inlineCode",{parentName:"p"},"toggleName")," and boolean key value pairs. Also, note that ",Object(r.mdx)("inlineCode",{parentName:"p"},"toggleValues")," is imported from ",Object(r.mdx)("inlineCode",{parentName:"p"},"platform/site-wide/feature-toggles/selectors")," and ",Object(r.mdx)("inlineCode",{parentName:"p"},"FEATURE_FLAG_NAMES")," is imported from ",Object(r.mdx)("inlineCode",{parentName:"p"},"platform/utilities/feature-toggles/featureFlagNames"),"."))),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"// import the toggleValues helper\nimport { toggleValues } from 'platform/site-wide/feature-toggles/selectors';\n\n// use the toggleValues helper to select the toggle values list\nexport const appNameThenYourFeatureName = state =>\n  toggleValues(state).appNameThenYourFeatureName;\n")),Object(r.mdx)("ol",{start:9},Object(r.mdx)("li",{parentName:"ol"},Object(r.mdx)("p",{parentName:"li"},"Use the feature toggle value to gate your new behavior. For example, you can use the selector above in ",Object(r.mdx)("inlineCode",{parentName:"p"},"mapStateToProps")," to pass the toggle as a prop into your component."),Object(r.mdx)("p",{parentName:"li"},Object(r.mdx)("strong",{parentName:"p"},"Note:")," Currently the feature toggle values are only available on the global redux state."))),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"function mapStateToProps(state) {\n  return {\n    showYourFeatureName:\n      appNameThenYourFeatureName(state),\n  };\n}\n\n...\n// inside your connected component\n\nrender() {\n   const { showYourFeatureName } = this.props;\n\n   return (\n     { showYourFeatureName && <NewFeature /> }\n   );\n}\n")),Object(r.mdx)("ol",{start:10},Object(r.mdx)("li",{parentName:"ol"},"Use the ",Object(r.mdx)("a",Object.assign({parentName:"li"},{href:"#flipper-ui"}),"Flipper UI")," to test out the toggle locally. Refresh the page to update the feature toggle state. This value can take up to a minute to update in staging and production.")),Object(r.mdx)("h2",{id:"a-idbackendadding-a-new-feature-toggle-backenda"},Object(r.mdx)("a",Object.assign({parentName:"h2"},{id:"backend"}),"Adding a new feature toggle (backend)")),Object(r.mdx)("p",null,"Follow these steps to add and use a new feature toggle in vets-api:"),Object(r.mdx)("ol",null,Object(r.mdx)("li",{parentName:"ol"},Object(r.mdx)("p",{parentName:"li"},"Determine your feature toggle name."),Object(r.mdx)("p",{parentName:"li"},Object(r.mdx)("strong",{parentName:"p"},"Note:")," There are no naming conventions yet. Current examples put the application name first, such as ",Object(r.mdx)("inlineCode",{parentName:"p"},"facilityLocatorShowCommunityCares")," and ",Object(r.mdx)("inlineCode",{parentName:"p"},"profileShowDirectDeposit"),".")),Object(r.mdx)("li",{parentName:"ol"},Object(r.mdx)("p",{parentName:"li"},"Add the feature name to vets-api (in snake case) by updating ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/department-of-veterans-affairs/vets-api/blob/master/config/features.yml"}),"config/features.yml"),":"),Object(r.mdx)("pre",{parentName:"li"},Object(r.mdx)("code",Object.assign({parentName:"pre"},{className:"language-yml"}),"features:\n   app_name_then_your_feature_name:\n   actor_type: user\n   description: >\n     This describes what the feature does and\n     which team is responsible for the toggle.\n"))),Object(r.mdx)("li",{parentName:"ol"},Object(r.mdx)("p",{parentName:"li"},'Determine how you want the feature toggle to be "sticky".\nFor the behavior to be consistent across all devices for a logged in user choose "user" as the  actor_type.\nFor the behavior to be consistent for a user for the duration of a cookie within a single browser, regardless of their logged in status choose "cookie_id" as the actor_type.')),Object(r.mdx)("li",{parentName:"ol"},Object(r.mdx)("p",{parentName:"li"},"Run vets-api locally. This can be done on master after your PR is merged or off of your feature branch.")),Object(r.mdx)("li",{parentName:"ol"},Object(r.mdx)("p",{parentName:"li"},"Navigate to ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"http://localhost:3000/flipper/features"}),"http://localhost:3000/flipper/features")," and verify that you see your new feature name. If not, restart your rails server."))),Object(r.mdx)("h3",{id:"backend-example"},"Backend example"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object.assign({parentName:"pre"},{className:"language-rb"}),'def base_method_name(params)\n  if Flipper.enabled?(:feature_flag, @current_user)\n    base_method_name_feature_enabled(params)\n  else\n    base_method_name_feature_disabled(params)\n  end\nend\ndef base_method_name_feature_enabled(params)\n  # How it behaves with the feature toggle enabled\nend\ndef base_method_name_feature_disabled(params)\n  # How it behaves without the feature toggle enabled\nend\n\n### spec\nRSpec.describe Object do\n  context "Feature feature_flag=true" do\n    before do\n      Flipper.enable(:feature_flag)\n    end\n    it "behaves this way with the feature enabled" do\n    end\n  end\n  context "Feature feature_flag=false" do\n    before do\n      Flipper.disable(:feature_flag)\n    end\n    it "behaves this way with the feature disabled" do\n    end\n  end\nend\n')),Object(r.mdx)("h2",{id:"a-idflipper-uienabling-and-disabling-featuresa"},Object(r.mdx)("a",Object.assign({parentName:"h2"},{id:"flipper-ui"}),"Enabling and disabling features")),Object(r.mdx)("p",null,"You can enable or disable features in the Flipper UI:"),Object(r.mdx)("ol",null,Object(r.mdx)("li",{parentName:"ol"},"Navigate to the Flipper UI at the following URLs:")),Object(r.mdx)("table",null,Object(r.mdx)("thead",{parentName:"table"},Object(r.mdx)("tr",{parentName:"thead"},Object(r.mdx)("th",Object.assign({parentName:"tr"},{align:null}),"Environment"),Object(r.mdx)("th",Object.assign({parentName:"tr"},{align:null}),"URL"))),Object(r.mdx)("tbody",{parentName:"table"},Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Dev"),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"http://localhost:3000/flipper/features")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Staging"),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.mdx)("a",Object.assign({parentName:"td"},{href:"https://staging-api.va.gov/flipper/features"}),"https://staging-api.va.gov/flipper/features"))),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Production"),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.mdx)("a",Object.assign({parentName:"td"},{href:"https://api.va.gov/flipper/features"}),"https://api.va.gov/flipper/features"))))),Object(r.mdx)("ol",{start:2},Object(r.mdx)("li",{parentName:"ol"},"To access the Flipper UI, you must sign in using an ",Object(r.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/va.gov-login-process.md"}),"identity-verified id.me user")," that is listed in ",Object(r.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/vets-api/blob/master/config/settings.yml"}),"settings.yml"),":")),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object.assign({parentName:"pre"},{}),"flipper:\n  admin_user_emails:\n    - email@email.us\n    - email1@email.us\n")),Object(r.mdx)("b",null,"Notes:"),"- If you are not on the list, you can add yourself or your teammates to the file. - If you're not sure if your account is identity-verified, you can check by going to [this page](https://www.va.gov/profile/). If you need to verify your account you'll see a \"Verify with ID.me\" button.",Object(r.mdx)("ol",{start:3},Object(r.mdx)("li",{parentName:"ol"},Object(r.mdx)("p",{parentName:"li"},"Once you have logged into the Flipper UI, you can perform the following actions:"),Object(r.mdx)("ul",{parentName:"li"},Object(r.mdx)("li",{parentName:"ul"},'Select "Enable for everyone" or "Disable for everyone" to enable or disable the feature for all users.'),Object(r.mdx)("li",{parentName:"ul"},'For a gradual rollout or an a/b test you can use "Percentage of Logged in Users." "Percentage of Logged in Users" will enable the feature for the same users each time they return to the site as long as you don\'t change the percentage.'),Object(r.mdx)("li",{parentName:"ul"},'Use "Percentage of Time" to enable a feature for all users for a percentage of time.'),Object(r.mdx)("li",{parentName:"ul"},'Register a "Group" of users to enable a feature for.'),Object(r.mdx)("li",{parentName:"ul"},"You can also roll out a feature for a select few users by adding their email address to the “Users” section. For performance reasons, the list of users is intended to be small — do not use this option for hundreds of users.")),Object(r.mdx)("p",{parentName:"li"},"The values of each toggle are cached in memory for one minute, so it may take that long to see the effect of enabling or disabling the toggle."),Object(r.mdx)("p",{parentName:"li"},Object(r.mdx)("img",Object.assign({parentName:"p"},{src:"https://user-images.githubusercontent.com/19188/74881655-b4d11a80-533b-11ea-8e97-fdea24c10830.png",alt:"Screen Shot"}))))),Object(r.mdx)("p",null,Object(r.mdx)("em",{parentName:"p"},"The following sections contain information that will be phased out.")),Object(r.mdx)("h2",{id:"testing-new-applications-and-updates-to-existing-applications"},"Testing new applications and updates to existing applications"),Object(r.mdx)("p",null,Object(r.mdx)("em",{parentName:"p"},"Use the method described above to ",Object(r.mdx)("a",Object.assign({parentName:"em"},{href:"#add-feature"}),"add")," and ",Object(r.mdx)("a",Object.assign({parentName:"em"},{href:"#flipper-ui"}),"enable/disable")," feature toggles. The method described in this section will be phased out.")),Object(r.mdx)("p",null,"In the ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://staging.va.gov"}),"staging environment"),", you can test unreleased features or applications using ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/utilities/environment/index.js"}),"!isProduction()"),"."),Object(r.mdx)("p",null,"In the ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://www.va.gov"}),"production environment"),", you can test unreleased features and applications by checking ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/utilities/storage/localStorage.js"}),"localstorage")," for a developer-defined name/value. You can do this by:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"Adding the feature name/value to local storage with a console command in the browser"),Object(r.mdx)("li",{parentName:"ul"},"Using application specific code that automatically checks when a certain query parameter is present")),Object(r.mdx)("b",null,"Note:")," Unreleased applications can be made available on production behind a password by setting `protected: yes` in [react_routes.yml](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/react_routes.yml). External teams should work with their DSVA contact to request support for enabling this.",Object(r.mdx)("h2",{id:"testing-content-pages"},"Testing content pages"),Object(r.mdx)("p",null,Object(r.mdx)("em",{parentName:"p"},"Use the method described above to ",Object(r.mdx)("a",Object.assign({parentName:"em"},{href:"#add-feature"}),"add")," and ",Object(r.mdx)("a",Object.assign({parentName:"em"},{href:"#flipper-ui"}),"enable/disable")," feature toggles. The method described in this section will be phased out.")),Object(r.mdx)("h3",{id:"app-landing-pages-generated-by-registryjson"},"App-landing pages generated by registry.json"),Object(r.mdx)("p",null,"Applications can control the HTML landing page associated with the application via a ",Object(r.mdx)("inlineCode",{parentName:"p"},"template")," property in the application's entry in the ",Object(r.mdx)("inlineCode",{parentName:"p"},"src/applications/registry.json"),". Properties defined inside the ",Object(r.mdx)("inlineCode",{parentName:"p"},"template")," property will pass through the Metalsmith templating process the same way as a vagov-content ",Object(r.mdx)("inlineCode",{parentName:"p"},".md")," file. This means that via the ",Object(r.mdx)("inlineCode",{parentName:"p"},"template")," property, your appliations entry in ",Object(r.mdx)("inlineCode",{parentName:"p"},"registry.json")," can implement a feature toggle the same way as a ",Object(r.mdx)("inlineCode",{parentName:"p"},".md")," file to prevent its HTML page from rendering in production environments. For example:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n   "appName": "Fantastic application",\n   "entryName": "fantastic-application",\n   "rootUrl": "/path/to/fantastic-application",\n   "template": {\n       "layout": "page-react.html",\n       "title": "Fantastic application",\n       "vagovprod": false\n   }\n}\n')),Object(r.mdx)("p",null,"The ",Object(r.mdx)("inlineCode",{parentName:"p"},"vagovprod")," property explicitly set to ",Object(r.mdx)("inlineCode",{parentName:"p"},"false")," will exclude this application from production builds."),Object(r.mdx)("h3",{id:"vagov-content-md-files"},"vagov-content .md files"),Object(r.mdx)("p",null,"Unreleased content pages should always be made available on ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://staging.va.gov"}),"staging.va.gov")," by adding an exclusion toggle to the front matter of the content page. For example, because this front matter includes ",Object(r.mdx)("inlineCode",{parentName:"p"},"vagovprod: false"),", this content page would be excluded from the build for the production environment:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object.assign({parentName:"pre"},{className:"language-markdown"}),'---\ntitle: Apply for disability benefits\nvagovprod: false\n---\n<nav aria-label="Breadcrumb" aria-live="polite" class="va-nav-breadcrumbs"\nid="va-breadcrumbs">\n')),Object(r.mdx)("p",null,"Content pages can be excluded from any or all of these environments:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object.assign({parentName:"pre"},{className:"language-markdown"}),"vagovprod: false\nvagovstaging: false\nvagovdev: false\nlocalhost: false\n")),Object(r.mdx)("h2",{id:"testing-cms-feature-toggles"},"Testing CMS feature toggles"),Object(r.mdx)("p",null,Object(r.mdx)("em",{parentName:"p"},"Use the method described above to ",Object(r.mdx)("a",Object.assign({parentName:"em"},{href:"#add-feature"}),"add")," and ",Object(r.mdx)("a",Object.assign({parentName:"em"},{href:"#flipper-ui"}),"enable/disable")," feature toggles. The method described in this section will be phased out.")),Object(r.mdx)("p",null,"VA.gov creates some pages based on content from the VA's Drupal CMS. The CMS has its own content model, which can sometimes change. When those changes modify the existing structure of the content model, the queries and templates in vets-website that expect a different model may break. And because the CMS and vets-website are separate systems with different deployment processes, we can't push up changes in both systems simultaneously. In order to keep the two systems in sync, we need to be able to turn features on and off in vets-website depending on what environment we're in, and update that feature state whenever a cms deployment happens."),Object(r.mdx)("p",null,"We've created some infrastructure to make this a little easier to do."),Object(r.mdx)("h3",{id:"creating-a-toggle-and-turning-it-on-or-off"},"Creating a toggle and turning it on or off"),Object(r.mdx)("p",null,"When running a new vets-website build, the script will fetch all CMS feature toggles from Drupal. This allows the toggles to be controlled from within Drupal."),Object(r.mdx)("p",null,"Before writing any code to use a new feature toggle, it must first be created from within Drupal for all three environments. The feature toggles can be found at ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://dev.cms.va.gov/admin/config/system/feature_toggle"}),"https://dev.cms.va.gov/admin/config/system/feature_toggle")," for dev. Staging and production have similar pages."),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Important:")," The new feature toggle ",Object(r.mdx)("em",{parentName:"p"},"must")," be in ",Object(r.mdx)("em",{parentName:"p"},"every")," Drupal environment or vets-website builds will fail when we try to use it! This is intentional so we don't have \"accidentally\" false feature toggles when Drupal doesn't have a toggle that vets-website is trying to use."),Object(r.mdx)("h3",{id:"using-toggles-in-graphql-queries"},"Using toggles in GraphQL queries"),Object(r.mdx)("p",null,"Because the toggles are fetched dynamically, they aren't stored in a file that we can ",Object(r.mdx)("inlineCode",{parentName:"p"},"require")," from a GraphQL query file. The build script puts the current toggles are put into ",Object(r.mdx)("inlineCode",{parentName:"p"},"global.cmsFeatureFlags")," after it either fetches the most recent toggles or uses the cache."),Object(r.mdx)("p",null,"Keep in mind the advice in the ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"#writing-good-feature-toggles"}),"writing good feature toggles")," section. You should write the logic in a way that is easy to remove later. It's often easier to change some logic and then add a conditional that modifies something with the toggle is not enabled. That lets you simply remove the conditional later."),Object(r.mdx)("h3",{id:"using-feature-toggles-in-liquid-templates"},"Using feature toggles in Liquid templates"),Object(r.mdx)("p",null,"All liquid templates have access to the current feature toggle state:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object.assign({parentName:"pre"},{className:"language-liquid"}),"{% if enabledFeatureFlags.feature1 == true %}\n  <div>Fancy new feature</div>\n{% endif %}\n")),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Note:")," From within the JavaScript context, the feature toggles are in ",Object(r.mdx)("inlineCode",{parentName:"p"},"global.cmsFeatureFlags"),", but within the Liquid template context, they can be found in ",Object(r.mdx)("inlineCode",{parentName:"p"},"enabledFeatureFlags"),"."),Object(r.mdx)("h2",{id:"need-assistance"},"Need assistance?"),Object(r.mdx)("p",null,"Tag #vfs-platform-support in Slack if you need more information."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-platform-tools-feature-toggles-mdx-e2f416379bd0b06891ca.js.map