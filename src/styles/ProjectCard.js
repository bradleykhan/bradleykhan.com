import React from "react";
import styled from "styled-components";
import { subtitle, text } from "@styles";

const Container = styled.div`
    margin-top: 20px;
    background-color: var(--grey);
    border-radius: 5px;
    width: 300px;
    height: 375px;
    display: grid;
    grid-template-columns: 1fr 9fr 1fr;
    grid-auto-rows: min-content;
`;

const ProjectCompany = styled.p`
    ${text};
    letter-spacing: 3px;
    font-size: var(--smol);
    color: var(--white);
    grid-column: 2;
`;

const MainText = styled.h2`
    ${subtitle};
    font-size: var(--medium);
    margin-bottom: 0;
    grid-column: 2;
    line-height: 30px;
`;

const CompanyLogo = styled.img`
    grid-column: 2;
    margin-top: 30px;
`;

const SubText = styled.p`
    ${text};
    grid-column: 2;
    line-height: 20px;
    font-size: var(--smol);
`;

const ProjectCard = ({ data: { frontmatter: { company, logo, maintext }, excerpt } }) => (
    <Container>
        <CompanyLogo src={logo} />
        <ProjectCompany>{company}</ProjectCompany>
        <MainText>{maintext}</MainText>
        <SubText>{excerpt}</SubText>
    </Container>
);

export default ProjectCard;