(window.webpackJsonp=window.webpackJsonp||[]).push([[287],{319:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),i=(n(0),n(486)),o=n(487);const a={title:"String"},c={unversionedId:"gateway-sol/libraries/String",id:"gateway-sol/libraries/String",isDocsHomePage:!1,title:"String",description:"Contract: String",source:"@site/contracts/gateway-sol/libraries/String.mdx",slug:"/gateway-sol/libraries/String",permalink:"/ren-client-docs/contracts/gateway-sol/libraries/String",version:"current"},s=[{value:"Contract: <code>String</code>",id:"contract-string",children:[]},{value:"Functions",id:"functions",children:[{value:"<strong><code>fromUint</code></strong> <em><code>(uint256 _i) \u2192 string</code></em> (internal)",id:"fromuint-uint256-_i-\u2192-string-internal",children:[]},{value:"<strong><code>fromBytes32</code></strong> <em><code>(bytes32 _value) \u2192 string</code></em> (internal)",id:"frombytes32-bytes32-_value-\u2192-string-internal",children:[]},{value:"<strong><code>fromAddress</code></strong> <em><code>(address _addr) \u2192 string</code></em> (internal)",id:"fromaddress-address-_addr-\u2192-string-internal",children:[]},{value:"<strong><code>add8</code></strong> <em><code>(string a, string b, string c, string d, string e, string f, string g, string h) \u2192 string</code></em> (internal)",id:"add8-string-a-string-b-string-c-string-d-string-e-string-f-string-g-string-h-\u2192-string-internal",children:[]}]}],d={toc:s};function l({components:e,...t}){return Object(i.mdx)("wrapper",Object(r.default)({},d,t,{components:e,mdxType:"MDXLayout"}),Object(i.mdx)(o.DocTag,{type:o.DocType.Reference,mdxType:"DocTag"}),Object(i.mdx)("h2",{id:"contract-string"},"Contract: ",Object(i.mdx)("inlineCode",{parentName:"h2"},"String")),Object(i.mdx)("hr",null),Object(i.mdx)("br",null),Object(i.mdx)("h2",{id:"functions"},"Functions"),Object(i.mdx)("h3",{id:"fromuint-uint256-_i-\u2192-string-internal"},Object(i.mdx)("strong",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"strong"},"fromUint"))," ",Object(i.mdx)("em",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"em"},"(uint256 _i) \u2192 string"))," (internal)"),Object(i.mdx)("p",null,"Convert a uint value to its decimal string representation"),Object(i.mdx)("hr",null),Object(i.mdx)("h3",{id:"frombytes32-bytes32-_value-\u2192-string-internal"},Object(i.mdx)("strong",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"strong"},"fromBytes32"))," ",Object(i.mdx)("em",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"em"},"(bytes32 _value) \u2192 string"))," (internal)"),Object(i.mdx)("p",null,"Convert a bytes32 value to its hex string representation."),Object(i.mdx)("hr",null),Object(i.mdx)("h3",{id:"fromaddress-address-_addr-\u2192-string-internal"},Object(i.mdx)("strong",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"strong"},"fromAddress"))," ",Object(i.mdx)("em",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"em"},"(address _addr) \u2192 string"))," (internal)"),Object(i.mdx)("p",null,"Convert an address to its hex string representation."),Object(i.mdx)("hr",null),Object(i.mdx)("h3",{id:"add8-string-a-string-b-string-c-string-d-string-e-string-f-string-g-string-h-\u2192-string-internal"},Object(i.mdx)("strong",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"strong"},"add8"))," ",Object(i.mdx)("em",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"em"},"(string a, string b, string c, string d, string e, string f, string g, string h) \u2192 string"))," (internal)"),Object(i.mdx)("p",null,"Append eight strings."),Object(i.mdx)("hr",null))}l.isMDXComponent=!0},486:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return l})),n.d(t,"MDXProvider",(function(){return g})),n.d(t,"mdx",(function(){return b})),n.d(t,"useMDXComponents",(function(){return u})),n.d(t,"withMDXComponents",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),m=function(e){return function(t){var n=u(t.components);return i.a.createElement(e,a({},t,{components:n}))}},u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},g=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),l=u(n),m=r,g=l["".concat(a,".").concat(m)]||l[m]||p[m]||o;return n?i.a.createElement(g,s(s({ref:t},c),{},{components:n})):i.a.createElement(g,s({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var d=2;d<o;d++)a[d]=n[d];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},487:function(e,t,n){"use strict";var r=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.DocTag=t.DocType=void 0;var i=r(n(0));let o;t.DocType=o,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(o||(t.DocType=o={}));const a={[o.Tutorial]:"#b16bfc",[o.HowTo]:"#EC0088",[o.Reference]:"#ff823a",[o.Explanation]:"#29C0AF"};t.DocTag=({type:e,marginBottom:t})=>i.default.createElement(i.default.Fragment,null,i.default.createElement("span",{style:{border:"2px solid "+a[e]||!1,borderRadius:"5px",color:a[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==t?t:30,display:"inline-block"}},String(e)))}}]);