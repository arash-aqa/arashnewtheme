const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");


const DIR = path.resolve(__dirname, '')
const SRC_DIR = path.resolve(__dirname, 'src')

const plugins = () => [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
        filename: 'css/[name].css'
    }),
    new CopyPlugin({
        patterns: [
            {from: "src/assets/images", to: "assets/images"},
        ],
    }),

]
const entry = {
    'homepage-style': SRC_DIR + '/homepage-style.js',
}
const output = {
    path: DIR + '/build',
    filename: 'js/[name].js',
}
module.exports = {
    externals: {
        jquery: 'jQuery',
    },
    plugins: plugins(),

    entry: entry,
    output: output,


    module: {

        rules: [
            {
                test: /\.(woff2|woff|ttf|eot|svg|otf)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name][ext]',
                },
            },{
                test: /\.(jpg|jpeg|png|svg)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[name][ext]',
                },
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            }


        ],
    },
}

