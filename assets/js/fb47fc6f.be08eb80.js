"use strict";(self.webpackChunkren_client_docs=self.webpackChunkren_client_docs||[]).push([[1427],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return y}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),y=a,m=d["".concat(l,".").concat(y)]||d[y]||p[y]||o;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65480:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),c=n(93454),i=["components"],l={title:"GatewayStateV2"},s=void 0,u={unversionedId:"gateway-sol/Gateway/GatewayStateV2",id:"gateway-sol/Gateway/GatewayStateV2",title:"GatewayStateV2",description:"Contract: GatewayStateV2",source:"@site/contracts/gateway-sol/Gateway/GatewayStateV2.mdx",sourceDirName:"gateway-sol/Gateway",slug:"/gateway-sol/Gateway/GatewayStateV2",permalink:"/ren-client-docs/contracts/gateway-sol/Gateway/GatewayStateV2",editUrl:"https://github.com/renproject/ren-client-docs/edit/master/contracts/gateway-sol/Gateway/GatewayStateV2.mdx",tags:[],version:"current",frontMatter:{title:"GatewayStateV2"},sidebar:"contracts",previous:{title:"GatewayStateV1",permalink:"/ren-client-docs/contracts/gateway-sol/Gateway/GatewayStateV1"},next:{title:"LockGatewayLogicV1",permalink:"/ren-client-docs/contracts/gateway-sol/Gateway/LockGatewayLogicV1"}},p=[{value:"Contract: <code>GatewayStateV2</code>",id:"contract-gatewaystatev2",children:[],level:2},{value:"Variables",id:"variables",children:[{value:"<strong><code>burns</code></strong>: <em><code>mapping(uint256 =&gt; struct GatewayStateV2.Burn)</code></em>",id:"burns-mappinguint256--struct-gatewaystatev2burn",children:[],level:3},{value:"<strong><code>selectorHash</code></strong>: <em><code>bytes32</code></em>",id:"selectorhash-bytes32",children:[],level:3},{value:"<strong><code>_legacy_mintAuthority</code></strong>: <em><code>address</code></em>",id:"_legacy_mintauthority-address",children:[],level:3}],level:2}],d={toc:p};function y(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(c.G,{type:c.e.Reference,mdxType:"DocTag"}),(0,o.kt)("h2",{id:"contract-gatewaystatev2"},"Contract: ",(0,o.kt)("inlineCode",{parentName:"h2"},"GatewayStateV2")),(0,o.kt)("hr",null),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"variables"},"Variables"),(0,o.kt)("h3",{id:"burns-mappinguint256--struct-gatewaystatev2burn"},(0,o.kt)("strong",{parentName:"h3"},(0,o.kt)("inlineCode",{parentName:"strong"},"burns")),": ",(0,o.kt)("em",{parentName:"h3"},(0,o.kt)("inlineCode",{parentName:"em"},"mapping(uint256 => struct GatewayStateV2.Burn)"))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"selectorhash-bytes32"},(0,o.kt)("strong",{parentName:"h3"},(0,o.kt)("inlineCode",{parentName:"strong"},"selectorHash")),": ",(0,o.kt)("em",{parentName:"h3"},(0,o.kt)("inlineCode",{parentName:"em"},"bytes32"))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"_legacy_mintauthority-address"},(0,o.kt)("strong",{parentName:"h3"},(0,o.kt)("inlineCode",{parentName:"strong"},"_legacy_mintAuthority")),": ",(0,o.kt)("em",{parentName:"h3"},(0,o.kt)("inlineCode",{parentName:"em"},"address"))),(0,o.kt)("hr",null))}y.isMDXComponent=!0},93454:function(e,t,n){n.d(t,{G:function(){return i},e:function(){return a}});var r,a,o=n(67294);!function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(a||(a={}));var c=((r={})[a.Tutorial]="#b48ead",r[a.HowTo]="#69a8b9",r[a.Reference]="#bf616a",r[a.Explanation]="#d2b06c",r),i=function(e){var t=e.type,n=e.marginBottom;return o.createElement(o.Fragment,null,o.createElement("span",{style:{border:"2px solid "+c[t]||0,borderRadius:"5px",color:c[t]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==n?n:30,display:"inline-block"}},String(t)))}}}]);