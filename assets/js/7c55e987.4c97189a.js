(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{209:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return c}));var d=n(3),r=(n(0),n(486)),i=n(487);const s={title:"LinkedList"},a={unversionedId:"gateway-sol/libraries/LinkedList",id:"gateway-sol/libraries/LinkedList",isDocsHomePage:!1,title:"LinkedList",description:"Contract: LinkedList",source:"@site/contracts/gateway-sol/libraries/LinkedList.mdx",slug:"/gateway-sol/libraries/LinkedList",permalink:"/ren-client-docs/contracts/gateway-sol/libraries/LinkedList",version:"current"},l=[{value:"Contract: <code>LinkedList</code>",id:"contract-linkedlist",children:[]},{value:"Variables",id:"variables",children:[{value:"<strong><code>NULL</code></strong>: <em><code>address</code></em>",id:"null-address",children:[]}]},{value:"Functions",id:"functions",children:[{value:"<strong><code>insertBefore</code></strong> <em><code>(struct LinkedList.List self, address target, address newNode)</code></em> (internal)",id:"insertbefore-struct-linkedlistlist-self-address-target-address-newnode-internal",children:[]},{value:"<strong><code>insertAfter</code></strong> <em><code>(struct LinkedList.List self, address target, address newNode)</code></em> (internal)",id:"insertafter-struct-linkedlistlist-self-address-target-address-newnode-internal",children:[]},{value:"<strong><code>remove</code></strong> <em><code>(struct LinkedList.List self, address node)</code></em> (internal)",id:"remove-struct-linkedlistlist-self-address-node-internal",children:[]},{value:"<strong><code>prepend</code></strong> <em><code>(struct LinkedList.List self, address node)</code></em> (internal)",id:"prepend-struct-linkedlistlist-self-address-node-internal",children:[]},{value:"<strong><code>append</code></strong> <em><code>(struct LinkedList.List self, address node)</code></em> (internal)",id:"append-struct-linkedlistlist-self-address-node-internal",children:[]},{value:"<strong><code>swap</code></strong> <em><code>(struct LinkedList.List self, address left, address right)</code></em> (internal)",id:"swap-struct-linkedlistlist-self-address-left-address-right-internal",children:[]},{value:"<strong><code>isInList</code></strong> <em><code>(struct LinkedList.List self, address node) \u2192 bool</code></em> (internal)",id:"isinlist-struct-linkedlistlist-self-address-node-\u2192-bool-internal",children:[]},{value:"<strong><code>begin</code></strong> <em><code>(struct LinkedList.List self) \u2192 address</code></em> (internal)",id:"begin-struct-linkedlistlist-self-\u2192-address-internal",children:[]},{value:"<strong><code>end</code></strong> <em><code>(struct LinkedList.List self) \u2192 address</code></em> (internal)",id:"end-struct-linkedlistlist-self-\u2192-address-internal",children:[]},{value:"<strong><code>next</code></strong> <em><code>(struct LinkedList.List self, address node) \u2192 address</code></em> (internal)",id:"next-struct-linkedlistlist-self-address-node-\u2192-address-internal",children:[]},{value:"<strong><code>previous</code></strong> <em><code>(struct LinkedList.List self, address node) \u2192 address</code></em> (internal)",id:"previous-struct-linkedlistlist-self-address-node-\u2192-address-internal",children:[]},{value:"<strong><code>elements</code></strong> <em><code>(struct LinkedList.List self, address _start, uint256 _count) \u2192 address[]</code></em> (internal)",id:"elements-struct-linkedlistlist-self-address-_start-uint256-_count-\u2192-address-internal",children:[]}]}],o={toc:l};function c({components:e,...t}){return Object(r.mdx)("wrapper",Object(d.default)({},o,t,{components:e,mdxType:"MDXLayout"}),Object(r.mdx)(i.DocTag,{type:i.DocType.Reference,mdxType:"DocTag"}),Object(r.mdx)("h2",{id:"contract-linkedlist"},"Contract: ",Object(r.mdx)("inlineCode",{parentName:"h2"},"LinkedList")),Object(r.mdx)("p",null,"LinkedList is a library for a circular double linked list."),Object(r.mdx)("hr",null),Object(r.mdx)("br",null),Object(r.mdx)("h2",{id:"variables"},"Variables"),Object(r.mdx)("h3",{id:"null-address"},Object(r.mdx)("strong",{parentName:"h3"},Object(r.mdx)("inlineCode",{parentName:"strong"},"NULL")),": ",Object(r.mdx)("em",{parentName:"h3"},Object(r.mdx)("inlineCode",{parentName:"em"},"address"))),Object(r.mdx)("hr",null),Object(r.mdx)("br",null),Object(r.mdx)("h2",{id:"functions"},"Functions"),Object(r.mdx)("h3",{id:"insertbefore-struct-linkedlistlist-self-address-target-address-newnode-internal"},Object(r.mdx)("strong",{parentName:"h3"},Object(r.mdx)("inlineCode",{parentName:"strong"},"insertBefore"))," ",Object(r.mdx)("em",{parentName:"h3"},Object(r.mdx)("inlineCode",{parentName:"em"},"(struct LinkedList.List self, address target, address newNode)"))," (internal)"),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Params")),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},Object(r.mdx)("inlineCode",{parentName:"p"},"self"),": The list being used.")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},Object(r.mdx)("inlineCode",{parentName:"p"},"target"),": The existing node in the list.")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},Object(r.mdx)("inlineCode",{parentName:"p"},"newNode"),": The next node to insert before the target."))),Object(r.mdx)("p",null,"Insert a new node before an existing node."),Object(r.mdx)("hr",null),Object(r.mdx)("h3",{id:"insertafter-struct-linkedlistlist-self-address-target-address-newnode-internal"},Object(r.mdx)("strong",{parentName:"h3"},Object(r.mdx)("inlineCode",{parentName:"strong"},"insertAfter"))," ",Object(r.mdx)("em",{parentName:"h3"},Object(r.mdx)("inlineCode",{parentName:"em"},"(struct LinkedList.List self, address target, address newNode)"))," (internal)"),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Params")),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},Object(r.mdx)("inlineCode",{parentName:"p"},"self"),": The list being used.")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},Object(r.mdx)("inlineCode",{parentName:"p"},"target"),": The existing node in the list.")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},Object(r.mdx)("inlineCode",{parentName:"p"},"newNode"),": The next node to insert after the target."))),Object(r.mdx)("p",null,"Insert a new node after an existing node."),Object(r.mdx)("hr",null),Object(r.mdx)("h3",{id:"remove-struct-linkedlistlist-self-address-node-internal"},Object(r.mdx)("strong",{parentName:"h3"},Object(r.mdx)("inlineCode",{parentName:"strong"},"remove"))," ",Object(r.mdx)("em",{parentName:"h3"},Object(r.mdx)("inlineCode",{parentName:"em"},"(struct LinkedList.List self, address node)"))," (internal)"),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Params")),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},Object(r.mdx)("inlineCode",{parentName:"p"},"self"),": The list being using.")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},Object(r.mdx)("inlineCode",{parentName:"p"},"node"),": The node in the list to be removed."))),Object(r.mdx)("p",null,"Remove a node from the list, and fix the previous and next\npointers that are pointing to the removed node. Removing anode that is not\nin the list will do nothing."),Object(r.mdx)("hr",null),Object(r.mdx)("h3",{id:"prepend-struct-linkedlistlist-self-address-node-internal"},Object(r.mdx)("strong",{parentName:"h3"},Object(r.mdx)("inlineCode",{parentName:"strong"},"prepend"))," ",Object(r.mdx)("em",{parentName:"h3"},Object(r.mdx)("inlineCode",{parentName:"em"},"(struct LinkedList.List self, address node)"))," (internal)"),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Params")),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},Object(r.mdx)("inlineCode",{parentName:"p"},"self"),": The list being used.")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},Object(r.mdx)("inlineCode",{parentName:"p"},"node"),": The node to insert at the beginning of the list."))),Object(r.mdx)("p",null,"Insert a node at the beginning of the list."),Object(r.mdx)("hr",null),Object(r.mdx)("h3",{id:"append-struct-linkedlistlist-self-address-node-internal"},Object(r.mdx)("strong",{parentName:"h3"},Object(r.mdx)("inlineCode",{parentName:"strong"},"append"))," ",Object(r.mdx)("em",{parentName:"h3"},Object(r.mdx)("inlineCode",{parentName:"em"},"(struct LinkedList.List self, address node)"))," (internal)"),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Params")),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},Object(r.mdx)("inlineCode",{parentName:"p"},"self"),": The list being used.")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},Object(r.mdx)("inlineCode",{parentName:"p"},"node"),": The node to insert at the end of the list."))),Object(r.mdx)("p",null,"Insert a node at the end of the list."),Object(r.mdx)("hr",null),Object(r.mdx)("h3",{id:"swap-struct-linkedlistlist-self-address-left-address-right-internal"},Object(r.mdx)("strong",{parentName:"h3"},Object(r.mdx)("inlineCode",{parentName:"strong"},"swap"))," ",Object(r.mdx)("em",{parentName:"h3"},Object(r.mdx)("inlineCode",{parentName:"em"},"(struct LinkedList.List self, address left, address right)"))," (internal)"),Object(r.mdx)("hr",null),Object(r.mdx)("h3",{id:"isinlist-struct-linkedlistlist-self-address-node-\u2192-bool-internal"},Object(r.mdx)("strong",{parentName:"h3"},Object(r.mdx)("inlineCode",{parentName:"strong"},"isInList"))," ",Object(r.mdx)("em",{parentName:"h3"},Object(r.mdx)("inlineCode",{parentName:"em"},"(struct LinkedList.List self, address node) \u2192 bool"))," (internal)"),Object(r.mdx)("hr",null),Object(r.mdx)("h3",{id:"begin-struct-linkedlistlist-self-\u2192-address-internal"},Object(r.mdx)("strong",{parentName:"h3"},Object(r.mdx)("inlineCode",{parentName:"strong"},"begin"))," ",Object(r.mdx)("em",{parentName:"h3"},Object(r.mdx)("inlineCode",{parentName:"em"},"(struct LinkedList.List self) \u2192 address"))," (internal)"),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Params")),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"self"),": The list being used.")),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Returns")),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"A"),": address identifying the node at the beginning of the double\nlinked list.")),Object(r.mdx)("p",null,"Get the node at the beginning of a double linked list."),Object(r.mdx)("hr",null),Object(r.mdx)("h3",{id:"end-struct-linkedlistlist-self-\u2192-address-internal"},Object(r.mdx)("strong",{parentName:"h3"},Object(r.mdx)("inlineCode",{parentName:"strong"},"end"))," ",Object(r.mdx)("em",{parentName:"h3"},Object(r.mdx)("inlineCode",{parentName:"em"},"(struct LinkedList.List self) \u2192 address"))," (internal)"),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Params")),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"self"),": The list being used.")),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Returns")),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"A"),": address identifying the node at the end of the double linked\nlist.")),Object(r.mdx)("p",null,"Get the node at the end of a double linked list."),Object(r.mdx)("hr",null),Object(r.mdx)("h3",{id:"next-struct-linkedlistlist-self-address-node-\u2192-address-internal"},Object(r.mdx)("strong",{parentName:"h3"},Object(r.mdx)("inlineCode",{parentName:"strong"},"next"))," ",Object(r.mdx)("em",{parentName:"h3"},Object(r.mdx)("inlineCode",{parentName:"em"},"(struct LinkedList.List self, address node) \u2192 address"))," (internal)"),Object(r.mdx)("hr",null),Object(r.mdx)("h3",{id:"previous-struct-linkedlistlist-self-address-node-\u2192-address-internal"},Object(r.mdx)("strong",{parentName:"h3"},Object(r.mdx)("inlineCode",{parentName:"strong"},"previous"))," ",Object(r.mdx)("em",{parentName:"h3"},Object(r.mdx)("inlineCode",{parentName:"em"},"(struct LinkedList.List self, address node) \u2192 address"))," (internal)"),Object(r.mdx)("hr",null),Object(r.mdx)("h3",{id:"elements-struct-linkedlistlist-self-address-_start-uint256-_count-\u2192-address-internal"},Object(r.mdx)("strong",{parentName:"h3"},Object(r.mdx)("inlineCode",{parentName:"strong"},"elements"))," ",Object(r.mdx)("em",{parentName:"h3"},Object(r.mdx)("inlineCode",{parentName:"em"},"(struct LinkedList.List self, address _start, uint256 _count) \u2192 address[]"))," (internal)"),Object(r.mdx)("hr",null))}c.isMDXComponent=!0},486:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return c})),n.d(t,"MDXProvider",(function(){return u})),n.d(t,"mdx",(function(){return x})),n.d(t,"useMDXComponents",(function(){return p})),n.d(t,"withMDXComponents",(function(){return m}));var d=n(0),r=n.n(d);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var d in n)Object.prototype.hasOwnProperty.call(n,d)&&(e[d]=n[d])}return e}).apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);t&&(d=d.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,d)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,d,r=function(e,t){if(null==e)return{};var n,d,r={},i=Object.keys(e);for(d=0;d<i.length;d++)n=i[d],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(d=0;d<i.length;d++)n=i[d],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),m=function(e){return function(t){var n=p(t.components);return r.a.createElement(e,s({},t,{components:n}))}},p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,d=e.mdxType,i=e.originalType,s=e.parentName,a=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=d,u=c["".concat(s,".").concat(m)]||c[m]||b[m]||i;return n?r.a.createElement(u,l(l({ref:t},a),{},{components:n})):r.a.createElement(u,l({ref:t},a))}));function x(e,t){var n=arguments,d=t&&t.mdxType;if("string"==typeof e||d){var i=n.length,s=new Array(i);s[0]=O;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:d,s[1]=a;for(var o=2;o<i;o++)s[o]=n[o];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},487:function(e,t,n){"use strict";var d=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.DocTag=t.DocType=void 0;var r=d(n(0));let i;t.DocType=i,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(i||(t.DocType=i={}));const s={[i.Tutorial]:"#b16bfc",[i.HowTo]:"#EC0088",[i.Reference]:"#ff823a",[i.Explanation]:"#29C0AF"};t.DocTag=({type:e,marginBottom:t})=>r.default.createElement(r.default.Fragment,null,r.default.createElement("span",{style:{border:"2px solid "+s[e]||!1,borderRadius:"5px",color:s[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==t?t:30,display:"inline-block"}},String(e)))}}]);