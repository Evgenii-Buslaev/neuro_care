import { WebpackConfiguration } from "webpack-dev-server";
import buildDevServer from "./devServer";
import { buildLoaders } from "./loaders";
import buildPlugins from "./plugins";
import buildResolvers from "./resolvers";

export const buildWebpack = (): WebpackConfiguration => {
    return {
        mode: env.mode ?? 'development',
        entry: {
            neuroCare: path.resolve(__dirname, 'src', 'index.tsx')
        },
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name].[contenthash].js',
            clean: true,
        },
        plugins: buildPlugins(),
        module: {
            rules: buildLoaders()
        },
        resolve: buildResolvers(),
        devtool: isDev && 'inline-source-map',
        devServer: isDev ? buildDevServer() : undefined,
    }
}