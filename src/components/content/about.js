import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import sr from "@utils/scrollreveal";
import { Heading, Subtitle, Text } from "@styles";

const Div = styled.div`
    height: 100vh;
    grid-column: 2;
    display: grid;
    align-self: center;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

const About = ({ data }) => {
    const stuff = data[0].node;
    const { heading, subtitle } = stuff.frontmatter;
    const p = stuff.excerpt;

    const scrollReveal = useRef(null);

    useEffect(() => sr.reveal(scrollReveal.current), []);

    return (
        <Div ref={scrollReveal}>
            <Container>
                <Heading>{heading}</Heading>
                <Subtitle>{subtitle}</Subtitle>
                <Text>{p}</Text>
            </Container>
        </Div>
    )
}

export default About;