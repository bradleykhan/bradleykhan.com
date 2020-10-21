import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { GlobalStyle } from "@styles";
import { Layout, Hello, Role, About, Skills, Projects, Blog } from "@components";

const Content = styled.div`
    grid-column: 2;
`;

const Main = ({ data }) => (
  <>
    <GlobalStyle />
    <Layout>
      <Content>
        <Hello data={data.hello.edges}/>
      </Content>
      <Role data={data.role.edges}/>
      <Content>
        <About data={data.about.edges}/>
        <Skills data={data.skills.edges}/>
      </Content>
      <Projects data={data.projects.edges}/>
      <Blog data={data.blog.edges}/>
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
    role: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/role/" } } ) {
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
          excerpt
        }
      }
    }
    projects: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/projects/" } } ) {
      edges {
        node {
          frontmatter {
            heading
          }
        }
      }
    }
    blog: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/blog/" } } ) {
      edges {
        node {
          frontmatter {
            heading
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