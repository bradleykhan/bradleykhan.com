import { css } from "styled-components";

import InterSemiBold from "./Inter/InterSemiBold.ttf";
import InterRegular from "./Inter/InterRegular.ttf";

const Fonts = css`
    @font-face {
        font-family: "Inter";
        src: url(${InterSemiBold}) format("truetype");
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: "Inter";
        src: url(${InterRegular}) format("truetype");
        font-weight: 400;
        font-style: normal;
    }
`;

export default Fonts;