import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import sr from "@utils/scrollreveal";
import { Heading, Subtitle, Text } from "@styles";

const Container = styled.div`
    visibility: hidden;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1px 1px;
    margin: auto;
    width: 30%;
    min-width: 588px;
`;

const About = ({ data }) => {
    const stuff = data[0].node;
    const { heading, subtitle } = stuff.frontmatter;
    const p = stuff.excerpt;

    const scrollReveal = useRef(null);

    useEffect(() => sr.reveal(scrollReveal.current), []);

    return (
        <Container ref={scrollReveal}>
            <Heading>{heading}</Heading>
            <Subtitle>{subtitle}</Subtitle>
            <Text>{p}</Text>
        </Container>
    )
}

export default About;