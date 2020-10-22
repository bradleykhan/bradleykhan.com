import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import sr from "@utils/scrollreveal";
import { Heading, Subtitle, Text } from "@styles";
import clothes from "@images/clothes.jpg";


const Nav = styled.div`
    /* Need position relative to center GridItem due to not fixed height of this element */
    position: relative;
    height: 100vh;
    margin: 0;

    /* Full width so that child element can emulate the grid of the page */
    grid-column: 1 / span 3;
`;

const GridItem = styled.div`
    /* Center the section for smooth scroll */
    position: absolute;
    top: 50%;
    transform: translate(0%, -50%);

    /* Full width section */
    grid-column: 1 / span 3;

    /* Replicate parent grid (grids only go 1 level atm.. bah subgrid) */
    display: grid;
    grid-template-columns: 2fr minmax(320px, 4fr) 2fr;

    @media (orientation: portrait) and (min-width: 768px) {
        grid-template-columns: 1fr minmax(320px, 4fr) 1fr;
    }

    /* Background image that is full width, maintains image proportions, doesnt repeat and starts from top left */
    background-image: url(${clothes});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top left;

    /*  Height of the actual visible content*/
    height: 70vh;
`;

const Container = styled.div`
    /* Width of the visible content */
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
        <Nav id="role" ref={scrollReveal}>
            <GridItem >
                <Container>
                    <Heading>{heading}</Heading>
                    <Subtitle>{title}</Subtitle>
                    <Text>{text}</Text>
                </Container>
            </GridItem>
        </Nav>
    );
}

export default Role;