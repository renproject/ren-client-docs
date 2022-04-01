import React from "react";

export const Enumerate = ({
    title,
    children,
}: {
    title: string;
    children?: React.ReactNode[];
}) => {
    return (
        <div className="enumerate">
            <h3>{title}</h3>
            {children}
        </div>
    );
};
