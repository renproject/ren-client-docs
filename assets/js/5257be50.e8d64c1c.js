(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{151:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(3),a=(n(0),n(486)),o=n(487);const c={title:"ClaimlessRewardsCycleHandler"},l={unversionedId:"darknode-sol/DarknodePayment/ClaimlessRewardsCycleHandler",id:"darknode-sol/DarknodePayment/ClaimlessRewardsCycleHandler",isDocsHomePage:!1,title:"ClaimlessRewardsCycleHandler",description:"Contract: ClaimlessRewardsCycleHandler",source:"@site/contracts/darknode-sol/DarknodePayment/ClaimlessRewardsCycleHandler.mdx",slug:"/darknode-sol/DarknodePayment/ClaimlessRewardsCycleHandler",permalink:"/ren-client-docs/contracts/darknode-sol/DarknodePayment/ClaimlessRewardsCycleHandler",version:"current",sidebar:"contracts",previous:{title:"ClaimlessRewardsTokenHandler",permalink:"/ren-client-docs/contracts/darknode-sol/DarknodePayment/ClaimlessRewardsTokenHandler"},next:{title:"ClaimlessRewards",permalink:"/ren-client-docs/contracts/darknode-sol/DarknodePayment/ClaimlessRewards"}},i=[{value:"Contract: <code>ClaimlessRewardsCycleHandler</code>",id:"contract-claimlessrewardscyclehandler",children:[]},{value:"Functions",id:"functions",children:[{value:"<strong><code>epochTimestampsLength</code></strong> <em><code>() \u2192 uint256</code></em> (external)",id:"epochtimestampslength--\u2192-uint256-external",children:[]},{value:"<strong><code>getEpochTimestamps</code></strong> <em><code>() \u2192 uint256[]</code></em> (external)",id:"getepochtimestamps--\u2192-uint256-external",children:[]},{value:"<strong><code>changeCycle</code></strong> <em><code>() \u2192 uint256</code></em> (external)",id:"changecycle--\u2192-uint256-external",children:[]}]}],d={toc:i};function s({components:e,...t}){return Object(a.mdx)("wrapper",Object(r.default)({},d,t,{components:e,mdxType:"MDXLayout"}),Object(a.mdx)(o.DocTag,{type:o.DocType.Reference,mdxType:"DocTag"}),Object(a.mdx)("h2",{id:"contract-claimlessrewardscyclehandler"},"Contract: ",Object(a.mdx)("inlineCode",{parentName:"h2"},"ClaimlessRewardsCycleHandler")),Object(a.mdx)("p",null,"Inherits from:"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"ClaimlessRewardsState")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"ClaimlessRewardsEvents"))),Object(a.mdx)("hr",null),Object(a.mdx)("br",null),Object(a.mdx)("h2",{id:"functions"},"Functions"),Object(a.mdx)("h3",{id:"epochtimestampslength--\u2192-uint256-external"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"epochTimestampsLength"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"() \u2192 uint256"))," (external)"),Object(a.mdx)("p",null,"(external view) Return the length of the array of cycle\ntimestamps. This makes it easier for clients to loop through them."),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"getepochtimestamps--\u2192-uint256-external"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"getEpochTimestamps"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"() \u2192 uint256[]"))," (external)"),Object(a.mdx)("p",null,"(external view) Returns the full array of timestamps. If this\ngrows too large to return, they should be fetched one-by-one or by\nfetching tx logs."),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"changecycle--\u2192-uint256-external"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"changeCycle"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"() \u2192 uint256"))," (external)"),Object(a.mdx)("p",null,"Changes the current cycle.\nCallable by anyone."),Object(a.mdx)("hr",null))}s.isMDXComponent=!0},486:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return s})),n.d(t,"MDXProvider",(function(){return p})),n.d(t,"mdx",(function(){return b})),n.d(t,"useMDXComponents",(function(){return u})),n.d(t,"withMDXComponents",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),m=function(e){return function(t){var n=u(t.components);return a.a.createElement(e,c({},t,{components:n}))}},u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},y=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,p=s["".concat(c,".").concat(m)]||s[m]||f[m]||o;return n?a.a.createElement(p,i(i({ref:t},l),{},{components:n})):a.a.createElement(p,i({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=y;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var d=2;d<o;d++)c[d]=n[d];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},487:function(e,t,n){"use strict";var r=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.DocTag=t.DocType=void 0;var a=r(n(0));let o;t.DocType=o,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(o||(t.DocType=o={}));const c={[o.Tutorial]:"#b16bfc",[o.HowTo]:"#EC0088",[o.Reference]:"#ff823a",[o.Explanation]:"#29C0AF"};t.DocTag=({type:e,marginBottom:t})=>a.default.createElement(a.default.Fragment,null,a.default.createElement("span",{style:{border:"2px solid "+c[e]||!1,borderRadius:"5px",color:c[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==t?t:30,display:"inline-block"}},String(e)))}}]);