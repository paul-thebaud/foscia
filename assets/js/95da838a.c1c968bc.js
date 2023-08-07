"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3951],{9613:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),l=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=l(r),u=a,m=c["".concat(o,".").concat(u)]||c[u]||f[u]||p;return r?n.createElement(m,s(s({ref:t},d),{},{components:r})):n.createElement(m,s({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,s=new Array(p);s[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<p;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3278:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>f,frontMatter:()=>p,metadata:()=>i,toc:()=>l});var n=r(7366),a=(r(9496),r(9613));const p={id:"http.ResponseError",title:"Class: ResponseError",sidebar_label:"ResponseError",custom_edit_url:null},s=void 0,i={unversionedId:"reference/api/classes/http.ResponseError",id:"reference/api/classes/http.ResponseError",title:"Class: ResponseError",description:"http.ResponseError",source:"@site/docs/reference/api/classes/http.ResponseError.md",sourceDirName:"reference/api/classes",slug:"/reference/api/classes/http.ResponseError",permalink:"/foscia/docs/reference/api/classes/http.ResponseError",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"http.ResponseError",title:"Class: ResponseError",sidebar_label:"ResponseError",custom_edit_url:null},sidebar:"docsSidebar",previous:{title:"NotFoundError",permalink:"/foscia/docs/reference/api/classes/http.NotFoundError"},next:{title:"ServerError",permalink:"/foscia/docs/reference/api/classes/http.ServerError"}},o={},l=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"cause",id:"cause",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"message",id:"message",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"name",id:"name",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"request",id:"request",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"response",id:"response",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"stack",id:"stack",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-6",level:4}],d={toc:l},c="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/modules/http"},"http"),".ResponseError"),(0,a.kt)("p",null,"Extendable error class used inside Foscia."),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/http.HttpAdapterError"},(0,a.kt)("inlineCode",{parentName:"a"},"HttpAdapterError"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"ResponseError"))),(0,a.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/http.ServerError"},(0,a.kt)("inlineCode",{parentName:"a"},"ServerError"))),(0,a.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/http.InvalidRequestError"},(0,a.kt)("inlineCode",{parentName:"a"},"InvalidRequestError"))))),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"new ResponseError"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"request"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"response"),")"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"request")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/foscia/docs/reference/api/modules/http#httprequest"},(0,a.kt)("inlineCode",{parentName:"a"},"HttpRequest")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"response")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Response"))))),(0,a.kt)("h4",{id:"overrides"},"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/http.HttpAdapterError"},"HttpAdapterError"),".",(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/http.HttpAdapterError#constructor"},"constructor")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/paul-thebaud/foscia/blob/06ef473e/src/http/errors/responseError.ts#L7"},"src/http/errors/responseError.ts:7")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"cause"},"cause"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"cause"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"unknown")),(0,a.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/http.HttpAdapterError"},"HttpAdapterError"),".",(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/http.HttpAdapterError#cause"},"cause")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,"website/node_modules/.pnpm/",(0,a.kt)("a",{parentName:"p",href:"mailto:typescript@5.1.6"},"typescript@5.1.6"),"/node_modules/typescript/lib/lib.es2022.error.d.ts:24"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"message"},"message"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"message"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/http.HttpAdapterError"},"HttpAdapterError"),".",(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/http.HttpAdapterError#message"},"message")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,"website/node_modules/.pnpm/",(0,a.kt)("a",{parentName:"p",href:"mailto:typescript@5.1.6"},"typescript@5.1.6"),"/node_modules/typescript/lib/lib.es5.d.ts:1068"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"name"},"name"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"name"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/http.HttpAdapterError"},"HttpAdapterError"),".",(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/http.HttpAdapterError#name"},"name")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,"website/node_modules/.pnpm/",(0,a.kt)("a",{parentName:"p",href:"mailto:typescript@5.1.6"},"typescript@5.1.6"),"/node_modules/typescript/lib/lib.es5.d.ts:1067"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"request"},"request"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"request"),": ",(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/modules/http#httprequest"},(0,a.kt)("inlineCode",{parentName:"a"},"HttpRequest"))),(0,a.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/http.HttpAdapterError"},"HttpAdapterError"),".",(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/http.HttpAdapterError#request"},"request")),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/paul-thebaud/foscia/blob/06ef473e/src/http/errors/httpAdapterError.ts#L5"},"src/http/errors/httpAdapterError.ts:5")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"response"},"response"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"response"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Response")),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/paul-thebaud/foscia/blob/06ef473e/src/http/errors/responseError.ts#L5"},"src/http/errors/responseError.ts:5")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"stack"},"stack"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"stack"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/http.HttpAdapterError"},"HttpAdapterError"),".",(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/http.HttpAdapterError#stack"},"stack")),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,"website/node_modules/.pnpm/",(0,a.kt)("a",{parentName:"p",href:"mailto:typescript@5.1.6"},"typescript@5.1.6"),"/node_modules/typescript/lib/lib.es5.d.ts:1069"))}f.isMDXComponent=!0}}]);