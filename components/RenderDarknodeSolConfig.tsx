import React from "react";
import { darknodeSolConfig } from "../contracts/addresses/darknodeSol";
import { gatewaySolConfig } from "../contracts/addresses/gatewaySol";

export const ContractItem = ({
  name,
  link,
  address,
  legacy,
}: {
  name: string;
  link: string;
  address: string;
  legacy?: boolean;
}) => (
  <li style={{ padding: 0, margin: 0 }}>
    <div style={{ border: "1px solid #eee", padding: 10, marginBottom: 2 }}>
      <b>{name}</b> {legacy ? <span>(legacy)</span> : null}
      <br />
      <a target="_blank" rel="noopener noreferrer" href={`${link}${address}`}>
        {address}
      </a>
    </div>
  </li>
);

export const RenderDarknodeSolConfig = ({ network }: { network: string }) => (
  <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
    <ContractItem
      name="Protocol"
      link="https://etherscan.io/address/"
      address={darknodeSolConfig[network].ProtocolProxy}
    />
    <ContractItem
      name="REN"
      link="https://etherscan.io/address/"
      address={darknodeSolConfig[network].RenToken}
    />
    <ContractItem
      name="DarknodeRegistry"
      link="https://etherscan.io/address/"
      address={darknodeSolConfig[network].DarknodeRegistryProxy}
    />
    <ContractItem
      name="DarknodeRegistryStore"
      link="https://etherscan.io/address/"
      address={darknodeSolConfig[network].DarknodeRegistryStore}
    />
    <ContractItem
      name="DarknodePayment"
      link="https://etherscan.io/address/"
      address={darknodeSolConfig[network].DarknodePayment}
      legacy={true}
    />
    <ContractItem
      name="DarknodePaymentStore"
      link="https://etherscan.io/address/"
      address={darknodeSolConfig[network].DarknodePaymentStore}
      legacy={true}
    />
  </ul>
);
