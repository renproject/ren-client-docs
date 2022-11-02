"use strict";(self.webpackChunkren_client_docs=self.webpackChunkren_client_docs||[]).push([[9362],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),h=a,_=m["".concat(s,".").concat(h)]||m[h]||u[h]||i;return n?r.createElement(_,o(o({ref:t},p),{},{components:n})):r.createElement(_,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79674:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return _},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=n(69324),c=n(93454),s=["components"],l={title:"Bitcoin"},p=void 0,u={unversionedId:"v3/reference/chains/bitcoin",id:"v3/reference/chains/bitcoin",title:"Bitcoin",description:"Bitcoin (TypeDoc)",source:"@site/ren-js/v3/reference/chains/bitcoin.mdx",sourceDirName:"v3/reference/chains",slug:"/v3/reference/chains/bitcoin",permalink:"/ren-client-docs/ren-js/v3/reference/chains/bitcoin",editUrl:"https://github.com/renproject/ren-client-docs/edit/master/ren-js/v3/reference/chains/bitcoin.mdx",tags:[],version:"current",frontMatter:{title:"Bitcoin"},sidebar:"docs",previous:{title:"Chain Interface",permalink:"/ren-client-docs/ren-js/v3/reference/chains/chain-interface"},next:{title:"Ethereum",permalink:"/ren-client-docs/ren-js/v3/reference/chains/ethereum"}},m=[{value:'Bitcoin <TypeDoc name="Bitcoin">(TypeDoc)</TypeDoc>',id:"bitcoin-typedoc",children:[],level:3},{value:"Other chains",id:"other-chains",children:[],level:3}],h={toc:m};function _(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(c.G,{type:c.e.Reference,mdxType:"DocTag"}),(0,i.kt)("h3",{id:"bitcoin-typedoc"},"Bitcoin ",(0,i.kt)(o.L,{name:"Bitcoin",mdxType:"TypeDoc"},"(TypeDoc)")),(0,i.kt)("p",null,'The Bitcoin class is initialized with a Ren network ("mainnet", "testnet" or "devnet"), or a ',(0,i.kt)(o.L,{name:"BitcoinNetworkConfig",mdxType:"TypeDoc"})," for configuring local networks."),(0,i.kt)("p",null,"The available input payloads are:"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Gateway Address"),(0,i.kt)(o.L,{name:"Bitcoin.GatewayAddress",mdxType:"TypeDoc"},"bitcoin.GatewayAddress")," should be used when you want the user to be able to deposit BTC and initiate new gateway transactions.",(0,i.kt)("p",null,"It accepts no parameters."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'renJS.gateway({\n    asset: "BTC",\n    from: bitcoin.GatewayAddress(),\n    ...\n})\n'))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Transaction"),(0,i.kt)(o.L,{name:"Bitcoin.Transaction",mdxType:"TypeDoc"},"bitcoin.Transaction")," allows you to specify a specific Bitcoin transaction, instead of watching for deposits to the gateway address. Note that the recipient address of the transaction should still match the gateway address generated from the to-chain's parameters.",(0,i.kt)("p",null,"The transaction should be of type ",(0,i.kt)("code",null,"Partial<",(0,i.kt)(o.L,{name:"ChainTransaction",mdxType:"TypeDoc"}),">"),", with at least one of the ",(0,i.kt)("inlineCode",{parentName:"p"},"txid")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"txidFormatted")," is defined."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'renJS.gateway({\n    asset: "BTC",\n    from: bitcoin.Transaction({\n      // The transaction\'s hash in the usual Bitcoin hex encoding.\n      txidFormatted: "a1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d",\n      // The transaction\'s hash in URL-base64 encoding.\n      txid: "oQddtV1BbTyhmfVbYITiEVuTReFsXPMC_IDp1fv11I0",\n      // The vOut/txindex of the specific transaction ouput.\n      txindex: "0"\n    }),\n    ...\n})\n'))),(0,i.kt)("p",null,"The available output payloads are:"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Address"),(0,i.kt)(o.L,{name:"Bitcoin.Address",mdxType:"TypeDoc"},"bitcoin.Address")," allows you to specify the Bitcoin address for receiving the released BTC.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'renJS.gateway({\n    asset: "BTC",\n    from: bitcoin.Address("miMi2VET41YV1j6SDNTeZoPBbmH8B4nEx6"),\n    ...\n})\n'))),(0,i.kt)("h3",{id:"other-chains"},"Other chains"),(0,i.kt)("p",null,"A list of other chains that implement this same interface are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)(o.L,{name:"BitcoinCash",mdxType:"TypeDoc"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)(o.L,{name:"Zcash",mdxType:"TypeDoc"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)(o.L,{name:"Dogecoin",mdxType:"TypeDoc"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)(o.L,{name:"DigiByte",mdxType:"TypeDoc"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)(o.L,{name:"Terra",mdxType:"TypeDoc"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)(o.L,{name:"Filecoin",mdxType:"TypeDoc"}))))}_.isMDXComponent=!0},93454:function(e,t,n){n.d(t,{G:function(){return c},e:function(){return a}});var r,a,i=n(67294);!function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(a||(a={}));var o=((r={})[a.Tutorial]="#b48ead",r[a.HowTo]="#69a8b9",r[a.Reference]="#bf616a",r[a.Explanation]="#d2b06c",r),c=function(e){var t=e.type,n=e.marginBottom;return i.createElement(i.Fragment,null,i.createElement("span",{style:{border:"2px solid "+o[t]||0,borderRadius:"5px",color:o[t]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==n?n:30,display:"inline-block"}},String(t)))}},69324:function(e,t,n){n.d(t,{L:function(){return i}});var r=n(67294),a={Asset:"enums/_renproject_chains.Asset.html",Chain:"enums/_renproject_chains.Chain.html",RPCMethod:"enums/_renproject_provider.RPCMethod.html",ChainTransactionStatus:"enums/_renproject_utils.ChainTransactionStatus.html",InputType:"enums/_renproject_utils.InputType.html",LogLevel:"enums/_renproject_utils.LogLevel.html",OutputType:"enums/_renproject_utils.OutputType.html",PackPrimitive:"enums/_renproject_utils.PackPrimitive.html",RenJSError:"enums/_renproject_utils.RenJSError.html",RenNetwork:"enums/_renproject_utils.RenNetwork.html",TxStatus:"enums/_renproject_utils.TxStatus.html",EVMParam:"enums/_renproject_chains_ethereum.EVMParam.html",Bitcoin:"classes/_renproject_chains_bitcoin.Bitcoin.html",BitcoinBaseChain:"classes/_renproject_chains_bitcoin.BitcoinBaseChain.html",BitcoinCash:"classes/_renproject_chains_bitcoin.BitcoinCash.html",DigiByte:"classes/_renproject_chains_bitcoin.DigiByte.html",Dogecoin:"classes/_renproject_chains_bitcoin.Dogecoin.html",Zcash:"classes/_renproject_chains_bitcoin.Zcash.html",Arbitrum:"classes/_renproject_chains_ethereum.Arbitrum.html",Avalanche:"classes/_renproject_chains_ethereum.Avalanche.html",BinanceSmartChain:"classes/_renproject_chains_ethereum.BinanceSmartChain.html",Ethereum:"classes/_renproject_chains_ethereum.Ethereum.html",Fantom:"classes/_renproject_chains_ethereum.Fantom.html",Goerli:"classes/_renproject_chains_ethereum.Goerli.html",Polygon:"classes/_renproject_chains_ethereum.Polygon.html",Filecoin:"classes/_renproject_chains_filecoin.Filecoin.html",Solana:"classes/_renproject_chains_solana.Solana.html",Terra:"classes/_renproject_chains_terra.Terra.html",MockChain:"classes/_renproject_mock_provider.MockChain.html",MockProvider:"classes/_renproject_mock_provider.MockProvider.html",RenVMProvider:"classes/_renproject_provider.RenVMProvider.html",Gateway:"classes/_renproject_ren.Gateway.html",GatewayTransaction:"classes/_renproject_ren.GatewayTransaction.html",RenJS:"classes/_renproject_ren.RenJS.html",RenVMTxSubmitter:"classes/_renproject_ren.RenVMTxSubmitter.html",DefaultTxWaiter:"classes/_renproject_utils.DefaultTxWaiter.html",ErrorWithCode:"classes/_renproject_utils.ErrorWithCode.html",EventEmitterTyped:"classes/_renproject_utils.EventEmitterTyped.html",TxWaiterProxy:"classes/_renproject_utils.TxWaiterProxy.html",BitcoinNetworkConfig:"interfaces/_renproject_chains_bitcoin.BitcoinNetworkConfig.html",BitcoinOutputPayload:"interfaces/_renproject_chains_bitcoin.BitcoinOutputPayload.html",EthereumClassConfig:"interfaces/_renproject_chains_ethereum.EthereumClassConfig.html",EvmNetworkConfig:"interfaces/_renproject_chains_ethereum.EvmNetworkConfig.html",FilecoinNetworkConfig:"interfaces/_renproject_chains_filecoin.FilecoinNetworkConfig.html",FilecoinOutputPayload:"interfaces/_renproject_chains_filecoin.FilecoinOutputPayload.html",SolanaPayloadInterface:"interfaces/_renproject_chains_solana.SolanaPayloadInterface.html",TerraOutputPayload:"interfaces/_renproject_chains_terra.TerraOutputPayload.html",BlockState:"interfaces/_renproject_provider.BlockState.html",MarshalledRenVMBlock:"interfaces/_renproject_provider.MarshalledRenVMBlock.html",ParamsQueryBlock:"interfaces/_renproject_provider.ParamsQueryBlock.html",ParamsQueryBlockState:"interfaces/_renproject_provider.ParamsQueryBlockState.html",ParamsQueryBlocks:"interfaces/_renproject_provider.ParamsQueryBlocks.html",ParamsQueryConfig:"interfaces/_renproject_provider.ParamsQueryConfig.html",ParamsQueryTx:"interfaces/_renproject_provider.ParamsQueryTx.html",ParamsQueryTxs:"interfaces/_renproject_provider.ParamsQueryTxs.html",ParamsSubmitTx:"interfaces/_renproject_provider.ParamsSubmitTx.html",RenVMBlock:"interfaces/_renproject_provider.RenVMBlock.html",RenVMProviderInterface:"interfaces/_renproject_provider.RenVMProviderInterface.html",RenVMTransaction:"interfaces/_renproject_provider.RenVMTransaction.html",RenVMTransactionWithStatus:"interfaces/_renproject_provider.RenVMTransactionWithStatus.html",ResponseQueryBlock:"interfaces/_renproject_provider.ResponseQueryBlock.html",ResponseQueryBlockState:"interfaces/_renproject_provider.ResponseQueryBlockState.html",ResponseQueryBlocks:"interfaces/_renproject_provider.ResponseQueryBlocks.html",ResponseQueryConfig:"interfaces/_renproject_provider.ResponseQueryConfig.html",ResponseQueryTx:"interfaces/_renproject_provider.ResponseQueryTx.html",ResponseQueryTxs:"interfaces/_renproject_provider.ResponseQueryTxs.html",ResponseSubmitGateway:"interfaces/_renproject_provider.ResponseSubmitGateway.html",ResponseSubmitTx:"interfaces/_renproject_provider.ResponseSubmitTx.html",SubmitGatewayInput:"interfaces/_renproject_provider.SubmitGatewayInput.html",TransactionInput:"interfaces/_renproject_provider.TransactionInput.html",TransactionOutput:"interfaces/_renproject_provider.TransactionOutput.html",GatewayFees:"interfaces/_renproject_ren.GatewayFees.html",ChainCommon:"interfaces/_renproject_utils.ChainCommon.html",ChainTransaction:"interfaces/_renproject_utils.ChainTransaction.html",ChainTransactionProgress:"interfaces/_renproject_utils.ChainTransactionProgress.html",ContractChain:"interfaces/_renproject_utils.ContractChain.html",DepositChain:"interfaces/_renproject_utils.DepositChain.html",InputChainTransaction:"interfaces/_renproject_utils.InputChainTransaction.html",Logger:"interfaces/_renproject_utils.Logger.html",PackListType:"interfaces/_renproject_utils.PackListType.html",PackStructType:"interfaces/_renproject_utils.PackStructType.html",RenVMShard:"interfaces/_renproject_utils.RenVMShard.html",TxSubmitter:"interfaces/_renproject_utils.TxSubmitter.html",TxWaiter:"interfaces/_renproject_utils.TxWaiter.html",TypedPackValue:"interfaces/_renproject_utils.TypedPackValue.html"},i=function(e){var t=e.name,n=e.children,i=t.split("."),o=i[0],c=i[1];return r.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://renproject.github.io/ren-js-v3-docs/"+a[o]+(c?"#"+c:"")},n||t,a[o]?null:r.createElement("span",{style:{color:"#bf616a"}}," (Link not found)"))}}}]);