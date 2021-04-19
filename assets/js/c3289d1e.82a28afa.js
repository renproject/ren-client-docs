(window.webpackJsonp=window.webpackJsonp||[]).push([[284],{316:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return u})),r.d(t,"Tag",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(3),o=(r(0),r(486)),i=r(487);const a={id:"entity",title:"entity"},c={unversionedId:"subgraph/directives/entity",id:"subgraph/directives/entity",isDocsHomePage:!1,title:"entity",description:"<span",source:"@site/subgraph/subgraph/directives/entity.mdx",slug:"/subgraph/directives/entity",permalink:"/ren-client-docs/subgraph/subgraph/directives/entity",version:"current",sidebar:"subgraph",previous:{title:"derivedFrom",permalink:"/ren-client-docs/subgraph/subgraph/directives/derived-from"},next:{title:"include",permalink:"/ren-client-docs/subgraph/subgraph/directives/include"}},u=[],p=({children:e,color:t})=>Object(o.mdx)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},e),l={toc:u,Tag:p};function s({components:e,...t}){return Object(o.mdx)("wrapper",Object(n.default)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.mdx)(i.DocTag,{type:i.DocType.Reference,mdxType:"DocTag"}),Object(o.mdx)("p",null,"No description"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-graphql"},"directive @entity\n")))}s.isMDXComponent=!0},486:function(e,t,r){"use strict";r.r(t),r.d(t,"MDXContext",(function(){return l})),r.d(t,"MDXProvider",(function(){return f})),r.d(t,"mdx",(function(){return b})),r.d(t,"useMDXComponents",(function(){return d})),r.d(t,"withMDXComponents",(function(){return s}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){return function(t){var r=d(t.components);return o.a.createElement(e,a({},t,{components:r}))}},d=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},f=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},y=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),l=d(r),s=n,f=l["".concat(a,".").concat(s)]||l[s]||m[s]||i;return r?o.a.createElement(f,u(u({ref:t},c),{},{components:r})):o.a.createElement(f,u({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=y;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},487:function(e,t,r){"use strict";var n=r(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.DocTag=t.DocType=void 0;var o=n(r(0));let i;t.DocType=i,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(i||(t.DocType=i={}));const a={[i.Tutorial]:"#b16bfc",[i.HowTo]:"#EC0088",[i.Reference]:"#ff823a",[i.Explanation]:"#29C0AF"};t.DocTag=({type:e,marginBottom:t})=>o.default.createElement(o.default.Fragment,null,o.default.createElement("span",{style:{border:"2px solid "+a[e]||!1,borderRadius:"5px",color:a[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==t?t:30,display:"inline-block"}},String(e)))}}]);