"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1330],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5153:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(9496),r=n(5924);const o={tabItem:"tabItem_oaqp"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},9407:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(1163),r=n(9496),o=n(5924),i=n(3642),l=n(3442),s=n(5506),u=n(2487),d=n(9473);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function c(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=c(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=f({queryString:n,groupId:a}),[p,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),h=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),k(e)}),[u,k,o]),tabValues:o}}var h=n(1517);const g={tabList:"tabList_PUic",tabItem:"tabItem_TlgZ"};function y(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),c=e=>{const t=e.currentTarget,n=d.indexOf(t),a=u[n].value;a!==l&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:c},i,{className:(0,o.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=k(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(b,(0,a.Z)({},e,t)))}function v(e){const t=(0,h.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},1673:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>k,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var a=n(1163),r=(n(9496),n(9613)),o=n(5153),i=n(9407),l=n(5973);const s={sidebar_position:30,description:"Define models with attributes, relations and hooks."},u="Models",d={unversionedId:"models",id:"models",title:"Models",description:"Define models with attributes, relations and hooks.",source:"@site/docs/models.mdx",sourceDirName:".",slug:"/models",permalink:"/func-client/docs/models",draft:!1,editUrl:"https://github.com/paul-thebaud/func-client/tree/main/website/docs/models.mdx",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,description:"Define models with attributes, relations and hooks."},sidebar:"docsSidebar",previous:{title:"Getting started",permalink:"/func-client/docs/getting-started"},next:{title:"Actions",permalink:"/func-client/docs/actions"}},p={},c=[{value:"Model factory",id:"model-factory",level:2},{value:"Extending a model class",id:"extending-a-model-class",level:3},{value:"Using models classes",id:"using-models-classes",level:3},{value:"Definition",id:"definition",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Configuration",id:"configuration",level:4},{value:"Transform",id:"transform",level:4},{value:"Relations",id:"relations",level:3},{value:"Configuration",id:"configuration-1",level:4},{value:"Custom properties",id:"custom-properties",level:3},{value:"Hooks",id:"hooks",level:2}],m={toc:c},f="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"models"},"Models"),(0,r.kt)("admonition",{title:"What you'll learn",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Defining basic models with attributes and relations"),(0,r.kt)("li",{parentName:"ul"},"Extending your models with custom properties"),(0,r.kt)("li",{parentName:"ul"},"Registering hooks on models"))),(0,r.kt)("h2",{id:"model-factory"},"Model factory"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { makeModel, attr, hasMany, toDate } from 'func-client/core';\n\nmakeModel('type', {\n    /* The model definition */\n    title: attr<string>(),\n    description: attr<string>(),\n    publishedAt: attr<Date | undefined>(toDate()),\n    comments: hasMany<Comment>(),\n    get published() {\n        return !!this.publishedAt;\n    },\n});\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"makeModel")," is the default model factory function. It defines a new model using\n2 arguments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The string ",(0,r.kt)("inlineCode",{parentName:"li"},"type")," or a configuration object."),(0,r.kt)("li",{parentName:"ul"},"The optional ",(0,r.kt)("inlineCode",{parentName:"li"},"definition")," of the model: an object map containing\nattributes/relations definitions and custom properties and methods.")),(0,r.kt)("p",null,"The attributes and relations definition represents the ",(0,r.kt)("inlineCode",{parentName:"p"},"schema")," of the model."),(0,r.kt)("h3",{id:"extending-a-model-class"},"Extending a model class"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"makeModel")," will return a model class which can be extended by an ES6 class."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"export default class Post extends makeModel('Post') {}\n")),(0,r.kt)("p",null,"The returned model class also provides static methods to extend the definition\nalready provided to ",(0,r.kt)("inlineCode",{parentName:"p"},"makeModel"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"/* Initial model creation with(out) definition */\nmakeModel('Post')\n    .extends({\n        /* additional definition */\n    })\n    .extends({\n        /* another additional definition */\n    });\n")),(0,r.kt)("p",null,"This can be useful when sharing common features across models: creation\ntimestamps, client side ID generation, etc."),(0,r.kt)("p",null,"If you wish to learn more about the composition capabilities of models, you\nshould read the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/advanced/models-composition"},"advanced guide about models composition"),"."),(0,r.kt)("h3",{id:"using-models-classes"},"Using models classes"),(0,r.kt)("p",null,"Model classes can be used as any classical ES6 class. It can be instantiated,\nmanipulated, etc. Properties will be defined on each instance from the model\ndefinition."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const post = new Post();\npost.title = 'Hello World!';\npost.publishedAt = new Date();\nconsole.log(post.title); // \"Hello World!\"\nconsole.log(post.published); // true\nconsole.log(post.exists); // false\n")),(0,r.kt)("p",null,"Please note that most model's interaction (fetching, updating, etc.) are done\nthrough actions, so you may ",(0,r.kt)("a",{parentName:"p",href:"/docs/actions"},"read the actions guide"),"\nto learn more about those."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"FuncClient proposes you multiple utilities functions to interact with models")),(0,r.kt)(l.Z,{className:"button bg--primary-gradient",to:"/docs/models",mdxType:"Link"},"Read the models' utilities API guide"),(0,r.kt)("h2",{id:"definition"},"Definition"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You ",(0,r.kt)("strong",{parentName:"p"},"must")," not use ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"lid"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"exists")," as key of any\nattributes/relations/properties as those keys are internally used by FuncClient\nor may be used by dependencies (e.g. JSON:API adapter).")),(0,r.kt)("h3",{id:"attributes"},"Attributes"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"attr")," is an attribute definition factory function to use when you wish to\ndefine your model's attributes. It may take 0 to 2 arguments, depending on what\nyou want to do."),(0,r.kt)(i.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { attr, toDate } from 'func-client/core';\n\nattr<string>(); // Without config.\nattr(toDate()); // With a transformer.\nattr({ default: null, transformer: toDate() }); // With config.\nattr(toDate(), { readOnly: true }); // With a transformer and config.\nattr({ default: () => [] }); // With a factory default (required for objects props).\n"))),(0,r.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { attr, toDate } from 'func-client/core';\n\nattr(); // Without config.\nattr(toDate()); // With a transformer.\nattr({ default: null, transformer: toDate() }); // With config.\nattr(toDate(), { readOnly: true }); // With a transformer and config.\nattr({ default: () => [] }); // With a factory default (required for objects props).\n")))),(0,r.kt)("p",null,"Note that FuncClient consider your attributes as non-nullable values by default.\nWhen one of your model contains nullable attributes, you may want to pass a type\nto the factory (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"attr<string | null>()"),") or set a default attribute value\n(e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"attr({ default: '' })"),")."),(0,r.kt)("h4",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"You may customize your attribute with the following config:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Defaults"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"transformer")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Transform<T>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},"The transformer for the prop's value when interacting with your backend.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"T")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},"The default value for the prop when initializing a model instance.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"readOnly")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"The value won't be serialized when sending the data to your data source.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"alias")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},"The key to (de)serialize the prop's value from/in when interacting with your backend.")))),(0,r.kt)("h4",{id:"transform"},"Transform"),(0,r.kt)("p",null,"You can use a transform to convert an attribute value when (de)serializing\nfrom/to your data source. There are two types or transformer within FuncClient:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FunctionTransform"),": a function to call to transform the value whether we\nare serializing or deserializing it."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ObjectTransform"),": an object with two methods: ",(0,r.kt)("inlineCode",{parentName:"li"},"serialize")," and\n",(0,r.kt)("inlineCode",{parentName:"li"},"deserialize"),".")),(0,r.kt)("p",null,"FuncClient propose you 4 transformers out of the box:\n",(0,r.kt)("a",{parentName:"p",href:"/docs/api/func-client/modules/core#todate"},(0,r.kt)("inlineCode",{parentName:"a"},"toDate")),",\n",(0,r.kt)("a",{parentName:"p",href:"/docs/api/func-client/modules/core#tonumber"},(0,r.kt)("inlineCode",{parentName:"a"},"toNumber")),",\n",(0,r.kt)("a",{parentName:"p",href:"/docs/api/func-client/modules/core#toboolean"},(0,r.kt)("inlineCode",{parentName:"a"},"toBoolean"))," and\n",(0,r.kt)("a",{parentName:"p",href:"/docs/api/func-client/modules/core#tostring"},(0,r.kt)("inlineCode",{parentName:"a"},"toString")),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You may need other transformers in your implementation, for example when you are\nusing a library to manage dates (momentjs, dayjs, etc.). You may read the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/advanced/custom-transformers"},(0,r.kt)("strong",{parentName:"a"},"advanced guide on transformers"))," to\nlearn more about those.")),(0,r.kt)("h3",{id:"relations"},"Relations"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"hasMany")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"hasOne")," are relation definition factory function to use when you\nwish to define your model's relations. As suggested by their names, ",(0,r.kt)("inlineCode",{parentName:"p"},"hasMany"),"\nrepresents a relation to a list of model and ",(0,r.kt)("inlineCode",{parentName:"p"},"hasOne")," represents a relation to a\nsingle model. It may take 0 to 1 argument, depending on what you want to do."),(0,r.kt)(i.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { hasOne, hasMany } from 'func-client/core';\nimport type User from './user';\nimport type Comment from './comment';\n\nhasOne<User>(); // Without config.\nhasOne<User>({ readOnly: true }); // With config.\nhasOne<User>({ type: 'users' }); // With explicit type.\n\nhasMany<Comment>(); // Without config.\nhasMany<Comment>({ readOnly: true }); // With config.\nhasMany<Comment>({ type: 'comments' }); // With explicit type.\n"))),(0,r.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { hasOne, hasMany } from 'func-client/core';\n\nhasOne(); // Without config.\nhasOne({ readOnly: true }); // With config.\nhasOne({ type: 'users' }); // With explicit type.\n\nhasMany(); // Without config.\nhasMany({ readOnly: true }); // With config.\nhasMany({ type: 'comments' }); // With explicit type.\n")))),(0,r.kt)("p",null,"Note that FuncClient consider your relations as non-nullable values by default.\nWhen one of your model contains nullable relations, you may want to pass a type\nto the factory (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"hasOne<User | null>()"),") or set a default relation value\n(e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"hasOne({ default: null as User | null })"),")."),(0,r.kt)("p",null,"Also consider that non-loaded relations will have a value of ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"When using TypeScript, you should define the type of the relation to get a fully\nstrongly typed model. We suggest you to use ",(0,r.kt)("inlineCode",{parentName:"p"},"import type")," to avoid creating\ncircular dependencies when having circular model relations.")),(0,r.kt)("h4",{id:"configuration-1"},"Configuration"),(0,r.kt)("p",null,"You may customize your relation with the following config:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Defaults"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"T")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},"The default value for the prop when initializing a model instance.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"readOnly")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"The value won't be serialized when sending the data to your data source.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"alias")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},"The key to (de)serialize the prop's value from/in when interacting with your backend.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},"The explicit type of related model. Might be used by the deserializer to known which model to instantiate.")))),(0,r.kt)("h3",{id:"custom-properties"},"Custom properties"),(0,r.kt)("p",null,"In addition to attributes and relations, you may want to implement additional\nproperties to your model. It will be useful when you need computed values\n(getters) or specific instance methods."),(0,r.kt)("p",null,"This can be done using the definition or an extending class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Directly in the definition.\nexport default makeModel('users', {\n    firstName: attr(),\n    lastName: attr(),\n    get fullName() {\n        return `${this.firstName} ${this.lastName}`\n    }\n});\n\n// Inside an extending class.\nexport default class User extends makeModel('users', {\n    firstName: attr(),\n    lastName: attr(),\n}) {\n    get fullName() {\n        return `${this.firstName} ${this.lastName}`\n    }\n}\n")),(0,r.kt)("h2",{id:"hooks"},"Hooks"),(0,r.kt)("p",null,"You may hook on multiple events which occurs on model instance using the hook\nregistration functions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"onRetrieved"),": instance was deserialized from a backend response."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"onCreating"),": action to create instance will run soon."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"onCreated"),": action to create instance was ran successfully."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"onUpdating"),": action to update instance will run soon."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"onUpdated"),": action to update instance was ran successfully."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"onSaving"),": action to save (create or update) instance will run soon (always\nran after ",(0,r.kt)("inlineCode",{parentName:"li"},"onCreating")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"onUpdating"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"onSaved"),": action to save (create or update) instance was ran successfully\n(always ran after ",(0,r.kt)("inlineCode",{parentName:"li"},"onCreated")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"onUpdated"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"onDestroying"),": action to destroy instance will run soon."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"onDestroyed"),": action to destroy instance was ran successfully.")),(0,r.kt)("p",null,"To register a hook callback, you must pass a model class and a callback function\nto the registration function. It will return a function which you may call to\nunregister the hook. All model hook callback will have the concerned model\ninstance as the only provided argument."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { onSaving } from 'func-client/core';\n\n// After this, the hook will run on each User instance saving.\nconst unregisterThisHook = onSaving(User, async (user) => {\n    // TODO Do something (a)sync with user instance before saving.\n});\n\n// After this, this hook will never run again.\nunregisterThisHook();\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Hooks callback may be async and will be ran sequentially (one by one, not\nparallelized).")),(0,r.kt)("p",null,"You can disable hook execution on a given model by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"withoutHooks"),"\nfunction."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { withoutHooks } from 'func-client/core';\n\nconst syncResultOfYourCallback = withoutHooks(User, () => {\n    // TODO Do something sync and return it.\n});\n\nconst asyncResultOfYourCallback = await withoutHooks(User, async () => {\n    // TODO Do something async and return it.\n});\n")))}k.isMDXComponent=!0}}]);