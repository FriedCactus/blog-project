import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';

export const definePlugin = (isDev: boolean) => (
    new webpack.DefinePlugin({
        "__IS_DEV__": JSON.stringify(isDev)
    })
);

export const buildPlugins = ({paths, isDev}: BuildOptions): webpack.WebpackPluginInstance[] => {
    const plugins = [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css",
        }),
        definePlugin(isDev)
    ];

    if (isDev) plugins.push(
        new BundleAnalyzerPlugin({
            openAnalyzer: false
        })
    );

    return plugins;
};

