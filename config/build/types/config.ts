export type BuildMode = 'development' | 'production';

export interface BuildPaths {
    entry: string,
    output: string,
    html: string,
    src: string
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
}

export interface BuildEnv {
    port?: number;
    mode?: BuildMode;
}