// const webpack = require('webpack')
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

// const config = {
//     entry: './src/index.js',
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'bundle.js',
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.(js|jsx)$/,
//                 use: 'babel-loader',
//                 exclude: /node_modules/,
//             },
//             {
//                 test: /\.css$/,
//                 use: [
//                     'style-loader',
//                     {
//                         loader: 'css-loader',
//                         options: {
//                             importLoaders: 1,
//                         },
//                     },
//                     'postcss-loader',
//                 ],
//             },
//         ],
//     },
//     resolve: {
//         extensions: ['.js', '.jsx'],
//         alias: {
//             '@/components': path.resolve(__dirname, 'src/components/'),
//             '@/redux': path.resolve(__dirname, 'src/redux/'),
//             '@/utils': path.resolve(__dirname, 'src/utils/'),
//             '@/styles': path.resolve(__dirname, 'src/styles/'),
//             '@/src': path.resolve(__dirname, 'src/'),
//             '@/views': path.resolve(__dirname, 'src/views/'),
//         },
//     },
//     plugins: [
//         new CopyPlugin({
//             patterns: [{ from: './public/' }],
//         }),
//     ],
//     devServer: {
//         contentBase: path.join(__dirname, 'dist'),
//         port: 3000,
//     },
// }

// module.exports = config

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const mode = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
const isDevMode = mode !== 'production'

module.exports = {
    mode,
    entry: {
        main: './src/index.js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@/components': path.resolve(__dirname, 'src/components/'),
            '@/redux': path.resolve(__dirname, 'src/redux/'),
            '@/utils': path.resolve(__dirname, 'src/utils/'),
            '@/styles': path.resolve(__dirname, 'src/styles/'),
            '@/src': path.resolve(__dirname, 'src/'),
            '@/views': path.resolve(__dirname, 'src/views/'),
        },
    },
    output: {
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: [/node_modules/],
                use: [{ loader: 'babel-loader' }],
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: isDevMode,
                        },
                    },
                    'postcss-loader',
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles-[contenthash].css',
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.template.html',
        }),
        new CopyPlugin({
            patterns: [{ from: './public/' }],
        }),
    ],
    devServer: {
        port: 8080,
        publicPath: '/',
        historyApiFallback: { index: '/' },
    },
}
