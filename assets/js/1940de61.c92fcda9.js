"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1860],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,f=u["".concat(c,".").concat(d)]||u[d]||y[d]||i;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4735:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(1163),a=(r(9496),r(9613));const i={sidebar_position:5,description:"Internal types description."},o="Internal types",l={unversionedId:"api/func-client/types",id:"api/func-client/types",title:"Internal types",description:"Internal types description.",source:"@site/docs/api/func-client/types.md",sourceDirName:"api/func-client",slug:"/api/func-client/types",permalink:"/func-client/docs/api/func-client/types",draft:!1,editUrl:"https://github.com/paul-thebaud/func-client/tree/main/website/docs/api/func-client/types.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"Internal types description."},sidebar:"docsSidebar",previous:{title:"JsonRestSerializer",permalink:"/func-client/docs/api/func-client/classes/jsonrest.JsonRestSerializer"},next:{title:"FAQ",permalink:"/func-client/docs/faq"}},c={},p=[{value:"Arrayable",id:"arrayable",level:2},{value:"ArrayableVariadic",id:"arrayablevariadic",level:2},{value:"Awaitable",id:"awaitable",level:2},{value:"Constructor",id:"constructor",level:2},{value:"Dictionary",id:"dictionary",level:2},{value:"Optional",id:"optional",level:2}],s={toc:p},u="wrapper";function y(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"internal-types"},"Internal types"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"FuncClient uses some utilities types which are not exported to avoid polluting\nyour code or conflicting with your own utilities types. You may copy those types\nas you want and use them in your project.")),(0,a.kt)("h2",{id:"arrayable"},"Arrayable"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"type Arrayable<T> = T | T[];\n")),(0,a.kt)("h2",{id:"arrayablevariadic"},"ArrayableVariadic"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export type ArrayableVariadic<T> = T[] | [T[]];\n")),(0,a.kt)("h2",{id:"awaitable"},"Awaitable"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"type Awaitable<T> = T | Promise<T>;\n")),(0,a.kt)("h2",{id:"constructor"},"Constructor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"type Constructor<T> = new (...args: any[]) => T;\n")),(0,a.kt)("h2",{id:"dictionary"},"Dictionary"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"type Dictionary<T = unknown> = { [K: string]: T };\n")),(0,a.kt)("h2",{id:"optional"},"Optional"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export type Optional<T> = T | null | undefined;\n")))}y.isMDXComponent=!0}}]);