import { ModuleOptions } from "webpack";
import { BuildOptions } from "../types"
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export default function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
    const isDev = options.mode === 'development'

    const scssLoaderWithModules = {

        loader: "css-loader",
        options: {
            modules: {
                localIdentName: isDev ? "[path][name]__[local]--[hash:base64:5]" : '[hash:base64:8]',
            }
        },
    }

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            scssLoaderWithModules,
            "sass-loader",
            "postcss-loader"
        ],
    }

    const cssLoader = {
        test: /\.css$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            "css-loader",
            "postcss-loader"
        ],
    }

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const assetsLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }

    const svgLoader = {
        test: /\.svg$/,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icon: true,
                    svgoConfig: {
                        plugins: [
                            {
                                name: 'convertColors',
                                params: {
                                    currentColor: true
                                }
                            }
                        ]
                    }
                },
            },
        ],
    }

    return [
        scssLoader,
        cssLoader,
        tsLoader,
        assetsLoader,
        svgLoader
    ]
}