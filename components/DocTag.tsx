import React from "react";

export enum DocType {
  Tutorial = "Tutorial",
  HowTo = "How To",
  Reference = "Reference",
  Explanation = "Explanation",
}

const DocTypeColor: { [type in DocType]: string } = {
  [DocType.Tutorial]: "#b16bfc",
  [DocType.HowTo]: "#EC0088",
  [DocType.Reference]: "#ff823a",
  [DocType.Explanation]: "#29C0AF",
};

export const DocTag: React.FC<{ type: DocType; marginBottom?: number }> = ({
  type,
  marginBottom,
}) => (
  <>
    <span
      style={{
        border: "2px solid " + DocTypeColor[type] || "orange",
        borderRadius: "5px",
        color: DocTypeColor[type] || "orange",
        padding: "0.1rem 0.4rem",
        marginBottom: marginBottom !== undefined ? marginBottom : 30,
        display: "inline-block",
      }}
    >
      {String(type)}
    </span>
  </>
);
