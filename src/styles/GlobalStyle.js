import { createGlobalStyle } from "styled-components";
import { colours } from "@styles/theme";

const GlobalStyle = createGlobalStyle`
    html {
        width: 100%;
        box-sizing: border-box;
    }

    body {
        width: 100%;
        min-height: 100%;
        background-color: ${colours.grey};
        margin: 0;
    }
`

export default GlobalStyle; 