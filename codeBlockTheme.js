// red #bf616a
// green #a3be8c
// yellow #ebcb8b
// cyan #88c0d0
// purple #b48ead
// black #3b4252

// Adapted from https://github.com/voronianski/oceanic-next-color-scheme
var colors = {
    char: "#b48ead",
    comment: "#6b7282",
    keyword: "#ebcb8b",
    string: "#88c0d0",
    primitive: "#b48ead",
    variable: "#bf616a",
    boolean: "#bf616a",
    punctuation: "#88c0d0",
    tag: "#bf616a",
    function: "#bf616a",
    className: "#bf616a",
    method: "#bf616a",
    operator: "#b48ead",
};
module.exports = {
    plain: {
        backgroundColor: "#2e3440",
        color: "#d7dde8",
    },
    styles: [
        {
            types: ["attr-name"],
            style: {
                color: colors.keyword,
            },
        },
        {
            types: ["attr-value"],
            style: {
                color: colors.string,
            },
        },
        {
            types: [
                "comment",
                "block-comment",
                "prolog",
                "doctype",
                "cdata",
                "shebang",
            ],
            style: {
                color: colors.comment,
            },
        },
        {
            types: [
                "property",
                "number",
                "function-name",
                "constant",
                "symbol",
                "deleted",
            ],
            style: {
                color: colors.primitive,
            },
        },
        {
            types: ["boolean"],
            style: {
                color: colors.boolean,
            },
        },
        {
            types: ["tag"],
            style: {
                color: colors.tag,
            },
        },
        {
            types: ["string"],
            style: {
                color: colors.string,
            },
        },
        {
            types: ["punctuation"],
            style: {
                color: colors.string,
            },
        },
        {
            types: ["selector", "char", "builtin", "inserted"],
            style: {
                color: colors.char,
            },
        },
        {
            types: ["function"],
            style: {
                color: colors.function,
            },
        },
        {
            types: ["operator", "entity", "url", "variable"],
            style: {
                color: colors.variable,
            },
        },
        {
            types: ["keyword"],
            style: {
                color: colors.keyword,
            },
        },
        {
            types: ["at-rule", "class-name"],
            style: {
                color: colors.className,
            },
        },
        {
            types: ["important"],
            style: {
                fontWeight: "400",
            },
        },
        {
            types: ["bold"],
            style: {
                fontWeight: "bold",
            },
        },
        {
            types: ["italic"],
            style: {
                fontStyle: "italic",
            },
        },
        {
            types: ["namespace"],
            style: {
                opacity: 0.7,
            },
        },
    ],
};
