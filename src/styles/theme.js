const theme = {
    colours: {
        orange: "#FF8311",
        lightgrey: "#C0CCDE",
        darkgrey: "#1A1F22",
        white: "#FFFFFF"
    },
    fontSizes: {
        biggest: "64px",
        bigger: "24px",
        big: "20px",
        medium: "16px",
        small: "14px",
        smallest: "12px"
    }
}

const Colours = { ...theme.colours };
const FontSizes = { ...theme.fontSizes };

export { Colours, FontSizes };
export default theme;