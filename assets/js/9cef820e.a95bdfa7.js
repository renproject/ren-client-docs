"use strict";(self.webpackChunkren_client_docs=self.webpackChunkren_client_docs||[]).push([[4076],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},49610:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=n(93454),s=["components"],l={title:"Handling address expiry and uniqueness",slug:"/how-to/handling-address-expiry"},d=void 0,c={unversionedId:"v2/how-to/handling-address-expiry",id:"v2/how-to/handling-address-expiry",title:"Handling address expiry and uniqueness",description:"Gateway address uniqueness",source:"@site/ren-js/v2/how-to/handling-address-expiry.mdx",sourceDirName:"v2/how-to",slug:"/how-to/handling-address-expiry",permalink:"/ren-client-docs/ren-js/how-to/handling-address-expiry",editUrl:"https://github.com/renproject/ren-client-docs/edit/master/ren-js/v2/how-to/handling-address-expiry.mdx",tags:[],version:"current",frontMatter:{title:"Handling address expiry and uniqueness",slug:"/how-to/handling-address-expiry"},sidebar:"docs",previous:{title:"Chain Utils",permalink:"/ren-client-docs/ren-js/how-to/chain-utils"},next:{title:"Add parameters at mint",permalink:"/ren-client-docs/ren-js/how-to/add-parameters-at-mint"}},p=[{value:"Gateway address uniqueness",id:"gateway-address-uniqueness",children:[],level:2},{value:"Gateway address expiry",id:"gateway-address-expiry",children:[],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.G,{type:o.e.HowTo,marginBottom:0,mdxType:"DocTag"}),(0,i.kt)("h2",{id:"gateway-address-uniqueness"},"Gateway address uniqueness"),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"gateway address")," of a ",(0,i.kt)("inlineCode",{parentName:"p"},"LockAndMint")," is deterministic based on its constructor parameters. This means that if a user is minting the same asset to the same recipient multiple times, they will be shown the same address."),(0,i.kt)("p",null,"If this is not the desired behaviour, a ",(0,i.kt)("inlineCode",{parentName:"p"},"nonce")," can be provided to the ",(0,i.kt)("inlineCode",{parentName:"p"},"lockAndMint")," function along side the other parameters to ensure that a new address is generated."),(0,i.kt)("p",null,"The nonce should be a 32-byte ",(0,i.kt)("inlineCode",{parentName:"p"},"Buffer"),", which can be created using the ",(0,i.kt)("inlineCode",{parentName:"p"},"bn.js")," library:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{3-4}","{3-4}":!0},'const lockAndMint = await renJS.lockAndMint({\n    ...\n    // To set the nonce to 42.\n    nonce: new BN(42).toArrayLike(Buffer, "be", 32),\n})\n')),(0,i.kt)("p",null,"It is best if the nonce is incremental for the user, using persistent storage to track it. If a random nonce is used, it should still be stored to persistent storage to that the ",(0,i.kt)("inlineCode",{parentName:"p"},"LockAndMint")," can be resumed if the user's session is closed."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Just like all the other parameters, the LockAndMint can only be resumed by providing the nonce again. If the nonce is lost, the funds may not be recoverable."))),(0,i.kt)("h2",{id:"gateway-address-expiry"},"Gateway address expiry"),(0,i.kt)("p",null,"Currently, ",(0,i.kt)("em",{parentName:"p"},"gateway addresses")," do not expire. An upcoming update to RenVM will change this."),(0,i.kt)("p",null,"The network will have 24-hour cycles, and the ",(0,i.kt)("em",{parentName:"p"},"gateway address")," timeline will look like this:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1st time cycle:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If a user wants to make a deposit, an address for this cycle is generated. They have the rest of this time cycle to initiate the deposit."))),(0,i.kt)("li",{parentName:"ul"},"2nd time cycle:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If the user sent a deposit, the deposit needs to be confirmed and submitted to RenVM before the end of the cycle."),(0,i.kt)("li",{parentName:"ul"},"If the user wants to make a new deposit, a new address is generated for this new time cycle, starting a new three-cycle timeline."))),(0,i.kt)("li",{parentName:"ul"},"3rd time cycle:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The user has the rest of the time cycle to submit the RenVM signature to the mint-chain."),(0,i.kt)("li",{parentName:"ul"},"Like before, if the user wants to make a new deposit, a new address is generated for this new time cycle.")))),(0,i.kt)("p",null,"Each of the steps can happen sooner if the deposit is ready - the deposit, signing and submitting to the mint-chain can all happen in the same cycle."),(0,i.kt)("p",null,"In expectation of this, Bridge (",(0,i.kt)("a",{parentName:"p",href:"https://bridge.renproject.io"},"bridge.renproject.io"),") is using the ",(0,i.kt)("inlineCode",{parentName:"p"},"nonce")," described ",(0,i.kt)("a",{parentName:"p",href:"#gateway-address-uniqueness"},"above")," to replicate this behaviour. The ",(0,i.kt)("inlineCode",{parentName:"p"},"nonce")," is calculated based on the current time cycle and the number addresses the user has already generated for that cycle."))}m.isMDXComponent=!0},93454:function(e,t,n){n.d(t,{G:function(){return s},e:function(){return a}});var r,a,i=n(67294);!function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(a||(a={}));var o=((r={})[a.Tutorial]="#b48ead",r[a.HowTo]="#69a8b9",r[a.Reference]="#bf616a",r[a.Explanation]="#d2b06c",r),s=function(e){var t=e.type,n=e.marginBottom;return i.createElement(i.Fragment,null,i.createElement("span",{style:{border:"2px solid "+o[t]||0,borderRadius:"5px",color:o[t]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==n?n:30,display:"inline-block"}},String(t)))}}}]);