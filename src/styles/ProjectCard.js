import React from "react";
import styled from "styled-components";
import { Subtitle, Text } from "@styles";

const Container = styled.div`
    background-color: var(--grey);
    border-radius: 5px;
    width: 300px;
    height: 375px;
`;

const ProjectCompany = styled(Text)`
    letter-spacing: 3px;
    color: var(--white);
`;

const MainText = styled(Subtitle)`
    font-size: var(--big);
    margin-bottom: 0;
`;

const ProjectCard = ({ data: { frontmatter: { company, logo }, excerpt } }) => (
    <Container>
        <img src={logo} />
        <ProjectCompany>{company}</ProjectCompany>
        <MainText>{excerpt}</MainText>
    </Container>
);

export default ProjectCard;