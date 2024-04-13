import { DefinePlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import webpack from 'webpack';
export default function buildPlugins(options) {
    var isDev = options.mode === 'development';
    var isProd = options.mode === 'production';
    var hasAnalyser = Boolean(options.analyser);
    var plugins = [
        new HtmlWebpackPlugin({ template: options.paths.html }),
        new DefinePlugin({
            __PLATFORM__: JSON.stringify(options.platform),
            __ENV__: JSON.stringify(options.mode)
        }),
    ];
    if (isDev) {
        plugins.push(new webpack.ProgressPlugin());
    }
    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: isDev ? "css/[name].css" : "css/[name].[contenthash].css",
            chunkFilename: isDev ? "css/[id].css" : "css/[id].[contenthash].css",
        }));
    }
    if (hasAnalyser) {
        plugins.push(new BundleAnalyzerPlugin());
    }
    return plugins;
}
