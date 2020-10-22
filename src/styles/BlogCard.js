import React from "react";
import styled from "styled-components";
import { Subtitle, Text } from "@styles";
import blog1 from "@images/blog1.jpg";

const Container = styled.div`
    filter: blur(2px);
`;

const BlogTitle = styled(Subtitle)`
    font-size: var(--big);
    width: 387px;
    margin-bottom: 0;
`;

const Curvedimg = styled.img`
    border-radius: 1%;
    margin-top: 20px;
`;

const BlogCard = ({ title, image }) => (
    <Container>
        <Curvedimg src={blog1} width="387" height="258" />
        <BlogTitle>I was intrigued by Gatsby, so I built my new site with it.</BlogTitle>
    </Container>
);

export default BlogCard;