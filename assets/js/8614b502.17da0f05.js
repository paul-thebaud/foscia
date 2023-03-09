"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3988],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),l=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,d=u["".concat(o,".").concat(f)]||u[f]||m[f]||i;return n?a.createElement(d,c(c({ref:t},s),{},{components:n})):a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=f;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:r,c[1]=p;for(var l=2;l<i;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8454:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var a=n(1163),r=(n(9496),n(9613));const i={id:"http.makeRequest",title:"Namespace: makeRequest",sidebar_label:"makeRequest",custom_edit_url:null},c=void 0,p={unversionedId:"api/func-client/namespaces/http.makeRequest",id:"api/func-client/namespaces/http.makeRequest",title:"Namespace: makeRequest",description:"http.makeRequest",source:"@site/docs/api/func-client/namespaces/http.makeRequest.md",sourceDirName:"api/func-client/namespaces",slug:"/api/func-client/namespaces/http.makeRequest",permalink:"/func-client/docs/api/func-client/namespaces/http.makeRequest",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"http.makeRequest",title:"Namespace: makeRequest",sidebar_label:"makeRequest",custom_edit_url:null},sidebar:"docsSidebar",previous:{title:"makePut",permalink:"/func-client/docs/api/func-client/namespaces/http.makePut"},next:{title:"param",permalink:"/func-client/docs/api/func-client/namespaces/http.param"}},o={},l=[{value:"Variables",id:"variables",level:2},{value:"extension",id:"extension",level:3},{value:"Defined in",id:"defined-in",level:4}],s={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/func-client/docs/api/func-client/modules/http"},"http"),".makeRequest"),(0,r.kt)("h2",{id:"variables"},"Variables"),(0,r.kt)("h3",{id:"extension"},"extension"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"extension"),": ",(0,r.kt)("a",{parentName:"p",href:"/func-client/docs/api/func-client/modules/core#actionparsedextension"},(0,r.kt)("inlineCode",{parentName:"a"},"ActionParsedExtension")),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"makeRequest"),": <C, E",">","(",(0,r.kt)("inlineCode",{parentName:"p"},"this"),": ",(0,r.kt)("a",{parentName:"p",href:"/func-client/docs/api/func-client/modules/core#action"},(0,r.kt)("inlineCode",{parentName:"a"},"Action")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"C"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"E"),">",", ",(0,r.kt)("inlineCode",{parentName:"p"},"pathOrBaseURL"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"config?"),": ",(0,r.kt)("a",{parentName:"p",href:"/func-client/docs/api/func-client/modules/http#httprequestconfig"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpRequestConfig")),") => ",(0,r.kt)("a",{parentName:"p",href:"/func-client/docs/api/func-client/modules/core#action"},(0,r.kt)("inlineCode",{parentName:"a"},"Action")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"C"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"E"),">","  }",">"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/paul-thebaud/func-client/blob/a0b290b/src/http/actions/context/enhancers/makeRequest.ts#L37"},"src/http/actions/context/enhancers/makeRequest.ts:37")))}m.isMDXComponent=!0}}]);