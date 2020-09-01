const theme = {
    colours: {
        orange: "#D38235",
        grey: "#39444A",
        darkgrey: "#252c30"
    },
    fontSizes: {
        title: "32px",
        subtitle: "20px",
        text: "12px"
    }
}

let Colours = { ...theme.colours };
let FontSizes = { ...theme.fontSizes };

export { Colours, FontSizes };
export default theme;