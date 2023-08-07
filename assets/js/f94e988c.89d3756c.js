"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[665],{9613:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=s(n),f=r,u=m["".concat(c,".").concat(f)]||m[f]||d[f]||i;return n?a.createElement(u,o(o({ref:t},l),{},{components:n})):a.createElement(u,o({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[m]="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},94:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(7366),r=(n(9496),n(9613));const i={id:"http.makeGet",title:"Namespace: makeGet",sidebar_label:"makeGet",custom_edit_url:null},o=void 0,p={unversionedId:"reference/api/namespaces/http.makeGet",id:"reference/api/namespaces/http.makeGet",title:"Namespace: makeGet",description:"http.makeGet",source:"@site/docs/reference/api/namespaces/http.makeGet.md",sourceDirName:"reference/api/namespaces",slug:"/reference/api/namespaces/http.makeGet",permalink:"/foscia/docs/reference/api/namespaces/http.makeGet",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"http.makeGet",title:"Namespace: makeGet",sidebar_label:"makeGet",custom_edit_url:null},sidebar:"docsSidebar",previous:{title:"makeDelete",permalink:"/foscia/docs/reference/api/namespaces/http.makeDelete"},next:{title:"makePatch",permalink:"/foscia/docs/reference/api/namespaces/http.makePatch"}},c={},s=[{value:"Variables",id:"variables",level:2},{value:"extension",id:"extension",level:3},{value:"Defined in",id:"defined-in",level:4}],l={toc:s},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/modules/http"},"http"),".makeGet"),(0,r.kt)("h2",{id:"variables"},"Variables"),(0,r.kt)("h3",{id:"extension"},"extension"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"extension"),": ",(0,r.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/modules/core#actionparsedextension"},(0,r.kt)("inlineCode",{parentName:"a"},"ActionParsedExtension")),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"makeGet"),": <C, E",">","(",(0,r.kt)("inlineCode",{parentName:"p"},"this"),": ",(0,r.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/modules/core#action"},(0,r.kt)("inlineCode",{parentName:"a"},"Action")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"C"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"E"),">",", ",(0,r.kt)("inlineCode",{parentName:"p"},"pathOrBaseURL"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"config?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Omit"),"<",(0,r.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/modules/http#httprequestconfig"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpRequestConfig")),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"body"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},'"method"'),">",") => ",(0,r.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/modules/core#action"},(0,r.kt)("inlineCode",{parentName:"a"},"Action")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"C"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"E"),">","  }",">"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/paul-thebaud/foscia/blob/06ef473e/src/http/actions/context/enhancers/makeGet.ts#L31"},"src/http/actions/context/enhancers/makeGet.ts:31")))}d.isMDXComponent=!0}}]);