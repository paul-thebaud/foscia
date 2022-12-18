"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[477],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,y=u["".concat(d,".").concat(m)]||u[m]||p[m]||l;return n?a.createElement(y,r(r({ref:t},c),{},{components:n})):a.createElement(y,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var s=2;s<l;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},208:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(9496),o=n(5924);const l="tabItem_IPoj";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(l,r),hidden:n},t)}},4210:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(4250),o=n(9496),l=n(5924),r=n(4375),i=n(4436),d=n(7883),s=n(4930);const c="tabList_xr86",p="tabItem_r4_W";function u(e){var t;const{lazy:n,block:r,defaultValue:u,values:m,groupId:y,className:h}=e,f=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,i.l)(k,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===u?u:u??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==b&&!k.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:N}=(0,d.U)(),[C,M]=(0,o.useState)(b),w=[],{blockElementScrollPositionUntilNextRender:D}=(0,s.o5)();if(null!=y){const e=g[y];null!=e&&e!==C&&k.some((t=>t.value===e))&&M(e)}const T=e=>{const t=e.currentTarget,n=w.indexOf(t),a=k[n].value;a!==C&&(D(t),M(a),null!=y&&N(y,String(a)))},O=e=>{var t;let n=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]??w[w.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,l.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},h)},k.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>w.push(e),onKeyDown:O,onClick:T},r,{className:(0,l.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":C===t})}),n??t)}))),n?(0,o.cloneElement)(f.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function m(e){const t=(0,r.Z)();return o.createElement(u,(0,a.Z)({key:String(t)},e))}},6167:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(4250),o=(n(9496),n(9613));n(208),n(4210);const l={sidebar_position:5,description:"Types description."},r="Types",i={unversionedId:"api/types",id:"api/types",title:"Types",description:"Types description.",source:"@site/docs/api/types.mdx",sourceDirName:"api",slug:"/api/types",permalink:"/func-client/docs/api/types",draft:!1,editUrl:"https://github.com/paul-thebaud/func-client/tree/main/website/docs/api/types.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"Types description."},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/func-client/docs/category/api"},next:{title:"FAQ",permalink:"/func-client/docs/faq"}},d={},s=[{value:"Model types",id:"model-types",level:2},{value:"<code>ModelId</code>",id:"modelid",level:3},{value:"<code>ModelSchema&lt;D&gt;</code>",id:"modelschemad",level:3},{value:"<code>ModelClass&lt;D&gt;</code>",id:"modelclassd",level:3},{value:"<code>ModelInstance&lt;D&gt;</code>",id:"modelinstanced",level:3},{value:"<code>Model&lt;D, I&gt;</code>",id:"modeld-i",level:3},{value:"<code>ModelValues&lt;M&gt;</code>",id:"modelvaluesm",level:3},{value:"<code>ModelKey&lt;M&gt;</code>",id:"modelkeym",level:3},{value:"<code>ModelRelationDotKey&lt;M&gt;</code>",id:"modelrelationdotkeym",level:3},{value:"Action types",id:"action-types",level:2},{value:"<code>ActionMethod</code>",id:"actionmethod",level:3},{value:"<code>ActionContext</code>",id:"actioncontext",level:3},{value:"Utilities types",id:"utilities-types",level:2},{value:"<code>Arrayable&lt;T&gt;</code>",id:"arrayablet",level:3}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"types"},"Types"),(0,o.kt)("h2",{id:"model-types"},"Model types"),(0,o.kt)("h3",{id:"modelid"},(0,o.kt)("inlineCode",{parentName:"h3"},"ModelId")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type ModelId = string | number;\n")),(0,o.kt)("h3",{id:"modelschemad"},(0,o.kt)("inlineCode",{parentName:"h3"},"ModelSchema<D>")),(0,o.kt)("p",null,"An extracted schema (only attributes and relations, not extension) from a model\ndefinition ",(0,o.kt)("inlineCode",{parentName:"p"},"D"),"."),(0,o.kt)("h3",{id:"modelclassd"},(0,o.kt)("inlineCode",{parentName:"h3"},"ModelClass<D>")),(0,o.kt)("p",null,"A model class made with the model factory and defined by its definition ",(0,o.kt)("inlineCode",{parentName:"p"},"D"),"."),(0,o.kt)("h3",{id:"modelinstanced"},(0,o.kt)("inlineCode",{parentName:"h3"},"ModelInstance<D>")),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"#modelclassd"},(0,o.kt)("inlineCode",{parentName:"a"},"ModelClass<D>"))," instance."),(0,o.kt)("h3",{id:"modeld-i"},(0,o.kt)("inlineCode",{parentName:"h3"},"Model<D, I>")),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"#modelclassd"},(0,o.kt)("inlineCode",{parentName:"a"},"ModelClass<D>"))," and constructor of a\n",(0,o.kt)("a",{parentName:"p",href:"#modelinstanced"},(0,o.kt)("inlineCode",{parentName:"a"},"ModelInstance<D> I")),"."),(0,o.kt)("h3",{id:"modelvaluesm"},(0,o.kt)("inlineCode",{parentName:"h3"},"ModelValues<M>")),(0,o.kt)("p",null,"An inferred schema's values dictionary for a ",(0,o.kt)("a",{parentName:"p",href:"#modelclassd"},(0,o.kt)("inlineCode",{parentName:"a"},"ModelClass<D>")),"\nor a ",(0,o.kt)("a",{parentName:"p",href:"#modelinstanced"},(0,o.kt)("inlineCode",{parentName:"a"},"ModelInstance<D>")),"."),(0,o.kt)("h3",{id:"modelkeym"},(0,o.kt)("inlineCode",{parentName:"h3"},"ModelKey<M>")),(0,o.kt)("p",null,"An inferred schema's value's key for a ",(0,o.kt)("a",{parentName:"p",href:"#modelclassd"},(0,o.kt)("inlineCode",{parentName:"a"},"ModelClass<D>")),"\nor a ",(0,o.kt)("a",{parentName:"p",href:"#modelinstanced"},(0,o.kt)("inlineCode",{parentName:"a"},"ModelInstance<D>")),"."),(0,o.kt)("h3",{id:"modelrelationdotkeym"},(0,o.kt)("inlineCode",{parentName:"h3"},"ModelRelationDotKey<M>")),(0,o.kt)("p",null,"An inferred schema's relation's key for a ",(0,o.kt)("a",{parentName:"p",href:"#modelclassd"},(0,o.kt)("inlineCode",{parentName:"a"},"ModelClass<D>")),"\nor a ",(0,o.kt)("a",{parentName:"p",href:"#modelinstanced"},(0,o.kt)("inlineCode",{parentName:"a"},"ModelInstance<D>")),". Key might be a direct relation\nor a deeper relation (up to 5 depth) with a dot separation."),(0,o.kt)("p",null,"Examples for a ",(0,o.kt)("inlineCode",{parentName:"p"},"Post")," model: ",(0,o.kt)("inlineCode",{parentName:"p"},"comments"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"comments.author"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"comments.reactions"),", etc."),(0,o.kt)("h2",{id:"action-types"},"Action types"),(0,o.kt)("h3",{id:"actionmethod"},(0,o.kt)("inlineCode",{parentName:"h3"},"ActionMethod")),(0,o.kt)("p",null,"An HTTP method as a fully lower or upper cased string (GET, POST, etc.)."),(0,o.kt)("h3",{id:"actioncontext"},(0,o.kt)("inlineCode",{parentName:"h3"},"ActionContext")),(0,o.kt)("p",null,"A variable and extendable context to be enhanced and ran by an action."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export type ActionContext = {\n  method?: ActionMethod;\n  baseURL?: string;\n  type?: string;\n  id?: ModelId;\n  relation?: string;\n  includes?: string[];\n  path?: string;\n  params?: Dictionary<any> | string;\n  payload?: unknown;\n  [key: string]: unknown;\n};\n")),(0,o.kt)("h2",{id:"utilities-types"},"Utilities types"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Many utilities types are used by FuncModel but are not exported to avoid\npolluting your code or conflicting with your own utilities types.\nYou may copy those types as you want and use them in your project.")),(0,o.kt)("h3",{id:"arrayablet"},(0,o.kt)("inlineCode",{parentName:"h3"},"Arrayable<T>")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type Arrayable<T> = T | T[];\n")))}p.isMDXComponent=!0}}]);