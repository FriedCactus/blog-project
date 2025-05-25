import type {StorybookConfig} from '@storybook/react-webpack5';
import {RuleSetRule} from 'webpack';
import path from "path";
import {definePlugin} from "../build/buildPlugins";

const config: StorybookConfig = {
    "framework": {
        "name": "@storybook/react-webpack5",
        "options": {}
    },
    "stories": [
        "../../src/**/*.mdx",
        "../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-webpack5-compiler-swc",
        "@storybook/addon-essentials",
        "@storybook/addon-onboarding",
        "@storybook/addon-interactions",
        '@storybook/addon-themes',
        '@chromatic-com/storybook'
    ],
    features: {
        viewportStoryGlobals: true,
    },
    webpackFinal: async (config) => {
        if (config.resolve) {
            config.resolve.modules = [
                ...(config.resolve.modules || []),
                path.resolve(__dirname, '../../src'),
            ];
        }

        if (config.module) {
            // Обработка svg
            config.module.rules = config.module.rules?.map((rule: RuleSetRule) => {
                if (/svg/.test(rule.test as string)) {
                    return {...rule, exclude: /\.svg$/i};
                }

                return rule;
            });

            config.module.rules?.push({
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ['@svgr/webpack'],
            });
        }

        // Определение глобальных переменных
        config.plugins?.push(
            definePlugin(true)
        );

        return config;
    },
};
export default config;