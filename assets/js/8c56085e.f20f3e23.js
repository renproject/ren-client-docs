(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{196:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),o=(t(0),t(415)),a=t(416);const c={title:"RenProxyAdmin"},i={unversionedId:"darknode-sol/Governance/RenProxyAdmin",id:"darknode-sol/Governance/RenProxyAdmin",isDocsHomePage:!1,title:"RenProxyAdmin",description:"Contract: RenProxyAdmin",source:"@site/contracts/darknode-sol/Governance/RenProxyAdmin.mdx",slug:"/darknode-sol/Governance/RenProxyAdmin",permalink:"/ren-client-docs/contracts/darknode-sol/Governance/RenProxyAdmin",editUrl:"https://github.com/renproject/ren-client-docs/edit/master/contracts/darknode-sol/Governance/RenProxyAdmin.mdx",version:"current"},l=[{value:"Contract: <code>RenProxyAdmin</code>",id:"contract-renproxyadmin",children:[]}],d={toc:l};function u({components:e,...n}){return Object(o.mdx)("wrapper",Object(r.default)({},d,n,{components:e,mdxType:"MDXLayout"}),Object(o.mdx)(a.DocTag,{type:a.DocType.Reference,mdxType:"DocTag"}),Object(o.mdx)("h2",{id:"contract-renproxyadmin"},"Contract: ",Object(o.mdx)("inlineCode",{parentName:"h2"},"RenProxyAdmin")),Object(o.mdx)("p",null,"Proxies restrict the proxy's owner from calling functions from the\ndelegate contract logic. The ProxyAdmin contract allows single account to be\nthe governance address of both the proxy and the delegate contract logic."),Object(o.mdx)("p",null,"Inherits from:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"ProxyAdmin")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"OpenZeppelinUpgradesOwnable"))),Object(o.mdx)("hr",null))}u.isMDXComponent=!0},415:function(e,n,t){"use strict";t.r(n),t.d(n,"MDXContext",(function(){return u})),t.d(n,"MDXProvider",(function(){return s})),t.d(n,"mdx",(function(){return b})),t.d(n,"useMDXComponents",(function(){return m})),t.d(n,"withMDXComponents",(function(){return p}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),p=function(e){return function(n){var t=m(n.components);return o.a.createElement(e,c({},n,{components:t}))}},m=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=m(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},y=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),u=m(t),p=r,s=u["".concat(c,".").concat(p)]||u[p]||f[p]||a;return t?o.a.createElement(s,l(l({ref:n},i),{},{components:t})):o.a.createElement(s,l({ref:n},i))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=y;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var d=2;d<a;d++)c[d]=t[d];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},416:function(e,n,t){"use strict";var r=t(4).default;Object.defineProperty(n,"__esModule",{value:!0}),n.DocTag=n.DocType=void 0;var o,a,c=r(t(0));n.DocType=a,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(a||(n.DocType=a={}));var i=((o={})[a.Tutorial]="#b16bfc",o[a.HowTo]="#EC0088",o[a.Reference]="#ff823a",o[a.Explanation]="#29C0AF",o);n.DocTag=function(e){var n=e.type,t=e.marginBottom;return c.default.createElement(c.default.Fragment,null,c.default.createElement("span",{style:{border:"2px solid "+i[n]||!1,borderRadius:"5px",color:i[n]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==t?t:30,display:"inline-block"}},String(n)))}}}]);