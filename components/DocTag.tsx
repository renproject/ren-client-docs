import React from "react";

export enum DocType {
    Tutorial = "Tutorial",
    HowTo = "How To",
    Reference = "Reference",
    Explanation = "Explanation",
}

const DocTypeColor: { [type in DocType]: string } = {
    [DocType.Tutorial]: "#b48ead",
    [DocType.HowTo]: "#69a8b9",
    [DocType.Reference]: "#bf616a",
    [DocType.Explanation]: "#d2b06c",
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
