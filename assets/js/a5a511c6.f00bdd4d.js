(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{230:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return o}));var a=n(3),r=(n(0),n(415));const d={id:"lib_ren_src_lockandmint.lockandmint",title:"Class: LockAndMint<LockTransaction, LockDeposit, LockAddress, MintTransaction, MintAddress>",sidebar_label:"LockAndMint",custom_edit_url:null},i={unversionedId:"api/classes/lib_ren_src_lockandmint.lockandmint",id:"api/classes/lib_ren_src_lockandmint.lockandmint",isDocsHomePage:!1,title:"Class: LockAndMint<LockTransaction, LockDeposit, LockAddress, MintTransaction, MintAddress>",description:"Class: LockAndMint",source:"@site/ren-js/api/classes/lib_ren_src_lockandmint.lockandmint.md",slug:"/api/classes/lib_ren_src_lockandmint.lockandmint",permalink:"/ren-client-docs/ren-js/api/classes/lib_ren_src_lockandmint.lockandmint",editUrl:null,version:"current",sidebar_label:"LockAndMint"},c=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"_state",id:"_state",children:[]},{value:"gatewayAddress",id:"gatewayaddress",children:[]},{value:"params",id:"params",children:[]},{value:"renVM",id:"renvm",children:[]}]},{value:"Main Methods",id:"main-methods",children:[{value:"on",id:"on",children:[]},{value:"processDeposit",id:"processdeposit",children:[]}]},{value:"Other Methods",id:"other-methods",children:[{value:"addListener",id:"addlistener",children:[]},{value:"confirmationTarget",id:"confirmationtarget",children:[]}]}],m={toc:c};function o({components:e,...t}){return Object(r.mdx)("wrapper",Object(a.default)({},m,t,{components:e,mdxType:"MDXLayout"}),Object(r.mdx)("h1",{id:"class-lockandmintlocktransaction-lockdeposit-lockaddress-minttransaction-mintaddress"},"Class: LockAndMint<LockTransaction, LockDeposit, LockAddress, MintTransaction, MintAddress",">"),Object(r.mdx)("p",null,Object(r.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/modules/lib_ren_src_lockandmint"},"lib/ren/src/lockAndMint"),".LockAndMint"),Object(r.mdx)("p",null,"A ",Object(r.mdx)("inlineCode",{parentName:"p"},"LockAndMint")," object tied to a particular gateway address. LockAndMint\nshould not be created directly. Instead, [","[RenJS.lockAndMint]","] will create a\n",Object(r.mdx)("inlineCode",{parentName:"p"},"LockAndMint")," object."),Object(r.mdx)("p",null,Object(r.mdx)("inlineCode",{parentName:"p"},"LockAndMint")," extends the EventEmitter class, and emits a ",Object(r.mdx)("inlineCode",{parentName:"p"},'"deposit"')," event\nfor each new deposit that is observed. Deposits will only be watched for if\nthere is an active listener for the ",Object(r.mdx)("inlineCode",{parentName:"p"},'"deposit"')," event."),Object(r.mdx)("p",null,"A LockAndMint object watches transactions to the ",Object(r.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/classes/lib_ren_src_lockandmint.lockandmint#gatewayaddress"},"gatewayAddress")," on the\nlock-chain."),Object(r.mdx)("p",null,"Deposits to the gateway address can be listened to with the ",Object(r.mdx)("inlineCode",{parentName:"p"},'"deposit"'),"\nevent using ",Object(r.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/classes/lib_ren_src_lockandmint.lockandmint#on"},"on"),", which will return ",Object(r.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/classes/lib_ren_src_lockandmint.lockandmintdeposit"},"LockAndMintDeposit")," instances."),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-ts"},'console.log(`Deposit to ${JSON.stringify(lockAndMint.gatewayAddress)}`);\n\nlockAndMint.on("deposit", async (deposit) => {\n   console.log(`Received deposit`, deposit);\n   await RenJS.defaultDepositHandler(deposit);\n});\n')),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},Object(r.mdx)("inlineCode",{parentName:"strong"},"noinheritdoc"))),Object(r.mdx)("h2",{id:"type-parameters"},"Type parameters"),Object(r.mdx)("table",null,Object(r.mdx)("thead",{parentName:"table"},Object(r.mdx)("tr",{parentName:"thead"},Object(r.mdx)("th",{parentName:"tr",align:"left"},"Name"),Object(r.mdx)("th",{parentName:"tr",align:"left"},"Type"),Object(r.mdx)("th",{parentName:"tr",align:"left"},"Default"))),Object(r.mdx)("tbody",{parentName:"table"},Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"LockTransaction")),Object(r.mdx)("td",{parentName:"tr",align:"left"},"-"),Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("em",{parentName:"td"},"any"))),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"LockDeposit")),Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("a",{parentName:"td",href:"/ren-client-docs/ren-js/api/modules/lib_interfaces_build_main_chain#depositcommon"},Object(r.mdx)("em",{parentName:"a"},"DepositCommon")),"<LockTransaction",">"),Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("a",{parentName:"td",href:"/ren-client-docs/ren-js/api/modules/lib_interfaces_build_main_chain#depositcommon"},Object(r.mdx)("em",{parentName:"a"},"DepositCommon")),"<LockTransaction",">")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"LockAddress")),Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("em",{parentName:"td"},"string")," ","|"," { ",Object(r.mdx)("inlineCode",{parentName:"td"},"address"),": ",Object(r.mdx)("em",{parentName:"td"},"string"),"  }"),Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("em",{parentName:"td"},"any"))),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"MintTransaction")),Object(r.mdx)("td",{parentName:"tr",align:"left"},"-"),Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("em",{parentName:"td"},"any"))),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"MintAddress")),Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("em",{parentName:"td"},"string")," ","|"," { ",Object(r.mdx)("inlineCode",{parentName:"td"},"address"),": ",Object(r.mdx)("em",{parentName:"td"},"string"),"  }"),Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("em",{parentName:"td"},"any"))))),Object(r.mdx)("h2",{id:"hierarchy"},"Hierarchy"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},Object(r.mdx)("em",{parentName:"p"},"EventEmitter")),Object(r.mdx)("p",{parentName:"li"},"\u21b3 ",Object(r.mdx)("strong",{parentName:"p"},"LockAndMint")))),Object(r.mdx)("h2",{id:"properties"},"Properties"),Object(r.mdx)("h3",{id:"_state"},"_","state"),Object(r.mdx)("p",null,"\u2022 ",Object(r.mdx)("strong",{parentName:"p"},"_","state"),": MintState & ",Object(r.mdx)("em",{parentName:"p"},"Partial"),"<MintStatePartial",">"),Object(r.mdx)("p",null,"Internal state of the mint object, including the ",Object(r.mdx)("inlineCode",{parentName:"p"},"gHash")," and ",Object(r.mdx)("inlineCode",{parentName:"p"},"pHash"),".\nInterface may change across minor and patch releases."),Object(r.mdx)("p",null,"Defined in: ",Object(r.mdx)("a",{parentName:"p",href:"https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/lockAndMint.ts#L147"},"ren-js/packages/lib/ren/src/lockAndMint.ts:147")),Object(r.mdx)("hr",null),Object(r.mdx)("h3",{id:"gatewayaddress"},"gatewayAddress"),Object(r.mdx)("p",null,"\u2022 ",Object(r.mdx)("strong",{parentName:"p"},"gatewayAddress"),": ",Object(r.mdx)("em",{parentName:"p"},"undefined")," ","|"," LockAddress"),Object(r.mdx)("p",null,"The generated gateway address for the lock-chain. For chains such as BTC\nthis is a string. For other chains, this may be an object, so the method\nof showing this address to users should be implemented on a\nchain-by-chain basis."),Object(r.mdx)("p",null,"Defined in: ",Object(r.mdx)("a",{parentName:"p",href:"https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/lockAndMint.ts#L129"},"ren-js/packages/lib/ren/src/lockAndMint.ts:129")),Object(r.mdx)("hr",null),Object(r.mdx)("h3",{id:"params"},"params"),Object(r.mdx)("p",null,"\u2022 ",Object(r.mdx)("strong",{parentName:"p"},"params"),": ",Object(r.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/interfaces/lib_interfaces_build_main_parameters.lockandmintparams"},Object(r.mdx)("em",{parentName:"a"},"LockAndMintParams")),"<LockTransaction, LockDeposit, LockAddress, MintTransaction, MintAddress",">"),Object(r.mdx)("p",null,"The parameters passed in when creating the LockAndMint."),Object(r.mdx)("p",null,"Defined in: ",Object(r.mdx)("a",{parentName:"p",href:"https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/lockAndMint.ts#L132"},"ren-js/packages/lib/ren/src/lockAndMint.ts:132")),Object(r.mdx)("hr",null),Object(r.mdx)("h3",{id:"renvm"},"renVM"),Object(r.mdx)("p",null,"\u2022 ",Object(r.mdx)("strong",{parentName:"p"},"renVM"),": ",Object(r.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/interfaces/lib_rpc_build_main_abstract.abstractrenvmprovider"},Object(r.mdx)("em",{parentName:"a"},"AbstractRenVMProvider")),"<{}, {}",">"),Object(r.mdx)("p",null,"See [","[RenJS.renVM]","]."),Object(r.mdx)("p",null,"Defined in: ",Object(r.mdx)("a",{parentName:"p",href:"https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/lockAndMint.ts#L141"},"ren-js/packages/lib/ren/src/lockAndMint.ts:141")),Object(r.mdx)("h2",{id:"main-methods"},"Main Methods"),Object(r.mdx)("h3",{id:"on"},"on"),Object(r.mdx)("p",null,"\u25b8 ",Object(r.mdx)("strong",{parentName:"p"},"on"),"<Event",">","(",Object(r.mdx)("inlineCode",{parentName:"p"},"event"),": Event, ",Object(r.mdx)("inlineCode",{parentName:"p"},"listener"),": Event ",Object(r.mdx)("em",{parentName:"p"},"extends")," ",Object(r.mdx)("inlineCode",{parentName:"p"},'"deposit"')," ? (",Object(r.mdx)("inlineCode",{parentName:"p"},"deposit"),": ",Object(r.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/classes/lib_ren_src_lockandmint.lockandmintdeposit"},Object(r.mdx)("em",{parentName:"a"},"LockAndMintDeposit")),"<LockTransaction, LockDeposit, LockAddress, MintTransaction, MintAddress",">",") => ",Object(r.mdx)("em",{parentName:"p"},"void")," : ",Object(r.mdx)("em",{parentName:"p"},"never"),"): ",Object(r.mdx)("em",{parentName:"p"},"this")),Object(r.mdx)("p",null,Object(r.mdx)("inlineCode",{parentName:"p"},"on")," creates a new listener to ",Object(r.mdx)("inlineCode",{parentName:"p"},'"deposit"')," events, returning\n",Object(r.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/classes/lib_ren_src_lockandmint.lockandmintdeposit"},"LockAndMintDeposit")," instances."),Object(r.mdx)("p",null,Object(r.mdx)("inlineCode",{parentName:"p"},"on")," extends ",Object(r.mdx)("inlineCode",{parentName:"p"},"EventEmitter.on"),", modifying it to immediately return all\nprevious ",Object(r.mdx)("inlineCode",{parentName:"p"},'"deposit"')," events, in addition to new events, when a new\nlistener is created."),Object(r.mdx)("h4",{id:"type-parameters-1"},"Type parameters"),Object(r.mdx)("table",null,Object(r.mdx)("thead",{parentName:"table"},Object(r.mdx)("tr",{parentName:"thead"},Object(r.mdx)("th",{parentName:"tr",align:"left"},"Name"),Object(r.mdx)("th",{parentName:"tr",align:"left"},"Type"))),Object(r.mdx)("tbody",{parentName:"table"},Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"Event")),Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},'"deposit"'))))),Object(r.mdx)("h4",{id:"parameters"},"Parameters"),Object(r.mdx)("table",null,Object(r.mdx)("thead",{parentName:"table"},Object(r.mdx)("tr",{parentName:"thead"},Object(r.mdx)("th",{parentName:"tr",align:"left"},"Name"),Object(r.mdx)("th",{parentName:"tr",align:"left"},"Type"))),Object(r.mdx)("tbody",{parentName:"table"},Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"event")),Object(r.mdx)("td",{parentName:"tr",align:"left"},"Event")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"listener")),Object(r.mdx)("td",{parentName:"tr",align:"left"},"Event ",Object(r.mdx)("em",{parentName:"td"},"extends")," ",Object(r.mdx)("inlineCode",{parentName:"td"},'"deposit"')," ? (",Object(r.mdx)("inlineCode",{parentName:"td"},"deposit"),": ",Object(r.mdx)("a",{parentName:"td",href:"/ren-client-docs/ren-js/api/classes/lib_ren_src_lockandmint.lockandmintdeposit"},Object(r.mdx)("em",{parentName:"a"},"LockAndMintDeposit")),"<LockTransaction, LockDeposit, LockAddress, MintTransaction, MintAddress",">",") => ",Object(r.mdx)("em",{parentName:"td"},"void")," : ",Object(r.mdx)("em",{parentName:"td"},"never"))))),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Returns:")," ",Object(r.mdx)("em",{parentName:"p"},"this")),Object(r.mdx)("p",null,"Overrides: EventEmitter.on"),Object(r.mdx)("p",null,"Defined in: ",Object(r.mdx)("a",{parentName:"p",href:"https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/lockAndMint.ts#L420"},"ren-js/packages/lib/ren/src/lockAndMint.ts:420")),Object(r.mdx)("hr",null),Object(r.mdx)("h3",{id:"processdeposit"},"processDeposit"),Object(r.mdx)("p",null,"\u25b8 ",Object(r.mdx)("strong",{parentName:"p"},"processDeposit"),"(",Object(r.mdx)("inlineCode",{parentName:"p"},"deposit"),": LockDeposit): ",Object(r.mdx)("em",{parentName:"p"},"Promise"),"<",Object(r.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/classes/lib_ren_src_lockandmint.lockandmintdeposit"},Object(r.mdx)("em",{parentName:"a"},"LockAndMintDeposit")),"<LockTransaction, LockDeposit, LockAddress, MintTransaction, MintAddress",">",">"),Object(r.mdx)("p",null,Object(r.mdx)("inlineCode",{parentName:"p"},"processDeposit")," allows you to manually provide the details of a deposit\nand returns a ",Object(r.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/classes/lib_ren_src_lockandmint.lockandmintdeposit"},"LockAndMintDeposit")," object."),Object(r.mdx)("h4",{id:"parameters-1"},"Parameters"),Object(r.mdx)("table",null,Object(r.mdx)("thead",{parentName:"table"},Object(r.mdx)("tr",{parentName:"thead"},Object(r.mdx)("th",{parentName:"tr",align:"left"},"Name"),Object(r.mdx)("th",{parentName:"tr",align:"left"},"Type"),Object(r.mdx)("th",{parentName:"tr",align:"left"},"Description"))),Object(r.mdx)("tbody",{parentName:"table"},Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"deposit")),Object(r.mdx)("td",{parentName:"tr",align:"left"},"LockDeposit"),Object(r.mdx)("td",{parentName:"tr",align:"left"},"The deposit details in the format defined by the LockChain. This should be the same format as ",Object(r.mdx)("inlineCode",{parentName:"td"},"deposit.depositDetails")," for a deposit returned from ",Object(r.mdx)("inlineCode",{parentName:"td"},'.on("deposit", ...)'),".  ",Object(r.mdx)("inlineCode",{parentName:"td"},'ts lockAndMint   .processDeposit({       transaction: {           cid:               "bafy2bzacedvu74e7ohjcwlh4fbx7ddf6li42fiuosajob6metcj2qwkgkgof2",           to: "t1v2ftlxhedyoijv7uqgxfygiziaqz23lgkvks77i",           amount: (0.01 * 1e8).toString(),           params: "EzGbvVHf8lb0v8CUfjh8y+tLbZzfIFcnNnt/gh6axmw=",           confirmations: 1,           nonce: 7,       },       amount: (0.01 * 1e8).toString(),   })   .on(deposit => RenJS.defaultDepositHandler)   .catch(console.error); '))))),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Returns:")," ",Object(r.mdx)("em",{parentName:"p"},"Promise"),"<",Object(r.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/classes/lib_ren_src_lockandmint.lockandmintdeposit"},Object(r.mdx)("em",{parentName:"a"},"LockAndMintDeposit")),"<LockTransaction, LockDeposit, LockAddress, MintTransaction, MintAddress",">",">"),Object(r.mdx)("p",null,"Defined in: ",Object(r.mdx)("a",{parentName:"p",href:"https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/lockAndMint.ts#L320"},"ren-js/packages/lib/ren/src/lockAndMint.ts:320")),Object(r.mdx)("hr",null),Object(r.mdx)("h2",{id:"other-methods"},"Other Methods"),Object(r.mdx)("h3",{id:"addlistener"},"addListener"),Object(r.mdx)("p",null,"\u25b8 ",Object(r.mdx)("strong",{parentName:"p"},"addListener"),"<Event",">","(",Object(r.mdx)("inlineCode",{parentName:"p"},"event"),": Event, ",Object(r.mdx)("inlineCode",{parentName:"p"},"listener"),": Event ",Object(r.mdx)("em",{parentName:"p"},"extends")," ",Object(r.mdx)("inlineCode",{parentName:"p"},'"deposit"')," ? (",Object(r.mdx)("inlineCode",{parentName:"p"},"deposit"),": ",Object(r.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/classes/lib_ren_src_lockandmint.lockandmintdeposit"},Object(r.mdx)("em",{parentName:"a"},"LockAndMintDeposit")),"<LockTransaction, LockDeposit, LockAddress, MintTransaction, MintAddress",">",") => ",Object(r.mdx)("em",{parentName:"p"},"void")," : ",Object(r.mdx)("em",{parentName:"p"},"never"),"): ",Object(r.mdx)("em",{parentName:"p"},"this")),Object(r.mdx)("h4",{id:"type-parameters-2"},"Type parameters"),Object(r.mdx)("table",null,Object(r.mdx)("thead",{parentName:"table"},Object(r.mdx)("tr",{parentName:"thead"},Object(r.mdx)("th",{parentName:"tr",align:"left"},"Name"),Object(r.mdx)("th",{parentName:"tr",align:"left"},"Type"))),Object(r.mdx)("tbody",{parentName:"table"},Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"Event")),Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},'"deposit"'))))),Object(r.mdx)("h4",{id:"parameters-2"},"Parameters"),Object(r.mdx)("table",null,Object(r.mdx)("thead",{parentName:"table"},Object(r.mdx)("tr",{parentName:"thead"},Object(r.mdx)("th",{parentName:"tr",align:"left"},"Name"),Object(r.mdx)("th",{parentName:"tr",align:"left"},"Type"))),Object(r.mdx)("tbody",{parentName:"table"},Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"event")),Object(r.mdx)("td",{parentName:"tr",align:"left"},"Event")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"listener")),Object(r.mdx)("td",{parentName:"tr",align:"left"},"Event ",Object(r.mdx)("em",{parentName:"td"},"extends")," ",Object(r.mdx)("inlineCode",{parentName:"td"},'"deposit"')," ? (",Object(r.mdx)("inlineCode",{parentName:"td"},"deposit"),": ",Object(r.mdx)("a",{parentName:"td",href:"/ren-client-docs/ren-js/api/classes/lib_ren_src_lockandmint.lockandmintdeposit"},Object(r.mdx)("em",{parentName:"a"},"LockAndMintDeposit")),"<LockTransaction, LockDeposit, LockAddress, MintTransaction, MintAddress",">",") => ",Object(r.mdx)("em",{parentName:"td"},"void")," : ",Object(r.mdx)("em",{parentName:"td"},"never"))))),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Returns:")," ",Object(r.mdx)("em",{parentName:"p"},"this")),Object(r.mdx)("p",null,"Overrides: EventEmitter.addListener"),Object(r.mdx)("p",null,"Defined in: ",Object(r.mdx)("a",{parentName:"p",href:"https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/lockAndMint.ts#L385"},"ren-js/packages/lib/ren/src/lockAndMint.ts:385")),Object(r.mdx)("hr",null),Object(r.mdx)("h3",{id:"confirmationtarget"},"confirmationTarget"),Object(r.mdx)("p",null,"\u25b8 ",Object(r.mdx)("strong",{parentName:"p"},"confirmationTarget"),"(): ",Object(r.mdx)("em",{parentName:"p"},"Promise"),"<number",">"),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Returns:")," ",Object(r.mdx)("em",{parentName:"p"},"Promise"),"<number",">"),Object(r.mdx)("p",null,"Defined in: ",Object(r.mdx)("a",{parentName:"p",href:"https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/lockAndMint.ts#L213"},"ren-js/packages/lib/ren/src/lockAndMint.ts:213")))}o.isMDXComponent=!0},415:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return s})),n.d(t,"MDXProvider",(function(){return b})),n.d(t,"mdx",(function(){return x})),n.d(t,"useMDXComponents",(function(){return l})),n.d(t,"withMDXComponents",(function(){return p}));var a=n(0),r=n.n(a);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},d=Object.keys(e);for(a=0;a<d.length;a++)n=d[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(a=0;a<d.length;a++)n=d[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){return function(t){var n=l(t.components);return r.a.createElement(e,i({},t,{components:n}))}},l=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):m(m({},t),e)),n},b=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,d=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=l(n),p=a,b=s["".concat(i,".").concat(p)]||s[p]||j[p]||d;return n?r.a.createElement(b,m(m({ref:t},c),{},{components:n})):r.a.createElement(b,m({ref:t},c))}));function x(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var d=n.length,i=new Array(d);i[0]=O;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var o=2;o<d;o++)i[o]=n[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);