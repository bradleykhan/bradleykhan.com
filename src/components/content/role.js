import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import sr from "@utils/scrollreveal";
import { Heading, Subtitle, Text } from "@styles";
import clothes from "@images/clothes.jpg";

const Div = styled.div`
    grid-column: 1 / span 3;
    display: grid;
    grid-template-columns: 2fr minmax(320px, 4fr) 2fr;
    background-image: url(${clothes});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top left;
    height: 70vh;
    margin-bottom: 30vh;

    @media (orientation: portrait) and (min-width: 768px) {
        grid-template-columns: 1fr minmax(320px, 4fr) 1fr;
    }
`;

const Container = styled.div`
    grid-column: 2;
    margin: auto;
`;

const Role = ({ data }) => {
    const stuff = data[0].node;
    const { title, heading } = stuff.frontmatter;
    const text = stuff.excerpt;

    const scrollReveal = useRef(null);

    useEffect(() => sr.reveal(scrollReveal.current), []);

    return (
        <Div ref={scrollReveal}>
            <Container>
                <Heading id="role">{heading}</Heading>
                <Subtitle>{title}</Subtitle>
                <Text>{text}</Text>
            </Container>
        </Div>
    );
}

export default Role;