(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{204:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"Tag",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(3),a=(r(0),r(486)),o=r(487);const i={id:"assets",title:"assets"},s={unversionedId:"subgraph/subscriptions/assets",id:"subgraph/subscriptions/assets",isDocsHomePage:!1,title:"assets",description:"<span",source:"@site/subgraph/subgraph/subscriptions/assets.mdx",slug:"/subgraph/subscriptions/assets",permalink:"/ren-client-docs/subgraph/subgraph/subscriptions/assets",version:"current",sidebar:"subgraph",previous:{title:"assetAmounts",permalink:"/ren-client-docs/subgraph/subgraph/subscriptions/asset-amounts"},next:{title:"darknode",permalink:"/ren-client-docs/subgraph/subgraph/subscriptions/darknode"}},c=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],p=({children:e,color:t})=>Object(a.mdx)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},e),d={toc:c,Tag:p};function u({components:e,...t}){return Object(a.mdx)("wrapper",Object(n.default)({},d,t,{components:e,mdxType:"MDXLayout"}),Object(a.mdx)(o.DocTag,{type:o.DocType.Reference,mdxType:"DocTag"}),Object(a.mdx)("p",null,"No description"),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-graphql"},"assets(\n  skip: Int = 0\n  first: Int = 100\n  orderBy: Asset_orderBy\n  orderDirection: OrderDirection\n  where: Asset_filter\n  block: Block_height\n): [Asset!]!\n\n")),Object(a.mdx)("h3",{id:"arguments"},"Arguments"),Object(a.mdx)("h4",{id:"skip-int"},Object(a.mdx)("inlineCode",{parentName:"h4"},"skip")," (",Object(a.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/int"},Object(a.mdx)("inlineCode",{parentName:"a"},"Int")),")"),Object(a.mdx)("h4",{id:"first-int"},Object(a.mdx)("inlineCode",{parentName:"h4"},"first")," (",Object(a.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/int"},Object(a.mdx)("inlineCode",{parentName:"a"},"Int")),")"),Object(a.mdx)("h4",{id:"orderby-asset_orderby"},Object(a.mdx)("inlineCode",{parentName:"h4"},"orderBy")," (",Object(a.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/enums/asset-order-by"},Object(a.mdx)("inlineCode",{parentName:"a"},"Asset_orderBy")),")"),Object(a.mdx)("h4",{id:"orderdirection-orderdirection"},Object(a.mdx)("inlineCode",{parentName:"h4"},"orderDirection")," (",Object(a.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/enums/order-direction"},Object(a.mdx)("inlineCode",{parentName:"a"},"OrderDirection")),")"),Object(a.mdx)("h4",{id:"where-asset_filter"},Object(a.mdx)("inlineCode",{parentName:"h4"},"where")," (",Object(a.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/inputs/asset-filter"},Object(a.mdx)("inlineCode",{parentName:"a"},"Asset_filter")),")"),Object(a.mdx)("h4",{id:"block-block_height"},Object(a.mdx)("inlineCode",{parentName:"h4"},"block")," (",Object(a.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/inputs/block-height"},Object(a.mdx)("inlineCode",{parentName:"a"},"Block_height")),")"),Object(a.mdx)("p",null,"The block at which the query should be executed. Can either be an ",Object(a.mdx)("inlineCode",{parentName:"p"},"{ number: Int }")," containing the block number or a ",Object(a.mdx)("inlineCode",{parentName:"p"},"{ hash: Bytes }")," value containing a block hash. Defaults to the latest block when omitted."),Object(a.mdx)("h3",{id:"type"},"Type"),Object(a.mdx)("h4",{id:"asset"},Object(a.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/objects/asset"},Object(a.mdx)("inlineCode",{parentName:"a"},"Asset"))))}u.isMDXComponent=!0},486:function(e,t,r){"use strict";r.r(t),r.d(t,"MDXContext",(function(){return d})),r.d(t,"MDXProvider",(function(){return b})),r.d(t,"mdx",(function(){return f})),r.d(t,"useMDXComponents",(function(){return l})),r.d(t,"withMDXComponents",(function(){return u}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=a.a.createContext({}),u=function(e){return function(t){var r=l(t.components);return a.a.createElement(e,i({},t,{components:r}))}},l=function(e){var t=a.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(r),u=n,b=d["".concat(i,".").concat(u)]||d[u]||m[u]||o;return r?a.a.createElement(b,c(c({ref:t},s),{},{components:r})):a.a.createElement(b,c({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},487:function(e,t,r){"use strict";var n=r(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.DocTag=t.DocType=void 0;var a=n(r(0));let o;t.DocType=o,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(o||(t.DocType=o={}));const i={[o.Tutorial]:"#b16bfc",[o.HowTo]:"#EC0088",[o.Reference]:"#ff823a",[o.Explanation]:"#29C0AF"};t.DocTag=({type:e,marginBottom:t})=>a.default.createElement(a.default.Fragment,null,a.default.createElement("span",{style:{border:"2px solid "+i[e]||!1,borderRadius:"5px",color:i[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==t?t:30,display:"inline-block"}},String(e)))}}]);