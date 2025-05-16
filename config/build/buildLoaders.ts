import {RuleSetRule} from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {BuildOptions} from "./types/config";

// Если потребуется jsx вместо tsx - добавить babel-loader
export const buildLoaders = ({isDev}: BuildOptions): RuleSetRule[] => {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

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
                        exportLocalsConvention: 'camel-case',
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
        use: [
            {
                loader: 'url-loader',
                options: {
                    limit: 8192,
                }
            },
        ],
        type: 'javascript/auto'
    };

    return [
        typescriptLoader,
        cssLoader,
        svgLoader,
        resourceLoader
    ];
};