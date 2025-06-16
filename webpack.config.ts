import path from 'path';
import webpack from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildMode, BuildPaths} from "./config/build/types/config";

export default (env: BuildEnv) => {
    const mode: BuildMode = env.mode ?? 'development';
    const isDev = mode === 'development';
    const PORT = env.port ?? 3000;
    const apiUrl = env.apiUrl ?? 'http://localhost:8000';

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        locales: {
            from: path.resolve(__dirname, 'public', 'locales'),
            to: path.resolve(__dirname, 'build', 'locales'),
        }
    };

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        apiUrl,
        port: PORT,
        project: 'frontend'
    });

    return config;
};