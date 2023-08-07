"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1905],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},782:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(9496),r=n(5924);const o={tabItem:"tabItem_eDPh"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},1399:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(7366),r=n(9496),o=n(5924),i=n(8696),l=n(3442),s=n(6777),c=n(8435),u=n(4416);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=f({queryString:n,groupId:a}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),h=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),b(e)}),[c,b,o]),tabValues:o}}var h=n(4197);const g={tabList:"tabList_AXDX",tabItem:"tabItem_bAX3"};function y(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==l&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function T(e){const t=b(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function k(e){const t=(0,h.Z)();return r.createElement(T,(0,a.Z)({key:String(t)},e))}},1810:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(7366),r=(n(9496),n(9613)),o=(n(782),n(1399),n(4135));const i={sidebar_position:10,description:"Using Foscia as a simple HTTP client."},l="HTTP client",s={unversionedId:"guides/actions/http-client",id:"guides/actions/http-client",title:"HTTP client",description:"Using Foscia as a simple HTTP client.",source:"@site/docs/guides/actions/http-client.mdx",sourceDirName:"guides/actions",slug:"/guides/actions/http-client",permalink:"/foscia/docs/guides/actions/http-client",draft:!1,editUrl:"https://github.com/paul-thebaud/foscia/tree/main/website/docs/guides/actions/http-client.mdx",tags:[],version:"current",lastUpdatedAt:1691442561,formattedLastUpdatedAt:"Aug 7, 2023",sidebarPosition:10,frontMatter:{sidebar_position:10,description:"Using Foscia as a simple HTTP client."},sidebar:"docsSidebar",previous:{title:"Actions",permalink:"/foscia/docs/category/actions"},next:{title:"Configuring action factory",permalink:"/foscia/docs/guides/actions/action-factory-configuration"}},c={},u=[{value:"Creating the action factory",id:"creating-the-action-factory",level:2},{value:"Using the HTTP client features",id:"using-the-http-client-features",level:2},{value:"Implementation notes",id:"implementation-notes",level:2}],p={toc:u},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"http-client"},"HTTP client"),(0,r.kt)("admonition",{title:"What you'll learn",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Configuring your action factory to only make HTTP request"),(0,r.kt)("li",{parentName:"ul"},"Using Foscia as an HTTP client"))),(0,r.kt)("h2",{id:"creating-the-action-factory"},"Creating the action factory"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"If you are using a REST or JSON:API blueprints, you can already use your\naction as an HTTP client.")),(0,r.kt)("p",null,"You can use Foscia as a simple HTTP client (just like Axios).\nFor this, you can configure an HTTP client action factory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="action.js"',title:'"action.js"'},"import { makeHttpClient } from 'foscia/blueprints';\n\nconst { action } = makeHttpClient({\n    baseURL: 'https://example.com',\n});\n\nexport default action;\n")),(0,r.kt)("h2",{id:"using-the-http-client-features"},"Using the HTTP client features"),(0,r.kt)("p",null,"Once your action factory is ready, sending HTTP request is pretty easy:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { makeGet, makePost } from 'foscia/http';\nimport { action } from './action';\n\n// GET https://example.com/\nconst response = await action()\n    .use(makeGet('/'))\n    .run(raw());\n\n// GET https://example.com/api/posts (and get JSON payload)\nconst data = await action()\n    .use(makePost('/api/posts', {\n      data: { title: 'Hello World!' },\n    }))\n    .run(raw((response) => response.json()));\n")),(0,r.kt)(o.Z,{className:"button bg--primary",to:"/docs/reference/actions-enhancers#http",mdxType:"Link"},"Read the HTTP' enhancers API guide"),(0,r.kt)("h2",{id:"implementation-notes"},"Implementation notes"),(0,r.kt)("p",null,"You may learn more about the HTTP adapter capabilities and implementation\non ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/implementations/http"},"the HTTP implementation guide"),"."))}m.isMDXComponent=!0}}]);