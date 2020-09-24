import React from "react";
import { graphql } from "gatsby";
import { GlobalStyle, Wave } from "@styles";
import { Layout, Hello, About, Skills } from "@components";

const Main = ({ data }) => (
  <>
    <GlobalStyle />
    <Layout>
      <Wave />
      <Hello data={data.hello.edges}/>
      <About data={data.about.edges}/>
      <Skills data={data.skills.edges}/>
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