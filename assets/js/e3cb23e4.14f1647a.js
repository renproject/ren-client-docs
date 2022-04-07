"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9798],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return k}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),d=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},o=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),o=d(a),k=r,f=o["".concat(m,".").concat(k)]||o[k]||s[k]||i;return a?n.createElement(f,l(l({ref:t},u),{},{components:a})):n.createElement(f,l({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=o;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}o.displayName="MDXCreateElement"},69764:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return m},default:function(){return o},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return u}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],p={id:"lib_utils_build_main_signatureutils",title:"Module: lib/utils/build/main/signatureUtils",sidebar_label:"lib/utils/build/main/signatureUtils",sidebar_position:0,custom_edit_url:null},m="Module: lib/utils/build/main/signatureUtils",d={unversionedId:"v2/api/modules/lib_utils_build_main_signatureutils",id:"v2/api/modules/lib_utils_build_main_signatureutils",title:"Module: lib/utils/build/main/signatureUtils",description:"Variables",source:"@site/ren-js/v2/api/modules/lib_utils_build_main_signatureutils.md",sourceDirName:"v2/api/modules",slug:"/v2/api/modules/lib_utils_build_main_signatureutils",permalink:"/ren-client-docs/ren-js/v2/api/modules/lib_utils_build_main_signatureutils",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"lib_utils_build_main_signatureutils",title:"Module: lib/utils/build/main/signatureUtils",sidebar_label:"lib/utils/build/main/signatureUtils",sidebar_position:0,custom_edit_url:null}},u=[{value:"Variables",id:"variables",children:[{value:"secp256k1n",id:"secp256k1n",children:[],level:3}],level:2},{value:"Functions",id:"functions",children:[{value:"fixSignature",id:"fixsignature",children:[{value:"Parameters",id:"parameters",children:[],level:4}],level:3},{value:"fixSignatureSimple",id:"fixsignaturesimple",children:[{value:"Parameters",id:"parameters-1",children:[],level:4}],level:3},{value:"signatureToBuffer",id:"signaturetobuffer",children:[{value:"Type parameters",id:"type-parameters",children:[],level:4},{value:"Parameters",id:"parameters-2",children:[],level:4}],level:3}],level:2}],s={toc:u};function o(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"module-libutilsbuildmainsignatureutils"},"Module: lib/utils/build/main/signatureUtils"),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("h3",{id:"secp256k1n"},"secp256k1n"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"secp256k1n"),": BigNumber"),(0,i.kt)("p",null,"Defined in: ren-js/packages/lib/utils/build/main/signatureUtils.d.ts:10"),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"fixsignature"},"fixSignature"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"fixSignature"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"r"),": ",(0,i.kt)("em",{parentName:"p"},"Buffer"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"s"),": ",(0,i.kt)("em",{parentName:"p"},"Buffer"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"v"),": ",(0,i.kt)("em",{parentName:"p"},"number"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"sigHash"),": ",(0,i.kt)("em",{parentName:"p"},"Buffer"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"pHash"),": ",(0,i.kt)("em",{parentName:"p"},"Buffer"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"amount"),": ",(0,i.kt)("em",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"to"),": ",(0,i.kt)("em",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"tokenIdentifier"),": ",(0,i.kt)("em",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"nHash"),": ",(0,i.kt)("em",{parentName:"p"},"Buffer"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"v2?"),": ",(0,i.kt)("em",{parentName:"p"},"boolean"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"logger?"),": ",(0,i.kt)("a",{parentName:"p",href:"/ren-client-docs/ren-js/v2/api/interfaces/lib_interfaces_build_main_logger.logger"},(0,i.kt)("em",{parentName:"a"},"Logger")),"): Signature"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"r")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"Buffer"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"s")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"Buffer"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"v")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"sigHash")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"Buffer"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"pHash")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"Buffer"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"amount")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"to")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tokenIdentifier")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"nHash")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"Buffer"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"v2?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"boolean"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"logger?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ren-client-docs/ren-js/v2/api/interfaces/lib_interfaces_build_main_logger.logger"},(0,i.kt)("em",{parentName:"a"},"Logger")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," Signature"),(0,i.kt)("p",null,"Defined in: ren-js/packages/lib/utils/build/main/signatureUtils.d.ts:12"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"fixsignaturesimple"},"fixSignatureSimple"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"fixSignatureSimple"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"r"),": ",(0,i.kt)("em",{parentName:"p"},"Buffer"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"s"),": ",(0,i.kt)("em",{parentName:"p"},"Buffer"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"v"),": ",(0,i.kt)("em",{parentName:"p"},"number"),"): Signature"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"r")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"Buffer"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"s")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"Buffer"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"v")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"number"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," Signature"),(0,i.kt)("p",null,"Defined in: ren-js/packages/lib/utils/build/main/signatureUtils.d.ts:11"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"signaturetobuffer"},"signatureToBuffer"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"signatureToBuffer"),"<T",">","(",(0,i.kt)("inlineCode",{parentName:"p"},"sig"),": T): ",(0,i.kt)("em",{parentName:"p"},"Buffer")),(0,i.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Signature")))),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"sig")),(0,i.kt)("td",{parentName:"tr",align:"left"},"T")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Buffer")),(0,i.kt)("p",null,"Defined in: ren-js/packages/lib/utils/build/main/signatureUtils.d.ts:9"))}o.isMDXComponent=!0}}]);