"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1349],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=i(n),p=a,f=m["".concat(s,".").concat(p)]||m[p]||d[p]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[m]="string"==typeof e?e:a,l[1]=u;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5153:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(9496),a=n(5924);const o={tabItem:"tabItem_oaqp"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:n},t)}},9407:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(1163),a=n(9496),o=n(5924),l=n(3642),u=n(3442),s=n(5506),i=n(2487),c=n(9473);function m(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??m(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,u.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[l,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,i]=f({queryString:n,groupId:r}),[m,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),v=(()=>{const e=s??m;return p({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{v&&u(v)}),[v]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),i(e),b(e)}),[i,b,o]),tabValues:o}}var v=n(1517);const h={tabList:"tabList_PUic",tabItem:"tabItem_TlgZ"};function g(e){let{className:t,block:n,selectedValue:u,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=i[n].value;r!==u&&(m(t),s(r))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},i.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:d},l,{className:(0,o.Z)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":u===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=b(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},a.createElement(g,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function w(e){const t=(0,v.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},2003:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>u,metadata:()=>i,toc:()=>m});var r=n(1163),a=(n(9496),n(9613)),o=n(5153),l=n(9407);const u={sidebar_position:40,description:"Creating custom functional or object transformers."},s="Custom transformers",i={unversionedId:"advanced/custom-transformers",id:"advanced/custom-transformers",title:"Custom transformers",description:"Creating custom functional or object transformers.",source:"@site/docs/advanced/custom-transformers.mdx",sourceDirName:"advanced",slug:"/advanced/custom-transformers",permalink:"/func-client/docs/advanced/custom-transformers",draft:!1,editUrl:"https://github.com/paul-thebaud/func-client/tree/main/website/docs/advanced/custom-transformers.mdx",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40,description:"Creating custom functional or object transformers."},sidebar:"docsSidebar",previous:{title:"Models composition",permalink:"/func-client/docs/advanced/models-composition"},next:{title:"Custom action enhancers",permalink:"/func-client/docs/advanced/custom-action-enhancers"}},c={},m=[{value:"Functional transformer",id:"functional-transformer",level:2},{value:"Object transformer",id:"object-transformer",level:2}],d={toc:m},p="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"custom-transformers"},"Custom transformers"),(0,a.kt)("admonition",{title:"What you'll learn",type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Creating custom functional (unidirectional) transformers"),(0,a.kt)("li",{parentName:"ul"},"Creating custom object (bidirectional) transformers"))),(0,a.kt)("h2",{id:"functional-transformer"},"Functional transformer"),(0,a.kt)("p",null,"The functional (or unidirectional) transformer is a simple function which\ntransform a ",(0,a.kt)("em",{parentName:"p"},"raw")," value to its ",(0,a.kt)("em",{parentName:"p"},"real")," counterpart."),(0,a.kt)("p",null,"Here is an example of functional transformer with the FuncClient's ",(0,a.kt)("inlineCode",{parentName:"p"},"toNumber"),"\ntransformer."),(0,a.kt)(l.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function toNumber() {\n    return (value: unknown) =>\n        value === undefined || value === null || value === ''\n            ? undefined\n            : Number(value);\n}\n"))),(0,a.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function toNumber() {\n    return (value) =>\n        value === undefined || value === null || value === ''\n            ? undefined\n            : Number(value);\n}\n")))),(0,a.kt)("h2",{id:"object-transformer"},"Object transformer"),(0,a.kt)("p",null,"The object (or bidirectional) transformer has two functions to transform values:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"serialize")," which converts a ",(0,a.kt)("em",{parentName:"li"},"real")," value to its ",(0,a.kt)("em",{parentName:"li"},"raw")," counterpart"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"deserialize")," which converts a ",(0,a.kt)("em",{parentName:"li"},"raw")," value to its ",(0,a.kt)("em",{parentName:"li"},"real")," counterpart")),(0,a.kt)("p",null,"Here is an example of functional transformer with the FuncClient's ",(0,a.kt)("inlineCode",{parentName:"p"},"toDate"),"\ntransformer."),(0,a.kt)(l.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function toDate() {\n    return {\n        serialize(value: Date | undefined) {\n            return value?.toISOString();\n        },\n        deserialize(value: unknown) {\n            if (typeof value === 'string') {\n                const date = new Date();\n                date.setTime(Date.parse(value));\n\n                return date;\n            }\n\n            return undefined;\n        },\n    };\n}\n"))),(0,a.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function toDate() {\n    return {\n        serialize(value) {\n            return value?.toISOString();\n        },\n        deserialize(value) {\n            if (typeof value === 'string') {\n                const date = new Date();\n                date.setTime(Date.parse(value));\n\n                return date;\n            }\n\n            return undefined;\n        },\n    };\n}\n")))))}f.isMDXComponent=!0}}]);