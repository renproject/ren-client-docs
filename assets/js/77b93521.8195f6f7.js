(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{201:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return m}));var r=n(3),a=n(8),o=(n(0),n(489)),i={id:"asset-amount",title:"AssetAmount"},c={unversionedId:"subgraph/objects/asset-amount",id:"subgraph/objects/asset-amount",isDocsHomePage:!1,title:"AssetAmount",description:"No description",source:"@site/subgraph/subgraph/objects/asset-amount.mdx",slug:"/subgraph/objects/asset-amount",permalink:"/ren-client-docs/subgraph/subgraph/objects/asset-amount",version:"current",sidebar:"subgraph",previous:{title:"Asset",permalink:"/ren-client-docs/subgraph/subgraph/objects/asset"},next:{title:"_Block_",permalink:"/ren-client-docs/subgraph/subgraph/objects/block"}},s=[{value:"Fields",id:"fields",children:[]}],u={toc:s};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.mdx)("wrapper",Object(r.default)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"No description"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-graphql"},"type AssetAmount {\n  id: ID!\n  symbol: String!\n  asset: Asset\n  amount: BigInt!\n  amountInEth: BigDecimal!\n  amountInUsd: BigDecimal!\n}\n")),Object(o.mdx)("h3",{id:"fields"},"Fields"),Object(o.mdx)("h4",{id:"id-id"},Object(o.mdx)("inlineCode",{parentName:"h4"},"id")," (",Object(o.mdx)("a",{parentName:"h4",href:"/subgraph/scalars/id"},Object(o.mdx)("inlineCode",{parentName:"a"},"ID!")),")"),Object(o.mdx)("h4",{id:"symbol-string"},Object(o.mdx)("inlineCode",{parentName:"h4"},"symbol")," (",Object(o.mdx)("a",{parentName:"h4",href:"/subgraph/scalars/string"},Object(o.mdx)("inlineCode",{parentName:"a"},"String!")),")"),Object(o.mdx)("h4",{id:"asset-asset"},Object(o.mdx)("inlineCode",{parentName:"h4"},"asset")," (",Object(o.mdx)("a",{parentName:"h4",href:"/subgraph/objects/asset"},Object(o.mdx)("inlineCode",{parentName:"a"},"Asset")),")"),Object(o.mdx)("h4",{id:"amount-bigint"},Object(o.mdx)("inlineCode",{parentName:"h4"},"amount")," (",Object(o.mdx)("a",{parentName:"h4",href:"/subgraph/scalars/big-int"},Object(o.mdx)("inlineCode",{parentName:"a"},"BigInt!")),")"),Object(o.mdx)("h4",{id:"amountineth-bigdecimal"},Object(o.mdx)("inlineCode",{parentName:"h4"},"amountInEth")," (",Object(o.mdx)("a",{parentName:"h4",href:"/subgraph/scalars/big-decimal"},Object(o.mdx)("inlineCode",{parentName:"a"},"BigDecimal!")),")"),Object(o.mdx)("h4",{id:"amountinusd-bigdecimal"},Object(o.mdx)("inlineCode",{parentName:"h4"},"amountInUsd")," (",Object(o.mdx)("a",{parentName:"h4",href:"/subgraph/scalars/big-decimal"},Object(o.mdx)("inlineCode",{parentName:"a"},"BigDecimal!")),")"))}m.isMDXComponent=!0},489:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return m})),n.d(t,"MDXProvider",(function(){return l})),n.d(t,"mdx",(function(){return h})),n.d(t,"useMDXComponents",(function(){return d})),n.d(t,"withMDXComponents",(function(){return p}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=a.a.createContext({}),p=function(e){return function(t){var n=d(t.components);return a.a.createElement(e,i({},t,{components:n}))}},d=function(e){var t=a.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=d(e.components);return a.a.createElement(m.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=d(n),p=r,l=m["".concat(i,".").concat(p)]||m[p]||b[p]||o;return n?a.a.createElement(l,s(s({ref:t},c),{},{components:n})):a.a.createElement(l,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);