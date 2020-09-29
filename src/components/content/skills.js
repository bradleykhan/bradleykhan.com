import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import sr from "@utils/scrollreveal";
import { Subtitle, Heading } from "@styles";

const Container = styled.div`
    visibility: hidden;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1px 1px;
    margin: auto;
    width: 30%;
    min-width: 588px;
`;

const Skill = styled.div`
    background-color: var(--grey);
    height: 26px;
    width: auto;
    padding-left: 10px;
    padding-right: 10px;
    margin: 0;
    justify-content: center;
`;

const Text = styled.p`
    font-family: "Inter";
    font-weight: 400;
    font-size: var(--small);
    color: var(--lightgrey);
    padding: 0;
    line-height: 0px;
`;

const SkillsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 26px 26px;
    gap: 12px 12px;
`;

const Skills = ({ data }) => {
    const stuff = data[0].node;
    const { subtitle, heading, skills } = stuff.frontmatter;

    const scrollReveal = useRef(null);

    useEffect(() => sr.reveal(scrollReveal.current), []);

    return (
        <Container ref={scrollReveal}>
            <Heading>{heading}</Heading>
            <Subtitle>{subtitle}</Subtitle>
            <SkillsGrid>
                {skills.map((skill) => (
                    <Skill><Text>{skill}</Text></Skill>
                ))}
            </SkillsGrid>
        </Container>
    );
}

export default Skills;