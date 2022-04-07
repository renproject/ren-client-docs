"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3934],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),p=i,h=u["".concat(s,".").concat(p)]||u[p]||m[p]||o;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var d=2;d<o;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},38261:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return d},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=n(93454),l=["components"],s={title:"ERC20WithPermit"},d=void 0,c={unversionedId:"darknode-sol/Gateway/ERC20WithPermit",id:"darknode-sol/Gateway/ERC20WithPermit",title:"ERC20WithPermit",description:"Contract: ERC20WithPermit",source:"@site/contracts/darknode-sol/Gateway/ERC20WithPermit.mdx",sourceDirName:"darknode-sol/Gateway",slug:"/darknode-sol/Gateway/ERC20WithPermit",permalink:"/ren-client-docs/contracts/darknode-sol/Gateway/ERC20WithPermit",editUrl:"https://github.com/renproject/ren-client-docs/edit/master/contracts/darknode-sol/Gateway/ERC20WithPermit.mdx",tags:[],version:"current",frontMatter:{title:"ERC20WithPermit"}},m=[{value:"Contract: <code>ERC20WithPermit</code>",id:"contract-erc20withpermit",children:[],level:2},{value:"Variables",id:"variables",children:[{value:"<strong><code>nonces</code></strong>: <em><code>mapping(address =&gt; uint256)</code></em>",id:"nonces-mappingaddress--uint256",children:[],level:3},{value:"<strong><code>version</code></strong>: <em><code>string</code></em>",id:"version-string",children:[],level:3},{value:"<strong><code>DOMAIN_SEPARATOR</code></strong>: <em><code>bytes32</code></em>",id:"domain_separator-bytes32",children:[],level:3},{value:"<strong><code>PERMIT_TYPEHASH</code></strong>: <em><code>bytes32</code></em>",id:"permit_typehash-bytes32",children:[],level:3}],level:2},{value:"Functions",id:"functions",children:[{value:"<strong><code>initialize</code></strong> <em><code>(uint256 _chainId, string _version, string _name, string _symbol, uint8 _decimals)</code></em> (public)",id:"initialize-uint256-_chainid-string-_version-string-_name-string-_symbol-uint8-_decimals-public",children:[],level:3},{value:"<strong><code>permit</code></strong> <em><code>(address holder, address spender, uint256 nonce, uint256 expiry, bool allowed, uint8 v, bytes32 r, bytes32 s)</code></em> (external)",id:"permit-address-holder-address-spender-uint256-nonce-uint256-expiry-bool-allowed-uint8-v-bytes32-r-bytes32-s-external",children:[],level:3}],level:2}],u={toc:m};function p(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.G,{type:a.e.Reference,mdxType:"DocTag"}),(0,o.kt)("h2",{id:"contract-erc20withpermit"},"Contract: ",(0,o.kt)("inlineCode",{parentName:"h2"},"ERC20WithPermit")),(0,o.kt)("p",null,"Taken from the DAI token."),(0,o.kt)("p",null,"Inherits from:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ERC20Detailed")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ERC20")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"IERC20")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Context")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Initializable"))),(0,o.kt)("hr",null),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"variables"},"Variables"),(0,o.kt)("h3",{id:"nonces-mappingaddress--uint256"},(0,o.kt)("strong",{parentName:"h3"},(0,o.kt)("inlineCode",{parentName:"strong"},"nonces")),": ",(0,o.kt)("em",{parentName:"h3"},(0,o.kt)("inlineCode",{parentName:"em"},"mapping(address => uint256)"))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"version-string"},(0,o.kt)("strong",{parentName:"h3"},(0,o.kt)("inlineCode",{parentName:"strong"},"version")),": ",(0,o.kt)("em",{parentName:"h3"},(0,o.kt)("inlineCode",{parentName:"em"},"string"))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"domain_separator-bytes32"},(0,o.kt)("strong",{parentName:"h3"},(0,o.kt)("inlineCode",{parentName:"strong"},"DOMAIN_SEPARATOR")),": ",(0,o.kt)("em",{parentName:"h3"},(0,o.kt)("inlineCode",{parentName:"em"},"bytes32"))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"permit_typehash-bytes32"},(0,o.kt)("strong",{parentName:"h3"},(0,o.kt)("inlineCode",{parentName:"strong"},"PERMIT_TYPEHASH")),": ",(0,o.kt)("em",{parentName:"h3"},(0,o.kt)("inlineCode",{parentName:"em"},"bytes32"))),(0,o.kt)("hr",null),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"initialize-uint256-_chainid-string-_version-string-_name-string-_symbol-uint8-_decimals-public"},(0,o.kt)("strong",{parentName:"h3"},(0,o.kt)("inlineCode",{parentName:"strong"},"initialize"))," ",(0,o.kt)("em",{parentName:"h3"},(0,o.kt)("inlineCode",{parentName:"em"},"(uint256 _chainId, string _version, string _name, string _symbol, uint8 _decimals)"))," (public)"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"permit-address-holder-address-spender-uint256-nonce-uint256-expiry-bool-allowed-uint8-v-bytes32-r-bytes32-s-external"},(0,o.kt)("strong",{parentName:"h3"},(0,o.kt)("inlineCode",{parentName:"strong"},"permit"))," ",(0,o.kt)("em",{parentName:"h3"},(0,o.kt)("inlineCode",{parentName:"em"},"(address holder, address spender, uint256 nonce, uint256 expiry, bool allowed, uint8 v, bytes32 r, bytes32 s)"))," (external)"),(0,o.kt)("hr",null))}p.isMDXComponent=!0},93454:function(e,t,n){n.d(t,{G:function(){return l},e:function(){return i}});var r,i,o=n(67294);!function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(i||(i={}));var a=((r={})[i.Tutorial]="#b48ead",r[i.HowTo]="#69a8b9",r[i.Reference]="#bf616a",r[i.Explanation]="#d2b06c",r),l=function(e){var t=e.type,n=e.marginBottom;return o.createElement(o.Fragment,null,o.createElement("span",{style:{border:"2px solid "+a[t]||0,borderRadius:"5px",color:a[t]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==n?n:30,display:"inline-block"}},String(t)))}}}]);