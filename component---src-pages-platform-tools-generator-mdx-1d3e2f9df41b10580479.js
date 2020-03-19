(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{bW0g:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return m})),a.d(t,"_frontmatter",(function(){return p}));a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("91GP");var n=a("q1tI"),o=a.n(n),r=a("6qfE"),i=a("3dLD");var s={},m=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).layout=i.a,a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},s,a),components:t},o.a.createElement("h1",{id:"vagov-application-generator"},"VA.gov application generator"),o.a.createElement(r.MDXTag,{name:"p",components:t},"We have a Yeoman generator for starting up new React applications in vets-website. This page will guide you through setting up the generator and explaining the questions that are asked as part of the setup process."),o.a.createElement(r.MDXTag,{name:"blockquote",components:t},o.a.createElement(r.MDXTag,{name:"p",components:t,parentName:"blockquote"},"You can find more information about creating forms in the ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/forms"}},"forms section"),".")),o.a.createElement("h2",{id:"getting-started"},"Getting Started"),o.a.createElement(r.MDXTag,{name:"p",components:t},"To install the generator, you'll need to do the following:"),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-bash"}},"npm install -g yo\nnpm install -g @department-of-veterans-affairs/generator-vets-website\n")),o.a.createElement("h2",{id:"usage"},"Usage"),o.a.createElement(r.MDXTag,{name:"p",components:t},"Once you have the generator installed, navigate to the root of the vets-website repository and run:"),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-bash"}},"yo @department-of-veterans-affairs/vets-website\n")),o.a.createElement(r.MDXTag,{name:"p",components:t},"After running the above command, the generator will start up and ask you a series of questions:"),o.a.createElement("h3",{id:"whats-the-name-of-your-application"},"What's the name of your application?"),o.a.createElement(r.MDXTag,{name:"blockquote",components:t},o.a.createElement(r.MDXTag,{name:"p",components:t,parentName:"blockquote"},"This will be the default page title. Examples: '21P-530 Burials benefits form' or 'GI Bill School Feedback Tool'")),o.a.createElement(r.MDXTag,{name:"p",components:t},"This value will be used as the page title. If you're creating a form, it will also be used as the header for the introduction page and as a header on the confirmation page."),o.a.createElement("h3",{id:"what-folder-in-srcapplications-should-your-app-live-in"},"What folder in src/applications/ should your app live in?"),o.a.createElement(r.MDXTag,{name:"blockquote",components:t},o.a.createElement(r.MDXTag,{name:"p",components:t,parentName:"blockquote"},"This can be a subfolder. Examples: 'burials' or 'edu-benefits/0993'")),o.a.createElement(r.MDXTag,{name:"p",components:t},"Most of our React applications have their own folder in src/applications, so normally you want to pick a new folder. However, if you're building an application that's related to other applications, there may be a folder that your app should go in. An example would be if you were creating a new education form, you would probably create your app in edu-benefits/newform."),o.a.createElement("h3",{id:"what-should-be-the-name-of-your-apps-entry-bundle"},"What should be the name of your app's entry bundle?"),o.a.createElement(r.MDXTag,{name:"blockquote",components:t},o.a.createElement(r.MDXTag,{name:"p",components:t,parentName:"blockquote"},"Examples: '0993-edu-benefits' or 'feedback-tool'")),o.a.createElement(r.MDXTag,{name:"p",components:t},"This is the name of the bundle that Webpack builds for your application. They're normally lower case with dashes separating words. This is primarily used to link your bundle to the content page that is created as a base for your application. It doesn't show up in your code anywhere. It's also separate from the entry file."),o.a.createElement("h3",{id:"whats-the-root-url-for-this-app"},"What's the root url for this app?"),o.a.createElement(r.MDXTag,{name:"blockquote",components:t},o.a.createElement(r.MDXTag,{name:"p",components:t,parentName:"blockquote"},"Examples: '/gi-bill-comparison-tool/' or 'education/opt-out-information-sharing/opt-out-form-0993'")),o.a.createElement(r.MDXTag,{name:"p",components:t},"This is the url your application will live at. In your React apps you will likely have multiple pages and the urls for those pages will have this as the base. This value also gets translated into the page for the content page, which lives in ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"content/pages"),"."),o.a.createElement("h3",{id:"is-this-a-form-app"},"Is this a form app?"),o.a.createElement(r.MDXTag,{name:"p",components:t},"If this is a form, there are some more questions after this step. If not, you're done!"),o.a.createElement("h3",{id:"whats-your-form-number-examples-22-0993-or-21p-530"},"What's your form number? Examples: '22-0993' or '21P-530'"),o.a.createElement(r.MDXTag,{name:"p",components:t},"This is the form number for the paper form you're converting. Normally it's something like 22-1990 or 21-22. This is used in a couple places in the UI and also as a key for the save in progress functionality of our forms."),o.a.createElement("h3",{id:"whats-the-google-analytics-event-prefix-that-you-want-to-use-examples-burials-530--or-edu-0993-"},"What's the Google Analytics event prefix that you want to use? Examples: 'burials-530-' or 'edu-0993-'"),o.a.createElement(r.MDXTag,{name:"p",components:t},"Our shared form code sends events to Google Analytics and we need a unique prefix to be able to categorize the events by form. It's normally a dash separated value like ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"hca-")," or ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"edu-1990-")," and is made up by developers."),o.a.createElement("h3",{id:"whats-the-respondent-burden-of-this-form-in-minutes"},"What's the respondent burden of this form in minutes?"),o.a.createElement(r.MDXTag,{name:"p",components:t},"Each paper form has OMB information that lives in the margins of each page (usually in the top right):"),o.a.createElement(r.MDXTag,{name:"p",components:t},o.a.createElement(r.MDXTag,{name:"img",components:t,parentName:"p",props:{src:"../../images/omb_form_info.png",alt:"Form page with OMB info"}})),o.a.createElement(r.MDXTag,{name:"p",components:t},"This is the respondent burden value from that information. All the information from this question and the next two can be found in the props for the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"OMBInfo")," component in ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"containers/IntroductionPage.jsx"),", if you need to change it later."),o.a.createElement("h3",{id:"whats-the-omb-control-number-for-this-form"},"What's the OMB control number for this form?"),o.a.createElement(r.MDXTag,{name:"p",components:t},"Similarly to the last question, this is more information from the OMB data, which lives in the margins of the pages of the paper form."),o.a.createElement("h3",{id:"whats-the-omb-expiration-date-in-mdyyyy-format-for-this-form-example-1312019"},"What's the OMB expiration date (in M/D/YYYY format) for this form? Example: '1/31/2019'"),o.a.createElement(r.MDXTag,{name:"p",components:t},"Again similarly to the last question, this is more information from the OMB data, which lives in the margins of the pages of the paper form."),o.a.createElement("h3",{id:"whats-the-benefit-description-for-this-form-examples-education-benefits-or-disability-claims-increase"},"What's the benefit description for this form? Examples: 'education benefits' or 'disability claims increase'"),o.a.createElement(r.MDXTag,{name:"p",components:t},'This question is a bit more nebulous. We have a description of the type of benefits that you would be getting by using this form. Other examples are "health care benefits" and "veteran id card."'),o.a.createElement("h3",{id:"what-kind-of-form-template-would-you-like-to-start-with"},"What kind of form template would you like to start with?"),o.a.createElement(r.MDXTag,{name:"p",components:t},"Choose from the following options:"),o.a.createElement(r.MDXTag,{name:"ul",components:t},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"p",components:t,parentName:"li"},o.a.createElement(r.MDXTag,{name:"strong",components:t,parentName:"p"},"BLANK: A form without any fields"),"\nThis option gives you a bare bones form config object in ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"form.js")," pre-filled with basic boilerplate data based on the answers to the generator's questions.")),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"p",components:t,parentName:"li"},o.a.createElement(r.MDXTag,{name:"strong",components:t,parentName:"p"},"SIMPLE: A single-chapter form with a single field"),"\nThis option gives you a simple form config object in ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"form.js")," that renders a simple form composed of a single input field on a single page chapter.")),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"p",components:t,parentName:"li"},o.a.createElement(r.MDXTag,{name:"strong",components:t,parentName:"p"},"COMPLEX: A complex, multi-chapter form with multiple fields"),"\nThis option gives you a complex form config object in ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"form.js"),' that renders a "playground" form composed of multiple chapters, including both single page and multi-page chapters, and a variety of form components to inspect and experiment with.'))),o.a.createElement("h2",{id:"youre-done"},"You're done!"),o.a.createElement(r.MDXTag,{name:"p",components:t},"Once you've answered all those questions, you're done and the generator will create the files for you. To see them in your local development environment, you'll need to build again or restart the watch task you have running."),o.a.createElement(r.MDXTag,{name:"p",components:t},"To learn more about using the generator and working with the generated code, see our ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/forms"}},"forms documentation"),"."))},n}(o.a.Component),p={}}}]);
//# sourceMappingURL=component---src-pages-platform-tools-generator-mdx-1d3e2f9df41b10580479.js.map