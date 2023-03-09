"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8664],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return t?a.createElement(h,i(i({ref:n},c),{},{components:t})):a.createElement(h,i({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5153:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(9496),r=t(5924);const l={tabItem:"tabItem_oaqp"};function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:t},n)}},9407:(e,n,t)=>{t.d(n,{Z:()=>x});var a=t(1163),r=t(9496),l=t(5924),i=t(3642),o=t(3442),u=t(5506),s=t(2487),c=t(9473);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??d(t);return function(e){const n=(0,s.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u._X)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function k(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=p(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[u,s]=h({queryString:t,groupId:a}),[d,k]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,c.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),v=(()=>{const e=u??d;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{v&&o(v)}),[v]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),k(e)}),[s,k,l]),tabValues:l}}var v=t(1517);const f={tabList:"tabList_PUic",tabItem:"tabItem_TlgZ"};function g(e){let{className:n,block:t,selectedValue:o,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const n=e.currentTarget,t=c.indexOf(n),a=s[t].value;a!==o&&(d(n),u(a))},m=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n)},s.map((e=>{let{value:n,label:t,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,key:n,ref:e=>c.push(e),onKeyDown:m,onClick:p},i,{className:(0,l.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":o===n})}),t??n)})))}function N(e){let{lazy:n,children:t,selectedValue:a}=e;if(t=Array.isArray(t)?t:[t],n){const e=t.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},t.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function b(e){const n=k(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f.tabList)},r.createElement(g,(0,a.Z)({},e,n)),r.createElement(N,(0,a.Z)({},e,n)))}function x(e){const n=(0,v.Z)();return r.createElement(b,(0,a.Z)({key:String(n)},e))}},6492:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(9496);function r(e){let{children:n,color:t}=e;return a.createElement("span",{className:`chip ${t&&`chip--${t}`}`},n)}},7820:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(9496),r=t(6492);function l(e){let{children:n,version:t,only:l,requires:i,provides:o}=e;return a.createElement("div",{style:{marginBottom:"12px"}},t&&a.createElement(r.Z,null,t),l&&a.createElement(r.Z,{color:"primary"},"only: ",l),i&&a.createElement(r.Z,{color:"danger"},"requires: ",i),o&&a.createElement(r.Z,{color:"success"},"provides: ",o),n)}},6414:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=t(1163),r=(t(9496),t(9613)),l=(t(5153),t(9407),t(6492)),i=t(7820);const o={sidebar_position:3,description:"Available actions runners."},u="Actions runners",s={unversionedId:"api/actions-runners",id:"api/actions-runners",title:"Actions runners",description:"Available actions runners.",source:"@site/docs/api/actions-runners.mdx",sourceDirName:"api",slug:"/api/actions-runners",permalink:"/func-client/docs/api/actions-runners",draft:!1,editUrl:"https://github.com/paul-thebaud/func-client/tree/main/website/docs/api/actions-runners.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Available actions runners."},sidebar:"docsSidebar",previous:{title:"Actions enhancers",permalink:"/func-client/docs/api/actions-enhancers"},next:{title:"Actions extensions",permalink:"/func-client/docs/api/actions-extensions"}},c={},d=[{value:"Note",id:"note",level:2},{value:"Common",id:"common",level:2},{value:"<code>none</code>",id:"none",level:3},{value:"Example",id:"example",level:4},{value:"Returns",id:"returns",level:4},{value:"<code>raw</code>",id:"raw",level:3},{value:"Example",id:"example-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"<code>rawUsing</code>",id:"rawusing",level:3},{value:"Example",id:"example-2",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Returns",id:"returns-2",level:4},{value:"<code>all</code>",id:"all",level:3},{value:"Example",id:"example-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"<code>allUsing</code>",id:"allusing",level:3},{value:"Example",id:"example-4",level:4},{value:"Arguments",id:"arguments-1",level:4},{value:"Returns",id:"returns-4",level:4},{value:"<code>one</code>",id:"one",level:3},{value:"Example",id:"example-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"<code>oneOrFail</code>",id:"oneorfail",level:3},{value:"Example",id:"example-6",level:4},{value:"Returns",id:"returns-6",level:4},{value:"<code>oneOrCurrent</code>",id:"oneorcurrent",level:3},{value:"Example",id:"example-7",level:4},{value:"Returns",id:"returns-7",level:4},{value:"<code>oneOr</code>",id:"oneor",level:3},{value:"Example",id:"example-8",level:4},{value:"Arguments",id:"arguments-2",level:4},{value:"Returns",id:"returns-8",level:4},{value:"<code>oneUsing</code>",id:"oneusing",level:3},{value:"Example",id:"example-9",level:4},{value:"Arguments",id:"arguments-3",level:4},{value:"Returns",id:"returns-9",level:4},{value:"<code>cached</code>",id:"cached",level:3},{value:"Example",id:"example-10",level:4},{value:"Returns",id:"returns-10",level:4},{value:"<code>cachedOrFail</code>",id:"cachedorfail",level:3},{value:"Example",id:"example-11",level:4},{value:"Returns",id:"returns-11",level:4},{value:"<code>cachedOr</code>",id:"cachedor",level:3},{value:"Example",id:"example-12",level:4},{value:"Arguments",id:"arguments-4",level:4},{value:"Returns",id:"returns-12",level:4},{value:"<code>cachedUsing</code>",id:"cachedusing",level:3},{value:"Example",id:"example-13",level:4},{value:"Arguments",id:"arguments-5",level:4},{value:"Returns",id:"returns-13",level:4},{value:"JSON:API",id:"jsonapi",level:2},{value:"<code>usingDocument</code>",id:"usingdocument",level:3},{value:"Example",id:"example-14",level:4}],p={toc:d},m="wrapper";function h(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"actions-runners"},"Actions runners"),(0,r.kt)("h2",{id:"note"},"Note"),(0,r.kt)("p",null,"Many actions runners are available. Each may:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(l.Z,{mdxType:"Chip"},"depend")," on a minimal package version"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(l.Z,{color:"primary",mdxType:"Chip"},"only")," be available in a given use case (JSON:API, REST, HTTP, etc.)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(l.Z,{color:"success",mdxType:"Chip"},"provide")," a given context to next enhancers or runners"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(l.Z,{color:"danger",mdxType:"Chip"},"require")," a given context from previous enhancers or runners")),(0,r.kt)("p",null,"Examples of this guide will omit imports of your action factories or models to\nprovide shorter examples."),(0,r.kt)("h2",{id:"common"},"Common"),(0,r.kt)("h3",{id:"none"},(0,r.kt)("inlineCode",{parentName:"h3"},"none")),(0,r.kt)(i.Z,{requires:"Adapter",mdxType:"FunctionInfo"}),(0,r.kt)("p",null,"Run the action and ignore the content of the result.\nAdapter errors are not caught and so may be thrown."),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { none } from 'func-client/core';\n\nawait action().run(none());\n")),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"{Promise<void>}")),(0,r.kt)("h3",{id:"raw"},(0,r.kt)("inlineCode",{parentName:"h3"},"raw")),(0,r.kt)(i.Z,{requires:"Adapter",mdxType:"FunctionInfo"}),(0,r.kt)("p",null,"Run the action and retrieve the raw adapter's data."),(0,r.kt)("h4",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { raw } from 'func-client/core';\n\nconst data = await action().run(raw());\n")),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"{Promise<AD>}")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"AD")," is your adapter's data (e.g. a fetch Response\nobject)."),(0,r.kt)("h3",{id:"rawusing"},(0,r.kt)("inlineCode",{parentName:"h3"},"rawUsing")),(0,r.kt)(i.Z,{requires:"Adapter",mdxType:"FunctionInfo"}),(0,r.kt)("p",null,"Run the action and retrieve the raw adapter's data.\nTransform the returned result using given callback."),(0,r.kt)("h4",{id:"example-2"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { rawUsing } from 'func-client/core';\n\nconst transformedData = await action().run(rawUsing((data) => {\n  // TODO Transform and return data.\n  return data;\n}));\n")),(0,r.kt)("h4",{id:"arguments"},"Arguments"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{Function}")," ",(0,r.kt)("inlineCode",{parentName:"li"},"transform")," the callback to transform the raw data object")),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"{Promise<T>}")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"T")," is the transformed result."),(0,r.kt)("h3",{id:"all"},(0,r.kt)("inlineCode",{parentName:"h3"},"all")),(0,r.kt)(i.Z,{requires:"Adapter, Deserializer, Model",mdxType:"FunctionInfo"}),(0,r.kt)("p",null,"Run the action and deserialize an array of model's instance."),(0,r.kt)("h4",{id:"example-3"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { all } from 'func-client/core';\n\nconst posts = await action().run(all());\n")),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"{Promise<I[]>}")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"I")," is an instance of the targeted model."),(0,r.kt)("h3",{id:"allusing"},(0,r.kt)("inlineCode",{parentName:"h3"},"allUsing")),(0,r.kt)(i.Z,{requires:"Adapter, Deserializer, Model",mdxType:"FunctionInfo"}),(0,r.kt)("p",null,"Run the action and deserialize an array of model's instance.\nTransform the returned result using given callback."),(0,r.kt)("h4",{id:"example-4"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { allUsing } from 'func-client/core';\nimport { usingDocument } from 'func-client/jsonapi';\n\nconst data = await action().run(allUsing(usingDocument));\ndata.instances; // Model instances.\ndata.document;  // JSON:API document with meta, etc.\n")),(0,r.kt)("h4",{id:"arguments-1"},"Arguments"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{Function}")," ",(0,r.kt)("inlineCode",{parentName:"li"},"transform")," the callback to transform the all data object")),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"{Promise<T>}")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"T")," is the transformed result."),(0,r.kt)("h3",{id:"one"},(0,r.kt)("inlineCode",{parentName:"h3"},"one")),(0,r.kt)(i.Z,{requires:"Adapter, Deserializer, Model",mdxType:"FunctionInfo"}),(0,r.kt)("p",null,"Run the action and deserialize one model's instance.\nReturns null when not found."),(0,r.kt)("h4",{id:"example-5"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { one } from 'func-client/core';\n\nconst post = await action().run(one());\n")),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"{Promise<I | null>}")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"I")," is an instance of the targeted model."),(0,r.kt)("h3",{id:"oneorfail"},(0,r.kt)("inlineCode",{parentName:"h3"},"oneOrFail")),(0,r.kt)(i.Z,{requires:"Adapter, Deserializer, Model",mdxType:"FunctionInfo"}),(0,r.kt)("p",null,"Run the action and deserialize one model's instance.\nThrow an ",(0,r.kt)("inlineCode",{parentName:"p"},"ExpectedRunFailureError")," when not found or empty result."),(0,r.kt)("h4",{id:"example-6"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { oneOrFail } from 'func-client/core';\n\nconst post = await action().run(oneOrFail());\n")),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"{Promise<I>}")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"I")," is an instance of the targeted model."),(0,r.kt)("h3",{id:"oneorcurrent"},(0,r.kt)("inlineCode",{parentName:"h3"},"oneOrCurrent")),(0,r.kt)(i.Z,{requires:"Adapter, Deserializer, Model, Instance",mdxType:"FunctionInfo"}),(0,r.kt)("p",null,"Run the action and deserialize one model's instance.\nReturns current instance when not found or empty result."),(0,r.kt)("h4",{id:"example-7"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { oneOrCurrent } from 'func-client/core';\n\nconst post = await action().run(oneOrCurrent());\n")),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"{Promise<I>}")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"I")," is an instance of the targeted model."),(0,r.kt)("h3",{id:"oneor"},(0,r.kt)("inlineCode",{parentName:"h3"},"oneOr")),(0,r.kt)(i.Z,{requires:"Adapter, Deserializer, Model",mdxType:"FunctionInfo"}),(0,r.kt)("p",null,"Run the action and deserialize one model's instance.\nRun the given runner when not found or empty result."),(0,r.kt)("h4",{id:"example-8"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { oneOr } from 'func-client/core';\n\nconst post = await action().run(oneOr(() => null));\n")),(0,r.kt)("h4",{id:"arguments-2"},"Arguments"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{Function}")," ",(0,r.kt)("inlineCode",{parentName:"li"},"nilRunner")," the runner to use when one result is empty")),(0,r.kt)("h4",{id:"returns-8"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"{Promise<I | T>}")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"I")," is an instance of the targeted model and ",(0,r.kt)("inlineCode",{parentName:"p"},"T")," is\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"nilRunner")," result."),(0,r.kt)("h3",{id:"oneusing"},(0,r.kt)("inlineCode",{parentName:"h3"},"oneUsing")),(0,r.kt)(i.Z,{requires:"Adapter, Deserializer, Model",mdxType:"FunctionInfo"}),(0,r.kt)("p",null,"Run the action and deserialize one model's instance.\nHandle the not found instance as null result.\nTransform the returned result using given callback."),(0,r.kt)("h4",{id:"example-9"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { oneUsing } from 'func-client/core';\nimport { usingDocument } from 'func-client/jsonapi';\n\nconst data = await action().run(oneUsing(usingDocument));\ndata.instance; // Model instance.\ndata.document; // JSON:API document with meta, etc.\n")),(0,r.kt)("h4",{id:"arguments-3"},"Arguments"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{Function}")," ",(0,r.kt)("inlineCode",{parentName:"li"},"transform")," the callback to transform the one data object")),(0,r.kt)("h4",{id:"returns-9"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"{Promise<T>}")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"T")," is the transformed result."),(0,r.kt)("h3",{id:"cached"},(0,r.kt)("inlineCode",{parentName:"h3"},"cached")),(0,r.kt)(i.Z,{requires:"Cache, Model, Type, Id",mdxType:"FunctionInfo"}),(0,r.kt)("p",null,"Retrieve an instance from the cache.\nIf the instance is not in cache or if the included relations are not loaded,\nreturns null."),(0,r.kt)("h4",{id:"example-10"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { cached } from 'func-client/core';\n\nconst post = await action().run(cached());\n")),(0,r.kt)("h4",{id:"returns-10"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"{Promise<I | null>}")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"I")," is an instance of the targeted model."),(0,r.kt)("h3",{id:"cachedorfail"},(0,r.kt)("inlineCode",{parentName:"h3"},"cachedOrFail")),(0,r.kt)(i.Z,{requires:"Cache, Model, Type, Id",mdxType:"FunctionInfo"}),(0,r.kt)("p",null,"Retrieve an instance from the cache.\nIf the instance is not in cache or if the included relations are not loaded,\nthrows an ",(0,r.kt)("inlineCode",{parentName:"p"},"ExpectedRunFailureError"),"."),(0,r.kt)("h4",{id:"example-11"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { cachedOrFail } from 'func-client/core';\n\nconst post = await action().run(cachedOrFail());\n")),(0,r.kt)("h4",{id:"returns-11"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"{Promise<I>}")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"I")," is an instance of the targeted model."),(0,r.kt)("h3",{id:"cachedor"},(0,r.kt)("inlineCode",{parentName:"h3"},"cachedOr")),(0,r.kt)(i.Z,{requires:"Cache, Model, Type, Id",mdxType:"FunctionInfo"}),(0,r.kt)("p",null,"Retrieve an instance from the cache.\nIf the instance is not in cache or if the included relations are not loaded,\nrun the given runner."),(0,r.kt)("h4",{id:"example-12"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { cachedOr } from 'func-client/core';\n\nconst post = await action().run(cachedOr(() => null));\n")),(0,r.kt)("h4",{id:"arguments-4"},"Arguments"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{Function}")," ",(0,r.kt)("inlineCode",{parentName:"li"},"nilRunner")," the runner to use when cached result is empty")),(0,r.kt)("h4",{id:"returns-12"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"{Promise<I | T>}")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"I")," is an instance of the targeted model and ",(0,r.kt)("inlineCode",{parentName:"p"},"T")," is\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"nilRunner")," result."),(0,r.kt)("h3",{id:"cachedusing"},(0,r.kt)("inlineCode",{parentName:"h3"},"cachedUsing")),(0,r.kt)(i.Z,{requires:"Cache, Model, Type, Id",mdxType:"FunctionInfo"}),(0,r.kt)("p",null,"Retrieve an instance from the cache.\nIf the instance is not in cache or if the included relations are not loaded,\nreturns null.\nTransform the returned result using given callback."),(0,r.kt)("h4",{id:"example-13"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { cachedUsing } from 'func-client/core';\n\nconst post = await action().run(cachedUsing(({ instance }) => instance));\n")),(0,r.kt)("h4",{id:"arguments-5"},"Arguments"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{Function}")," ",(0,r.kt)("inlineCode",{parentName:"li"},"transform")," the callback to transform the cached data object")),(0,r.kt)("h4",{id:"returns-13"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"{Promise<T>}")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"T")," is the transformed result."),(0,r.kt)("h2",{id:"jsonapi"},"JSON:API"),(0,r.kt)("h3",{id:"usingdocument"},(0,r.kt)("inlineCode",{parentName:"h3"},"usingDocument")),(0,r.kt)(i.Z,{only:"JSON:API",mdxType:"FunctionInfo"}),(0,r.kt)("p",null,"Append the JSON:API document object to data object.\nUse it as the parameter of ",(0,r.kt)("inlineCode",{parentName:"p"},"allUsing")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"oneUsing")," runners."),(0,r.kt)("h4",{id:"example-14"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { allUsing } from 'func-client/core';\nimport { usingDocument } from 'func-client/jsonapi';\n\nconst data = await action().run(allUsing(usingDocument));\ndata.instances; // Model instances.\ndata.document;  // JSON:API document with meta, etc.\n")))}h.isMDXComponent=!0}}]);