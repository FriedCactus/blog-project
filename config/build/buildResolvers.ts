import {ResolveOptions} from "webpack";
import {BuildOptions} from "./types/config";

export const buildResolvers = ({paths}: BuildOptions): ResolveOptions => ({
    preferAbsolute: true,
    extensions: ['.tsx', '.ts', '.js'],
    // В каких папках искать модули при импорте
    modules: [paths.src, 'node_modules'],
    // Определяет главный файл в директории, убирает надобность экспорта index.ts
    mainFiles: ['index'],
});