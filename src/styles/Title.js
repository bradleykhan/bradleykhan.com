import styled from "styled-components";

const Title = styled.h1`
    color: var(--white);
    font-family: "Inter";
    font-size: var(--biggerer);
    font-weight: 600; 
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: -3px;

    @media (min-width: 768px) {
        font-size: var(--biggest);
    }
`;

export default Title;