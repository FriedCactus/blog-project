import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import fsdChecker from 'eslint-plugin-absolute-relative-path-checker';
import pluginReact from "eslint-plugin-react";
import eslint from "@eslint/js";
import i18next from 'eslint-plugin-i18next';
import storybook from 'eslint-plugin-storybook';
import reactHooks from 'eslint-plugin-react-hooks';
import {defineConfig, globalIgnores} from "eslint/config";

export default defineConfig([
    globalIgnores(["build", "storybook-static"]),
    {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
        plugins: {js},
        extends: ["js/recommended"],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node
            }
        }
    },
    eslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    pluginReact.configs.flat["jsx-runtime"],
    reactHooks.configs['recommended-latest'],
    tseslint.configs.recommended,
    i18next.configs['flat/recommended'],
    storybook.configs['flat/recommended'],
    {
        files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
        plugins: {
            pluginReact,
            fsdChecker
        },
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                ...globals.browser,
            },
        },
    },
    // Общие правила
    {
        plugins: {
            fsdChecker
        },
        rules: {
            "no-var": "off",
            "prefer-const": ["warn", {
                "destructuring": "all",
                "ignoreReadBeforeAssign": false
            }],
            "react/jsx-props-no-spreading": ['warn'],
            "max-lines": ["error", 300],
            "i18next/no-literal-string": 'warn',
            "@typescript-eslint/no-require-imports": "off",
            '@typescript-eslint/no-explicit-any': 'warn',
            'fsdChecker/fsd-path-checker': 'error'
        },
    },
    // Правила для тестов
    {
        files: [
            "**/src/**/*.test.{ts,tsx}",
            "**/src/**/*.stories.{ts,tsx}"
        ],
        rules: {
            "i18next/no-literal-string": 'off'
        }
    },
]);
