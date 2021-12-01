(window.webpackJsonp=window.webpackJsonp||[]).push([[291],{324:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return m})),n.d(t,"default",(function(){return f}));var a=n(3),r=(n(0),n(415)),i=n(451),o=n.n(i),l=n(458),s=n.n(l),c=n(416);const d={title:"Chain Utils"},u={unversionedId:"how-to/chain-utils",id:"how-to/chain-utils",isDocsHomePage:!1,title:"Chain Utils",description:"The Chain classes exported by @renproject/chains provide utils for doing the following tasks:",source:"@site/ren-js/how-to/chain-utils.mdx",slug:"/how-to/chain-utils",permalink:"/ren-client-docs/ren-js/how-to/chain-utils",editUrl:"https://github.com/renproject/ren-client-docs/edit/master/ren-js/how-to/chain-utils.mdx",version:"current",sidebar:"docs",previous:{title:"Resuming transfers",permalink:"/ren-client-docs/ren-js/how-to/resuming-transfers"},next:{title:"Handling address expiry and uniqueness",permalink:"/ren-client-docs/ren-js/how-to/handling-address-expiry"}},m=[{value:"Getting fee details",id:"getting-fee-details",children:[]},{value:"Explorer links, asset decimals, address validation",id:"explorer-links-asset-decimals-address-validation",children:[]}],p={toc:m};function f({components:e,...t}){return Object(r.mdx)("wrapper",Object(a.default)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(r.mdx)(c.DocTag,{type:c.DocType.HowTo,mdxType:"DocTag"}),Object(r.mdx)("p",null,"The ",Object(r.mdx)("inlineCode",{parentName:"p"},"Chain")," classes exported by ",Object(r.mdx)("inlineCode",{parentName:"p"},"@renproject/chains")," provide utils for doing the following tasks:"),Object(r.mdx)("p",null,"All chains:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"Check that an address is valid"),Object(r.mdx)("li",{parentName:"ul"},"Generate explorer links for addresses and transactions"),Object(r.mdx)("li",{parentName:"ul"},"Query an asset's number of decimals, for displaying human-readable balances"),Object(r.mdx)("li",{parentName:"ul"},"Get the transaction ID (as a ",Object(r.mdx)("inlineCode",{parentName:"li"},"string"),") from a ",Object(r.mdx)("inlineCode",{parentName:"li"},"Transaction")," object"),Object(r.mdx)("li",{parentName:"ul"},"Fetch the transaction details (a ",Object(r.mdx)("inlineCode",{parentName:"li"},"Transaction")," object) from a transaction ID."),Object(r.mdx)("li",{parentName:"ul"},"Calculate the number of confirmations (or another measure of finality confidence) for transactions")),Object(r.mdx)("p",null,"Mint chains:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"Get an address's balance of a ren-asset"),Object(r.mdx)("li",{parentName:"ul"},"Get the on-chain RenVM fees")),Object(r.mdx)("p",null,"Using these utils can allow you to easily add new chains in the future, knowing that they will provide the same interface."),Object(r.mdx)("hr",null),Object(r.mdx)("h2",{id:"getting-fee-details"},"Getting fee details"),Object(r.mdx)("p",null,"To fetch the estimated fees of a burn or mint, you can call ",Object(r.mdx)("inlineCode",{parentName:"p"},"renJS.getFees"),", passing in the same asset and chain details:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-ts"},'await renJS.getFees({\n  asset: "BTC",\n  from: Bitcoin(),\n  to: Ethereum(provider, "testnet"),\n});\n')),Object(r.mdx)("p",null,"The returned value will have four fields:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-ts"},"{\n    lock?: BigNumber;\n    release?: BigNumber;\n    mint: number;\n    burn: number;\n}\n")),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"lock")," and ",Object(r.mdx)("inlineCode",{parentName:"li"},"release"),", in the asset's smallest unit, are the transaction fees subtracted from the transaction amount when RenVM is moving the asset into or out of the network's custody. For going from one mint-chain to another (not yet supported), ",Object(r.mdx)("inlineCode",{parentName:"li"},"lock")," and ",Object(r.mdx)("inlineCode",{parentName:"li"},"release")," will be ",Object(r.mdx)("inlineCode",{parentName:"li"},"undefined"),"."),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"mint")," and ",Object(r.mdx)("inlineCode",{parentName:"li"},"burn")," are the portion of the transaction amount charged by RenVM, in BPS (1 BPS equals 0.01%).")),Object(r.mdx)("hr",null),Object(r.mdx)("h2",{id:"explorer-links-asset-decimals-address-validation"},"Explorer links, asset decimals, address validation"),Object(r.mdx)("p",null,"Each chain class (",Object(r.mdx)("inlineCode",{parentName:"p"},"Bitcoin"),", ",Object(r.mdx)("inlineCode",{parentName:"p"},"Ethereum"),", etc.) provide a common set of helper methods:"),Object(r.mdx)("ol",null,Object(r.mdx)("li",{parentName:"ol"},Object(r.mdx)("inlineCode",{parentName:"li"},"await assetDecimals(asset)")," - returns the number of decimals used by the asset."),Object(r.mdx)("li",{parentName:"ol"},Object(r.mdx)("inlineCode",{parentName:"li"},'utils.addressIsValid("miMi2VET...")')," - returns whether the the parameter is a valid address.")),Object(r.mdx)("p",null,"The parameters to the following depend on how the chain defines an ",Object(r.mdx)("inlineCode",{parentName:"p"},"Address")," and a ",Object(r.mdx)("inlineCode",{parentName:"p"},"Transaction"),"."),Object(r.mdx)("ol",null,Object(r.mdx)("li",{parentName:"ol"},Object(r.mdx)("inlineCode",{parentName:"li"},"utils.addressExplorerLink(address)")," - returns a link to the address in a chain explorer."),Object(r.mdx)("li",{parentName:"ol"},Object(r.mdx)("inlineCode",{parentName:"li"},"utils.transactionExplorerLink(transaction)")," - returns a link to the transaction in a chain explorer."),Object(r.mdx)("li",{parentName:"ol"},Object(r.mdx)("inlineCode",{parentName:"li"},"utils.transactionID(transaction)")," - returns the hash or ID of the transaction as a string.")),Object(r.mdx)("p",null,"Transactions can be retrieved from a deposit object by taking ",Object(r.mdx)("inlineCode",{parentName:"p"},"deposit.depositDetails.transaction"),"."),Object(r.mdx)("p",null,"The ",Object(r.mdx)("inlineCode",{parentName:"p"},"Address")," and ",Object(r.mdx)("inlineCode",{parentName:"p"},"Transaction")," formats for various chains are:"),Object(r.mdx)(o.a,{defaultValue:"Bitcoin",values:[{label:"Bitcoin",value:"Bitcoin"},{label:"Ethereum",value:"Ethereum"},{label:"Filecoin",value:"Filecoin"}],mdxType:"Tabs"},Object(r.mdx)(s.a,{value:"Bitcoin",mdxType:"TabItem"},Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-ts"},"// Same for Bitcoin forks.\n\ntype Address = string;\n\ninterface Transaction {\n  readonly txHash: string;\n  readonly vOut: number;\n  readonly amount: number;\n  readonly scriptPubKey?: string;\n  readonly confirmations: number;\n}\n"))),Object(r.mdx)(s.a,{value:"Ethereum",mdxType:"TabItem"},Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-ts"},"// Same for other EVM chains like Binance Smart Chain.\n\ntype Transaction = string; // The transaction hash.\ntype Address = string;\n"))),Object(r.mdx)(s.a,{value:"Filecoin",mdxType:"TabItem"},Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-ts"},"interface Address {\n  address: string; // Filecoin address\n  params?: string; // base64 params\n}\n\ninterface Transaction {\n  cid: string;\n  amount: string; // 18 decimal places\n  params: string; // base64\n  confirmations: number;\n  nonce: number;\n}\n")))))}f.isMDXComponent=!0},415:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return d})),n.d(t,"MDXProvider",(function(){return p})),n.d(t,"mdx",(function(){return h})),n.d(t,"useMDXComponents",(function(){return m})),n.d(t,"withMDXComponents",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),u=function(e){return function(t){var n=m(t.components);return r.a.createElement(e,o({},t,{components:n}))}},m=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=m(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=m(n),u=a,p=d["".concat(o,".").concat(u)]||d[u]||f[u]||i;return n?r.a.createElement(p,s(s({ref:t},l),{},{components:n})):r.a.createElement(p,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},416:function(e,t,n){"use strict";var a=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.DocTag=t.DocType=void 0;var r,i,o=a(n(0));t.DocType=i,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(i||(t.DocType=i={}));var l=((r={})[i.Tutorial]="#b16bfc",r[i.HowTo]="#EC0088",r[i.Reference]="#ff823a",r[i.Explanation]="#29C0AF",r);t.DocTag=function(e){var t=e.type,n=e.marginBottom;return o.default.createElement(o.default.Fragment,null,o.default.createElement("span",{style:{border:"2px solid "+l[t]||!1,borderRadius:"5px",color:l[t]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==n?n:30,display:"inline-block"}},String(t)))}},418:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}n.r(t),t.default=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},434:function(e,t,n){"use strict";var a=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(0),i=a(n(436));var o=function(){var e=(0,r.useContext)(i.default);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e};t.default=o},436:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(0,n(0).createContext)(void 0);t.default=a},451:function(e,t,n){"use strict";var a=n(4).default,r=n(19).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(0)),o=a(n(434)),l=a(n(418)),s=a(n(371));var c=37,d=39;var u=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,r=e.values,u=e.groupId,m=e.className,p=(0,o.default)(),f=p.tabGroupChoices,b=p.setTabGroupChoices,h=(0,i.useState)(a),x=h[0],O=h[1],v=i.Children.toArray(e.children),j=[];if(null!=u){var g=f[u];null!=g&&g!==x&&r.some((function(e){return e.value===g}))&&O(g)}var y=function(e){var t=e.target,n=j.indexOf(t),a=v[n].props.value;O(a),null!=u&&(b(u,a),setTimeout((function(){var e,n,a,r,i,o,l,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,o=window,l=o.innerHeight,c=o.innerWidth,n>=0&&i<=c&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s.default.tabItemActive),setTimeout((function(){return t.classList.remove(s.default.tabItemActive)}),2e3))}),150))},N=function(e){var t,n;switch(e.keyCode){case d:var a=j.indexOf(e.target)+1;n=j[a]||j[0];break;case c:var r=j.indexOf(e.target)-1;n=j[r]||j[j.length-1]}null===(t=n)||void 0===t||t.focus()};return i.default.createElement("div",{className:"tabs-container"},i.default.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.default)("tabs",{"tabs--block":n},m)},r.map((function(e){var t=e.value,n=e.label;return i.default.createElement("li",{role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,className:(0,l.default)("tabs__item",s.default.tabItem,{"tabs__item--active":x===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:N,onFocus:y,onClick:y},n)}))),t?(0,i.cloneElement)(v.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):i.default.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))};t.default=u},458:function(e,t,n){"use strict";var a=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0));var i=function(e){var t=e.children,n=e.hidden,a=e.className;return r.default.createElement("div",{role:"tabpanel",hidden:n,className:a},t)};t.default=i}}]);