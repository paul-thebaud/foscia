"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6142],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return t?a.createElement(h,i(i({ref:n},u),{},{components:t})):a.createElement(h,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},208:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(9496),o=t(5924);const r="tabItem_IPoj";function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:t},n)}},4210:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(4250),o=t(9496),r=t(5924),i=t(4375),s=t(4436),l=t(7883),c=t(4930);const u="tabList_xr86",p="tabItem_r4_W";function d(e){var n;const{lazy:t,block:i,defaultValue:d,values:m,groupId:h,className:k}=e,g=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??g.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),f=(0,s.l)(y,((e,n)=>e.value===n.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===d?d:d??(null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)??g[0].props.value;if(null!==b&&!y.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:w}=(0,l.U)(),[N,x]=(0,o.useState)(b),E=[],{blockElementScrollPositionUntilNextRender:C}=(0,c.o5)();if(null!=h){const e=v[h];null!=e&&e!==N&&y.some((n=>n.value===e))&&x(e)}const O=e=>{const n=e.currentTarget,t=E.indexOf(n),a=y[t].value;a!==N&&(C(n),x(a),null!=h&&w(h,String(a)))},j=e=>{var n;let t=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const n=E.indexOf(e.currentTarget)+1;t=E[n]??E[0];break}case"ArrowLeft":{const n=E.indexOf(e.currentTarget)-1;t=E[n]??E[E.length-1];break}}null==(n=t)||n.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},k)},y.map((e=>{let{value:n,label:t,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,key:n,ref:e=>E.push(e),onKeyDown:j,onClick:O},i,{className:(0,r.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":N===n})}),t??n)}))),t?(0,o.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},g.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==N})))))}function m(e){const n=(0,i.Z)();return o.createElement(d,(0,a.Z)({key:String(n)},e))}},4119:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=t(4250),o=(t(9496),t(9613)),r=(t(208),t(4210),t(4936));const i={sidebar_position:35,description:"Build actions, registering hooks, discover enhancers and runners."},s="Actions",l={unversionedId:"actions",id:"actions",title:"Actions",description:"Build actions, registering hooks, discover enhancers and runners.",source:"@site/docs/actions.mdx",sourceDirName:".",slug:"/actions",permalink:"/func-client/docs/actions",draft:!1,editUrl:"https://github.com/paul-thebaud/func-client/tree/main/website/docs/actions.mdx",tags:[],version:"current",sidebarPosition:35,frontMatter:{sidebar_position:35,description:"Build actions, registering hooks, discover enhancers and runners."},sidebar:"docsSidebar",previous:{title:"Models",permalink:"/func-client/docs/models"},next:{title:"Implementations",permalink:"/func-client/docs/category/implementations"}},c={},u=[{value:"Instantiation",id:"instantiation",level:2},{value:"Enhancements",id:"enhancements",level:2},{value:"Run",id:"run",level:2},{value:"Extensions",id:"extensions",level:2},{value:"Conditionals",id:"conditionals",level:2},{value:"Hooks",id:"hooks",level:2}],p={toc:u};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"actions"},"Actions"),(0,o.kt)("admonition",{title:"Requirements",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Before reading this guide, you should have a working action factory. You can\nread the ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started#your-first-actions"},(0,o.kt)("strong",{parentName:"a"},"getting started guide")),"\nto quickly create your own action factory.")),(0,o.kt)("admonition",{title:"What you'll learn",type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Enhancing actions"),(0,o.kt)("li",{parentName:"ul"},"Running actions"),(0,o.kt)("li",{parentName:"ul"},"Extending actions for builder pattern calls"),(0,o.kt)("li",{parentName:"ul"},"Conditionally enhancing and running"),(0,o.kt)("li",{parentName:"ul"},"Registering hooks on actions"))),(0,o.kt)("h2",{id:"instantiation"},"Instantiation"),(0,o.kt)("p",null,"As stated in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started#running-actions"},"getting started guide"),",\nactions are instantiated through your action factory. In this guide, we'll admit\nyou have a setup action factory."),(0,o.kt)("h2",{id:"enhancements"},"Enhancements"),(0,o.kt)("p",null,"An action instance may receive none to many enhancements, which will provide an\nappropriate context to run a request through data source."),(0,o.kt)("p",null,"Each enhancer can be applied using the ",(0,o.kt)("inlineCode",{parentName:"p"},"use")," action method. Note that those\nenhancers are not instantly applied to the action context, but during the action\nrun step (or context computation)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"action()\n    // Enhance the action.\n    .use(forModel(Post))\n    .use(include('comments'));\n")),(0,o.kt)(r.Z,{className:"button bg--primary-gradient",to:"/docs/api/actions-enhancers",mdxType:"Link"},"Available enhancers API guide"),(0,o.kt)("h2",{id:"run"},"Run"),(0,o.kt)("p",null,"An action instance can be run using the ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," method. The runner may use\nenhancers or runners internally."),(0,o.kt)("p",null,"When an action run, it does 3 things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Dequeue all enhancers since the action instantiation and build context"),(0,o.kt)("li",{parentName:"ul"},"Execute the runner and each of its internal enhancers/runners (this may\nupdate the context)"),(0,o.kt)("li",{parentName:"ul"},"Return the runner's result (might be any value, including void or an error\nthrowing)")),(0,o.kt)("p",null,"Internally, action running will also trigger ",(0,o.kt)("a",{parentName:"p",href:"#hooks"},"actions hooks"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"action()\n    .use(forModel(Post))\n    .use(include('comments'))\n    // Run the action.\n    .run(all());\n")),(0,o.kt)(r.Z,{className:"button bg--primary-gradient",to:"/docs/api/actions-runners",mdxType:"Link"},"Available runners API guide"),(0,o.kt)("h2",{id:"extensions"},"Extensions"),(0,o.kt)("p",null,"Sometimes, functional programming can be frustrating, because you must always\nrewrite the same words (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"use"),") to keep a builder pattern styled code."),(0,o.kt)("p",null,"Extensions provide a set of properties or methods which will be added\nto your actions' instances. As an action, extensions can avoid you writing\n",(0,o.kt)("inlineCode",{parentName:"p"},"use")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," by adding enhancers/runners methods on you action."),(0,o.kt)("p",null,"The first step to use one or many extensions is to update your action factory\nin which you should provide an ",(0,o.kt)("inlineCode",{parentName:"p"},"extension")," configuration option.\nIf you are using a custom action factory, you should check the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/advanced/custom-action-factory"},"custom action factory guide"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="action.js"',title:'"action.js"'},"import { model, include, all } from 'func-client/core';\nimport { makeJsonApi } from 'func-client/blueprints';\n\nconst { action, registry } = makeJsonApi({\n    extensions: {\n        // Spread any extensions you want to use here...\n        ...model.extension,\n        ...include.extension,\n        ...all.extension,\n    },\n});\n")),(0,o.kt)("p",null,"You can now use the extended enhancers and runners without calling ",(0,o.kt)("inlineCode",{parentName:"p"},"use")," or\n",(0,o.kt)("inlineCode",{parentName:"p"},"run"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import action from './action';\n\nawait action().forModel(Post).include('tags').all();\n")),(0,o.kt)("p",null,"Every enhancers and runners of FuncClient provide a ",(0,o.kt)("inlineCode",{parentName:"p"},".extension")," property\nwhich is extendable by an action instance."),(0,o.kt)("p",null,"You may extend your action with any enhancers or runners extensions manually.\nOtherwise, you may also use ",(0,o.kt)("strong",{parentName:"p"},"prebuild extensions packs"),". Those provide\nmultiple extensions in one exported object allowing you to extend multiple\nextensions at one time!"),(0,o.kt)(r.Z,{className:"button bg--primary-gradient margin-bottom--lg",to:"/docs/api/actions-extensions",mdxType:"Link"},"Available extensions packs API guide"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Keep in mind that using extensions will avoid tree-shaking the extended\nenhancers or runners functions (even when those are unused in your codebase),\nbecause those are imported by their extensions.")),(0,o.kt)("h2",{id:"conditionals"},"Conditionals"),(0,o.kt)("p",null,"Sometimes, you may need to conditionally apply an enhancer or run an action. As\nan example, you may want to sort results differently based on the user's defined\nsort's direction. This can be done easily using the ",(0,o.kt)("inlineCode",{parentName:"p"},"when")," helper:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { when } from 'func-client/core';\nimport { sortByDesc } from 'func-client/jsonapi';\n\naction()\n    .use(forModel(Post))\n    .use(when(displayLatestFirst, sortByDesc('createdAt')));\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"when")," returns a new enhancer or runner based on the given value's\n",(0,o.kt)("em",{parentName:"p"},"truthiness"),". It will execute the first enhancer/runner only if its value is\n",(0,o.kt)("em",{parentName:"p"},"truthy"),". You may pass the value as a factory function returning the value,\nand even a promise value. You may also pass a second enhancer/runner which\nwill only execute if the value is ",(0,o.kt)("em",{parentName:"p"},"falsy"),".\nEach callback arguments will receive the action as their first argument\nand the value as their second argument. Each callback may also be async,\nas any enhancers and runners."),(0,o.kt)("p",null,"Here are further examples:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { changed, create, oneOrFail, when } from 'func-client/core';\n\nconst post = fill(new Post(), userInputData);\n\naction()\n    .use(create(post))\n    .use(when(\n        () => /* compute a special value */,\n        (a, specialTruthyValue) => /* do something */,\n        (a, specialFalsyValue) => /* do something */,\n    ))\n    .run(when(\n        changed(post),\n        oneOrFail(),\n        () => post,\n    ));\n")),(0,o.kt)("h2",{id:"hooks"},"Hooks"),(0,o.kt)("p",null,"You may hook on multiple events which occurs on action instance using the hook\nregistration function:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"onPreparing"),": before context computation through enhancers dequeueing."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"onRunning"),": after context computation, before context runner execution."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"onSuccess"),": after context runner successful execution (no error thrown)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"onError"),": after context runner failed execution (error thrown)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"onFinally"),": after context runner successful or failed execution.")),(0,o.kt)("p",null,"To register a hook callback, you must use the registration enhancer on your\nbuilding action."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import {\n    onPreparing,\n    onRunning,\n    onSuccess,\n    onError,\n    onFinally,\n} from 'func-client/core';\n\naction().use(onPreparing(() => /* ... */));\naction().use(onRunning(({ context }) => /* ... */));\naction().use(onSuccess(({ context, result }) => /* ... */));\naction().use(onError(({ context, error }) => /* ... */));\naction().use(onFinally(({ context }) => /* ... */));\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Hooks callback may be async and will be ran sequentially (one by one, not\nparallelized).")),(0,o.kt)("p",null,"You can disable hook execution on a given action instance by using the\n",(0,o.kt)("inlineCode",{parentName:"p"},"withoutHooks")," function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { withoutHooks } from 'func-client/core';\n\n// Retrieve a list of User instances without action hooks running.\nconst users = await withoutHooks(action(), async (a) => {\n    return await a.use(forModel(User)).run(all());\n});\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"FuncClient may also register hooks internally when using some enhancers. Those\nprovide some library features\n(",(0,o.kt)("a",{parentName:"p",href:"/docs/models#hooks"},(0,o.kt)("strong",{parentName:"a"},"models hooks")),", etc.). Be careful running\nactions without hooks, as those hooks will also be disable.")))}d.isMDXComponent=!0}}]);