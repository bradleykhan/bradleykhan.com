import React, { useRef, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components";
import sr from "@utils/scrollreveal";
import { Heading, ProjectCard } from "@styles";

const Div = styled.div`
    height: 100vh;
    grid-column: 2 / span 3;
    display: grid;
`;

const Container = styled.div`
    align-self: center;
`;

const ProjectsContainer = styled.div`
    margin-top: 20px;
    display: flex;
    gap: 30px;
`;

const Projects = ({ data }) => {
    const stuff = data[0].node;
    const { heading } = stuff.frontmatter;

    const scrollReveal = useRef(null);

    useEffect(() => sr.reveal(scrollReveal.current), []);

    const projectsQuery = useStaticQuery(graphql`
        query MyQuery {
            allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/work-projects/"}}, sort: {order: DESC, fields: [frontmatter___date]}) {
            edges {
                node {
                frontmatter {
                    company
                    logo
                    maintext
                }
                excerpt
                }
            }
            }
        }
    `);

    const projects = projectsQuery.allMarkdownRemark.edges;

    return (
        <Div id="projects" ref={scrollReveal}>
            <Container>
                <Heading>{heading}</Heading>
                <ProjectsContainer>
                    {projects.map((project) => (
                        <ProjectCard key={project.node.frontmatter.company} data={project.node} />
                    ))}
                </ProjectsContainer>
            </Container>
        </Div>
    );
}

export default Projects;