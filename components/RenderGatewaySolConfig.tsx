import React from "react";

import SolanaConfig from "../contracts/addresses/solana.json";
import { ContractItem } from "./RenderDarknodeSolConfig";

const NULL20 = "0x0000000000000000000000000000000000000000";

enum Assets {
    renBTC = "renBTC",
    renBCH = "renBCH",
    renZEC = "renZEC",
    renDGB = "renDGB",
    renDOGE = "renDOGE",
    renFIL = "renFIL",
    renLUNA = "renLUNA",

    // H2h - not all of the below have been deployed.
    renArbETH = "renArbETH",
    renAVAX = "renAVAX",
    renBADGER = "renBADGER",
    renBNB = "renBNB",
    renBUSD = "renBUSD",
    renCOMP = "renCOMP",
    renCRV = "renCRV",
    renDAI = "renDAI",
    renETH = "renETH",
    renEURT = "renEURT",
    renFTM = "renFTM",
    renFTT = "renFTT",
    renGLMR = "renGLMR",
    renibBTC = "renibBTC",
    renKAVA = "renKAVA",
    renKNC = "renKNC",
    renLINK = "renLINK",
    renMATIC = "renMATIC",
    renMIM = "renMIM",
    renoETH = "renoETH",
    renREN = "renREN",
    renROOK = "renROOK",
    renSOL = "renSOL",
    renSUSHI = "renSUSHI",
    renUNI = "renUNI",
    renUSDC = "renUSDC",
    renUSDT = "renUSDT",
    renUST = "renUST",
    renWBTC = "renWBTC",
}

export const AssetItem = ({
    symbol,
    link,
    erc20,
    gateway,
    icon,
}: {
    symbol: string;
    link?: string;
    erc20: string;
    gateway: string;
    icon?: string;
}) => (
    <li style={{ padding: 0, margin: 0 }}>
        <div
            style={{
                border: "1px solid #eee",
                padding: 10,
                marginBottom: 2,
                display: "flex",
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100px",
                    width: "70px",
                    marginRight: "10px",
                }}
            >
                {icon ? (
                    <img src={icon} style={{ height: "50px", width: "50px" }} />
                ) : null}
            </div>
            <div>
                <b>
                    {symbol}
                    {/* {decimals !== undefined ? (
                        <span style={{ opacity: 0.8, fontWeight: 300 }}>
                            {" "}
                            ({decimals} decimals)
                        </span>
                    ) : null} */}
                </b>
                <ul style={{ listStyleType: "none", padding: 0 }}>
                    <li>
                        Token:{" "}
                        {link ? (
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={`${link}${erc20}`}
                            >
                                {erc20}
                            </a>
                        ) : (
                            <span>{erc20}</span>
                        )}
                    </li>
                    <li>
                        Gateway:{" "}
                        {link ? (
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={`${link}${gateway}`}
                            >
                                {gateway}
                            </a>
                        ) : (
                            <span>{gateway}</span>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    </li>
);

const links = {
    Ethereum: {
        Mainnet: "https://etherscan.io/address/",
        Testnet: "https://kovan.etherscan.io/address/",
    },
    Bsc: {
        Mainnet: "https://bscscan.com/address/",
        Testnet: "https://testnet.bscscan.com/address/",
    },
    Fantom: {
        Mainnet: "https://ftmscan.com/address/",
        Testnet: "https://testnet.ftmscan.com/address/",
    },
    Polygon: {
        Mainnet: "https://polygonscan.com/address/",
        Testnet: "https://mumbai.polygonscan.com/address/",
    },
    Avalanche: {
        Mainnet: "https://snowtrace.io/address/",
        Testnet: "https://snowtrace.io/address/",
    },
    Arbitrum: {
        Mainnet: "https://arbiscan.io/address/",
        Testnet: "https://testnet.arbiscan.io/address/",
    },
    Optimism: {
        Mainnet: "https://optimistic.etherscan.io/address/",
        Testnet: "https://kovan-optimistic.etherscan.io/address/",
    },
    Kava: {
        Mainnet: "https://explorer.kava.io/address/",
        Testnet: "https://explorer.evm-alpha.kava.io/address/",
    },
    Moonbeam: {
        Mainnet: "https://moonscan.io/address/",
        Testnet: "https://moonbase.moonscan.io/address/",
    },
    Solana: {
        Mainnet: "https://explorer.solana.com/address/",
        Testnet: "",
    },
};

export const RenderSolanaConfig = ({
    network,
    chain,
}: {
    chain: string;
    network: string;
}) => {
    const link = links[chain][network];

    const deploymentName = `${chain[0].toLowerCase()}${chain.slice(
        1
    )}${network}` as "solanaMainnet";

    const config = SolanaConfig[deploymentName];
    if (!config) {
        return (
            <div style={{ marginTop: "10px", color: "#bf616a" }}>
                Addresses not available for {chain} {network}
            </div>
        );
    }

    return (
        <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
            {config.GatewayRegistry ? (
                <ContractItem
                    name="GatewayRegistry"
                    link={link}
                    address={config.GatewayRegistry}
                />
            ) : null}
            {config.assets.map((asset) => {
                let icon;

                try {
                    icon =
                        require(`../contracts/icons/ren${asset.symbol}.svg`)?.default;
                } catch (error) {
                    // Ignore.
                }
                return (
                    <AssetItem
                        link={link}
                        symbol={`${config.config.tokenPrefix}${asset.symbol}`}
                        erc20={asset.token}
                        gateway={asset.gateway}
                        icon={icon}
                    />
                );
            })}
        </ul>
    );
};

export const RenderGatewaySolConfig = ({
    network,
    chain,
}: {
    chain: string;
    network: string;
}) => {
    const link: string | undefined = links[chain]?.[network];

    const deploymentName = `${chain[0].toLowerCase()}${chain.slice(
        1
    )}${network}`;

    let gatewayRegistry;
    let basicBridge;
    try {
        gatewayRegistry =
            require(`../submodules/gateway-sol/deployments/${deploymentName}/GatewayRegistryProxy.json`).address;
        basicBridge =
            require(`../submodules/gateway-sol/deployments/${deploymentName}/BasicBridge.json`).address;
    } catch (error) {
        // Ignore.
    }

    return (
        <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
            {gatewayRegistry ? (
                <ContractItem
                    name="GatewayRegistry"
                    link={link}
                    address={gatewayRegistry}
                />
            ) : null}
            {basicBridge ? (
                <ContractItem
                    name="BasicBridge"
                    link={link}
                    address={basicBridge}
                />
            ) : null}
            {Object.keys(Assets).map((asset) => {
                let mintGateway;
                let mintAsset;
                let icon;

                try {
                    mintGateway =
                        require(`../submodules/gateway-sol/deployments/${deploymentName}/${asset}_Proxy.json`).address;
                    mintAsset =
                        require(`../submodules/gateway-sol/deployments/${deploymentName}/${asset}_MintGateway_Proxy.json`).address;
                    icon = require(`../contracts/icons/${asset}.svg`)?.default;
                } catch (error) {
                    // Ignore.
                }

                return (mintGateway && mintGateway !== NULL20) ||
                    (mintAsset && mintAsset !== NULL20) ? (
                    <AssetItem
                        link={link}
                        symbol={asset}
                        erc20={mintGateway}
                        gateway={mintAsset}
                        // decimals={parseInt(asset.decimals.toString())}
                        icon={icon}
                    />
                ) : null;
            })}
        </ul>
    );
};
