"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3709],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(t),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5153:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(9496),a=t(5924);const o={tabItem:"tabItem_oaqp"};function i(e){let{children:n,hidden:t,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:t},n)}},9407:(e,n,t)=>{t.d(n,{Z:()=>x});var r=t(1163),a=t(9496),o=t(5924),i=t(3642),s=t(3442),u=t(5506),l=t(2487),c=t(9473);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}function d(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const r=(0,s.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u._X)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=d(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[u,l]=f({queryString:t,groupId:r}),[p,h]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,c.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),g=(()=>{const e=u??p;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),l(e),h(e)}),[l,h,o]),tabValues:o}}var g=t(1517);const b={tabList:"tabList_PUic",tabItem:"tabItem_TlgZ"};function y(e){let{className:n,block:t,selectedValue:s,selectValue:u,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),r=l[t].value;r!==s&&(p(n),u(r))},m=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},l.map((e=>{let{value:n,label:t,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":s===n})}),t??n)})))}function v(e){let{lazy:n,children:t,selectedValue:r}=e;if(t=Array.isArray(t)?t:[t],n){const e=t.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},t.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r}))))}function k(e){const n=h(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},a.createElement(y,(0,r.Z)({},e,n)),a.createElement(v,(0,r.Z)({},e,n)))}function x(e){const n=(0,g.Z)();return a.createElement(k,(0,r.Z)({key:String(n)},e))}},2626:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var r=t(1163),a=(t(9496),t(9613)),o=t(5153),i=t(9407);const s={sidebar_position:60,description:"Defining your own action runners and their associated extension."},u="Custom action runners",l={unversionedId:"advanced/custom-action-runners",id:"advanced/custom-action-runners",title:"Custom action runners",description:"Defining your own action runners and their associated extension.",source:"@site/docs/advanced/custom-action-runners.mdx",sourceDirName:"advanced",slug:"/advanced/custom-action-runners",permalink:"/func-client/docs/advanced/custom-action-runners",draft:!1,editUrl:"https://github.com/paul-thebaud/func-client/tree/main/website/docs/advanced/custom-action-runners.mdx",tags:[],version:"current",sidebarPosition:60,frontMatter:{sidebar_position:60,description:"Defining your own action runners and their associated extension."},sidebar:"docsSidebar",previous:{title:"Custom action enhancers",permalink:"/func-client/docs/advanced/custom-action-enhancers"},next:{title:"Custom action factory",permalink:"/func-client/docs/advanced/custom-action-factory"}},c={},p=[{value:"Goal",id:"goal",level:2},{value:"Defining the function",id:"defining-the-function",level:2},{value:"Using the function",id:"using-the-function",level:2},{value:"Defining the extension",id:"defining-the-extension",level:2}],d={toc:p},m="wrapper";function f(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"custom-action-runners"},"Custom action runners"),(0,a.kt)("admonition",{title:"What you'll learn",type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Defining a custom action runner"),(0,a.kt)("li",{parentName:"ul"},"Providing an extension property to your runner"))),(0,a.kt)("p",null,"FuncClient tries to be agnostic of your data source, so sometimes you may\nrequire a custom runner to avoid code duplication."),(0,a.kt)("p",null,"This is a simple guide on defining a custom runner, but you may also inspire\nfrom any existing FuncClient runners."),(0,a.kt)("h2",{id:"goal"},"Goal"),(0,a.kt)("p",null,"Since FuncClient is pagination agnostic, providing a ",(0,a.kt)("inlineCode",{parentName:"p"},"first")," runner is\nnot possible. Here is what we want our new ",(0,a.kt)("inlineCode",{parentName:"p"},"first")," runner to do:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Limit the pagination to the first page and one record only"),(0,a.kt)("li",{parentName:"ul"},"Fetch the first record using the ",(0,a.kt)("inlineCode",{parentName:"li"},"one")," runner")),(0,a.kt)("p",null,"In this example, we will admit a JSON:API is used with the following query\nparameters working:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"page[number]")," describes the number of the page to fetch"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"page[size]")," describes the count of records to fetch (aka. limit)")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This guide is a runner version of the ",(0,a.kt)("inlineCode",{parentName:"p"},"first")," enhancer described in the\n",(0,a.kt)("a",{parentName:"p",href:"/docs/advanced/custom-action-enhancers"},(0,a.kt)("strong",{parentName:"a"},"custom enhancers guide")),".")),(0,a.kt)("h2",{id:"defining-the-function"},"Defining the function"),(0,a.kt)("p",null,"Our implementation of ",(0,a.kt)("inlineCode",{parentName:"p"},"first")," will paginate the context and fetch one instance."),(0,a.kt)(i.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="action/runners/first.ts"',title:'"action/runners/first.ts"'},"import {\n    Action,\n    ConsumeAdapter,\n    ConsumeDeserializer,\n    ConsumeModel,\n    Model,\n    one,\n} from 'func-client/core';\nimport { paginate } from 'func-client/jsonapi';\n\nexport default function first<\n    Context extends {},\n    ContextModel extends Model,\n    ContextData,\n>() {\n    return (\n        action: Action<\n            Context &\n                ConsumeAdapter<ContextData> &\n                ConsumeDeserializer<ContextData> &\n                ConsumeModel<ContextModel>\n        >,\n    ) => action.use(paginate({ number: 1, size: 1 })).run(one());\n}\n"))),(0,a.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="action/runners/first.ts"',title:'"action/runners/first.ts"'},"import { one } from 'func-client/core';\nimport { paginate } from 'func-client/jsonapi';\n\nexport default function first() {\n    return (action) => action.use(paginate({ number: 1, size: 1 })).run(one());\n}\n")))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Please note that when defining custom enhancers or runners, you should always\ncorrectly define generic types. This is very important as it will allow the\ncontext propagation through other enhancers and runners.")),(0,a.kt)("h2",{id:"using-the-function"},"Using the function"),(0,a.kt)("p",null,"Once your runner is ready, you may use it like any other FuncClient runner."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { forModel } from 'func-client/core';\nimport action from './action';\nimport first from './action/runners/first';\nimport Post from './models/post';\n\nconst post = await action()\n  .use(forModel(Post))\n  .run(first());\n")),(0,a.kt)("h2",{id:"defining-the-extension"},"Defining the extension"),(0,a.kt)("p",null,"Our current runner can only be used through an import and the ",(0,a.kt)("inlineCode",{parentName:"p"},"use")," method\nof our action. To make it available for the\n",(0,a.kt)("a",{parentName:"p",href:"/docs/actions#extensions"},"builder pattern style calls"),", we must define an\nextension for it."),(0,a.kt)("p",null,"There is currently a limitation of the TypeScript language (Higher Order types\nare not available for now) which forces us to declare each extension manually.\nThe goal of an extension definition is to strongly type the feature provided\nto our action (and so provide autocomplete, context propagation, etc.)."),(0,a.kt)("p",null,"Once your runner extension is ready, you will be able to use it\n",(0,a.kt)("a",{parentName:"p",href:"/docs/actions#extensions"},"as any other runners of FuncClient"),"."),(0,a.kt)(i.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="action/runners/first.ts"',title:'"action/runners/first.ts"'},"import {\n    Action,\n    ActionParsedExtension,\n    ConsumeAdapter,\n    ConsumeDeserializer,\n    ConsumeModel,\n    Model,\n    makeRunnersExtension,\n    one,\n} from 'func-client/core';\nimport { paginate } from 'func-client/jsonapi';\n\n// Our previous enhancer code.\nexport default function first<\n    Context extends {},\n    ContextModel extends Model,\n    ContextData,\n>() {\n    return (\n        action: Action<\n            Context &\n                ConsumeAdapter<ContextData> &\n                ConsumeDeserializer<ContextData> &\n                ConsumeModel<ContextModel>\n        >,\n    ) => action.use(paginate({ number: 1, size: 1 })).run(one());\n}\n\n// The extension typing.\ntype FirstRunnerExtension = ActionParsedExtension<{\n    first<Context extends {}, ContextModel extends Model, ContextData>(\n        this: Action<\n            Context &\n                ConsumeAdapter<ContextData> &\n                ConsumeDeserializer<ContextData> &\n                ConsumeModel<ContextModel>\n        >,\n    ): Promise<InstanceType<ContextModel> | null>;\n}>;\n\n// The extension value.\nfirst.extension = makeRunnersExtension({ first }) as FirstRunnerExtension;\n"))),(0,a.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="action/runners/first.ts"',title:'"action/runners/first.ts"'},"import { makeRunnersExtension, one } from 'func-client/core';\nimport { paginate } from 'func-client/jsonapi';\n\n// Our previous enhancer code.\nexport default function first() {\n    return (action) => action.use(paginate({ number: 1, size: 1 })).run(one());\n}\n\n// The extension value.\nfirst.extension = makeRunnersExtension({ first });\n")))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Here again, correctly typing our runner extension is really important to get\ncontext and action's extension propagation.")))}f.isMDXComponent=!0}}]);