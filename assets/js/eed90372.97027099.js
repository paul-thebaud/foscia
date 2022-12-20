"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[395],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=l,k=p["".concat(o,".").concat(m)]||p[m]||c[m]||i;return n?a.createElement(k,r(r({ref:t},d),{},{components:n})):a.createElement(k,r({ref:t},d))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},208:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(9496),l=n(5924);const i="tabItem_IPoj";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(i,r),hidden:n},t)}},4210:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(4250),l=n(9496),i=n(5924),r=n(4375),s=n(4436),o=n(7883),u=n(4930);const d="tabList_xr86",c="tabItem_r4_W";function p(e){var t;const{lazy:n,block:r,defaultValue:p,values:m,groupId:k,className:v}=e,h=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,s.l)(f,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===p?p:p??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:N}=(0,o.U)(),[C,x]=(0,l.useState)(y),w=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=k){const e=b[k];null!=e&&e!==C&&f.some((t=>t.value===e))&&x(e)}const I=e=>{const t=e.currentTarget,n=w.indexOf(t),a=f[n].value;a!==C&&(E(t),x(a),null!=k&&N(k,String(a)))},O=e=>{var t;let n=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]??w[w.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,i.Z)("tabs-container",d)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},v)},f.map((e=>{let{value:t,label:n,attributes:r}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>w.push(e),onKeyDown:O,onClick:I},r,{className:(0,i.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":C===t})}),n??t)}))),n?(0,l.cloneElement)(h.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function m(e){const t=(0,r.Z)();return l.createElement(p,(0,a.Z)({key:String(t)},e))}},8077:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(4250),l=(n(9496),n(9613));n(208),n(4210);const i={sidebar_position:2,description:"Available models utilities."},r="Models utilities",s={unversionedId:"api/models-utilities",id:"api/models-utilities",title:"Models utilities",description:"Available models utilities.",source:"@site/docs/api/models-utilities.mdx",sourceDirName:"api",slug:"/api/models-utilities",permalink:"/func-client/docs/api/models-utilities",draft:!1,editUrl:"https://github.com/paul-thebaud/func-client/tree/main/website/docs/api/models-utilities.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Available models utilities."},sidebar:"tutorialSidebar",previous:{title:"Transformers",permalink:"/func-client/docs/api/transformers"},next:{title:"Actions enhancers",permalink:"/func-client/docs/api/actions-enhancers"}},o={},u=[{value:"List",id:"list",level:2},{value:"<code>fill</code>",id:"fill",level:3},{value:"Example",id:"example",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Returns",id:"returns",level:4},{value:"<code>changed</code>",id:"changed",level:3},{value:"Example",id:"example-1",level:4},{value:"Arguments",id:"arguments-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"<code>syncOriginal</code>",id:"syncoriginal",level:3},{value:"Example",id:"example-2",level:4},{value:"Arguments",id:"arguments-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"<code>reset</code>",id:"reset",level:3},{value:"Example",id:"example-3",level:4},{value:"Arguments",id:"arguments-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"<code>loaded</code>",id:"loaded",level:3},{value:"Example",id:"example-4",level:4},{value:"Arguments",id:"arguments-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"<code>isSame</code>",id:"issame",level:3},{value:"Example",id:"example-5",level:4},{value:"Arguments",id:"arguments-5",level:4},{value:"Returns",id:"returns-5",level:4}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"models-utilities"},"Models utilities"),(0,l.kt)("h2",{id:"list"},"List"),(0,l.kt)("h3",{id:"fill"},(0,l.kt)("inlineCode",{parentName:"h3"},"fill")),(0,l.kt)("p",null,"Fill the model instance's values with the given values."),(0,l.kt)("h4",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { fill } from 'func-client/core';\n\nconst post = fill(new Post(), { title: 'Hello', description: 'World' });\n")),(0,l.kt)("h4",{id:"arguments"},"Arguments"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/types#modelinstanced"},(0,l.kt)("inlineCode",{parentName:"a"},"{I extends ModelInstance}"))," ",(0,l.kt)("inlineCode",{parentName:"li"},"instance")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/types#modelvaluesm"},(0,l.kt)("inlineCode",{parentName:"a"},"{Partial<ModelValues<I>>}"))," ",(0,l.kt)("inlineCode",{parentName:"li"},"values"))),(0,l.kt)("h4",{id:"returns"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"{I}"),", the affected instance."),(0,l.kt)("h3",{id:"changed"},(0,l.kt)("inlineCode",{parentName:"h3"},"changed")),(0,l.kt)("p",null,"Check if the given keys have been changed since last instance sync.\nIf no keys are provided, will check all instance keys."),(0,l.kt)("h4",{id:"example-1"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { changed } from 'func-client/core';\n\nconst wasChanged = changed(post, ['title', 'description']);\nif (wasChanged) { /* do something */ }\n")),(0,l.kt)("h4",{id:"arguments-1"},"Arguments"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/types#modelinstanced"},(0,l.kt)("inlineCode",{parentName:"a"},"{I extends ModelInstance}"))," ",(0,l.kt)("inlineCode",{parentName:"li"},"instance")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/types#modelkeym"},(0,l.kt)("inlineCode",{parentName:"a"},"{Arrayable<ModelKey<I>> | undefined}"))," ",(0,l.kt)("inlineCode",{parentName:"li"},"keys"))),(0,l.kt)("h4",{id:"returns-1"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"{boolean}")),(0,l.kt)("h3",{id:"syncoriginal"},(0,l.kt)("inlineCode",{parentName:"h3"},"syncOriginal")),(0,l.kt)("p",null,"Sync the model instance's values as it was the original data source values.\nIf no keys are provided, will sync all instance keys."),(0,l.kt)("h4",{id:"example-2"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { syncOriginal } from 'func-client/core';\n\nsyncOriginal(post, ['title', 'description']);\n")),(0,l.kt)("h4",{id:"arguments-2"},"Arguments"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/types#modelinstanced"},(0,l.kt)("inlineCode",{parentName:"a"},"{I extends ModelInstance}"))," ",(0,l.kt)("inlineCode",{parentName:"li"},"instance")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/types#modelkeym"},(0,l.kt)("inlineCode",{parentName:"a"},"{Arrayable<ModelKey<I>> | undefined}"))," ",(0,l.kt)("inlineCode",{parentName:"li"},"keys"))),(0,l.kt)("h4",{id:"returns-2"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"{I}"),", the affected instance."),(0,l.kt)("h3",{id:"reset"},(0,l.kt)("inlineCode",{parentName:"h3"},"reset")),(0,l.kt)("p",null,"Reset the model instance's original values.\nIf no keys are provided, will sync all instance keys."),(0,l.kt)("h4",{id:"example-3"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { reset } from 'func-client/core';\n\nreset(post, ['title', 'description']);\n")),(0,l.kt)("h4",{id:"arguments-3"},"Arguments"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/types#modelinstanced"},(0,l.kt)("inlineCode",{parentName:"a"},"{I extends ModelInstance}"))," ",(0,l.kt)("inlineCode",{parentName:"li"},"instance")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/types#modelkeym"},(0,l.kt)("inlineCode",{parentName:"a"},"{Arrayable<ModelKey<I>> | undefined}"))," ",(0,l.kt)("inlineCode",{parentName:"li"},"keys"))),(0,l.kt)("h4",{id:"returns-3"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"{I}"),", the affected instance."),(0,l.kt)("h3",{id:"loaded"},(0,l.kt)("inlineCode",{parentName:"h3"},"loaded")),(0,l.kt)("p",null,"Check if the given relations are loaded on the instance or its related instances.\nCan check for sub relations using dot relation keys: will check each related instances regardless\nof the number of concerned instances."),(0,l.kt)("h4",{id:"example-4"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { loaded } from 'func-client/core';\n\nconst isFullyLoaded = loaded(post, ['comments', 'comments.author']);\nif (!isFullyLoaded) { /* do something */ }\n")),(0,l.kt)("h4",{id:"arguments-4"},"Arguments"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/types#modelinstanced"},(0,l.kt)("inlineCode",{parentName:"a"},"{I extends ModelInstance}"))," ",(0,l.kt)("inlineCode",{parentName:"li"},"instance")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/types#modelrelationdotkeym"},(0,l.kt)("inlineCode",{parentName:"a"},"{Arrayable<ModelRelationDotKey<I>>}"))," ",(0,l.kt)("inlineCode",{parentName:"li"},"relations"))),(0,l.kt)("h4",{id:"returns-4"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"{boolean}")),(0,l.kt)("h3",{id:"issame"},(0,l.kt)("inlineCode",{parentName:"h3"},"isSame")),(0,l.kt)("p",null,"Check if two values are the same model instance. Ensure the equality by\nchecking if the two instances:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Are FuncClient model instances"),(0,l.kt)("li",{parentName:"ul"},"Have the same type"),(0,l.kt)("li",{parentName:"ul"},"Have the same and non-NIL ID")),(0,l.kt)("h4",{id:"example-5"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { isSame } from 'func-client/core';\n\nconst areSameInstances = isSame(unknownFoo, unknownBar);\nif (areSameInstances) { /* do something */ }\n")),(0,l.kt)("h4",{id:"arguments-5"},"Arguments"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{unknown}")," ",(0,l.kt)("inlineCode",{parentName:"li"},"value")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{unknown}")," ",(0,l.kt)("inlineCode",{parentName:"li"},"otherValue"))),(0,l.kt)("h4",{id:"returns-5"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"{boolean}")))}c.isMDXComponent=!0}}]);