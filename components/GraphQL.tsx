import "graphiql/graphiql.css";

import BrowserOnly from "@docusaurus/BrowserOnly";
import React, { Suspense } from "react";

interface Props {
    url: string;
    defaultQuery: string;
    docExplorerOpen?: boolean;
    minHeight?: number;
}

const DEFAULT_MIN_HEIGHT = 500;

const GraphQLBrowserOnly: React.FC<Props> = ({
    url,
    defaultQuery,
    docExplorerOpen,
    minHeight,
}) => {
    // const [urlInput, setUrlInput] = useState(url);

    if (typeof window === "undefined") {
        return null;
    }

    const { createGraphiQLFetcher } = require("@graphiql/toolkit");
    const GraphiQL = require("graphiql").default;
    const fetcher = createGraphiQLFetcher({ url });

    return (
        <div style={{ height: minHeight || DEFAULT_MIN_HEIGHT }}>
            <Suspense fallback={<div>Loading...</div>}>
                <GraphiQL
                    docExplorerOpen={docExplorerOpen}
                    query={defaultQuery}
                    fetcher={fetcher}
                />
            </Suspense>
        </div>
    );
};

export const GraphQL: React.FC<Props> = (props) => {
    if (typeof window === "undefined") {
        return null;
    }

    return (
        <BrowserOnly>
            {() => (
                <>
                    <GraphQLBrowserOnly {...props} />
                    <br />
                </>
            )}
        </BrowserOnly>
    );
};
