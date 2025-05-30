import {RuleSetRule} from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {BuildOptions} from "./types/config";
import {babelLoader} from "./loaders/babelLoader";

export const buildLoaders = ({isDev}: BuildOptions): RuleSetRule[] => {
    const cssLoader = ({
        test: /\.css$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: true,
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]',
                        namedExport: false,
                        exportLocalsConvention: 'as-is',
                    },
                },
            }
        ],
    });

    const svgLoader = ({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    });

    const resourceLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
    };

    return [
        babelLoader(isDev),
        cssLoader,
        svgLoader,
        resourceLoader
    ];
};