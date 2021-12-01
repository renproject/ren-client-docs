(window.webpackJsonp=window.webpackJsonp||[]).push([[288],{321:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return m})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return p}));var a=n(3),r=(n(0),n(415));const m={id:"lib_utils_build_main_signatureutils",title:"Module: lib/utils/build/main/signatureUtils",sidebar_label:"lib/utils/build/main/signatureUtils",sidebar_position:0,custom_edit_url:null},i={unversionedId:"api/modules/lib_utils_build_main_signatureutils",id:"api/modules/lib_utils_build_main_signatureutils",isDocsHomePage:!1,title:"Module: lib/utils/build/main/signatureUtils",description:"Module: lib/utils/build/main/signatureUtils",source:"@site/ren-js/api/modules/lib_utils_build_main_signatureutils.md",slug:"/api/modules/lib_utils_build_main_signatureutils",permalink:"/ren-client-docs/ren-js/api/modules/lib_utils_build_main_signatureutils",editUrl:null,version:"current",sidebar_label:"lib/utils/build/main/signatureUtils"},d=[{value:"Variables",id:"variables",children:[{value:"secp256k1n",id:"secp256k1n",children:[]}]},{value:"Functions",id:"functions",children:[{value:"fixSignature",id:"fixsignature",children:[]},{value:"fixSignatureSimple",id:"fixsignaturesimple",children:[]},{value:"signatureToBuffer",id:"signaturetobuffer",children:[]}]}],l={toc:d};function p({components:e,...t}){return Object(r.mdx)("wrapper",Object(a.default)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(r.mdx)("h1",{id:"module-libutilsbuildmainsignatureutils"},"Module: lib/utils/build/main/signatureUtils"),Object(r.mdx)("h2",{id:"variables"},"Variables"),Object(r.mdx)("h3",{id:"secp256k1n"},"secp256k1n"),Object(r.mdx)("p",null,"\u2022 ",Object(r.mdx)("inlineCode",{parentName:"p"},"Const")," ",Object(r.mdx)("strong",{parentName:"p"},"secp256k1n"),": BigNumber"),Object(r.mdx)("p",null,"Defined in: ren-js/packages/lib/utils/build/main/signatureUtils.d.ts:10"),Object(r.mdx)("h2",{id:"functions"},"Functions"),Object(r.mdx)("h3",{id:"fixsignature"},"fixSignature"),Object(r.mdx)("p",null,"\u25b8 ",Object(r.mdx)("inlineCode",{parentName:"p"},"Const")," ",Object(r.mdx)("strong",{parentName:"p"},"fixSignature"),"(",Object(r.mdx)("inlineCode",{parentName:"p"},"r"),": ",Object(r.mdx)("em",{parentName:"p"},"Buffer"),", ",Object(r.mdx)("inlineCode",{parentName:"p"},"s"),": ",Object(r.mdx)("em",{parentName:"p"},"Buffer"),", ",Object(r.mdx)("inlineCode",{parentName:"p"},"v"),": ",Object(r.mdx)("em",{parentName:"p"},"number"),", ",Object(r.mdx)("inlineCode",{parentName:"p"},"sigHash"),": ",Object(r.mdx)("em",{parentName:"p"},"Buffer"),", ",Object(r.mdx)("inlineCode",{parentName:"p"},"pHash"),": ",Object(r.mdx)("em",{parentName:"p"},"Buffer"),", ",Object(r.mdx)("inlineCode",{parentName:"p"},"amount"),": ",Object(r.mdx)("em",{parentName:"p"},"string"),", ",Object(r.mdx)("inlineCode",{parentName:"p"},"to"),": ",Object(r.mdx)("em",{parentName:"p"},"string"),", ",Object(r.mdx)("inlineCode",{parentName:"p"},"tokenIdentifier"),": ",Object(r.mdx)("em",{parentName:"p"},"string"),", ",Object(r.mdx)("inlineCode",{parentName:"p"},"nHash"),": ",Object(r.mdx)("em",{parentName:"p"},"Buffer"),", ",Object(r.mdx)("inlineCode",{parentName:"p"},"v2?"),": ",Object(r.mdx)("em",{parentName:"p"},"boolean"),", ",Object(r.mdx)("inlineCode",{parentName:"p"},"logger?"),": ",Object(r.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/interfaces/lib_interfaces_build_main_logger.logger"},Object(r.mdx)("em",{parentName:"a"},"Logger")),"): Signature"),Object(r.mdx)("h4",{id:"parameters"},"Parameters"),Object(r.mdx)("table",null,Object(r.mdx)("thead",{parentName:"table"},Object(r.mdx)("tr",{parentName:"thead"},Object(r.mdx)("th",{parentName:"tr",align:"left"},"Name"),Object(r.mdx)("th",{parentName:"tr",align:"left"},"Type"))),Object(r.mdx)("tbody",{parentName:"table"},Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"r")),Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("em",{parentName:"td"},"Buffer"))),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"s")),Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("em",{parentName:"td"},"Buffer"))),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"v")),Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("em",{parentName:"td"},"number"))),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"sigHash")),Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("em",{parentName:"td"},"Buffer"))),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"pHash")),Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("em",{parentName:"td"},"Buffer"))),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"amount")),Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("em",{parentName:"td"},"string"))),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"to")),Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("em",{parentName:"td"},"string"))),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"tokenIdentifier")),Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("em",{parentName:"td"},"string"))),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"nHash")),Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("em",{parentName:"td"},"Buffer"))),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"v2?")),Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("em",{parentName:"td"},"boolean"))),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"logger?")),Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("a",{parentName:"td",href:"/ren-client-docs/ren-js/api/interfaces/lib_interfaces_build_main_logger.logger"},Object(r.mdx)("em",{parentName:"a"},"Logger")))))),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Returns:")," Signature"),Object(r.mdx)("p",null,"Defined in: ren-js/packages/lib/utils/build/main/signatureUtils.d.ts:12"),Object(r.mdx)("hr",null),Object(r.mdx)("h3",{id:"fixsignaturesimple"},"fixSignatureSimple"),Object(r.mdx)("p",null,"\u25b8 ",Object(r.mdx)("inlineCode",{parentName:"p"},"Const")," ",Object(r.mdx)("strong",{parentName:"p"},"fixSignatureSimple"),"(",Object(r.mdx)("inlineCode",{parentName:"p"},"r"),": ",Object(r.mdx)("em",{parentName:"p"},"Buffer"),", ",Object(r.mdx)("inlineCode",{parentName:"p"},"s"),": ",Object(r.mdx)("em",{parentName:"p"},"Buffer"),", ",Object(r.mdx)("inlineCode",{parentName:"p"},"v"),": ",Object(r.mdx)("em",{parentName:"p"},"number"),"): Signature"),Object(r.mdx)("h4",{id:"parameters-1"},"Parameters"),Object(r.mdx)("table",null,Object(r.mdx)("thead",{parentName:"table"},Object(r.mdx)("tr",{parentName:"thead"},Object(r.mdx)("th",{parentName:"tr",align:"left"},"Name"),Object(r.mdx)("th",{parentName:"tr",align:"left"},"Type"))),Object(r.mdx)("tbody",{parentName:"table"},Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"r")),Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("em",{parentName:"td"},"Buffer"))),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"s")),Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("em",{parentName:"td"},"Buffer"))),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"v")),Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("em",{parentName:"td"},"number"))))),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Returns:")," Signature"),Object(r.mdx)("p",null,"Defined in: ren-js/packages/lib/utils/build/main/signatureUtils.d.ts:11"),Object(r.mdx)("hr",null),Object(r.mdx)("h3",{id:"signaturetobuffer"},"signatureToBuffer"),Object(r.mdx)("p",null,"\u25b8 ",Object(r.mdx)("inlineCode",{parentName:"p"},"Const")," ",Object(r.mdx)("strong",{parentName:"p"},"signatureToBuffer"),"<T",">","(",Object(r.mdx)("inlineCode",{parentName:"p"},"sig"),": T): ",Object(r.mdx)("em",{parentName:"p"},"Buffer")),Object(r.mdx)("h4",{id:"type-parameters"},"Type parameters"),Object(r.mdx)("table",null,Object(r.mdx)("thead",{parentName:"table"},Object(r.mdx)("tr",{parentName:"thead"},Object(r.mdx)("th",{parentName:"tr",align:"left"},"Name"),Object(r.mdx)("th",{parentName:"tr",align:"left"},"Type"))),Object(r.mdx)("tbody",{parentName:"table"},Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"T")),Object(r.mdx)("td",{parentName:"tr",align:"left"},"Signature")))),Object(r.mdx)("h4",{id:"parameters-2"},"Parameters"),Object(r.mdx)("table",null,Object(r.mdx)("thead",{parentName:"table"},Object(r.mdx)("tr",{parentName:"thead"},Object(r.mdx)("th",{parentName:"tr",align:"left"},"Name"),Object(r.mdx)("th",{parentName:"tr",align:"left"},"Type"))),Object(r.mdx)("tbody",{parentName:"table"},Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"sig")),Object(r.mdx)("td",{parentName:"tr",align:"left"},"T")))),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Returns:")," ",Object(r.mdx)("em",{parentName:"p"},"Buffer")),Object(r.mdx)("p",null,"Defined in: ren-js/packages/lib/utils/build/main/signatureUtils.d.ts:9"))}p.isMDXComponent=!0},415:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return c})),n.d(t,"MDXProvider",(function(){return o})),n.d(t,"mdx",(function(){return j})),n.d(t,"useMDXComponents",(function(){return u})),n.d(t,"withMDXComponents",(function(){return b}));var a=n(0),r=n.n(a);function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},m=Object.keys(e);for(a=0;a<m.length;a++)n=m[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(a=0;a<m.length;a++)n=m[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){return function(t){var n=u(t.components);return r.a.createElement(e,i({},t,{components:n}))}},u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},o=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,m=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=u(n),b=a,o=c["".concat(i,".").concat(b)]||c[b]||s[b]||m;return n?r.a.createElement(o,l(l({ref:t},d),{},{components:n})):r.a.createElement(o,l({ref:t},d))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var m=n.length,i=new Array(m);i[0]=O;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var p=2;p<m;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);