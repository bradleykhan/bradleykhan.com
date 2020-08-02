const path = require('path');

// https://www.gatsbyjs.org/docs/node-apis/#onCreateWebpackConfig
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    // Libraries that don't support SSR (expect window to be defined)
    if (stage === 'build-html') {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /scrollreveal/,
                        use: loaders.null(),
                    },
                    {
                        test: /animejs/,
                        use: loaders.null(),
                    },
                ],
            },
        });
    }

    actions.setWebpackConfig({
        resolve: {
            alias: {
                '@components': path.resolve(__dirname, 'src/components'),
                '@config': path.resolve(__dirname, 'src/config'),
                '@fonts': path.resolve(__dirname, 'src/fonts'),
                '@images': path.resolve(__dirname, 'src/images'),
                '@pages': path.resolve(__dirname, 'src/pages'),
                '@styles': path.resolve(__dirname, 'src/styles'),
                '@utils': path.resolve(__dirname, 'src/utils'),
            },
        },
    });
};