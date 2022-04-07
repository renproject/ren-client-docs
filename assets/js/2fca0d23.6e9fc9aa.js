"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[52],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},18122:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return m}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=t(26396),l=t(58215),s=t(93454),u=["components"],c={title:"Resuming transfers",slug:"/how-to/resuming-transfers"},p=void 0,d={unversionedId:"v2/how-to/resuming-transfers",id:"v2/how-to/resuming-transfers",title:"Resuming transfers",description:"Resuming a LockAndMintDeposit",source:"@site/ren-js/v2/how-to/resuming-transfers.mdx",sourceDirName:"v2/how-to",slug:"/how-to/resuming-transfers",permalink:"/ren-client-docs/ren-js/how-to/resuming-transfers",editUrl:"https://github.com/renproject/ren-client-docs/edit/master/ren-js/v2/how-to/resuming-transfers.mdx",tags:[],version:"current",frontMatter:{title:"Resuming transfers",slug:"/how-to/resuming-transfers"},sidebar:"docs",previous:{title:"Things to note",permalink:"/ren-client-docs/ren-js/things-to-note"},next:{title:"Chain Utils",permalink:"/ren-client-docs/ren-js/how-to/chain-utils"}},m=[{value:"Resuming a <code>LockAndMintDeposit</code>",id:"resuming-a-lockandmintdeposit",children:[],level:2},{value:"Resuming a <code>BurnAndRelease</code>",id:"resuming-a-burnandrelease",children:[],level:2}],f={toc:m};function h(e){var n=e.components,t=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(s.G,{type:s.e.HowTo,marginBottom:0,mdxType:"DocTag"}),(0,o.kt)("h2",{id:"resuming-a-lockandmintdeposit"},"Resuming a ",(0,o.kt)("inlineCode",{parentName:"h2"},"LockAndMintDeposit")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"NOTE: Resuming a mint that is in progress requires the all of the parameters passed in to ",(0,o.kt)("inlineCode",{parentName:"p"},"lockAndMint")," to be available. You should reconstruct the chain objects (",(0,o.kt)("inlineCode",{parentName:"p"},"Ethereum"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Bitcoin"),", etc.) using the same values.\nIf the parameters are lost, the funds may be unrecoverable, so it's important to use a reliable persistent storage if mint details need to be stored."))),(0,o.kt)("p",null,"In order to resume a LockAndMint, you need to pass the same parameters to ",(0,o.kt)("inlineCode",{parentName:"p"},"RenJS.lockAndMint"),". It will pick-up any deposits that have previously been sent to the gateway address and haven't been minted."),(0,o.kt)("p",null,"In addition to receiving ",(0,o.kt)("inlineCode",{parentName:"p"},'.on("deposit", ...)')," events, you can also manually provide the details of a deposit using ",(0,o.kt)("inlineCode",{parentName:"p"},"mint.processDeposit"),". The parameter should match the type of ",(0,o.kt)("inlineCode",{parentName:"p"},"deposit.depositDetails")," of a deposit object returned ",(0,o.kt)("inlineCode",{parentName:"p"},'from.on("deposit", ...)'),"."),(0,o.kt)("p",null,"You may need to check for duplicate deposits if you are using both ",(0,o.kt)("inlineCode",{parentName:"p"},'.on("deposit", ...)')," and ",(0,o.kt)("inlineCode",{parentName:"p"},".processDeposit"),"."),(0,o.kt)(i.Z,{defaultValue:"Bitcoin example",values:[{label:"Bitcoin example",value:"Bitcoin example"},{label:"Filecoin example",value:"Filecoin example"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Bitcoin example",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'lockAndMint\n    .processDeposit({\n        transaction: {\n            txHash: "93864b94af9...",\n            vOut: 0,\n            amount: 290899, // sats\n            confirmations: 1,\n        },\n        amount: "290899",\n    })\n    .on(async (deposit) => {\n        // Handle deposit here. Same as .on("deposit", ...) callback.\n        // The default handler will keep retrying each step:\n        await RenJS.defaultDepositHandler(deposit);\n    })\n    .catch(console.error);\n'))),(0,o.kt)(l.Z,{value:"Filecoin example",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'lockAndMint\n    .processDeposit({\n        transaction: {\n            cid: "bafy2bzacedvu74e7ohjcwlh4fbx7ddf6li42fiuosajob6metcj2qwkgkgof2",\n            to: "t1v2ftlxhedyoijv7uqgxfygiziaqz23lgkvks77i",\n            amount: (0.01 * 1e8).toString(),\n            params: "EzGbvVHf8lb0v8CUfjh8y+tLbZzfIFcnNnt/gh6axmw=",\n            confirmations: 1,\n            nonce: 7,\n        },\n        amount: (0.01 * 1e8).toString(),\n    })\n    .on(async (deposit) => {\n        // Handle deposit here. Same as .on("deposit") callback.\n        // The default handler will keep retrying each step:\n        await RenJS.defaultDepositHandler(deposit);\n    })\n    .catch(console.error);\n')))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"resuming-a-burnandrelease"},"Resuming a ",(0,o.kt)("inlineCode",{parentName:"h2"},"BurnAndRelease")),(0,o.kt)("p",null,"Once a burn has been completed on the mint-chain, RenVM will automatically see it and process it. However, should you want to watch the progress of burn-and-release, it's possible to recreate the ",(0,o.kt)("inlineCode",{parentName:"p"},"BurnAndRelease")," object with the details of the burn."),(0,o.kt)("p",null,"The details passed into a ",(0,o.kt)("inlineCode",{parentName:"p"},"BurnAndRelease")," are not unique - the same burn can be repeated multiple times. To identify a specific burn, you either need the mint-chain's transaction hash, the RenVM transaction hash or the ",(0,o.kt)("em",{parentName:"p"},"burn reference")," found in the burn event log."),(0,o.kt)("p",null,"They can be passed in as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const burnAndRelease = await renJS.burnAndRelease({\n    asset: "FIL",\n    to: Filecoin().Address("t14wczuvodunv3xzexobzywpbj6qpr6jwdrbkrmbq"),\n    from: Ethereum(provider),\n\n    // Provide one of:\n\n    // The RenVM transaction hash.\n    txHash: "0Nw-mdeQ1mc1TUC2xUnGgkoe_prdQ3uhO5sioDCVyFk",\n\n    // The mint-chain\'s transaction hash - if there are multiple burns the\n    // first will be chosen.\n    transaction: "0x1234...",\n\n    // The burn\'s unique identifier returned from the burn event log.\n    burnNonce: 1,\n    // can also be provided like so:\n    // from: Ethereum(provider).BurnNonce(0x16a),\n});\n')))}h.isMDXComponent=!0},93454:function(e,n,t){t.d(n,{G:function(){return l},e:function(){return a}});var r,a,o=t(67294);!function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(a||(a={}));var i=((r={})[a.Tutorial]="#b48ead",r[a.HowTo]="#69a8b9",r[a.Reference]="#bf616a",r[a.Explanation]="#d2b06c",r),l=function(e){var n=e.type,t=e.marginBottom;return o.createElement(o.Fragment,null,o.createElement("span",{style:{border:"2px solid "+i[n]||0,borderRadius:"5px",color:i[n]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==t?t:30,display:"inline-block"}},String(n)))}},58215:function(e,n,t){var r=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},26396:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(87462),a=t(67294),o=t(72389),i=t(79443);var l=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=t(53810),u=t(86010),c="tabItem_vU9c";function p(e){var n,t,o,i=e.lazy,p=e.block,d=e.defaultValue,m=e.values,f=e.groupId,h=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),g=(0,s.lx)(b,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(n=null!=d?d:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=v[0])?void 0:o.props.value;if(null!==k&&!b.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=l(),w=y.tabGroupChoices,N=y.setTabGroupChoices,x=(0,a.useState)(k),T=x[0],E=x[1],j=[],O=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var C=w[f];null!=C&&C!==T&&b.some((function(e){return e.value===C}))&&E(C)}var R=function(e){var n=e.currentTarget,t=j.indexOf(n),r=b[t].value;r!==T&&(O(n),E(r),null!=f&&N(f,r))},D=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=j.indexOf(e.currentTarget)+1;t=j[r]||j[0];break;case"ArrowLeft":var a=j.indexOf(e.currentTarget)-1;t=j[a]||j[j.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":p},h)},b.map((function(e){var n=e.value,t=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:function(e){return j.push(e)},onKeyDown:D,onFocus:R,onClick:R},o,{className:(0,u.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),i?(0,a.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function d(e){var n=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(n)},e))}}}]);