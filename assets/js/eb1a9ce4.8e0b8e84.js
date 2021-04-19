(window.webpackJsonp=window.webpackJsonp||[]).push([[340],{372:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return o})),n.d(r,"metadata",(function(){return d})),n.d(r,"toc",(function(){return a})),n.d(r,"default",(function(){return c}));var t=n(3),i=(n(0),n(486));const o={id:"provider_build_main",title:"Module: provider/build/main",sidebar_label:"provider/build/main",custom_edit_url:null,hide_title:!0},d={unversionedId:"api/modules/provider_build_main",id:"api/modules/provider_build_main",isDocsHomePage:!1,title:"Module: provider/build/main",description:"Module: provider/build/main",source:"@site/ren-js/api/modules/provider_build_main.md",slug:"/api/modules/provider_build_main",permalink:"/ren-client-docs/ren-js/api/modules/provider_build_main",editUrl:null,version:"current",sidebar_label:"provider/build/main",sidebar:"docs",previous:{title:"Module: interfaces/build/main/types",permalink:"/ren-client-docs/ren-js/api/modules/interfaces_build_main_types"},next:{title:"Module: provider/build/main/httpProvider",permalink:"/ren-client-docs/ren-js/api/modules/provider_build_main_httpprovider"}},a=[{value:"References",id:"references",children:[{value:"HttpProvider",id:"httpprovider",children:[]},{value:"JSONRPCResponse",id:"jsonrpcresponse",children:[]},{value:"Provider",id:"provider",children:[]}]}],p={toc:a};function c({components:e,...r}){return Object(i.mdx)("wrapper",Object(t.default)({},p,r,{components:e,mdxType:"MDXLayout"}),Object(i.mdx)("h1",{id:"module-providerbuildmain"},"Module: provider/build/main"),Object(i.mdx)("h2",{id:"references"},"References"),Object(i.mdx)("h3",{id:"httpprovider"},"HttpProvider"),Object(i.mdx)("p",null,"Re-exports: ",Object(i.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/classes/provider_build_main_httpprovider.httpprovider"},"HttpProvider")),Object(i.mdx)("hr",null),Object(i.mdx)("h3",{id:"jsonrpcresponse"},"JSONRPCResponse"),Object(i.mdx)("p",null,"Re-exports: ",Object(i.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/modules/provider_build_main_jsonrpc#jsonrpcresponse"},"JSONRPCResponse")),Object(i.mdx)("hr",null),Object(i.mdx)("h3",{id:"provider"},"Provider"),Object(i.mdx)("p",null,"Re-exports: ",Object(i.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/interfaces/provider_build_main_jsonrpc.provider"},"Provider")))}c.isMDXComponent=!0},486:function(e,r,n){"use strict";n.r(r),n.d(r,"MDXContext",(function(){return l})),n.d(r,"MDXProvider",(function(){return m})),n.d(r,"mdx",(function(){return v})),n.d(r,"useMDXComponents",(function(){return s})),n.d(r,"withMDXComponents",(function(){return u}));var t=n(0),i=n.n(t);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function d(){return(d=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){return function(r){var n=s(r.components);return i.a.createElement(e,d({},r,{components:n}))}},s=function(e){var r=i.a.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):p(p({},r),e)),n},m=function(e){var r=s(e.components);return i.a.createElement(l.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},b=i.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,d=e.parentName,a=c(e,["components","mdxType","originalType","parentName"]),l=s(n),u=t,m=l["".concat(d,".").concat(u)]||l[u]||f[u]||o;return n?i.a.createElement(m,p(p({ref:r},a),{},{components:n})):i.a.createElement(m,p({ref:r},a))}));function v(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,d=new Array(o);d[0]=b;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a.mdxType="string"==typeof e?e:t,d[1]=a;for(var c=2;c<o;c++)d[c]=n[c];return i.a.createElement.apply(null,d)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);