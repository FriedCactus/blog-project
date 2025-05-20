import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import eslint from "@eslint/js";
import i18next from 'eslint-plugin-i18next';
import {defineConfig, globalIgnores} from "eslint/config";

export default defineConfig([
    globalIgnores(["build"]),
    {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], plugins: {js}, extends: ["js/recommended"]},
    eslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    pluginReact.configs.flat["jsx-runtime"],
    tseslint.configs.recommended,
    i18next.configs['flat/recommended'],
    {

        files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
        plugins: {
            pluginReact,
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
        rules: {
            "no-var": "off",
            "prefer-const": ["warn", {
                "destructuring": "all",
                "ignoreReadBeforeAssign": false
            }],
            "react/jsx-props-no-spreading": ['warn'],
            "max-lines": ["error", 300],
            "i18next/no-literal-string": 'warn'
        },
    },
    // Правила для тестов
    {
        files: ["**/src/**/*.test.{ts,tsx}"],
        rules: {
            "i18next/no-literal-string": 'off'
        }
    },
]);
