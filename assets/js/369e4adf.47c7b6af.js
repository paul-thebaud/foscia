"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6699],{9613:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(9496);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(a),p=l,k=c["".concat(s,".").concat(p)]||c[p]||m[p]||r;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:l,i[1]=o;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},782:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(9496),l=a(5924);const r={tabItem:"tabItem_eDPh"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,i),hidden:a},t)}},1399:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(7366),l=a(9496),r=a(5924),i=a(8696),o=a(3442),s=a(6777),d=a(8435),u=a(4416);function c(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function m(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=m(e),[i,o]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[s,d]=k({queryString:a,groupId:n}),[c,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,u.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),h=(()=>{const e=s??c;return p({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,r]),tabValues:r}}var h=a(4197);const v={tabList:"tabList_AXDX",tabItem:"tabItem_bAX3"};function g(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:d}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),n=d[a].value;n!==o&&(c(t),s(n))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},d.map((e=>{let{value:t,label:a,attributes:i}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:m},i,{className:(0,r.Z)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":o===t})}),a??t)})))}function N(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function b(e){const t=f(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",v.tabList)},l.createElement(g,(0,n.Z)({},e,t)),l.createElement(N,(0,n.Z)({},e,t)))}function y(e){const t=(0,h.Z)();return l.createElement(b,(0,n.Z)({key:String(t)},e))}},2838:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(7366),l=(a(9496),a(9613));a(782),a(1399);const r={sidebar_position:1,description:"Available models utilities."},i="Models utilities",o={unversionedId:"reference/models-utilities",id:"reference/models-utilities",title:"Models utilities",description:"Available models utilities.",source:"@site/docs/reference/models-utilities.mdx",sourceDirName:"reference",slug:"/reference/models-utilities",permalink:"/foscia/docs/reference/models-utilities",draft:!1,editUrl:"https://github.com/paul-thebaud/foscia/tree/main/website/docs/reference/models-utilities.mdx",tags:[],version:"current",lastUpdatedAt:1688775737,formattedLastUpdatedAt:"Jul 8, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Available models utilities."},sidebar:"docsSidebar",previous:{title:"Reference",permalink:"/foscia/docs/category/reference"},next:{title:"Actions enhancers",permalink:"/foscia/docs/reference/actions-enhancers"}},s={},d=[{value:"Common",id:"common",level:2},{value:"<code>fill</code>",id:"fill",level:3},{value:"Example",id:"example",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Returns",id:"returns",level:4},{value:"<code>isSame</code>",id:"issame",level:3},{value:"Example",id:"example-1",level:4},{value:"Arguments",id:"arguments-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"<code>loaded</code>",id:"loaded",level:3},{value:"Example",id:"example-2",level:4},{value:"Arguments",id:"arguments-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"<code>changed</code>",id:"changed",level:3},{value:"Example",id:"example-3",level:4},{value:"Arguments",id:"arguments-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"<code>markSynced</code>",id:"marksynced",level:3},{value:"Example",id:"example-4",level:4},{value:"Arguments",id:"arguments-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"<code>restore</code>",id:"restore",level:3},{value:"Example",id:"example-5",level:4},{value:"Arguments",id:"arguments-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"<code>takeSnapshot</code>",id:"takesnapshot",level:3},{value:"Example",id:"example-6",level:4},{value:"Arguments",id:"arguments-6",level:4},{value:"Returns",id:"returns-6",level:4},{value:"<code>restoreSnapshot</code>",id:"restoresnapshot",level:3},{value:"Example",id:"example-7",level:4},{value:"Arguments",id:"arguments-7",level:4},{value:"Returns",id:"returns-7",level:4},{value:"<code>compareSnapshots</code>",id:"comparesnapshots",level:3},{value:"Example",id:"example-8",level:4},{value:"Arguments",id:"arguments-8",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Factories",id:"factories",level:2},{value:"<code>makeModel</code>",id:"makemodel",level:3},{value:"Example",id:"example-9",level:4},{value:"Arguments",id:"arguments-9",level:4},{value:"Returns",id:"returns-9",level:4},{value:"<code>makeModelFactory</code>",id:"makemodelfactory",level:3},{value:"Example",id:"example-10",level:4},{value:"Arguments",id:"arguments-10",level:4},{value:"Returns",id:"returns-10",level:4},{value:"<code>makeComposable</code>",id:"makecomposable",level:3},{value:"Example",id:"example-11",level:4},{value:"Arguments",id:"arguments-11",level:4},{value:"Returns",id:"returns-11",level:4}],u={toc:d},c="wrapper";function m(e){let{components:t,...a}=e;return(0,l.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"models-utilities"},"Models utilities"),(0,l.kt)("h2",{id:"common"},"Common"),(0,l.kt)("h3",{id:"fill"},(0,l.kt)("inlineCode",{parentName:"h3"},"fill")),(0,l.kt)("p",null,"Fill the model instance's values with the given values."),(0,l.kt)("h4",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { fill } from 'foscia/core';\n\nconst post = fill(new Post(), { title: 'Hello', description: 'World' });\n")),(0,l.kt)("h4",{id:"arguments"},"Arguments"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/reference/api/modules/core#modelinstance"},(0,l.kt)("inlineCode",{parentName:"a"},"{I extends ModelInstance}"))," ",(0,l.kt)("inlineCode",{parentName:"li"},"instance")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/reference/api/modules/core#modelvalues"},(0,l.kt)("inlineCode",{parentName:"a"},"{Partial<ModelValues<I>>}"))," ",(0,l.kt)("inlineCode",{parentName:"li"},"values"))),(0,l.kt)("h4",{id:"returns"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"{I}"),", the affected instance."),(0,l.kt)("h3",{id:"issame"},(0,l.kt)("inlineCode",{parentName:"h3"},"isSame")),(0,l.kt)("p",null,"Check if two values are the same model instance. Ensure the equality by\nchecking if the two instances:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Are Foscia model instances"),(0,l.kt)("li",{parentName:"ul"},"Have the same type"),(0,l.kt)("li",{parentName:"ul"},"Have the same and non-NIL ID")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"This function does not deeply compare instances' values.")),(0,l.kt)("h4",{id:"example-1"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { isSame } from 'foscia/core';\n\nconst areSameInstances = isSame(foo, bar);\nif (areSameInstances) { /* do something */ }\n")),(0,l.kt)("h4",{id:"arguments-1"},"Arguments"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{unknown}")," ",(0,l.kt)("inlineCode",{parentName:"li"},"value")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{unknown}")," ",(0,l.kt)("inlineCode",{parentName:"li"},"otherValue"))),(0,l.kt)("h4",{id:"returns-1"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"{boolean}")),(0,l.kt)("h3",{id:"loaded"},(0,l.kt)("inlineCode",{parentName:"h3"},"loaded")),(0,l.kt)("p",null,"Check if the given relations are loaded on the instance or its related instances.\nCan check for sub relations using dot relation keys: will check each related instances regardless\nof the number of concerned instances.\nIf no relations are provided, wont perform any check."),(0,l.kt)("h4",{id:"example-2"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { loaded } from 'foscia/core';\n\nconst isFullyLoaded = loaded(post, ['comments', 'comments.author']);\nif (!isFullyLoaded) { /* do something */ }\n")),(0,l.kt)("h4",{id:"arguments-2"},"Arguments"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/reference/api/modules/core#modelinstance"},(0,l.kt)("inlineCode",{parentName:"a"},"{I extends ModelInstance}"))," ",(0,l.kt)("inlineCode",{parentName:"li"},"instance")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/reference/api/modules/core#modelrelationdotkey"},(0,l.kt)("inlineCode",{parentName:"a"},"{ArrayableVariadic<ModelRelationDotKey<I>>}"))," ",(0,l.kt)("inlineCode",{parentName:"li"},"...relations"))),(0,l.kt)("h4",{id:"returns-2"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"{boolean}")),(0,l.kt)("h3",{id:"changed"},(0,l.kt)("inlineCode",{parentName:"h3"},"changed")),(0,l.kt)("p",null,"Check if the given keys have been changed since last instance sync.\nIf no keys are provided, will check whole original snapshot (including IDs)."),(0,l.kt)("h4",{id:"example-3"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { changed } from 'foscia/core';\n\nconst wasChanged = changed(post, ['title', 'description']);\nif (wasChanged) { /* do something */ }\n")),(0,l.kt)("h4",{id:"arguments-3"},"Arguments"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/reference/api/modules/core#modelinstance"},(0,l.kt)("inlineCode",{parentName:"a"},"{I extends ModelInstance}"))," ",(0,l.kt)("inlineCode",{parentName:"li"},"instance")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/reference/api/modules/core#modelkey"},(0,l.kt)("inlineCode",{parentName:"a"},"{ArrayableVariadic<ModelKey<I>}"))," ",(0,l.kt)("inlineCode",{parentName:"li"},"...only"))),(0,l.kt)("h4",{id:"returns-3"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"{boolean}")," if keys (or instance) changed since last sync."),(0,l.kt)("h3",{id:"marksynced"},(0,l.kt)("inlineCode",{parentName:"h3"},"markSynced")),(0,l.kt)("p",null,"Mark the model instance's values as synced.\nIf no keys are provided, will replace whole original snapshot (including IDs)."),(0,l.kt)("h4",{id:"example-4"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { markSynced } from 'foscia/core';\n\nmarkSynced(post, ['title', 'description']);\n")),(0,l.kt)("h4",{id:"arguments-4"},"Arguments"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/reference/api/modules/core#modelinstance"},(0,l.kt)("inlineCode",{parentName:"a"},"{I extends ModelInstance}"))," ",(0,l.kt)("inlineCode",{parentName:"li"},"instance")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/reference/api/modules/core#modelkey"},(0,l.kt)("inlineCode",{parentName:"a"},"{ArrayableVariadic<ModelKey<I>>}"))," ",(0,l.kt)("inlineCode",{parentName:"li"},"...only"))),(0,l.kt)("h4",{id:"returns-4"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"{I}"),", the affected instance."),(0,l.kt)("h3",{id:"restore"},(0,l.kt)("inlineCode",{parentName:"h3"},"restore")),(0,l.kt)("p",null,"Restore the model instance's original values.\nIf no keys are provided, will restore whole original snapshot (including IDs)."),(0,l.kt)("h4",{id:"example-5"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { restore } from 'foscia/core';\n\nrestore(post, ['title', 'description']);\n")),(0,l.kt)("h4",{id:"arguments-5"},"Arguments"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/reference/api/modules/core#modelinstance"},(0,l.kt)("inlineCode",{parentName:"a"},"{I extends ModelInstance}"))," ",(0,l.kt)("inlineCode",{parentName:"li"},"instance")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/reference/api/modules/core#modelkey"},(0,l.kt)("inlineCode",{parentName:"a"},"{ArrayableVariadic<ModelKey<I>>}"))," ",(0,l.kt)("inlineCode",{parentName:"li"},"...only"))),(0,l.kt)("h4",{id:"returns-5"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"{I}"),", the affected instance."),(0,l.kt)("h3",{id:"takesnapshot"},(0,l.kt)("inlineCode",{parentName:"h3"},"takeSnapshot")),(0,l.kt)("p",null,"Take a snapshot of the model's state (IDs, values, etc.)."),(0,l.kt)("h4",{id:"example-6"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { takeSnapshot } from 'foscia/core';\n\nconst postSnapshot = takeSnapshot(post);\n")),(0,l.kt)("h4",{id:"arguments-6"},"Arguments"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/reference/api/modules/core#modelinstance"},(0,l.kt)("inlineCode",{parentName:"a"},"{I extends ModelInstance}"))," ",(0,l.kt)("inlineCode",{parentName:"li"},"instance"))),(0,l.kt)("h4",{id:"returns-6"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/reference/api/modules/core#modelsnapshot"},(0,l.kt)("inlineCode",{parentName:"a"},"{ModelSnapshot<I>}")),", the snapshot."),(0,l.kt)("h3",{id:"restoresnapshot"},(0,l.kt)("inlineCode",{parentName:"h3"},"restoreSnapshot")),(0,l.kt)("p",null,"Restore a snapshot of the model's state (IDs, values, etc.).\nIf no keys are provided, will restore whole original snapshot (including IDs)."),(0,l.kt)("h4",{id:"example-7"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { restoreSnapshot } from 'foscia/core';\n\nrestoreSnapshot(post, postSnapshot, ['title', 'description']);\n")),(0,l.kt)("h4",{id:"arguments-7"},"Arguments"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/reference/api/modules/core#modelinstance"},(0,l.kt)("inlineCode",{parentName:"a"},"{I extends ModelInstance}"))," ",(0,l.kt)("inlineCode",{parentName:"li"},"instance")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/reference/api/modules/core#modelsnapshot"},(0,l.kt)("inlineCode",{parentName:"a"},"{ModelSnapshot<I>}"))," ",(0,l.kt)("inlineCode",{parentName:"li"},"snapshot")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/reference/api/modules/core#modelkey"},(0,l.kt)("inlineCode",{parentName:"a"},"{ArrayableVariadic<ModelKey<I>>}"))," ",(0,l.kt)("inlineCode",{parentName:"li"},"...only"))),(0,l.kt)("h4",{id:"returns-7"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"{I}"),", the affected instance."),(0,l.kt)("h3",{id:"comparesnapshots"},(0,l.kt)("inlineCode",{parentName:"h3"},"compareSnapshots")),(0,l.kt)("p",null,"Check if the given keys are different between two snapshots.\nIf no keys are provided, will check whole snapshots (including IDs)."),(0,l.kt)("h4",{id:"example-8"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { compareSnapshots } from 'foscia/core';\n\ncompareSnapshots(nextSnapshot, prevSnapshot, ['title', 'description']);\n")),(0,l.kt)("h4",{id:"arguments-8"},"Arguments"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/reference/api/modules/core#modelsnapshot"},(0,l.kt)("inlineCode",{parentName:"a"},"{ModelSnapshot<I>}"))," ",(0,l.kt)("inlineCode",{parentName:"li"},"nextSnapshot")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/reference/api/modules/core#modelsnapshot"},(0,l.kt)("inlineCode",{parentName:"a"},"{ModelSnapshot<I>}"))," ",(0,l.kt)("inlineCode",{parentName:"li"},"prevSnapshot")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/reference/api/modules/core#modelkey"},(0,l.kt)("inlineCode",{parentName:"a"},"{ArrayableVariadic<ModelKey<I>>}"))," ",(0,l.kt)("inlineCode",{parentName:"li"},"...only"))),(0,l.kt)("h4",{id:"returns-8"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"{boolean}")," if keys (or all values) are different on given snapshots."),(0,l.kt)("h2",{id:"factories"},"Factories"),(0,l.kt)("h3",{id:"makemodel"},(0,l.kt)("inlineCode",{parentName:"h3"},"makeModel")),(0,l.kt)("p",null,"Create a model class."),(0,l.kt)("h4",{id:"example-9"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { makeModel } from 'foscia/core';\n\nconst PostModel = makeModel('posts', { /* definition */ });\n")),(0,l.kt)("h4",{id:"arguments-9"},"Arguments"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/reference/api/modules/core#modelconfig"},(0,l.kt)("inlineCode",{parentName:"a"},"{ModelConfig | string}"))," ",(0,l.kt)("inlineCode",{parentName:"li"},"config")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{ModelDefinition}")," ",(0,l.kt)("inlineCode",{parentName:"li"},"rawDefinition"))),(0,l.kt)("h4",{id:"returns-9"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/reference/api/modules/core#modelclass"},(0,l.kt)("inlineCode",{parentName:"a"},"{ModelClass}"))),(0,l.kt)("h3",{id:"makemodelfactory"},(0,l.kt)("inlineCode",{parentName:"h3"},"makeModelFactory")),(0,l.kt)("p",null,"Create a model class factory."),(0,l.kt)("h4",{id:"example-10"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { makeModelFactory } from 'foscia/core';\n\nconst makeModel = makeModelFactory({ /* definition */ }, { /* config */ });\n")),(0,l.kt)("h4",{id:"arguments-10"},"Arguments"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{ModelDefinition | undefined}")," ",(0,l.kt)("inlineCode",{parentName:"li"},"baseRawDefinition")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/reference/api/modules/core#modelconfig"},(0,l.kt)("inlineCode",{parentName:"a"},"{ModelConfig | undefined}"))," ",(0,l.kt)("inlineCode",{parentName:"li"},"baseConfig")," (omitting ",(0,l.kt)("inlineCode",{parentName:"li"},"type"),")")),(0,l.kt)("h4",{id:"returns-10"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"#makemodel"},(0,l.kt)("inlineCode",{parentName:"a"},"{makeModel}")),", a customized model factory function."),(0,l.kt)("h3",{id:"makecomposable"},(0,l.kt)("inlineCode",{parentName:"h3"},"makeComposable")),(0,l.kt)("p",null,"Create a composable definition to integrate in models."),(0,l.kt)("h4",{id:"example-11"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { makeComposable } from 'foscia/core';\n\nconst publishable = makeComposable({ /* definition */ });\n")),(0,l.kt)("h4",{id:"arguments-11"},"Arguments"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{ModelDefinition}")," ",(0,l.kt)("inlineCode",{parentName:"li"},"rawDefinition"))),(0,l.kt)("h4",{id:"returns-11"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/reference/api/modules/core#modelparseddefinition"},(0,l.kt)("inlineCode",{parentName:"a"},"{ModelParsedDefinition}"))))}m.isMDXComponent=!0}}]);