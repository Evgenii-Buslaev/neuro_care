import path from 'path'
import { WebpackConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types";

import buildDevServer from "./devServer";
import buildLoaders from "./loaders";
import buildPlugins from "./plugins";
import buildResolvers from "./resolvers";

export const buildWebpack = (options: BuildOptions): WebpackConfiguration => {
    const isDev = options.mode === 'development'
    return {
        mode: options.mode ?? 'development',
        entry: options.paths.entry,
        output: {
            path: options.paths.output,
            filename: '[name].[contenthash].js',
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(options),
        devtool: isDev && 'inline-source-map',
        devServer: isDev ? buildDevServer(options) : undefined,
    }
}