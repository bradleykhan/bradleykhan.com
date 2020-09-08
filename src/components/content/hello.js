import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import sr from "@utils/scrollreveal";
import { Colours } from "@styles";

const Container = styled.div`
    width: 80%;
    height: 100%;
    visibility: hidden;
`;

const Text = styled.p`
    color: ${Colours.orange}
`;

const Title = styled.h1`
    color: ${Colours.orange}
`;

const Hello = ({ data }) => {
    const stuff = data[0].node;

    const { title } = stuff.frontmatter;
    const p = stuff.excerpt;

    const scrollReveal = useRef(null);

    useEffect(() => sr.reveal(scrollReveal.current), []);

    return (
        <Container ref={scrollReveal}>
            <Title>{title}</Title>
            <Text>{p}</Text>
        </Container>
    )
}

export default Hello;