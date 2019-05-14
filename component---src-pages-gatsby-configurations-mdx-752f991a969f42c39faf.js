(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{299:function(e,n,a){"use strict";a.r(n),a.d(n,"default",function(){return d}),a.d(n,"_frontmatter",function(){return g});a(42);var t=a(43),o=a.n(t),r=a(3),s=a.n(r),m=a(2),c=a.n(m),p=a(4),i=a(347),l={},d=function(e){function n(n){var a;return(a=e.call(this,n)||this).layout=i.a,a}return s()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,a=o()(e,["components"]);return c.a.createElement(p.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},l,a),components:n},c.a.createElement("h2",{id:"gatsby-configurations"},"Gatsby Configurations"),c.a.createElement("h3",{id:"why-we-chose-gatsby"},"Why we chose Gatsby"),c.a.createElement(p.MDXTag,{name:"p",components:n},"Gatsby was effectively chosen because it gave us the flexibility to create\ndocumentation for React Components and also regular documentation for developers.\nWe wanted to be able to generate documentation that lived inside of the code and\nalso generate information on propTypes. We also wanted the flexibility of creating\nmarkdown files for our normal documentation. Gatsby's plugin eco-system gave us a\nlot of flexibilities to customize it how we want it."),c.a.createElement("h3",{id:"what-is-gatsby"},"What is Gatsby"),c.a.createElement(p.MDXTag,{name:"p",components:n},c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},'"Gatsby is a blazing fast modern site generator for React."')),c.a.createElement(p.MDXTag,{name:"p",components:n},"Gatsby utilizes React, Node, and GraphQL to generate a blazing fast static websites.\nYou can find more information at ",c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://www.gatsbyjs.org"}},"https://www.gatsbyjs.org"),"."),c.a.createElement("h3",{id:"our-custom-configurations"},"Our Custom Configurations"),c.a.createElement(p.MDXTag,{name:"p",components:n},"There are a few things that we wanted that Gatsby did not have out of the box.\nWe wanted to be able to document all our React components and generate PropType\ndocumentation. We also wanted to be able to transfer over all our markdown documentatation\nfrom ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"vets.gov-team")," repo. Using Gatsby plugin eco-system. Below are the plugins\nand directions on how we inplemented them."),c.a.createElement("h3",{id:"plugins"},"Plugins"),c.a.createElement(p.MDXTag,{name:"p",components:n},"All the plugins we use can be found in ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"gatsby-configs.js"),"."),c.a.createElement(p.MDXTag,{name:"ul",components:n},c.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(p.MDXTag,{name:"p",components:n,parentName:"li"},c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://www.gatsbyjs.org/packages/@benjie/gatsby-mdx/?=gatsby-mdx"}},"gatsby-mdx")),c.a.createElement(p.MDXTag,{name:"blockquote",components:n,parentName:"li"},c.a.createElement(p.MDXTag,{name:"p",components:n,parentName:"blockquote"},"MDX is a new templating format which uses both JSX(React templating) and markdown.\nThis gaves us the best of both worlds. Being able to write markdown to generate\nquick documentation and use React components within that page."))),c.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(p.MDXTag,{name:"p",components:n,parentName:"li"},c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://www.gatsbyjs.org/packages/gatsby-plugin-sass/?=gatsby-plugin-sass"}},"gatsby-plugin-sass")),c.a.createElement(p.MDXTag,{name:"blockquote",components:n,parentName:"li"},c.a.createElement(p.MDXTag,{name:"p",components:n,parentName:"blockquote"},"Be able to use Sass/Scss in our project."))),c.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(p.MDXTag,{name:"p",components:n,parentName:"li"},c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://www.gatsbyjs.org/packages/gatsby-transformer-react-docgen/?=gatsby-transformer-react-docgen"}},"gatsby-transformer-react-docgen")),c.a.createElement(p.MDXTag,{name:"blockquote",components:n,parentName:"li"},c.a.createElement(p.MDXTag,{name:"p",components:n,parentName:"blockquote"},"Helps extracting information from React components, and generate documentation\nfrom it. This is created by Facebook. This is what is used for\n",c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/styleguidist/react-styleguidist"}},"react-styleguidist"),"."))),c.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(p.MDXTag,{name:"p",components:n,parentName:"li"},c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://www.gatsbyjs.org/packages/gatsby-source-filesystem/"}},"gatsby-source-filesystem")),c.a.createElement(p.MDXTag,{name:"blockquote",components:n,parentName:"li"},c.a.createElement(p.MDXTag,{name:"p",components:n,parentName:"blockquote"},"A Gatsby source plugin for sourcing data into your Gatsby application from your local filesystem."))),c.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(p.MDXTag,{name:"p",components:n,parentName:"li"},c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://www.gatsbyjs.org/packages/gatsby-remark-images/"}},"https://www.gatsbyjs.org/packages/gatsby-remark-images/")),c.a.createElement(p.MDXTag,{name:"blockquote",components:n,parentName:"li"},c.a.createElement(p.MDXTag,{name:"p",components:n,parentName:"blockquote"},"We are using this to add images to our .mdx pages. This allows us to add\nimages to the folder and use it directly into our .mdx pages.")))),c.a.createElement(p.MDXTag,{name:"hr",components:n}),c.a.createElement("h3",{id:"how-we-setup-gatsby-mdx"},"How we setup gatsby-mdx"),c.a.createElement(p.MDXTag,{name:"p",components:n},"Plugin: ",c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://www.gatsbyjs.org/packages/@benjie/gatsby-mdx"}},"https://www.gatsbyjs.org/packages/@benjie/gatsby-mdx"),"\nGuide: ",c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://gatsby-mdx.netlify.com/guides"}},"https://gatsby-mdx.netlify.com/guides")),c.a.createElement("h4",{id:"installation"},"Installation"),c.a.createElement(p.MDXTag,{name:"pre",components:n},c.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-shell"}},"yarn add gatsby-mdx\n")),c.a.createElement(p.MDXTag,{name:"pre",components:n},c.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"// gatsby-configs.js\n\nmodule.exports = {\n  plugins: [`gatsby-mdx`]\n};\n")),c.a.createElement(p.MDXTag,{name:"p",components:n},"Once this is setup, you will be able to use both markdown and jsx on the page.\nMore information can be found on ",c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://mdxjs.com/"}},"https://mdxjs.com/")),c.a.createElement("h4",{id:"adding-a-specific-layout-for-your-pages"},"Adding a Specific layout for your pages"),c.a.createElement(p.MDXTag,{name:"p",components:n},"To add a specific layout to be used for the default pages. You need to change\nthe plugin to an Object with options like so."),c.a.createElement(p.MDXTag,{name:"p",components:n},"Change this code:"),c.a.createElement(p.MDXTag,{name:"pre",components:n},c.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"// gatsby-configs.js\n\nmodule.exports = {\n  plugins: [`gatsby-mdx`]\n};\n")),c.a.createElement(p.MDXTag,{name:"p",components:n},"To this code:"),c.a.createElement(p.MDXTag,{name:"pre",components:n},c.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},'// gatsby-configs.js\n\nmodule.exports = {\n  plugins: [\n    {\n      resolve: `gatsby-mdx`,\n      options: {\n        defaultLayouts: {\n          default: require.resolve("./src/layouts/SidebarLayout.jsx"),\n        }\n      }\n    },\n  ]\n};\n')),c.a.createElement("h4",{id:"adding-your-own-folders"},"Adding Your Own Folders"),c.a.createElement(p.MDXTag,{name:"p",components:n},"By default gatsby-mdx will only look in the src/pages folder.\nIn this project we needed a special folder for all our components.\nThis folder lives in ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"formation-react/src/components"),".\nWe need to add some configurations to be able to do this."),c.a.createElement(p.MDXTag,{name:"p",components:n},c.a.createElement(p.MDXTag,{name:"strong",components:n,parentName:"p"},"Add the ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"strong"},"gatsby-source-filesystem")," plugin:")),c.a.createElement(p.MDXTag,{name:"p",components:n},"This plugin can be added multiple times in the plugins object.\nThis plugin is used for sourcing data into your Gatsby application\nfrom your local filesystem. Here we add a name and path to the\nformation-react/src/components folder. This will now be added to our GraphQL\ndatabase so we can use it in our project."),c.a.createElement(p.MDXTag,{name:"pre",components:n},c.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"// gatsby-configs.js\n\nplugins: [\n  {\n    resolve: `gatsby-source-filesystem`,\n    options: {\n      path: `../formation-react/src/components`,\n      name: 'components'\n    }\n  },\n]\n")),c.a.createElement(p.MDXTag,{name:"p",components:n},c.a.createElement(p.MDXTag,{name:"strong",components:n,parentName:"p"},"Creating Pages from GraphQL data:")),c.a.createElement(p.MDXTag,{name:"p",components:n},"Now that we have this data in GraphQL, we need to tell Gatsby to make some\npages out of them. To do this we need to add some code to the gatsby-node.js\nfile. This is were you create pages or customize things before it get built."),c.a.createElement(p.MDXTag,{name:"p",components:n},"first we export createPages and then do a query to GraphQL. You can test it\nout at ",c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"http://localhost:8000/___graphql"}},"http://localhost:8000/___graphql"),". This is an interactive interface\nfor GraphQL. Here we are getting all the mdx pages and then we are checking if the\ndocument has a name property in the frontmatter. If it doesn't we won't create\na page for it."),c.a.createElement(p.MDXTag,{name:"pre",components:n},c.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"// gatsby-node.js\n\nexports.createPages = ({ graphql, actions }) => {\n  const { createPage } = actions;\n  return new Promise((resolve, reject) => {\n    resolve(\n      graphql(\n        `\n          {\n            allMdx {\n              edges {\n                node {\n                  id\n                  frontmatter {\n                    title\n                    name\n                  }\n                  parent {\n                    ... on File {\n                      name\n                      sourceInstanceName\n                    }\n                  }\n                  code {\n                    scope\n                  }\n                }\n              }\n            }\n          }\n        `\n      ).then(result => {\n        if (result.errors) {\n          console.log(result.errors)\n          reject(result.errors)\n        }\n\n        result.data.allMdx.edges.forEach(async ({ node }) => {\n          if (node.frontmatter.name) { <--- checking for frontmatter name property\n            createPage({\n              path: `/${node.parent.name.toLowerCase()}/`,\n              component: path.resolve('./src/layouts/module-components.js'),\n              context: {\n                id: node.id,\n                name: node.frontmatter.name,\n              },\n            })\n          }\n        })\n      })\n    )\n  })\n}\n")),c.a.createElement(p.MDXTag,{name:"p",components:n},c.a.createElement(p.MDXTag,{name:"strong",components:n,parentName:"p"},"Sample of Query Results from Above Query:")),c.a.createElement(p.MDXTag,{name:"p",components:n},"Here is a sample of what the output would be for the Query above. You'll notice\nthat we get more then just the MDX files in the project. Not sure why this is\nbut that is what we get back when doing the Query."),c.a.createElement(p.MDXTag,{name:"pre",components:n},c.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},'{\n  "data": {\n    "allMdx": {\n      "edges": [\n        {\n          "node": {\n            "id": "db665b4f-22a1-5485-8ef9-4f66f0da7e1b",\n            "frontmatter": {\n              "title": "AcceptTermsPrompt",\n              "name": "AcceptTermsPrompt"\n            },\n            "parent": {\n              "name": "AcceptTermsPrompt",\n              "sourceInstanceName": "components"\n            },\n            "code": {\n              "scope": ""\n            }\n          }\n        },\n        {\n          "node": {\n            "id": "fdaeaef8-da4f-53d8-a981-0ef2e4a9acf0",\n            "frontmatter": {\n              "title": "AdditionalInfo",\n              "name": "AdditionalInfo"\n            },\n            "parent": {\n              "name": "AdditionalInfo",\n              "sourceInstanceName": "components"\n            },\n            "code": {\n              "scope": ""\n            }\n          }\n        },\n        {\n          "node": {\n            "id": "17c10940-f231-560f-a391-e3a3173f1ed2",\n            "frontmatter": {\n              "title": "",\n              "name": null\n            },\n            "parent": {},\n            "code": {\n              "scope": ""\n            }\n          }\n        },\n        {\n          "node": {\n            "id": "3121c909-74b5-5ccc-9884-bd72709d7885",\n            "frontmatter": {\n              "title": "",\n              "name": null\n            },\n            "parent": {},\n            "code": {\n              "scope": ""\n            }\n          }\n        },\n        {\n          "node": {\n            "id": "6d019eeb-8db4-56ce-8bd7-bf14e618d096",\n            "frontmatter": {\n              "title": "How to Add Documents and Components",\n              "name": null\n            },\n            "parent": {\n              "name": "how-to",\n              "sourceInstanceName": "pages"\n            },\n            "code": {\n              "scope": ""\n            }\n          }\n        },\n        {\n          "node": {\n            "id": "2503f180-5b43-5470-9665-cff9f512d7cd",\n            "frontmatter": {\n              "title": "This is the index",\n              "name": null\n            },\n            "parent": {\n              "name": "index",\n              "sourceInstanceName": "pages"\n            },\n            "code": {\n              "scope": ""\n            }\n          }\n        },\n        {\n          "node": {\n            "id": "51b7ecd7-76e7-5ceb-ac57-d2a9c92494de",\n            "frontmatter": {\n              "title": "Internal Tools",\n              "name": null\n            },\n            "parent": {\n              "name": "internal-tools",\n              "sourceInstanceName": "pages"\n            },\n            "code": {\n              "scope": ""\n            }\n          }\n        },\n        {\n          "node": {\n            "id": "b683ccc8-0ddd-5b23-8b5c-0cc8e2889aa9",\n            "frontmatter": {\n              "title": "Notes on Writing MDX with Gatsby",\n              "name": null\n            },\n            "parent": {\n              "name": "new-component",\n              "sourceInstanceName": "pages"\n            },\n            "code": {\n              "scope": ""\n            }\n          }\n        }\n      ]\n    }\n  }\n}\n')),c.a.createElement(p.MDXTag,{name:"p",components:n},"You will need to create a path for the pages. This is done with the path property"),c.a.createElement(p.MDXTag,{name:"pre",components:n},c.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"createPage({\n  path: `/${node.parent.name.toLowerCase()}/`, <------- Create path here\n  component: path.resolve('./src/layouts/module-components.js'),\n  context: {\n    id: node.id,\n    name: node.frontmatter.name,\n  },\n})\n")),c.a.createElement(p.MDXTag,{name:"p",components:n},"Set your component page layout"),c.a.createElement(p.MDXTag,{name:"pre",components:n},c.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"createPage({\n  path: `/${node.parent.name.toLowerCase()}/`,\n  component: path.resolve('./src/layouts/module-components.js'), <------- default layout\n  context: {\n    id: node.id,\n    name: node.frontmatter.name,\n  },\n})\n")),c.a.createElement(p.MDXTag,{name:"p",components:n},"In our createPage you will see a context property. This will be available on\nyour page for quering with GraphQL."),c.a.createElement(p.MDXTag,{name:"pre",components:n},c.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"createPage({\n  path: `/${node.parent.name.toLowerCase()}/`,\n  context: {\n    id: node.id, <--- available on your page for GraphQL queries\n    name: node.frontmatter.name, <--- available on your page for GraphQL queries\n  },\n})\n")),c.a.createElement(p.MDXTag,{name:"p",components:n},"Now that we have that setup we need to add the layout for our components pages.\nIf you go to ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"src/layouts/module-components.js")," you can seee how we setu our pages\nto be able to render MDX. Here is a sample of the JSX."),c.a.createElement(p.MDXTag,{name:"pre",components:n},c.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"  <MDXProvider components={{ code: MyCodeComponent }}>\n    <Layout>\n      <div className=\"content\">\n        {children}\n        <h2>{data.componentMetadata.displayName}</h2>\n        <p>{data.componentMetadata.docblock}</p>\n        <MDXRenderer tableOfContents={tableOfContents}>\n          {data.mdx.code.body}\n        </MDXRenderer>\n        <h2 style={{ marginTop: '2rem' }}>Props:</h2>\n        <PropsTable\n          propMetaData={data.componentMetadata.childrenComponentProp}/>\n      </div>\n    </Layout>\n  </MDXProvider>\n")),c.a.createElement("h3",{id:"how-do-we-automatically-generate-our-proptypes"},"How do we automatically generate our propTypes"),c.a.createElement(p.MDXTag,{name:"p",components:n},"Since one of the big requirements for our component documents is PropType\ndefinitions, we had to make sure we can populate the propTypes dynamically.\nTo do this we are going to a module called\n",c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/reactjs/react-docgen"}},c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"react-docgen")),". This was created by\nFacebook to handle documentation. What it does is parse component files and\ngenerates data from your components into a json file. We will be using the\n",c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://www.gatsbyjs.org/packages/gatsby-transformer-react-docgen/?=gatsby-transformer-react-docgen"}},c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"gatsby-transformer-react-docgen")),"\nplugin to do this for us in gatsby. This will add the data into GraphQL so we\ncan query it in our pages."),c.a.createElement(p.MDXTag,{name:"p",components:n},"This is what the query looks like in our layout page. The ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"childrenComponentProp"),"\nis were we get our propType definitions."),c.a.createElement(p.MDXTag,{name:"pre",components:n},c.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"export const pageQuery = graphql`\n  query($id: String!, $name: String!) {\n    mdx(id: { eq: $id }) {\n      id\n      code {\n        body\n      }\n      tableOfContents\n    }\n    componentMetadata(displayName: { eq: $name }) {\n      id\n      displayName\n      docblock\n      doclets\n      childrenComponentProp {\n        name\n        docblock\n        required\n        parentType {\n          name\n        }\n        type {\n          value\n        }\n        defaultValue {\n          value\n          computed\n        }\n      }\n      composes\n    }\n  }\n`;\n")),c.a.createElement("h3",{id:"adding-live-code"},"Adding Live Code"),c.a.createElement(p.MDXTag,{name:"p",components:n},"Here is an example of how you add live editable code onto your page.\nNote: This has not been fully implemented on our pages yet. This is something\nwe need to explore further if we really wants to have this feature."),c.a.createElement(p.MDXTag,{name:"pre",components:n},c.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},'import React, {Component} from "react";\nimport { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";\nimport { MDXProvider } from \'@mdx-js/tag\'\n\nconst MyCodeComponent = ({ children, ...props }) => (\n  <LiveProvider code={children}>\n    <LiveEditor />\n    <LiveError />\n    <LivePreview />\n  </LiveProvider>\n);\n\nexport default class MyPageLayout extends Component {\n  render() {\n    return <MDXProvider components={{code: MyCodeComponent}}>\n      <div>{this.props.children}</div>\n    </MDXProvider>\n  }\n}\n')),c.a.createElement("h3",{id:"image-plugin-for-mdx-files"},"Image plugin for MDX files"),c.a.createElement(p.MDXTag,{name:"p",components:n},"We are using a plugin to be able to use images in .mdx pages. This allows us\nto access the images with relative paths."),c.a.createElement(p.MDXTag,{name:"p",components:n},c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://gatsby-mdx.netlify.com/guides/using-gatsby-remark-images"}},"https://gatsby-mdx.netlify.com/guides/using-gatsby-remark-images")))},n}(c.a.Component),g={}},346:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}}]}}}},347:function(e,n,a){"use strict";var t=a(2),o=a.n(t),r=a(13),s=a.n(r),m=a(350),c=(a(133),a(134),a(135),a(17),a(346)),p=a(348);function i(){return o.a.createElement(p.b,{query:"157057713",render:function(e){return o.a.createElement(d,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:c})}function l(e){var n=e.item;return n.href?o.a.createElement("li",{key:n.name},o.a.createElement(p.a,{to:n.href},n.name)):o.a.createElement("li",{key:n.name},n.name," (future)")}function d(e){var n=e.items,a=e.isSublist,t=void 0!==a&&a;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},t&&o.a.createElement(l,{item:e}),!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(d,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},t&&o.a.createElement(l,{item:e}),!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(i,null)):o.a.createElement(l,{item:e,key:e.name})})):null}var g=a(349),u=a.n(g);function h(e){var n=e.location,a=u.a.sections.find(function(e){return n.pathname.includes(e.href)});return a?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(d,{items:a.items}))):null}function f(e){var n=e.children,a=e.location;return o.a.createElement(m.a,{location:a},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:a}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}a.d(n,"a",function(){return f}),f.propTypes={children:s.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-gatsby-configurations-mdx-752f991a969f42c39faf.js.map