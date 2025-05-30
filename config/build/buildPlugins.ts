import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export const definePlugin = (isDev: boolean, apiUrl: string, project: string) => (
    new webpack.DefinePlugin({
        "__IS_DEV__": JSON.stringify(isDev),
        "__API__": JSON.stringify(apiUrl),
        "__PROJECT__": JSON.stringify(project)
    })
);

export const buildPlugins = ({paths, isDev, apiUrl, project}: BuildOptions): webpack.WebpackPluginInstance[] => {
    const plugins = [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css",
        }),
        definePlugin(isDev, apiUrl, project),
        // Для анализа бандла на проде
        // new BundleAnalyzerPlugin({
        //     openAnalyzer: false
        // })
    ];

    if (isDev) plugins.push(
        new BundleAnalyzerPlugin({
            openAnalyzer: false
        })
    );

    if (isDev) plugins.push(
        new ReactRefreshWebpackPlugin()
    );

    return plugins;
};

