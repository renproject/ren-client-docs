(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{207:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return u})),t.d(r,"Tag",(function(){return d})),t.d(r,"default",(function(){return l}));var n=t(3),o=(t(0),t(486)),a=t(487);const i={id:"derived-from",title:"derivedFrom"},c={unversionedId:"subgraph/directives/derived-from",id:"subgraph/directives/derived-from",isDocsHomePage:!1,title:"derivedFrom",description:"<span",source:"@site/subgraph/subgraph/directives/derived-from.mdx",slug:"/subgraph/directives/derived-from",permalink:"/ren-client-docs/subgraph/subgraph/directives/derived-from",version:"current",sidebar:"subgraph",previous:{title:"deprecated",permalink:"/ren-client-docs/subgraph/subgraph/directives/deprecated"},next:{title:"entity",permalink:"/ren-client-docs/subgraph/subgraph/directives/entity"}},u=[{value:"Arguments",id:"arguments",children:[]}],d=({children:e,color:r})=>Object(o.mdx)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},e),p={toc:u,Tag:d};function l({components:e,...r}){return Object(o.mdx)("wrapper",Object(n.default)({},p,r,{components:e,mdxType:"MDXLayout"}),Object(o.mdx)(a.DocTag,{type:a.DocType.Reference,mdxType:"DocTag"}),Object(o.mdx)("p",null,"No description"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-graphql"},"directive @derivedFrom(\n  field: String\n)\n")),Object(o.mdx)("h3",{id:"arguments"},"Arguments"),Object(o.mdx)("h4",{id:"field-string"},Object(o.mdx)("inlineCode",{parentName:"h4"},"field")," (",Object(o.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/string"},Object(o.mdx)("inlineCode",{parentName:"a"},"String")),")"))}l.isMDXComponent=!0},486:function(e,r,t){"use strict";t.r(r),t.d(r,"MDXContext",(function(){return p})),t.d(r,"MDXProvider",(function(){return f})),t.d(r,"mdx",(function(){return g})),t.d(r,"useMDXComponents",(function(){return s})),t.d(r,"withMDXComponents",(function(){return l}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(){return(i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),l=function(e){return function(r){var t=s(r.components);return o.a.createElement(e,i({},r,{components:t}))}},s=function(e){var r=o.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},f=function(e){var r=s(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=s(t),l=n,f=p["".concat(i,".").concat(l)]||p[l]||m[l]||a;return t?o.a.createElement(f,u(u({ref:r},c),{},{components:t})):o.a.createElement(f,u({ref:r},c))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=b;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var d=2;d<a;d++)i[d]=t[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},487:function(e,r,t){"use strict";var n=t(4).default;Object.defineProperty(r,"__esModule",{value:!0}),r.DocTag=r.DocType=void 0;var o=n(t(0));let a;r.DocType=a,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(a||(r.DocType=a={}));const i={[a.Tutorial]:"#b16bfc",[a.HowTo]:"#EC0088",[a.Reference]:"#ff823a",[a.Explanation]:"#29C0AF"};r.DocTag=({type:e,marginBottom:r})=>o.default.createElement(o.default.Fragment,null,o.default.createElement("span",{style:{border:"2px solid "+i[e]||!1,borderRadius:"5px",color:i[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==r?r:30,display:"inline-block"}},String(e)))}}]);