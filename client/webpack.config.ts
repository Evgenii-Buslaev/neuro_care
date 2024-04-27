import { WebpackConfiguration } from "webpack-dev-server";

import { buildWebpack } from './config/build/buildWebpack';
import { BuildPaths, TypeBuildMode, TypeBuildPlatform } from './config/build/types';
import path from 'path'


interface IEnvVariables {
    port: number,
    mode: TypeBuildMode,
    analyser?: boolean,
    platform: TypeBuildPlatform
}

export default (env: IEnvVariables) => {
    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        public: path.resolve(__dirname, 'public'),
        src: path.resolve(__dirname, 'src')
    }
    const config: WebpackConfiguration = buildWebpack({
        port: env.port ?? 3000,
        mode: env.mode ?? 'development',
        paths,
        platform: env.platform ?? 'desktop',
        analyser: env.analyser
    })
    return config
}
