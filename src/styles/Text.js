import styled from "styled-components";
import { Colours, FontSizes } from "@styles";

const Text = styled.p`
    color: ${Colours.lightgrey};
    font-family: "Inter";
    font-size: ${FontSizes.medium};
    font-weight: 400;
    line-height: 24px;
`;

export default Text;