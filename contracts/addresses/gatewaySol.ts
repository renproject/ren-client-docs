export const gatewaySolConfig = {
    ethereumMainnet: {
        RenProxyAdmin: "0xDf1D8eD27C54bBE5833320cf5a19fd9E73530145",

        GatewayRegistry: "0xf36666C230Fa12333579b9Bd6196CB634D6BC506",
        BasicBridge: "0x82DF02A52E2e76C0c233367f2fE6c9cfe51578c5",

        RenERC20LogicV1: "0xe2d6cCAC3EE3A21AbF7BeDBE2E107FfC0C037e80",
        MintGatewayLogicV1: "0x402ec534BaF9e8Dd2968c57fDea368f3856460d6",
        MintGatewayLogicV2: "0xd0DA0D062d18cc70BE85Ff94afa880EcEe66EEDD",

        assets: [
            {
                // renBTC
                symbol: "BTC",
                decimals: 8,
                token: "0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D",
                gateway: "0xe4b679400F0f267212D5D812B95f58C83243EE71",
            },
            {
                // renZEC
                symbol: "ZEC",
                decimals: 8,
                token: "0x1C5db575E2Ff833E46a2E9864C22F4B22E0B37C2",
                gateway: "0xc3BbD5aDb611dd74eCa6123F05B18acc886e122D",
            },
            {
                // renBCH
                symbol: "BCH",
                decimals: 8,
                token: "0x459086F2376525BdCebA5bDDA135e4E9d3FeF5bf",
                gateway: "0xCc4FF5b8A4A7adb35F00ff0CBf53784e07c3C52F",
            },
            {
                // renFIL
                symbol: "FIL",
                decimals: 18,
                token: "0xD5147bc8e386d91Cc5DBE72099DAC6C9b99276F5",
                gateway: "0xED7D080AA1d2A4D468C615a5d481125Bb56BF1bf",
            },
            {
                // renDGB
                symbol: "DGB",
                decimals: 8,
                token: "0xe3Cb486f3f5C639e98cCBaF57d95369375687F80",
                gateway: "0x05387a10Bb3EF789b6C2a9CE2d6C21D5a8c6B1aA",
            },
            {
                // testDOGE
                symbol: "DOGE",
                decimals: 8,
                token: "0x3832d2F059E55934220881F831bE501D180671A7",
                gateway: "0x2362843745615368F4ef0A43D7502353649C0783",
            },
            {
                // renLUNA
                symbol: "LUNA",
                decimals: 6,
                token: "0x52d87F22192131636F93c5AB18d0127Ea52CB641",
                gateway: "0xD7D7Deab930B6d3f98b35A26a4c431630d5AB874",
            },

            {
                // renBNB
                symbol: "BNB",
                decimals: "18",
                token: "0xb8f7762192C840A5E4A6661D5Fa2D4d103E1d16a",
                gateway: "0xED2c7EE4f0E203B40B8a12D7CCcDc0100EAE25a3",
            },
            {
                // renMATIC
                symbol: "MATIC",
                decimals: "18",
                token: "0xe231f14Ab3170e691c8eE657cC353CaA5de60494",
                gateway: "0x4024E80a17C66346a8711A7fc9183Bde9d85258b",
            },
            {
                // renFTM
                symbol: "FTM",
                decimals: "18",
                token: "0xF89B530176D809be9ED21Dd025EFb291D461e67F",
                gateway: "0x4D374735E0CB1B2C6773ADD9991662333983FD67",
            },
            {
                // renAVAX
                symbol: "AVAX",
                decimals: "18",
                token: "0xA9A731AEDA12A745B2F3f79b73DD0f20C2645fA3",
                gateway: "0x05c37FD270Ab99bC5A8599CFEcC1C4f6E95A9e7f",
            },
            {
                // renArbETH
                symbol: "ArbETH",
                decimals: "18",
                token: "0xE48a34Ca1d2EC3AC33fBeE29cAA03E459e87faB7",
                gateway: "0x2698Fc0d83c6227BFc7c4c30bEDbe0Ff7Eda84d8",
            },
        ],

        config: {
            governanceAddress: "", // defaults to deployer
            mintAuthority: "0x7f64e4e4b2d7589eb0ac8439c0e639856aeceee7",

            chainName: "Ethereum",
            tokenPrefix: "ren",
            standard: "ERC20",
        },
    },

    ethereumTestnet: {
        RenProxyAdmin: "0x4C695C4Aa6238f0A7092733180328c2E64C912C7",

        GatewayRegistry: "0x5076a1F237531fa4dC8ad99bb68024aB6e1Ff701",
        BasicBridge: "0xcb6bD6B6c7D7415C0157e393Bb2B6Def7555d518",

        RenERC20LogicV1: "0xCe77c29b479bDF510f39bc4A2e43B0E4344fAB0f",
        MintGatewayLogicV2: "0x1AE08E8D4CF6CEF8c6e32d32Eb4BD3954425E44b",

        assets: [
            {
                // testBTC
                symbol: "BTC",
                decimals: 8,
                token: "0x0A9ADD98C076448CBcFAcf5E457DA12ddbEF4A8f",
                gateway: "0x55363c0dBf97Ff9C0e31dAfe0fC99d3e9ce50b8A",
            },
            {
                // testZEC
                symbol: "ZEC",
                decimals: 8,
                token: "0x42805DA220DF1f8a33C16B0DF9CE876B9d416610",
                gateway: "0xAACbB1e7bA99F2Ed6bd02eC96C2F9a52013Efe2d",
            },
            {
                // testBCH
                symbol: "BCH",
                decimals: 8,
                token: "0x618dC53e856b1A601119F2Fed5F1E873bCf7Bd6e",
                gateway: "0x9827c8a66a2259fd926E7Fd92EA8DF7ed1D813b1",
            },
            {
                // testDGB
                symbol: "DGB",
                decimals: 8,
                token: "0xAE2f4e711ca562a07E16939C5dfD40b05C68AEe5",
                gateway: "0xC9A81412B538A3c190Bc6E537357c09A23D5A90E",
            },
            {
                // testDOGE
                symbol: "DOGE",
                decimals: 8,
                token: "0x442412c823884Cb8fa5e6a096b5DadD8BD94e798",
                gateway: "0x0D3D33790466D67d66cF61C02494B31AB63B9097",
            },
            {
                // testFIL
                symbol: "FIL",
                decimals: 18,
                token: "0x41db5283522Ef37225c095908C5865d6E9C2F460",
                gateway: "0x1b94fD4ad404d3502b71A5c083BcE9eC978C2478",
            },
            {
                // testLUNA
                symbol: "LUNA",
                decimals: 6,
                token: "0x34CC35cdB6fF0c3db189428ACe45084231664CD0",
                gateway: "0xFdF1F7bFB789bb06e830EBaC76e6241fcB29B5e1",
            },

            {
                // testBNB
                symbol: "BNB",
                decimals: 18,
                token: "0xf600DF44E1330b30Fab580BC4aEFCF031520a94A",
                gateway: "0x0E88eD2220519f60341e19bDdC37E76923ca41D3",
            },
            {
                // testMATIC
                symbol: "MATIC",
                decimals: 18,
                token: "0x0F323557938489Ffe83cf7DC951e879fCF8C48d8",
                gateway: "0x1243A19866718aB4B8bb69dA9B68e83841d0Fd68",
            },
            {
                // testFTM
                symbol: "FTM",
                decimals: 18,
                token: "0x6446E04f4829FcbAD012C933d2FB65B01CE62EA2",
                gateway: "0xa9d345a20fD38Da52173198C3FB7276a8F0Fb36E",
            },
            {
                // testAVAX
                symbol: "AVAX",
                decimals: 18,
                token: "0xa1ba3fD170833BaB86761780070D069b1F0033eB",
                gateway: "0x826EEC9eAe16720Db6C5E59DE8bfee030ce13a3a",
            },
            {
                // testArbETH
                symbol: "ArbETH",
                decimals: 18,
                token: "0x0f709956660FBc0DA83Efd32b213606Ea75F0e69",
                gateway: "0xaa2DC89fD6C1d82bd0AE3D979588906227Bf9BE1",
            },
        ],

        config: {
            governanceAddress: "", // defaults to deployer
            // mintAuthority: "0x44Bb4eF43408072bC888Afd1a5986ba0Ce35Cb54",
            mintAuthority: "0x44Bb4eF43408072bC888Afd1a5986ba0Ce35Cb54",

            chainName: "Ethereum",
            tokenPrefix: "test",
            standard: "ERC20",
        },
    },

    bscMainnet: {
        RenProxyAdmin: "0xbdf27a048ea859a20fef6b956eaeea4e80f2bdc7",

        GatewayRegistry: "0xf36666C230Fa12333579b9Bd6196CB634D6BC506",
        BasicBridge: "0x82DF02A52E2e76C0c233367f2fE6c9cfe51578c5",

        RenERC20LogicV1: "0x3799006a87FDE3CCFC7666B3E6553B03ED341c2F",
        MintGatewayLogicV2: "0x6b8bB175c092DE7d81860B18DB360B734A2598e0",

        assets: [
            {
                // renBTC
                symbol: "BTC",
                decimals: 8,
                token: "0xfCe146bF3146100cfe5dB4129cf6C82b0eF4Ad8c",
                gateway: "0x95De7b32e24B62c44A4C44521eFF4493f1d1fE13",
            },
            {
                // renZEC
                symbol: "ZEC",
                decimals: 8,
                token: "0x695FD30aF473F2960e81Dc9bA7cB67679d35EDb7",
                gateway: "0xfdecB67cE94A22C8e227D17938c3127EA1B47B4E",
            },
            {
                // renBCH
                symbol: "BCH",
                decimals: 8,
                token: "0xA164B067193bd119933e5C1e7877421FCE53D3E5",
                gateway: "0x3023DD075B0291Cd6aDc890A1EBDD6C400595E08",
            },
            {
                // renFIL
                symbol: "FIL",
                decimals: 18,
                token: "0xDBf31dF14B66535aF65AaC99C32e9eA844e14501",
                gateway: "0x05Cadbf3128BcB7f2b89F3dD55E5B0a036a49e20",
            },
            {
                // renDGB
                symbol: "DGB",
                decimals: 8,
                token: "0x31a0D1A199631D244761EEba67e8501296d2E383",
                gateway: "0x7986568375Af35B427f3f51389d73196967C356a",
            },
            {
                // testDOGE
                symbol: "DOGE",
                decimals: 8,
                token: "0xc3fEd6eB39178A541D274e6Fc748d48f0Ca01CC3",
                gateway: "0x06A2C5d79c66268610eEBBca10AFa17092860830",
            },
            {
                // renLUNA
                symbol: "LUNA",
                decimals: 6,
                token: "0xc4Ace9278e7E01755B670C0838c3106367639962",
                gateway: "0x4d59f628CB8e4670b779eAE22aF0c46DebC06695",
            },

            {
                // renETH
                symbol: "ETH",
                decimals: "18",
                token: "0x0694bf58a4F48C5970454CD4874218eBa843Cf3e",
                gateway: "0x85d0B90f56cEA09c4Be61a11C0367550dD865728",
            },
            {
                // renMATIC
                symbol: "MATIC",
                decimals: "18",
                token: "0xe231f14Ab3170e691c8eE657cC353CaA5de60494",
                gateway: "0x4024E80a17C66346a8711A7fc9183Bde9d85258b",
            },
            {
                // renFTM
                symbol: "FTM",
                decimals: "18",
                token: "0xF89B530176D809be9ED21Dd025EFb291D461e67F",
                gateway: "0x4D374735E0CB1B2C6773ADD9991662333983FD67",
            },
            {
                // renAVAX
                symbol: "AVAX",
                decimals: "18",
                token: "0xA9A731AEDA12A745B2F3f79b73DD0f20C2645fA3",
                gateway: "0x05c37FD270Ab99bC5A8599CFEcC1C4f6E95A9e7f",
            },
            {
                // renArbETH
                symbol: "ArbETH",
                decimals: "18",
                token: "0xE48a34Ca1d2EC3AC33fBeE29cAA03E459e87faB7",
                gateway: "0x2698Fc0d83c6227BFc7c4c30bEDbe0Ff7Eda84d8",
            },
            {
                // renDAI
                symbol: "DAI",
                decimals: "18",
                token: "0xEB9aC3e1C9C3F919804Bdc412e0a39b94D4C09d3",
                gateway: "0x3aa07C73307677fC3A7De6DB798076aa3DA5a05C",
            },
            {
                // renREN
                symbol: "REN",
                decimals: "18",
                token: "0x0fF1033de8F9229d69c10A2c6FACa20432c40d8c",
                gateway: "0x12a81D0Ef7f86f165a53bDBbE4c2878CC36C0a8C",
            },
            {
                // renUSDC
                symbol: "USDC",
                decimals: "6",
                token: "0x6E48a0c5386211837d99DacA233f45EF5aa5f594",
                gateway: "0x807bDd3Cc97CbC8D445B469f0e5aEFA9e6307E1e",
            },
            {
                // renUSDT
                symbol: "USDT",
                decimals: "6",
                token: "0xf55941e971302C634c586416c43469F3EaD5ad3e",
                gateway: "0x49c3d8b3686df2c8783b97ce6B99b7d15F57Ec18",
            },
            {
                // renEURT
                symbol: "EURT",
                decimals: "6",
                token: "0x9D9af63163697d38CC2eEBB4832C221f0331DfE5",
                gateway: "0xE4d866dCc9cB886ef427Cd5a45B21d49b2B33d14",
            },
            {
                // renBUSD
                symbol: "BUSD",
                decimals: "18",
                token: "0xd82a4f018eCF6be6E991C3c4a160C9758EC3338F",
                gateway: "0xE208e8A64f4Aa62D2787B67409976e220C2513e0",
            },
            {
                // renMIM
                symbol: "MIM",
                decimals: "18",
                token: "0x705Bc47EbA113Be1a66e20824a05a176aA3b5265",
                gateway: "0x06D329CC63C2F50D1A1e63Ab548e1A65658A97b8",
            },
            {
                // renCRV
                symbol: "CRV",
                decimals: "18",
                token: "0xD1d1c5C5055cBa2Bd9Dd2a3e99F2958D25845568",
                gateway: "0x54500d3CD7b78A539B2238989a198023186118Eb",
            },
            {
                // renLINK
                symbol: "LINK",
                decimals: "18",
                token: "0xCc1a9f25F2ADec39dA1A95e415b8B855caa0052a",
                gateway: "0x9913A9aEDB922A989a08E9a0E8529483e2d291e6",
            },
            {
                // renUNI
                symbol: "UNI",
                decimals: "18",
                token: "0x65FAAD3c8DCecC3D56AA76F809ea378A137ecE8a",
                gateway: "0xD3b2C376d0F899F535ED1e87eC843a4B40903A8e",
            },
            {
                // renSUSHI
                symbol: "SUSHI",
                decimals: "18",
                token: "0x33f87D7d65182eA6A21D2aBdFa46EC6Ab0F1075a",
                gateway: "0x55Bd297C3E37A95Eb3EF52f2ecFDA75dE0650648",
            },
            {
                // renFTT
                symbol: "FTT",
                decimals: "18",
                token: "0xB46b2c467950FF3c9012d5f3c1a975fa009a354d",
                gateway: "0x9123fC0f3a483bA341cAa14E4B021B5aB0e2bE32",
            },
            {
                // renROOK
                symbol: "ROOK",
                decimals: "18",
                token: "0x4f1593823909e86e4711aF182112457F024Be6ec",
                gateway: "0x62646A4B9BAdc028DE4EAA8d3ADd73465BF4C310",
            },
            {
                // renBADGER
                symbol: "BADGER",
                decimals: "18",
                token: "0x0D3A83566b7D5b85AB0DfEdfc66f358552ACEB78",
                gateway: "0x8d7306A6286d0C9ee9Aa327E33d037f241a4D2d8",
            },
            {
                // renKNC
                symbol: "KNC",
                decimals: "18",
                token: "0xCee9071A0A19310a670dBe3a300D6dcAf8ae96AD",
                gateway: "0xe58cf965FFE347AbD5D1497167E7EA8c5b610453",
            },
        ],

        config: {
            governanceAddress: "0x33024cfb7af11a7cb12ab0dedefc5dd5f430381f", // defaults to deployer
            mintAuthority: "0x7f64e4e4b2d7589eb0ac8439c0e639856aeceee7", // defaults to deployer

            tokenPrefix: "ren",
            standard: "ERC20",
            chainName: "BinanceSmartChain",
        },
    },

    bscTestnet: {
        RenProxyAdmin: "0xCf44D3C75D2E1790314A4cb400Ed6a6732959194",

        GatewayRegistry: "0x838F881876f53a772D2F8E2f8aa2e4a996431495",
        BasicAdapter: "0x7de1253A8da6620351ec477b38BdC6a55FCd0f85",

        RenERC20LogicV1: "0xD83c880037eabfe01cCF4B0E0e8464686CE23e70",
        MintGatewayLogicV2: "0x77Aa76F7fdC7B465d0C279f0515eF1Ed07F1eC95",

        assets: [
            {
                // devBTC
                symbol: "BTC",
                decimals: 8,
                token: "0x5eB4F537889eC3C7Ec397F1acB33c70D8C0ee438",
                gateway: "0x6003FD1C2d4eeDed7cb5E89923AB457d1DE5cE89",
            },
            {
                // devDOGE
                symbol: "DOGE",
                decimals: 8,
                token: "0xAF787a25241c69ae213A8Ee08a2518D858b32dBd",
                gateway: "0x7517FadFA7247ffe52d57c78780FfF0662a09936",
            },
            // {
            //     // devETH
            //     symbol: "ETH",
            //     decimals: 18,
            //     token: "0xdE0316Db06e3AA5F3291850694543aEA928E72Ca",
            //     gateway: "0x18E12421fdD63220e2A0A34497724431b1a829f4"
            // },
            {
                // devZEC
                symbol: "ZEC",
                decimals: 8,
                token: "0xD566bB681a231f5648D7cB0f09A89cb47fd09513",
                gateway: "0x00E094aff24746196Bf73491A4C276fa4db503b4",
            },
            {
                // devBCH
                symbol: "BCH",
                decimals: 8,
                token: "0xE980BC9e17094EB273c6b5A1139b3A30EcdF05e0",
                gateway: "0xBA7236b2fbe3F12Df15a0d5fcE57d891016822f8",
            },
            {
                // devDGB
                symbol: "DGB",
                decimals: 8,
                token: "0x8C0248Ab26FcD6868Cc5aaea954f0ce28F8E103f",
                gateway: "0xd5E7d585D471BaFF2060dAFeaf701ff89114e439",
            },
            {
                // devFIL
                symbol: "FIL",
                decimals: 18,
                token: "0xDC42759e28e41898BdE199aB044F366dACbF3436",
                gateway: "0xF461Fe16eb3BcFC6e930dB0bDD2A3aD28636BBB9",
            },
            {
                // devLUNA
                symbol: "LUNA",
                decimals: 6,
                token: "0x2c82a39549858A0fF1a369D84695D983791d0786",
                gateway: "0x26f4F36A070190Ee4379241DD1463A420768EB4B",
            },

            {
                // testETH
                symbol: "ETH",
                token: "0xf72cDECe7eA0821F4789002701db1A662d399342",
                gateway: "0xc39ccf0E1644844358C657B9bF9B6e0D636Ae6Cc",
            },
            {
                // testMATIC
                symbol: "MATIC",
                decimals: 18,
                token: "0x0F323557938489Ffe83cf7DC951e879fCF8C48d8",
                gateway: "0x1243A19866718aB4B8bb69dA9B68e83841d0Fd68",
            },
            {
                // testFTM
                symbol: "FTM",
                decimals: 18,
                token: "0x6446E04f4829FcbAD012C933d2FB65B01CE62EA2",
                gateway: "0xa9d345a20fD38Da52173198C3FB7276a8F0Fb36E",
            },
            {
                // testAVAX
                symbol: "AVAX",
                decimals: 18,
                token: "0xa1ba3fD170833BaB86761780070D069b1F0033eB",
                gateway: "0x826EEC9eAe16720Db6C5E59DE8bfee030ce13a3a",
            },
            {
                // testArbETH
                symbol: "ArbETH",
                decimals: 18,
                token: "0x0f709956660FBc0DA83Efd32b213606Ea75F0e69",
                gateway: "0xaa2DC89fD6C1d82bd0AE3D979588906227Bf9BE1",
            },
            {
                // testDAI
                symbol: "DAI",
                decimals: 18,
                token: "0x5E5f602c982C196141D4eE0d1d05DAf3a9ABE5c9",
                gateway: "0xF61E124cA54EACF86507D0d7d927Fe38EeF8C100",
            },
            {
                // testREN
                symbol: "REN",
                decimals: 18,
                token: "0x20aA737F98e93aD5092EF2024E5d3a2c8E18edA4",
                gateway: "0x0522d5e6108Dc6F6A9B2f6BC233416FA040618ad",
            },
            {
                // testUSDC
                symbol: "USDC",
                decimals: 6,
                token: "0x7bCeCc655AEB8eb5a15f854490f643Bd34448508",
                gateway: "0x5f6d1b16246A3ba21D9036ceCcdB495ff65b09ED",
            },
            {
                // testUSDT
                symbol: "USDT",
                decimals: 6,
                token: "0x3ab7632A1cbEAbC1422F8fE24750C1ea66e169BC",
                gateway: "0x3657a1F93E3d55FED214bFA8039fA1D814a5fE3f",
            },
            {
                // testEURT
                symbol: "EURT",
                decimals: 6,
                token: "0xe2d8C484411D8fCD5Af35C081d71591bAFDceF5B",
                gateway: "0xb92D83260ecB1B2b30645f3C0c88a26E2747e329",
            },
            {
                // testBUSD
                symbol: "BUSD",
                decimals: 18,
                token: "0x79E28f786E6Ba3C7fa755D99191fe2e9b3d33d77",
                gateway: "0x3d7194D9e5812AAD72d0090485eFf721B76F2B39",
            },
            {
                // testMIM
                symbol: "MIM",
                decimals: 18,
                token: "0x38B31b1Ee77AAd541808D3c6052c4C64ca61Da72",
                gateway: "0x4f4DFF8e4985AA26d68A451920a0dCC4eAaB367f",
            },
            {
                // testCRV
                symbol: "CRV",
                decimals: 18,
                token: "0x0C3C180D731E7d0826f92F8f312456752b800b24",
                gateway: "0x5EBb45521B925A11B53C06A0495B6A227eC3AdcF",
            },
            {
                // testLINK
                symbol: "LINK",
                decimals: 18,
                token: "0xd1590209769BC9eb645ee523A355CB7dB6BDAf33",
                gateway: "0x15dff465d7Bd75DFbd107924D9d674dA156328AD",
            },
            {
                // testUNI
                symbol: "UNI",
                decimals: 18,
                token: "0x8648d79572Eec4dEd03dE40C747564BD6ddB9091",
                gateway: "0x2d8E10901399586A3a8e04ec25f3a5548F51E91B",
            },
            {
                // testSUSHI
                symbol: "SUSHI",
                decimals: 18,
                token: "0xa901047Cb7F93d0D9d72334Bad1871082AFB4F0e",
                gateway: "0x9994aABFcAF8590095DbFaE44a6662E5D2013740",
            },
            {
                // testFTT
                symbol: "FTT",
                decimals: 18,
                token: "0x429940e4c699b9114C7fBf1c52d81704f7746Fd1",
                gateway: "0x63b8060Ad5317BA35F1b3c4dd8339294D0F580ee",
            },
            {
                // testROOK
                symbol: "ROOK",
                decimals: 18,
                token: "0x83E374aC386779CC5782509bD682E853b854eDF7",
                gateway: "0xf19970b7cF852F5d96B8B95A0d9828Ad1E84d749",
            },
            {
                // testBADGER
                symbol: "BADGER",
                decimals: 18,
                token: "0xC47C76D33fc7Bb57D6d2845E3B82558752cA5Fbe",
                gateway: "0x465a0b226a175F1392F324bcdaE046987b3ffcB9",
            },
            {
                // testKNC
                symbol: "KNC",
                decimals: 18,
                token: "0x8759CD7B4b926AdF4Da4dBeee76c97C05C071B46",
                gateway: "0xA32DB7c8b405c66457d7f11e17b2c270E44961a4",
            },
        ],

        config: {
            governanceAddress: "", // defaults to deployer
            mintAuthority: "0x44Bb4eF43408072bC888Afd1a5986ba0Ce35Cb54",

            tokenPrefix: "dev",
            standard: "ERC20",
            chainName: "BinanceSmartChain",
        },
    },

    fantomTestnet: {
        RenProxyAdmin: "0x5AF020172107C379a62D8C9B1614d3038186E0eA",

        GatewayRegistry: "0x5076a1F237531fa4dC8ad99bb68024aB6e1Ff701",
        BasicBridge: "0xcb6bD6B6c7D7415C0157e393Bb2B6Def7555d518",

        RenERC20LogicV1: "0xc771FA80dcF34E2AEdB71F870d1D04BD4A886dD0",
        MintGatewayLogicV2: "0x642fe4074a7C7c72251212B42532c48E7b97b67b",

        assets: [
            {
                // testBTC
                symbol: "BTC",
                decimals: 8,
                token: "0xe10d0253Aa8242d542265607cb9253FF8b8bf68e",
                gateway: "0xcCfFF6762Ce0Cad34Fda40300da72CB3c355C75f",
            },
            {
                // testZEC
                symbol: "ZEC",
                decimals: 8,
                token: "0xcEe1D5a9DD8bcD337eAbE9D53c0754E60C404c9F",
                gateway: "0x31A320f0Af9897eF1bf2599f681d727d377F24Bf",
            },
            {
                // testBCH
                symbol: "BCH",
                decimals: 8,
                token: "0x44d4ee551934cfC8aD7f9Ae20ce4bA58f7ed9D3C",
                gateway: "0xBef2E118E4138D6aF64Dd8cFa12918104F16A27E",
            },
            {
                // testDOGE
                symbol: "DOGE",
                decimals: 8,
                token: "0x6FCa0Ef511F2Dad8B51e55E3eB8E4404AFD2Feb0",
                gateway: "0xC50BDE3Cb2eedC62abB10247F5cE785Afb00245F",
            },
            {
                // testDGB
                symbol: "DGB",
                decimals: 8,
                token: "0x8e95761fF55Ec16ffc1845273387E17d829F3026",
                gateway: "0x15Bb312a96ca334348E98F6284B23D0Ce5Df1267",
            },
            {
                // testFIL
                symbol: "FIL",
                decimals: 18,
                token: "0xEd9780F478a28786A30C51d004972910bb8778fd",
                gateway: "0xD566bB681a231f5648D7cB0f09A89cb47fd09513",
            },
            {
                // testLUNA
                symbol: "LUNA",
                decimals: 6,
                token: "0x671c7f6319d04999dE58aF32075C50061383240F",
                gateway: "0x075046dE7D7e708da1593bB7476dE0547a3A057a",
            },

            {
                // testETH
                symbol: "ETH",
                token: "0xf72cDECe7eA0821F4789002701db1A662d399342",
                gateway: "0xc39ccf0E1644844358C657B9bF9B6e0D636Ae6Cc",
            },
            {
                // testBNB
                symbol: "BNB",
                decimals: 18,
                token: "0xf600DF44E1330b30Fab580BC4aEFCF031520a94A",
                gateway: "0x0E88eD2220519f60341e19bDdC37E76923ca41D3",
            },
            {
                // testMATIC
                symbol: "MATIC",
                decimals: 18,
                token: "0x0F323557938489Ffe83cf7DC951e879fCF8C48d8",
                gateway: "0x1243A19866718aB4B8bb69dA9B68e83841d0Fd68",
            },
            {
                // testAVAX
                symbol: "AVAX",
                decimals: 18,
                token: "0xa1ba3fD170833BaB86761780070D069b1F0033eB",
                gateway: "0x826EEC9eAe16720Db6C5E59DE8bfee030ce13a3a",
            },
            {
                // testArbETH
                symbol: "ArbETH",
                decimals: 18,
                token: "0x0f709956660FBc0DA83Efd32b213606Ea75F0e69",
                gateway: "0xaa2DC89fD6C1d82bd0AE3D979588906227Bf9BE1",
            },
            {
                // testDAI
                symbol: "DAI",
                decimals: 18,
                token: "0x5E5f602c982C196141D4eE0d1d05DAf3a9ABE5c9",
                gateway: "0xF61E124cA54EACF86507D0d7d927Fe38EeF8C100",
            },
            {
                // testREN
                symbol: "REN",
                decimals: 18,
                token: "0x20aA737F98e93aD5092EF2024E5d3a2c8E18edA4",
                gateway: "0x0522d5e6108Dc6F6A9B2f6BC233416FA040618ad",
            },
            {
                // testUSDC
                symbol: "USDC",
                decimals: 6,
                token: "0x7bCeCc655AEB8eb5a15f854490f643Bd34448508",
                gateway: "0x5f6d1b16246A3ba21D9036ceCcdB495ff65b09ED",
            },
            {
                // testUSDT
                symbol: "USDT",
                decimals: 6,
                token: "0x3ab7632A1cbEAbC1422F8fE24750C1ea66e169BC",
                gateway: "0x3657a1F93E3d55FED214bFA8039fA1D814a5fE3f",
            },
            {
                // testEURT
                symbol: "EURT",
                decimals: 6,
                token: "0xe2d8C484411D8fCD5Af35C081d71591bAFDceF5B",
                gateway: "0xb92D83260ecB1B2b30645f3C0c88a26E2747e329",
            },
            {
                // testBUSD
                symbol: "BUSD",
                decimals: 18,
                token: "0x79E28f786E6Ba3C7fa755D99191fe2e9b3d33d77",
                gateway: "0x3d7194D9e5812AAD72d0090485eFf721B76F2B39",
            },
            {
                // testMIM
                symbol: "MIM",
                decimals: 18,
                token: "0x38B31b1Ee77AAd541808D3c6052c4C64ca61Da72",
                gateway: "0x4f4DFF8e4985AA26d68A451920a0dCC4eAaB367f",
            },
            {
                // testCRV
                symbol: "CRV",
                decimals: 18,
                token: "0x0C3C180D731E7d0826f92F8f312456752b800b24",
                gateway: "0x5EBb45521B925A11B53C06A0495B6A227eC3AdcF",
            },
            {
                // testLINK
                symbol: "LINK",
                decimals: 18,
                token: "0xd1590209769BC9eb645ee523A355CB7dB6BDAf33",
                gateway: "0x15dff465d7Bd75DFbd107924D9d674dA156328AD",
            },
            {
                // testUNI
                symbol: "UNI",
                decimals: 18,
                token: "0x8648d79572Eec4dEd03dE40C747564BD6ddB9091",
                gateway: "0x2d8E10901399586A3a8e04ec25f3a5548F51E91B",
            },
            {
                // testSUSHI
                symbol: "SUSHI",
                decimals: 18,
                token: "0xa901047Cb7F93d0D9d72334Bad1871082AFB4F0e",
                gateway: "0x9994aABFcAF8590095DbFaE44a6662E5D2013740",
            },
            {
                // testFTT
                symbol: "FTT",
                decimals: 18,
                token: "0x429940e4c699b9114C7fBf1c52d81704f7746Fd1",
                gateway: "0x63b8060Ad5317BA35F1b3c4dd8339294D0F580ee",
            },
            {
                // testROOK
                symbol: "ROOK",
                decimals: 18,
                token: "0x83E374aC386779CC5782509bD682E853b854eDF7",
                gateway: "0xf19970b7cF852F5d96B8B95A0d9828Ad1E84d749",
            },
            {
                // testBADGER
                symbol: "BADGER",
                decimals: 18,
                token: "0xC47C76D33fc7Bb57D6d2845E3B82558752cA5Fbe",
                gateway: "0x465a0b226a175F1392F324bcdaE046987b3ffcB9",
            },
            {
                // testKNC
                symbol: "KNC",
                decimals: 18,
                token: "0x8759CD7B4b926AdF4Da4dBeee76c97C05C071B46",
                gateway: "0xA32DB7c8b405c66457d7f11e17b2c270E44961a4",
            },
        ],

        config: {
            governanceAddress: "", // defaults to deployer
            mintAuthority: "0x44Bb4eF43408072bC888Afd1a5986ba0Ce35Cb54",

            tokenPrefix: "test",
            standard: "ERC20",
            chainName: "Fantom",
        },
    },

    fantomMainnet: {
        RenProxyAdmin: "0xbdf27A048Ea859A20Fef6B956eaeeA4e80F2Bdc7",

        GatewayRegistry: "0xf36666C230Fa12333579b9Bd6196CB634D6BC506",
        BasicBridge: "0x82DF02A52E2e76C0c233367f2fE6c9cfe51578c5",

        RenERC20LogicV1: "0x3799006a87FDE3CCFC7666B3E6553B03ED341c2F",
        MintGatewayLogicV2: "0x6b8bB175c092DE7d81860B18DB360B734A2598e0",

        assets: [
            {
                // renBTC
                symbol: "BTC",
                decimals: 8,
                token: "0xDBf31dF14B66535aF65AaC99C32e9eA844e14501",
                gateway: "0x05Cadbf3128BcB7f2b89F3dD55E5B0a036a49e20",
            },
            {
                // renZEC
                symbol: "ZEC",
                decimals: 8,
                token: "0x31a0D1A199631D244761EEba67e8501296d2E383",
                gateway: "0x7986568375Af35B427f3f51389d73196967C356a",
            },
            {
                // renBCH
                symbol: "BCH",
                decimals: 8,
                token: "0xc3fEd6eB39178A541D274e6Fc748d48f0Ca01CC3",
                gateway: "0x06A2C5d79c66268610eEBBca10AFa17092860830",
            },
            {
                // renFIL
                symbol: "FIL",
                decimals: 18,
                token: "0xc4Ace9278e7E01755B670C0838c3106367639962",
                gateway: "0x4d59f628CB8e4670b779eAE22aF0c46DebC06695",
            },

            {
                // renDGB
                symbol: "DGB",
                decimals: 8,
                token: "0x2628568509E87c4429fBb5c664Ed11391BE1BD29",
                gateway: "0x677b23D0ffc82414B063accA197f74d791285952",
            },
            {
                // renDOGE
                symbol: "DOGE",
                decimals: 8,
                token: "0xcE829A89d4A55a63418bcC43F00145adef0eDB8E",
                gateway: "0x9FB2C0b19A9fee6d02E7Ea861C71503608B64d6A",
            },
            {
                // renLUNA
                symbol: "LUNA",
                decimals: 6,
                token: "0x7c7DAAF2dB46fEFd067f002a69FD0BE14AeB159f",
                gateway: "0x731Ea4Ba77fF184d89dBeB160A0078274Acbe9D2",
            },

            {
                // renETH
                symbol: "ETH",
                decimals: "18",
                token: "0x0694bf58a4F48C5970454CD4874218eBa843Cf3e",
                gateway: "0x85d0B90f56cEA09c4Be61a11C0367550dD865728",
            },
            {
                // renBNB
                symbol: "BNB",
                decimals: "18",
                token: "0xb8f7762192C840A5E4A6661D5Fa2D4d103E1d16a",
                gateway: "0xED2c7EE4f0E203B40B8a12D7CCcDc0100EAE25a3",
            },
            {
                // renMATIC
                symbol: "MATIC",
                decimals: "18",
                token: "0xe231f14Ab3170e691c8eE657cC353CaA5de60494",
                gateway: "0x4024E80a17C66346a8711A7fc9183Bde9d85258b",
            },
            {
                // renAVAX
                symbol: "AVAX",
                decimals: "18",
                token: "0xA9A731AEDA12A745B2F3f79b73DD0f20C2645fA3",
                gateway: "0x05c37FD270Ab99bC5A8599CFEcC1C4f6E95A9e7f",
            },
            {
                // renArbETH
                symbol: "ArbETH",
                decimals: "18",
                token: "0xE48a34Ca1d2EC3AC33fBeE29cAA03E459e87faB7",
                gateway: "0x2698Fc0d83c6227BFc7c4c30bEDbe0Ff7Eda84d8",
            },
            {
                // renDAI
                symbol: "DAI",
                decimals: "18",
                token: "0xEB9aC3e1C9C3F919804Bdc412e0a39b94D4C09d3",
                gateway: "0x3aa07C73307677fC3A7De6DB798076aa3DA5a05C",
            },
            {
                // renREN
                symbol: "REN",
                decimals: "18",
                token: "0x0fF1033de8F9229d69c10A2c6FACa20432c40d8c",
                gateway: "0x12a81D0Ef7f86f165a53bDBbE4c2878CC36C0a8C",
            },
            {
                // renUSDC
                symbol: "USDC",
                decimals: "6",
                token: "0x6E48a0c5386211837d99DacA233f45EF5aa5f594",
                gateway: "0x807bDd3Cc97CbC8D445B469f0e5aEFA9e6307E1e",
            },
            {
                // renUSDT
                symbol: "USDT",
                decimals: "6",
                token: "0xf55941e971302C634c586416c43469F3EaD5ad3e",
                gateway: "0x49c3d8b3686df2c8783b97ce6B99b7d15F57Ec18",
            },
            {
                // renEURT
                symbol: "EURT",
                decimals: "6",
                token: "0x9D9af63163697d38CC2eEBB4832C221f0331DfE5",
                gateway: "0xE4d866dCc9cB886ef427Cd5a45B21d49b2B33d14",
            },
            {
                // renBUSD
                symbol: "BUSD",
                decimals: "18",
                token: "0xd82a4f018eCF6be6E991C3c4a160C9758EC3338F",
                gateway: "0xE208e8A64f4Aa62D2787B67409976e220C2513e0",
            },
            {
                // renMIM
                symbol: "MIM",
                decimals: "18",
                token: "0x705Bc47EbA113Be1a66e20824a05a176aA3b5265",
                gateway: "0x06D329CC63C2F50D1A1e63Ab548e1A65658A97b8",
            },
            {
                // renCRV
                symbol: "CRV",
                decimals: "18",
                token: "0xD1d1c5C5055cBa2Bd9Dd2a3e99F2958D25845568",
                gateway: "0x54500d3CD7b78A539B2238989a198023186118Eb",
            },
            {
                // renLINK
                symbol: "LINK",
                decimals: "18",
                token: "0xCc1a9f25F2ADec39dA1A95e415b8B855caa0052a",
                gateway: "0x9913A9aEDB922A989a08E9a0E8529483e2d291e6",
            },
            {
                // renUNI
                symbol: "UNI",
                decimals: "18",
                token: "0x65FAAD3c8DCecC3D56AA76F809ea378A137ecE8a",
                gateway: "0xD3b2C376d0F899F535ED1e87eC843a4B40903A8e",
            },
            {
                // renSUSHI
                symbol: "SUSHI",
                decimals: "18",
                token: "0x33f87D7d65182eA6A21D2aBdFa46EC6Ab0F1075a",
                gateway: "0x55Bd297C3E37A95Eb3EF52f2ecFDA75dE0650648",
            },
            {
                // renFTT
                symbol: "FTT",
                decimals: "18",
                token: "0xB46b2c467950FF3c9012d5f3c1a975fa009a354d",
                gateway: "0x9123fC0f3a483bA341cAa14E4B021B5aB0e2bE32",
            },
            {
                // renROOK
                symbol: "ROOK",
                decimals: "18",
                token: "0x4f1593823909e86e4711aF182112457F024Be6ec",
                gateway: "0x62646A4B9BAdc028DE4EAA8d3ADd73465BF4C310",
            },
            {
                // renBADGER
                symbol: "BADGER",
                decimals: "18",
                token: "0x0D3A83566b7D5b85AB0DfEdfc66f358552ACEB78",
                gateway: "0x8d7306A6286d0C9ee9Aa327E33d037f241a4D2d8",
            },
            {
                // renKNC
                symbol: "KNC",
                decimals: "18",
                token: "0xCee9071A0A19310a670dBe3a300D6dcAf8ae96AD",
                gateway: "0xe58cf965FFE347AbD5D1497167E7EA8c5b610453",
            },
        ],

        config: {
            governanceAddress: "0x33024cfb7af11a7cb12ab0dedefc5dd5f430381f", // defaults to deployer
            mintAuthority: "0x7f64e4e4b2d7589eb0ac8439c0e639856aeceee7", // defaults to deployer

            tokenPrefix: "ren",
            standard: "ERC20",
            chainName: "Fantom",
        },
    },

    polygonTestnet: {
        RenProxyAdmin: "0xf1DA6f4A594553335EdeA6B1203a4B590c752E32",

        GatewayRegistry: "0x5076a1F237531fa4dC8ad99bb68024aB6e1Ff701",
        BasicBridge: "0xcb6bD6B6c7D7415C0157e393Bb2B6Def7555d518",

        RenERC20LogicV1: "0xB5072BE373a120d81c728e908Ed0710968fC247f",
        MintGatewayLogicV2: "0xa6e39c23fe29D15b0302E8ca234b365328fD49B5",

        assets: [
            {
                // testBTC
                symbol: "BTC",
                decimals: 8,
                token: "0x880Ad65DC5B3F33123382416351Eef98B4aAd7F1",
                gateway: "0x29Aa535b65b9C9A08bEdEbA8F9398aAf4832F98b",
            },
            {
                // testZEC
                symbol: "ZEC",
                decimals: 8,
                token: "0xEF685D1D44EA983927D9F8D67F77894fAEC92FCF",
                gateway: "0xF9fAE250B8dda539B9AFfEb606C8e2631976413E",
            },
            {
                // testBCH
                symbol: "BCH",
                decimals: 8,
                token: "0x6662449d05312Afe0Ca147Db6Eb155641077883F",
                gateway: "0x42c72B4090Ed0627c85ED878f699B2dB254beECa",
            },
            {
                // testDOGE
                symbol: "DOGE",
                decimals: 8,
                token: "0x799709491B1A26B867450bc68aC0d10979884aae",
                gateway: "0x6268002A734EDcDe6c2111ae339E0D92B1ED2Bfa",
            },
            {
                // testDGB
                symbol: "DGB",
                decimals: 8,
                token: "0xc96884276D70a1176b2fe102469348d224B0A1fa",
                gateway: "0x7352e7244899b7Cb5d803CC02741c8910d3B75de",
            },
            {
                // testFIL
                symbol: "FIL",
                decimals: 18,
                token: "0x9485Fd224a4B0075a47d26d49d0A6c5bd3dEfFD9",
                gateway: "0x3ce3266Ab11b6C23ea50dF8a777198d6dedAd85f",
            },
            {
                // testLUNA
                symbol: "LUNA",
                decimals: 6,
                token: "0xF5DC123b4622b17511cCf3251Dc00d8adC620A6D",
                gateway: "0xb98E6dA48F27e86D32dc9ab8721ce19c95E206b8",
            },

            {
                // testETH
                symbol: "ETH",
                token: "0xf72cDECe7eA0821F4789002701db1A662d399342",
                gateway: "0xc39ccf0E1644844358C657B9bF9B6e0D636Ae6Cc",
            },
            {
                // testBNB
                symbol: "BNB",
                decimals: 18,
                token: "0xf600DF44E1330b30Fab580BC4aEFCF031520a94A",
                gateway: "0x0E88eD2220519f60341e19bDdC37E76923ca41D3",
            },
            {
                // testFTM
                symbol: "FTM",
                decimals: 18,
                token: "0x6446E04f4829FcbAD012C933d2FB65B01CE62EA2",
                gateway: "0xa9d345a20fD38Da52173198C3FB7276a8F0Fb36E",
            },
            {
                // testAVAX
                symbol: "AVAX",
                decimals: 18,
                token: "0xa1ba3fD170833BaB86761780070D069b1F0033eB",
                gateway: "0x826EEC9eAe16720Db6C5E59DE8bfee030ce13a3a",
            },
            {
                // testArbETH
                symbol: "ArbETH",
                decimals: 18,
                token: "0x0f709956660FBc0DA83Efd32b213606Ea75F0e69",
                gateway: "0xaa2DC89fD6C1d82bd0AE3D979588906227Bf9BE1",
            },
            {
                // testDAI
                symbol: "DAI",
                decimals: 18,
                token: "0x5E5f602c982C196141D4eE0d1d05DAf3a9ABE5c9",
                gateway: "0xF61E124cA54EACF86507D0d7d927Fe38EeF8C100",
            },
            {
                // testREN
                symbol: "REN",
                decimals: 18,
                token: "0x20aA737F98e93aD5092EF2024E5d3a2c8E18edA4",
                gateway: "0x0522d5e6108Dc6F6A9B2f6BC233416FA040618ad",
            },
            {
                // testUSDC
                symbol: "USDC",
                decimals: 6,
                token: "0x7bCeCc655AEB8eb5a15f854490f643Bd34448508",
                gateway: "0x5f6d1b16246A3ba21D9036ceCcdB495ff65b09ED",
            },
            {
                // testUSDT
                symbol: "USDT",
                decimals: 6,
                token: "0x3ab7632A1cbEAbC1422F8fE24750C1ea66e169BC",
                gateway: "0x3657a1F93E3d55FED214bFA8039fA1D814a5fE3f",
            },
            {
                // testEURT
                symbol: "EURT",
                decimals: 6,
                token: "0xe2d8C484411D8fCD5Af35C081d71591bAFDceF5B",
                gateway: "0xb92D83260ecB1B2b30645f3C0c88a26E2747e329",
            },
            {
                // testBUSD
                symbol: "BUSD",
                decimals: 18,
                token: "0x79E28f786E6Ba3C7fa755D99191fe2e9b3d33d77",
                gateway: "0x3d7194D9e5812AAD72d0090485eFf721B76F2B39",
            },
            {
                // testMIM
                symbol: "MIM",
                decimals: 18,
                token: "0x38B31b1Ee77AAd541808D3c6052c4C64ca61Da72",
                gateway: "0x4f4DFF8e4985AA26d68A451920a0dCC4eAaB367f",
            },
            {
                // testCRV
                symbol: "CRV",
                decimals: 18,
                token: "0x0C3C180D731E7d0826f92F8f312456752b800b24",
                gateway: "0x5EBb45521B925A11B53C06A0495B6A227eC3AdcF",
            },
            {
                // testLINK
                symbol: "LINK",
                decimals: 18,
                token: "0xd1590209769BC9eb645ee523A355CB7dB6BDAf33",
                gateway: "0x15dff465d7Bd75DFbd107924D9d674dA156328AD",
            },
            {
                // testUNI
                symbol: "UNI",
                decimals: 18,
                token: "0x8648d79572Eec4dEd03dE40C747564BD6ddB9091",
                gateway: "0x2d8E10901399586A3a8e04ec25f3a5548F51E91B",
            },
            {
                // testSUSHI
                symbol: "SUSHI",
                decimals: 18,
                token: "0xa901047Cb7F93d0D9d72334Bad1871082AFB4F0e",
                gateway: "0x9994aABFcAF8590095DbFaE44a6662E5D2013740",
            },
            {
                // testFTT
                symbol: "FTT",
                decimals: 18,
                token: "0x429940e4c699b9114C7fBf1c52d81704f7746Fd1",
                gateway: "0x63b8060Ad5317BA35F1b3c4dd8339294D0F580ee",
            },
            {
                // testROOK
                symbol: "ROOK",
                decimals: 18,
                token: "0x83E374aC386779CC5782509bD682E853b854eDF7",
                gateway: "0xf19970b7cF852F5d96B8B95A0d9828Ad1E84d749",
            },
            {
                // testBADGER
                symbol: "BADGER",
                decimals: 18,
                token: "0xC47C76D33fc7Bb57D6d2845E3B82558752cA5Fbe",
                gateway: "0x465a0b226a175F1392F324bcdaE046987b3ffcB9",
            },
            {
                // testKNC
                symbol: "KNC",
                decimals: 18,
                token: "0x8759CD7B4b926AdF4Da4dBeee76c97C05C071B46",
                gateway: "0xA32DB7c8b405c66457d7f11e17b2c270E44961a4",
            },
        ],

        config: {
            governanceAddress: "", // defaults to deployer
            mintAuthority: "0x44Bb4eF43408072bC888Afd1a5986ba0Ce35Cb54",

            tokenPrefix: "test",
            standard: "ERC20",
            chainName: "Polygon",
        },
    },

    polygonMainnet: {
        RenProxyAdmin: "0xbdf27A048Ea859A20Fef6B956eaeeA4e80F2Bdc7",

        GatewayRegistry: "0xf36666C230Fa12333579b9Bd6196CB634D6BC506",
        BasicBridge: "0x82DF02A52E2e76C0c233367f2fE6c9cfe51578c5",

        RenERC20LogicV1: "0x3799006a87FDE3CCFC7666B3E6553B03ED341c2F",
        MintGatewayLogicV2: "0x6b8bB175c092DE7d81860B18DB360B734A2598e0",

        assets: [
            {
                // renBTC
                symbol: "BTC",
                decimals: 8,
                token: "0xDBf31dF14B66535aF65AaC99C32e9eA844e14501",
                gateway: "0x05Cadbf3128BcB7f2b89F3dD55E5B0a036a49e20",
            },
            {
                // renZEC
                symbol: "ZEC",
                decimals: 8,
                token: "0x31a0D1A199631D244761EEba67e8501296d2E383",
                gateway: "0x7986568375Af35B427f3f51389d73196967C356a",
            },
            {
                // renBCH
                symbol: "BCH",
                decimals: 8,
                token: "0xc3fEd6eB39178A541D274e6Fc748d48f0Ca01CC3",
                gateway: "0x06A2C5d79c66268610eEBBca10AFa17092860830",
            },
            {
                // renFIL
                symbol: "FIL",
                decimals: 18,
                token: "0xc4Ace9278e7E01755B670C0838c3106367639962",
                gateway: "0x4d59f628CB8e4670b779eAE22aF0c46DebC06695",
            },
            {
                // renDGB
                symbol: "DGB",
                decimals: 8,
                token: "0x2628568509E87c4429fBb5c664Ed11391BE1BD29",
                gateway: "0x677b23D0ffc82414B063accA197f74d791285952",
            },
            {
                // renDOGE
                symbol: "DOGE",
                decimals: 8,
                token: "0xcE829A89d4A55a63418bcC43F00145adef0eDB8E",
                gateway: "0x9FB2C0b19A9fee6d02E7Ea861C71503608B64d6A",
            },
            {
                // renLUNA
                symbol: "LUNA",
                decimals: 6,
                token: "0x7c7DAAF2dB46fEFd067f002a69FD0BE14AeB159f",
                gateway: "0x731Ea4Ba77fF184d89dBeB160A0078274Acbe9D2",
            },

            {
                // renETH
                symbol: "ETH",
                decimals: "18",
                token: "0x0694bf58a4F48C5970454CD4874218eBa843Cf3e",
                gateway: "0x85d0B90f56cEA09c4Be61a11C0367550dD865728",
            },
            {
                // renBNB
                symbol: "BNB",
                decimals: "18",
                token: "0xb8f7762192C840A5E4A6661D5Fa2D4d103E1d16a",
                gateway: "0xED2c7EE4f0E203B40B8a12D7CCcDc0100EAE25a3",
            },
            {
                // renFTM
                symbol: "FTM",
                decimals: "18",
                token: "0xF89B530176D809be9ED21Dd025EFb291D461e67F",
                gateway: "0x4D374735E0CB1B2C6773ADD9991662333983FD67",
            },
            {
                // renAVAX
                symbol: "AVAX",
                decimals: "18",
                token: "0xA9A731AEDA12A745B2F3f79b73DD0f20C2645fA3",
                gateway: "0x05c37FD270Ab99bC5A8599CFEcC1C4f6E95A9e7f",
            },
            {
                // renArbETH
                symbol: "ArbETH",
                decimals: "18",
                token: "0xE48a34Ca1d2EC3AC33fBeE29cAA03E459e87faB7",
                gateway: "0x2698Fc0d83c6227BFc7c4c30bEDbe0Ff7Eda84d8",
            },
            {
                // renDAI
                symbol: "DAI",
                decimals: "18",
                token: "0xEB9aC3e1C9C3F919804Bdc412e0a39b94D4C09d3",
                gateway: "0x3aa07C73307677fC3A7De6DB798076aa3DA5a05C",
            },
            {
                // renREN
                symbol: "REN",
                decimals: "18",
                token: "0x0fF1033de8F9229d69c10A2c6FACa20432c40d8c",
                gateway: "0x12a81D0Ef7f86f165a53bDBbE4c2878CC36C0a8C",
            },
            {
                // renUSDC
                symbol: "USDC",
                decimals: "6",
                token: "0x6E48a0c5386211837d99DacA233f45EF5aa5f594",
                gateway: "0x807bDd3Cc97CbC8D445B469f0e5aEFA9e6307E1e",
            },
            {
                // renUSDT
                symbol: "USDT",
                decimals: "6",
                token: "0xf55941e971302C634c586416c43469F3EaD5ad3e",
                gateway: "0x49c3d8b3686df2c8783b97ce6B99b7d15F57Ec18",
            },
            {
                // renEURT
                symbol: "EURT",
                decimals: "6",
                token: "0x9D9af63163697d38CC2eEBB4832C221f0331DfE5",
                gateway: "0xE4d866dCc9cB886ef427Cd5a45B21d49b2B33d14",
            },
            {
                // renBUSD
                symbol: "BUSD",
                decimals: "18",
                token: "0xd82a4f018eCF6be6E991C3c4a160C9758EC3338F",
                gateway: "0xE208e8A64f4Aa62D2787B67409976e220C2513e0",
            },
            {
                // renMIM
                symbol: "MIM",
                decimals: "18",
                token: "0x705Bc47EbA113Be1a66e20824a05a176aA3b5265",
                gateway: "0x06D329CC63C2F50D1A1e63Ab548e1A65658A97b8",
            },
            {
                // renCRV
                symbol: "CRV",
                decimals: "18",
                token: "0xD1d1c5C5055cBa2Bd9Dd2a3e99F2958D25845568",
                gateway: "0x54500d3CD7b78A539B2238989a198023186118Eb",
            },
            {
                // renLINK
                symbol: "LINK",
                decimals: "18",
                token: "0xCc1a9f25F2ADec39dA1A95e415b8B855caa0052a",
                gateway: "0x9913A9aEDB922A989a08E9a0E8529483e2d291e6",
            },
            {
                // renUNI
                symbol: "UNI",
                decimals: "18",
                token: "0x65FAAD3c8DCecC3D56AA76F809ea378A137ecE8a",
                gateway: "0xD3b2C376d0F899F535ED1e87eC843a4B40903A8e",
            },
            {
                // renSUSHI
                symbol: "SUSHI",
                decimals: "18",
                token: "0x33f87D7d65182eA6A21D2aBdFa46EC6Ab0F1075a",
                gateway: "0x55Bd297C3E37A95Eb3EF52f2ecFDA75dE0650648",
            },
            {
                // renFTT
                symbol: "FTT",
                decimals: "18",
                token: "0xB46b2c467950FF3c9012d5f3c1a975fa009a354d",
                gateway: "0x9123fC0f3a483bA341cAa14E4B021B5aB0e2bE32",
            },
            {
                // renROOK
                symbol: "ROOK",
                decimals: "18",
                token: "0x4f1593823909e86e4711aF182112457F024Be6ec",
                gateway: "0x62646A4B9BAdc028DE4EAA8d3ADd73465BF4C310",
            },
            {
                // renBADGER
                symbol: "BADGER",
                decimals: "18",
                token: "0x0D3A83566b7D5b85AB0DfEdfc66f358552ACEB78",
                gateway: "0x8d7306A6286d0C9ee9Aa327E33d037f241a4D2d8",
            },
            {
                // renKNC
                symbol: "KNC",
                decimals: "18",
                token: "0xCee9071A0A19310a670dBe3a300D6dcAf8ae96AD",
                gateway: "0xe58cf965FFE347AbD5D1497167E7EA8c5b610453",
            },
        ],

        config: {
            governanceAddress: "0x33024CFB7aF11A7Cb12AB0dedeFC5dD5f430381f", // defaults to deployer
            mintAuthority: "0x7f64e4e4b2d7589eb0ac8439c0e639856aeceee7", // defaults to deployer

            tokenPrefix: "ren",
            standard: "ERC20",
            chainName: "Polygon",
        },
    },

    avalancheTestnet: {
        RenProxyAdmin: "0xf1DA6f4A594553335EdeA6B1203a4B590c752E32",

        GatewayRegistry: "0x5076a1F237531fa4dC8ad99bb68024aB6e1Ff701",
        BasicBridge: "0xcb6bD6B6c7D7415C0157e393Bb2B6Def7555d518",

        RenERC20LogicV1: "0xB5072BE373a120d81c728e908Ed0710968fC247f",
        MintGatewayLogicV2: "0x5e3c8B0F7229f1F1873267B6811465fEF73d53CA",

        assets: [
            {
                // testBTC
                symbol: "BTC",
                decimals: 8,
                token: "0x880Ad65DC5B3F33123382416351Eef98B4aAd7F1",
                gateway: "0x29Aa535b65b9C9A08bEdEbA8F9398aAf4832F98b",
            },
            {
                // testZEC
                symbol: "ZEC",
                decimals: 8,
                token: "0xEF685D1D44EA983927D9F8D67F77894fAEC92FCF",
                gateway: "0xF9fAE250B8dda539B9AFfEb606C8e2631976413E",
            },
            {
                // testBCH
                symbol: "BCH",
                decimals: 8,
                token: "0x6662449d05312Afe0Ca147Db6Eb155641077883F",
                gateway: "0x42c72B4090Ed0627c85ED878f699B2dB254beECa",
            },
            {
                // testDOGE
                symbol: "DOGE",
                decimals: 8,
                token: "0x799709491B1A26B867450bc68aC0d10979884aae",
                gateway: "0x6268002A734EDcDe6c2111ae339E0D92B1ED2Bfa",
            },
            {
                // testDGB
                symbol: "DGB",
                decimals: 8,
                token: "0xc96884276D70a1176b2fe102469348d224B0A1fa",
                gateway: "0x7352e7244899b7Cb5d803CC02741c8910d3B75de",
            },
            {
                // testFIL
                symbol: "FIL",
                decimals: 18,
                token: "0xcf3B06E64dc24CCd4Add10E6f97D8EF0438D6e54",
                gateway: "0xec1fbb79bcA682EF2CCcBE6194Ab62413e6c7895",
            },
            {
                // testLUNA
                symbol: "LUNA",
                decimals: 6,
                token: "0x59fE85a45D2ecBDB1499dab315A109De8E4e2DAd",
                gateway: "0xA0b04e9D8B883626769Ac23aF4fb019e34B944C4",
            },

            {
                // testETH
                symbol: "ETH",
                token: "0xf72cDECe7eA0821F4789002701db1A662d399342",
                gateway: "0xc39ccf0E1644844358C657B9bF9B6e0D636Ae6Cc",
            },
            {
                // testBNB
                symbol: "BNB",
                decimals: 18,
                token: "0xf600DF44E1330b30Fab580BC4aEFCF031520a94A",
                gateway: "0x0E88eD2220519f60341e19bDdC37E76923ca41D3",
            },
            {
                // testMATIC
                symbol: "MATIC",
                decimals: 18,
                token: "0x0F323557938489Ffe83cf7DC951e879fCF8C48d8",
                gateway: "0x1243A19866718aB4B8bb69dA9B68e83841d0Fd68",
            },
            {
                // testFTM
                symbol: "FTM",
                decimals: 18,
                token: "0x6446E04f4829FcbAD012C933d2FB65B01CE62EA2",
                gateway: "0xa9d345a20fD38Da52173198C3FB7276a8F0Fb36E",
            },
            {
                // testArbETH
                symbol: "ArbETH",
                decimals: 18,
                token: "0x0f709956660FBc0DA83Efd32b213606Ea75F0e69",
                gateway: "0xaa2DC89fD6C1d82bd0AE3D979588906227Bf9BE1",
            },
            {
                // testDAI
                symbol: "DAI",
                decimals: 18,
                token: "0x5E5f602c982C196141D4eE0d1d05DAf3a9ABE5c9",
                gateway: "0xF61E124cA54EACF86507D0d7d927Fe38EeF8C100",
            },
            {
                // testREN
                symbol: "REN",
                decimals: 18,
                token: "0x20aA737F98e93aD5092EF2024E5d3a2c8E18edA4",
                gateway: "0x0522d5e6108Dc6F6A9B2f6BC233416FA040618ad",
            },
            {
                // testUSDC
                symbol: "USDC",
                decimals: 6,
                token: "0x7bCeCc655AEB8eb5a15f854490f643Bd34448508",
                gateway: "0x5f6d1b16246A3ba21D9036ceCcdB495ff65b09ED",
            },
            {
                // testUSDT
                symbol: "USDT",
                decimals: 6,
                token: "0x3ab7632A1cbEAbC1422F8fE24750C1ea66e169BC",
                gateway: "0x3657a1F93E3d55FED214bFA8039fA1D814a5fE3f",
            },
            {
                // testEURT
                symbol: "EURT",
                decimals: 6,
                token: "0xe2d8C484411D8fCD5Af35C081d71591bAFDceF5B",
                gateway: "0xb92D83260ecB1B2b30645f3C0c88a26E2747e329",
            },
            {
                // testBUSD
                symbol: "BUSD",
                decimals: 18,
                token: "0x79E28f786E6Ba3C7fa755D99191fe2e9b3d33d77",
                gateway: "0x3d7194D9e5812AAD72d0090485eFf721B76F2B39",
            },
            {
                // testMIM
                symbol: "MIM",
                decimals: 18,
                token: "0x38B31b1Ee77AAd541808D3c6052c4C64ca61Da72",
                gateway: "0x4f4DFF8e4985AA26d68A451920a0dCC4eAaB367f",
            },
            {
                // testCRV
                symbol: "CRV",
                decimals: 18,
                token: "0x0C3C180D731E7d0826f92F8f312456752b800b24",
                gateway: "0x5EBb45521B925A11B53C06A0495B6A227eC3AdcF",
            },
            {
                // testLINK
                symbol: "LINK",
                decimals: 18,
                token: "0xd1590209769BC9eb645ee523A355CB7dB6BDAf33",
                gateway: "0x15dff465d7Bd75DFbd107924D9d674dA156328AD",
            },
            {
                // testUNI
                symbol: "UNI",
                decimals: 18,
                token: "0x8648d79572Eec4dEd03dE40C747564BD6ddB9091",
                gateway: "0x2d8E10901399586A3a8e04ec25f3a5548F51E91B",
            },
            {
                // testSUSHI
                symbol: "SUSHI",
                decimals: 18,
                token: "0xa901047Cb7F93d0D9d72334Bad1871082AFB4F0e",
                gateway: "0x9994aABFcAF8590095DbFaE44a6662E5D2013740",
            },
            {
                // testFTT
                symbol: "FTT",
                decimals: 18,
                token: "0x429940e4c699b9114C7fBf1c52d81704f7746Fd1",
                gateway: "0x63b8060Ad5317BA35F1b3c4dd8339294D0F580ee",
            },
            {
                // testROOK
                symbol: "ROOK",
                decimals: 18,
                token: "0x83E374aC386779CC5782509bD682E853b854eDF7",
                gateway: "0xf19970b7cF852F5d96B8B95A0d9828Ad1E84d749",
            },
            {
                // testBADGER
                symbol: "BADGER",
                decimals: 18,
                token: "0xC47C76D33fc7Bb57D6d2845E3B82558752cA5Fbe",
                gateway: "0x465a0b226a175F1392F324bcdaE046987b3ffcB9",
            },
            {
                // testKNC
                symbol: "KNC",
                decimals: 18,
                token: "0x8759CD7B4b926AdF4Da4dBeee76c97C05C071B46",
                gateway: "0xA32DB7c8b405c66457d7f11e17b2c270E44961a4",
            },
        ],

        config: {
            governanceAddress: "", // defaults to deployer
            mintAuthority: "0x44Bb4eF43408072bC888Afd1a5986ba0Ce35Cb54",

            tokenPrefix: "test",
            standard: "ERC20",
            chainName: "Avalanche",
        },
    },

    avalancheMainnet: {
        RenProxyAdmin: "0xbdf27A048Ea859A20Fef6B956eaeeA4e80F2Bdc7",

        GatewayRegistry: "0xf36666C230Fa12333579b9Bd6196CB634D6BC506",
        BasicBridge: "0x82DF02A52E2e76C0c233367f2fE6c9cfe51578c5",

        RenERC20LogicV1: "0x3799006a87FDE3CCFC7666B3E6553B03ED341c2F",
        MintGatewayLogicV2: "0x6b8bB175c092DE7d81860B18DB360B734A2598e0",

        assets: [
            {
                // renBTC
                symbol: "BTC",
                decimals: 8,
                token: "0xDBf31dF14B66535aF65AaC99C32e9eA844e14501",
                gateway: "0x05Cadbf3128BcB7f2b89F3dD55E5B0a036a49e20",
            },
            {
                // renZEC
                symbol: "ZEC",
                decimals: 8,
                token: "0x31a0D1A199631D244761EEba67e8501296d2E383",
                gateway: "0x7986568375Af35B427f3f51389d73196967C356a",
            },
            {
                // renBCH
                symbol: "BCH",
                decimals: 8,
                token: "0xc3fEd6eB39178A541D274e6Fc748d48f0Ca01CC3",
                gateway: "0x06A2C5d79c66268610eEBBca10AFa17092860830",
            },
            {
                // renFIL
                symbol: "FIL",
                decimals: 18,
                token: "0xc4Ace9278e7E01755B670C0838c3106367639962",
                gateway: "0x4d59f628CB8e4670b779eAE22aF0c46DebC06695",
            },
            {
                // renDGB
                symbol: "DGB",
                decimals: 8,
                token: "0x2628568509E87c4429fBb5c664Ed11391BE1BD29",
                gateway: "0x677b23D0ffc82414B063accA197f74d791285952",
            },
            {
                // renDOGE
                symbol: "DOGE",
                decimals: 8,
                token: "0xcE829A89d4A55a63418bcC43F00145adef0eDB8E",
                gateway: "0x9FB2C0b19A9fee6d02E7Ea861C71503608B64d6A",
            },
            {
                // renLUNA
                symbol: "LUNA",
                decimals: 6,
                token: "0x7c7DAAF2dB46fEFd067f002a69FD0BE14AeB159f",
                gateway: "0x731Ea4Ba77fF184d89dBeB160A0078274Acbe9D2",
            },

            {
                // renETH
                symbol: "ETH",
                decimals: "18",
                token: "0x0694bf58a4F48C5970454CD4874218eBa843Cf3e",
                gateway: "0x85d0B90f56cEA09c4Be61a11C0367550dD865728",
            },
            {
                // renBNB
                symbol: "BNB",
                decimals: "18",
                token: "0xb8f7762192C840A5E4A6661D5Fa2D4d103E1d16a",
                gateway: "0xED2c7EE4f0E203B40B8a12D7CCcDc0100EAE25a3",
            },
            {
                // renMATIC
                symbol: "MATIC",
                decimals: "18",
                token: "0xe231f14Ab3170e691c8eE657cC353CaA5de60494",
                gateway: "0x4024E80a17C66346a8711A7fc9183Bde9d85258b",
            },
            {
                // renFTM
                symbol: "FTM",
                decimals: "18",
                token: "0xF89B530176D809be9ED21Dd025EFb291D461e67F",
                gateway: "0x4D374735E0CB1B2C6773ADD9991662333983FD67",
            },
            {
                // renArbETH
                symbol: "ArbETH",
                decimals: "18",
                token: "0xE48a34Ca1d2EC3AC33fBeE29cAA03E459e87faB7",
                gateway: "0x2698Fc0d83c6227BFc7c4c30bEDbe0Ff7Eda84d8",
            },
            {
                // renDAI
                symbol: "DAI",
                decimals: "18",
                token: "0xEB9aC3e1C9C3F919804Bdc412e0a39b94D4C09d3",
                gateway: "0x3aa07C73307677fC3A7De6DB798076aa3DA5a05C",
            },
            {
                // renREN
                symbol: "REN",
                decimals: "18",
                token: "0x0fF1033de8F9229d69c10A2c6FACa20432c40d8c",
                gateway: "0x12a81D0Ef7f86f165a53bDBbE4c2878CC36C0a8C",
            },
            {
                // renUSDC
                symbol: "USDC",
                decimals: "6",
                token: "0x6E48a0c5386211837d99DacA233f45EF5aa5f594",
                gateway: "0x807bDd3Cc97CbC8D445B469f0e5aEFA9e6307E1e",
            },
            {
                // renUSDT
                symbol: "USDT",
                decimals: "6",
                token: "0xf55941e971302C634c586416c43469F3EaD5ad3e",
                gateway: "0x49c3d8b3686df2c8783b97ce6B99b7d15F57Ec18",
            },
            {
                // renEURT
                symbol: "EURT",
                decimals: "6",
                token: "0x9D9af63163697d38CC2eEBB4832C221f0331DfE5",
                gateway: "0xE4d866dCc9cB886ef427Cd5a45B21d49b2B33d14",
            },
            {
                // renBUSD
                symbol: "BUSD",
                decimals: "18",
                token: "0xd82a4f018eCF6be6E991C3c4a160C9758EC3338F",
                gateway: "0xE208e8A64f4Aa62D2787B67409976e220C2513e0",
            },
            {
                // renMIM
                symbol: "MIM",
                decimals: "18",
                token: "0x705Bc47EbA113Be1a66e20824a05a176aA3b5265",
                gateway: "0x06D329CC63C2F50D1A1e63Ab548e1A65658A97b8",
            },
            {
                // renCRV
                symbol: "CRV",
                decimals: "18",
                token: "0xD1d1c5C5055cBa2Bd9Dd2a3e99F2958D25845568",
                gateway: "0x54500d3CD7b78A539B2238989a198023186118Eb",
            },
            {
                // renLINK
                symbol: "LINK",
                decimals: "18",
                token: "0xCc1a9f25F2ADec39dA1A95e415b8B855caa0052a",
                gateway: "0x9913A9aEDB922A989a08E9a0E8529483e2d291e6",
            },
            {
                // renUNI
                symbol: "UNI",
                decimals: "18",
                token: "0x65FAAD3c8DCecC3D56AA76F809ea378A137ecE8a",
                gateway: "0xD3b2C376d0F899F535ED1e87eC843a4B40903A8e",
            },
            {
                // renSUSHI
                symbol: "SUSHI",
                decimals: "18",
                token: "0x33f87D7d65182eA6A21D2aBdFa46EC6Ab0F1075a",
                gateway: "0x55Bd297C3E37A95Eb3EF52f2ecFDA75dE0650648",
            },
            {
                // renFTT
                symbol: "FTT",
                decimals: "18",
                token: "0xB46b2c467950FF3c9012d5f3c1a975fa009a354d",
                gateway: "0x9123fC0f3a483bA341cAa14E4B021B5aB0e2bE32",
            },
            {
                // renROOK
                symbol: "ROOK",
                decimals: "18",
                token: "0x4f1593823909e86e4711aF182112457F024Be6ec",
                gateway: "0x62646A4B9BAdc028DE4EAA8d3ADd73465BF4C310",
            },
            {
                // renBADGER
                symbol: "BADGER",
                decimals: "18",
                token: "0x0D3A83566b7D5b85AB0DfEdfc66f358552ACEB78",
                gateway: "0x8d7306A6286d0C9ee9Aa327E33d037f241a4D2d8",
            },
            {
                // renKNC
                symbol: "KNC",
                decimals: "18",
                token: "0xCee9071A0A19310a670dBe3a300D6dcAf8ae96AD",
                gateway: "0xe58cf965FFE347AbD5D1497167E7EA8c5b610453",
            },
        ],

        config: {
            governanceAddress: "0x33024cfb7af11a7cb12ab0dedefc5dd5f430381f", // defaults to deployer
            mintAuthority: "0x7f64e4e4b2d7589eb0ac8439c0e639856aeceee7", // defaults to deployer

            tokenPrefix: "ren",
            standard: "ERC20",
            chainName: "Avalanche",
        },
    },

    arbitrumTestnet: {
        RenProxyAdmin: "0xf1DA6f4A594553335EdeA6B1203a4B590c752E32",

        GatewayRegistry: "0x5076a1F237531fa4dC8ad99bb68024aB6e1Ff701",
        BasicBridge: "0xcb6bD6B6c7D7415C0157e393Bb2B6Def7555d518",

        RenERC20LogicV1: "0x3083E5BA36C6b42ca93c22C803013A4539eEdc7f",
        MintGatewayLogicV2: "0xe9Ab97d707ad9A67bd01345233C3c179f42F9aD0",

        assets: [
            {
                // testBTC
                symbol: "BTC",
                decimals: 8,
                token: "0x43D828c81Ea229f5F4601D12C5EC00133bD17dE1",
                gateway: "0xF47dff1B8442f6f37491DF74c058904AB2d306fd",
            },
            {
                // testZEC
                symbol: "ZEC",
                decimals: 8,
                token: "0xb98E6dA48F27e86D32dc9ab8721ce19c95E206b8",
                gateway: "0x83785ad4B3B5255Af409Da3e34052ca5eaa8f9d5",
            },
            {
                // testBCH
                symbol: "BCH",
                decimals: 8,
                token: "0x5AF020172107C379a62D8C9B1614d3038186E0eA",
                gateway: "0x07deB3917d234f787AEd86E0c88E829277D4a33b",
            },
            {
                // testDOGE
                symbol: "DOGE",
                decimals: 8,
                token: "0xBB25c81031ae580B0029dA1859c625e87e5468cD",
                gateway: "0xd46aBBa0936915d8B34c6a5d4687241413e1B142",
            },
            {
                // testDGB
                symbol: "DGB",
                decimals: 8,
                token: "0xec1fbb79bcA682EF2CCcBE6194Ab62413e6c7895",
                gateway: "0x84c9eb3c7e21714dfEe7c1AA91800a8B365daa9E",
            },
            {
                // testFIL
                symbol: "FIL",
                decimals: 18,
                token: "0x527C7f02588D0d1fba5059d3D69DF55E44186F9e",
                gateway: "0xcD2D8f9E9f6A0Ef47FD3F8dDD011ee2B12Ae91D9",
            },
            {
                // testLUNA
                symbol: "LUNA",
                decimals: 6,
                token: "0xCa920A213f8f20406612eB02AA00EDDdAf5005EF",
                gateway: "0xa6e39c23fe29D15b0302E8ca234b365328fD49B5",
            },

            {
                // testETH
                symbol: "ETH",
                token: "0xf72cDECe7eA0821F4789002701db1A662d399342",
                gateway: "0xc39ccf0E1644844358C657B9bF9B6e0D636Ae6Cc",
            },
            {
                // testBNB
                symbol: "BNB",
                decimals: 18,
                token: "0xf600DF44E1330b30Fab580BC4aEFCF031520a94A",
                gateway: "0x0E88eD2220519f60341e19bDdC37E76923ca41D3",
            },
            {
                // testMATIC
                symbol: "MATIC",
                decimals: 18,
                token: "0x0F323557938489Ffe83cf7DC951e879fCF8C48d8",
                gateway: "0x1243A19866718aB4B8bb69dA9B68e83841d0Fd68",
            },
            {
                // testFTM
                symbol: "FTM",
                decimals: 18,
                token: "0x6446E04f4829FcbAD012C933d2FB65B01CE62EA2",
                gateway: "0xa9d345a20fD38Da52173198C3FB7276a8F0Fb36E",
            },
            {
                // testAVAX
                symbol: "AVAX",
                decimals: 18,
                token: "0xa1ba3fD170833BaB86761780070D069b1F0033eB",
                gateway: "0x826EEC9eAe16720Db6C5E59DE8bfee030ce13a3a",
            },
            {
                // testDAI
                symbol: "DAI",
                decimals: 18,
                token: "0x5E5f602c982C196141D4eE0d1d05DAf3a9ABE5c9",
                gateway: "0xF61E124cA54EACF86507D0d7d927Fe38EeF8C100",
            },
            {
                // testREN
                symbol: "REN",
                decimals: 18,
                token: "0x20aA737F98e93aD5092EF2024E5d3a2c8E18edA4",
                gateway: "0x0522d5e6108Dc6F6A9B2f6BC233416FA040618ad",
            },
            {
                // testUSDC
                symbol: "USDC",
                decimals: 6,
                token: "0x7bCeCc655AEB8eb5a15f854490f643Bd34448508",
                gateway: "0x5f6d1b16246A3ba21D9036ceCcdB495ff65b09ED",
            },
            {
                // testUSDT
                symbol: "USDT",
                decimals: 6,
                token: "0x3ab7632A1cbEAbC1422F8fE24750C1ea66e169BC",
                gateway: "0x3657a1F93E3d55FED214bFA8039fA1D814a5fE3f",
            },
            {
                // testEURT
                symbol: "EURT",
                decimals: 6,
                token: "0xe2d8C484411D8fCD5Af35C081d71591bAFDceF5B",
                gateway: "0xb92D83260ecB1B2b30645f3C0c88a26E2747e329",
            },
            {
                // testBUSD
                symbol: "BUSD",
                decimals: 18,
                token: "0x79E28f786E6Ba3C7fa755D99191fe2e9b3d33d77",
                gateway: "0x3d7194D9e5812AAD72d0090485eFf721B76F2B39",
            },
            {
                // testMIM
                symbol: "MIM",
                decimals: 18,
                token: "0x38B31b1Ee77AAd541808D3c6052c4C64ca61Da72",
                gateway: "0x4f4DFF8e4985AA26d68A451920a0dCC4eAaB367f",
            },
            {
                // testCRV
                symbol: "CRV",
                decimals: 18,
                token: "0x0C3C180D731E7d0826f92F8f312456752b800b24",
                gateway: "0x5EBb45521B925A11B53C06A0495B6A227eC3AdcF",
            },
            {
                // testLINK
                symbol: "LINK",
                decimals: 18,
                token: "0xd1590209769BC9eb645ee523A355CB7dB6BDAf33",
                gateway: "0x15dff465d7Bd75DFbd107924D9d674dA156328AD",
            },
            {
                // testUNI
                symbol: "UNI",
                decimals: 18,
                token: "0x8648d79572Eec4dEd03dE40C747564BD6ddB9091",
                gateway: "0x2d8E10901399586A3a8e04ec25f3a5548F51E91B",
            },
            {
                // testSUSHI
                symbol: "SUSHI",
                decimals: 18,
                token: "0xa901047Cb7F93d0D9d72334Bad1871082AFB4F0e",
                gateway: "0x9994aABFcAF8590095DbFaE44a6662E5D2013740",
            },
            {
                // testFTT
                symbol: "FTT",
                decimals: 18,
                token: "0x429940e4c699b9114C7fBf1c52d81704f7746Fd1",
                gateway: "0x63b8060Ad5317BA35F1b3c4dd8339294D0F580ee",
            },
            {
                // testROOK
                symbol: "ROOK",
                decimals: 18,
                token: "0x83E374aC386779CC5782509bD682E853b854eDF7",
                gateway: "0xf19970b7cF852F5d96B8B95A0d9828Ad1E84d749",
            },
            {
                // testBADGER
                symbol: "BADGER",
                decimals: 18,
                token: "0xC47C76D33fc7Bb57D6d2845E3B82558752cA5Fbe",
                gateway: "0x465a0b226a175F1392F324bcdaE046987b3ffcB9",
            },
            {
                // testKNC
                symbol: "KNC",
                decimals: 18,
                token: "0x8759CD7B4b926AdF4Da4dBeee76c97C05C071B46",
                gateway: "0xA32DB7c8b405c66457d7f11e17b2c270E44961a4",
            },
        ],

        config: {
            governanceAddress: "", // defaults to deployer
            mintAuthority: "0x44Bb4eF43408072bC888Afd1a5986ba0Ce35Cb54",

            tokenPrefix: "test",
            chainName: "Arbitrum",
        },
    },

    arbitrumMainnet: {
        RenProxyAdmin: "0xbdf27A048Ea859A20Fef6B956eaeeA4e80F2Bdc7",

        GatewayRegistry: "0xf36666C230Fa12333579b9Bd6196CB634D6BC506",
        BasicBridge: "0x82DF02A52E2e76C0c233367f2fE6c9cfe51578c5",

        RenERC20LogicV1: "0x3799006a87FDE3CCFC7666B3E6553B03ED341c2F",
        MintGatewayLogicV2: "0x6b8bB175c092DE7d81860B18DB360B734A2598e0",

        assets: [
            {
                // renBTC
                symbol: "BTC",
                decimals: 8,
                token: "0xDBf31dF14B66535aF65AaC99C32e9eA844e14501",
                gateway: "0x05Cadbf3128BcB7f2b89F3dD55E5B0a036a49e20",
            },

            {
                // renZEC
                symbol: "ZEC",
                decimals: 8,
                token: "0x31a0D1A199631D244761EEba67e8501296d2E383",
                gateway: "0x7986568375Af35B427f3f51389d73196967C356a",
            },

            {
                // renBCH
                symbol: "BCH",
                decimals: 8,
                token: "0xc3fEd6eB39178A541D274e6Fc748d48f0Ca01CC3",
                gateway: "0x06A2C5d79c66268610eEBBca10AFa17092860830",
            },

            {
                // renFIL
                symbol: "FIL",
                decimals: 18,
                token: "0xc4Ace9278e7E01755B670C0838c3106367639962",
                gateway: "0x4d59f628CB8e4670b779eAE22aF0c46DebC06695",
            },

            {
                // renDGB
                symbol: "DGB",
                decimals: 8,
                token: "0x2628568509E87c4429fBb5c664Ed11391BE1BD29",
                gateway: "0x677b23D0ffc82414B063accA197f74d791285952",
            },

            {
                // renDOGE
                symbol: "DOGE",
                decimals: 8,
                token: "0xcE829A89d4A55a63418bcC43F00145adef0eDB8E",
                gateway: "0x9FB2C0b19A9fee6d02E7Ea861C71503608B64d6A",
            },

            {
                // renLUNA
                symbol: "LUNA",
                decimals: 6,
                token: "0x7c7DAAF2dB46fEFd067f002a69FD0BE14AeB159f",
                gateway: "0x731Ea4Ba77fF184d89dBeB160A0078274Acbe9D2",
            },

            {
                // renETH
                symbol: "ETH",
                decimals: "18",
                token: "0x0694bf58a4F48C5970454CD4874218eBa843Cf3e",
                gateway: "0x85d0B90f56cEA09c4Be61a11C0367550dD865728",
            },
            {
                // renBNB
                symbol: "BNB",
                decimals: "18",
                token: "0xb8f7762192C840A5E4A6661D5Fa2D4d103E1d16a",
                gateway: "0xED2c7EE4f0E203B40B8a12D7CCcDc0100EAE25a3",
            },
            {
                // renMATIC
                symbol: "MATIC",
                decimals: "18",
                token: "0xe231f14Ab3170e691c8eE657cC353CaA5de60494",
                gateway: "0x4024E80a17C66346a8711A7fc9183Bde9d85258b",
            },
            {
                // renFTM
                symbol: "FTM",
                decimals: "18",
                token: "0xF89B530176D809be9ED21Dd025EFb291D461e67F",
                gateway: "0x4D374735E0CB1B2C6773ADD9991662333983FD67",
            },
            {
                // renAVAX
                symbol: "AVAX",
                decimals: "18",
                token: "0xA9A731AEDA12A745B2F3f79b73DD0f20C2645fA3",
                gateway: "0x05c37FD270Ab99bC5A8599CFEcC1C4f6E95A9e7f",
            },
            {
                // renDAI
                symbol: "DAI",
                decimals: "18",
                token: "0xEB9aC3e1C9C3F919804Bdc412e0a39b94D4C09d3",
                gateway: "0x3aa07C73307677fC3A7De6DB798076aa3DA5a05C",
            },
            {
                // renREN
                symbol: "REN",
                decimals: "18",
                token: "0x0fF1033de8F9229d69c10A2c6FACa20432c40d8c",
                gateway: "0x12a81D0Ef7f86f165a53bDBbE4c2878CC36C0a8C",
            },
            {
                // renUSDC
                symbol: "USDC",
                decimals: "6",
                token: "0x6E48a0c5386211837d99DacA233f45EF5aa5f594",
                gateway: "0x807bDd3Cc97CbC8D445B469f0e5aEFA9e6307E1e",
            },
            {
                // renUSDT
                symbol: "USDT",
                decimals: "6",
                token: "0xf55941e971302C634c586416c43469F3EaD5ad3e",
                gateway: "0x49c3d8b3686df2c8783b97ce6B99b7d15F57Ec18",
            },
            {
                // renEURT
                symbol: "EURT",
                decimals: "6",
                token: "0x9D9af63163697d38CC2eEBB4832C221f0331DfE5",
                gateway: "0xE4d866dCc9cB886ef427Cd5a45B21d49b2B33d14",
            },
            {
                // renBUSD
                symbol: "BUSD",
                decimals: "18",
                token: "0xd82a4f018eCF6be6E991C3c4a160C9758EC3338F",
                gateway: "0xE208e8A64f4Aa62D2787B67409976e220C2513e0",
            },
            {
                // renMIM
                symbol: "MIM",
                decimals: "18",
                token: "0x705Bc47EbA113Be1a66e20824a05a176aA3b5265",
                gateway: "0x06D329CC63C2F50D1A1e63Ab548e1A65658A97b8",
            },
            {
                // renCRV
                symbol: "CRV",
                decimals: "18",
                token: "0xD1d1c5C5055cBa2Bd9Dd2a3e99F2958D25845568",
                gateway: "0x54500d3CD7b78A539B2238989a198023186118Eb",
            },
            {
                // renLINK
                symbol: "LINK",
                decimals: "18",
                token: "0xCc1a9f25F2ADec39dA1A95e415b8B855caa0052a",
                gateway: "0x9913A9aEDB922A989a08E9a0E8529483e2d291e6",
            },
            {
                // renUNI
                symbol: "UNI",
                decimals: "18",
                token: "0x65FAAD3c8DCecC3D56AA76F809ea378A137ecE8a",
                gateway: "0xD3b2C376d0F899F535ED1e87eC843a4B40903A8e",
            },
            {
                // renSUSHI
                symbol: "SUSHI",
                decimals: "18",
                token: "0x33f87D7d65182eA6A21D2aBdFa46EC6Ab0F1075a",
                gateway: "0x55Bd297C3E37A95Eb3EF52f2ecFDA75dE0650648",
            },
            {
                // renFTT
                symbol: "FTT",
                decimals: "18",
                token: "0xB46b2c467950FF3c9012d5f3c1a975fa009a354d",
                gateway: "0x9123fC0f3a483bA341cAa14E4B021B5aB0e2bE32",
            },
            {
                // renROOK
                symbol: "ROOK",
                decimals: "18",
                token: "0x4f1593823909e86e4711aF182112457F024Be6ec",
                gateway: "0x62646A4B9BAdc028DE4EAA8d3ADd73465BF4C310",
            },
            {
                // renBADGER
                symbol: "BADGER",
                decimals: "18",
                token: "0x0D3A83566b7D5b85AB0DfEdfc66f358552ACEB78",
                gateway: "0x8d7306A6286d0C9ee9Aa327E33d037f241a4D2d8",
            },
            {
                // renKNC
                symbol: "KNC",
                decimals: "18",
                token: "0xCee9071A0A19310a670dBe3a300D6dcAf8ae96AD",
                gateway: "0xe58cf965FFE347AbD5D1497167E7EA8c5b610453",
            },
        ],

        config: {
            governanceAddress: "0x33024cfb7af11a7cb12ab0dedefc5dd5f430381f", // defaults to deployer
            mintAuthority: "0x7f64e4e4b2d7589eb0ac8439c0e639856aeceee7", // defaults to deployer

            tokenPrefix: "ren",
            chainName: "Arbitrum",
        },
    },

    solanaMainnet: {
        GatewayRegistry: "REGrPFKQhRneFFdUV3e9UDdzqUJyS6SKj88GdXFCRd2",
        BasicAdapter: "",
        assets: [
            {
                // renBTC
                symbol: "BTC",
                decimals: 8,
                token: "CDJWUqTcYTVAKXAVXoQZFes5JUFc7owSeq7eMQcDSbo5",
                gateway: "BTC5yiRuonJKcQvD9j9QwYKPx4MCGbvkWfvHFyBJG6RY",
            },
            {
                // renZEC
                symbol: "ZEC",
                decimals: 8,
                token: "E99CQ2gFMmbiyK2bwiaFNWUUmwz4r8k2CVEFxwuvQ7ue",
                gateway: "ZECGnwPTpT8v8ccn7onj8oafGA4c1RJV8MH7bYSCRCU",
            },
            {
                // renBCH
                symbol: "BCH",
                decimals: 8,
                token: "G1a6jxYz3m8DVyMqYnuV7s86wD4fvuXYneWSpLJkmsXj",
                gateway: "BCHLK8N6spajPuk5P5imR4BdPKxMWMRAkfvsCVAiHDsx",
            },
            {
                // renFIL
                symbol: "FIL",
                decimals: 18,
                token: "De2bU64vsXKU9jq4bCjeDxNRGPn8nr3euaTK8jBYmD3J",
                gateway: "FiLWGcjSCGhnXsWfkrwBYL2JeNJ4a6z7MStVxnayS8Nf",
            },
            {
                // renDGB
                symbol: "DGB",
                decimals: 8,
                token: "FKJvvVJ242tX7zFtzTmzqoA631LqHh4CdgcN8dcfFSju",
                gateway: "DGB9b34QragJSwWkrLc2L8akZdeYKgwruDaT1rqea3Sz",
            },
            {
                // testDOGE
                symbol: "DOGE",
                decimals: 8,
                token: "ArUkYE2XDKzqy77PRRGjo4wREWwqk6RXTfM9NeqzPvjU",
                gateway: "DoGEYj1prGAkc5fHcHPyg5bhgfbUQm5uaPwtaVQPuNKh",
            },
            {
                // renLUNA
                symbol: "LUNA",
                decimals: 6,
                token: "8wv2KAykQstNAj2oW6AHANGBiFKVFhvMiyyzzjhkmGvE",
                gateway: "LUNAZQmNvQYHycB9m3kE95afQQyf4LZw1pfXKvZaZar",
            },
        ],

        config: {
            chainName: "Solana",
            tokenPrefix: "ren",
            standard: "SPL",
        },
    },
};
