import styled from "styled-components";

const Text = styled.p`
    color: var(--lightgrey);
    font-family: "Inter";
    font-size: var(--smallest);
    font-weight: 400;
    letter-spacing: 0.5px;
    line-height: 24px;

    @media (min-width: 768px) {
        font-size: var(--medium);
    }
`;

export default Text;