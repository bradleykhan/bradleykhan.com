import React from "react";
import { graphql } from "gatsby";
import { GlobalStyle } from "@styles";
import { Layout, Hello, Goodbye } from "@components";

const Main = () => (
    <>
        <GlobalStyle />
        <Layout>
            <Hello />
            <Goodbye />
        </Layout>
    </>
);

// export const query = graphql`
//     # query goes here
// `;

export default Main;