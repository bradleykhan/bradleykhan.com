import React from "react";
import { graphql } from "gatsby";
import { GlobalStyle } from "@styles";
import { Layout, Hello, Contact } from "@components";

const Main = ({ data }) => (
  <>
    <GlobalStyle />
    <Layout>
      <Hello data={data.hello.edges}/>
      <Contact data={data.contact.edges}/>
    </Layout>
  </>
);

export const pageQuery = graphql`
  query Content {
    hello: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hello/" } } ) {
      edges {
        node {
          frontmatter {
            title
          }
          excerpt
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