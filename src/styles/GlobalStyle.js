import { createGlobalStyle } from "styled-components";
import Fonts from "@fonts/fonts";

const GlobalStyle = createGlobalStyle`
    ${Fonts};

    :root {
        --orange: #FF8311;
        --lightgrey: #C0CCDE;
        --grey: #39444A;
        --darkgrey: #1A1F22;
        --white: #FFFFFF;

        --biggest: 64px;
        --biggerer: 40px;
        --bigger: 24px;
        --big: 20px;
        --medium: 16px;
        --small: 14px;
        --smallest: 12px;
        --smol: 10px;

        --offset-left: 30%;
        --offset-top: 25%;
    }

    html {
        width: 100%;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    body {
        width: 100%;
        min-height: 100%;
        background-color: var(--darkgrey);
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`

export default GlobalStyle;