var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
var TerserWebpackPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: "development",
    target: "web",
    entry: path.resolve(__dirname, "src", "index.tsx"),
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ["ts-loader"],
                exclude: ["/node_modules/"],
            },
            {
                test: /\.s[ac]ss?$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
                exclude: ["/node_modules/"],
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
                exclude: ["/node_modules/"],
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerWebpackPlugin(),
            (minimizer) => new TerserWebpackPlugin().apply(minimizer),
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        alias: {
            Assets: path.join(__dirname, "src", "assets"),
            Components: path.join(__dirname, "src", "components"),
            Screens: path.join(__dirname, "src", "screens"),
            Entity: path.join(__dirname, "src", "entity"),
            Hooks: path.join(__dirname, "src", "hooks"),
            Contexts: path.join(__dirname, "src", "contexts"),
            Constants: path.join(__dirname, "src", "constants"),
            Types: path.join(__dirname, "src", "types"),
            Utils: path.join(__dirname, "src", "utils"),
            Services: path.join(__dirname, "src", "services"),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
            minify: {
                collapseWhitespace: true
            }
        }),
        new MiniCssExtractPlugin(),
    ],
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "dist"),
    },
};
