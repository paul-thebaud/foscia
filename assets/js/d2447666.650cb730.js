"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7479],{9613:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>d});var n=o(9496);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=c(o),d=r,f=u["".concat(l,".").concat(d)]||u[d]||p[d]||a;return o?n.createElement(f,s(s({ref:t},m),{},{components:o})):n.createElement(f,s({ref:t},m))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=o[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},7344:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=o(4250),r=(o(9496),o(9613));const a={sidebar_position:2,description:"Sharing common features across your models."},s="Models composition",i={unversionedId:"advanced/models-composition",id:"advanced/models-composition",title:"Models composition",description:"Sharing common features across your models.",source:"@site/docs/advanced/models-composition.md",sourceDirName:"advanced",slug:"/advanced/models-composition",permalink:"/func-client/docs/advanced/models-composition",draft:!1,editUrl:"https://github.com/paul-thebaud/func-client/tree/main/website/docs/advanced/models-composition.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Sharing common features across your models."},sidebar:"tutorialSidebar",previous:{title:"Models configuration",permalink:"/func-client/docs/advanced/models-configuration"},next:{title:"Custom transformers",permalink:"/func-client/docs/advanced/custom-transformers"}},l={},c=[{value:"Composition",id:"composition",level:2},{value:"Factory",id:"factory",level:2}],m={toc:c};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"models-composition"},"Models composition"),(0,r.kt)("admonition",{title:"What you'll learn",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Creating composables to share features across some of your models"),(0,r.kt)("li",{parentName:"ul"},"Creating your own model factory with predefined features for all of your models"))),(0,r.kt)("p",null,"Sometimes, you may want to share common features across your models.\nTo solve this, you may use one of the two solutions proposed by FuncClient:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#composition"},"Composition"),", to share features across some of your models"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#factory"},"Factory"),", to share features across all of your models")),(0,r.kt)("h2",{id:"composition"},"Composition"),(0,r.kt)("p",null,"When you need to share features across ",(0,r.kt)("strong",{parentName:"p"},"some")," of your models, you should use\ncomposition."),(0,r.kt)("p",null,"The first step is to create a composable with the features you want to share.\nThis is done through ",(0,r.kt)("inlineCode",{parentName:"p"},"makeComposable")," and uses the same syntax as ",(0,r.kt)("inlineCode",{parentName:"p"},"makeModel"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="composables/publishable.js"',title:'"composables/publishable.js"'},"import { attr, makeComposable, toDate } from 'func-client/core';\n\nexport default makeComposable({\n  publishedAt: attr(toDate()),\n  get isDraft() {\n    return !this.publishedAt;\n  },\n});\n")),(0,r.kt)("p",null,"Once your composable is ready, you can extend it when creating your model."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="models/post.js"',title:'"models/post.js"'},"import { makeModel } from 'func-client/core';\nimport publishable from '../composables/publishable';\n\nexport default class Post extends makeModel('posts').extends(publishable) {\n}\n")),(0,r.kt)("h2",{id:"factory"},"Factory"),(0,r.kt)("p",null,"When you need to share features across ",(0,r.kt)("strong",{parentName:"p"},"all")," of your models, you should use\na custom model factory. It will replace the FuncClient's ",(0,r.kt)("inlineCode",{parentName:"p"},"makeModel")," function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="makeModel.js"',title:'"makeModel.js"'},"import { attr, makeModelFactory, toDate } from 'func-client/core';\n\nexport default makeModelFactory({\n  createdAt: attr(toDate()),\n  updatedAt: attr(toDate()),\n  get wasChangedSinceCreation() {\n    return this.createdAt.getTime() === this.updatedAt.getTime();\n  },\n});\n")),(0,r.kt)("p",null,"Once your factory is ready, you can use in replacement of the classical\n",(0,r.kt)("inlineCode",{parentName:"p"},"makeModel"),", as it will have the same features."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import makeModel from './makeModel';\n\nexport default class Post extends makeModel('posts', { /* definition */ }) {\n}\n")))}p.isMDXComponent=!0}}]);