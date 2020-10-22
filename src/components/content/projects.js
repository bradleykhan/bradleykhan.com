import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import sr from "@utils/scrollreveal";
import { Heading } from "@styles";

const Div = styled.div`
    height: 70vh;
    grid-column: 2 / span 3;
    display: grid;
`;

const Container = styled.div`
    align-self: center;
`;

const Projects = ({ data }) => {
    const stuff = data[0].node;
    const { heading } = stuff.frontmatter;

    const scrollReveal = useRef(null);

    useEffect(() => sr.reveal(scrollReveal.current), []);

    return (
        <Div ref={scrollReveal}>
            <Container>
                <Heading>{heading}</Heading>
            </Container>
        </Div>
    );
}

export default Projects;