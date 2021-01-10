const webpack = require('webpack')
const path = require('path')

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    'postcss-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@/components': path.resolve(__dirname, 'src/components/'),
            '@/redux': path.resolve(__dirname, 'src/redux/'),
            '@/utils': path.resolve(__dirname, 'src/utils/'),
            '@/styles': path.resolve(__dirname, 'src/styles/'),
            '@/src': path.resolve(__dirname, 'src/'),
        },
    },
}

module.exports = config
