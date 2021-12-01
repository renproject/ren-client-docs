(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{139:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),i=(t(0),t(415));const a={id:"lib_interfaces_build_main_networks.rennetworkdetails",title:"Interface: RenNetworkDetails",sidebar_label:"RenNetworkDetails",custom_edit_url:null},o={unversionedId:"api/interfaces/lib_interfaces_build_main_networks.rennetworkdetails",id:"api/interfaces/lib_interfaces_build_main_networks.rennetworkdetails",isDocsHomePage:!1,title:"Interface: RenNetworkDetails",description:"Interface: RenNetworkDetails",source:"@site/ren-js/api/interfaces/lib_interfaces_build_main_networks.rennetworkdetails.md",slug:"/api/interfaces/lib_interfaces_build_main_networks.rennetworkdetails",permalink:"/ren-client-docs/ren-js/api/interfaces/lib_interfaces_build_main_networks.rennetworkdetails",editUrl:null,version:"current",sidebar_label:"RenNetworkDetails"},c=[{value:"Properties",id:"properties",children:[{value:"isTestnet",id:"istestnet",children:[]},{value:"lightnode",id:"lightnode",children:[]},{value:"name",id:"name",children:[]}]}],l={toc:c};function s({components:e,...n}){return Object(i.mdx)("wrapper",Object(r.default)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(i.mdx)("h1",{id:"interface-rennetworkdetails"},"Interface: RenNetworkDetails"),Object(i.mdx)("p",null,Object(i.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/modules/lib_interfaces_build_main_networks"},"lib/interfaces/build/main/networks"),".RenNetworkDetails"),Object(i.mdx)("h2",{id:"properties"},"Properties"),Object(i.mdx)("h3",{id:"istestnet"},"isTestnet"),Object(i.mdx)("p",null,"\u2022 ",Object(i.mdx)("strong",{parentName:"p"},"isTestnet"),": ",Object(i.mdx)("em",{parentName:"p"},"boolean")),Object(i.mdx)("p",null,"Defined in: ren-js/packages/lib/interfaces/build/main/networks.d.ts:11"),Object(i.mdx)("hr",null),Object(i.mdx)("h3",{id:"lightnode"},"lightnode"),Object(i.mdx)("p",null,"\u2022 ",Object(i.mdx)("strong",{parentName:"p"},"lightnode"),": ",Object(i.mdx)("em",{parentName:"p"},"string")),Object(i.mdx)("p",null,"Defined in: ren-js/packages/lib/interfaces/build/main/networks.d.ts:10"),Object(i.mdx)("hr",null),Object(i.mdx)("h3",{id:"name"},"name"),Object(i.mdx)("p",null,"\u2022 ",Object(i.mdx)("strong",{parentName:"p"},"name"),": ",Object(i.mdx)("em",{parentName:"p"},"string")),Object(i.mdx)("p",null,"Defined in: ren-js/packages/lib/interfaces/build/main/networks.d.ts:9"))}s.isMDXComponent=!0},415:function(e,n,t){"use strict";t.r(n),t.d(n,"MDXContext",(function(){return u})),t.d(n,"MDXProvider",(function(){return m})),t.d(n,"mdx",(function(){return O})),t.d(n,"useMDXComponents",(function(){return p})),t.d(n,"withMDXComponents",(function(){return d}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=i.a.createContext({}),d=function(e){return function(n){var t=p(n.components);return i.a.createElement(e,o({},n,{components:t}))}},p=function(e){var n=i.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=p(e.components);return i.a.createElement(u.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,m=u["".concat(o,".").concat(d)]||u[d]||f[d]||a;return t?i.a.createElement(m,l(l({ref:n},c),{},{components:t})):i.a.createElement(m,l({ref:n},c))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<a;s++)o[s]=t[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);