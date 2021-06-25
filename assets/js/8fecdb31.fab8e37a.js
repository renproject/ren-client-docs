(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{242:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(8),i=(n(0),n(489)),l={id:"lib_interfaces_build_main_ethargs.etharg",title:"Interface: EthArg<name, type, valueType>",sidebar_label:"EthArg",custom_edit_url:null},c={unversionedId:"api/interfaces/lib_interfaces_build_main_ethargs.etharg",id:"api/interfaces/lib_interfaces_build_main_ethargs.etharg",isDocsHomePage:!1,title:"Interface: EthArg<name, type, valueType>",description:"Interface: EthArg",source:"@site/ren-js/api/interfaces/lib_interfaces_build_main_ethargs.etharg.md",slug:"/api/interfaces/lib_interfaces_build_main_ethargs.etharg",permalink:"/ren-client-docs/ren-js/api/interfaces/lib_interfaces_build_main_ethargs.etharg",editUrl:null,version:"current",sidebar_label:"EthArg"},d=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Properties",id:"properties",children:[{value:"name",id:"name",children:[]},{value:"notInPayload",id:"notinpayload",children:[]},{value:"onlyInPayload",id:"onlyinpayload",children:[]},{value:"type",id:"type",children:[]},{value:"value",id:"value",children:[]}]}],o={toc:d};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.mdx)("wrapper",Object(a.default)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("h1",{id:"interface-ethargname-type-valuetype"},"Interface: EthArg<name, type, valueType",">"),Object(i.mdx)("p",null,Object(i.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/modules/lib_interfaces_build_main_ethargs"},"lib/interfaces/build/main/ethArgs"),".EthArg"),Object(i.mdx)("h2",{id:"type-parameters"},"Type parameters"),Object(i.mdx)("table",null,Object(i.mdx)("thead",{parentName:"table"},Object(i.mdx)("tr",{parentName:"thead"},Object(i.mdx)("th",{parentName:"tr",align:"left"},"Name"),Object(i.mdx)("th",{parentName:"tr",align:"left"},"Type"),Object(i.mdx)("th",{parentName:"tr",align:"left"},"Default"))),Object(i.mdx)("tbody",{parentName:"table"},Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",{parentName:"tr",align:"left"},Object(i.mdx)("inlineCode",{parentName:"td"},"name")),Object(i.mdx)("td",{parentName:"tr",align:"left"},Object(i.mdx)("em",{parentName:"td"},"string")),Object(i.mdx)("td",{parentName:"tr",align:"left"},Object(i.mdx)("em",{parentName:"td"},"string"))),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",{parentName:"tr",align:"left"},Object(i.mdx)("inlineCode",{parentName:"td"},"type")),Object(i.mdx)("td",{parentName:"tr",align:"left"},Object(i.mdx)("a",{parentName:"td",href:"/ren-client-docs/ren-js/api/modules/lib_interfaces_build_main_ethargs#ethtype"},Object(i.mdx)("em",{parentName:"a"},"EthType"))),Object(i.mdx)("td",{parentName:"tr",align:"left"},Object(i.mdx)("a",{parentName:"td",href:"/ren-client-docs/ren-js/api/modules/lib_interfaces_build_main_ethargs#ethtype"},Object(i.mdx)("em",{parentName:"a"},"EthType")))),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",{parentName:"tr",align:"left"},Object(i.mdx)("inlineCode",{parentName:"td"},"valueType")),Object(i.mdx)("td",{parentName:"tr",align:"left"},"-"),Object(i.mdx)("td",{parentName:"tr",align:"left"},Object(i.mdx)("em",{parentName:"td"},"any"))))),Object(i.mdx)("h2",{id:"properties"},"Properties"),Object(i.mdx)("h3",{id:"name"},"name"),Object(i.mdx)("p",null,"\u2022 ",Object(i.mdx)("strong",{parentName:"p"},"name"),": name"),Object(i.mdx)("p",null,"Defined in: ren-js/packages/lib/interfaces/build/main/ethArgs.d.ts:6"),Object(i.mdx)("hr",null),Object(i.mdx)("h3",{id:"notinpayload"},"notInPayload"),Object(i.mdx)("p",null,"\u2022 ",Object(i.mdx)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.mdx)("strong",{parentName:"p"},"notInPayload"),": ",Object(i.mdx)("em",{parentName:"p"},"boolean")),Object(i.mdx)("p",null,Object(i.mdx)("inlineCode",{parentName:"p"},"notInPayload")," indicates that the parameter should be used when calling\nthe smart contract but it should not be used when calculating the\npayload hash. This is useful for values can only be known at the time\nof calling the contract. Note that others may be able to submit the mint\nand set their own value, unless the contract caller is restricted somehow."),Object(i.mdx)("p",null,"Defined in: ren-js/packages/lib/interfaces/build/main/ethArgs.d.ts:16"),Object(i.mdx)("hr",null),Object(i.mdx)("h3",{id:"onlyinpayload"},"onlyInPayload"),Object(i.mdx)("p",null,"\u2022 ",Object(i.mdx)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.mdx)("strong",{parentName:"p"},"onlyInPayload"),": ",Object(i.mdx)("em",{parentName:"p"},"boolean")),Object(i.mdx)("p",null,Object(i.mdx)("inlineCode",{parentName:"p"},"onlyInPayload")," indicates that the parameter should be used when\ncalculating the payload hash but it should not be passed in to the\ncontract call. This is useful for values that don't need to be explicitly\npassed in to the contract, such as the contract caller."),Object(i.mdx)("p",null,Object(i.mdx)("inlineCode",{parentName:"p"},"notInPayload")," and ",Object(i.mdx)("inlineCode",{parentName:"p"},"onlyInPayload")," can be used together to allow users to\nupdate values such as exchange rate slippage, which may have updated\nwhile waiting for the lock-chain confirmations - while ensuring that\nothers can't change it for them."),Object(i.mdx)("p",null,"Defined in: ren-js/packages/lib/interfaces/build/main/ethArgs.d.ts:28"),Object(i.mdx)("hr",null),Object(i.mdx)("h3",{id:"type"},"type"),Object(i.mdx)("p",null,"\u2022 ",Object(i.mdx)("strong",{parentName:"p"},"type"),": type"),Object(i.mdx)("p",null,"Defined in: ren-js/packages/lib/interfaces/build/main/ethArgs.d.ts:7"),Object(i.mdx)("hr",null),Object(i.mdx)("h3",{id:"value"},"value"),Object(i.mdx)("p",null,"\u2022 ",Object(i.mdx)("strong",{parentName:"p"},"value"),": valueType"),Object(i.mdx)("p",null,"Defined in: ren-js/packages/lib/interfaces/build/main/ethArgs.d.ts:8"))}m.isMDXComponent=!0},489:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return m})),n.d(t,"MDXProvider",(function(){return u})),n.d(t,"mdx",(function(){return f})),n.d(t,"useMDXComponents",(function(){return s})),n.d(t,"withMDXComponents",(function(){return p}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=r.a.createContext({}),p=function(e){return function(t){var n=s(t.components);return r.a.createElement(e,l({},t,{components:n}))}},s=function(e){var t=r.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(m.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),p=a,u=m["".concat(l,".").concat(p)]||m[p]||b[p]||i;return n?r.a.createElement(u,d(d({ref:t},c),{},{components:n})):r.a.createElement(u,d({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=h;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var o=2;o<i;o++)l[o]=n[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);