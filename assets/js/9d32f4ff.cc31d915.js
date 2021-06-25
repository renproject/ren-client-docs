(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{264:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(8),o=(n(0),n(489)),c=n(490),d={title:"ClaimlessRewards"},i={unversionedId:"darknode-sol/DarknodePayment/ClaimlessRewards",id:"darknode-sol/DarknodePayment/ClaimlessRewards",isDocsHomePage:!1,title:"ClaimlessRewards",description:"Contract: ClaimlessRewards",source:"@site/contracts/darknode-sol/DarknodePayment/ClaimlessRewards.mdx",slug:"/darknode-sol/DarknodePayment/ClaimlessRewards",permalink:"/ren-client-docs/contracts/darknode-sol/DarknodePayment/ClaimlessRewards",version:"current",sidebar:"contracts",previous:{title:"ClaimlessRewardsCycleHandler",permalink:"/ren-client-docs/contracts/darknode-sol/DarknodePayment/ClaimlessRewardsCycleHandler"},next:{title:"ClaimlessRewardsWithdrawHandler",permalink:"/ren-client-docs/contracts/darknode-sol/DarknodePayment/ClaimlessRewardsWithdrawHandler"}},l=[{value:"Contract: <code>ClaimlessRewards</code>",id:"contract-claimlessrewards",children:[]},{value:"Functions",id:"functions",children:[{value:"<strong><code>constructor</code></strong> <em><code>(contract DarknodeRegistryLogicV1 _darknodeRegistry, contract DarknodePaymentStore _darknodePaymentStore, address _communityFund, uint256 _communityFundNumerator)</code></em> (public)",id:"constructor-contract-darknoderegistrylogicv1-_darknoderegistry-contract-darknodepaymentstore-_darknodepaymentstore-address-_communityfund-uint256-_communityfundnumerator-public",children:[]}]}],m={toc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.mdx)("wrapper",Object(r.default)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)(c.DocTag,{type:c.DocType.Reference,mdxType:"DocTag"}),Object(o.mdx)("h2",{id:"contract-claimlessrewards"},"Contract: ",Object(o.mdx)("inlineCode",{parentName:"h2"},"ClaimlessRewards")),Object(o.mdx)("p",null,"ClaimlessRewards is intended to replace the DarknodePayment\ncontract. It's to main improvements are:\n1) no longer requiring nodes to call ",Object(o.mdx)("inlineCode",{parentName:"p"},"claim")," each epoch, and\n2) allowing for a community fund to earn a proportion of the rewards."),Object(o.mdx)("p",null,"Inherits from:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"ClaimlessRewardsWithdrawHandler")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"ClaimlessRewardsCycleHandler")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"ClaimlessRewardsAdminHandler")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"ClaimlessRewardsTokenHandler")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"ClaimlessRewardsState")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"ClaimlessRewardsEvents")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"Claimable")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"Ownable")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"Context")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"Initializable"))),Object(o.mdx)("hr",null),Object(o.mdx)("br",null),Object(o.mdx)("h2",{id:"functions"},"Functions"),Object(o.mdx)("h3",{id:"constructor-contract-darknoderegistrylogicv1-_darknoderegistry-contract-darknodepaymentstore-_darknodepaymentstore-address-_communityfund-uint256-_communityfundnumerator-public"},Object(o.mdx)("strong",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"strong"},"constructor"))," ",Object(o.mdx)("em",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"em"},"(contract DarknodeRegistryLogicV1 _darknodeRegistry, contract DarknodePaymentStore _darknodePaymentStore, address _communityFund, uint256 _communityFundNumerator)"))," (public)"),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Params")),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("p",{parentName:"li"},Object(o.mdx)("inlineCode",{parentName:"p"},"_darknodeRegistry"),": The address of the DarknodeRegistry contract")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("p",{parentName:"li"},Object(o.mdx)("inlineCode",{parentName:"p"},"_darknodePaymentStore"),": The address of the DarknodePaymentStore\ncontract. Can be updated by the contract owner.")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("p",{parentName:"li"},Object(o.mdx)("inlineCode",{parentName:"p"},"_communityFund"),": The address to which the community fund balances\ncan be withdrawn to. Can be updated by the contract owner.")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("p",{parentName:"li"},Object(o.mdx)("inlineCode",{parentName:"p"},"_communityFundNumerator"),": The portion of the rewards that are paid\nto the community fund. Can be updated by the contract owner."))),Object(o.mdx)("p",null,"The contract constructor. Starts the current cycle using the\nlatest epoch."),Object(o.mdx)("p",null,"The DarknodeRegistry should be set to point to the\nClaimlessRewards contract before the next epoch is called."),Object(o.mdx)("hr",null))}s.isMDXComponent=!0},489:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return m})),n.d(t,"MDXProvider",(function(){return p})),n.d(t,"mdx",(function(){return f})),n.d(t,"useMDXComponents",(function(){return u})),n.d(t,"withMDXComponents",(function(){return s}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=a.a.createContext({}),s=function(e){return function(t){var n=u(t.components);return a.a.createElement(e,c({},t,{components:n}))}},u=function(e){var t=a.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(m.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},y=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=u(n),s=r,p=m["".concat(c,".").concat(s)]||m[s]||b[s]||o;return n?a.a.createElement(p,i(i({ref:t},d),{},{components:n})):a.a.createElement(p,i({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=y;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d.mdxType="string"==typeof e?e:r,c[1]=d;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},490:function(e,t,n){"use strict";var r=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.DocTag=t.DocType=void 0;var a=r(n(0));let o;t.DocType=o,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(o||(t.DocType=o={}));const c={[o.Tutorial]:"#b16bfc",[o.HowTo]:"#EC0088",[o.Reference]:"#ff823a",[o.Explanation]:"#29C0AF"};t.DocTag=({type:e,marginBottom:t})=>a.default.createElement(a.default.Fragment,null,a.default.createElement("span",{style:{border:"2px solid "+c[e]||!1,borderRadius:"5px",color:c[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==t?t:30,display:"inline-block"}},String(e)))}}]);