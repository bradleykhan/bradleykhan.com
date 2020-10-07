import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { GlobalStyle } from "@styles";
import { Layout, Hello, About, Skills } from "@components";

const Projects = styled.div`
  height: 35vh;
  grid-column: 2 / span 3;
`;

const Blog = styled.div`
  height: 25vh;
  grid-column: 2 / span 3;
`;

const Content = styled.div`
    grid-column: 2;
`;

const Main = ({ data }) => (
  <>
    <GlobalStyle />
    <Layout>
      <Content>
        <Hello data={data.hello.edges}/>
        <About data={data.about.edges}/>
        <Skills data={data.skills.edges}/>
      </Content>
      <Projects />
      <Blog />
    </Layout>
  </>
);

export const pageQuery = graphql`
  query Content {
    hello: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hello/" } } ) {
      edges {
        node {
          frontmatter {
            heading
            title
          }
          excerpt
        }
      }
    }
    about: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } } ) {
      edges {
        node {
          frontmatter {
            heading
            subtitle
          }
          excerpt
        }
      }
    }
    skills: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/skills/" } } ) {
      edges {
        node {
          frontmatter {
            heading
            subtitle
            skills
          }
        }
      }
    }
    contact: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/contact/" } } ) {
      edges {
        node {
          frontmatter { 
            title
            buttonText
          }
          excerpt
        }
      }
    }
  }
`

export default Main;