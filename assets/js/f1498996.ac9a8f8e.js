(window.webpackJsonp=window.webpackJsonp||[]).push([[347],{379:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(3),o=(n(0),n(486)),a=n(487);const c={title:"IBurnGateway"},i={unversionedId:"darknode-sol/Gateway/interfaces/IBurnGateway",id:"darknode-sol/Gateway/interfaces/IBurnGateway",isDocsHomePage:!1,title:"IBurnGateway",description:"Contract: IBurnGateway",source:"@site/contracts/darknode-sol/Gateway/interfaces/IBurnGateway.mdx",slug:"/darknode-sol/Gateway/interfaces/IBurnGateway",permalink:"/ren-client-docs/contracts/darknode-sol/Gateway/interfaces/IBurnGateway",version:"current"},u=[{value:"Contract: <code>IBurnGateway</code>",id:"contract-iburngateway",children:[]},{value:"Functions",id:"functions",children:[{value:"<strong><code>burn</code></strong> <em><code>(bytes _to, uint256 _amountScaled) \u2192 uint256</code></em> (external)",id:"burn-bytes-_to-uint256-_amountscaled-\u2192-uint256-external",children:[]},{value:"<strong><code>burnFee</code></strong> <em><code>() \u2192 uint256</code></em> (external)",id:"burnfee--\u2192-uint256-external",children:[]}]}],l={toc:u};function d({components:e,...t}){return Object(o.mdx)("wrapper",Object(r.default)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.mdx)(a.DocTag,{type:a.DocType.Reference,mdxType:"DocTag"}),Object(o.mdx)("h2",{id:"contract-iburngateway"},"Contract: ",Object(o.mdx)("inlineCode",{parentName:"h2"},"IBurnGateway")),Object(o.mdx)("hr",null),Object(o.mdx)("br",null),Object(o.mdx)("h2",{id:"functions"},"Functions"),Object(o.mdx)("h3",{id:"burn-bytes-_to-uint256-_amountscaled-\u2192-uint256-external"},Object(o.mdx)("strong",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"strong"},"burn"))," ",Object(o.mdx)("em",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"em"},"(bytes _to, uint256 _amountScaled) \u2192 uint256"))," (external)"),Object(o.mdx)("hr",null),Object(o.mdx)("h3",{id:"burnfee--\u2192-uint256-external"},Object(o.mdx)("strong",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"strong"},"burnFee"))," ",Object(o.mdx)("em",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"em"},"() \u2192 uint256"))," (external)"),Object(o.mdx)("hr",null))}d.isMDXComponent=!0},486:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return d})),n.d(t,"MDXProvider",(function(){return m})),n.d(t,"mdx",(function(){return y})),n.d(t,"useMDXComponents",(function(){return s})),n.d(t,"withMDXComponents",(function(){return p}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),p=function(e){return function(t){var n=s(t.components);return o.a.createElement(e,c({},t,{components:n}))}},s=function(e){var t=o.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},m=function(e){var t=s(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=s(n),p=r,m=d["".concat(c,".").concat(p)]||d[p]||f[p]||a;return n?o.a.createElement(m,u(u({ref:t},i),{},{components:n})):o.a.createElement(m,u({ref:t},i))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},487:function(e,t,n){"use strict";var r=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.DocTag=t.DocType=void 0;var o=r(n(0));let a;t.DocType=a,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(a||(t.DocType=a={}));const c={[a.Tutorial]:"#b16bfc",[a.HowTo]:"#EC0088",[a.Reference]:"#ff823a",[a.Explanation]:"#29C0AF"};t.DocTag=({type:e,marginBottom:t})=>o.default.createElement(o.default.Fragment,null,o.default.createElement("span",{style:{border:"2px solid "+c[e]||!1,borderRadius:"5px",color:c[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==t?t:30,display:"inline-block"}},String(e)))}}]);