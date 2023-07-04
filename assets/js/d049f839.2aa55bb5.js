"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2371],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?o.createElement(f,r(r({ref:t},d),{},{components:n})):o.createElement(f,r({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3781:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(1163),a=(n(9496),n(9613));const i={sidebar_position:10,description:"Configuring a model behavior."},r="Configuring models",l={unversionedId:"guides/models/models-configuration",id:"guides/models/models-configuration",title:"Configuring models",description:"Configuring a model behavior.",source:"@site/docs/guides/models/models-configuration.md",sourceDirName:"guides/models",slug:"/guides/models/models-configuration",permalink:"/foscia/docs/guides/models/models-configuration",draft:!1,editUrl:"https://github.com/paul-thebaud/foscia/tree/main/website/docs/guides/models/models-configuration.md",tags:[],version:"current",lastUpdatedAt:1688508156,formattedLastUpdatedAt:"Jul 4, 2023",sidebarPosition:10,frontMatter:{sidebar_position:10,description:"Configuring a model behavior."},sidebar:"docsSidebar",previous:{title:"Models",permalink:"/foscia/docs/category/models"},next:{title:"Composing models",permalink:"/foscia/docs/guides/models/models-composition"}},s={},p=[{value:"How to configure a model",id:"how-to-configure-a-model",level:2},{value:"Common",id:"common",level:2},{value:"Record type",id:"record-type",level:3},{value:"Record path",id:"record-path",level:3},{value:"Comparator and cloner",id:"comparator-and-cloner",level:3},{value:"Type guesser",id:"type-guesser",level:3},{value:"HTTP",id:"http",level:2},{value:"Base URL",id:"base-url",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuring-models"},"Configuring models"),(0,a.kt)("admonition",{title:"What you'll learn",type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Configuring a model through its factory or with a custom factory"),(0,a.kt)("li",{parentName:"ul"},"Learning each available configuration option goal and usage"))),(0,a.kt)("h2",{id:"how-to-configure-a-model"},"How to configure a model"),(0,a.kt)("p",null,"You may configure your model when creating them through your factory ",(0,a.kt)("inlineCode",{parentName:"p"},"makeModel"),"\nor when defining a custom factory such as described in the\n",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/models/models-composition"},"model composition guide"),"."),(0,a.kt)("p",null,"Inside a model creation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="post.js"',title:'"post.js"'},"import { makeModel } from 'foscia/core';\n\nclass Post extends makeModel(\n    {\n        type: 'posts',\n        /* ...configuration */\n    },\n    {\n        /* ...definition */\n    },\n) {}\n")),(0,a.kt)("p",null,"Common to multiple models through a custom model factory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="makeModel.js"',title:'"makeModel.js"'},"import { attr, makeModelFactory, toDate } from 'foscia/core';\n\nexport default makeModelFactory(\n    {\n        /* ...definition */\n    },\n    {\n        /* ...configuration */\n    },\n);\n")),(0,a.kt)("h2",{id:"common"},"Common"),(0,a.kt)("h3",{id:"record-type"},"Record type"),(0,a.kt)("p",null,"When using the model factory ",(0,a.kt)("inlineCode",{parentName:"p"},"makeModel"),", you have probably seen that the first\nargument of the function is a string. This is the ",(0,a.kt)("strong",{parentName:"p"},"type")," of the current model."),(0,a.kt)("p",null,"It may be used for different purpose depending on the context:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Concatenate in a URL to target an API specific resource"),(0,a.kt)("li",{parentName:"ul"},"Identify a record from an API/data source serialized data"),(0,a.kt)("li",{parentName:"ul"},"Etc.")),(0,a.kt)("p",null,"To define it, you should follow your data source convention. As an example, in a\nJSON:API the resource types are defined in plural kebab case, such as\n",(0,a.kt)("inlineCode",{parentName:"p"},"blog-posts")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"comments"),"."),(0,a.kt)("p",null,"You may define the type as the only configuration of the model or as a\nconfiguration property (if you want to define other properties):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="post.js"',title:'"post.js"'},"import { makeModel } from 'foscia/core';\n\nclass Post extends makeModel('posts', {\n    /* ...definition */\n}) {}\n// OR\nclass Post extends makeModel(\n    { type: 'posts' },\n    {\n        /* ...definition */\n    },\n) {}\n")),(0,a.kt)("h3",{id:"record-path"},"Record path"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"path")," is used to query the model. It defaults to the model's type."),(0,a.kt)("p",null,"In an HTTP API, it is used as the endpoint. In a SQL database, it would be the\ntable."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="post.js"',title:'"post.js"'},"import { makeModel } from 'foscia/core';\n\nclass Post extends makeModel(\n    {\n        type: 'posts',\n        path: 'blog-posts',\n    },\n    {\n        /* definition */\n    },\n) {}\n")),(0,a.kt)("h3",{id:"comparator-and-cloner"},"Comparator and cloner"),(0,a.kt)("p",null,"You may have noticed that Foscia provide some model history features. Those\nallow you to know which parts of a model instance changed since its retrieval\nfrom the data source or interact with those changes, through\n",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/models-utilities"},"some utilities functions"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"changed"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"reset"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"syncOriginal"),"."),(0,a.kt)("p",null,"Currently, Foscia won't clone any value when syncing the instance values (on\nsave, etc.) and will do a strict equal comparison to known if the value changed."),(0,a.kt)("p",null,"The following model configuration is equivalent to the default behavior of\nFoscia:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="post.js"',title:'"post.js"'},"import { makeModel } from 'foscia/core';\n\nclass Post extends makeModel(\n    {\n        type: 'posts',\n        compareValue: (newValue, prevValue) => nextValue === prevValue,\n        cloneValue: (value) => value,\n    },\n    {\n        /* definition */\n    },\n) {}\n")),(0,a.kt)("p",null,"You may change those two functions to really clone values when syncing the\ninstance state. Keep in mind that:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Values might be any value your instance could contain, including complex\nobject and even other model instance"),(0,a.kt)("li",{parentName:"ul"},"Cloned values might be restored through ",(0,a.kt)("inlineCode",{parentName:"li"},"reset")," utility"),(0,a.kt)("li",{parentName:"ul"},"Making a real clone of a value without updating the comparator will break\nthe history because of its default behavior")),(0,a.kt)("h3",{id:"type-guesser"},"Type guesser"),(0,a.kt)("p",null,"To avoid defining types on all your relations even when necessary (for example\nin some cases with REST implementation), you may configure a type guesser on\nyour models."),(0,a.kt)("p",null,"Here is an example of a type guesser using hypothetical ",(0,a.kt)("inlineCode",{parentName:"p"},"toKebabCase")," and\n",(0,a.kt)("inlineCode",{parentName:"p"},"pluralize")," functions. For example, if a ",(0,a.kt)("inlineCode",{parentName:"p"},"Comment")," model has a ",(0,a.kt)("inlineCode",{parentName:"p"},"blogPost"),"\nrelation, this would guess the type to ",(0,a.kt)("inlineCode",{parentName:"p"},"blog-posts"),";"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="post.js"',title:'"post.js"'},"import { makeModel, isManyRelationDef } from 'foscia/core';\n\nclass Post extends makeModel(\n    {\n        type: 'posts',\n        guessType: (def: ModelRelationRaw) =>\n            toKebabCase(isManyRelationDef(def) ? def.key : pluralize(def.key)),\n    },\n    {\n        /* definition */\n    },\n) {}\n")),(0,a.kt)("h2",{id:"http"},"HTTP"),(0,a.kt)("p",null,"The following configuration options are specific to HTTP models (JSON:API, JSON\nREST, etc.)"),(0,a.kt)("h3",{id:"base-url"},"Base URL"),(0,a.kt)("p",null,"You may define a ",(0,a.kt)("inlineCode",{parentName:"p"},"baseURL")," configuration option on your models. It will replace\nthe default base URL define on the adapter."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="post.js"',title:'"post.js"'},"import { makeModel } from 'foscia/core';\n\nclass Post extends makeModel(\n    {\n        type: 'posts',\n        baseURL: 'https://example.com/api/v2',\n    },\n    {\n        /* ...definition */\n    },\n) {}\n")))}u.isMDXComponent=!0}}]);