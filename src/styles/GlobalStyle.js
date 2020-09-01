import { createGlobalStyle } from "styled-components";
import { Colours } from "@styles/theme";

const GlobalStyle = createGlobalStyle`
    html {
        width: 100%;
        box-sizing: border-box;
    }

    body {
        width: 100%;
        min-height: 100%;
        background-color: ${Colours.darkgrey};
        margin: 0;
    }
`

export default GlobalStyle;