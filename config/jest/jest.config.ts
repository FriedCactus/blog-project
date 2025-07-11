import type {Config} from 'jest';
import path from "path";

const config: Config = {
    clearMocks: true,
    testEnvironment: "jsdom",
    testMatch: [
        "<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)",
    ],
    globals: {
        "__IS_DEV__": true,
        "__API__": "http://localhost:8000",
        "__PROJECT__": 'jest'
    },
    coveragePathIgnorePatterns: [
        "\\\\node_modules\\\\"
    ],
    moduleDirectories: [
        "node_modules"
    ],
    setupFilesAfterEnv: [path.resolve(__dirname, 'jest.setup.ts')],
    rootDir: '../../',
    modulePaths: ['<rootDir>src/'],
    moduleFileExtensions: [
        "js",
        "mjs",
        "cjs",
        "jsx",
        "ts",
        "tsx",
        "json",
        "node"
    ],
    moduleNameMapper: {
        '\\.(svg|jpe?g|png)': path.resolve(__dirname, 'emptyImageComponent'),
        '\\.(css|less)$': 'identity-obj-proxy',
    },
    "reporters": [
        "default",
        ["./node_modules/jest-html-reporter", {
            "pageTitle": "Jest report",
            outputPath: './reports/jest-report.html',
            includeFailureMsg: true,
            includeSuiteFailure: true
        }]
    ]
};

export default config;
