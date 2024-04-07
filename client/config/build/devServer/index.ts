import type { Configuration as DevServerConfiguratuion } from "webpack-dev-server"
import { BuildOptions } from "../types"
export default function buildDevServer(options: BuildOptions): DevServerConfiguratuion {
    return {
        port: options.port ?? 3000,
        open: true,
        historyApiFallback: true,
    }
}