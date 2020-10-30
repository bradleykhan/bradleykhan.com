import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import sr from "@utils/scrollreveal";
import { Subtitle, Heading, Text } from "@styles";

const Div = styled.div`     
    grid-column: 2;
    height: 70vh;
    display: grid;
`;

const Container = styled.div`
    align-self: center;
`;

const Skill = styled.div`
    background-color: var(--grey);
    border-radius: 5px;
    height: 26px;
    width: fit-content;
    padding-left: 10px;
    padding-right: 10px;
    margin: 0;
    justify-content: center;
`;

const SkillsText = styled.p`
    font-family: "Inter";
    font-weight: 400;
    font-size: var(--small);
    color: var(--lightgrey);
    line-height: 0px;
`;

const SkillsGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-basis: min-content;
    gap: 12px 12px;
`;

const Skills = ({ data }) => {
    const stuff = data[0].node;
    const { subtitle, heading, skills } = stuff.frontmatter;
    const text = stuff.excerpt;

    const scrollReveal = useRef(null);

    useEffect(() => sr.reveal(scrollReveal.current), []);

    return (
        <Div id="skills" ref={scrollReveal}>
            <Container>
                <Heading>{heading}</Heading>
                <Subtitle>{subtitle}</Subtitle>
                <SkillsGrid>
                    {skills.map((skill) => (
                        <Skill key={skill}><SkillsText>{skill}</SkillsText></Skill>
                    ))}
                </SkillsGrid>
            </Container>
        </Div>
    );
}

export default Skills;