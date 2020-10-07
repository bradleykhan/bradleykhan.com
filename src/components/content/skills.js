import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import sr from "@utils/scrollreveal";
import { Subtitle, Heading } from "@styles";

const Div = styled.div`
    grid-column: 2;
    height: 75vh;
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

const Text = styled.p`
    font-family: "Inter";
    font-weight: 400;
    font-size: var(--small);
    color: var(--lightgrey);
    padding: 0;
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

    const scrollReveal = useRef(null);

    useEffect(() => sr.reveal(scrollReveal.current), []);

    return (
        <Div ref={scrollReveal}>
            <Container>
                <Heading>{heading}</Heading>
                <Subtitle>{subtitle}</Subtitle>
                <SkillsGrid>
                    {skills.map((skill) => (
                        <Skill><Text>{skill}</Text></Skill>
                    ))}
                </SkillsGrid>
            </Container>
        </Div>
    );
}

export default Skills;

/*


const SkillsGrid = styled.div`
    display: inline-grid;
    grid-template-columns: repeat(12, min-content);
    grid-template-rows: 26px 26px;
    gap: 12px 12px;
`;
*/