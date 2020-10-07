import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import sr from "@utils/scrollreveal";
import { Title, Heading, Text } from "@styles";

const Div = styled.div`
    height: 100vh;
    grid-column: 2;
    display: grid;
    max-width: 512px;
`;

const Container = styled.div`
    margin-top: 25vh;
`;

const Hello = ({ data }) => {
    const stuff = data[0].node;
    const { title, heading } = stuff.frontmatter;
    const text = stuff.excerpt;

    const scrollReveal = useRef(null);

    useEffect(() => sr.reveal(scrollReveal.current), []);

    return (
        <Div ref={scrollReveal}>
            <Container>
                <Heading>{heading}</Heading>
                <Title>{title}</Title>
                <Text>{text}</Text>
            </Container>
        </Div>
    );
}

export default Hello;