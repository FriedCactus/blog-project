import type {BuildOptions} from "../types/config";

export const babelLoader = (isDev: BuildOptions["isDev"]) => (
    {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env'],
                plugins: [isDev && 'react-refresh/babel'].filter(Boolean),
            }
        }

    }
);