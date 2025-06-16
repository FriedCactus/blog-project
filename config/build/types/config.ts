export type BuildMode = 'development' | 'production';

export interface BuildPaths {
    entry: string,
    output: string,
    html: string,
    src: string,
    locales: {
        from: string,
        to: string
    }
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
    apiUrl: string;
    project: 'frontend' | 'jest' | 'storybook';
}

export interface BuildEnv {
    port?: number;
    mode?: BuildMode;
    apiUrl?: string;
}