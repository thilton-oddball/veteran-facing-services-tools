(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{338:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return s}),t.d(n,"_frontmatter",function(){return l});t(11),t(9),t(6),t(19),t(10);var a=t(2),o=t.n(a),m=t(3),r=t(396);var c={},s=function(e){var n,t;function a(n){var t;return(t=e.call(this,n)||this).layout=r.a,t}return t=e,(n=a).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t,a.prototype.render=function(){var e=this.props,n=e.components,t=function(e,n){if(null==e)return{};var t,a,o={},m=Object.keys(e);for(a=0;a<m.length;a++)t=m[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return o.a.createElement(m.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},c,t),components:n},o.a.createElement("h1",{id:"write-a-unit-test"},"Write a unit test"),o.a.createElement("h2",{id:"unit-testing-overview"},"Unit testing overview"),o.a.createElement(m.MDXTag,{name:"ul",components:n},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"vets-website")," uses",o.a.createElement(m.MDXTag,{name:"ul",components:n,parentName:"li"},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://mochajs.org/"}},"Mocha")," for running unit tests"),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"http://chaijs.com/"}},"Chai")," for test assertions"),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://airbnb.io/enzyme/"}},"Enzyme")," for mounting and inspecting React components"),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://sinonjs.org/"}},"Sinon")," for stubs and spies"))),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"Unit tests are ",o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"li"},"collocated with application folder")," in a test directory that matches the application directory structure")),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"- 📂 src\n  - 📂 my-application\n    - 📂 components\n      - MyComponent.jsx\n    - 📂 tests\n      - 📂 components\n        - MyComponent.unit.spec.jsx\n")),o.a.createElement(m.MDXTag,{name:"ul",components:n},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"Mocha runs all unit tests under ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"/src")," folder that end with ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},".unit.spec.js(x)"))),o.a.createElement("h2",{id:"unit-test-conventions"},"Unit test conventions"),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"import { expect } from 'chai';\nimport { shallow } from 'enzyme';\nimport MyComponent from '../../components/MyComponent';\n\ndescribe('my-application', () => {\n  describe('MyComponent', () => {\n    it('renders privacy act disclosure when state.show is true', () => {\n        const componentUnderTest = shallow(<MyComponent />);\n        ...\n        expect(someCondition).to.be.true;\n\n        componentUnderTest.unmount();\n    })\n  });\n});\n")),o.a.createElement(m.MDXTag,{name:"ul",components:n},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"use ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"describe")," to organize tests by application and feature",o.a.createElement(m.MDXTag,{name:"ul",components:n,parentName:"li"},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"two levels is adequate depending on the size of the application being tested"))),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"use ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"it")," to describe the unit test",o.a.createElement(m.MDXTag,{name:"ul",components:n,parentName:"li"},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"use active voice"),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"describe the behavior in terms specific to the unit"),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"don't abstract the test description with business logic"),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"li"},"Recommended"),":",o.a.createElement(m.MDXTag,{name:"ul",components:n,parentName:"li"},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"it('truncates the address property when it is longer than 15 characters')")),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"it('renders an error when props.errors contains at least one item')")))),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"li"},"Not recommended"),":",o.a.createElement(m.MDXTag,{name:"ul",components:n,parentName:"li"},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"it('shortens the address when the user has a long address')")),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"it('shows an error when the user is not logged in')")))),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"use Enzyme's ",o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://airbnb.io/enzyme/docs/api/shallow.html"}},"shallow")," instead of ",o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://airbnb.io/enzyme/docs/api/mount.html"}},"mount")," when possible to test components"),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"always ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"unmount")," components at the end of the test")))),o.a.createElement("h2",{id:"writing-unit-tests-for-vafs-pages"},"Writing unit tests for VAFS pages"),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"import { DefinitionTester } from 'platform/testing/unit/schemaform-utils';\n\ndescribe('MyForm FormID', () => {\n\nconst {\n    schema,\n    uiSchema,\n    arrayPath,\n  } = formConfig.chapters.myFormChapter.pages.myFormPage;\n\n  it('renders myFormPage form', () => {\n    const form = mount(\n      <DefinitionTester\n        arrayPath={arrayPath}\n        pagePerItemIndex={0}\n        definitions={formConfig.defaultDefinitions}\n        schema={schema}\n        data={initialData}\n        formData={initialData}\n        uiSchema={uiSchema}\n      />,\n    );\n\n    expect(form.find('select').length).to.equal(6); // from/to months, days; country, state\n    expect(form.find('input').length).to.equal(4); // facility name, from/to years, city\n    form.unmount();\n  });\n")),o.a.createElement(m.MDXTag,{name:"ul",components:n},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"organize forms config tests by page"),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"use the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"<DefinitionTester />")," to render form configs for testing"),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"test at least",o.a.createElement(m.MDXTag,{name:"ul",components:n,parentName:"li"},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"number of each type of input is rendered (example above)"),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"any conditional display logic on the page"),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"all field level validation errors"))),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"use the other ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"schemaform-utils")," for filling out form data:")),o.a.createElement(m.MDXTag,{name:"blockquote",components:n},o.a.createElement(m.MDXTag,{name:"ul",components:n,parentName:"blockquote"},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"fillData()")," - Enzyme helper that fires a change event with a value for an element at the given selector")),o.a.createElement(m.MDXTag,{name:"pre",components:n,parentName:"blockquote"},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"fillData(\n  form, // mounted <DefinitionTester />\n  'select#root_blah' // selector\n  'USA', // value\n);\n")),o.a.createElement(m.MDXTag,{name:"ul",components:n,parentName:"blockquote"},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"fillDate()")," - Enzyme helper that fills in a date field with data from the given date string.")),o.a.createElement(m.MDXTag,{name:"pre",components:n,parentName:"blockquote"},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"fillDate(\n  form, // mounted <DefinitionTester />\n  'select#root_blah' // selector\n  '1950-1-3', // value\n);\n")),o.a.createElement(m.MDXTag,{name:"ul",components:n,parentName:"blockquote"},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"selectCheckbox()")," - Enzyme helper that fires a change event with a value for a checkbox at the given name"))),o.a.createElement("h2",{id:"other-utilities"},"Other utilities"),o.a.createElement(m.MDXTag,{name:"p",components:n},o.a.createElement(m.MDXTag,{name:"em",components:n,parentName:"p"},"These utilities can be found in ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"em"},"platform/testing/unit/helpers.js"))),o.a.createElement(m.MDXTag,{name:"ul",components:n},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"mockFetch()")," -  A function to mock the global fetch function and return the value provided in returnVal",o.a.createElement(m.MDXTag,{name:"ul",components:n,parentName:"li"},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"resetFetch()")," - resets the mocked fetch set with ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"mockFetch()")),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"mockApiRequest()")," - decorated ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"mockFetch()")," that adds typical API headers to ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"returnVal")),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"mockMultipleApiRequests()")," - decorated ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"mockFetch()")," that mocks a fetch call for each response object in an array")))),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"mockFetch(\n  new Error('fake error'), // returnVal\n  false, // shouldResolve: false returns rejected promise. default is true\n);\n")),o.a.createElement(m.MDXTag,{name:"p",components:n},o.a.createElement(m.MDXTag,{name:"em",components:n,parentName:"p"},"This utility can be found in ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"em"},"platform/utilities/storage/localstorage.js"))),o.a.createElement(m.MDXTag,{name:"ul",components:n},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"getLocalStorage()")," - convenience accessor for local storage and implements a fallback. Useful for stubbing localstorage.")),o.a.createElement("h2",{id:"legacy-tools"},"Legacy tools"),o.a.createElement(m.MDXTag,{name:"ul",components:n},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"While ReactTestUtils and SkinDeep are used in many of our tests, it's recommended that updated or new tests always use Enzyme")))},a}(o.a.Component),l={}},395:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/promobanner/",context:{source:"component",name:"PromoBanner"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}}]}}}},396:function(e,n,t){"use strict";var a=t(2),o=t.n(a),m=t(30),r=t.n(m),c=t(399),s=(t(129),t(130),t(92),t(7),t(395)),l=t(397);function i(){return o.a.createElement(l.b,{query:"157057713",render:function(e){return o.a.createElement(u,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:s})}function p(e){var n=e.item;return n.href?o.a.createElement("li",{key:n.name},o.a.createElement(l.a,{to:n.href},n.name)):o.a.createElement("li",{key:n.name},n.name," (future)")}function u(e){var n=e.items,t=e.isSublist,a=void 0!==t&&t;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},a&&o.a.createElement(p,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(u,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},a&&o.a.createElement(p,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(i,null)):o.a.createElement(p,{item:e,key:e.name})})):null}var d=t(398),g=t.n(d);function h(e){var n=e.location,t=g.a.sections.find(function(e){return n.pathname.includes(e.href)});return t?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(u,{items:t.items}))):null}function E(e){var n=e.children,t=e.location;return o.a.createElement(c.a,{location:t},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:t}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}t.d(n,"a",function(){return E}),E.propTypes={children:r.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-getting-started-common-tasks-new-unit-test-mdx-649963cc9604d7ac46bb.js.map