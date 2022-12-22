"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6920],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=d(n),c=o,k=m["".concat(s,".").concat(c)]||m[c]||p[c]||i;return n?a.createElement(k,r(r({ref:t},u),{},{components:n})):a.createElement(k,r({ref:t},u))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},208:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(9496),o=n(5924);const i="tabItem_IPoj";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,r),hidden:n},t)}},4210:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(4250),o=n(9496),i=n(5924),r=n(4375),l=n(4436),s=n(7883),d=n(4930);const u="tabList_xr86",p="tabItem_r4_W";function m(e){var t;const{lazy:n,block:r,defaultValue:m,values:c,groupId:k,className:f}=e,h=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=c??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,l.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===m?m:m??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==N&&!g.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:v}=(0,s.U)(),[w,C]=(0,o.useState)(N),T=[],{blockElementScrollPositionUntilNextRender:O}=(0,d.o5)();if(null!=k){const e=b[k];null!=e&&e!==w&&g.some((t=>t.value===e))&&C(e)}const x=e=>{const t=e.currentTarget,n=T.indexOf(t),a=g[n].value;a!==w&&(O(t),C(a),null!=k&&v(k,String(a)))},D=e=>{var t;let n=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,i.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},f)},g.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:D,onClick:x},r,{className:(0,i.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,o.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function c(e){const t=(0,r.Z)();return o.createElement(m,(0,a.Z)({key:String(t)},e))}},4958:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var a=n(4250),o=(n(9496),n(9613)),i=n(208),r=n(4210);const l={sidebar_position:1,description:"Define models with attributes, relations and hooks."},s="Models",d={unversionedId:"essentials/models",id:"essentials/models",title:"Models",description:"Define models with attributes, relations and hooks.",source:"@site/docs/essentials/models.mdx",sourceDirName:"essentials",slug:"/essentials/models",permalink:"/func-client/docs/essentials/models",draft:!1,editUrl:"https://github.com/paul-thebaud/func-client/tree/main/website/docs/essentials/models.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Define models with attributes, relations and hooks."},sidebar:"tutorialSidebar",previous:{title:"Essentials",permalink:"/func-client/docs/category/essentials"},next:{title:"Actions",permalink:"/func-client/docs/essentials/actions"}},u={},p=[{value:"Model factory",id:"model-factory",level:2},{value:"Extending a model class",id:"extending-a-model-class",level:3},{value:"Using models classes",id:"using-models-classes",level:3},{value:"Definition",id:"definition",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Configuration",id:"configuration",level:4},{value:"Transform",id:"transform",level:4},{value:"Relations",id:"relations",level:3},{value:"Configuration",id:"configuration-1",level:4},{value:"Custom properties",id:"custom-properties",level:3},{value:"Hooks",id:"hooks",level:2}],m={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"models"},"Models"),(0,o.kt)("admonition",{title:"What you'll learn",type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Defining basic models with attributes and relationships"),(0,o.kt)("li",{parentName:"ul"},"Extending your models with custom properties"),(0,o.kt)("li",{parentName:"ul"},"Registering hooks on models"))),(0,o.kt)("h2",{id:"model-factory"},"Model factory"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { makeModel } from 'func-client/core';\n\nmakeModel('type', { /* definition */ })\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"makeModel")," is the default model factory function. It defines a new model using\n2 arguments:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The string ",(0,o.kt)("inlineCode",{parentName:"li"},"type")," or a configuration object."),(0,o.kt)("li",{parentName:"ul"},"The optional ",(0,o.kt)("inlineCode",{parentName:"li"},"definition")," of the model: an object map containing\nattributes/relations definitions and custom properties and methods.")),(0,o.kt)("p",null,"The attributes and relations definition represents the ",(0,o.kt)("inlineCode",{parentName:"p"},"schema")," of the model."),(0,o.kt)("h3",{id:"extending-a-model-class"},"Extending a model class"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"makeModel")," will return a model class which can be extended by an ES6 class."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"export default class Post extends makeModel('Post') {}\n")),(0,o.kt)("p",null,"The returned model class also provides static methods to extend the definition\nalready provided to ",(0,o.kt)("inlineCode",{parentName:"p"},"makeModel"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"makeModel('Post', { /* definition */ })\n  .extends({ /* additional definition */ })\n  .extends({ /* another additional definition */ });\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This can be useful when sharing common features across models: creation\ntimestamps, client side ID generation, etc."),(0,o.kt)("p",{parentName:"admonition"},"If you wish to learn more about the composition capabilities of models,\nyou should read the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/advanced/models-composition"},(0,o.kt)("strong",{parentName:"a"},"advanced guide about models composition")),".")),(0,o.kt)("h3",{id:"using-models-classes"},"Using models classes"),(0,o.kt)("p",null,"Model classes can be used as any classical ES6 class. It can be instantiated,\nmanipulated, etc. Properties will be defined on each instance from the model\ndefinition."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const post = new Post();\npost.title = 'Hello World!';\nconsole.log(post.title); // \"Hello World!\"\nconsole.log(post.isDraft); // true\nconsole.log(post.exists); // false\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Most model's interaction (fetching, updating, etc.) are done through actions,\nso you may ",(0,o.kt)("a",{parentName:"p",href:"/docs/essentials/actions"},(0,o.kt)("strong",{parentName:"a"},"read the actions guide"))," to learn more\nabout those.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"FuncModel also propose multiple utilities to work with models:\n",(0,o.kt)("a",{parentName:"p",href:"/docs/api/models-utilities"},(0,o.kt)("strong",{parentName:"a"},"read the models utilities API guide")),".")),(0,o.kt)("h2",{id:"definition"},"Definition"),(0,o.kt)("h3",{id:"attributes"},"Attributes"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"attr")," is an attribute definition factory function to use when you wish to\ndefine your model's attributes. It may take 0 to 2 arguments, depending on\nwhat you want to do."),(0,o.kt)(r.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { attr, toDate } from 'func-client/core';\n\nattr<string>(); // Without options.\nattr(toDate()); // With a transformer.\nattr({ default: '', transformer: toDate() }); // With options.\nattr(toDate(), { readonly: true }); // With a transformer and options.\nattr({ default: () => [] }); // With a factory default (required for objects props).\n"))),(0,o.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { attr, toDate } from 'func-client/core';\n\nattr(); // Without options.\nattr(toDate()); // With a transformer.\nattr({ default: '', transformer: toDate() }); // With options.\nattr(toDate(), { readonly: true }); // With a transformer and options.\nattr({ default: () => [] }); // With a factory default (required for objects props).\n")))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Note that FuncModel consider your attributes as non-nullable values by default.\nWhen one of your model contains nullable attributes, you may want to pass a type\nto the factory (",(0,o.kt)("inlineCode",{parentName:"p"},"attr<string | null>()"),") or set a default attribute value.")),(0,o.kt)("h4",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"You may customize your attribute with the following options:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Key"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Defaults"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"transformer")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Transform<T>")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"undefined")),(0,o.kt)("td",{parentName:"tr",align:null},"The transformer for the prop's value when interacting with your backend.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"default")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"T")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"undefined")),(0,o.kt)("td",{parentName:"tr",align:null},"The default value for the prop when initializing a model instance.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"readonly")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false")),(0,o.kt)("td",{parentName:"tr",align:null},"The value won't be serialized when sending the data to your backend.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"alias")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"undefined")),(0,o.kt)("td",{parentName:"tr",align:null},"The key to (de)serialize the prop's value from/in when interacting with your backend.")))),(0,o.kt)("h4",{id:"transform"},"Transform"),(0,o.kt)("p",null,"You can use a transform to convert an attribute value when (de)serializing from/to your backend.\nThere are two types or transformer within FuncClient:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"FunctionTransform"),": a function to call to transform the value whether we are serializing or deserializing it."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ObjectTransform"),": an object with two methods: ",(0,o.kt)("inlineCode",{parentName:"li"},"serialize")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"deserialize"),".")),(0,o.kt)("p",null,"FuncClient propose you 4 transformers out of the box:\n",(0,o.kt)("a",{parentName:"p",href:"/docs/api/func-client/modules/core#todate"},(0,o.kt)("inlineCode",{parentName:"a"},"toDate")),",\n",(0,o.kt)("a",{parentName:"p",href:"/docs/api/func-client/modules/core#tonumber"},(0,o.kt)("inlineCode",{parentName:"a"},"toNumber")),",\n",(0,o.kt)("a",{parentName:"p",href:"/docs/api/func-client/modules/core#toboolean"},(0,o.kt)("inlineCode",{parentName:"a"},"toBoolean"))," and\n",(0,o.kt)("a",{parentName:"p",href:"/docs/api/func-client/modules/core#tostring"},(0,o.kt)("inlineCode",{parentName:"a"},"toString")),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You may need other transformers in your implementation, for example when you\nare using a library to manage dates (momentjs, dayjs, etc.). You may read the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/advanced/custom-transformers"},(0,o.kt)("strong",{parentName:"a"},"advanced guide on transformers")),"\nto learn more about those.")),(0,o.kt)("h3",{id:"relations"},"Relations"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"hasMany")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"hasOne")," are relation definition factory function to use when\nyou wish to define your model's relations. As suggested by their names,\n",(0,o.kt)("inlineCode",{parentName:"p"},"hasMany")," represents a relation to a list of model and ",(0,o.kt)("inlineCode",{parentName:"p"},"hasOne")," represents a\nrelation to a single model.\nIt may take 0 to 1 argument, depending on what you want to do."),(0,o.kt)(r.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { hasOne, hasMany } from 'func-client/core';\nimport type User from './user';\nimport type Comment from './comment';\n\nhasOne<User>(); // Without options.\nhasOne<User>({ readonly: true }); // With options.\n\nhasMany<Comment>(); // Without options.\nhasMany<Comment>({ readonly: true }); // With options.\n"))),(0,o.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { hasOne, hasMany } from 'func-client/core';\n\nhasOne(); // Without options.\nhasOne({ readonly: true }); // With options.\n\nhasMany(); // Without options.\nhasMany({ readonly: true }); // With options.\n")))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"When using TypeScript, you should define the type of the relation to get a\nfully strongly typed model. We suggest you to use ",(0,o.kt)("inlineCode",{parentName:"p"},"import type")," to avoid\ncreating circular dependencies when having circular model relations.")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Note that FuncModel consider your relations as non-nullable values by default.\nWhen one of your model contains nullable relations, you may want to pass a type\nto the factory (",(0,o.kt)("inlineCode",{parentName:"p"},"hasOne<User | null>()"),") or set a default relation value."),(0,o.kt)("p",{parentName:"admonition"},"Also consider that non-loaded relations will have a value of ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),".")),(0,o.kt)("h4",{id:"configuration-1"},"Configuration"),(0,o.kt)("p",null,"You may customize your relation with the following options:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Key"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Defaults"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"default")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"T")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"undefined")),(0,o.kt)("td",{parentName:"tr",align:null},"The default value for the prop when initializing a model instance.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"readonly")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false")),(0,o.kt)("td",{parentName:"tr",align:null},"The value won't be serialized when sending the data to your backend.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"alias")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"undefined")),(0,o.kt)("td",{parentName:"tr",align:null},"The key to (de)serialize the prop's value from/in when interacting with your backend.")))),(0,o.kt)("h3",{id:"custom-properties"},"Custom properties"),(0,o.kt)("p",null,"In addition to attributes and relations, you may want to implement additional\nproperties to your model. It will be useful when you need computed values\n(getters) or specific instance methods."),(0,o.kt)("p",null,"This can be done using the definition or an extending class:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Directly in the definition.\nexport default makeModel('users', {\n  firstName: attr(),\n  lastName: attr(),\n  get fullName() {\n    return `${this.firstName} ${this.lastName}`\n  }\n});\n\n// Inside an extending class.\nexport default class User extends makeModel('users', {\n  firstName: attr(),\n  lastName: attr(),\n}) {\n  get fullName() {\n    return `${this.firstName} ${this.lastName}`\n  }\n}\n")),(0,o.kt)("h2",{id:"hooks"},"Hooks"),(0,o.kt)("p",null,"You may hook on multiple events which occurs on model instance using the hook\nregistration functions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"onRetrieved"),": instance was deserialized from a backend response."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"onCreating"),": action to create instance will run soon."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"onCreated"),": action to create instance was ran successfully."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"onUpdating"),": action to update instance will run soon."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"onUpdated"),": action to update instance was ran successfully."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"onSaving"),": action to save (create or update) instance will run soon (always ran after ",(0,o.kt)("inlineCode",{parentName:"li"},"onCreating")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"onUpdating"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"onSaved"),": action to save (create or update) instance was ran successfully (always ran after ",(0,o.kt)("inlineCode",{parentName:"li"},"onCreated")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"onUpdated"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"onDestroying"),": action to destroy instance will run soon."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"onDestroyed"),": action to destroy instance was ran successfully.")),(0,o.kt)("p",null,"To register a hook callback, you must pass a model class and a callback\nfunction to the registration function. It will return a function which\nyou may call to unregister the hook. All model hook callback will have\nthe concerned model instance as the only provided argument."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { onSaving } from 'func-client/core';\n\nconst unregisterThisHook = onSaving(User, async (user) => {\n  // TODO Do something (a)sync with user instance before saving.\n});\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"As you may notice above, hooks callback may be async and will be ran\nsequentially (one by one, not parallelized).")),(0,o.kt)("p",null,"You can disable hook execution on a given model by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"withoutHooks"),"\nfunction."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { withoutHooks } from 'func-client/core';\n\nconst resultOfCallback = await withoutHooks(User, async () => {\n  // TODO Do something (a)sync and return it.\n});\n")))}c.isMDXComponent=!0}}]);