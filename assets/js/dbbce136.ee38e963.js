(window.webpackJsonp=window.webpackJsonp||[]).push([[322],{354:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return m})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(8),o=(n(0),n(489)),i=n(528),s=n.n(i),l=n(529),c=n.n(l),d=n(490),u={title:"Resuming transfers"},m={unversionedId:"how-to/resuming-transfers",id:"how-to/resuming-transfers",isDocsHomePage:!1,title:"Resuming transfers",description:"Resuming a LockAndMintDeposit",source:"@site/ren-js/how-to/resuming-transfers.mdx",slug:"/how-to/resuming-transfers",permalink:"/ren-client-docs/ren-js/how-to/resuming-transfers",version:"current",sidebar:"docs",previous:{title:"RenJS",permalink:"/ren-client-docs/ren-js/tutorial/ren-js"},next:{title:"Chain Utils",permalink:"/ren-client-docs/ren-js/how-to/chain-utils"}},p=[{value:"Resuming a <code>LockAndMintDeposit</code>",id:"resuming-a-lockandmintdeposit",children:[]},{value:"Resuming a <code>BurnAndRelease</code>",id:"resuming-a-burnandrelease",children:[]}],f={toc:p};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.mdx)("wrapper",Object(a.default)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)(d.DocTag,{type:d.DocType.HowTo,marginBottom:0,mdxType:"DocTag"}),Object(o.mdx)("h2",{id:"resuming-a-lockandmintdeposit"},"Resuming a ",Object(o.mdx)("inlineCode",{parentName:"h2"},"LockAndMintDeposit")),Object(o.mdx)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(o.mdx)("h5",{parentName:"div"},Object(o.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(o.mdx)("div",{parentName:"div",className:"admonition-content"},Object(o.mdx)("p",{parentName:"div"},"NOTE: Resuming a mint that is in progress requires the all of the parameters passed in to ",Object(o.mdx)("inlineCode",{parentName:"p"},"lockAndMint")," to be available. You should reconstruct the chain objects (",Object(o.mdx)("inlineCode",{parentName:"p"},"Ethereum"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"Bitcoin"),", etc.) using the same values.\nIf the parameters are lost, the funds may be unrecoverable, so it's important to use a reliable persistat storage if mint details need to be stored."))),Object(o.mdx)("p",null,"In order to resume a LockAndMint, you need to pass the same parameters to ",Object(o.mdx)("inlineCode",{parentName:"p"},"RenJS.lockAndMint"),". It will pick-up any deposits that have previously been sent to the gateway address and haven't been minted."),Object(o.mdx)("p",null,"In addition to receiving ",Object(o.mdx)("inlineCode",{parentName:"p"},'.on("deposit", ...)')," events, you can also manually provide the details of a deposit using ",Object(o.mdx)("inlineCode",{parentName:"p"},"mint.processDeposit"),". The parameter should match the type of ",Object(o.mdx)("inlineCode",{parentName:"p"},"deposit.depositDetails")," of a deposit object returned ",Object(o.mdx)("inlineCode",{parentName:"p"},'from.on("deposit", ...)'),"."),Object(o.mdx)("p",null,"You may need to check for duplicate deposits if you are using both ",Object(o.mdx)("inlineCode",{parentName:"p"},'.on("deposit", ...)')," and ",Object(o.mdx)("inlineCode",{parentName:"p"},".processDeposit"),"."),Object(o.mdx)(s.a,{defaultValue:"Bitcoin example",values:[{label:"Bitcoin example",value:"Bitcoin example"},{label:"Filecoin example",value:"Filecoin example"}],mdxType:"Tabs"},Object(o.mdx)(c.a,{value:"Bitcoin example",mdxType:"TabItem"},Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-ts"},'lockAndMint\n  .processDeposit({\n    transaction: {\n      txHash: "93864b94af9...",\n      vOut: 0,\n      amount: 290899, // sats\n      confirmations: 1,\n    },\n    amount: "290899",\n  })\n  .on(async (deposit) => {\n    // Handle deposit here. Same as .on("deposit", ...) callback.\n    // The default handler will keep retrying each step:\n    await RenJS.defaultDepositHandler(deposit);\n  })\n  .catch(console.error);\n'))),Object(o.mdx)(c.a,{value:"Filecoin example",mdxType:"TabItem"},Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-ts"},'lockAndMint\n  .processDeposit({\n    transaction: {\n      cid: "bafy2bzacedvu74e7ohjcwlh4fbx7ddf6li42fiuosajob6metcj2qwkgkgof2",\n      to: "t1v2ftlxhedyoijv7uqgxfygiziaqz23lgkvks77i",\n      amount: (0.01 * 1e8).toString(),\n      params: "EzGbvVHf8lb0v8CUfjh8y+tLbZzfIFcnNnt/gh6axmw=",\n      confirmations: 1,\n      nonce: 7,\n    },\n    amount: (0.01 * 1e8).toString(),\n  })\n  .on(async (deposit) => {\n    // Handle deposit here. Same as .on("deposit") callback.\n    // The default handler will keep retrying each step:\n    await RenJS.defaultDepositHandler(deposit);\n  })\n  .catch(console.error);\n')))),Object(o.mdx)("hr",null),Object(o.mdx)("h2",{id:"resuming-a-burnandrelease"},"Resuming a ",Object(o.mdx)("inlineCode",{parentName:"h2"},"BurnAndRelease")),Object(o.mdx)("p",null,"Once a burn has been completed on the mint-chain, RenVM will automatically see it and process it. However, should you want to watch the progress of burn-and-release, it's possible to recreate the ",Object(o.mdx)("inlineCode",{parentName:"p"},"BurnAndRelease")," object with the details of the burn."),Object(o.mdx)("p",null,"The details passed into a ",Object(o.mdx)("inlineCode",{parentName:"p"},"BurnAndRelease")," are not unique - the same burn can be repeated multiple times. To identify a specific burn, you either need the mint-chain's transaction hash, the RenVM transaction hash or the ",Object(o.mdx)("em",{parentName:"p"},"burn reference")," found in the burn event log."),Object(o.mdx)("p",null,"They can be passed in as follows:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-ts"},'const burnAndRelease = await renJS.burnAndRelease({\n  asset: "FIL",\n  to: Filecoin().Address("t14wczuvodunv3xzexobzywpbj6qpr6jwdrbkrmbq"),\n  from: Ethereum(provider),\n\n  // Provide one of:\n\n  // The RenVM transaction hash.\n  txHash: "0Nw-mdeQ1mc1TUC2xUnGgkoe_prdQ3uhO5sioDCVyFk",\n\n  // The mint-chain\'s transaction hash - if there are multiple burns the\n  // first will be chosen.\n  transaction: "0x1234...",\n\n  // The burn\'s unique identifier returned from the burn event log.\n  burnNonce: 1,\n  // can also be provided like so:\n  // from: Ethereum(provider).BurnNonce(0x16a),\n});\n')))}b.isMDXComponent=!0},489:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return d})),n.d(t,"MDXProvider",(function(){return p})),n.d(t,"mdx",(function(){return h})),n.d(t,"useMDXComponents",(function(){return m})),n.d(t,"withMDXComponents",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),u=function(e){return function(t){var n=m(t.components);return r.a.createElement(e,i({},t,{components:n}))}},m=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=m(n),u=a,p=d["".concat(i,".").concat(u)]||d[u]||f[u]||o;return n?r.a.createElement(p,l(l({ref:t},s),{},{components:n})):r.a.createElement(p,l({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},490:function(e,t,n){"use strict";var a=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.DocTag=t.DocType=void 0;var r=a(n(0));let o;t.DocType=o,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(o||(t.DocType=o={}));const i={[o.Tutorial]:"#b16bfc",[o.HowTo]:"#EC0088",[o.Reference]:"#ff823a",[o.Explanation]:"#29C0AF"};t.DocTag=({type:e,marginBottom:t})=>r.default.createElement(r.default.Fragment,null,r.default.createElement("span",{style:{border:"2px solid "+i[e]||!1,borderRadius:"5px",color:i[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==t?t:30,display:"inline-block"}},String(e)))},492:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}n.r(t),t.default=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},510:function(e,t,n){"use strict";var a=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(0),o=a(n(513));var i=function(){const e=(0,r.useContext)(o.default);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e};t.default=i},513:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(0,n(0).createContext)(void 0);t.default=a},528:function(e,t,n){"use strict";var a=n(4).default,r=n(19).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(0)),i=a(n(510)),s=a(n(492)),l=a(n(448));const c=37,d=39;var u=function(e){const{lazy:t,block:n,defaultValue:a,values:r,groupId:u,className:m}=e,{tabGroupChoices:p,setTabGroupChoices:f}=(0,i.default)(),[b,h]=(0,o.useState)(a),v=o.Children.toArray(e.children),g=[];if(null!=u){const e=p[u];null!=e&&e!==b&&r.some((t=>t.value===e))&&h(e)}const y=e=>{const t=e.target,n=g.indexOf(t),a=v[n].props.value;h(a),null!=u&&(f(u,a),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:r}=e.getBoundingClientRect(),{innerHeight:o,innerWidth:i}=window;return t>=0&&r<=i&&a<=o&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l.default.tabItemActive),setTimeout((()=>t.classList.remove(l.default.tabItemActive)),2e3))}),150))},x=e=>{var t;let n;switch(e.keyCode){case d:{const t=g.indexOf(e.target)+1;n=g[t]||g[0];break}case c:{const t=g.indexOf(e.target)-1;n=g[t]||g[g.length-1];break}}null===(t=n)||void 0===t||t.focus()};return o.default.createElement("div",{className:"tabs-container"},o.default.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.default)("tabs",{"tabs--block":n},m)},r.map((({value:e,label:t})=>o.default.createElement("li",{role:"tab",tabIndex:b===e?0:-1,"aria-selected":b===e,className:(0,s.default)("tabs__item",l.default.tabItem,{"tabs__item--active":b===e}),key:e,ref:e=>g.push(e),onKeyDown:x,onFocus:y,onClick:y},t)))),t?(0,o.cloneElement)(v.filter((e=>e.props.value===b))[0],{className:"margin-vert--md"}):o.default.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==b})))))};t.default=u},529:function(e,t,n){"use strict";var a=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0));var o=function({children:e,hidden:t,className:n}){return r.default.createElement("div",{role:"tabpanel",hidden:t,className:n},e)};t.default=o}}]);