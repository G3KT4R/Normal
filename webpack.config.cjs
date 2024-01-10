const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlInlineCSSWebpackPlugin = require('html-inline-css-webpack-plugin').default;
const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'bundle.js',
        clean: true,
    },
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './src/index.html',
        }),
        new HtmlInlineCSSWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            }
        ]
    }
};