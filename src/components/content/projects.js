import React, { useRef, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components";
import sr from "@utils/scrollreveal";
import { ProjectCard } from "@styles";

const Div = styled.div`
    height: 100vh;
    grid-column: 2 / span 3;
    display: grid;
`;

const Container = styled.div`
    align-self: center;
`;

const Projects = ({ data }) => {
    const stuff = data[0].node;
    const { heading } = stuff.frontmatter;

    const scrollReveal = useRef(null);

    useEffect(() => sr.reveal(scrollReveal.current), []);

    const projectsQuery = useStaticQuery(graphql`
        query MyQuery {
            allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/work-projects/"}}) {
            edges {
                node {
                    frontmatter {
                        company
                        logo
                    }
                    excerpt
                }
            }
        }
    }
    `);

    const projects = projectsQuery.allMarkdownRemark.edges;

    return (
        <Div ref={scrollReveal}>
            <Container>
                {projects.map((project) => (
                    <ProjectCard data={project.node}/>
                ))}
            </Container>
        </Div>
    );
}

export default Projects;