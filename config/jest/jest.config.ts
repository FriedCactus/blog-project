import type {Config} from 'jest';
import path from "path";

const config: Config = {
    clearMocks: true,
    testEnvironment: "jsdom",
    testMatch: [
        "<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)",
    ],
    coveragePathIgnorePatterns: [
        "\\\\node_modules\\\\"
    ],
    moduleDirectories: [
        "node_modules"
    ],
    setupFilesAfterEnv: ['<rootDir>/config/jest/jest.setup.ts'],
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
        '\\.svg': path.resolve(__dirname, 'emptySvgComponent'),
        '\\.(css|less)$': 'identity-obj-proxy',
    },
};

export default config;
