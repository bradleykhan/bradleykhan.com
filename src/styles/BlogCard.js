import React from "react";
import styled from "styled-components";
import { Subtitle, Text } from "@styles";
import blog1 from "@images/blog1.jpg";

const Container = styled.div`
    margin-top: 20px;
    filter: blur(2px);
`;

const BlogTitle = styled(Subtitle)`
    font-size: var(--big);
    width: 387px;
`;

const Curvedimg = styled.img`
    border-radius: 1%;
`;

const ComingSoon = styled(Text)`
    color: var(--orange);
    font-size: var(--smol);
`;

const BlogCard = ({ title, image }) => (
    <>
        <Container>
            <Curvedimg src={blog1} width="387" height="258"></Curvedimg>
            <BlogTitle>I was intrigued by Gatsby, so I built my new site with it.</BlogTitle>
        </Container>
        <ComingSoon>Coming soon!</ComingSoon>
    </>
);

export default BlogCard;