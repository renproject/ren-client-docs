(window.webpackJsonp=window.webpackJsonp||[]).push([[315],{2857:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/tutorial-react-3456999d60c7318431a325d94ce4020c.png"},347:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return m})),n.d(t,"default",(function(){return f}));var a=n(3),r=n(8),o=(n(0),n(489)),l=n(528),c=n.n(l),s=n(529),i=n.n(s),u=n(490),p={title:"React UI",slug:"react-ui"},d={unversionedId:"tutorial/3-react-ui",id:"tutorial/3-react-ui",isDocsHomePage:!1,title:"React UI",description:"This chapter will setup a React app so that we can have a simple user interface for interacting with RenVM and the npm contract that we deployed in Part 1. We will assume some level of knowledge about React, so head over to https://reactjs.org/tutorial/tutorial.html if you haven't used React before.",source:"@site/ren-js/tutorial/3-react-ui.mdx",slug:"/tutorial/react-ui",permalink:"/ren-client-docs/ren-js/tutorial/react-ui",version:"current",sidebar:"docs",previous:{title:"Smart Contract",permalink:"/ren-client-docs/ren-js/tutorial/smart-contract"},next:{title:"RenJS",permalink:"/ren-client-docs/ren-js/tutorial/ren-js"}},m=[{value:"Create React App",id:"create-react-app",children:[]},{value:"App.js",id:"appjs",children:[]},{value:"ABI.json",id:"abijson",children:[]},{value:"Run a local server",id:"run-a-local-server",children:[]}],b={toc:m};function f(e){var t=e.components,l=Object(r.a)(e,["components"]);return Object(o.mdx)("wrapper",Object(a.default)({},b,l,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)(u.DocTag,{type:u.DocType.Tutorial,mdxType:"DocTag"}),Object(o.mdx)("p",null,"This chapter will setup a React app so that we can have a simple user interface for interacting with RenVM and the npm contract that we deployed in ",Object(o.mdx)("a",{parentName:"p",href:"2-smart-contract"},"Part 1"),". We will assume some level of knowledge about React, so head over to ",Object(o.mdx)("a",{parentName:"p",href:"https://reactjs.org/tutorial/tutorial.html"},"https://reactjs.org/tutorial/tutorial.html")," if you haven't used React before."),Object(o.mdx)("h3",{id:"create-react-app"},"Create React App"),Object(o.mdx)("p",null,"Set up a React app with ",Object(o.mdx)("inlineCode",{parentName:"p"},"create-react-app"),". If you don't have ",Object(o.mdx)("inlineCode",{parentName:"p"},"npx"),", install ",Object(o.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/get-npm"},"node and npm"),"."),Object(o.mdx)(c.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(o.mdx)(i.a,{value:"npm",mdxType:"TabItem"},Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-bash"},"npx create-react-app basic-app\ncd basic-app\n"))),Object(o.mdx)(i.a,{value:"yarn",mdxType:"TabItem"},Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-bash"},"yarn create react-app basic-app\ncd basic-app\n")))),Object(o.mdx)("p",null,"Install Web3:"),Object(o.mdx)(c.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(o.mdx)(i.a,{value:"npm",mdxType:"TabItem"},Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-bash"},"npm install --save web3\n"))),Object(o.mdx)(i.a,{value:"yarn",mdxType:"TabItem"},Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-bash"},"yarn add web3\n")))),Object(o.mdx)("h3",{id:"appjs"},"App.js"),Object(o.mdx)("p",null,"Replace ",Object(o.mdx)("inlineCode",{parentName:"p"},"src/App.js")," with the code below. It sets up the following:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Connecting to Web3"),Object(o.mdx)("li",{parentName:"ul"},"Showing the balance of the ",Object(o.mdx)("inlineCode",{parentName:"li"},"Basic")," contract"),Object(o.mdx)("li",{parentName:"ul"},"Showing two buttons, Deposit and Withdraw")),Object(o.mdx)("p",null,"Replace the ",Object(o.mdx)("inlineCode",{parentName:"p"},"contractAddress")," with the contract you deployed in Part 1. The lines indicated with ",Object(o.mdx)("inlineCode",{parentName:"p"},"TODO")," will be filled out in Part 3."),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/App.js"',title:'"src/App.js"'},'import React from "react";\nimport Web3 from "web3";\nimport "./App.css";\n\nimport ABI from "./ABI.json";\n\n// Replace with your contract\'s address.\nconst contractAddress = "0x3Aa969d343BD6AE66c4027Bb61A382DC96e88150";\n\nclass App extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      balance: 0,\n      message: "",\n      error: "",\n    };\n  }\n\n  componentDidMount = async () => {\n    let web3Provider;\n\n    // Initialize web3 (https://medium.com/coinmonks/web3-js-ethereum-javascript-api-72f7b22e2f0a)\n    // Modern dApp browsers.\n    if (window.ethereum) {\n      web3Provider = window.ethereum;\n      try {\n        // Request account access.\n        await window.ethereum.enable();\n      } catch (error) {\n        // User denied account access.\n        this.logError("Please allow access to your Web3 wallet.");\n        return;\n      }\n    } else if (window.web3) {\n      // Legacy dApp browsers.\n      web3Provider = window.web3.currentProvider;\n    }\n    // If no injected web3 instance is detected, fall back to Ganache.\n    else {\n      this.logError("Please install MetaMask!");\n      return;\n    }\n\n    const web3 = new Web3(web3Provider);\n\n    const networkID = await web3.eth.net.getId();\n    if (networkID !== 42) {\n      this.logError("Please set your network to Kovan.");\n      return;\n    }\n\n    this.setState({ web3 }, () => {\n      // Update balances immediately and every 10 seconds.\n      this.updateBalance();\n      setInterval(() => {\n        this.updateBalance();\n      }, 10 * 1000);\n    });\n  };\n\n  render = () => {\n    const { balance, message, error } = this.state;\n    return (\n      <div className="App">\n        <p>Balance: {balance} BTC</p>\n        <p>\n          <button onClick={() => this.deposit().catch(this.logError)}>\n            Deposit 0.003 BTC\n          </button>\n        </p>\n        <p>\n          <button onClick={() => this.withdraw().catch(this.logError)}>\n            Withdraw {balance} BTC\n          </button>\n        </p>\n        <p>{message}</p>\n        {error ? <p style={{ color: "red" }}>{error}</p> : null}\n      </div>\n    );\n  };\n\n  updateBalance = async () => {\n    const { web3 } = this.state;\n    const contract = new web3.eth.Contract(ABI, contractAddress);\n    const balance = await contract.methods.balance().call();\n    this.setState({ balance: parseInt(balance.toString()) / 10 ** 8 });\n  };\n\n  logError = (error) => {\n    console.error(error);\n    this.setState({ error: String((error || {}).message || error) });\n  };\n\n  log = (message) => {\n    this.setState({ message });\n  };\n\n  deposit = async () => {\n    this.logError(""); // Reset error.\n    // TODO\n  };\n\n  withdraw = async () => {\n    this.logError(""); // Reset error.\n    // TODO\n  };\n}\n\nexport default App;\n')),Object(o.mdx)("h3",{id:"abijson"},"ABI.json"),Object(o.mdx)("p",null,'In order to talk to our Ethereum contract, we need to have its ABI. You can find this in Remix by going to the "Solidity Compiler" tab, clicking "Compilation Details" and copying the "ABI" section. Paste this into ',Object(o.mdx)("inlineCode",{parentName:"p"},"src/ABI.json"),":"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-json",metastring:'title="src/ABI.json"',title:'"src/ABI.json"'},'[\n  {\n    "constant": false,\n    "inputs": [\n      {\n        "name": "_msg",\n        "type": "bytes"\n      },\n      {\n        "name": "_amount",\n        "type": "uint256"\n      },\n      {\n        "name": "_nHash",\n        "type": "bytes32"\n      },\n      {\n        "name": "_sig",\n        "type": "bytes"\n      }\n    ],\n    "name": "deposit",\n    "outputs": [],\n    "payable": false,\n    "stateMutability": "nonpayable",\n    "type": "function"\n  },\n  {\n    "constant": false,\n    "inputs": [\n      {\n        "name": "_msg",\n        "type": "bytes"\n      },\n      {\n        "name": "_to",\n        "type": "bytes"\n      },\n      {\n        "name": "_amount",\n        "type": "uint256"\n      }\n    ],\n    "name": "withdraw",\n    "outputs": [],\n    "payable": false,\n    "stateMutability": "nonpayable",\n    "type": "function"\n  },\n  {\n    "constant": true,\n    "inputs": [],\n    "name": "registry",\n    "outputs": [\n      {\n        "name": "",\n        "type": "address"\n      }\n    ],\n    "payable": false,\n    "stateMutability": "view",\n    "type": "function"\n  },\n  {\n    "constant": true,\n    "inputs": [],\n    "name": "balance",\n    "outputs": [\n      {\n        "name": "",\n        "type": "uint256"\n      }\n    ],\n    "payable": false,\n    "stateMutability": "view",\n    "type": "function"\n  },\n  {\n    "inputs": [\n      {\n        "name": "_registry",\n        "type": "address"\n      }\n    ],\n    "payable": false,\n    "stateMutability": "nonpayable",\n    "type": "constructor"\n  },\n  {\n    "anonymous": false,\n    "inputs": [\n      {\n        "indexed": false,\n        "name": "_amount",\n        "type": "uint256"\n      },\n      {\n        "indexed": false,\n        "name": "_msg",\n        "type": "bytes"\n      }\n    ],\n    "name": "Deposit",\n    "type": "event"\n  },\n  {\n    "anonymous": false,\n    "inputs": [\n      {\n        "indexed": false,\n        "name": "_to",\n        "type": "bytes"\n      },\n      {\n        "indexed": false,\n        "name": "_amount",\n        "type": "uint256"\n      },\n      {\n        "indexed": false,\n        "name": "_msg",\n        "type": "bytes"\n      }\n    ],\n    "name": "Withdrawal",\n    "type": "event"\n  }\n]\n')),Object(o.mdx)("h3",{id:"run-a-local-server"},"Run a local server"),Object(o.mdx)("p",null,"Start a local development server by running:"),Object(o.mdx)(c.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(o.mdx)(i.a,{value:"npm",mdxType:"TabItem"},Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-bash"},"npm run start\n"))),Object(o.mdx)(i.a,{value:"yarn",mdxType:"TabItem"},Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-bash"},"yarn start\n")))),Object(o.mdx)("p",null,"You can now access the React app at ",Object(o.mdx)("inlineCode",{parentName:"p"},"http://localhost:3000"),". The buttons shouldn't do anything yet, but we'll be fixing that in the next part of the tutorial."),Object(o.mdx)("p",null,Object(o.mdx)("img",{alt:"Your brand new React app!",src:n(2857).default})),Object(o.mdx)("p",null,"Continue to the next section to start interacting with RenVM using RenJS."))}f.isMDXComponent=!0},489:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return u})),n.d(t,"MDXProvider",(function(){return m})),n.d(t,"mdx",(function(){return y})),n.d(t,"useMDXComponents",(function(){return d})),n.d(t,"withMDXComponents",(function(){return p}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),p=function(e){return function(t){var n=d(t.components);return r.a.createElement(e,l({},t,{components:n}))}},d=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=d(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(n),p=a,m=u["".concat(l,".").concat(p)]||u[p]||b[p]||o;return n?r.a.createElement(m,s(s({ref:t},c),{},{components:n})):r.a.createElement(m,s({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},490:function(e,t,n){"use strict";var a=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.DocTag=t.DocType=void 0;var r=a(n(0));let o;t.DocType=o,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(o||(t.DocType=o={}));const l={[o.Tutorial]:"#b16bfc",[o.HowTo]:"#EC0088",[o.Reference]:"#ff823a",[o.Explanation]:"#29C0AF"};t.DocTag=({type:e,marginBottom:t})=>r.default.createElement(r.default.Fragment,null,r.default.createElement("span",{style:{border:"2px solid "+l[e]||!1,borderRadius:"5px",color:l[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==t?t:30,display:"inline-block"}},String(e)))},492:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}n.r(t),t.default=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},510:function(e,t,n){"use strict";var a=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(0),o=a(n(513));var l=function(){const e=(0,r.useContext)(o.default);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e};t.default=l},513:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(0,n(0).createContext)(void 0);t.default=a},528:function(e,t,n){"use strict";var a=n(4).default,r=n(19).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(0)),l=a(n(510)),c=a(n(492)),s=a(n(448));const i=37,u=39;var p=function(e){const{lazy:t,block:n,defaultValue:a,values:r,groupId:p,className:d}=e,{tabGroupChoices:m,setTabGroupChoices:b}=(0,l.default)(),[f,y]=(0,o.useState)(a),h=o.Children.toArray(e.children),v=[];if(null!=p){const e=m[p];null!=e&&e!==f&&r.some((t=>t.value===e))&&y(e)}const g=e=>{const t=e.target,n=v.indexOf(t),a=h[n].props.value;y(a),null!=p&&(b(p,a),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:r}=e.getBoundingClientRect(),{innerHeight:o,innerWidth:l}=window;return t>=0&&r<=l&&a<=o&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s.default.tabItemActive),setTimeout((()=>t.classList.remove(s.default.tabItemActive)),2e3))}),150))},w=e=>{var t;let n;switch(e.keyCode){case u:{const t=v.indexOf(e.target)+1;n=v[t]||v[0];break}case i:{const t=v.indexOf(e.target)-1;n=v[t]||v[v.length-1];break}}null===(t=n)||void 0===t||t.focus()};return o.default.createElement("div",{className:"tabs-container"},o.default.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.default)("tabs",{"tabs--block":n},d)},r.map((({value:e,label:t})=>o.default.createElement("li",{role:"tab",tabIndex:f===e?0:-1,"aria-selected":f===e,className:(0,c.default)("tabs__item",s.default.tabItem,{"tabs__item--active":f===e}),key:e,ref:e=>v.push(e),onKeyDown:w,onFocus:g,onClick:g},t)))),t?(0,o.cloneElement)(h.filter((e=>e.props.value===f))[0],{className:"margin-vert--md"}):o.default.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))};t.default=p},529:function(e,t,n){"use strict";var a=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0));var o=function({children:e,hidden:t,className:n}){return r.default.createElement("div",{role:"tabpanel",hidden:t,className:n},e)};t.default=o}}]);