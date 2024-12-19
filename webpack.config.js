import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    devServer: {
        static: './src',
        port: 3000,
        open: true,
    },
};
