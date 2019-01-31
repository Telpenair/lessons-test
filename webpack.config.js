const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [ 'babel-loader' ],
            },
            {
                test: /\.(scss|css)$/,
                loader: 'style-loader!css-loader!sass-loader',
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [ 'babel-loader', 'eslint-loader' ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                          name: 'assets/[name].[ext]'
                        }
                    }
                ]
            }
        ],
    },
    resolve: {
        extensions: [ '*', '.js', '.jsx' ],
    },
    output: {
        // eslint-disable-next-line no-undef
        path: path.resolve('public'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    plugins: [ 
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: path.resolve('public'),
        publicPath: '/',
        hot: true,
    },
};
