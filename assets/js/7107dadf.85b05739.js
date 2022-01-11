(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{164:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return m})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(9),d=(n(0),n(415)),o=n(416),m={title:"ClaimlessRewardsEvents"},i={unversionedId:"darknode-sol/DarknodePayment/ClaimlessRewardsEvents",id:"darknode-sol/DarknodePayment/ClaimlessRewardsEvents",isDocsHomePage:!1,title:"ClaimlessRewardsEvents",description:"Contract: ClaimlessRewardsEvents",source:"@site/contracts/darknode-sol/DarknodePayment/ClaimlessRewardsEvents.mdx",slug:"/darknode-sol/DarknodePayment/ClaimlessRewardsEvents",permalink:"/ren-client-docs/contracts/darknode-sol/DarknodePayment/ClaimlessRewardsEvents",editUrl:"https://github.com/renproject/ren-client-docs/edit/master/contracts/darknode-sol/DarknodePayment/ClaimlessRewardsEvents.mdx",version:"current",sidebar:"contracts",previous:{title:"ClaimlessRewardsAdminHandler",permalink:"/ren-client-docs/contracts/darknode-sol/DarknodePayment/ClaimlessRewardsAdminHandler"},next:{title:"RenToken",permalink:"/ren-client-docs/contracts/darknode-sol/RenToken/RenToken"}},c=[{value:"Contract: <code>ClaimlessRewardsEvents</code>",id:"contract-claimlessrewardsevents",children:[]},{value:"Events",id:"events",children:[{value:"<strong><code>LogDarknodeWithdrew</code></strong> <em><code>(address _payee, uint256 _value, address _token)</code></em>",id:"logdarknodewithdrew-address-_payee-uint256-_value-address-_token",children:[]},{value:"<strong><code>LogCycleChanged</code></strong> <em><code>(uint256 _newTimestamp, uint256 _previousTimestamp, uint256 _shareCount)</code></em>",id:"logcyclechanged-uint256-_newtimestamp-uint256-_previoustimestamp-uint256-_sharecount",children:[]},{value:"<strong><code>LogHourlyPayoutChanged</code></strong> <em><code>(uint256 _newNumerator, uint256 _oldNumerator)</code></em>",id:"loghourlypayoutchanged-uint256-_newnumerator-uint256-_oldnumerator",children:[]},{value:"<strong><code>LogCommunityFundNumeratorChanged</code></strong> <em><code>(uint256 _newNumerator, uint256 _oldNumerator)</code></em>",id:"logcommunityfundnumeratorchanged-uint256-_newnumerator-uint256-_oldnumerator",children:[]},{value:"<strong><code>LogTokenRegistered</code></strong> <em><code>(address _token)</code></em>",id:"logtokenregistered-address-_token",children:[]},{value:"<strong><code>LogTokenDeregistered</code></strong> <em><code>(address _token)</code></em>",id:"logtokenderegistered-address-_token",children:[]},{value:"<strong><code>LogDarknodeRegistryUpdated</code></strong> <em><code>(contract DarknodeRegistryLogicV1 _previousDarknodeRegistry, contract DarknodeRegistryLogicV1 _nextDarknodeRegistry)</code></em>",id:"logdarknoderegistryupdated-contract-darknoderegistrylogicv1-_previousdarknoderegistry-contract-darknoderegistrylogicv1-_nextdarknoderegistry",children:[]},{value:"<strong><code>LogCommunityFundUpdated</code></strong> <em><code>(address _previousCommunityFund, address _nextCommunityFund)</code></em>",id:"logcommunityfundupdated-address-_previouscommunityfund-address-_nextcommunityfund",children:[]}]}],l={toc:c};function s(e){var t=e.components,n=Object(a.default)(e,["components"]);return Object(d.mdx)("wrapper",Object(r.default)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(d.mdx)(o.DocTag,{type:o.DocType.Reference,mdxType:"DocTag"}),Object(d.mdx)("h2",{id:"contract-claimlessrewardsevents"},"Contract: ",Object(d.mdx)("inlineCode",{parentName:"h2"},"ClaimlessRewardsEvents")),Object(d.mdx)("hr",null),Object(d.mdx)("br",null),Object(d.mdx)("h2",{id:"events"},"Events"),Object(d.mdx)("h3",{id:"logdarknodewithdrew-address-_payee-uint256-_value-address-_token"},Object(d.mdx)("strong",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"strong"},"LogDarknodeWithdrew"))," ",Object(d.mdx)("em",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"em"},"(address _payee, uint256 _value, address _token)"))),Object(d.mdx)("p",null,"Emitted when a node calls withdraw"),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Params")),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("p",{parentName:"li"},Object(d.mdx)("inlineCode",{parentName:"p"},"_payee"),": The address of the node which withdrew")),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("p",{parentName:"li"},Object(d.mdx)("inlineCode",{parentName:"p"},"_value"),": The amount of DAI withdrawn")),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("p",{parentName:"li"},Object(d.mdx)("inlineCode",{parentName:"p"},"_token"),": The address of the token that was withdrawn"))),Object(d.mdx)("hr",null),Object(d.mdx)("h3",{id:"logcyclechanged-uint256-_newtimestamp-uint256-_previoustimestamp-uint256-_sharecount"},Object(d.mdx)("strong",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"strong"},"LogCycleChanged"))," ",Object(d.mdx)("em",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"em"},"(uint256 _newTimestamp, uint256 _previousTimestamp, uint256 _shareCount)"))),Object(d.mdx)("p",null,"Emitted when the cycle is changed."),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Params")),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("p",{parentName:"li"},Object(d.mdx)("inlineCode",{parentName:"p"},"_newTimestamp"),": The start timestamp of the new cycle.")),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("p",{parentName:"li"},Object(d.mdx)("inlineCode",{parentName:"p"},"_previousTimestamp"),": The start timestamp of the previous cycle.")),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("p",{parentName:"li"},Object(d.mdx)("inlineCode",{parentName:"p"},"_shareCount"),": The number of darknodes at the end of the previous\ncycle."))),Object(d.mdx)("hr",null),Object(d.mdx)("h3",{id:"loghourlypayoutchanged-uint256-_newnumerator-uint256-_oldnumerator"},Object(d.mdx)("strong",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"strong"},"LogHourlyPayoutChanged"))," ",Object(d.mdx)("em",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"em"},"(uint256 _newNumerator, uint256 _oldNumerator)"))),Object(d.mdx)("p",null,"Emitted when the node payout percent changes."),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Params")),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("p",{parentName:"li"},Object(d.mdx)("inlineCode",{parentName:"p"},"_newNumerator"),": The new numerator.")),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("p",{parentName:"li"},Object(d.mdx)("inlineCode",{parentName:"p"},"_oldNumerator"),": The old numerator."))),Object(d.mdx)("hr",null),Object(d.mdx)("h3",{id:"logcommunityfundnumeratorchanged-uint256-_newnumerator-uint256-_oldnumerator"},Object(d.mdx)("strong",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"strong"},"LogCommunityFundNumeratorChanged"))," ",Object(d.mdx)("em",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"em"},"(uint256 _newNumerator, uint256 _oldNumerator)"))),Object(d.mdx)("p",null,"Emitted when the community fund percent changes."),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Params")),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("p",{parentName:"li"},Object(d.mdx)("inlineCode",{parentName:"p"},"_newNumerator"),": The new numerator.")),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("p",{parentName:"li"},Object(d.mdx)("inlineCode",{parentName:"p"},"_oldNumerator"),": The old numerator."))),Object(d.mdx)("hr",null),Object(d.mdx)("h3",{id:"logtokenregistered-address-_token"},Object(d.mdx)("strong",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"strong"},"LogTokenRegistered"))," ",Object(d.mdx)("em",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"em"},"(address _token)"))),Object(d.mdx)("p",null,"Emitted when a new token is registered."),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Params")),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"_token"),": The token that was registered.")),Object(d.mdx)("hr",null),Object(d.mdx)("h3",{id:"logtokenderegistered-address-_token"},Object(d.mdx)("strong",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"strong"},"LogTokenDeregistered"))," ",Object(d.mdx)("em",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"em"},"(address _token)"))),Object(d.mdx)("p",null,"Emitted when a token is deregistered."),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Params")),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"_token"),": The token that was deregistered.")),Object(d.mdx)("hr",null),Object(d.mdx)("h3",{id:"logdarknoderegistryupdated-contract-darknoderegistrylogicv1-_previousdarknoderegistry-contract-darknoderegistrylogicv1-_nextdarknoderegistry"},Object(d.mdx)("strong",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"strong"},"LogDarknodeRegistryUpdated"))," ",Object(d.mdx)("em",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"em"},"(contract DarknodeRegistryLogicV1 _previousDarknodeRegistry, contract DarknodeRegistryLogicV1 _nextDarknodeRegistry)"))),Object(d.mdx)("p",null,"Emitted when the DarknodeRegistry is updated."),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Params")),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("p",{parentName:"li"},Object(d.mdx)("inlineCode",{parentName:"p"},"_previousDarknodeRegistry"),": The address of the old registry.")),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("p",{parentName:"li"},Object(d.mdx)("inlineCode",{parentName:"p"},"_nextDarknodeRegistry"),": The address of the new registry."))),Object(d.mdx)("hr",null),Object(d.mdx)("h3",{id:"logcommunityfundupdated-address-_previouscommunityfund-address-_nextcommunityfund"},Object(d.mdx)("strong",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"strong"},"LogCommunityFundUpdated"))," ",Object(d.mdx)("em",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"em"},"(address _previousCommunityFund, address _nextCommunityFund)"))),Object(d.mdx)("p",null,"Emitted when the community fund recipient is updated."),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Params")),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("p",{parentName:"li"},Object(d.mdx)("inlineCode",{parentName:"p"},"_previousCommunityFund"),": The address of the old community fund.")),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("p",{parentName:"li"},Object(d.mdx)("inlineCode",{parentName:"p"},"_nextCommunityFund"),": The address of the new community fund."))),Object(d.mdx)("hr",null))}s.isMDXComponent=!0},415:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return l})),n.d(t,"MDXProvider",(function(){return p})),n.d(t,"mdx",(function(){return O})),n.d(t,"useMDXComponents",(function(){return u})),n.d(t,"withMDXComponents",(function(){return s}));var r=n(0),a=n.n(r);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},d=Object.keys(e);for(r=0;r<d.length;r++)n=d[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(r=0;r<d.length;r++)n=d[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){return function(t){var n=u(t.components);return a.a.createElement(e,o({},t,{components:n}))}},u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,d=e.originalType,o=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),l=u(n),s=r,p=l["".concat(o,".").concat(s)]||l[s]||b[s]||d;return n?a.a.createElement(p,i(i({ref:t},m),{},{components:n})):a.a.createElement(p,i({ref:t},m))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var d=n.length,o=new Array(d);o[0]=g;var m={};for(var i in t)hasOwnProperty.call(t,i)&&(m[i]=t[i]);m.originalType=e,m.mdxType="string"==typeof e?e:r,o[1]=m;for(var c=2;c<d;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},416:function(e,t,n){"use strict";var r=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.DocTag=t.DocType=void 0;var a,d,o=r(n(0));t.DocType=d,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(d||(t.DocType=d={}));var m=((a={})[d.Tutorial]="#b16bfc",a[d.HowTo]="#EC0088",a[d.Reference]="#ff823a",a[d.Explanation]="#29C0AF",a);t.DocTag=function(e){var t=e.type,n=e.marginBottom;return o.default.createElement(o.default.Fragment,null,o.default.createElement("span",{style:{border:"2px solid "+m[t]||!1,borderRadius:"5px",color:m[t]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==n?n:30,display:"inline-block"}},String(t)))}}}]);