"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4675],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=c(t),u=a,m=f["".concat(l,".").concat(u)]||f[u]||d[u]||i;return t?r.createElement(m,o(o({ref:n},s),{},{components:t})):r.createElement(m,o({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[f]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6546:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=t(1163),a=(t(9496),t(9613));const i={id:"jsonapi.filterBy",title:"Namespace: filterBy",sidebar_label:"filterBy",custom_edit_url:null},o=void 0,p={unversionedId:"reference/api/namespaces/jsonapi.filterBy",id:"reference/api/namespaces/jsonapi.filterBy",title:"Namespace: filterBy",description:"jsonapi.filterBy",source:"@site/docs/reference/api/namespaces/jsonapi.filterBy.md",sourceDirName:"reference/api/namespaces",slug:"/reference/api/namespaces/jsonapi.filterBy",permalink:"/foscia/docs/reference/api/namespaces/jsonapi.filterBy",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"jsonapi.filterBy",title:"Namespace: filterBy",sidebar_label:"filterBy",custom_edit_url:null},sidebar:"docsSidebar",previous:{title:"fieldsFor",permalink:"/foscia/docs/reference/api/namespaces/jsonapi.fieldsFor"},next:{title:"paginate",permalink:"/foscia/docs/reference/api/namespaces/jsonapi.paginate"}},l={},c=[{value:"Variables",id:"variables",level:2},{value:"extension",id:"extension",level:3},{value:"Defined in",id:"defined-in",level:4}],s={toc:c},f="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(f,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/modules/jsonapi"},"jsonapi"),".filterBy"),(0,a.kt)("h2",{id:"variables"},"Variables"),(0,a.kt)("h3",{id:"extension"},"extension"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"extension"),": ",(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/modules/core#actionparsedextension"},(0,a.kt)("inlineCode",{parentName:"a"},"ActionParsedExtension")),"<{ ",(0,a.kt)("inlineCode",{parentName:"p"},"filterBy"),": <C, E",">","(",(0,a.kt)("inlineCode",{parentName:"p"},"this"),": ",(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/modules/core#action"},(0,a.kt)("inlineCode",{parentName:"a"},"Action")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"C"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"E"),">",", ",(0,a.kt)("inlineCode",{parentName:"p"},"key"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"Dictionary"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"unknown"),">",", ",(0,a.kt)("inlineCode",{parentName:"p"},"value?"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"unknown"),") => ",(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/modules/core#action"},(0,a.kt)("inlineCode",{parentName:"a"},"Action")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"C"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"E"),">","  }",">"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/paul-thebaud/foscia/blob/6b5ecb98/src/jsonapi/actions/context/enhancers/filterBy.ts#L32"},"src/jsonapi/actions/context/enhancers/filterBy.ts:32")))}d.isMDXComponent=!0}}]);