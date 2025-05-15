import {BuildOptions} from "./types/config";
import {Configuration} from 'webpack';
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";
import {buildOptimization} from "./buildOptimization";

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
    const {mode, paths, isDev} = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            path: paths.output,
            filename: '[name].[contenthash].js',
            clean: true
        },
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(),
        optimization: buildOptimization
    };
};