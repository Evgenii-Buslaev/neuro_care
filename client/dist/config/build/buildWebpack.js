import buildDevServer from "./devServer";
import buildLoaders from "./loaders";
import buildPlugins from "./plugins";
import buildResolvers from "./resolvers";
export var buildWebpack = function (options) {
    var _a;
    var isDev = options.mode === 'development';
    return {
        mode: (_a = options.mode) !== null && _a !== void 0 ? _a : 'development',
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
    };
};
