const path = require('path');

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';
module.exports = {
    mode: mode,
    entry: path.join(__dirname, '/src/index.ts'),
    output: {
        filename: 'index.js',
        path: path.join(__dirname, '/dist/')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
};