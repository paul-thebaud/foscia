"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[868],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var o=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),l=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return o.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return t?o.createElement(f,i(i({ref:n},u),{},{components:t})):o.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8117:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=t(1163),a=(t(9496),t(9613));const r={sidebar_position:70,description:"Making your own action factory."},i="Custom action factory",c={unversionedId:"advanced/custom-action-factory",id:"advanced/custom-action-factory",title:"Custom action factory",description:"Making your own action factory.",source:"@site/docs/advanced/custom-action-factory.md",sourceDirName:"advanced",slug:"/advanced/custom-action-factory",permalink:"/func-client/docs/advanced/custom-action-factory",draft:!1,editUrl:"https://github.com/paul-thebaud/func-client/tree/main/website/docs/advanced/custom-action-factory.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{sidebar_position:70,description:"Making your own action factory."},sidebar:"docsSidebar",previous:{title:"Custom action runners",permalink:"/func-client/docs/advanced/custom-action-runners"},next:{title:"Implementations",permalink:"/func-client/docs/category/implementations"}},s={},l=[{value:"Replacing some dependencies",id:"replacing-some-dependencies",level:2},{value:"Writing your own factory",id:"writing-your-own-factory",level:2}],u={toc:l},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"custom-action-factory"},"Custom action factory"),(0,a.kt)("admonition",{title:"What you'll learn",type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Creating a custom action factory"))),(0,a.kt)("p",null,"As mentioned in the\n",(0,a.kt)("a",{parentName:"p",href:"/docs/advanced/implementations/presentation"},"implementations guide presentation"),",\nany action will require some dedicated features through dependencies."),(0,a.kt)("p",null,"When using an action factory blueprint, all those dependencies are initialized\nautomatically, and you may only configure it. This is quick and simple, but do\nnot fit custom implementations or full tree-shaking needs."),(0,a.kt)("h2",{id:"replacing-some-dependencies"},"Replacing some dependencies"),(0,a.kt)("p",null,"Sometimes, you may need to only replace an overwritten dependency (such as a\ncustomized version of the ",(0,a.kt)("inlineCode",{parentName:"p"},"JsonRestDeserializer"),"). Admitting you have\nan extended version of this deserializer like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="action/customDeserializer.js"',title:'"action/customDeserializer.js"'},"export default class CustomDeserializer extends JsonRestDeserializer {\n  // ...your overwrite...\n}\n")),(0,a.kt)("p",null,"You are able to keep using the default blueprint factory and only replace some\ndependency by instantiating your action manually:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="action.js"',title:'"action.js"'},"import { makeJsonRest } from 'func-client/blueprints';\nimport { context } from 'func-client/core';\nimport CustomDeserializer from './action/customDeserializer';\n\n// Note that we are not using the exported action function,\n// but the raw Action class.\nconst { Action, cache, registry, adapter, serializer } = makeJsonRest({\n  baseURL: 'https://example.com/api/v1',\n});\n\nconst deserializer = new CustomDeserializer();\n\n// We are now manually declaring our action factory\n// with the proper dependencies injection.\nexport default function action() {\n  return new Action().use(context({\n    cache, registry, adapter, deserializer, serializer,\n  }))\n}\n")),(0,a.kt)("h2",{id:"writing-your-own-factory"},"Writing your own factory"),(0,a.kt)("p",null,"For more complex requirements, like with custom implementations, you should\nuse a custom action factory from scratch."),(0,a.kt)("p",null,"When using a custom action factory, all those dependencies are initialized and\nattached to your actions manually. This gives you a lot of control over which\ndependencies are imported, instantiated and attached, thus reducing your\nproduction bundle if you are removing unused dependencies."),(0,a.kt)("p",null,"Here is an example of a custom action factory (in fact, it is more or less the\n",(0,a.kt)("inlineCode",{parentName:"p"},"makeJsonRest")," factory function):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="action.js"',title:'"action.js"'},"import {\n    coreExtensions,\n    crudExtensions,\n    jsonRestExtensions,\n    makeCache,\n    makeRegistry,\n} from 'func-client/blueprints';\nimport { context, makeAction } from 'func-client/core';\nimport {\n    JsonRestAdapter,\n    JsonRestDeserializer,\n    JsonRestSerializer,\n} from 'func-client/jsonrest';\n\nconst cache = makeCache();\nconst registry = makeRegistry();\nconst adapter = new JsonRestAdapter({ baseURL: 'https://example.com/api' });\nconst deserializer = new JsonRestDeserializer();\nconst serializer = new JsonRestSerializer();\nconst Action = makeAction({\n    ...coreExtensions,\n    ...crudExtensions,\n    ...jsonRestExtensions,\n});\n\nexport default function action() {\n    // Prepare the context of each new action to\n    // use all dependencies.\n    return new Action().use(\n        context({\n            cache,\n            registry,\n            adapter,\n            deserializer,\n            serializer,\n        }),\n    );\n}\n")),(0,a.kt)("p",null,"Writing your own action factory is useful, because you may remove the\ndependencies you are not using. As an example, if you are never making create or\nupdate action on instances, those are never serialized, and you won't need the\nserializer dependency. Removing it will reduce your bundle size."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"When an action enhancer/runner requires a dependency, FuncClient will throw an\nexception if this dependency is not available in the context. You may remove\nuseless dependencies which you are not using for now."),(0,a.kt)("p",{parentName:"admonition"},"But, be careful! Removing some dependencies may have an invisible impact! As an\nexample, absence of the cache may not throw an exception, but will allow\nmultiple instances of the same record to coexist.")),(0,a.kt)("p",null,"Here is a concrete example of a custom action factory with read-only\ncapabilities (we won't ever send a record to our data source). In it, we are not\nusing the ",(0,a.kt)("inlineCode",{parentName:"p"},"serializer")," dependency, and we are only importing the\n",(0,a.kt)("inlineCode",{parentName:"p"},"readExtensions")," extensions pack."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="action.js"',title:'"action.js"'},"import {\n    coreExtensions,\n    readExtensions,\n    jsonRestExtensions,\n    makeCache,\n    makeRegistry,\n} from 'func-client/blueprints';\nimport { context, makeAction } from 'func-client/core';\nimport { JsonRestAdapter, JsonRestDeserializer } from 'func-client/jsonrest';\n\nconst cache = makeCache();\nconst registry = makeRegistry();\nconst adapter = new JsonRestAdapter({ baseURL: 'https://example.com/api' });\nconst deserializer = new JsonRestDeserializer();\nconst Action = makeAction({\n    ...coreExtensions,\n    ...readExtensions,\n    ...jsonRestExtensions,\n});\n\nexport default function action() {\n    return new Action().use(\n        context({\n            cache,\n            registry,\n            adapter,\n            deserializer,\n        }),\n    );\n}\n")))}d.isMDXComponent=!0}}]);