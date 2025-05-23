import type {Config} from 'jest';
import path from "path";

const config: Config = {
    clearMocks: true,
    testEnvironment: "jsdom",
    testMatch: [
        "<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)",
    ],
    globals: {
        "__IS_DEV__": true
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
        '\\.svg': path.resolve(__dirname, 'emptySvgComponent'),
        '\\.(css|less)$': 'identity-obj-proxy',
    },
};

export default config;
