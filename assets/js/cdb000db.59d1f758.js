(window.webpackJsonp=window.webpackJsonp||[]).push([[239],{272:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return m})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(3),d=n(9),a=(n(0),n(415)),o=n(416),c={title:"DarknodePayment"},m={unversionedId:"darknode-sol/DarknodePayment/DarknodePayment",id:"darknode-sol/DarknodePayment/DarknodePayment",isDocsHomePage:!1,title:"DarknodePayment",description:"Contract: DarknodePayment",source:"@site/contracts/darknode-sol/DarknodePayment/DarknodePayment.mdx",slug:"/darknode-sol/DarknodePayment/DarknodePayment",permalink:"/ren-client-docs/contracts/darknode-sol/DarknodePayment/DarknodePayment",editUrl:"https://github.com/renproject/ren-client-docs/edit/master/contracts/darknode-sol/DarknodePayment/DarknodePayment.mdx",version:"current",sidebar:"contracts",previous:{title:"DarknodePaymentStore",permalink:"/ren-client-docs/contracts/darknode-sol/DarknodePayment/DarknodePaymentStore"},next:{title:"ClaimlessRewardsTokenHandler",permalink:"/ren-client-docs/contracts/darknode-sol/DarknodePayment/ClaimlessRewardsTokenHandler"}},i=[{value:"Contract: <code>DarknodePayment</code>",id:"contract-darknodepayment",children:[]},{value:"Variables",id:"variables",children:[{value:"<strong><code>VERSION</code></strong>: <em><code>string</code></em>",id:"version-string",children:[]},{value:"<strong><code>ETHEREUM</code></strong>: <em><code>address</code></em>",id:"ethereum-address",children:[]},{value:"<strong><code>darknodeRegistry</code></strong>: <em><code>contract DarknodeRegistryLogicV1</code></em>",id:"darknoderegistry-contract-darknoderegistrylogicv1",children:[]},{value:"<strong><code>store</code></strong>: <em><code>contract DarknodePaymentStore</code></em>",id:"store-contract-darknodepaymentstore",children:[]},{value:"<strong><code>cycleChanger</code></strong>: <em><code>address</code></em>",id:"cyclechanger-address",children:[]},{value:"<strong><code>currentCycle</code></strong>: <em><code>uint256</code></em>",id:"currentcycle-uint256",children:[]},{value:"<strong><code>previousCycle</code></strong>: <em><code>uint256</code></em>",id:"previouscycle-uint256",children:[]},{value:"<strong><code>pendingTokens</code></strong>: <em><code>address[]</code></em>",id:"pendingtokens-address",children:[]},{value:"<strong><code>registeredTokens</code></strong>: <em><code>address[]</code></em>",id:"registeredtokens-address",children:[]},{value:"<strong><code>registeredTokenIndex</code></strong>: <em><code>mapping(address =&gt; uint256)</code></em>",id:"registeredtokenindex-mappingaddress--uint256",children:[]},{value:"<strong><code>unclaimedRewards</code></strong>: <em><code>mapping(address =&gt; uint256)</code></em>",id:"unclaimedrewards-mappingaddress--uint256",children:[]},{value:"<strong><code>previousCycleRewardShare</code></strong>: <em><code>mapping(address =&gt; uint256)</code></em>",id:"previouscyclerewardshare-mappingaddress--uint256",children:[]},{value:"<strong><code>cycleStartTime</code></strong>: <em><code>uint256</code></em>",id:"cyclestarttime-uint256",children:[]},{value:"<strong><code>nextCyclePayoutPercent</code></strong>: <em><code>uint256</code></em>",id:"nextcyclepayoutpercent-uint256",children:[]},{value:"<strong><code>currentCyclePayoutPercent</code></strong>: <em><code>uint256</code></em>",id:"currentcyclepayoutpercent-uint256",children:[]},{value:"<strong><code>rewardClaimed</code></strong>: <em><code>mapping(address =&gt; mapping(uint256 =&gt; bool))</code></em>",id:"rewardclaimed-mappingaddress--mappinguint256--bool",children:[]}]},{value:"Modifiers",id:"modifiers",children:[{value:"<code>onlyDarknode(address _darknode)</code>",id:"onlydarknodeaddress-_darknode",children:[]},{value:"<code>validPercent(uint256 _percent)</code>",id:"validpercentuint256-_percent",children:[]},{value:"<code>onlyCycleChanger()</code>",id:"onlycyclechanger",children:[]}]},{value:"Functions",id:"functions",children:[{value:"<strong><code>constructor</code></strong> <em><code>(string _VERSION, contract DarknodeRegistryLogicV1 _darknodeRegistry, contract DarknodePaymentStore _darknodePaymentStore, uint256 _cyclePayoutPercent)</code></em> (public)",id:"constructor-string-_version-contract-darknoderegistrylogicv1-_darknoderegistry-contract-darknodepaymentstore-_darknodepaymentstore-uint256-_cyclepayoutpercent-public",children:[]},{value:"<strong><code>updateDarknodeRegistry</code></strong> <em><code>(contract DarknodeRegistryLogicV1 _darknodeRegistry)</code></em> (external)",id:"updatedarknoderegistry-contract-darknoderegistrylogicv1-_darknoderegistry-external",children:[]},{value:"<strong><code>withdraw</code></strong> <em><code>(address _darknode, address _token)</code></em> (public)",id:"withdraw-address-_darknode-address-_token-public",children:[]},{value:"<strong><code>withdrawMultiple</code></strong> <em><code>(address[] _darknodes, address[] _tokens)</code></em> (external)",id:"withdrawmultiple-address-_darknodes-address-_tokens-external",children:[]},{value:"<strong><code>fallback</code></strong> <em><code>()</code></em> (external)",id:"fallback--external",children:[]},{value:"<strong><code>currentCycleRewardPool</code></strong> <em><code>(address _token) \u2192 uint256</code></em> (external)",id:"currentcyclerewardpool-address-_token-\u2192-uint256-external",children:[]},{value:"<strong><code>darknodeBalances</code></strong> <em><code>(address _darknodeID, address _token) \u2192 uint256</code></em> (external)",id:"darknodebalances-address-_darknodeid-address-_token-\u2192-uint256-external",children:[]},{value:"<strong><code>changeCycle</code></strong> <em><code>() \u2192 uint256</code></em> (external)",id:"changecycle--\u2192-uint256-external",children:[]},{value:"<strong><code>deposit</code></strong> <em><code>(uint256 _value, address _token)</code></em> (external)",id:"deposit-uint256-_value-address-_token-external",children:[]},{value:"<strong><code>forward</code></strong> <em><code>(address _token)</code></em> (external)",id:"forward-address-_token-external",children:[]},{value:"<strong><code>claim</code></strong> <em><code>(address _darknode)</code></em> (external)",id:"claim-address-_darknode-external",children:[]},{value:"<strong><code>registerToken</code></strong> <em><code>(address _token)</code></em> (external)",id:"registertoken-address-_token-external",children:[]},{value:"<strong><code>tokenPendingRegistration</code></strong> <em><code>(address _token) \u2192 bool</code></em> (public)",id:"tokenpendingregistration-address-_token-\u2192-bool-public",children:[]},{value:"<strong><code>deregisterToken</code></strong> <em><code>(address _token)</code></em> (external)",id:"deregistertoken-address-_token-external",children:[]},{value:"<strong><code>updateCycleChanger</code></strong> <em><code>(address _addr)</code></em> (external)",id:"updatecyclechanger-address-_addr-external",children:[]},{value:"<strong><code>updatePayoutPercentage</code></strong> <em><code>(uint256 _percent)</code></em> (external)",id:"updatepayoutpercentage-uint256-_percent-external",children:[]},{value:"<strong><code>transferStoreOwnership</code></strong> <em><code>(contract DarknodePayment _newOwner)</code></em> (external)",id:"transferstoreownership-contract-darknodepayment-_newowner-external",children:[]},{value:"<strong><code>claimStoreOwnership</code></strong> <em><code>()</code></em> (external)",id:"claimstoreownership--external",children:[]}]},{value:"Events",id:"events",children:[{value:"<strong><code>LogDarknodeClaim</code></strong> <em><code>(address _darknode, uint256 _cycle)</code></em>",id:"logdarknodeclaim-address-_darknode-uint256-_cycle",children:[]},{value:"<strong><code>LogPaymentReceived</code></strong> <em><code>(address _payer, address _token, uint256 _amount)</code></em>",id:"logpaymentreceived-address-_payer-address-_token-uint256-_amount",children:[]},{value:"<strong><code>LogDarknodeWithdrew</code></strong> <em><code>(address _darknodeOperator, address _darknodeID, address _token, uint256 _value)</code></em>",id:"logdarknodewithdrew-address-_darknodeoperator-address-_darknodeid-address-_token-uint256-_value",children:[]},{value:"<strong><code>LogPayoutPercentChanged</code></strong> <em><code>(uint256 _newPercent, uint256 _oldPercent)</code></em>",id:"logpayoutpercentchanged-uint256-_newpercent-uint256-_oldpercent",children:[]},{value:"<strong><code>LogCycleChangerChanged</code></strong> <em><code>(address _newCycleChanger, address _oldCycleChanger)</code></em>",id:"logcyclechangerchanged-address-_newcyclechanger-address-_oldcyclechanger",children:[]},{value:"<strong><code>LogTokenRegistered</code></strong> <em><code>(address _token)</code></em>",id:"logtokenregistered-address-_token",children:[]},{value:"<strong><code>LogTokenDeregistered</code></strong> <em><code>(address _token)</code></em>",id:"logtokenderegistered-address-_token",children:[]},{value:"<strong><code>LogDarknodeRegistryUpdated</code></strong> <em><code>(contract DarknodeRegistryLogicV1 _previousDarknodeRegistry, contract DarknodeRegistryLogicV1 _nextDarknodeRegistry)</code></em>",id:"logdarknoderegistryupdated-contract-darknoderegistrylogicv1-_previousdarknoderegistry-contract-darknoderegistrylogicv1-_nextdarknoderegistry",children:[]}]}],l={toc:i};function s(e){var t=e.components,n=Object(d.default)(e,["components"]);return Object(a.mdx)("wrapper",Object(r.default)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)(o.DocTag,{type:o.DocType.Reference,mdxType:"DocTag"}),Object(a.mdx)("h2",{id:"contract-darknodepayment"},"Contract: ",Object(a.mdx)("inlineCode",{parentName:"h2"},"DarknodePayment")),Object(a.mdx)("p",null,"DarknodePayment is responsible for paying off darknodes for their\ncomputation."),Object(a.mdx)("p",null,"Inherits from:"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"Claimable")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"Ownable")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"Context")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"Initializable"))),Object(a.mdx)("hr",null),Object(a.mdx)("br",null),Object(a.mdx)("h2",{id:"variables"},"Variables"),Object(a.mdx)("h3",{id:"version-string"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"VERSION")),": ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"string"))),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"ethereum-address"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"ETHEREUM")),": ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"address"))),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"darknoderegistry-contract-darknoderegistrylogicv1"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"darknodeRegistry")),": ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"contract DarknodeRegistryLogicV1"))),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"store-contract-darknodepaymentstore"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"store")),": ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"contract DarknodePaymentStore"))),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"cyclechanger-address"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"cycleChanger")),": ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"address"))),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"currentcycle-uint256"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"currentCycle")),": ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"uint256"))),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"previouscycle-uint256"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"previousCycle")),": ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"uint256"))),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"pendingtokens-address"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"pendingTokens")),": ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"address[]"))),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"registeredtokens-address"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"registeredTokens")),": ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"address[]"))),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"registeredtokenindex-mappingaddress--uint256"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"registeredTokenIndex")),": ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"mapping(address => uint256)"))),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"unclaimedrewards-mappingaddress--uint256"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"unclaimedRewards")),": ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"mapping(address => uint256)"))),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"previouscyclerewardshare-mappingaddress--uint256"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"previousCycleRewardShare")),": ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"mapping(address => uint256)"))),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"cyclestarttime-uint256"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"cycleStartTime")),": ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"uint256"))),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"nextcyclepayoutpercent-uint256"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"nextCyclePayoutPercent")),": ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"uint256"))),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"currentcyclepayoutpercent-uint256"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"currentCyclePayoutPercent")),": ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"uint256"))),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"rewardclaimed-mappingaddress--mappinguint256--bool"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"rewardClaimed")),": ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"mapping(address => mapping(uint256 => bool))"))),Object(a.mdx)("hr",null),Object(a.mdx)("br",null),Object(a.mdx)("h2",{id:"modifiers"},"Modifiers"),Object(a.mdx)("h3",{id:"onlydarknodeaddress-_darknode"},Object(a.mdx)("inlineCode",{parentName:"h3"},"onlyDarknode(address _darknode)")),Object(a.mdx)("p",null,"Restrict a function registered dark nodes to call a function."),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"validpercentuint256-_percent"},Object(a.mdx)("inlineCode",{parentName:"h3"},"validPercent(uint256 _percent)")),Object(a.mdx)("p",null,"Restrict a function to have a valid percentage."),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"onlycyclechanger"},Object(a.mdx)("inlineCode",{parentName:"h3"},"onlyCycleChanger()")),Object(a.mdx)("p",null,"Restrict a function to be called by cycleChanger."),Object(a.mdx)("hr",null),Object(a.mdx)("br",null),Object(a.mdx)("h2",{id:"functions"},"Functions"),Object(a.mdx)("h3",{id:"constructor-string-_version-contract-darknoderegistrylogicv1-_darknoderegistry-contract-darknodepaymentstore-_darknodepaymentstore-uint256-_cyclepayoutpercent-public"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"constructor"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(string _VERSION, contract DarknodeRegistryLogicV1 _darknodeRegistry, contract DarknodePaymentStore _darknodePaymentStore, uint256 _cyclePayoutPercent)"))," (public)"),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"Params")),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("inlineCode",{parentName:"p"},"_VERSION"),": A string defining the contract version.")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("inlineCode",{parentName:"p"},"_darknodeRegistry"),": The address of the DarknodeRegistry contract.")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("inlineCode",{parentName:"p"},"_darknodePaymentStore"),": The address of the DarknodePaymentStore\ncontract."))),Object(a.mdx)("p",null,"The contract constructor. Starts the current cycle using the\ntime of deploy."),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"updatedarknoderegistry-contract-darknoderegistrylogicv1-_darknoderegistry-external"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"updateDarknodeRegistry"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(contract DarknodeRegistryLogicV1 _darknodeRegistry)"))," (external)"),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"Params")),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"_darknodeRegistry"),": The address of the Darknode Registry\ncontract.")),Object(a.mdx)("p",null,"Allows the contract owner to update the address of the\ndarknode registry contract."),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"withdraw-address-_darknode-address-_token-public"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"withdraw"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(address _darknode, address _token)"))," (public)"),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"Params")),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("inlineCode",{parentName:"p"},"_darknode"),": The address of the darknode.")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("inlineCode",{parentName:"p"},"_token"),": Which token to transfer."))),Object(a.mdx)("p",null,"Transfers the funds allocated to the darknode to the darknode\nowner."),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"withdrawmultiple-address-_darknodes-address-_tokens-external"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"withdrawMultiple"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(address[] _darknodes, address[] _tokens)"))," (external)"),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"fallback--external"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"fallback"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"()"))," (external)"),Object(a.mdx)("p",null,"Forward all payments to the DarknodePaymentStore."),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"currentcyclerewardpool-address-_token-\u2192-uint256-external"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"currentCycleRewardPool"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(address _token) \u2192 uint256"))," (external)"),Object(a.mdx)("p",null,"The current balance of the contract available as reward for the\ncurrent cycle."),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"darknodebalances-address-_darknodeid-address-_token-\u2192-uint256-external"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"darknodeBalances"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(address _darknodeID, address _token) \u2192 uint256"))," (external)"),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"changecycle--\u2192-uint256-external"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"changeCycle"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"() \u2192 uint256"))," (external)"),Object(a.mdx)("p",null,"Changes the current cycle."),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"deposit-uint256-_value-address-_token-external"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"deposit"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(uint256 _value, address _token)"))," (external)"),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"Params")),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("inlineCode",{parentName:"p"},"_value"),": The amount of token deposit in the token's smallest unit.")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("inlineCode",{parentName:"p"},"_token"),": The token address."))),Object(a.mdx)("p",null,"Deposits token into the contract to be paid to the Darknodes."),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"forward-address-_token-external"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"forward"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(address _token)"))," (external)"),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"Params")),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"_token"),": The token address.")),Object(a.mdx)("p",null,"Forwards any tokens that have been sent to the DarknodePayment contract\nprobably by mistake, to the DarknodePaymentStore."),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"claim-address-_darknode-external"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"claim"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(address _darknode)"))," (external)"),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"Params")),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"_darknode"),": The address of the darknode to claim.")),Object(a.mdx)("p",null,"Claims the rewards allocated to the darknode last epoch."),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"registertoken-address-_token-external"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"registerToken"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(address _token)"))," (external)"),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"Params")),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"_token"),": The address of the token to be registered.")),Object(a.mdx)("p",null,"Adds tokens to be payable. Registration is pending until next\ncycle."),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"tokenpendingregistration-address-_token-\u2192-bool-public"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"tokenPendingRegistration"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(address _token) \u2192 bool"))," (public)"),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"deregistertoken-address-_token-external"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"deregisterToken"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(address _token)"))," (external)"),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"Params")),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"_token"),": The address of the token to be deregistered.")),Object(a.mdx)("p",null,"Removes a token from the list of supported tokens.\nDeregistration is pending until next cycle."),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"updatecyclechanger-address-_addr-external"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"updateCycleChanger"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(address _addr)"))," (external)"),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"Params")),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"_addr"),": The new CycleChanger contract address.")),Object(a.mdx)("p",null,"Updates the CycleChanger contract address."),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"updatepayoutpercentage-uint256-_percent-external"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"updatePayoutPercentage"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(uint256 _percent)"))," (external)"),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"Params")),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"_percent"),": The percentage of payout for darknodes.")),Object(a.mdx)("p",null,"Updates payout percentage."),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"transferstoreownership-contract-darknodepayment-_newowner-external"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"transferStoreOwnership"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(contract DarknodePayment _newOwner)"))," (external)"),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"Params")),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"_newOwner"),": The address to transfer the ownership to.")),Object(a.mdx)("p",null,"Allows the contract owner to initiate an ownership transfer of\nthe DarknodePaymentStore."),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"claimstoreownership--external"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"claimStoreOwnership"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"()"))," (external)"),Object(a.mdx)("p",null,"Claims ownership of the store passed in to the constructor.\n",Object(a.mdx)("inlineCode",{parentName:"p"},"transferStoreOwnership")," must have previously been called when\ntransferring from another DarknodePaymentStore."),Object(a.mdx)("hr",null),Object(a.mdx)("br",null),Object(a.mdx)("h2",{id:"events"},"Events"),Object(a.mdx)("h3",{id:"logdarknodeclaim-address-_darknode-uint256-_cycle"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"LogDarknodeClaim"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(address _darknode, uint256 _cycle)"))),Object(a.mdx)("p",null,"Emitted when a darknode claims their share of reward."),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"Params")),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("inlineCode",{parentName:"p"},"_darknode"),": The darknode which claimed.")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("inlineCode",{parentName:"p"},"_cycle"),": The cycle that the darknode claimed for."))),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"logpaymentreceived-address-_payer-address-_token-uint256-_amount"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"LogPaymentReceived"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(address _payer, address _token, uint256 _amount)"))),Object(a.mdx)("p",null,"Emitted when someone pays the DarknodePayment contract."),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"Params")),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("inlineCode",{parentName:"p"},"_payer"),": The darknode which claimed.")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("inlineCode",{parentName:"p"},"_amount"),": The cycle that the darknode claimed for.")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("inlineCode",{parentName:"p"},"_token"),": The address of the token that was transferred."))),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"logdarknodewithdrew-address-_darknodeoperator-address-_darknodeid-address-_token-uint256-_value"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"LogDarknodeWithdrew"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(address _darknodeOperator, address _darknodeID, address _token, uint256 _value)"))),Object(a.mdx)("p",null,"Emitted when a darknode calls withdraw."),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"Params")),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("inlineCode",{parentName:"p"},"_darknodeOperator"),": The address of the darknode's operator.")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("inlineCode",{parentName:"p"},"_darknodeID"),": The address of the darknode which withdrew.")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("inlineCode",{parentName:"p"},"_value"),": The amount of DAI withdrawn.")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("inlineCode",{parentName:"p"},"_token"),": The address of the token that was withdrawn."))),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"logpayoutpercentchanged-uint256-_newpercent-uint256-_oldpercent"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"LogPayoutPercentChanged"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(uint256 _newPercent, uint256 _oldPercent)"))),Object(a.mdx)("p",null,"Emitted when the payout percent changes."),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"Params")),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("inlineCode",{parentName:"p"},"_newPercent"),": The new percent.")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("inlineCode",{parentName:"p"},"_oldPercent"),": The old percent."))),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"logcyclechangerchanged-address-_newcyclechanger-address-_oldcyclechanger"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"LogCycleChangerChanged"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(address _newCycleChanger, address _oldCycleChanger)"))),Object(a.mdx)("p",null,"Emitted when the CycleChanger address changes."),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"Params")),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("inlineCode",{parentName:"p"},"_newCycleChanger"),": The new CycleChanger.")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("inlineCode",{parentName:"p"},"_oldCycleChanger"),": The old CycleChanger."))),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"logtokenregistered-address-_token"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"LogTokenRegistered"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(address _token)"))),Object(a.mdx)("p",null,"Emitted when a new token is registered."),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"Params")),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"_token"),": The token that was registered.")),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"logtokenderegistered-address-_token"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"LogTokenDeregistered"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(address _token)"))),Object(a.mdx)("p",null,"Emitted when a token is deregistered."),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"Params")),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"_token"),": The token that was deregistered.")),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"logdarknoderegistryupdated-contract-darknoderegistrylogicv1-_previousdarknoderegistry-contract-darknoderegistrylogicv1-_nextdarknoderegistry"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"LogDarknodeRegistryUpdated"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(contract DarknodeRegistryLogicV1 _previousDarknodeRegistry, contract DarknodeRegistryLogicV1 _nextDarknodeRegistry)"))),Object(a.mdx)("p",null,"Emitted when the DarknodeRegistry is updated."),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"Params")),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("inlineCode",{parentName:"p"},"_previousDarknodeRegistry"),": The address of the old registry.")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("inlineCode",{parentName:"p"},"_nextDarknodeRegistry"),": The address of the new registry."))),Object(a.mdx)("hr",null))}s.isMDXComponent=!0},415:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return l})),n.d(t,"MDXProvider",(function(){return x})),n.d(t,"mdx",(function(){return O})),n.d(t,"useMDXComponents",(function(){return p})),n.d(t,"withMDXComponents",(function(){return s}));var r=n(0),d=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,d=function(e,t){if(null==e)return{};var n,r,d={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(d[n]=e[n]);return d}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}var l=d.a.createContext({}),s=function(e){return function(t){var n=p(t.components);return d.a.createElement(e,o({},t,{components:n}))}},p=function(e){var t=d.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):m(m({},t),e)),n},x=function(e){var t=p(e.components);return d.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return d.a.createElement(d.a.Fragment,{},t)}},u=d.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),l=p(n),s=r,x=l["".concat(o,".").concat(s)]||l[s]||b[s]||a;return n?d.a.createElement(x,m(m({ref:t},c),{},{components:n})):d.a.createElement(x,m({ref:t},c))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var i=2;i<a;i++)o[i]=n[i];return d.a.createElement.apply(null,o)}return d.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},416:function(e,t,n){"use strict";var r=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.DocTag=t.DocType=void 0;var d,a,o=r(n(0));t.DocType=a,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(a||(t.DocType=a={}));var c=((d={})[a.Tutorial]="#b16bfc",d[a.HowTo]="#EC0088",d[a.Reference]="#ff823a",d[a.Explanation]="#29C0AF",d);t.DocTag=function(e){var t=e.type,n=e.marginBottom;return o.default.createElement(o.default.Fragment,null,o.default.createElement("span",{style:{border:"2px solid "+c[t]||!1,borderRadius:"5px",color:c[t]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==n?n:30,display:"inline-block"}},String(t)))}}}]);