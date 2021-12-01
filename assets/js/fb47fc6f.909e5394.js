(window.webpackJsonp=window.webpackJsonp||[]).push([[294],{327:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),a=(n(0),n(415)),o=n(416);const c={title:"GatewayStateV2"},i={unversionedId:"gateway-sol/Gateway/GatewayStateV2",id:"gateway-sol/Gateway/GatewayStateV2",isDocsHomePage:!1,title:"GatewayStateV2",description:"Contract: GatewayStateV2",source:"@site/contracts/gateway-sol/Gateway/GatewayStateV2.mdx",slug:"/gateway-sol/Gateway/GatewayStateV2",permalink:"/ren-client-docs/contracts/gateway-sol/Gateway/GatewayStateV2",editUrl:"https://github.com/renproject/ren-client-docs/edit/master/contracts/gateway-sol/Gateway/GatewayStateV2.mdx",version:"current",sidebar:"contracts",previous:{title:"GatewayStateV1",permalink:"/ren-client-docs/contracts/gateway-sol/Gateway/GatewayStateV1"},next:{title:"LockGatewayLogicV1",permalink:"/ren-client-docs/contracts/gateway-sol/Gateway/LockGatewayLogicV1"}},l=[{value:"Contract: <code>GatewayStateV2</code>",id:"contract-gatewaystatev2",children:[]},{value:"Variables",id:"variables",children:[{value:"<strong><code>burns</code></strong>: <em><code>mapping(uint256 =&gt; struct GatewayStateV2.Burn)</code></em>",id:"burns-mappinguint256--struct-gatewaystatev2burn",children:[]},{value:"<strong><code>selectorHash</code></strong>: <em><code>bytes32</code></em>",id:"selectorhash-bytes32",children:[]},{value:"<strong><code>_legacy_mintAuthority</code></strong>: <em><code>address</code></em>",id:"_legacy_mintauthority-address",children:[]}]}],d={toc:l};function s({components:e,...t}){return Object(a.mdx)("wrapper",Object(r.default)({},d,t,{components:e,mdxType:"MDXLayout"}),Object(a.mdx)(o.DocTag,{type:o.DocType.Reference,mdxType:"DocTag"}),Object(a.mdx)("h2",{id:"contract-gatewaystatev2"},"Contract: ",Object(a.mdx)("inlineCode",{parentName:"h2"},"GatewayStateV2")),Object(a.mdx)("hr",null),Object(a.mdx)("br",null),Object(a.mdx)("h2",{id:"variables"},"Variables"),Object(a.mdx)("h3",{id:"burns-mappinguint256--struct-gatewaystatev2burn"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"burns")),": ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"mapping(uint256 => struct GatewayStateV2.Burn)"))),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"selectorhash-bytes32"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"selectorHash")),": ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"bytes32"))),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"_legacy_mintauthority-address"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"_legacy_mintAuthority")),": ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"address"))),Object(a.mdx)("hr",null))}s.isMDXComponent=!0},415:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return s})),n.d(t,"MDXProvider",(function(){return p})),n.d(t,"mdx",(function(){return f})),n.d(t,"useMDXComponents",(function(){return m})),n.d(t,"withMDXComponents",(function(){return u}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){return function(t){var n=m(t.components);return a.a.createElement(e,c({},t,{components:n}))}},m=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),s=m(n),u=r,p=s["".concat(c,".").concat(u)]||s[u]||y[u]||o;return n?a.a.createElement(p,l(l({ref:t},i),{},{components:n})):a.a.createElement(p,l({ref:t},i))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var d=2;d<o;d++)c[d]=n[d];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},416:function(e,t,n){"use strict";var r=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.DocTag=t.DocType=void 0;var a,o,c=r(n(0));t.DocType=o,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(o||(t.DocType=o={}));var i=((a={})[o.Tutorial]="#b16bfc",a[o.HowTo]="#EC0088",a[o.Reference]="#ff823a",a[o.Explanation]="#29C0AF",a);t.DocTag=function(e){var t=e.type,n=e.marginBottom;return c.default.createElement(c.default.Fragment,null,c.default.createElement("span",{style:{border:"2px solid "+i[t]||!1,borderRadius:"5px",color:i[t]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==n?n:30,display:"inline-block"}},String(t)))}}}]);