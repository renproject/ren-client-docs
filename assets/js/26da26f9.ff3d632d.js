(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{415:function(e,r,t){"use strict";t.r(r),t.d(r,"MDXContext",(function(){return u})),t.d(r,"MDXProvider",(function(){return y})),t.d(r,"mdx",(function(){return b})),t.d(r,"useMDXComponents",(function(){return s})),t.d(r,"withMDXComponents",(function(){return p}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(){return(i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),p=function(e){return function(r){var t=s(r.components);return o.a.createElement(e,i({},r,{components:t}))}},s=function(e){var r=o.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},y=function(e){var r=s(e.components);return o.a.createElement(u.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=s(t),p=n,y=u["".concat(i,".").concat(p)]||u[p]||m[p]||a;return t?o.a.createElement(y,l(l({ref:r},c),{},{components:t})):o.a.createElement(y,l({ref:r},c))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var d=2;d<a;d++)i[d]=t[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},416:function(e,r,t){"use strict";var n=t(4).default;Object.defineProperty(r,"__esModule",{value:!0}),r.DocTag=r.DocType=void 0;var o,a,i=n(t(0));r.DocType=a,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(a||(r.DocType=a={}));var c=((o={})[a.Tutorial]="#b16bfc",o[a.HowTo]="#EC0088",o[a.Reference]="#ff823a",o[a.Explanation]="#29C0AF",o);r.DocTag=function(e){var r=e.type,t=e.marginBottom;return i.default.createElement(i.default.Fragment,null,i.default.createElement("span",{style:{border:"2px solid "+c[r]||!1,borderRadius:"5px",color:c[r]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==t?t:30,display:"inline-block"}},String(r)))}},86:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return l})),t.d(r,"toc",(function(){return d})),t.d(r,"default",(function(){return p}));var n=t(3),o=t(9),a=(t(0),t(415)),i=t(416),c={title:"DarknodeRegistryProxy"},l={unversionedId:"darknode-sol/DarknodeRegistry/DarknodeRegistryProxy",id:"darknode-sol/DarknodeRegistry/DarknodeRegistryProxy",isDocsHomePage:!1,title:"DarknodeRegistryProxy",description:"Contract: DarknodeRegistryProxy",source:"@site/contracts/darknode-sol/DarknodeRegistry/DarknodeRegistryProxy.mdx",slug:"/darknode-sol/DarknodeRegistry/DarknodeRegistryProxy",permalink:"/ren-client-docs/contracts/darknode-sol/DarknodeRegistry/DarknodeRegistryProxy",editUrl:"https://github.com/renproject/ren-client-docs/edit/master/contracts/darknode-sol/DarknodeRegistry/DarknodeRegistryProxy.mdx",version:"current"},d=[{value:"Contract: <code>DarknodeRegistryProxy</code>",id:"contract-darknoderegistryproxy",children:[]}],u={toc:d};function p(e){var r=e.components,t=Object(o.default)(e,["components"]);return Object(a.mdx)("wrapper",Object(n.default)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(a.mdx)(i.DocTag,{type:i.DocType.Reference,mdxType:"DocTag"}),Object(a.mdx)("h2",{id:"contract-darknoderegistryproxy"},"Contract: ",Object(a.mdx)("inlineCode",{parentName:"h2"},"DarknodeRegistryProxy")),Object(a.mdx)("p",null,"Inherits from:"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"InitializableAdminUpgradeabilityProxy")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"InitializableUpgradeabilityProxy")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"BaseAdminUpgradeabilityProxy")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"BaseUpgradeabilityProxy")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"Proxy"))),Object(a.mdx)("hr",null))}p.isMDXComponent=!0}}]);