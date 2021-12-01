(window.webpackJsonp=window.webpackJsonp||[]).push([[282],{315:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),a=(n(0),n(415)),d=n(416);const o={title:"IGatewayRegistry"},s={unversionedId:"darknode-sol/Gateway/interfaces/IGatewayRegistry",id:"darknode-sol/Gateway/interfaces/IGatewayRegistry",isDocsHomePage:!1,title:"IGatewayRegistry",description:"Contract: IGatewayRegistry",source:"@site/contracts/darknode-sol/Gateway/interfaces/IGatewayRegistry.mdx",slug:"/darknode-sol/Gateway/interfaces/IGatewayRegistry",permalink:"/ren-client-docs/contracts/darknode-sol/Gateway/interfaces/IGatewayRegistry",editUrl:"https://github.com/renproject/ren-client-docs/edit/master/contracts/darknode-sol/Gateway/interfaces/IGatewayRegistry.mdx",version:"current"},c=[{value:"Contract: <code>IGatewayRegistry</code>",id:"contract-igatewayregistry",children:[]},{value:"Functions",id:"functions",children:[{value:"<strong><code>getGateways</code></strong> <em><code>(address _start, uint256 _count) \u2192 address[]</code></em> (external)",id:"getgateways-address-_start-uint256-_count-\u2192-address-external",children:[]},{value:"<strong><code>getRenTokens</code></strong> <em><code>(address _start, uint256 _count) \u2192 address[]</code></em> (external)",id:"getrentokens-address-_start-uint256-_count-\u2192-address-external",children:[]},{value:"<strong><code>getGatewayByToken</code></strong> <em><code>(address _tokenAddress) \u2192 contract IGateway</code></em> (external)",id:"getgatewaybytoken-address-_tokenaddress-\u2192-contract-igateway-external",children:[]},{value:"<strong><code>getGatewayBySymbol</code></strong> <em><code>(string _tokenSymbol) \u2192 contract IGateway</code></em> (external)",id:"getgatewaybysymbol-string-_tokensymbol-\u2192-contract-igateway-external",children:[]},{value:"<strong><code>getTokenBySymbol</code></strong> <em><code>(string _tokenSymbol) \u2192 contract IERC20</code></em> (external)",id:"gettokenbysymbol-string-_tokensymbol-\u2192-contract-ierc20-external",children:[]}]},{value:"Events",id:"events",children:[{value:"<strong><code>LogGatewayRegistered</code></strong> <em><code>(string _symbol, string _indexedSymbol, address _tokenAddress, address _gatewayAddress)</code></em>",id:"loggatewayregistered-string-_symbol-string-_indexedsymbol-address-_tokenaddress-address-_gatewayaddress",children:[]},{value:"<strong><code>LogGatewayDeregistered</code></strong> <em><code>(string _symbol, string _indexedSymbol, address _tokenAddress, address _gatewayAddress)</code></em>",id:"loggatewayderegistered-string-_symbol-string-_indexedsymbol-address-_tokenaddress-address-_gatewayaddress",children:[]},{value:"<strong><code>LogGatewayUpdated</code></strong> <em><code>(address _tokenAddress, address _currentGatewayAddress, address _newGatewayAddress)</code></em>",id:"loggatewayupdated-address-_tokenaddress-address-_currentgatewayaddress-address-_newgatewayaddress",children:[]}]}],i={toc:c};function l({components:e,...t}){return Object(a.mdx)("wrapper",Object(r.default)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(a.mdx)(d.DocTag,{type:d.DocType.Reference,mdxType:"DocTag"}),Object(a.mdx)("h2",{id:"contract-igatewayregistry"},"Contract: ",Object(a.mdx)("inlineCode",{parentName:"h2"},"IGatewayRegistry")),Object(a.mdx)("p",null,"GatewayRegistry is a mapping from assets to their associated\nRenERC20 and Gateway contracts."),Object(a.mdx)("hr",null),Object(a.mdx)("br",null),Object(a.mdx)("h2",{id:"functions"},"Functions"),Object(a.mdx)("h3",{id:"getgateways-address-_start-uint256-_count-\u2192-address-external"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"getGateways"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(address _start, uint256 _count) \u2192 address[]"))," (external)"),Object(a.mdx)("p",null,"To get all the registered gateways use count = 0."),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"getrentokens-address-_start-uint256-_count-\u2192-address-external"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"getRenTokens"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(address _start, uint256 _count) \u2192 address[]"))," (external)"),Object(a.mdx)("p",null,"To get all the registered RenERC20s use count = 0."),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"getgatewaybytoken-address-_tokenaddress-\u2192-contract-igateway-external"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"getGatewayByToken"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(address _tokenAddress) \u2192 contract IGateway"))," (external)"),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"Params")),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"_tokenAddress"),": The address of the RenERC20 contract.")),Object(a.mdx)("p",null,"Returns the Gateway contract for the given RenERC20\naddress."),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"getgatewaybysymbol-string-_tokensymbol-\u2192-contract-igateway-external"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"getGatewayBySymbol"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(string _tokenSymbol) \u2192 contract IGateway"))," (external)"),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"Params")),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"_tokenSymbol"),": The symbol of the RenERC20 contract.")),Object(a.mdx)("p",null,"Returns the Gateway contract for the given RenERC20\nsymbol."),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"gettokenbysymbol-string-_tokensymbol-\u2192-contract-ierc20-external"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"getTokenBySymbol"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(string _tokenSymbol) \u2192 contract IERC20"))," (external)"),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"Params")),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"_tokenSymbol"),": The symbol of the RenERC20 contract to\nlookup.")),Object(a.mdx)("p",null,"Returns the RenERC20 address for the given token symbol."),Object(a.mdx)("hr",null),Object(a.mdx)("br",null),Object(a.mdx)("h2",{id:"events"},"Events"),Object(a.mdx)("h3",{id:"loggatewayregistered-string-_symbol-string-_indexedsymbol-address-_tokenaddress-address-_gatewayaddress"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"LogGatewayRegistered"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(string _symbol, string _indexedSymbol, address _tokenAddress, address _gatewayAddress)"))),Object(a.mdx)("p",null,Object(a.mdx)("em",{parentName:"p"},"The symbol is included twice because strings have to be hashed\nfirst in order to be used as a log index/topic.")),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"loggatewayderegistered-string-_symbol-string-_indexedsymbol-address-_tokenaddress-address-_gatewayaddress"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"LogGatewayDeregistered"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(string _symbol, string _indexedSymbol, address _tokenAddress, address _gatewayAddress)"))),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"loggatewayupdated-address-_tokenaddress-address-_currentgatewayaddress-address-_newgatewayaddress"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"LogGatewayUpdated"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(address _tokenAddress, address _currentGatewayAddress, address _newGatewayAddress)"))),Object(a.mdx)("hr",null))}l.isMDXComponent=!0},415:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return l})),n.d(t,"MDXProvider",(function(){return y})),n.d(t,"mdx",(function(){return p})),n.d(t,"useMDXComponents",(function(){return g})),n.d(t,"withMDXComponents",(function(){return m}));var r=n(0),a=n.n(r);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},d=Object.keys(e);for(r=0;r<d.length;r++)n=d[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(r=0;r<d.length;r++)n=d[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),m=function(e){return function(t){var n=g(t.components);return a.a.createElement(e,o({},t,{components:n}))}},g=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},y=function(e){var t=g(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,d=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),l=g(n),m=r,y=l["".concat(o,".").concat(m)]||l[m]||u[m]||d;return n?a.a.createElement(y,c(c({ref:t},s),{},{components:n})):a.a.createElement(y,c({ref:t},s))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var d=n.length,o=new Array(d);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var i=2;i<d;i++)o[i]=n[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},416:function(e,t,n){"use strict";var r=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.DocTag=t.DocType=void 0;var a,d,o=r(n(0));t.DocType=d,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(d||(t.DocType=d={}));var s=((a={})[d.Tutorial]="#b16bfc",a[d.HowTo]="#EC0088",a[d.Reference]="#ff823a",a[d.Explanation]="#29C0AF",a);t.DocTag=function(e){var t=e.type,n=e.marginBottom;return o.default.createElement(o.default.Fragment,null,o.default.createElement("span",{style:{border:"2px solid "+s[t]||!1,borderRadius:"5px",color:s[t]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==n?n:30,display:"inline-block"}},String(t)))}}}]);