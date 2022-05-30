"use strict";(self.webpackChunkren_client_docs=self.webpackChunkren_client_docs||[]).push([[875],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(r),m=a,d=h["".concat(c,".").concat(m)]||h[m]||u[m]||i;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},98518:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return h}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=r(69324),s=r(93454),c=["components"],l={title:"3. Chain Transactions"},p=void 0,u={unversionedId:"v3/tutorial/chain-transactions",id:"v3/tutorial/chain-transactions",title:"3. Chain Transactions",description:"As described in the Introducton, the RenJS hierarchy looks like:",source:"@site/ren-js/v3/tutorial/3-chain-transactions.mdx",sourceDirName:"v3/tutorial",slug:"/v3/tutorial/chain-transactions",permalink:"/ren-client-docs/ren-js/v3/tutorial/chain-transactions",editUrl:"https://github.com/renproject/ren-client-docs/edit/master/ren-js/v3/tutorial/3-chain-transactions.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"3. Chain Transactions"},sidebar:"docs",previous:{title:"2. React Setup",permalink:"/ren-client-docs/ren-js/v3/tutorial/react-setup"},next:{title:"4. Gateway Transactions",permalink:"/ren-client-docs/ren-js/v3/tutorial/gateway-transactions"}},h=[{value:"Progress",id:"progress",children:[],level:3},{value:"Chain Status",id:"chain-status",children:[{value:"1. <code>&quot;ready&quot;</code>",id:"1-ready",children:[],level:4},{value:"2. <code>&quot;confirming&quot;</code>",id:"2-confirming",children:[],level:4},{value:"3. <code>&quot;done&quot;</code>",id:"3-done",children:[],level:4},{value:"4. <code>&quot;reverted&quot;</code>",id:"4-reverted",children:[],level:4}],level:3}],m={toc:h};function d(e){var t=e.components,r=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(s.G,{type:s.e.Tutorial,mdxType:"DocTag"}),(0,i.kt)("p",null,"As described in the ",(0,i.kt)("a",{parentName:"p",href:"../introduction"},"Introducton"),", the RenJS hierarchy looks like:"),(0,i.kt)("img",{src:"/ren-client-docs/img/tutorial-hierarchy.png",width:"500"}),(0,i.kt)("p",null,"Starting at the bottom, we'll write a button component ",(0,i.kt)("inlineCode",{parentName:"p"},"ChainTx")," for handling chain transactions. Chain transactions in RenJS implement either the ",(0,i.kt)(o.L,{name:"TxWaiter",mdxType:"TypeDoc"})," or the ",(0,i.kt)(o.L,{name:"TxSubmitter",mdxType:"TypeDoc"})," interface."),(0,i.kt)("p",null,"The interface for the ChainTx component will look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'reference title="src/ChainTx.tsx"',reference:!0,title:'"src/ChainTx.tsx"'},"https://github.com/renproject/ren-js-v3-tutorial/blob/master/tutorial-ui/src/ChainTx_0.tsx\n")),(0,i.kt)("h3",{id:"progress"},"Progress"),(0,i.kt)("p",null,"Chain Transactions have an ",(0,i.kt)("inlineCode",{parentName:"p"},"eventListener")," member which emits ",(0,i.kt)("inlineCode",{parentName:"p"},'"progress"')," events whenever the state of the transaction changes - this includes confirmations, transaction hashes, error messages, et. cetera."),(0,i.kt)("p",null,"In order to listen to these events, we store the latest event in a React state hook, and use an effect hook to set up the event listener."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'reference title=""',reference:!0,title:'""'},"https://github.com/renproject/ren-js-v3-tutorial/blob/master/tutorial-ui/src/ChainTx.tsx#L28-L47\n")),(0,i.kt)("h3",{id:"chain-status"},"Chain Status"),(0,i.kt)("p",null,"We now check the status of the transaction, and handle each status type accordingly, inside the return statement - ",(0,i.kt)("inlineCode",{parentName:"p"},"return (<>...</>);"),"."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Async Button")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"To help keep this tutorial from getting too long, we've made a simple component ",(0,i.kt)("inlineCode",{parentName:"p"},"AsyncButton")," in the package ",(0,i.kt)("inlineCode",{parentName:"p"},"async-button")," which deals with calling an asynchronous function after a button click."),(0,i.kt)("p",{parentName:"div"},"AsyncButton extends the standard HTML button with the following props:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'reference title=""',reference:!0,title:'""'},"https://github.com/noah-ren/async-button/blob/main/src/index.tsx#L8-L15\n")))),(0,i.kt)("h4",{id:"1-ready"},"1. ",(0,i.kt)("inlineCode",{parentName:"h4"},'"ready"')),(0,i.kt)("p",null,"If the chain transaction hasn't been submitted yet, its status will be ",(0,i.kt)("inlineCode",{parentName:"p"},'"ready"'),", and the component should show a button to the user for submitting the transaction."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'reference title=""',reference:!0,title:'""'},"https://github.com/renproject/ren-js-v3-tutorial/blob/master/tutorial-ui/src/ChainTx.tsx#L51-L62\n")),(0,i.kt)("h4",{id:"2-confirming"},"2. ",(0,i.kt)("inlineCode",{parentName:"h4"},'"confirming"')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'reference title=""',reference:!0,title:'""'},"https://github.com/renproject/ren-js-v3-tutorial/blob/master/tutorial-ui/src/ChainTx.tsx#L64-L77\n")),(0,i.kt)("h4",{id:"3-done"},"3. ",(0,i.kt)("inlineCode",{parentName:"h4"},'"done"')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'reference title=""',reference:!0,title:'""'},"https://github.com/renproject/ren-js-v3-tutorial/blob/master/tutorial-ui/src/ChainTx.tsx#L79-L84\n")),(0,i.kt)("h4",{id:"4-reverted"},"4. ",(0,i.kt)("inlineCode",{parentName:"h4"},'"reverted"')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'reference title=""',reference:!0,title:'""'},"https://github.com/renproject/ren-js-v3-tutorial/blob/master/tutorial-ui/src/ChainTx.tsx#L86-L89\n")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"After putting this all together, you'll now have a component that can handle chain transactions for any chain."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Click to see full code for ChainTx.tsx"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'reference link title="ChainTx.tsx"',reference:!0,link:!0,title:'"ChainTx.tsx"'},"https://github.com/renproject/ren-js-v3-tutorial/blob/master/tutorial-ui/src/ChainTx.tsx\n"))))}d.isMDXComponent=!0},93454:function(e,t,r){r.d(t,{G:function(){return s},e:function(){return a}});var n,a,i=r(67294);!function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(a||(a={}));var o=((n={})[a.Tutorial]="#b48ead",n[a.HowTo]="#69a8b9",n[a.Reference]="#bf616a",n[a.Explanation]="#d2b06c",n),s=function(e){var t=e.type,r=e.marginBottom;return i.createElement(i.Fragment,null,i.createElement("span",{style:{border:"2px solid "+o[t]||0,borderRadius:"5px",color:o[t]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==r?r:30,display:"inline-block"}},String(t)))}},69324:function(e,t,r){r.d(t,{L:function(){return i}});var n=r(67294),a={Asset:"enums/_renproject_chains.Asset.html",Chain:"enums/_renproject_chains.Chain.html",RPCMethod:"enums/_renproject_provider.RPCMethod.html",ChainTransactionStatus:"enums/_renproject_utils.ChainTransactionStatus.html",InputType:"enums/_renproject_utils.InputType.html",LogLevel:"enums/_renproject_utils.LogLevel.html",OutputType:"enums/_renproject_utils.OutputType.html",PackPrimitive:"enums/_renproject_utils.PackPrimitive.html",RenJSError:"enums/_renproject_utils.RenJSError.html",RenNetwork:"enums/_renproject_utils.RenNetwork.html",TxStatus:"enums/_renproject_utils.TxStatus.html",EVMParam:"enums/_renproject_chains_ethereum.EVMParam.html",Bitcoin:"classes/_renproject_chains_bitcoin.Bitcoin.html",BitcoinBaseChain:"classes/_renproject_chains_bitcoin.BitcoinBaseChain.html",BitcoinCash:"classes/_renproject_chains_bitcoin.BitcoinCash.html",DigiByte:"classes/_renproject_chains_bitcoin.DigiByte.html",Dogecoin:"classes/_renproject_chains_bitcoin.Dogecoin.html",Zcash:"classes/_renproject_chains_bitcoin.Zcash.html",Arbitrum:"classes/_renproject_chains_ethereum.Arbitrum.html",Avalanche:"classes/_renproject_chains_ethereum.Avalanche.html",BinanceSmartChain:"classes/_renproject_chains_ethereum.BinanceSmartChain.html",Ethereum:"classes/_renproject_chains_ethereum.Ethereum.html",Fantom:"classes/_renproject_chains_ethereum.Fantom.html",Goerli:"classes/_renproject_chains_ethereum.Goerli.html",Polygon:"classes/_renproject_chains_ethereum.Polygon.html",Filecoin:"classes/_renproject_chains_filecoin.Filecoin.html",Solana:"classes/_renproject_chains_solana.Solana.html",Terra:"classes/_renproject_chains_terra.Terra.html",MockChain:"classes/_renproject_mock_provider.MockChain.html",MockProvider:"classes/_renproject_mock_provider.MockProvider.html",RenVMProvider:"classes/_renproject_provider.RenVMProvider.html",Gateway:"classes/_renproject_ren.Gateway.html",GatewayTransaction:"classes/_renproject_ren.GatewayTransaction.html",RenJS:"classes/_renproject_ren.RenJS.html",RenVMTxSubmitter:"classes/_renproject_ren.RenVMTxSubmitter.html",DefaultTxWaiter:"classes/_renproject_utils.DefaultTxWaiter.html",ErrorWithCode:"classes/_renproject_utils.ErrorWithCode.html",EventEmitterTyped:"classes/_renproject_utils.EventEmitterTyped.html",TxWaiterProxy:"classes/_renproject_utils.TxWaiterProxy.html",BitcoinNetworkConfig:"interfaces/_renproject_chains_bitcoin.BitcoinNetworkConfig.html",BitcoinOutputPayload:"interfaces/_renproject_chains_bitcoin.BitcoinOutputPayload.html",EthereumClassConfig:"interfaces/_renproject_chains_ethereum.EthereumClassConfig.html",EvmNetworkConfig:"interfaces/_renproject_chains_ethereum.EvmNetworkConfig.html",FilecoinNetworkConfig:"interfaces/_renproject_chains_filecoin.FilecoinNetworkConfig.html",FilecoinOutputPayload:"interfaces/_renproject_chains_filecoin.FilecoinOutputPayload.html",SolanaPayloadInterface:"interfaces/_renproject_chains_solana.SolanaPayloadInterface.html",TerraOutputPayload:"interfaces/_renproject_chains_terra.TerraOutputPayload.html",BlockState:"interfaces/_renproject_provider.BlockState.html",MarshalledRenVMBlock:"interfaces/_renproject_provider.MarshalledRenVMBlock.html",ParamsQueryBlock:"interfaces/_renproject_provider.ParamsQueryBlock.html",ParamsQueryBlockState:"interfaces/_renproject_provider.ParamsQueryBlockState.html",ParamsQueryBlocks:"interfaces/_renproject_provider.ParamsQueryBlocks.html",ParamsQueryConfig:"interfaces/_renproject_provider.ParamsQueryConfig.html",ParamsQueryTx:"interfaces/_renproject_provider.ParamsQueryTx.html",ParamsQueryTxs:"interfaces/_renproject_provider.ParamsQueryTxs.html",ParamsSubmitTx:"interfaces/_renproject_provider.ParamsSubmitTx.html",RenVMBlock:"interfaces/_renproject_provider.RenVMBlock.html",RenVMProviderInterface:"interfaces/_renproject_provider.RenVMProviderInterface.html",RenVMTransaction:"interfaces/_renproject_provider.RenVMTransaction.html",RenVMTransactionWithStatus:"interfaces/_renproject_provider.RenVMTransactionWithStatus.html",ResponseQueryBlock:"interfaces/_renproject_provider.ResponseQueryBlock.html",ResponseQueryBlockState:"interfaces/_renproject_provider.ResponseQueryBlockState.html",ResponseQueryBlocks:"interfaces/_renproject_provider.ResponseQueryBlocks.html",ResponseQueryConfig:"interfaces/_renproject_provider.ResponseQueryConfig.html",ResponseQueryTx:"interfaces/_renproject_provider.ResponseQueryTx.html",ResponseQueryTxs:"interfaces/_renproject_provider.ResponseQueryTxs.html",ResponseSubmitGateway:"interfaces/_renproject_provider.ResponseSubmitGateway.html",ResponseSubmitTx:"interfaces/_renproject_provider.ResponseSubmitTx.html",SubmitGatewayInput:"interfaces/_renproject_provider.SubmitGatewayInput.html",TransactionInput:"interfaces/_renproject_provider.TransactionInput.html",TransactionOutput:"interfaces/_renproject_provider.TransactionOutput.html",GatewayFees:"interfaces/_renproject_ren.GatewayFees.html",ChainCommon:"interfaces/_renproject_utils.ChainCommon.html",ChainTransaction:"interfaces/_renproject_utils.ChainTransaction.html",ChainTransactionProgress:"interfaces/_renproject_utils.ChainTransactionProgress.html",ContractChain:"interfaces/_renproject_utils.ContractChain.html",DepositChain:"interfaces/_renproject_utils.DepositChain.html",InputChainTransaction:"interfaces/_renproject_utils.InputChainTransaction.html",Logger:"interfaces/_renproject_utils.Logger.html",PackListType:"interfaces/_renproject_utils.PackListType.html",PackStructType:"interfaces/_renproject_utils.PackStructType.html",RenVMShard:"interfaces/_renproject_utils.RenVMShard.html",TxSubmitter:"interfaces/_renproject_utils.TxSubmitter.html",TxWaiter:"interfaces/_renproject_utils.TxWaiter.html",TypedPackValue:"interfaces/_renproject_utils.TypedPackValue.html"},i=function(e){var t=e.name,r=e.children,i=t.split("."),o=i[0],s=i[1];return n.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://renproject.github.io/ren-js-v3-docs/"+a[o]+(s?"#"+s:"")},r||t,a[o]?null:n.createElement("span",{style:{color:"#bf616a"}}," (Link not found)"))}}}]);