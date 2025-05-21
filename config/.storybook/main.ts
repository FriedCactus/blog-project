import type {StorybookConfig} from '@storybook/react-webpack5';
import {RuleSetRule} from 'webpack';
import path from "path";


const config: StorybookConfig = {
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
    "framework": {
        "name": "@storybook/react-webpack5",
        "options": {}
    },
    webpackFinal: async (config) => {
        config.resolve.modules = [
            ...(config.resolve.modules || []),
            path.resolve(__dirname, '../../src'),
        ];
        config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
            if (/svg/.test(rule.test as string)) {
                return {...rule, exclude: /\.svg$/i};
            }

            return rule;
        });
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
};
export default config;