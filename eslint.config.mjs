import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import eslint from "@eslint/js";
import {defineConfig, globalIgnores} from "eslint/config";

export default defineConfig([
    globalIgnores(["build"]),
    {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], plugins: {js}, extends: ["js/recommended"]},
    eslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    pluginReact.configs.flat["jsx-runtime"],
    tseslint.configs.recommended,
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
        rules: {
            "no-var": "off",
            "prefer-const": ["warn", {
                "destructuring": "all",
                "ignoreReadBeforeAssign": false
            }],
            "react/jsx-props-no-spreading": ['warn']
        }
    },
]);
