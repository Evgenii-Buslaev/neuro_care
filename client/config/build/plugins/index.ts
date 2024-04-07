import { Configuration } from 'webpack'
import { BuildOptions } from "../types"
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import webpack from 'webpack'
export default function buildPlugins(options: BuildOptions): Configuration['plugins'] {
    const isDev = options.mode === 'development'
    const isProd = options.mode === 'production'
    const hasAnalyser = Boolean(options.analyser)
    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({ template: options.paths.html }),
    ]

    if (isDev) {
        plugins.push(new webpack.ProgressPlugin())
    }

    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: isDev ? "css/[name].css" : "css/[name].[contenthash].css",
            chunkFilename: isDev ? "css/[id].css" : "css/[id].[contenthash].css",
        }))
    }
    if (hasAnalyser) {
        plugins.push(new BundleAnalyzerPlugin())
    }
    return plugins
}