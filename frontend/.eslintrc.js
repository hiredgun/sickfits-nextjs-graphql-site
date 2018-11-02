/* eslint-disable */
const path = require('path');
module.exports = {
    parser: 'babel-eslint',
    env: {
        browser: true,
    },
    extends: ['airbnb', 'plugin:react/recommended', 'prettier', 'prettier/react'],
    plugins: ['react', 'prettier'],
    rules: {
        'prettier/prettier': 'error',
        'prefer-destructuring': ['warn'],
        'react/destructuring-assignment': ['warn'],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'react/prop-types': ['warn'],
        'jsx-a11y/anchor-is-valid': ['warn'],
    },
    settings: {
        'import/resolver': {
            webpack: {
                config: {
                    resolve: {
                        alias: {
                            lib: path.resolve(__dirname, 'lib/'),
                            components: path.resolve(__dirname, 'components/'),
                        },
                    },
                },
            },
        },
    },
};
