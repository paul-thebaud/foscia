"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[836],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(9496);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=s,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,a=new Array(r);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:s,a[1]=i;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},765:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=n(1163),s=(n(9496),n(9613));const r={sidebar_position:100},a="FAQ",i={unversionedId:"faq",id:"faq",title:"FAQ",description:"If you have any questions, feel free to ask them on our",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/func-client/docs/faq",draft:!1,editUrl:"https://github.com/paul-thebaud/func-client/tree/main/website/docs/faq.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"docsSidebar",previous:{title:"Internal types",permalink:"/func-client/docs/api/func-client/types"}},l={},p=[{value:"Why are we not using big <code>Model</code> and <code>Builder</code> classes?",id:"why-are-we-not-using-big-model-and-builder-classes",level:2},{value:"Is it strongly typed?",id:"is-it-strongly-typed",level:2},{value:"Why classes are used for models in Typescript?",id:"why-classes-are-used-for-models-in-typescript",level:2},{value:"What our the downsides of FuncClient approach?",id:"what-our-the-downsides-of-funcclient-approach",level:2},{value:"Why is my IDE slow when using FuncClient?",id:"why-is-my-ide-slow-when-using-funcclient",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,s.kt)(u,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"faq"},"FAQ"),(0,s.kt)("p",null,"If you have any questions, feel free to ask them on our\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/paul-thebaud/func-client/issues"},"GitHub Issues page"),"."),(0,s.kt)("h2",{id:"why-are-we-not-using-big-model-and-builder-classes"},"Why are we not using big ",(0,s.kt)("inlineCode",{parentName:"h2"},"Model")," and ",(0,s.kt)("inlineCode",{parentName:"h2"},"Builder")," classes?"),(0,s.kt)("p",null,"In a lot of frameworks, modeling the data and building the query are done\nthrough two main classes: the ",(0,s.kt)("inlineCode",{parentName:"p"},"Model")," and the ",(0,s.kt)("inlineCode",{parentName:"p"},"Builder"),"."),(0,s.kt)("p",null,"The goal of FuncClient is to provide a lot of simple function to affect model\ninstances or their context. If all of those functions were included in classes,\nit will be in your final production bundle even if you are not using them.\nThanks to the way FuncClient works, ",(0,s.kt)("strong",{parentName:"p"},"all unused models helpers or actions\nenhancers/runners can be tree-shaken.")),(0,s.kt)("h2",{id:"is-it-strongly-typed"},"Is it strongly typed?"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Yes!")," FuncClient makes great use of Typescript generics to provide strongly\ntyped models objects and contexts changes."),(0,s.kt)("p",null,"Here are a short example of the capabilities reusing the previous examples:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="post.ts"',title:'"post.ts"'},"import { makeModel, attr, hasMany, toDate } from 'func-client/core';\n\nclass Post extends makeModel('posts', {\n    title: attr({ default: '' }), // Infered to string.\n    description: attr<string>(), // Custom types are also supported.\n    createdAt: attr(toDate()), // Infered from transformers.\n    publishedAt: attr<Date | null>(toDate()),\n    comments: hasMany<Comment>(),\n    // `this` context is available and strongly typed in definition methods.\n    get isPublished() {\n        return !!this.publishedAt;\n    },\n}) {\n    // `this` context is also available and strongly typed in class methods.\n    shortenDescription() {\n        return this.description.substring(0, 50);\n    }\n}\n")),(0,s.kt)("p",null,"Strongly typed models are used by context enhancers to provide strongly typed\nparameters."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"const posts = await action()\n    // We are telling the action context is now for the Post model.\n    .use(model(Post))\n    // We can now use this action context to strongly type context enhancer params.\n    // As an example, `include` is typed for deep dotted relations, such as:\n    // \"comments\", \"comments.author\", \"comments.author.favoritePosts\", etc.\n    .use(include('comments'))\n    // As another example, `fields` is typed for direct attributes or relations of the model.\n    .use(fields('title', 'description', 'comments'))\n    .run(all());\n")),(0,s.kt)("h2",{id:"why-classes-are-used-for-models-in-typescript"},"Why classes are used for models in Typescript?"),(0,s.kt)("p",null,"We extend the ",(0,s.kt)("inlineCode",{parentName:"p"},"makeModel")," call when using Typescript to be able to only\n",(0,s.kt)("inlineCode",{parentName:"p"},"import type")," of the class type when typing our relations."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"This prevents dependency cycles.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="comment.ts"',title:'"comment.ts"'},"export default class Comment extends makeModel('posts') {}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="post.ts"',title:'"post.ts"'},"// Notice the `import type` usage instead of simple `import`.\nimport type Comment from './comment';\n\nexport default class Post extends makeModel('posts', {\n    comments: hasMany<Comment>(),\n}) {}\n")),(0,s.kt)("h2",{id:"what-our-the-downsides-of-funcclient-approach"},"What our the downsides of FuncClient approach?"),(0,s.kt)("p",null,"When declaring models, there are no clear downside of the functional\nprogramming, as ",(0,s.kt)("inlineCode",{parentName:"p"},"this")," context is still available in definition and classes\nbody."),(0,s.kt)("p",null,"But, since we are not building the action factory for you, you must initialize\nthis factory yourself with the things you need: an adapter, a serializer, etc.\nDon't worry, the process is still pretty simple thanks to blueprints."),(0,s.kt)("p",null,"In addition, you will need a supplementary step to be able to use\n",(0,s.kt)("inlineCode",{parentName:"p"},"action().model(Post).all()"),", because those functions must be imported to be\nused. This is possible through actions' extensions, which will plug functions to\nyour action instance and allow you to use a builder pattern call style."),(0,s.kt)("h2",{id:"why-is-my-ide-slow-when-using-funcclient"},"Why is my IDE slow when using FuncClient?"),(0,s.kt)("p",null,"Due to generics usage and types inference, FuncClient may require more types\ncomputation for autocompletion than other librairies."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"JetBrains's IDEs")," seems to currently have a problem with TypeScript types\nevaluation performance:\n",(0,s.kt)("a",{parentName:"li",href:"https://youtrack.jetbrains.com/issue/WEB-52943/Meta-High-CPU-usage-on-resolve-or-types-evaluation-in-TypeScript"},"you should check out this meta issue tracking CPU overwhelm when using TypeScript to get updates"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"VSCode")," looks to quickly provide autocompletion without any problem.")))}d.isMDXComponent=!0}}]);