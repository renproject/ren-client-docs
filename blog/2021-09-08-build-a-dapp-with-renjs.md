---
title: Build your first Dapp with RenJS
description: Building a simple marketplace on Ethereum
slug: build-a-dapp-with-renjs
author: Tejas
author_title: Developer Relations at Ren
author_url: https://github.com/terrafirmatrekker
author_image_url: https://avatars.githubusercontent.com/u/11544711?s=60&v=4
tags: [RenVM, RenJS, dapp, tutorial]
image: https://avatars.githubusercontent.com/u/11544711?s=60&v=4
hide_table_of_contents: false
---

Our dapp will be powered by a smart contract that will track the ownership of products and instantly transfer ownership after a product is purchased by another user. One feature that will be unique is that users will be able to bridge Bitcoin in so our users can participate in the Ethereum ecosystem, this will be achieved by utilizing RenJS in our dapp.

<!--truncate-->

RenJS is the SDK for integrating with RenVM. For more lower-level details on the inner workings of the RenVM network, check out the[ specification](https://github.com/renproject/ren/wiki/Introduction) on GitHub.

#### **Why are we building it?**

Our approach to this tutorial is to introduce to you a simple way to familiarize yourself with some of the building blocks of dapps. It will highlight the use of smart contracts and get your feet wet building on Ethereum. Sure there are many crypto e-commerce dapps and more will pop up, but this tutorial aims to give you the basics to build on. You could use some of the concepts from the tutorial to build a number of useful dapps, or even use the experience using RenJS to apply to other[ DeFi projects](https://medium.com/renproject/12-app-ideas-using-renvm-eb08fb095499), the possibilities are truly limitless. If you feel comfortable with the basics and feel like jumping into RenJS, head over to our[ Documentation](https://renproject.github.io/ren-client-docs/ren-js) and feel free to reach out on Telegram with any questions.

---

### **Part 1: Getting Started**

#### **Configuring your Developer Environment**

This tutorial assumes that you already have Node installed in order to use NPM. If you need to install Node you can visit the [Node.js website](https://nodejs.org/en/) to download it. Let’s begin the tutorial by getting the rest of our project’s dependencies installed. First, we are going to install and set up Ganache.

#### **Ganache**

Ganache will enable us to use a personal blockchain to develop, deploy, and test the dapp locally before we deploy it to Kovan testnet. You can find the latest release for your OS[ here](https://www.trufflesuite.com/ganache). Once you’ve downloaded the package, extract the installer and go through the setup.

After you’ve installed and opened Ganache you should see two buttons: Quickstart and New Workspace. Click New Workspace and you should see a screen with 10 accounts with 100 ether as the balances.

Congratulations you now have a local blockchain up and running! By utilizing Ganache we save time avoiding blockchain development or account creation for testing. Ganache mimics the behavior of the public blockchain locally and is just one of many tools you may find useful in your Web3 developer journey.

#### **Installing Truffle Suite**

Let’s install the Truffle suite next. With Truffle you will be able to do a variety of things but most importantly it can handle your smart contract management that will compile to opcode/bytecode on the Ethereum Virtual Machine (EVM). It can also automate testing, handle network management; basically a ton of stuff. I won’t get too much into Truffle but if you feel comfortable with some of the concepts in dapp development I recommend[ Truffle Boxes](https://www.trufflesuite.com/boxes) which are useful boilerplates to get you up and running quickly.

To install Truffle open your terminal and follow the instructions[ here](https://www.trufflesuite.com/docs/truffle/getting-started/installation). Alternatively, if you feel like diving into the project without installing Truffle globally or you just want to toy around with the code, you can clone the repo (link) and run npm since Truffle and all the other dependencies are included. So to install Truffe head over to the terminal and type

```shell
npm install truffle -g
```

#### **Setting up Metamask**

If you don’t already have Metamask installed, now is the time to do so. Metamask enables you to utilize your browser to send and receive Ethereum and ERC20s. Available as a browser extension and as a mobile app, MetaMask equips you with a key vault, secure login, token wallet, and token exchange — everything you need to manage your digital assets. For the purpose of the tutorial, we will use the Metamask extension for Google Chrome.

To install Metamask check out their[ extension](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en) and follow their instructions to get it set up. Make sure that you see the extension activated as denoted by the fox icon along your browser’s address bar.

#### **Cloning the project repo**

Instead of going through the rigamarole of getting your project’s directory set up, I created a clonable repo based off the Create ETH app that has all the Ren dependencies you might need to get things moving quickly, just head over to this repo (link) and clone it by typing:

```shell
git clone https://github.com/terrafirmatrekker/Nakamoto-Store-Demo
```

Now cd into the directory that you cloned and you should be ready to go! Looking at our project directory you should see a simple truffle project configuration to help you build many dapps including some of the best packages from Ren, even though we only actually need two. I definitely recommend checking out all of the[ integration options we have](https://github.com/renproject/ren-js). With this basic project setup, you can create and test smart contracts, develop modern frontend applications. You can check out the dependencies in the package.json file if you’d like. To install the dependencies head over to the terminal with the project directory selected and type:

```shell
npm install
```

In the project directory you will notice a truffle-config file. This file is used to connect to our dapp’s blockchain network. In the file you will see configurations to connect to the Ganache blockchain (127.0.0.1:7545). We will get into the rest of the files in the directory as they pertain to the project. The other important items to consider in the directory is the components folder which is based on a starter template for our React frontend and simple tests written in Mocha and with the Chai assertion library, which I used to test our smart contracts, but you can use as a reference. We will go over the rest in the remainder of this tutorial.

---

### ** Part 2: Smart Contracts**

A “smart contract” is simply a program that runs on the Ethereum blockchain. It’s a collection of code (its functions) and data (its state) that resides at a specific address on the Ethereum blockchain.

You can think of smart contracts as a type of Ethereum account which means they have a balance and can process transactions over the network. What is truly unique about smart contracts is the fact that they are not controlled by an individual, once they are deployed to the network they run as they are programmed, immutable by nature.

Some would equate smart contracts to a “backend,” or a microservice or APIs (smart contracts are public on Ethereum and can be interacted with), but it’s far bigger than that. Not to drone on about smart contracts, but really at the end of the day these little files with op/bytecode are the meat and potatoes of Web3, they enable dapps to do a tremendous amount of things in the background. I don’t like to make predictions but as I see it many, if not most sectors in the future, will be impacted by smart contracts. From finance to gaming, exchanges, and media dapps — they all utilize smart contracts in many different ways.

Ethereum has developer-friendly languages for writing smart contracts such as Solidity and Vyper. However, for the Ethereum Virtual Machine (EVM) to run your contract it needs to be in bytecode. We will do this through compilation via the[ Remix IDE](https://remix.ethereum.org/), which is an open-source web and desktop application that affords devs a fast development cycle with a rich set of plugins and intuitive GUIs. Remix will be used for your entire journey of smart contract development and can serve as a veritable playground for learning Ethereum. Our smart contracts will be written in Solidity for this tutorial. If you already feel comfortable with Solidity and are curious about how to integrate with Ren and Ren JS check out this[ repo](https://github.com/renproject/ren-solidity-template) for a template.

There is one gotcha for most use cases, smart contracts cannot retrieve information from the “real-world” because of their inability to send HTTP requests. This was a product of design since reliance on external sources could jeopardize security and the goal of decentralization. Dapps use[ oracles](https://ethereum.org/en/developers/docs/oracles/) for such information but there are workarounds.

It is a good idea to use audited and pre-built smart contracts which are used throughout the ecosystem. A great resource is[ OpenZeppelin](https://github.com/OpenZeppelin/openzeppelin-contracts) who regularly undergoes audits and contributes to the composable nature of smart contracts.

#### **Our Contract**

Our contract will do some simple things, but when you take a step back and realize that the data from our contract interactions are immutable, that is where you will see the awesome power of smart contracts. It is amazing how quickly cryptocurrency and blockchains have evolved, in fact, the first transaction with Bitcoin was only 10 years ago when programmer Laszlo Hanyecz bought two Papa John’s pizzas for[ ₿[10,000](https://en.wikipedia.org/wiki/Bitcoin#:~:text=In%202010%2C%20the%20first%20known,John%27s%20pizzas%20for%20%E2%82%BF10%2C000)]. Now you can do a tremendous amount of things with smart contracts such as speculate on derivatives, lend and borrow cryptocurrencies, swap and stake tokens, buy art, or even insurance.

The thing that excites me about RenVM is its ability to empower smart contracts in a totally different way. A world with fully autonomous smart contracts working with chain-to-chain interactions is something that will change how the world works. Imagine, programmable bots trained by algorithms just moving and trading assets, decentralized, and free of humans. Simply reacting to events in the real world and following their instructions. Pretty incredible stuff and things that I expect is in the very near future.

Instead of going through the entire contract, I am going to explain some of the key bits that are necessary to understand the dapps functionality. To get started open the file named Marketplace.sol in the IDE of your choice.

First, you will see the version of Solidity declared:

```sol
pragma solidity ^0.5.0;
```

Below it we will declare our smart contract Marketplace which creates a state variable that will be stored on the blockchain. All of our smart contract code will be written inside the curly braces as you can see. You will also see a variable called name which we use for testing and we declare it public so we can read its value outside of the contract.

Below you can see a struct to allow us to list products:

```sol
struct Product {
    uint256 id;
    string name;
    uint256 price;
    address payable owner;
    bool purchased;
}
```

We can treat a struct like a value type such that it can be used within arrays and mappings. You can see the struct members, which consist of variable names along with their types. Solidity enables you to create your own data structures, with any attributes. That’s exactly what is done by creating a Product struct. It stores all the attributes of a product that we’ll need, like id, name, price, owner, and a boolean to determine if it is purchased. Now let’s jump back up a few lines you may have noticed these two lines which I didn’t explain:

```sol
uint256 public productCount = 0;
mapping(uint256 => Product) public products;
```

The first line is to keep track of how many products exist in the smart contract. We initialize it with 0 to begin. The second line is used to store the products on the blockchain. We use mapping to achieve this. According to the Solidity docs, “mappings can be seen as hash tables which are virtually initialized such that every possible key exists and is mapped to a value whose byte-representation are all zeros.”

Let’s go below the Product struct we created and you should see two event definitions that correspond to the functions below it. The first event relates to when a product is created, and the second pertains to when a product is purchased. These work almost exactly the same

Looking at the function related to the events you can see **createProduct**. Let’s break this function down a bit. This function will accept a name, price (in Wei), and check for conditions that the name is and price is greater than 0. Below that you see a line called **productCount++**; This is used to create a new Product id by utilizing the increment operator (++). Then we create a new product and add it to the mapping. **msg.sender** is the address of the user creating the product. Last you see, **emit ProductCreated** which is what emits the event to notify that a product was created. Events are inheritable members of contracts. When you call them, they cause the arguments to be stored in the transaction’s log — a special data structure in the blockchain. These logs are associated with the address of the contract, are incorporated into the blockchain, and stay there as long as a block is accessible.

Now let’s break down the second function corresponding to the event **ProductPurchased**. First we get the product from the mapping we created and store the current owner to a variable. We have a few requirements below demarcated by **require**. The requirements are a valid id, sufficient Ether for the transaction, the buyer is not the seller, and the product is still unpurchased. Next after the requirements are met we allow for the transaction to occur. We transfer ownership of the product to the buyer, mark the product as bought, and send the Ether to the seller. Finally, the event is emitted to show that a product has been purchased.

Wow, we covered a ton of information in a short span of time! So by now you should have the tools to mimic a public blockchain through Ganache, the Truffle suite to automate testing with the test files and do a variety of things. We have also reviewed quite a bit on smart contracts, I encourage you to read the[ Solidity documentation](https://docs.soliditylang.org/en/v0.8.6/) to further develop your understanding. You may also consider[ their examples](https://docs.soliditylang.org/en/v0.8.1/solidity-by-example.html#) to develop some of your own basic dapps. There are also many open-source resources to get you started. If you have a desire to dig deeper on some of the concepts, a few things that helped me understand concepts better:

-   [Visualizing the blockchain](https://andersbrownworth.com/blockchain/): a professor has some examples of keys, blockchains and various other demos
-   [MIT Mooc Blockchain and Money](https://ocw.mit.edu/courses/sloan-school-of-management/15-s12-blockchain-and-money-fall-2018/index.htm): In particular Sessions 2–4 (relevant to Week 3 of Notion), & 6 ( a great course in its entirety)
-   [ETH Builder](https://eth.build/): I think the dev behind this illustrates the[ Blockchain](https://www.youtube.com/watch?v=zcX7OJ-L8XQ) and[ Smart Contracts](https://www.youtube.com/watch?v=-6aYBdnJ-nM) pretty well. In fact besides his connection to Ethereum, I think a visualization of RenVM via the same open-source toolset would be great as well!
-   [Hitchhiker’s Guide to Smart Contracts](https://blog.openzeppelin.com/the-hitchhikers-guide-to-smart-contracts-in-ethereum-848f08001f05/%29,%20[A%20Gentle%20Intro%20to%20Ethereum%20Programming]%28https://blog.openzeppelin.com/designing-the-architecture-for-your-ethereum-application-9cec086f8317/)
-   [Introduction to Blockchain through Cryptoeconomics](https://medium.com/blockchain-at-berkeley/introduction-to-blockchain-through-cryptoeconomics-part-1-bitcoin-369f245067f9)

In Part 2 and 3 I will outline some of the components of our dapp like the Store’s frontend, a frontpage, a “bridge” where we will interact with RenVM to allow customers to convert BTC to renBTC to use in the shop, and more on other ways you can use RenVM.

---

### **Part 2: Interacting with RenVM**

Now that we have our store smart contract created and tests in place to assure it is functioning as we planned we can move to one final task with Solidity before deploying our contract to Kovan, which is the use of an “adapter contract” to bring renBTC to our dapp so customers can purchase products with BTC.

The BasicAdapter contract is not part of the core RenVM protocol contracts and is only used by the front-end RenJS library. It’s a contract that submits mint signatures to a MintGateway and then forwards the minted ren-asset to the specified recipient. You can find[ examples](https://github.com/renproject/gateway-sol) and[ templates](https://github.com/renproject/ren-solidity-template) in Ren’s repos.

Looking at our smart contract some things to note would be the use of interfaces. Interfaces are the same as abstract contracts created by using an interface keyword, also known as a pure abstract contract. Interfaces do not have any definition or any state variables, constructors, or any function with implementation, they only contain function declarations i.e. functions in interfaces do not have any statements. The idea is to use inheritance to create a compliant implementation — a contract with the exact same functions implemented. Anyone can implement these functions in the contract.

In our contract you should notice the use of the IGateway interface with two function declarations mint and burn:

```sol
interface IGateway {
    function mint(bytes32 _pHash, uint256 _amount, bytes32 _nHash, bytes calldata _sig) external returns (uint256);
    function burn(bytes calldata _to, uint256 _amount) external returns (uint256);
}
```

For our dapp we will only implement mint since our users will send BTC and mint renBTC which is an ERC20 token that can be used in our store. You can see the implementation in the mint function:

```sol
function mint(
    // Payload
    string calldata _symbol,
    address _recipient,
    // Required
    uint256 _amount,
    bytes32 _nHash,
    bytes calldata _sig
) external {
    bytes32 payloadHash = keccak256(abi.encode(_symbol, _recipient));
    uint256 amount = registry.getGatewayBySymbol(_symbol).mint(
    payloadHash,
    _amount,
    _nHash,
    _sig
);
    registry.getTokenBySymbol(“BTC”).transfer(msg.sender, amount);
}
```

You can interact with this contract that is already deployed on Kovan[ here](https://kovan.etherscan.io/address/0x7e5c5fc517ad27070faf8b2ac05d06bf0250332d). To deploy your own version of the contract following the instructions at the bottom of our[ tutorial](https://renproject.github.io/ren-client-docs/ren-js/tutorial/smart-contract/) labeled: _Deploying to Kovan. _

**Remember to deploy to GatewayRegistry’s address, 0x557e211EC5fc9a6737d2C6b7a1aDe3e0C11A8D5D**

At this point we can move to the frontend integration of RenJS. For the purposes of the tutorial, we are going to cover the integration but the store itself is fully functional and can be used to sell and buy products on the blockchain with ethers.

---

### **Part 3: Integrating with RenJS**

As I mentioned in Part 2, the store as is totally functional if you are using ethers as a method of payment. But let’s make it possible for users to convert BTC to renBTC a 1:1 ERC-20 token representation of Bitcoin (BTC) on Ethereum.

We have already laid the foundation for adapting our smart contract to use RenJS the official SDK for interacting with RenVM. As I intimated before our users will only require a mint transaction, technically speaking a lock-and-mint transaction.

Lock-and-mint transactions are so named because the first step requires the user to send assets to RenVM, thereby “locking” into its custody. Unless there is consensus in RenVM that the assets can be released, they will remain locked. After witnessing the locking of assets, RenVM returns a “minting signature” to the user. This authorizes the user to mint a tokenized representation of the asset on the host chain. This representation is pegged one-to-one with the locked asset; it is always redeemable in any quantity at any time. You can learn more about cross-chain transactions[ here](https://github.com/renproject/ren/wiki#cross-chain-transactions).

In fact, you would not need the adapter contract if your dapp was merely minting and burning assets. In our Developer Docs we have a[ quick start section](https://renproject.github.io/ren-client-docs/ren-js/quick-start) that illustrates how easy it is to mint and burn assets if you are a developer familiar with Web3. Check out the code below to mint a tokenized Bitcoin.

Back to those following along less familiar with Web3, navigate to the component sub-folder in your project directory. As this project is a react app we have several different components, feel free to explore the components to understand how we use[ Web3.js](https://web3js.readthedocs.io/en/v1.5.2/) to wire the frontend to communicate with smart contracts. The component that highlights the integration of RenJS is named Bridge.js. Open up this component in your IDE and follow along as I explain what is happening. You can also check out our[ RenJS tutorial](https://renproject.github.io/ren-client-docs/ren-js/tutorial/ren-js) whose code I adapted for the purposes of the demo.

RenJS allows developers to interact with RenVM’s growing network of bridged chains and assets. It’s the official JavaScript SDK for interacting with RenVM and for bridging assets.

First you will need to install 2 packages:

-   @renproject/ren implements the core logic for interacting with RenVM
-   @renproject/chains provides support for various assets and chains. These can also be imported separately as I have done- e.g. using @renproject/chains-ethereum for Ethereum

I have imported these packages at the top of my component file. Next, I initialize RenJS, I initialize it with the parameter “testnet” on line 19 to connect to RenVM’s testnet.

```ts
renJS: new RenJS(“testnet”),
```

As I intimated before there are two steps involves in creating new renBTC tokens on Ethereum — 1) locking BTC and 2) minting renBTC. The method on RenJS to initiate this process is called a lockAndMint. You can read more about this interface in our[ TypeDocs](https://renproject.github.io/ren-js-docs/index.html). Here's what it looks like to set-up a lockAndMint to a user's address on Ethereum:

Though for our dapp we want to send BTC to a smart contract, not just a user’s address. To do this, we specify the details needed to call the smart contract. You can see a const variable on line 20 with the address of the smart contract we created.

Each LockAndMint object has a unique _gateway address_, generated from the details we provided to it. We want to show the gateway address to the user and then wait for them to send BTC to this address. We do this on line 145 by adding:

```ts
alert(`Deposit ${amount} BTC to ${mint.gatewayAddress}`);
```

To handle deposits received at the gateway address, the mint object emits "deposit" events that can be listened to using mint.on("deposit", ...). After detecting a deposit, there are three steps for completing the asset bridging:

1. waiting for the deposit to be confirmed,
2. submitting the deposit to RenVM and wait for a signature, and
3. submitting to the mint-chain — in the dapp this is Ethereum.

We perform these steps inside the "deposit" event callback on lines 147–164

We then alert the user of the BTC deposited:

```ts
alert(`Deposited ${amount} BTC.`);
```

To check on the status of the deposit we can usedeposit.status which returns the current progress of the deposit, and will be "detected", "confirmed", "signed", "submitted" or "reverted". (_See[ DepositStatus docs](https://renproject.github.io/ren-js-docs/enums/depositstatus.html)_)

In addition to receiving .on("deposit", ...) events, you can also manually provide the details of a deposit using mint.processDeposit. The parameter should match the type of deposit.depositDetails of a deposit object returned from.on("deposit", ...).

Now let’s say the user wanted to get their BTC back by burning their renBTC. This functionality though not utilized in the dapp is added on just to show how users can get their BTC back.

In order to return the BTC back from Ethereum, the renBTC must be burned, and a recipient BTC address must be chosen. RenVM will automatically see and process the burn, releasing the BTC to the recipient. RenJS can be used to:

1. initiate a burn by providing it the details to burn the renBTC, or
2. monitor an existing burn by providing it with the transaction hash or identifier of the burn.

For the sake of education here is how initiating a burn looks like: (lines 169–208 in Bridge.js file):

```ts
const { web3, renJS, balance } = this.state;
const recipient = prompt("Enter BTC recipient:");
const amount = balance;
const burnAndRelease = await renJS.burnAndRelease({
  // Send BTC from Ethereum back to the Bitcoin blockchain.
  asset: "BTC",
  to: Bitcoin().Address(recipient),
  from: Ethereum(web3.currentProvider).Contract((btcAddress) => ({
    sendTo: contractAddress,

    contractFn: "withdraw",

    contractParams: [
      {
        type: "bytes",
        name: "_msg",
        value: Buffer.from(`Withdrawing ${amount} BTC`),
      },
      {
        type: "bytes",
        name: "_to",
        value: btcAddress,
      },
      {
        type: "uint256",
        name: "_amount",
        value: RenJS.utils.toSmallestUnit(amount, 8),
      },
    ],
  })),
});

let confirmations = 0;
await burnAndRelease
  .burn()
  // Ethereum transaction confirmations.
  .on("confirmation", (confs) => {
    confirmations = confs;
  })
  // Print Ethereum transaction hash.
  .on("transactionHash", (txHash) => this.log(`txHash: ${String(txHash)}`));

await burnAndRelease
  .release()
  // Print RenVM status - "pending", "confirming" or "done".
  .on("status", (status) =>
    status === "confirming"
      ? this.log(`${status} (${confirmations}/15)`)
      : this.log(status)
  )
  // Print RenVM transaction hash
  .on("txHash", this.log);

this.log(`Withdrew ${amount} BTC to ${recipient}.`);
@terrafirmatrekker
```

If you want to try the Bridge out yourself, you will need some test ether and testBTC. Run the dapp locally in your browser if you haven’t already and try it out! Once the mint is done you should be able to see testBTC in your MetaMask wallet. Just make sure to add the token to Metamask. To do so, make sure you are on Kovan Test Network in Metamask and then go to “Assets” and then Click “Add Token”. Paste in the Kovan renBTC address (you can find it[ here](https://renproject.github.io/ren-client-docs/contracts/deployments/%29) — make sure you’ve chosen Ethereum and Testnet, and then copy the ERC20 address under testBTC.

### **Conclusion **

Wow, we have made some tremendous progress from the beginning of this tutorial! We have created a smart contract that allows users to buy and sell products on Ethereum. Finally, we integrated with RenJS in order to interact with RenVM so users can “convert” BTC to renBTC (ERC20)through a lockAndMint. There are still a few missing pieces of the puzzle that I leave up to you.

Firstly, how can we modify our smart contract and front-end to allow users to shop with renBTC in lieu of Ethereum? We could possibly price the items in renBTC but that leaves a lot of users in the dark, we could also swap the renBTC for Ethers through a number of “third-party” dapps. We could also use the renBTC balance inside of the contract, like a store balance/credit, so that you don’t have to worry about approvals. Like when a user mints renBTC, it stays in the contract, but it gets stored in a map from the user’s address to their balance. I am curious about which method you choose to implement! Send me your ideas and implementations, we want to see what you create!

Thanks for reading my tutorial, feel free to reach out to me with any questions, concerns, or modifications you have made to the dapp. Also, feel free to join Ren’s[ telegram](https://t.me/joinchat/xED0D5pCfVI1YWU5) to ask technical questions and to learn more about the ecosystem and protocol. Remember, things are only impossible until they’re not! There is so much to #buidl show us what you dream up!
