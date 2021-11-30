import React from "react";

import { gatewaySolConfig } from "../contracts/addresses/gatewaySol";
import IconRenArbETH from "../contracts/icons/renArbETH.svg";
import IconRenAVAX from "../contracts/icons/renAVAX.svg";
import IconRenBADGER from "../contracts/icons/renBADGER.svg";
import IconRenBCH from "../contracts/icons/renBCH.svg";
import IconRenBNB from "../contracts/icons/renBNB.svg";
import IconRenBTC from "../contracts/icons/renBTC.svg";
import IconRenBUSD from "../contracts/icons/renBUSD.svg";
import IconRenCOMP from "../contracts/icons/renCOMP.svg";
import IconRenCRV from "../contracts/icons/renCRV.svg";
import IconRenDAI from "../contracts/icons/renDAI.svg";
import IconRenDGB from "../contracts/icons/renDGB.svg";
import IconRenDOGE from "../contracts/icons/renDOGE.svg";
import IconRenETH from "../contracts/icons/renETH.svg";
import IconRenEURT from "../contracts/icons/renEURT.svg";
import IconRenFIL from "../contracts/icons/renFIL.svg";
import IconRenFTM from "../contracts/icons/renFTM.svg";
import IconRenFTT from "../contracts/icons/renFTT.svg";
import IconRenKNC from "../contracts/icons/renKNC.svg";
import IconRenLINK from "../contracts/icons/renLINK.svg";
import IconRenLUNA from "../contracts/icons/renLUNA.svg";
import IconRenMATIC from "../contracts/icons/renMATIC.svg";
import IconRenMIM from "../contracts/icons/renMIM.svg";
import IconRenREN from "../contracts/icons/renREN.svg";
import IconRenROOK from "../contracts/icons/renROOK.svg";
import IconRenSUSHI from "../contracts/icons/renSUSHI.svg";
import IconRenUNI from "../contracts/icons/renUNI.svg";
import IconRenUSDC from "../contracts/icons/renUSDC.svg";
import IconRenUSDT from "../contracts/icons/renUSDT.svg";
import IconRenZEC from "../contracts/icons/renZEC.svg";
import { ContractItem } from "./RenderDarknodeSolConfig";

const icons = {
    renBADGER: IconRenBADGER,
    renBCH: IconRenBCH,
    renBNB: IconRenBNB,
    renBTC: IconRenBTC,
    renBUSD: IconRenBUSD,
    renCOMP: IconRenCOMP,
    renCRV: IconRenCRV,
    renDAI: IconRenDAI,
    renDGB: IconRenDGB,
    renDOGE: IconRenDOGE,
    renETH: IconRenETH,
    renEURT: IconRenEURT,
    renFIL: IconRenFIL,
    renFTM: IconRenFTM,
    renFTT: IconRenFTT,
    renKNC: IconRenKNC,
    renLINK: IconRenLINK,
    renLUNA: IconRenLUNA,
    renMATIC: IconRenMATIC,
    renMIM: IconRenMIM,
    renREN: IconRenREN,
    renROOK: IconRenROOK,
    renSUSHI: IconRenSUSHI,
    renUNI: IconRenUNI,
    renUSDC: IconRenUSDC,
    renUSDT: IconRenUSDT,
    renZEC: IconRenZEC,
    renAVAX: IconRenAVAX,
    renArbETH: IconRenArbETH,
};

export const AssetItem = ({
    symbol,
    link,
    erc20,
    gateway,
    standard,
    decimals,
    icon: Icon,
}: {
    symbol: string;
    link: string;
    erc20: string;
    gateway: string;
    decimals: number;
    standard?: string;
    icon?: React.SVGFactory;
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
                {Icon ? (
                    <Icon style={{ height: "50px", width: "50px" }} />
                ) : null}
            </div>
            <div>
                <b>
                    {symbol}
                    {decimals !== undefined ? (
                        <span style={{ opacity: 0.8, fontWeight: 300 }}>
                            {" "}
                            ({decimals} decimals)
                        </span>
                    ) : null}
                </b>
                <ul style={{ listStyleType: "none", padding: 0 }}>
                    <li>
                        {standard ? standard : <>ERC20</>}:{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={`${link}${erc20}`}
                        >
                            {erc20}
                        </a>
                    </li>
                    <li>
                        Gateway:{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={`${link}${gateway}`}
                        >
                            {gateway}
                        </a>
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
        Testnet: "https://testnet.ftmscan.com/address",
    },
    Polygon: {
        Mainnet: "https://polygonscan.com/address/",
        Testnet: "https://mumbai.polygonscan.com/address/",
    },
    Avalanche: {
        Mainnet: "https://cchain.explorer.avax.network/address/",
        Testnet: "https://cchain.explorer.avax-test.network/address",
    },
    Arbitrum: {
        Mainnet: "https://arbiscan.io/address/",
        Testnet: "https://testnet.arbiscan.io/address/",
    },
    Solana: {
        Mainnet: "https://explorer.solana.com/address/",
        Testnet: "",
    },
};

export const RenderGatewaySolConfig = ({
    network,
    chain,
}: {
    chain: string;
    network: string;
}) => {
    // The config keys are in an un-ideal format because they are copied directly
    // over from tge gateway-sol repository.
    const config: typeof gatewaySolConfig.ethereumMainnet =
        gatewaySolConfig[chain.toLowerCase() + network];

    if (!config) {
        return (
            <div>
                No configuration found for {chain} on {network}
            </div>
        );
    }

    const link = links[chain][network];

    return (
        <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
            <ContractItem
                name="GatewayRegistry"
                link={link}
                address={config.GatewayRegistry}
            />
            {config.BasicBridge ? (
                <ContractItem
                    name="BasicBridge"
                    link={link}
                    address={config.BasicBridge}
                />
            ) : null}
            {config.assets.map((asset) => {
                return (
                    <AssetItem
                        link={link}
                        symbol={`${config.config.tokenPrefix}${asset.symbol}`}
                        erc20={asset.token}
                        gateway={asset.gateway}
                        decimals={asset.decimals}
                        standard={config.config.standard}
                        icon={icons[`ren${asset.symbol}`]}
                    />
                );
            })}
        </ul>
    );
};
