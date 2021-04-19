(window.webpackJsonp=window.webpackJsonp||[]).push([[250],{282:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return u})),t.d(n,"Tag",(function(){return l})),t.d(n,"default",(function(){return d}));var r=t(3),o=(t(0),t(486)),a=t(487);const i={id:"include",title:"include"},c={unversionedId:"subgraph/directives/include",id:"subgraph/directives/include",isDocsHomePage:!1,title:"include",description:"<span",source:"@site/subgraph/subgraph/directives/include.mdx",slug:"/subgraph/directives/include",permalink:"/ren-client-docs/subgraph/subgraph/directives/include",version:"current",sidebar:"subgraph",previous:{title:"entity",permalink:"/ren-client-docs/subgraph/subgraph/directives/entity"},next:{title:"skip",permalink:"/ren-client-docs/subgraph/subgraph/directives/skip"}},u=[{value:"Arguments",id:"arguments",children:[]}],l=({children:e,color:n})=>Object(o.mdx)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},e),p={toc:u,Tag:l};function d({components:e,...n}){return Object(o.mdx)("wrapper",Object(r.default)({},p,n,{components:e,mdxType:"MDXLayout"}),Object(o.mdx)(a.DocTag,{type:a.DocType.Reference,mdxType:"DocTag"}),Object(o.mdx)("p",null,"Directs the executor to include this field or fragment only when the ",Object(o.mdx)("inlineCode",{parentName:"p"},"if")," argument is true."),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-graphql"},"directive @include(\n  if: Boolean!\n)\n")),Object(o.mdx)("h3",{id:"arguments"},"Arguments"),Object(o.mdx)("h4",{id:"if-boolean"},Object(o.mdx)("inlineCode",{parentName:"h4"},"if")," (",Object(o.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/boolean"},Object(o.mdx)("inlineCode",{parentName:"a"},"Boolean!")),")"),Object(o.mdx)("p",null,"Included when true."))}d.isMDXComponent=!0},486:function(e,n,t){"use strict";t.r(n),t.d(n,"MDXContext",(function(){return p})),t.d(n,"MDXProvider",(function(){return f})),t.d(n,"mdx",(function(){return g})),t.d(n,"useMDXComponents",(function(){return s})),t.d(n,"withMDXComponents",(function(){return d}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),d=function(e){return function(n){var t=s(n.components);return o.a.createElement(e,i({},n,{components:t}))}},s=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},f=function(e){var n=s(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(t),d=r,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||a;return t?o.a.createElement(f,u(u({ref:n},c),{},{components:t})):o.a.createElement(f,u({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=b;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},487:function(e,n,t){"use strict";var r=t(4).default;Object.defineProperty(n,"__esModule",{value:!0}),n.DocTag=n.DocType=void 0;var o=r(t(0));let a;n.DocType=a,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(a||(n.DocType=a={}));const i={[a.Tutorial]:"#b16bfc",[a.HowTo]:"#EC0088",[a.Reference]:"#ff823a",[a.Explanation]:"#29C0AF"};n.DocTag=({type:e,marginBottom:n})=>o.default.createElement(o.default.Fragment,null,o.default.createElement("span",{style:{border:"2px solid "+i[e]||!1,borderRadius:"5px",color:i[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==n?n:30,display:"inline-block"}},String(e)))}}]);