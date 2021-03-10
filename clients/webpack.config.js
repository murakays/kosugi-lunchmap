const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    context: path.join(__dirname, 'src'),
    entry: {
      index: './index.tsx'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: './',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ],
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
        modules: ['node_modules', path.resolve(__dirname, 'app')],
        extensions: ['.ts', '.tsx', '.js', 'jsx'],
    },
    target: ["web", "es5"],
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',
        }),
    ],
};