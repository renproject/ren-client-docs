"use strict";(self.webpackChunkren_client_docs=self.webpackChunkren_client_docs||[]).push([[1358],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),h=r,d=m["".concat(c,".").concat(h)]||m[h]||u[h]||i;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62591:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return m},default:function(){return v},frontMatter:function(){return u},metadata:function(){return h},toc:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=n(26396),s=n(58215),c=n(93454),l=n(69324),p=["components"],u={title:"Introduction"},m=void 0,h={unversionedId:"v3/introduction",id:"v3/introduction",title:"Introduction",description:"Introduction",source:"@site/ren-js/v3/introduction.mdx",sourceDirName:"v3",slug:"/v3/introduction",permalink:"/ren-client-docs/ren-js/v3/introduction",editUrl:"https://github.com/renproject/ren-client-docs/edit/master/ren-js/v3/introduction.mdx",tags:[],version:"current",frontMatter:{title:"Introduction"},sidebar:"docs",previous:{title:"Quick Start",permalink:"/ren-client-docs/ren-js/v3/quick-start"},next:{title:"Changelog",permalink:"/ren-client-docs/ren-js/v3/changelog"}},d=[{value:"Introduction",id:"introduction",children:[],level:3},{value:"Installing",id:"installing",children:[],level:3},{value:"Gateways and gateway transactions",id:"gateways-and-gateway-transactions",children:[],level:3}],f={toc:d};function v(e){var t=e.components,n=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(c.G,{type:c.e.Explanation,mdxType:"DocTag"}),(0,i.kt)("h3",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"RenVM")," is an open protocol for connecting cryptocurrencies and decentralized apps across different blockchains."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"RenJS")," is the official JavaScript/TypeScript library for integrating with RenVM, allowing developers to build cross-chain applications."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Example")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("em",{parentName:"p"},"Moving an asset like BTC to Ethereum involves minting renBTC, an ERC20 token on Ethereum. When 1 BTC is locked on Bitcoin, 1 renBTC is minted on Ethereum which can be redeemed at any time for BTC again.")))),(0,i.kt)("h3",{id:"installing"},"Installing"),(0,i.kt)("p",null,"Start by installing RenJS using ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn"),", along with the collection of modules for connecting to various chains:"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @renproject/ren@next @renproject/chains@next\n"))),(0,i.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save @renproject/ren@next @renproject/chains@next\n")))),(0,i.kt)("p",null,"You can now import RenJS and the handlers for each chain, and initialize them with the desired network. (See the ",(0,i.kt)("a",{parentName:"p",href:"./quick-start"},"Quick Start")," page, or the ",(0,i.kt)("a",{parentName:"p",href:"./reference/chains/ethereum"},"Ethereum")," and ",(0,i.kt)("a",{parentName:"p",href:"./reference/chains/solana"},"Solana")," docs for how to initialize their providers and signers)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'// Import RenJS and chains.\nimport RenJS from "@renproject/ren";\nimport { Bitcoin, Ethereum, Solana } from "@renproject/chains";\n\n// Initialize each chain.\nconst bitcoin = new Bitcoin({ network: "testnet" });\nconst ethereum = new Ethereum({ network: "testnet", provider, signer });\nconst solana = new Solana({ network: "testnet", provider, signer });\n\n// Initialize RenJS and pass in the initialized chains.\nconst renJS = new RenJS("testnet").withChains(bitcoin, ethereum, solana);\n')),(0,i.kt)("h3",{id:"gateways-and-gateway-transactions"},"Gateways and gateway transactions"),(0,i.kt)("p",null,"The main flow of interacting with RenJS is to first create a ",(0,i.kt)("strong",{parentName:"p"},"gateway"),", which contains all the required information for moving a specific asset between chains, including a recipient address or contract, and then move the asset through the gateway as one or more ",(0,i.kt)("strong",{parentName:"p"},"gateway transactions"),"."),(0,i.kt)("p",null,"A gateway transaction is a collection of three sub-transactions on different chains:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"in")," input transaction will involve locking or burning funds on an origin chain.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"renVM")," transaction is submitted to RenVM.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"out")," output transaction will mint or release funds on the target chain."))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"in")," transaction will usually be submitted by the user, either as a deposit to an address or as a call to a smart contract. The ",(0,i.kt)("inlineCode",{parentName:"p"},"renVM")," transaction will then result in RenVM either generating the ",(0,i.kt)("inlineCode",{parentName:"p"},"out")," transaction, or returning a signature that can be submitted by the user as part of the ",(0,i.kt)("inlineCode",{parentName:"p"},"out")," transaction."),(0,i.kt)("p",null,"RenVM will wait for the ",(0,i.kt)("inlineCode",{parentName:"p"},"in")," transaction to reach the required number of confirmations before the ",(0,i.kt)("inlineCode",{parentName:"p"},"renVM")," transaction can be processed."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Example")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("em",{parentName:"p"},"As an example, moving BTC from Bitcoin to Ethereum will involve:")),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"A BTC deposit by the user to the gateway's associated ",(0,i.kt)("strong",{parentName:"em"},"gateway address"),"."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"The RenVM transaction which will generate a signature."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"An Ethereum transaction by the user to submit the signature and ",(0,i.kt)("strong",{parentName:"em"},"mint")," renBTC.")))),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("em",{parentName:"p"},"In order to return the BTC back to Bitcoin, the three transactions will be:")),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"An Ethereum transaction by the user to burn the renBTC."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"The RenVM transaction to confirm the burn of the renBTC, which will then generate the third transaction:"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"A BTC transfer from RenVM's custody to the address specified by the user.")))))),(0,i.kt)("p",null,"Initializing a gateway involves specifying all of the details, including the asset and the origin and target chain:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'// A gateway for moving BTC from Bitcoin to Ethereum.\nconst btcGateway = await renJS.gateway({\n    asset: "BTC", // or bitcoin.assets.BTC,\n    from: bitcoin.GatewayAddress(),\n    to: ethereum.Account(),\n});\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'// A gateway for moving DAI (originally from Ethereum) from the user\'s\n// Binance Smart Chain account to a different address on Fantom.\nconst daiGateway = await renJS.gateway({\n    asset: ethereum.assets.DAI,\n    from: bsc.Account(),\n    to: fantom.Address("0x123456..."),\n});\n')),(0,i.kt)("p",null,"Each chain has various ways of specifying where the assets should come from or where they should go - for example ",(0,i.kt)("inlineCode",{parentName:"p"},"bitcoin.GatewayAddress")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"bitcoin.Address"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ethereum.Account")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ethereum.Contract"),", and so on. These are documented on the page for each chain."),(0,i.kt)("p",null,"After initializing the gateway, the next step will be to either display a gateway address, or, for web3 chains, to request the user to submit the ",(0,i.kt)("inlineCode",{parentName:"p"},"in")," transaction through their browser-connected wallet (e.g. MetaMask for Ethereum, or Phantom for Solana):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// Print the gateway address\nconsole.log(`\\\n    Deposit BTC to the following address: ${btcGateway.gatewayAddress}\\\n`);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// Submit the input transaction. This will prompt the user to sign\n// a transaction, such as through MetaMask for Ethereum or other\n// EVM chains.\ndaiGateway.in.submit();\n")),(0,i.kt)("p",null,"Note that some chains require additional setup transactions to be submitted before the input transaction can be completed - see ",(0,i.kt)("a",{parentName:"p",href:"./reference/setup-transactions"},"Setup Transactions"),"."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("h3",{parentName:"div",id:"chain-transactions"},"Chain transactions"),(0,i.kt)("p",{parentName:"div"},"Each of the ",(0,i.kt)("inlineCode",{parentName:"p"},"in"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"renVM")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"out")," transactions are all instances of the ",(0,i.kt)("inlineCode",{parentName:"p"},"TxWaiter")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"TxSubmitter")," interfaces, which follows the format of separating the submitting and the waiting for confirmations into two methods. When a transaction is generated outside of RenJS (e.g. a BTC deposit to a gateway address), the transaction will only have a ",(0,i.kt)("inlineCode",{parentName:"p"},".wait()")," method which will only return once the transaction has sufficient confirmations. When a transaction is being created through RenJS, it will also have a ",(0,i.kt)("inlineCode",{parentName:"p"},".submit()")," method which will create and submit the transaction."),(0,i.kt)("p",{parentName:"div"},"These interfaces can be found here: ",(0,i.kt)(l.L,{name:"TxWaiter",mdxType:"TypeDoc"})," and ",(0,i.kt)(l.L,{name:"TxSubmitter",mdxType:"TypeDoc"})))),(0,i.kt)("p",null,"The next step is to handle any deposits that are received at the gateway address, or any burn or lock events detected in the ",(0,i.kt)("inlineCode",{parentName:"p"},"in")," transaction. Each deposit or event will create a new ",(0,i.kt)("strong",{parentName:"p"},"gateway transaction"),", described earlier."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'gateway.on("transaction", (tx) => {\n    // Wait for the `in` transaction to have enough confirmations.\n    await tx.in.wait();\n\n    // Submit the transaction to RenVM, and wait for it to be confirmed.\n    await tx.renVM.submit();\n    await tx.renVM.wait();\n\n    // Check if the user needs to submit the output transaction - it may have\n    // already been submitted by RenVM.\n    if (tx.out.submit) {\n        await tx.out.submit();\n    }\n    // Wait for the output transaction to be confirmed.\n    await tx.out.wait();\n});\n')))}v.isMDXComponent=!0},93454:function(e,t,n){n.d(t,{G:function(){return s},e:function(){return r}});var a,r,i=n(67294);!function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(r||(r={}));var o=((a={})[r.Tutorial]="#b48ead",a[r.HowTo]="#69a8b9",a[r.Reference]="#bf616a",a[r.Explanation]="#d2b06c",a),s=function(e){var t=e.type,n=e.marginBottom;return i.createElement(i.Fragment,null,i.createElement("span",{style:{border:"2px solid "+o[t]||0,borderRadius:"5px",color:o[t]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==n?n:30,display:"inline-block"}},String(t)))}},69324:function(e,t,n){n.d(t,{L:function(){return i}});var a=n(67294),r={Asset:"enums/_renproject_chains.Asset.html",Chain:"enums/_renproject_chains.Chain.html",RPCMethod:"enums/_renproject_provider.RPCMethod.html",ChainTransactionStatus:"enums/_renproject_utils.ChainTransactionStatus.html",InputType:"enums/_renproject_utils.InputType.html",LogLevel:"enums/_renproject_utils.LogLevel.html",OutputType:"enums/_renproject_utils.OutputType.html",PackPrimitive:"enums/_renproject_utils.PackPrimitive.html",RenJSError:"enums/_renproject_utils.RenJSError.html",RenNetwork:"enums/_renproject_utils.RenNetwork.html",TxStatus:"enums/_renproject_utils.TxStatus.html",EVMParam:"enums/_renproject_chains_ethereum.EVMParam.html",Bitcoin:"classes/_renproject_chains_bitcoin.Bitcoin.html",BitcoinBaseChain:"classes/_renproject_chains_bitcoin.BitcoinBaseChain.html",BitcoinCash:"classes/_renproject_chains_bitcoin.BitcoinCash.html",DigiByte:"classes/_renproject_chains_bitcoin.DigiByte.html",Dogecoin:"classes/_renproject_chains_bitcoin.Dogecoin.html",Zcash:"classes/_renproject_chains_bitcoin.Zcash.html",Arbitrum:"classes/_renproject_chains_ethereum.Arbitrum.html",Avalanche:"classes/_renproject_chains_ethereum.Avalanche.html",BinanceSmartChain:"classes/_renproject_chains_ethereum.BinanceSmartChain.html",Ethereum:"classes/_renproject_chains_ethereum.Ethereum.html",Fantom:"classes/_renproject_chains_ethereum.Fantom.html",Goerli:"classes/_renproject_chains_ethereum.Goerli.html",Polygon:"classes/_renproject_chains_ethereum.Polygon.html",Filecoin:"classes/_renproject_chains_filecoin.Filecoin.html",Solana:"classes/_renproject_chains_solana.Solana.html",Terra:"classes/_renproject_chains_terra.Terra.html",MockChain:"classes/_renproject_mock_provider.MockChain.html",MockProvider:"classes/_renproject_mock_provider.MockProvider.html",RenVMProvider:"classes/_renproject_provider.RenVMProvider.html",Gateway:"classes/_renproject_ren.Gateway.html",GatewayTransaction:"classes/_renproject_ren.GatewayTransaction.html",RenJS:"classes/_renproject_ren.RenJS.html",RenVMTxSubmitter:"classes/_renproject_ren.RenVMTxSubmitter.html",DefaultTxWaiter:"classes/_renproject_utils.DefaultTxWaiter.html",ErrorWithCode:"classes/_renproject_utils.ErrorWithCode.html",EventEmitterTyped:"classes/_renproject_utils.EventEmitterTyped.html",TxWaiterProxy:"classes/_renproject_utils.TxWaiterProxy.html",BitcoinNetworkConfig:"interfaces/_renproject_chains_bitcoin.BitcoinNetworkConfig.html",BitcoinOutputPayload:"interfaces/_renproject_chains_bitcoin.BitcoinOutputPayload.html",EthereumClassConfig:"interfaces/_renproject_chains_ethereum.EthereumClassConfig.html",EvmNetworkConfig:"interfaces/_renproject_chains_ethereum.EvmNetworkConfig.html",FilecoinNetworkConfig:"interfaces/_renproject_chains_filecoin.FilecoinNetworkConfig.html",FilecoinOutputPayload:"interfaces/_renproject_chains_filecoin.FilecoinOutputPayload.html",SolanaPayloadInterface:"interfaces/_renproject_chains_solana.SolanaPayloadInterface.html",TerraOutputPayload:"interfaces/_renproject_chains_terra.TerraOutputPayload.html",BlockState:"interfaces/_renproject_provider.BlockState.html",MarshalledRenVMBlock:"interfaces/_renproject_provider.MarshalledRenVMBlock.html",ParamsQueryBlock:"interfaces/_renproject_provider.ParamsQueryBlock.html",ParamsQueryBlockState:"interfaces/_renproject_provider.ParamsQueryBlockState.html",ParamsQueryBlocks:"interfaces/_renproject_provider.ParamsQueryBlocks.html",ParamsQueryConfig:"interfaces/_renproject_provider.ParamsQueryConfig.html",ParamsQueryTx:"interfaces/_renproject_provider.ParamsQueryTx.html",ParamsQueryTxs:"interfaces/_renproject_provider.ParamsQueryTxs.html",ParamsSubmitTx:"interfaces/_renproject_provider.ParamsSubmitTx.html",RenVMBlock:"interfaces/_renproject_provider.RenVMBlock.html",RenVMProviderInterface:"interfaces/_renproject_provider.RenVMProviderInterface.html",RenVMTransaction:"interfaces/_renproject_provider.RenVMTransaction.html",RenVMTransactionWithStatus:"interfaces/_renproject_provider.RenVMTransactionWithStatus.html",ResponseQueryBlock:"interfaces/_renproject_provider.ResponseQueryBlock.html",ResponseQueryBlockState:"interfaces/_renproject_provider.ResponseQueryBlockState.html",ResponseQueryBlocks:"interfaces/_renproject_provider.ResponseQueryBlocks.html",ResponseQueryConfig:"interfaces/_renproject_provider.ResponseQueryConfig.html",ResponseQueryTx:"interfaces/_renproject_provider.ResponseQueryTx.html",ResponseQueryTxs:"interfaces/_renproject_provider.ResponseQueryTxs.html",ResponseSubmitGateway:"interfaces/_renproject_provider.ResponseSubmitGateway.html",ResponseSubmitTx:"interfaces/_renproject_provider.ResponseSubmitTx.html",SubmitGatewayInput:"interfaces/_renproject_provider.SubmitGatewayInput.html",TransactionInput:"interfaces/_renproject_provider.TransactionInput.html",TransactionOutput:"interfaces/_renproject_provider.TransactionOutput.html",GatewayFees:"interfaces/_renproject_ren.GatewayFees.html",ChainCommon:"interfaces/_renproject_utils.ChainCommon.html",ChainTransaction:"interfaces/_renproject_utils.ChainTransaction.html",ChainTransactionProgress:"interfaces/_renproject_utils.ChainTransactionProgress.html",ContractChain:"interfaces/_renproject_utils.ContractChain.html",DepositChain:"interfaces/_renproject_utils.DepositChain.html",InputChainTransaction:"interfaces/_renproject_utils.InputChainTransaction.html",Logger:"interfaces/_renproject_utils.Logger.html",PackListType:"interfaces/_renproject_utils.PackListType.html",PackStructType:"interfaces/_renproject_utils.PackStructType.html",RenVMShard:"interfaces/_renproject_utils.RenVMShard.html",TxSubmitter:"interfaces/_renproject_utils.TxSubmitter.html",TxWaiter:"interfaces/_renproject_utils.TxWaiter.html",TypedPackValue:"interfaces/_renproject_utils.TypedPackValue.html"},i=function(e){var t=e.name,n=e.children,i=t.split("."),o=i[0],s=i[1];return a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://renproject.github.io/ren-js-v3-docs/"+r[o]+(s?"#"+s:"")},n||t,r[o]?null:a.createElement("span",{style:{color:"#bf616a"}}," (Link not found)"))}},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},26396:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(87462),r=n(67294),i=n(72389),o=n(79443);var s=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=n(53810),l=n(86010),p="tabItem_vU9c";function u(e){var t,n,i,o=e.lazy,u=e.block,m=e.defaultValue,h=e.values,d=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=h?h:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),_=(0,c.lx)(k,(function(e,t){return e.value===t.value}));if(_.length>0)throw new Error('Docusaurus error: Duplicate values "'+_.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===m?m:null!=(t=null!=m?m:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=v[0])?void 0:i.props.value;if(null!==g&&!k.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=s(),w=y.tabGroupChoices,b=y.setTabGroupChoices,N=(0,r.useState)(g),T=N[0],j=N[1],C=[],x=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var S=w[d];null!=S&&S!==T&&k.some((function(e){return e.value===S}))&&j(S)}var R=function(e){var t=e.currentTarget,n=C.indexOf(t),a=k[n].value;a!==T&&(x(t),j(a),null!=d&&b(d,a))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.currentTarget)+1;n=C[a]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.currentTarget)-1;n=C[r]||C[C.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},f)},k.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return C.push(e)},onKeyDown:E,onFocus:R,onClick:R},i,{className:(0,l.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,i.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}}}]);