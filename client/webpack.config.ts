import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from "html-webpack-plugin";

type TypeMode = 'production' | 'development'

interface IEnvVariables {
    mode: TypeMode,
}

export default (env: IEnvVariables) => {
    const config: webpack.Configuration = {
        mode: env.mode ?? 'development',
        entry: {
            neuroCare: path.resolve(__dirname, 'src', 'index.ts')
        },
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name].[contenthash].js',
            clean: true,
        },
        plugins: [
            new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
            new webpack.ProgressPlugin()
        ],
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
    }
    return config
}
