(window.webpackJsonp=window.webpackJsonp||[]).push([[360],{392:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var a=n(3),i=(n(0),n(486));const r={title:"RenVM UX Best Practice",description:"This section will outline the best practices and things to keep in mind when integrating RenVM via RenJS."},o={unversionedId:"best-practices/ui-best-practices",id:"best-practices/ui-best-practices",isDocsHomePage:!1,title:"RenVM UX Best Practice",description:"This section will outline the best practices and things to keep in mind when integrating RenVM via RenJS.",source:"@site/ren-js/best-practices/ui-best-practices.mdx",slug:"/best-practices/ui-best-practices",permalink:"/ren-client-docs/ren-js/best-practices/ui-best-practices",version:"current",sidebar:"docs",previous:{title:"Handling address expiry and uniqueness",permalink:"/ren-client-docs/ren-js/how-to/handling-address-expiry"},next:{title:"RenVM Support Tutorial & Template",permalink:"/ren-client-docs/ren-js/best-practices/support"}},s=[{value:"Top 10 UX Considerations",id:"top-10-ux-considerations",children:[{value:"<strong>1) Explicit Warnings | Loss of Funds</strong>",id:"1-explicit-warnings--loss-of-funds",children:[]},{value:"<strong>2)</strong> Explicit D<strong>isclosures | RenVM is new technology and that users should not send funds they can\u2019t afford to lose</strong>",id:"2-explicit-disclosures--renvm-is-new-technology-and-that-users-should-not-send-funds-they-cant-afford-to-lose",children:[]},{value:"<strong>3) A Gateway Address is only valid for 24 hours</strong>",id:"3-a-gateway-address-is-only-valid-for-24-hours",children:[]},{value:"<strong>4) A Gateway Address can only be used once</strong>",id:"4-a-gateway-address-can-only-be-used-once",children:[]},{value:"<strong>5) Storing Orders</strong>",id:"5-storing-orders",children:[]},{value:"6) Minimum Order Amounts &amp; Fees",id:"6-minimum-order-amounts--fees",children:[]},{value:"<strong>7) Display the blockchain confirmations and blockchain TX details</strong>",id:"7-display-the-blockchain-confirmations-and-blockchain-tx-details",children:[]},{value:"<strong>8) After RenVM has witnessed the required number of confirmations, the user must submit a Mint transaction on the Host blockchain</strong>",id:"8-after-renvm-has-witnessed-the-required-number-of-confirmations-the-user-must-submit-a-mint-transaction-on-the-host-blockchain",children:[]},{value:"<strong>9) Your front-end should always indicate to a user when they are required to conduct an action with their Web3 wallet</strong>",id:"9-your-front-end-should-always-indicate-to-a-user-when-they-are-required-to-conduct-an-action-with-their-web3-wallet",children:[]},{value:"<strong>10) Set user expectations</strong>",id:"10-set-user-expectations",children:[]}]},{value:"Looking Forward",id:"looking-forward",children:[]}],d={toc:s};function c({components:e,...t}){return Object(i.mdx)("wrapper",Object(a.default)({},d,t,{components:e,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,Object(i.mdx)("em",{parentName:"p"},"This section will outline the best practices and things to keep in mind when\nintegrating RenVM via RenJS.")),Object(i.mdx)("hr",null),Object(i.mdx)("p",null,"Cross-chain transactions are a new experience for users of decentralized protocols therefore there is not a lot of precedent for the ideal User Experience ","(","UX",")","."),Object(i.mdx)("p",null,"Below is a set of guidelines aiming to increase the usability of a third party application that chooses to integrate RenVM\u2019s native cross-chain experience, utilising the ",Object(i.mdx)("a",{parentName:"p",href:"https://github.com/renproject/ren-js"},"RenJS JavaScript framework.")),Object(i.mdx)("h2",{id:"top-10-ux-considerations"},"Top 10 UX Considerations"),Object(i.mdx)("h3",{id:"1-explicit-warnings--loss-of-funds"},Object(i.mdx)("strong",{parentName:"h3"},"1",")"," Explicit Warnings ","|"," Loss of Funds")),Object(i.mdx)("p",null,"We strongly suggest putting in a checkbox via opt-in - regarding loss of funds if a user makes a mistake."),Object(i.mdx)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(i.mdx)("h5",{parentName:"div"},Object(i.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.mdx)("div",{parentName:"div",className:"admonition-content"},Object(i.mdx)("p",{parentName:"div"},Object(i.mdx)("strong",{parentName:"p"},"It should be clear that if the user makes a mistake ","(","sends funds to the wrong address, deposits multiple TXs, etc.",")"," that their funds are permanently lost ","(","as with any other blockchain mistake",")",".")),Object(i.mdx)("p",{parentName:"div"},Object(i.mdx)("strong",{parentName:"p"},"It's very important to set the expectations up front, as the Ren team will not be able to assist with loss of funds.")))),Object(i.mdx)("h3",{id:"2-explicit-disclosures--renvm-is-new-technology-and-that-users-should-not-send-funds-they-cant-afford-to-lose"},Object(i.mdx)("strong",{parentName:"h3"},"2",")")," Explicit D",Object(i.mdx)("strong",{parentName:"h3"},"isclosures ","|"," RenVM is new technology and that users should not send funds they can\u2019t afford to lose")),Object(i.mdx)("p",null,"While after ",Object(i.mdx)("a",{parentName:"p",href:"https://github.com/renproject/ren/wiki/Audits"},"four security audits")," and years of testing... given the nature of blockchains, there is always a chance things can go wrong. Its obligatory that you warn users."),Object(i.mdx)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(i.mdx)("h5",{parentName:"div"},Object(i.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.mdx)("div",{parentName:"div",className:"admonition-content"},Object(i.mdx)("p",{parentName:"div"},"Your dApps front-end should state clearly that there are risks."),Object(i.mdx)("p",{parentName:"div"},"Example: \u201cRenVM is new technology and security audits don't completely eliminate risks. Please don\u2019t supply assets you can\u2019t afford to lose.\u201d"))),Object(i.mdx)("h3",{id:"3-a-gateway-address-is-only-valid-for-24-hours"},Object(i.mdx)("strong",{parentName:"h3"},"3",")"," A Gateway Address is only valid for 24 hours")),Object(i.mdx)("p",null,"RenVM generates \u201cGateway Addresses\u201d. Users transfer assets to the gateway address on one blockchain, and RenVM mints a tokenized representation of those assets on another blockchain."),Object(i.mdx)("p",null,"For example, if I was sending BTC to Ethereum, RenVM would generate a ",Object(i.mdx)("strong",{parentName:"p"},"unique")," BTC public key that integrations would show on their front end. A user would then transfer an amount of BTC to this address and RenVM would in turn mint renBTC on Ethereum ","(","an ERC20",")","."),Object(i.mdx)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(i.mdx)("h5",{parentName:"div"},Object(i.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.mdx)("div",{parentName:"div",className:"admonition-content"},Object(i.mdx)("p",{parentName:"div"},"These addresses are only valid for 24 hours."),Object(i.mdx)("p",{parentName:"div"},"Your front-end should indicate this to the user to avoid them generating a Gateway Address and returning more than 24 hours later to deposit assets to it. ",Object(i.mdx)("strong",{parentName:"p"},"If they deposit assets to an old Gateway Address the funds will be lose.")))),Object(i.mdx)("h3",{id:"4-a-gateway-address-can-only-be-used-once"},Object(i.mdx)("strong",{parentName:"h3"},"4",")"," A Gateway Address can only be used once")),Object(i.mdx)("p",null,"Gateway Addresses should only be used to deposit funds one-time. Your front-end should alert users to only deposit to a Gateway Address once. If users want to make multiple deposits, they should wait until the first is complete."),Object(i.mdx)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(i.mdx)("h5",{parentName:"div"},Object(i.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.mdx)("div",{parentName:"div",className:"admonition-content"},Object(i.mdx)("p",{parentName:"div"},Object(i.mdx)("strong",{parentName:"p"},"If a user send multiple deposits to an Gateway Address the funds will be lost.")))),Object(i.mdx)("h3",{id:"5-storing-orders"},Object(i.mdx)("strong",{parentName:"h3"},"5",")"," Storing Orders")),Object(i.mdx)("p",null,"As transactions move from one blockchain to another, the individual order needs to be stored and retrieved incase a user closes their web browser, clears cache & cookies, etc. RenVM does not inherently store this information, so each integrators needs to implement a storage solution."),Object(i.mdx)("p",null,"It can be stored in the web browser, be persistent storage via a decentralized ","(","3box",")"," or centralized ","(","Firebase",")"," solution, but one must be chosen and then conveyed to users, so they know how to retrieve the information."),Object(i.mdx)("p",null,"Example: An integrator made persistent storage optional but didn't properly warn the user what would happen if they refreshed without storage enabled."),Object(i.mdx)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(i.mdx)("h5",{parentName:"div"},Object(i.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(i.mdx)("div",{parentName:"div",className:"admonition-content"},Object(i.mdx)("p",{parentName:"div"},"In general, the best UX is that storage is always enabled and mint details are stored before showing a deposit address to users."))),Object(i.mdx)("h3",{id:"6-minimum-order-amounts--fees"},"6",")"," Minimum Order Amounts & Fees"),Object(i.mdx)("p",null,"There are a few fees that need to be considered when using RenVM."),Object(i.mdx)("p",null,"Example ","(","BTC to Ethereum",")"," :",Object(i.mdx)("br",{parentName:"p"}),"\n",Object(i.mdx)("em",{parentName:"p"},"Bitcoin Miner Fee",Object(i.mdx)("br",{parentName:"em"}),"Ethereum Miner Fee",Object(i.mdx)("br",{parentName:"em"}),"RenVM Fee")),Object(i.mdx)("p",null,"As you can imagine these add up, making small transactions not worth it. Its recommended there is typically a 50\\$ USD minimum ","(","depending on networks congestion",")",", so you should make sure users are aware of this."),Object(i.mdx)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(i.mdx)("h5",{parentName:"div"},Object(i.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.mdx)("div",{parentName:"div",className:"admonition-content"},Object(i.mdx)("p",{parentName:"div"},Object(i.mdx)("strong",{parentName:"p"},"If users send less than the total fees, funds are lost. This should be made clear in the UI.")))),Object(i.mdx)("h3",{id:"7-display-the-blockchain-confirmations-and-blockchain-tx-details"},Object(i.mdx)("strong",{parentName:"h3"},"7",")"," Display the blockchain confirmations and blockchain TX details")),Object(i.mdx)("p",null,"Before RenVM mints a tokenized representation, it must wait for a number of confirmations on the guest blockchain."),Object(i.mdx)("p",null,"E.G RenVM waits for 6 confirmations on Bitcoin before minting the user the tokenized representation on Ethereum ","(","renBTC",")",". The front-end should display to the user the number of confirmations as an indication of how much longer they need to wait."),Object(i.mdx)("p",null,"Further, it is advised to provide a hyperlink to the relevant on-chain transactions for transparency. If a user is moving BTC to ETH, then provide a link to BTC TX ","(","e.g Sochain",")"," and once the ETH TX has been initiated, the same applies ","(","Etherscan",")","."),Object(i.mdx)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(i.mdx)("h5",{parentName:"div"},Object(i.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(i.mdx)("div",{parentName:"div",className:"admonition-content"},Object(i.mdx)("p",{parentName:"div"},"This is important for transparency and so the user feels at ease when waiting."))),Object(i.mdx)("h3",{id:"8-after-renvm-has-witnessed-the-required-number-of-confirmations-the-user-must-submit-a-mint-transaction-on-the-host-blockchain"},Object(i.mdx)("strong",{parentName:"h3"},"8",")"," After RenVM has witnessed the required number of confirmations, the user must submit a Mint transaction on the Host blockchain")),Object(i.mdx)("p",null,"For example, if a user is sending BTC to Ethereum, after 6 confirmations they are required to sign a transaction with a web3 enabled Ethereum wallet ","(","such as MetaMask",")","."),Object(i.mdx)("p",null,"After detecting that a user has deposited the Host asset, your front-end should alert the user that they\u2019ll need to return after the required amount of confirmations. If the user walks away after simply depositing to the Gateway Address and does not return to submit the Mint transaction, their funds will be custodied by RenVM but RenVM will not receive any instructions to mint the tokenized representation. ",Object(i.mdx)("strong",{parentName:"p"},"The user must return before 24 hours to submit to the Destination Chain.")),Object(i.mdx)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(i.mdx)("h5",{parentName:"div"},Object(i.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(i.mdx)("div",{parentName:"div",className:"admonition-content"},Object(i.mdx)("p",{parentName:"div"},Object(i.mdx)("strong",{parentName:"p"},"Be sure to convey to users that they must return to the UI, to trigger the secondary TX and complete the transactions.")))),Object(i.mdx)("h3",{id:"9-your-front-end-should-always-indicate-to-a-user-when-they-are-required-to-conduct-an-action-with-their-web3-wallet"},Object(i.mdx)("strong",{parentName:"h3"},"9",")"," Your front-end should always indicate to a user when they are required to conduct an action with their Web3 wallet")),Object(i.mdx)("p",null,"In the few instances exemplified above, a user will be required to sign with their Web3 wallet when submitting a mint transaction to Ethereum. For the below example we\u2019ll use MetaMask."),Object(i.mdx)("p",null,"When a front-end triggers a MetaMask interaction, the user won\u2019t always receive a pop-up. Instead, they\u2019ll need to click on the MetaMask icon in the browser menu."),Object(i.mdx)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(i.mdx)("h5",{parentName:"div"},Object(i.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(i.mdx)("div",{parentName:"div",className:"admonition-content"},Object(i.mdx)("p",{parentName:"div"},"To ensure a user is aware that their attention is required on MetaMask, your front-end should alert them that they are required to sign with their wallet. For example, \u201cSign with wallet to continue.\u201d."))),Object(i.mdx)("h3",{id:"10-set-user-expectations"},Object(i.mdx)("strong",{parentName:"h3"},"10",")"," Set user expectations")),Object(i.mdx)("p",null,"Because RenVM needs to wait for a safe amount of blockchain confirmations ","(","to prevent double spend, etc",")",", which can take up to 1 hour ","(","for BTC",")",", ensure you set user-expectations."),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"BTC Example:")," Your front-end should alert users that the task is going to take about 1 hour ","(","6 BTC Confirmations",")"," before the secondary TX needs to be triggered ","(","interaction with ETH or a web 3 wallet",")"," This will help avoid confusion and ensure users return to sign for the transaction."),Object(i.mdx)("h2",{id:"looking-forward"},"Looking Forward"),Object(i.mdx)("p",null,"The Ren team will be adapting this list over time, so check back frequently to ensure your RenVM integration is using the best UX practices. These guidelines are intended to reduce the amount of opportunity a user has to make an error, and should reduce loss of funds."),Object(i.mdx)("p",null,"If you have any suggestions, get in touch via ",Object(i.mdx)("a",{parentName:"p",href:"mailto:support@renproject.io"},"support@renproject.io"),"."),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"Additional reading")),Object(i.mdx)("ol",null,Object(i.mdx)("li",{parentName:"ol"},"Consensys\u2019 Rimble is a front-end component library for building Decentralized Applications ","(","dApps",")"," on Ethereum. It includes some best practice but is more relevant to Ethereum based User Experiences. ",Object(i.mdx)("a",{parentName:"li",href:"https://rimble.consensys.design/"},"https://rimble.consensys.design/"))))}c.isMDXComponent=!0},486:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return m})),n.d(t,"MDXProvider",(function(){return u})),n.d(t,"mdx",(function(){return g})),n.d(t,"useMDXComponents",(function(){return h})),n.d(t,"withMDXComponents",(function(){return l}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=i.a.createContext({}),l=function(e){return function(t){var n=h(t.components);return i.a.createElement(e,o({},t,{components:n}))}},h=function(e){var t=i.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},u=function(e){var t=h(e.components);return i.a.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=h(n),l=a,u=m["".concat(o,".").concat(l)]||m[l]||p[l]||r;return n?i.a.createElement(u,d(d({ref:t},s),{},{components:n})):i.a.createElement(u,d({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=b;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);