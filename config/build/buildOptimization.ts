import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import {Configuration} from "webpack";

export const buildOptimization: Configuration['optimization'] = {
    minimizer: [
        '...',
        new CssMinimizerPlugin(),
    ]
};