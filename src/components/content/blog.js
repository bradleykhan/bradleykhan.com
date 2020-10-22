import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import sr from "@utils/scrollreveal";
import { Heading, BlogCard } from "@styles";

const Div = styled.div`
    height: 25vh;
    grid-column: 2 / span 3;
`;

const Container = styled.div`
    margin-top: 25vh;
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
            </Container>
        </Div>
    );
}

export default Blog;