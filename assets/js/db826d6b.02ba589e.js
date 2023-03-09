"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2068],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(t),f=a,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||i;return t?r.createElement(m,o(o({ref:n},s),{},{components:t})):r.createElement(m,o({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6702:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=t(1163),a=(t(9496),t(9613));const i={id:"core.onPreparing",title:"Namespace: onPreparing",sidebar_label:"onPreparing",custom_edit_url:null},o=void 0,c={unversionedId:"api/func-client/namespaces/core.onPreparing",id:"api/func-client/namespaces/core.onPreparing",title:"Namespace: onPreparing",description:"core.onPreparing",source:"@site/docs/api/func-client/namespaces/core.onPreparing.md",sourceDirName:"api/func-client/namespaces",slug:"/api/func-client/namespaces/core.onPreparing",permalink:"/func-client/docs/api/func-client/namespaces/core.onPreparing",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"core.onPreparing",title:"Namespace: onPreparing",sidebar_label:"onPreparing",custom_edit_url:null},sidebar:"docsSidebar",previous:{title:"onFinally",permalink:"/func-client/docs/api/func-client/namespaces/core.onFinally"},next:{title:"onRunning",permalink:"/func-client/docs/api/func-client/namespaces/core.onRunning"}},p={},l=[{value:"Variables",id:"variables",level:2},{value:"extension",id:"extension",level:3},{value:"Defined in",id:"defined-in",level:4}],s={toc:l},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/func-client/docs/api/func-client/modules/core"},"core"),".onPreparing"),(0,a.kt)("h2",{id:"variables"},"Variables"),(0,a.kt)("h3",{id:"extension"},"extension"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"extension"),": ",(0,a.kt)("a",{parentName:"p",href:"/func-client/docs/api/func-client/modules/core#actionparsedextension"},(0,a.kt)("inlineCode",{parentName:"a"},"ActionParsedExtension")),"<{ ",(0,a.kt)("inlineCode",{parentName:"p"},"onPreparing"),": <C, E",">","(",(0,a.kt)("inlineCode",{parentName:"p"},"this"),": ",(0,a.kt)("a",{parentName:"p",href:"/func-client/docs/api/func-client/modules/core#action"},(0,a.kt)("inlineCode",{parentName:"a"},"Action")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"C"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"E"),">",", ",(0,a.kt)("inlineCode",{parentName:"p"},"callback"),": () => ",(0,a.kt)("inlineCode",{parentName:"p"},"Awaitable"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">",") => ",(0,a.kt)("a",{parentName:"p",href:"/func-client/docs/api/func-client/modules/core#action"},(0,a.kt)("inlineCode",{parentName:"a"},"Action")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"C"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"E"),">","  }",">"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/paul-thebaud/func-client/blob/a0b290b/src/core/actions/context/enhancers/hooks/onPreparing.ts#L31"},"src/core/actions/context/enhancers/hooks/onPreparing.ts:31")))}d.isMDXComponent=!0}}]);