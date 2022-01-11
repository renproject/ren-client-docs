(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{415:function(e,n,t){"use strict";t.r(n),t.d(n,"MDXContext",(function(){return c})),t.d(n,"MDXProvider",(function(){return p})),t.d(n,"mdx",(function(){return O})),t.d(n,"useMDXComponents",(function(){return s})),t.d(n,"withMDXComponents",(function(){return u}));var r=t(0),a=t.n(r);function d(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){d(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},d=Object.keys(e);for(r=0;r<d.length;r++)t=d[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(r=0;r<d.length;r++)t=d[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),u=function(e){return function(n){var t=s(n.components);return a.a.createElement(e,o({},n,{components:t}))}},s=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},x=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,d=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(t),u=r,p=c["".concat(o,".").concat(u)]||c[u]||b[u]||d;return t?a.a.createElement(p,i(i({ref:n},m),{},{components:t})):a.a.createElement(p,i({ref:n},m))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var d=t.length,o=new Array(d);o[0]=x;var m={};for(var i in n)hasOwnProperty.call(n,i)&&(m[i]=n[i]);m.originalType=e,m.mdxType="string"==typeof e?e:r,o[1]=m;for(var l=2;l<d;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}x.displayName="MDXCreateElement"},416:function(e,n,t){"use strict";var r=t(4).default;Object.defineProperty(n,"__esModule",{value:!0}),n.DocTag=n.DocType=void 0;var a,d,o=r(t(0));n.DocType=d,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(d||(n.DocType=d={}));var m=((a={})[d.Tutorial]="#b16bfc",a[d.HowTo]="#EC0088",a[d.Reference]="#ff823a",a[d.Explanation]="#29C0AF",a);n.DocTag=function(e){var n=e.type,t=e.marginBottom;return o.default.createElement(o.default.Fragment,null,o.default.createElement("span",{style:{border:"2px solid "+m[n]||!1,borderRadius:"5px",color:m[n]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==t?t:30,display:"inline-block"}},String(n)))}},69:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return m})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(9),d=(t(0),t(415)),o=t(416),m={title:"ClaimlessRewardsAdminHandler"},i={unversionedId:"darknode-sol/DarknodePayment/ClaimlessRewardsAdminHandler",id:"darknode-sol/DarknodePayment/ClaimlessRewardsAdminHandler",isDocsHomePage:!1,title:"ClaimlessRewardsAdminHandler",description:"Contract: ClaimlessRewardsAdminHandler",source:"@site/contracts/darknode-sol/DarknodePayment/ClaimlessRewardsAdminHandler.mdx",slug:"/darknode-sol/DarknodePayment/ClaimlessRewardsAdminHandler",permalink:"/ren-client-docs/contracts/darknode-sol/DarknodePayment/ClaimlessRewardsAdminHandler",editUrl:"https://github.com/renproject/ren-client-docs/edit/master/contracts/darknode-sol/DarknodePayment/ClaimlessRewardsAdminHandler.mdx",version:"current",sidebar:"contracts",previous:{title:"ClaimlessRewardsState",permalink:"/ren-client-docs/contracts/darknode-sol/DarknodePayment/ClaimlessRewardsState"},next:{title:"ClaimlessRewardsEvents",permalink:"/ren-client-docs/contracts/darknode-sol/DarknodePayment/ClaimlessRewardsEvents"}},l=[{value:"Contract: <code>ClaimlessRewardsAdminHandler</code>",id:"contract-claimlessrewardsadminhandler",children:[]},{value:"Functions",id:"functions",children:[{value:"<strong><code>updateDarknodeRegistry</code></strong> <em><code>(contract DarknodeRegistryLogicV1 _darknodeRegistry)</code></em> (external)",id:"updatedarknoderegistry-contract-darknoderegistrylogicv1-_darknoderegistry-external",children:[]},{value:"<strong><code>updateCommunityFund</code></strong> <em><code>(address _communityFund)</code></em> (external)",id:"updatecommunityfund-address-_communityfund-external",children:[]},{value:"<strong><code>updateHourlyPayoutWithheld</code></strong> <em><code>(uint256 _numerator)</code></em> (external)",id:"updatehourlypayoutwithheld-uint256-_numerator-external",children:[]},{value:"<strong><code>updateCommunityFundNumerator</code></strong> <em><code>(uint256 _numerator)</code></em> (external)",id:"updatecommunityfundnumerator-uint256-_numerator-external",children:[]},{value:"<strong><code>transferStoreOwnership</code></strong> <em><code>(contract ClaimlessRewardsAdminHandler _newOwner)</code></em> (external)",id:"transferstoreownership-contract-claimlessrewardsadminhandler-_newowner-external",children:[]},{value:"<strong><code>claimStoreOwnership</code></strong> <em><code>()</code></em> (external)",id:"claimstoreownership--external",children:[]},{value:"<strong><code>_updateDarknodeRegistry</code></strong> <em><code>(contract DarknodeRegistryLogicV1 _darknodeRegistry)</code></em> (internal)",id:"_updatedarknoderegistry-contract-darknoderegistrylogicv1-_darknoderegistry-internal",children:[]},{value:"<strong><code>_updateCommunityFund</code></strong> <em><code>(address _communityFund)</code></em> (internal)",id:"_updatecommunityfund-address-_communityfund-internal",children:[]},{value:"<strong><code>_updateCommunityFundNumerator</code></strong> <em><code>(uint256 _numerator)</code></em> (internal)",id:"_updatecommunityfundnumerator-uint256-_numerator-internal",children:[]}]}],c={toc:l};function u(e){var n=e.components,t=Object(a.default)(e,["components"]);return Object(d.mdx)("wrapper",Object(r.default)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(d.mdx)(o.DocTag,{type:o.DocType.Reference,mdxType:"DocTag"}),Object(d.mdx)("h2",{id:"contract-claimlessrewardsadminhandler"},"Contract: ",Object(d.mdx)("inlineCode",{parentName:"h2"},"ClaimlessRewardsAdminHandler")),Object(d.mdx)("p",null,"Inherits from:"),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"ClaimlessRewardsState")),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"ClaimlessRewardsEvents")),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"Ownable")),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"Context")),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"Initializable"))),Object(d.mdx)("hr",null),Object(d.mdx)("br",null),Object(d.mdx)("h2",{id:"functions"},"Functions"),Object(d.mdx)("h3",{id:"updatedarknoderegistry-contract-darknoderegistrylogicv1-_darknoderegistry-external"},Object(d.mdx)("strong",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"strong"},"updateDarknodeRegistry"))," ",Object(d.mdx)("em",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"em"},"(contract DarknodeRegistryLogicV1 _darknodeRegistry)"))," (external)"),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Params")),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"_darknodeRegistry"),": The address of the new Darknode Registry\ncontract.")),Object(d.mdx)("p",null,"Allows the contract owner to update the address of the\nDarknode Registry contract."),Object(d.mdx)("hr",null),Object(d.mdx)("h3",{id:"updatecommunityfund-address-_communityfund-external"},Object(d.mdx)("strong",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"strong"},"updateCommunityFund"))," ",Object(d.mdx)("em",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"em"},"(address _communityFund)"))," (external)"),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Params")),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"_communityFund"),": The address of new community fund address.")),Object(d.mdx)("p",null,"Allows the contract owner to update the address of the new dev\nfund."),Object(d.mdx)("hr",null),Object(d.mdx)("h3",{id:"updatehourlypayoutwithheld-uint256-_numerator-external"},Object(d.mdx)("strong",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"strong"},"updateHourlyPayoutWithheld"))," ",Object(d.mdx)("em",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"em"},"(uint256 _numerator)"))," (external)"),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Params")),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"_numerator"),": The numerator of payout for darknodes.")),Object(d.mdx)("p",null,"Updates the proportion of the rewards that are withheld to be\npaid out over future cycles."),Object(d.mdx)("hr",null),Object(d.mdx)("h3",{id:"updatecommunityfundnumerator-uint256-_numerator-external"},Object(d.mdx)("strong",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"strong"},"updateCommunityFundNumerator"))," ",Object(d.mdx)("em",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"em"},"(uint256 _numerator)"))," (external)"),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Params")),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"_numerator"),": The numerator of payout for darknodes.")),Object(d.mdx)("p",null,"Updates the proportion of the rewards that are withheld to be\nsent to the community fund."),Object(d.mdx)("hr",null),Object(d.mdx)("h3",{id:"transferstoreownership-contract-claimlessrewardsadminhandler-_newowner-external"},Object(d.mdx)("strong",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"strong"},"transferStoreOwnership"))," ",Object(d.mdx)("em",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"em"},"(contract ClaimlessRewardsAdminHandler _newOwner)"))," (external)"),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Params")),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"_newOwner"),": The address to transfer the ownership to.")),Object(d.mdx)("p",null,"Allows the contract owner to initiate an ownership transfer of\nthe DarknodePaymentStore."),Object(d.mdx)("hr",null),Object(d.mdx)("h3",{id:"claimstoreownership--external"},Object(d.mdx)("strong",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"strong"},"claimStoreOwnership"))," ",Object(d.mdx)("em",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"em"},"()"))," (external)"),Object(d.mdx)("p",null,"Claims ownership of the store passed in to the constructor.\n",Object(d.mdx)("inlineCode",{parentName:"p"},"transferStoreOwnership")," must have previously been called when\ntransferring from another DarknodePaymentStore."),Object(d.mdx)("hr",null),Object(d.mdx)("h3",{id:"_updatedarknoderegistry-contract-darknoderegistrylogicv1-_darknoderegistry-internal"},Object(d.mdx)("strong",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"strong"},"_updateDarknodeRegistry"))," ",Object(d.mdx)("em",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"em"},"(contract DarknodeRegistryLogicV1 _darknodeRegistry)"))," (internal)"),Object(d.mdx)("p",null,"See ",Object(d.mdx)("inlineCode",{parentName:"p"},"updateDarknodeRegistry"),"."),Object(d.mdx)("hr",null),Object(d.mdx)("h3",{id:"_updatecommunityfund-address-_communityfund-internal"},Object(d.mdx)("strong",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"strong"},"_updateCommunityFund"))," ",Object(d.mdx)("em",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"em"},"(address _communityFund)"))," (internal)"),Object(d.mdx)("p",null,"See ",Object(d.mdx)("inlineCode",{parentName:"p"},"updateCommunityFund"),"."),Object(d.mdx)("hr",null),Object(d.mdx)("h3",{id:"_updatecommunityfundnumerator-uint256-_numerator-internal"},Object(d.mdx)("strong",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"strong"},"_updateCommunityFundNumerator"))," ",Object(d.mdx)("em",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"em"},"(uint256 _numerator)"))," (internal)"),Object(d.mdx)("p",null,"See ",Object(d.mdx)("inlineCode",{parentName:"p"},"_updateCommunityFundNumerator"),"."),Object(d.mdx)("hr",null))}u.isMDXComponent=!0}}]);