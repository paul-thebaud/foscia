"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[90],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},208:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(9496),o=n(5924);const r="tabItem_IPoj";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,s),hidden:n},t)}},4210:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(4250),o=n(9496),r=n(5924),s=n(4375),l=n(4436),i=n(7883),c=n(4930);const u="tabList_xr86",d="tabItem_r4_W";function p(e){var t;const{lazy:n,block:s,defaultValue:p,values:m,groupId:h,className:f}=e,y=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??y.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,l.l)(g,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===p?p:p??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==k&&!g.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:w}=(0,i.U)(),[N,x]=(0,o.useState)(k),M=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=h){const e=v[h];null!=e&&e!==N&&g.some((t=>t.value===e))&&x(e)}const P=e=>{const t=e.currentTarget,n=M.indexOf(t),a=g[n].value;a!==N&&(T(t),x(a),null!=h&&w(h,String(a)))},O=e=>{var t;let n=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const t=M.indexOf(e.currentTarget)+1;n=M[t]??M[0];break}case"ArrowLeft":{const t=M.indexOf(e.currentTarget)-1;n=M[t]??M[M.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},f)},g.map((e=>{let{value:t,label:n,attributes:s}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>M.push(e),onKeyDown:O,onClick:P},s,{className:(0,r.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,o.cloneElement)(y.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,s.Z)();return o.createElement(p,(0,a.Z)({key:String(t)},e))}},7953:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=n(4250),o=(n(9496),n(9613)),r=n(208),s=n(4210);const l={sidebar_position:1},i="Discover",c={unversionedId:"discover",id:"discover",title:"Discover",description:"What is FuncModel?",source:"@site/docs/discover.mdx",sourceDirName:".",slug:"/discover",permalink:"/func-model/docs/discover",draft:!1,editUrl:"https://github.com/paul-thebaud/func-model/tree/main/website/docs/discover.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Installation",permalink:"/func-model/docs/installation"}},u={},d=[{value:"What is FuncModel?",id:"what-is-funcmodel",level:2},{value:"Concept",id:"concept",level:2},{value:"Model",id:"model",level:3},{value:"Action",id:"action",level:3},{value:"FAQ",id:"faq",level:2},{value:"Why are we not using big <code>Model</code> and <code>Builder</code> classes?",id:"why-are-we-not-using-big-model-and-builder-classes",level:3},{value:"Is it strongly typed?",id:"is-it-strongly-typed",level:3},{value:"Why classes are used for models in Typescript?",id:"why-classes-are-used-for-models-in-typescript",level:3},{value:"What our the downsides of FuncModel approach?",id:"what-our-the-downsides-of-funcmodel-approach",level:3}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"discover"},"Discover"),(0,o.kt)("h2",{id:"what-is-funcmodel"},"What is FuncModel?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"FuncModel")," is a simple functional programming oriented API client. It is\nframework-agnostic and can integrate with any Web app using Javascript or\nTypescript."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Modular, highly extensible and fully tree shakable thanks to functional\nprogramming. ",(0,o.kt)("a",{parentName:"li",href:"#why-are-we-not-using-big-model-and-builder-classes"},"See the benefits")),(0,o.kt)("li",{parentName:"ul"},"Ready to use functions to integrate with any ",(0,o.kt)("a",{parentName:"li",href:"https://jsonapi.org/"},"JSON:API")),(0,o.kt)("li",{parentName:"ul"},"Strongly typed everywhere, with generics typings on models, actions, etc."),(0,o.kt)("li",{parentName:"ul"},"Dependency free (JSON:API adapter is based\non ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},"fetch API"),")"),(0,o.kt)("li",{parentName:"ul"},"(coming soon) Fully linted, tested and documented")),(0,o.kt)("h2",{id:"concept"},"Concept"),(0,o.kt)("h3",{id:"model"},"Model"),(0,o.kt)(s.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="models/post.js"',title:'"models/post.js"'},"import { makeModel, attr, hasMany, toDate } from 'func-model/core';\nimport type Comment from './comment'\n\nexport default class Post extends makeModel('posts', {\n  title: attr<string>(),\n  description: attr<string>(),\n  publishedAt: attr(toDate()),\n  comments: hasMany<Comment>(),\n}, {\n  get isDraft() {\n    return !this.publishedAt;\n  },\n}) {\n}\n"))),(0,o.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="models/post.js"',title:'"models/post.js"'},"import { makeModel, attr, hasMany, toDate } from 'func-model/core';\n\nexport default class Post extends makeModel('posts', {\n    title: attr(),\n    description: attr(),\n    publishedAt: attr(toDate()),\n    comments: hasMany(),\n}, {\n    get isDraft() {\n        return !this.publishedAt;\n    },\n}) {\n}\n")))),(0,o.kt)("p",null,"Models represent the structure of your data. A model is a composed class and can\nbe instantiated. Models are composed of four things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"type")," which uniquely references the model class."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Relationships")," with other models (has one and has many)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Attributes")," representing non relationships values (string, date, etc.)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Extensions")," which add custom features to your model instances (e.g. full\nname getter for a ",(0,o.kt)("inlineCode",{parentName:"li"},"User")," model, etc.).")),(0,o.kt)("h3",{id:"action"},"Action"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { forModel, all, raw, destroy } from 'func-model/core';\nimport { include } from 'func-model/json-api';\n\nconst posts = await action()\n  .use(forModel(Post))\n  .use(include('comments'))\n  .run(all());\n\nawait action()\n  .use(destroy(posts[0]))\n  .run(raw());\n")),(0,o.kt)("p",null,"Actions are the way you make interaction between your models and an external\nAPI. There are three steps to an action:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Creation")," using your own action factory with its dependencies (adapter,\nserializer, etc.)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Use")," of context enhancers to affect the context of the action (change the\npath, change the affected model, change some query params, etc.)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Run")," of a context consumer to execute the action and retrieve a result.")),(0,o.kt)("p",null,"The context of the action can be changed to pretty everything and the typings\nare correctly propagated, making it a secure and easy way of building action\nusing Typescript or Javascript."),(0,o.kt)("p",null,"Context enhancers can be async as they are queued until run of the context\nconsumer."),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("h3",{id:"why-are-we-not-using-big-model-and-builder-classes"},"Why are we not using big ",(0,o.kt)("inlineCode",{parentName:"h3"},"Model")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"Builder")," classes?"),(0,o.kt)("p",null,"In a lot of frameworks, modeling the data and building the query are done\nthrough two main classes: the ",(0,o.kt)("inlineCode",{parentName:"p"},"Model")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"Builder"),"."),(0,o.kt)("p",null,"The goal of FuncModel is to provide a lot of simple function to affect model\ninstances or their context. If all of those functions were included in classes,\nit will be in your final production bundle even if you are not using them.\nThanks to the way FuncModel works, ",(0,o.kt)("strong",{parentName:"p"},"all unused models helpers or actions\nenhancers/consumers can be tree shaken.")),(0,o.kt)("h3",{id:"is-it-strongly-typed"},"Is it strongly typed?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Yes!")," FuncModel makes great use of Typescript generics to provide strongly\ntyped models objects and contexts changes."),(0,o.kt)("p",null,"Here are a short example of the capabilities reusing the previous examples:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="post.ts"',title:'"post.ts"'},"import { makeModel, attr, hasMany, toDate } from 'func-model/core';\n\nclass Post extends makeModel('posts', {\n  title: attr({ default: '' }), // Infered to string.\n  description: attr<string>(), // Custom types are also supported.\n  createdAt: attr(toDate()), // Infered from transformers.\n  publishedAt: attr<Date | null>(toDate()),\n  comments: hasMany<Comment>(),\n}, {\n  // `this` context is available and strongly typed in extensions.\n  get isPublished() {\n    return !!this.publishedAt;\n  },\n}) {\n  // `this` context is also available and strongly typed in classes body.\n  shortenDescription() {\n    return this.description.substring(0, 50);\n  }\n}\n")),(0,o.kt)("p",null,"Strongly typed models are used by context enhancers to provide strongly typed\nparameters."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const posts = await action()\n  // We are telling the action context is now for the Post model.\n  .use(forModel(Post))\n  // We can now use this action context to strongly type context enhancer params.\n  // As an example, `include` is typed for deep dotted relations, such as:\n  // \"comments\", \"comments.author\", \"comments.author.favoritePosts\", etc.\n  .use(include('comments'))\n  // As another example, `fields` is typed for direct attributes or relationships of the model.\n  .use(fields('title', 'description', 'comments'))\n  .run(all());\n")),(0,o.kt)("h3",{id:"why-classes-are-used-for-models-in-typescript"},"Why classes are used for models in Typescript?"),(0,o.kt)("p",null,"We extend the ",(0,o.kt)("inlineCode",{parentName:"p"},"makeModel")," call when using Typescript to be able to\nonly ",(0,o.kt)("inlineCode",{parentName:"p"},"import type")," of the class type when typing our relations."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"This prevents dependency cycles.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="comment.ts"',title:'"comment.ts"'},"export default class Comment extends makeModel('posts') {\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="post.ts"',title:'"post.ts"'},"// Notice the `import type` usage instead of simple `import`.\nimport type Comment from './comment';\n\nexport default class Post extends makeModel('posts', {\n  comments: hasMany<Comment>(),\n}) {\n}\n")),(0,o.kt)("h3",{id:"what-our-the-downsides-of-funcmodel-approach"},"What our the downsides of FuncModel approach?"),(0,o.kt)("p",null,"When declaring models, there are no clear downside of the functional\nprogramming, as ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," context is still available in extensions and classes\nbody."),(0,o.kt)("p",null,"But, since we are not building the action factory for you, you must initialize\nthis factory yourself with the things you need: an adapter, a serializer, etc.\nDon't worry, the process is still pretty simple."),(0,o.kt)("p",null,"In addition, you cannot just use ",(0,o.kt)("inlineCode",{parentName:"p"},"action().forModel(Post).all()")," because those\nfunction must be imported to be used. We are thinking of a way to simply extends\nthe action with reusable function, but that's not currently possible regarding\nthe way Typescript manage types (generics of context enhancers and consumers\nwould be lost)."))}m.isMDXComponent=!0}}]);