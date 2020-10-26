import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import sr from "@utils/scrollreveal";
import { Heading, BlogCard } from "@styles";

const Div = styled.div`
    height: 100vh;
    grid-column: 2 / span 3;
    display: grid;
`;

const Container = styled.div`
    align-self: center;
`;

const ComingSoon = styled.p`
    font-family: "Inter";
    font-weight: 400;
    color: var(--orange);
    font-size: var(--smol);
`;

const Blog = ({ data }) => {
    const stuff = data[0].node;
    const { heading } = stuff.frontmatter;

    const scrollReveal = useRef(null);

    useEffect(() => sr.reveal(scrollReveal.current), []);

    return (
        <Div ref={scrollReveal}>
            <Container>
                <Heading>{heading}</Heading>
                <BlogCard />
                <ComingSoon>Coming soon!</ComingSoon>
            </Container>
        </Div>
    );
}

export default Blog;