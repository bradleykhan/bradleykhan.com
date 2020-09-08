/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    plugins: [
        `gatsby-plugin-styled-components`,
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                google: {
                    families: ['Roboto Condensed', 'Roboto Slab', 'Source Code Pro']
                }
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdown-content`,
                path: `${__dirname}/src/markdown-content`,
            },
        },
        `gatsby-transformer-remark`,
    ],
}
