
import webpack from 'webpack';
import { WebpackConfiguration } from "webpack-dev-server";

import { buildWebpack } from './config/build/buildWebpack';

type TypeMode = 'production' | 'development'

interface IEnvVariables {
    mode: TypeMode,
    port: number,
}

export default (env: IEnvVariables) => {
    const isDev = env.mode === 'development'

    const config: WebpackConfiguration = buildWebpack()
    return config
}
