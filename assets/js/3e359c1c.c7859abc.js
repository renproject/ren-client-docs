(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{126:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"Tag",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(3),a=(r(0),r(486)),i=r(487);const o={id:"value-with-assets",title:"valueWithAssets"},c={unversionedId:"subgraph/subscriptions/value-with-assets",id:"subgraph/subscriptions/value-with-assets",isDocsHomePage:!1,title:"valueWithAssets",description:"<span",source:"@site/subgraph/subgraph/subscriptions/value-with-assets.mdx",slug:"/subgraph/subscriptions/value-with-assets",permalink:"/ren-client-docs/subgraph/subgraph/subscriptions/value-with-assets",version:"current",sidebar:"subgraph",previous:{title:"valueWithAsset",permalink:"/ren-client-docs/subgraph/subgraph/subscriptions/value-with-asset"},next:{title:"deprecated",permalink:"/ren-client-docs/subgraph/subgraph/directives/deprecated"}},s=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],u=({children:e,color:t})=>Object(a.mdx)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},e),l={toc:s,Tag:u};function p({components:e,...t}){return Object(a.mdx)("wrapper",Object(n.default)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.mdx)(i.DocTag,{type:i.DocType.Reference,mdxType:"DocTag"}),Object(a.mdx)("p",null,"No description"),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-graphql"},"valueWithAssets(\n  skip: Int = 0\n  first: Int = 100\n  orderBy: ValueWithAsset_orderBy\n  orderDirection: OrderDirection\n  where: ValueWithAsset_filter\n  block: Block_height\n): [ValueWithAsset!]!\n\n")),Object(a.mdx)("h3",{id:"arguments"},"Arguments"),Object(a.mdx)("h4",{id:"skip-int"},Object(a.mdx)("inlineCode",{parentName:"h4"},"skip")," (",Object(a.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/int"},Object(a.mdx)("inlineCode",{parentName:"a"},"Int")),")"),Object(a.mdx)("h4",{id:"first-int"},Object(a.mdx)("inlineCode",{parentName:"h4"},"first")," (",Object(a.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/int"},Object(a.mdx)("inlineCode",{parentName:"a"},"Int")),")"),Object(a.mdx)("h4",{id:"orderby-valuewithasset_orderby"},Object(a.mdx)("inlineCode",{parentName:"h4"},"orderBy")," (",Object(a.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/enums/value-with-asset-order-by"},Object(a.mdx)("inlineCode",{parentName:"a"},"ValueWithAsset_orderBy")),")"),Object(a.mdx)("h4",{id:"orderdirection-orderdirection"},Object(a.mdx)("inlineCode",{parentName:"h4"},"orderDirection")," (",Object(a.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/enums/order-direction"},Object(a.mdx)("inlineCode",{parentName:"a"},"OrderDirection")),")"),Object(a.mdx)("h4",{id:"where-valuewithasset_filter"},Object(a.mdx)("inlineCode",{parentName:"h4"},"where")," (",Object(a.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/inputs/value-with-asset-filter"},Object(a.mdx)("inlineCode",{parentName:"a"},"ValueWithAsset_filter")),")"),Object(a.mdx)("h4",{id:"block-block_height"},Object(a.mdx)("inlineCode",{parentName:"h4"},"block")," (",Object(a.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/inputs/block-height"},Object(a.mdx)("inlineCode",{parentName:"a"},"Block_height")),")"),Object(a.mdx)("p",null,"The block at which the query should be executed. Can either be an ",Object(a.mdx)("inlineCode",{parentName:"p"},"{ number: Int }")," containing the block number or a ",Object(a.mdx)("inlineCode",{parentName:"p"},"{ hash: Bytes }")," value containing a block hash. Defaults to the latest block when omitted."),Object(a.mdx)("h3",{id:"type"},"Type"),Object(a.mdx)("h4",{id:"valuewithasset"},Object(a.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/objects/value-with-asset"},Object(a.mdx)("inlineCode",{parentName:"a"},"ValueWithAsset"))))}p.isMDXComponent=!0},486:function(e,t,r){"use strict";r.r(t),r.d(t,"MDXContext",(function(){return l})),r.d(t,"MDXProvider",(function(){return b})),r.d(t,"mdx",(function(){return f})),r.d(t,"useMDXComponents",(function(){return d})),r.d(t,"withMDXComponents",(function(){return p}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){return function(t){var r=d(t.components);return a.a.createElement(e,o({},t,{components:r}))}},d=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},b=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),l=d(r),p=n,b=l["".concat(o,".").concat(p)]||l[p]||m[p]||i;return r?a.a.createElement(b,s(s({ref:t},c),{},{components:r})):a.a.createElement(b,s({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},487:function(e,t,r){"use strict";var n=r(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.DocTag=t.DocType=void 0;var a=n(r(0));let i;t.DocType=i,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(i||(t.DocType=i={}));const o={[i.Tutorial]:"#b16bfc",[i.HowTo]:"#EC0088",[i.Reference]:"#ff823a",[i.Explanation]:"#29C0AF"};t.DocTag=({type:e,marginBottom:t})=>a.default.createElement(a.default.Fragment,null,a.default.createElement("span",{style:{border:"2px solid "+o[e]||!1,borderRadius:"5px",color:o[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==t?t:30,display:"inline-block"}},String(e)))}}]);