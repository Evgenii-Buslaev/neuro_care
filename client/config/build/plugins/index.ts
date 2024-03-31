import { Configuration } from 'webpack'
import { BuildOptions } from "../types"
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'webpack'
export default function buildPlugins(options: BuildOptions): Configuration['plugins'] {
    const isDev = options.mode === 'development'
    const isProp = options.mode === 'production'

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
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
    return plugins.filter(Boolean)
}