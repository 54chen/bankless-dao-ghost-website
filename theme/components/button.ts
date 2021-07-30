export default {
    baseStyle: { },
    sizes: { },
    variants: { 
        "loadMore": {
            display: "none",
            width: "50px",
            height: "50px",
            padding: "0",
            cursor: "pointer",
            transitionTimingFunction: "cubic-bezier(.39,.07,.68,1.7)",
            transitionDuration: ".25s",
            transitionProperty: "transform,background-color",
            border: "10px solid var(--color-details)",
            borderRadius: "50px",
            outline: "0",
            backgroundColor: "var(--color-body)",
            _hover: {
                transform: "scale(.6)",
                backgroundColor: "var(--color-details)"
            }
        }
    },
    defaultProps: { }
}
