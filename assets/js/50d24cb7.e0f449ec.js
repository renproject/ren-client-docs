(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{148:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return i})),r.d(n,"toc",(function(){return l})),r.d(n,"Tag",(function(){return u})),r.d(n,"default",(function(){return s}));var t=r(3),o=(r(0),r(486)),a=r(487);const c={id:"boolean",title:"Boolean"},i={unversionedId:"subgraph/scalars/boolean",id:"subgraph/scalars/boolean",isDocsHomePage:!1,title:"Boolean",description:"<span",source:"@site/subgraph/subgraph/scalars/boolean.mdx",slug:"/subgraph/scalars/boolean",permalink:"/ren-client-docs/subgraph/subgraph/scalars/boolean",version:"current",sidebar:"subgraph",previous:{title:"BigInt",permalink:"/ren-client-docs/subgraph/subgraph/scalars/big-int"},next:{title:"Bytes",permalink:"/ren-client-docs/subgraph/subgraph/scalars/bytes"}},l=[],u=({children:e,color:n})=>Object(o.mdx)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},e),p={toc:l,Tag:u};function s({components:e,...n}){return Object(o.mdx)("wrapper",Object(t.default)({},p,n,{components:e,mdxType:"MDXLayout"}),Object(o.mdx)(a.DocTag,{type:a.DocType.Reference,mdxType:"DocTag"}),Object(o.mdx)("p",null,"The ",Object(o.mdx)("inlineCode",{parentName:"p"},"Boolean")," scalar type represents ",Object(o.mdx)("inlineCode",{parentName:"p"},"true")," or ",Object(o.mdx)("inlineCode",{parentName:"p"},"false"),"."),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-graphql"},"scalar Boolean\n")))}s.isMDXComponent=!0},486:function(e,n,r){"use strict";r.r(n),r.d(n,"MDXContext",(function(){return p})),r.d(n,"MDXProvider",(function(){return d})),r.d(n,"mdx",(function(){return g})),r.d(n,"useMDXComponents",(function(){return f})),r.d(n,"withMDXComponents",(function(){return s}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),s=function(e){return function(n){var r=f(n.components);return o.a.createElement(e,c({},n,{components:r}))}},f=function(e){var n=o.a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},d=function(e){var n=f(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),p=f(r),s=t,d=p["".concat(c,".").concat(s)]||p[s]||b[s]||a;return r?o.a.createElement(d,l(l({ref:n},i),{},{components:r})):o.a.createElement(d,l({ref:n},i))}));function g(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},487:function(e,n,r){"use strict";var t=r(4).default;Object.defineProperty(n,"__esModule",{value:!0}),n.DocTag=n.DocType=void 0;var o=t(r(0));let a;n.DocType=a,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(a||(n.DocType=a={}));const c={[a.Tutorial]:"#b16bfc",[a.HowTo]:"#EC0088",[a.Reference]:"#ff823a",[a.Explanation]:"#29C0AF"};n.DocTag=({type:e,marginBottom:n})=>o.default.createElement(o.default.Fragment,null,o.default.createElement("span",{style:{border:"2px solid "+c[e]||!1,borderRadius:"5px",color:c[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==n?n:30,display:"inline-block"}},String(e)))}}]);