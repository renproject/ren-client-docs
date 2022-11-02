"use strict";(self.webpackChunkren_client_docs=self.webpackChunkren_client_docs||[]).push([[3814],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=l(n),p=i,m=u["".concat(d,".").concat(p)]||u[p]||h[p]||s;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,r=new Array(s);r[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var l=2;l<s;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},77804:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c}});var a=n(87462),i=n(63366),s=(n(67294),n(3905)),r=["components"],o={title:"RenVM UX Best Practice",description:"This section will outline the best practices and things to keep in mind when integrating RenVM via RenJS.",slug:"/best-practices/ui-best-practices"},d=void 0,l={unversionedId:"v2/best-practices/ui-best-practices",id:"v2/best-practices/ui-best-practices",title:"RenVM UX Best Practice",description:"This section will outline the best practices and things to keep in mind when integrating RenVM via RenJS.",source:"@site/ren-js/v2/best-practices/ui-best-practices.mdx",sourceDirName:"v2/best-practices",slug:"/best-practices/ui-best-practices",permalink:"/ren-client-docs/ren-js/best-practices/ui-best-practices",editUrl:"https://github.com/renproject/ren-client-docs/edit/master/ren-js/v2/best-practices/ui-best-practices.mdx",tags:[],version:"current",frontMatter:{title:"RenVM UX Best Practice",description:"This section will outline the best practices and things to keep in mind when integrating RenVM via RenJS.",slug:"/best-practices/ui-best-practices"},sidebar:"docs",previous:{title:"Recovery method",permalink:"/ren-client-docs/ren-js/how-to/recovery-method"},next:{title:"RenVM Support Tutorial & Template",permalink:"/ren-client-docs/ren-js/best-practices/support"}},c=[{value:"Top 10 UX Considerations",id:"top-10-ux-considerations",children:[{value:"<strong>1) Explicit Warnings | Loss of Funds</strong>",id:"1-explicit-warnings--loss-of-funds",children:[],level:3},{value:"<strong>2)</strong> Explicit D<strong>isclosures | RenVM is new technology and that users should not send funds they can\u2019t afford to lose</strong>",id:"2-explicit-disclosures--renvm-is-new-technology-and-that-users-should-not-send-funds-they-cant-afford-to-lose",children:[],level:3},{value:"<strong>3) A Gateway Address is only valid for 24 hours</strong>",id:"3-a-gateway-address-is-only-valid-for-24-hours",children:[],level:3},{value:"<strong>4) A Gateway Address can only be used once</strong>",id:"4-a-gateway-address-can-only-be-used-once",children:[],level:3},{value:"<strong>5) Storing Orders</strong>",id:"5-storing-orders",children:[],level:3},{value:"6) Minimum Order Amounts &amp; Fees",id:"6-minimum-order-amounts--fees",children:[],level:3},{value:"<strong>7) Display the blockchain confirmations and blockchain TX details</strong>",id:"7-display-the-blockchain-confirmations-and-blockchain-tx-details",children:[],level:3},{value:"<strong>8) After RenVM has witnessed the required number of confirmations, the user must submit a Mint transaction on the Host blockchain</strong>",id:"8-after-renvm-has-witnessed-the-required-number-of-confirmations-the-user-must-submit-a-mint-transaction-on-the-host-blockchain",children:[],level:3},{value:"<strong>9) Your front-end should always indicate to a user when they are required to conduct an action with their Web3 wallet</strong>",id:"9-your-front-end-should-always-indicate-to-a-user-when-they-are-required-to-conduct-an-action-with-their-web3-wallet",children:[],level:3},{value:"<strong>10) Set user expectations</strong>",id:"10-set-user-expectations",children:[],level:3}],level:2},{value:"Looking Forward",id:"looking-forward",children:[],level:2}],h={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,r);return(0,s.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"This section will outline the best practices and things to keep in mind when\nintegrating RenVM via RenJS.")),(0,s.kt)("hr",null),(0,s.kt)("p",null,"Cross-chain transactions are a new experience for users of decentralized protocols therefore there is not a lot of precedent for the ideal User Experience ","(","UX",")","."),(0,s.kt)("p",null,"Below is a set of guidelines aiming to increase the usability of a third party application that chooses to integrate RenVM\u2019s native cross-chain experience, utilising the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/renproject/ren-js"},"RenJS JavaScript framework.")),(0,s.kt)("h2",{id:"top-10-ux-considerations"},"Top 10 UX Considerations"),(0,s.kt)("h3",{id:"1-explicit-warnings--loss-of-funds"},(0,s.kt)("strong",{parentName:"h3"},"1",")"," Explicit Warnings ","|"," Loss of Funds")),(0,s.kt)("p",null,"We strongly suggest putting in a checkbox via opt-in - regarding loss of funds if a user makes a mistake."),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},(0,s.kt)("strong",{parentName:"p"},"It should be clear that if the user makes a mistake ","(","sends funds to the wrong address, deposits multiple TXs, etc.",")"," that their funds are permanently lost ","(","as with any other blockchain mistake",")",".")),(0,s.kt)("p",{parentName:"div"},(0,s.kt)("strong",{parentName:"p"},"It's very important to set the expectations up front, as the Ren team will not be able to assist with loss of funds.")))),(0,s.kt)("h3",{id:"2-explicit-disclosures--renvm-is-new-technology-and-that-users-should-not-send-funds-they-cant-afford-to-lose"},(0,s.kt)("strong",{parentName:"h3"},"2",")")," Explicit D",(0,s.kt)("strong",{parentName:"h3"},"isclosures ","|"," RenVM is new technology and that users should not send funds they can\u2019t afford to lose")),(0,s.kt)("p",null,"While after ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/renproject/ren/wiki/Audits"},"four security audits")," and years of testing... given the nature of blockchains, there is always a chance things can go wrong. Its obligatory that you warn users."),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Your dApps front-end should state clearly that there are risks."),(0,s.kt)("p",{parentName:"div"},"Example: \u201cRenVM is new technology and security audits don't completely eliminate risks. Please don\u2019t supply assets you can\u2019t afford to lose.\u201d"))),(0,s.kt)("h3",{id:"3-a-gateway-address-is-only-valid-for-24-hours"},(0,s.kt)("strong",{parentName:"h3"},"3",")"," A Gateway Address is only valid for 24 hours")),(0,s.kt)("p",null,"RenVM generates \u201cGateway Addresses\u201d. Users transfer assets to the gateway address on one blockchain, and RenVM mints a tokenized representation of those assets on another blockchain."),(0,s.kt)("p",null,"For example, if I was sending BTC to Ethereum, RenVM would generate a ",(0,s.kt)("strong",{parentName:"p"},"unique")," BTC public key that integrations would show on their front end. A user would then transfer an amount of BTC to this address and RenVM would in turn mint renBTC on Ethereum ","(","an ERC20",")","."),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"These addresses are only valid for 24 hours."),(0,s.kt)("p",{parentName:"div"},"Your front-end should indicate this to the user to avoid them generating a Gateway Address and returning more than 24 hours later to deposit assets to it. ",(0,s.kt)("strong",{parentName:"p"},"If they deposit assets to an old Gateway Address the funds will be lose.")))),(0,s.kt)("h3",{id:"4-a-gateway-address-can-only-be-used-once"},(0,s.kt)("strong",{parentName:"h3"},"4",")"," A Gateway Address can only be used once")),(0,s.kt)("p",null,"Gateway Addresses should only be used to deposit funds one-time. Your front-end should alert users to only deposit to a Gateway Address once. If users want to make multiple deposits, they should wait until the first is complete."),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},(0,s.kt)("strong",{parentName:"p"},"If a user send multiple deposits to an Gateway Address the funds will be lost.")))),(0,s.kt)("h3",{id:"5-storing-orders"},(0,s.kt)("strong",{parentName:"h3"},"5",")"," Storing Orders")),(0,s.kt)("p",null,"As transactions move from one blockchain to another, the individual order needs to be stored and retrieved incase a user closes their web browser, clears cache & cookies, etc. RenVM does not inherently store this information, so each integrators needs to implement a storage solution."),(0,s.kt)("p",null,"It can be stored in the web browser, be persistent storage via a decentralized ","(","3box",")"," or centralized ","(","Firebase",")"," solution, but one must be chosen and then conveyed to users, so they know how to retrieve the information."),(0,s.kt)("p",null,"Example: An integrator made persistent storage optional but didn't properly warn the user what would happen if they refreshed without storage enabled."),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"In general, the best UX is that storage is always enabled and mint details are stored before showing a deposit address to users."))),(0,s.kt)("h3",{id:"6-minimum-order-amounts--fees"},"6",")"," Minimum Order Amounts & Fees"),(0,s.kt)("p",null,"There are a few fees that need to be considered when using RenVM."),(0,s.kt)("p",null,"Example ","(","BTC to Ethereum",")"," :",(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("em",{parentName:"p"},"Bitcoin Miner Fee",(0,s.kt)("br",{parentName:"em"}),"Ethereum Miner Fee",(0,s.kt)("br",{parentName:"em"}),"RenVM Fee")),(0,s.kt)("p",null,"As you can imagine these add up, making small transactions not worth it. Its recommended there is typically a 50\\$ USD minimum ","(","depending on networks congestion",")",", so you should make sure users are aware of this."),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},(0,s.kt)("strong",{parentName:"p"},"If users send less than the total fees, funds are lost. This should be made clear in the UI.")))),(0,s.kt)("h3",{id:"7-display-the-blockchain-confirmations-and-blockchain-tx-details"},(0,s.kt)("strong",{parentName:"h3"},"7",")"," Display the blockchain confirmations and blockchain TX details")),(0,s.kt)("p",null,"Before RenVM mints a tokenized representation, it must wait for a number of confirmations on the guest blockchain."),(0,s.kt)("p",null,"E.G RenVM waits for 6 confirmations on Bitcoin before minting the user the tokenized representation on Ethereum ","(","renBTC",")",". The front-end should display to the user the number of confirmations as an indication of how much longer they need to wait."),(0,s.kt)("p",null,"Further, it is advised to provide a hyperlink to the relevant on-chain transactions for transparency. If a user is moving BTC to ETH, then provide a link to BTC TX ","(","e.g Sochain",")"," and once the ETH TX has been initiated, the same applies ","(","Etherscan",")","."),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"This is important for transparency and so the user feels at ease when waiting."))),(0,s.kt)("h3",{id:"8-after-renvm-has-witnessed-the-required-number-of-confirmations-the-user-must-submit-a-mint-transaction-on-the-host-blockchain"},(0,s.kt)("strong",{parentName:"h3"},"8",")"," After RenVM has witnessed the required number of confirmations, the user must submit a Mint transaction on the Host blockchain")),(0,s.kt)("p",null,"For example, if a user is sending BTC to Ethereum, after 6 confirmations they are required to sign a transaction with a web3 enabled Ethereum wallet ","(","such as MetaMask",")","."),(0,s.kt)("p",null,"After detecting that a user has deposited the Host asset, your front-end should alert the user that they\u2019ll need to return after the required amount of confirmations. If the user walks away after simply depositing to the Gateway Address and does not return to submit the Mint transaction, their funds will be custodied by RenVM but RenVM will not receive any instructions to mint the tokenized representation. ",(0,s.kt)("strong",{parentName:"p"},"The user must return before 24 hours to submit to the Destination Chain.")),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},(0,s.kt)("strong",{parentName:"p"},"Be sure to convey to users that they must return to the UI, to trigger the secondary TX and complete the transactions.")))),(0,s.kt)("h3",{id:"9-your-front-end-should-always-indicate-to-a-user-when-they-are-required-to-conduct-an-action-with-their-web3-wallet"},(0,s.kt)("strong",{parentName:"h3"},"9",")"," Your front-end should always indicate to a user when they are required to conduct an action with their Web3 wallet")),(0,s.kt)("p",null,"In the few instances exemplified above, a user will be required to sign with their Web3 wallet when submitting a mint transaction to Ethereum. For the below example we\u2019ll use MetaMask."),(0,s.kt)("p",null,"When a front-end triggers a MetaMask interaction, the user won\u2019t always receive a pop-up. Instead, they\u2019ll need to click on the MetaMask icon in the browser menu."),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"To ensure a user is aware that their attention is required on MetaMask, your front-end should alert them that they are required to sign with their wallet. For example, \u201cSign with wallet to continue.\u201d."))),(0,s.kt)("h3",{id:"10-set-user-expectations"},(0,s.kt)("strong",{parentName:"h3"},"10",")"," Set user expectations")),(0,s.kt)("p",null,"Because RenVM needs to wait for a safe amount of blockchain confirmations ","(","to prevent double spend, etc",")",", which can take up to 1 hour ","(","for BTC",")",", ensure you set user-expectations."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"BTC Example:")," Your front-end should alert users that the task is going to take about 1 hour ","(","6 BTC Confirmations",")"," before the secondary TX needs to be triggered ","(","interaction with ETH or a web 3 wallet",")"," This will help avoid confusion and ensure users return to sign for the transaction."),(0,s.kt)("h2",{id:"looking-forward"},"Looking Forward"),(0,s.kt)("p",null,"The Ren team will be adapting this list over time, so check back frequently to ensure your RenVM integration is using the best UX practices. These guidelines are intended to reduce the amount of opportunity a user has to make an error, and should reduce loss of funds."),(0,s.kt)("p",null,"If you have any suggestions, get in touch via ",(0,s.kt)("a",{parentName:"p",href:"mailto:support@renproject.io"},"support@renproject.io"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Additional reading")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Consensys\u2019 Rimble is a front-end component library for building Decentralized Applications ","(","dApps",")"," on Ethereum. It includes some best practice but is more relevant to Ethereum based User Experiences. ",(0,s.kt)("a",{parentName:"li",href:"https://rimble.consensys.design/"},"https://rimble.consensys.design/"))))}u.isMDXComponent=!0}}]);