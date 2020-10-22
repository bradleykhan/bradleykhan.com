import styled from "styled-components";

const Heading = styled.h2`
    color: var(--orange);
    font-family: "Inter";
    font-size: var(--smallest);
    font-weight: 600;
    letter-spacing: 4px;
    margin: 0;
    margin-bottom: 20px;

    @media (min-width: 768px) {
        font-size: var(--medium);
    }
`;

export default Heading;