"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7902],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var o=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=i,k=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return n?o.createElement(k,r(r({ref:t},u),{},{components:n})):o.createElement(k,r({ref:t},u))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:i,r[1]=c;for(var l=2;l<a;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3634:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=n(1163),i=(n(9496),n(9613));const a={sidebar_position:80,description:"Writing tests when using Foscia."},r="Testing",c={unversionedId:"guides/testing",id:"guides/testing",title:"Testing",description:"Writing tests when using Foscia.",source:"@site/docs/guides/testing.md",sourceDirName:"guides",slug:"/guides/testing",permalink:"/foscia/docs/guides/testing",draft:!1,editUrl:"https://github.com/paul-thebaud/foscia/tree/main/website/docs/guides/testing.md",tags:[],version:"current",lastUpdatedAt:1686501768,formattedLastUpdatedAt:"Jun 11, 2023",sidebarPosition:80,frontMatter:{sidebar_position:80,description:"Writing tests when using Foscia."},sidebar:"docsSidebar",previous:{title:"Creating an action factory",permalink:"/foscia/docs/guides/custom-action-factory"},next:{title:"Configuring dependencies",permalink:"/foscia/docs/category/configuring-dependencies"}},s={},l=[{value:"Integration tests",id:"integration-tests",level:2},{value:"Unit tests",id:"unit-tests",level:2},{value:"Mocking action factory",id:"mocking-action-factory",level:3},{value:"Making any action factory mockable",id:"making-any-action-factory-mockable",level:4},{value:"Unit tests example",id:"unit-tests-example",level:3},{value:"Simple mock usage",id:"simple-mock-usage",level:4},{value:"Complex mock usage",id:"complex-mock-usage",level:4},{value:"Mocking indefinitely or &quot;n&quot; times",id:"mocking-indefinitely-or-n-times",level:5},{value:"Mocking context conditionally",id:"mocking-context-conditionally",level:5},{value:"Mocking context expectation",id:"mocking-context-expectation",level:5},{value:"Mocking full configuration",id:"mocking-full-configuration",level:5}],u={toc:l},p="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"testing"},"Testing"),(0,i.kt)("admonition",{title:"What you'll learn",type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Mocking action factory for unit tests"),(0,i.kt)("li",{parentName:"ul"},"Writing expectation about ran contexts"))),(0,i.kt)("h2",{id:"integration-tests"},"Integration tests"),(0,i.kt)("p",null,"Integration tests goal is to ensure separate parts of your software works\ntogether."),(0,i.kt)("p",null,"When using Foscia, this probably means you want to check that your UI correctly\ninteract with a backend or database using Foscia."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Therefore, Foscia does not provide any integration tests utilities, because\nthose tests should not mock or fake any Foscia behaviors.")),(0,i.kt)("h2",{id:"unit-tests"},"Unit tests"),(0,i.kt)("p",null,"Unit tests are focused on checking small and independent parts of your software."),(0,i.kt)("p",null,"This probably means you want to check functions which are interacting with\na backend or database using Foscia API."),(0,i.kt)("p",null,"The simplest way to write unit tests of parts of code using Foscia is to mock\nyour action factory and define expected results and contexts expectation."),(0,i.kt)("p",null,"Foscia provide a simple set of functions and objects to help you writing\nunit tests with any testing framework (Jest, Vitest, etc.)."),(0,i.kt)("h3",{id:"mocking-action-factory"},"Mocking action factory"),(0,i.kt)("p",null,"You can mock your action factory using ",(0,i.kt)("inlineCode",{parentName:"p"},"mockAction")," function.\nIt is important to just pass your action factory (",(0,i.kt)("inlineCode",{parentName:"p"},"action"),") and not its return\nvalue (",(0,i.kt)("inlineCode",{parentName:"p"},"action()"),"), because the mock will install on the function itself."),(0,i.kt)("p",null,"When mocking your action, Foscia is replacing the base factory function\nwith a proxy function which will built a proxy action instance.\nEach enhancer will apply normally and make the context evolve, but when running\nthe action it will intercept the run to provide your mocked result."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="test/actionMock.ts"',title:'"test/actionMock.ts"'},"import { ActionFactoryMock, mockAction, unmockAction } from 'foscia/test';\nimport action from './action';\n\nlet actionMock: ActionFactoryMock;\n\nbeforeEach(() => {\n  actionMock = mockAction(action);\n});\n\nafterEach(() => {\n  unmockAction(action);\n});\n\nexport default actionMock;\n")),(0,i.kt)("h4",{id:"making-any-action-factory-mockable"},"Making any action factory mockable"),(0,i.kt)("p",null,"When using ",(0,i.kt)("a",{parentName:"p",href:"/docs/getting-started#with-blueprints"},"blueprints action factories"),",\nthe action factory function is already a mockable function\n(a mock can be installed on it) and you have nothing else to do."),(0,i.kt)("p",null,"If you are building your ",(0,i.kt)("a",{parentName:"p",href:"docs/guides/custom-action-factory"},"own action factory function"),",\nyou can make any factory function mockable using ",(0,i.kt)("inlineCode",{parentName:"p"},"makeActionFactoryMockable"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="action.ts"',title:'"action.ts"'},"function action() {\n  // Your custom action factory...\n  return new Action();\n}\n\n// This will return a new function which can be mocked.\nexport default makeActionFactoryMockable(action);\n")),(0,i.kt)("h3",{id:"unit-tests-example"},"Unit tests example"),(0,i.kt)("p",null,"Here is a simple example of a function we will write tests for:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/registerUser.ts"',title:'"src/registerUser.ts"'},"import { create, fill, oneOrCurrent } from 'foscia/core';\nimport action from './action';\nimport User from './models/user';\n\nexport default function registerUser(email: string, acceptedTerms: boolean): Promise<User> {\n  if (!acceptedTerms) {\n    throw new Error('User did not accept terms and conditions of use.');\n  }\n\n  const user = fill(new User(), {\n    email,\n    acceptedTermsAt: new Date(),\n  });\n\n  return action()\n    .use(create(user))\n    .run(oneOrCurrent());\n}\n")),(0,i.kt)("h4",{id:"simple-mock-usage"},"Simple mock usage"),(0,i.kt)("p",null,"In this simple example, we will go through basics features of action mocking\n(e.g. mocking next results)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="test/registerUser.test.ts"',title:'"test/registerUser.test.ts"'},"import { fill } from 'foscia/core';\nimport User from '../src/models/user';\nimport registerUser from '../src/registerUser';\nimport actionMock from './actionMock';\n\ntest('should create user', async () => {\n  const user = fill(new User(), {\n    email: 'john.doe@example.com',\n    acceptedTermsAt: new Date(),\n  });\n\n  actionMock.mockResult(user);\n\n  const result = await registerUser('john.doe@example.com', true);\n\n  expect(result).toStrictEqual(user);\n});\n\ntest('should fail creating user with non accepted terms', async () => {\n  const result = await registerUser('john.doe@example.com', true);\n\n  expect(() => registerUser('john.doe@example.com', true)).rejects.toThrowError();\n});\n")),(0,i.kt)("h4",{id:"complex-mock-usage"},"Complex mock usage"),(0,i.kt)("p",null,"Action mock provide enough flexibility for you to check complex cases."),(0,i.kt)("h5",{id:"mocking-indefinitely-or-n-times"},'Mocking indefinitely or "n" times'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'// Mock result indefinitely.\nactionMock.mockResult(value);\n// Mock result for only for "n" next calls.\nactionMock.mockResultOnce(value);\nactionMock.mockResultTwice(value);\nactionMock.mockResultTimes(3, value);\n// Mock result factory function.\nactionMock.mockResult(() => value);\n')),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},'Mocking results indefinitely will prevent your next mocked runs to be used.\nMocking for "n" times is therefore a safer way to mock results, since\nit will also fail if there are no more runs expected.')),(0,i.kt)("h5",{id:"mocking-context-conditionally"},"Mocking context conditionally"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// Only mock when context is matching over given predicate.\nactionMock.mockResult(value, (context) => context.model === Post);\n")),(0,i.kt)("h5",{id:"mocking-context-expectation"},"Mocking context expectation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// Run expectation over context before returning value.\nactionMock.mockResult({\n  result: value,\n  expectation: (context) => {\n    expect(context.model).toStrictEqual(Post);\n    expect(context.action).toStrictEqual('create');\n  },\n});\n")),(0,i.kt)("h5",{id:"mocking-full-configuration"},"Mocking full configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// Use differents mocking options.\nactionMock.mockResult({\n  result: value,\n  times: 3,\n  predicate: (context) => context.model === Post,\n  expectation: (context) => {\n    expect(context.model).toStrictEqual(Post);\n    expect(context.action).toStrictEqual('create');\n  },\n});\n")))}m.isMDXComponent=!0}}]);